<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Facade\Storage;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
  use HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'full_name',
    'phone',
    'email',
    'email_verified_at',
    'avatar',
    'blocked_at',
    'last_seen',
    'password',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * Get the attributes that should be cast.
   *
   * @return array<string, string>
   */
  protected function casts(): array
  {
    return [
      'email_verified_at' => 'datetime',
      'password' => 'hashed',
      'created_at' => 'date:Y-m-d',
    ];
  }

  /**
   * Handle avatar if there
   *
   * @param $value
   * @return ?string
   */
  public function getAvatarAttribute($value): ?string
  {
    return $value ? Storage::getFileUrl($value) : null;
  }

  /**
   * Get the original avatar raw in database.
   *
   * @return ?string
   */
  public function getAvatarRawAttribute(): ?string
  {
    return $this->attributes['avatar'];
  }


  /**
   * User groups
   *
   * @return BelongsToMany
   */
  public function groups(): BelongsToMany
  {
    return $this->belongsToMany(Group::class, 'group_users');
  }

  /**
   * Get chat users.
   * 
   * @param User $user
   * @return mixed
   */
  public static function getUserChats(User $user): mixed
  {
    $query = DB::table('users')
      ->select(['users.*', 'messages.message AS last_message', 'messages.created_at AS last_message_date'])
      ->where('users.id', '!=', $user->id)
      ->when(!$user->is_admin, function ($query) {
        $query->whereNull('users.blocked_at');
      })
      ->leftJoin('conversations', function ($join) use ($user) {
        $join->on('conversations.user_id1', '=', 'users.id')
          ->where('conversations.user_id2', '=', $user->id)
          ->orWhere(function ($query) use ($user) {
            $query->on('conversations.user_id2', '=', 'users.id')
              ->where('conversations.user_id1', '=', $user->id);
          });
      })
      ->leftJoin('messages', 'messages.id', '=', 'conversations.last_message_id')
      ->OrderByRaw('IFNULL(users.blocked_at, 1)')
      ->orderBy('messages.created_at', 'desc')
      ->orderBy('users.full_name');

    return $query->get();
  }

  /**
   * Convert chat to array.
   * 
   * @param $user
   * @return array
   */
  public static function toChatArray($user): array
  {
    return [
      'id' => $user->id,
      'full_name' => $user->full_name,
      'is_group' => false,
      'is_user' => true,
      'is_admin' => (bool) $user->is_admin,
      'created_at' => $user->created_at,
      'updated_at' => $user->updated_at,
      'blocked_at' => $user->blocked_at,
      'last_message' => $user->last_message,
      'last_message_date' => Carbon::parse($user->last_message_date)->format('M-d H:i A'),
      'avatar' => $user->avatar ? Storage::getFileUrl($user->avatar) : null
    ];
  }
}
