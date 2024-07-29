<?php

namespace App\Models;

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
}
