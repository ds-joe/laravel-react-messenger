<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Facade\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

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
}
