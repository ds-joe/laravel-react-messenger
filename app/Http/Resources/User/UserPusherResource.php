<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserPusherResource extends JsonResource
{
    // protected $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'full_name' => $this->full_name,
            'email' => $this->email,
            'phone' => $this->phone,
            'avatar' => $this->avatar,
            'last_seen' => $this->last_seen,
            'is_admin' => $this->is_admin,
            'blocked_at' => $this->blocked_at,
            'created_at' => $this->created_at,
        ];
    }
}
