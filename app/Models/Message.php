<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Message extends Model
{
  use HasFactory;

  protected $fillable = [
    'message',
    'sender_id',
    'receiver_id',
    'group_id',
    'conversation_id'
  ];

  /**
   * Get sender user
   *
   * @return BelongsTo
   */
  public function sender(): BelongsTo
  {
    return $this->belongsTo(User::class, 'sender_id');
  }

  /**
   * Get receiver user.
   *
   * @return BelongsTo
   */
  public function receiver(): BelongsTo
  {
    return $this->belongsTo(User::class, 'receiver_id');
  }

  /**
   * Get message group.
   *
   * @return BelongsTo
   */
  public function group(): BelongsTo
  {
    return $this->belongsTo(Group::class);
  }

  /**
   * Get message Attachments
   *
   * @return HasMany
   */
  public function attachments(): HasMany
  {
    return $this->hasMany(MessageAttachment::class);
  }
}
