<?php

namespace App\Events\Dashboard\Chat;

use App\Http\Resources\Dashboard\Chat\MessageResource;
use App\Models\Message;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SocketMessage implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(
        public Message $message
    ) {}

    public function broadcastWith(): array
    {
        return [
            'message' => new MessageResource($this->message)
        ];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        $channels = [];
        $m = $this->message;

        if ($m->group_id) {
            $channels[] = new PrivateChannel("message.group." . $m->group_id);
        } else if ($m->receiver_id && $m->sender_id) {
            $channels[] = new PrivateChannel(
                "message.user." .
                    collect([$m->sender_id, $m->receiver_id])->sort()->implode('-')
            );
        }

        return $channels;
    }
}
