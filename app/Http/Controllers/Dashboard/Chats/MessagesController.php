<?php

namespace App\Http\Controllers\Dashboard\Chats;

use App\Events\Dashboard\Chat\SocketMessage;
use App\Facade\Inertia;
use App\Facade\Storage;
use App\Http\Requests\Dashboard\Chat\MessageRequest;
use App\Http\Resources\Dashboard\Chat\MessageResource;
use App\Models\Conversation;
use App\Models\Group;
use App\Models\Message;
use App\Models\MessageAttachment;
use App\Models\User;
use App\Services\Inertia\Enums\RenderLayout;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class MessagesController extends ChatController
{

    /**
     * Load messages for 1 to 1
     * 
     * @param int $user_id
     * @return Response
     */
    public function loadOneToOneMessages(int $user_id): Response
    {
        $currentUser = Auth::id();
        $user = User::findOrFail($user_id);

        $messages = Message::where(function ($query) use ($currentUser, $user_id) {
            $query->where('sender_id', $currentUser)
                ->where('receiver_id', $user_id);
        })->orWhere(function ($query) use ($currentUser, $user_id) {
            $query->where('sender_id', $user_id)
                ->where('receiver_id', $currentUser);
        })
            ->latest()
            ->paginate(10);

        return Inertia::render(
            RenderLayout::dashboard,
            'chat',
            $this->translateWords,
            [
                'selectedConversationMessages' => MessageResource::collection($messages),
                'selectedUser' => User::toChatArray($user)
            ]
        );
    }

    /**
     * Load group messages.
     * 
     * @param int $group_id
     * @return Response
     */
    public function loadGroupMessages(int $group_id): Response
    {
        $messages = Message::where('group_id', $group_id)
            ->latest()
            ->paginate(10);
        $group = Group::findOrFail($group_id);

        return Inertia::render(
            RenderLayout::dashboard,
            'chat',
            $this->translateWords,
            [
                'selectedConversationMessages' => MessageResource::collection($messages),
                'selectedUser' => Group::toChatArray($group)
            ]
        );
    }

    /**
     * Load old messages.
     * 
     * @param Message $message
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function loadOldMessages(Message $message): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        if ($message->group_id) {
            $message = Message::where('created_at', '<', $message->create_at)
                ->where('group_id', $message->group_id)
                ->latest()
                ->paginate(10);
        } else {
            $message = Message::where('created_at', '<', $message->created_at)
                ->where(function ($query) use ($message) {
                    $query->where('sender_id', $message->sender_id)
                        ->where('receiver_id', $message->receiver_id)
                        ->orWhere('sender_id', $message->receiver_id)
                        ->where('receiver_id', $message->sender_id);
                })
                ->latest()
                ->paginate(10);
        }
        return MessageResource::collection($message);
    }


    /**
     * Send message
     * 
     * @param MessageRequest $request
     * @return MessageResource
     */
    public function store(MessageRequest $request): MessageResource
    {
        $sender_id = Auth::id();
        $receiver_id = $request->get('receiver_id', null);
        $group_id = $request->get('group_id', null);
        $files = $request->get('attachments', null);
        $attachmentsPath = Storage::getPath(MessageAttachment::class);

        # Check if there any attachments coming from front-end.
        if (is_array($files) && count($files) <= 0) {
            $files = null;
        }

        # Create message
        $message = Message::create([
            'message' => $request->message,
            'sender_id' => $sender_id,
            'receiver_id' => $receiver_id,
            'group_id' => $group_id,
        ]);;

        # Attachments
        if ($files) {
            $message->attachments()->createMany(
                collect($files)->map(function ($file) use ($attachmentsPath, $message) {
                    return [
                        'name' => $file->getClientOriginalName(),
                        'mime' => $file->getClientMimeType(),
                        'size' => $file->getSize(),
                        'path' => Storage::store($attachmentsPath, $file),
                    ];
                })->toArray()
            );
        }

        # Check if message sent to group.
        if ($group_id) {
            Group::updateOrInsert(
                ['id' => $group_id],
                ['last_message_id' => $message->id]
            );
        }

        # Check if message sent to user 1 to 1.
        else if ($receiver_id) {
            $conversation = Conversation::where(function ($query) use ($sender_id, $receiver_id) {
                $query->where('user_id1', $sender_id)
                    ->where('user_id2', $receiver_id);
            })->orWhere(function ($query) use ($sender_id, $receiver_id) {
                $query->where('user_id2', $sender_id)
                    ->where('user_id1', $receiver_id);
            })->first();

            if ($conversation) {
                $conversation->update(['last_message_id' => $message->id]);
            } else {
                Conversation::create([
                    'user_id1' => $sender_id,
                    'user_id2' => $receiver_id,
                    'last_message_id' => $message->id
                ]);
            }
        }

        # Broadcast message to other users.
        SocketMessage::dispatch($message);

        return new MessageResource($message);
    }

    /**
     * delete message.
     * 
     * @param Message $message
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function destroy(Message $message): \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
    {
        $currentUserId = Auth::id();
        if ($message->sender_id != $currentUserId) {
            return response()->json(['message' => "Forbidden", 403]);
        }

        $message->delete();
        return response(['message' => "Deleted Successfully", 204]);
    }
}
