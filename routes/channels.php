<?php

use App\Http\Resources\User\UserPusherResource;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('online', function ($user) {
    return $user ? new UserPusherResource($user) : null;
});
