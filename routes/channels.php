<?php

use App\Http\Resources\User\UserPusherResource;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;


Broadcast::channel('online', function (User $user) {
    return $user ? new UserPusherResource($user) : null;
});

Broadcast::channel('message.user.{userId1}-{userId2}', function (User $user, int $userId1, int $userId2) {
    return $user && ($user->id == $userId1 || $user->id == $userId2) ? $user : null;
});

Broadcast::channel('message.group.{groupId}', function (User $user) {
    return $user->groups->contains('id', $user->id) ? $user : null;
});
