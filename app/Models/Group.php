<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Group extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'description',
    'owner_id',
    'last_message_id'
  ];


  /**
   * Get group users
   *
   * @return BelongsToMany
   */
  public function users(): BelongsToMany
  {
    return $this->belongsToMany(User::class, 'group_users');
  }

  /**
   * Get group messages
   *
   * @return HasMany
   */
  public function messages(): HasMany
  {
    return $this->hasMany(Message::class);
  }

  /**
   * Get group owner
   *
   * @return BelongsTo
   */
  public function owner(): BelongsTo
  {
    return $this->belongsTo(User::class, 'owner_id');
  }

  /**
   * Get user chats.
   * 
   * @param User $user
   * @return mixed
   */
  public static function getUserChats(User $user): mixed
  {
    $query = Group::select(['groups.*', 'messages.message as last_message', 'messages.created_at as last_message_date'])
      ->join('group_users', 'group_users.group_id', '=', 'groups.id')
      ->leftJoin('messages', 'messages.id', '=', 'groups.last_message_id')
      ->where('group_users.user_id', $user->id)
      ->orderBy('messages.created_at', 'desc')
      ->orderBy('groups.name');

    return $query->get();
  }

  /**
   * Convert chat to array.
   * 
   * @param $group
   * @return array
   */
  public static function toChatArray($group): array
  {
    return [
      'id' => $group->id,
      'name' => $group->name,
      'is_group' => true,
      'is_user' => false,
      'owner_id' =>  $group->owner_id,
      'users' => $group->users,
      'user_ids' => $group->users->pluck('id'),
      'created_at' => $group->created_at,
      'updated_at' => $group->updated_at,
      'blocked_at' => $group->blocked_at,
      'last_message' => $group->last_message,
      'last_message_date' => Carbon::parse($group->last_message_date)->format('M d'),
    ];
  }
}
