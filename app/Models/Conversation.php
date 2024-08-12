<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Conversation extends Model
{
  use HasFactory;

  protected $fillable = [
    'last_message_id',
    'user_id1',
    'user_id2'
  ];

  protected $casts = [
    'created_at' => 'datetime:h:i A', // Format for 12-hour time with AM/PM
  ];

  /**
   * Get last message
   *
   * @return BelongsTo
   */
  public function lastMessage(): BelongsTo
  {
    return $this->belongsTo(Message::class, 'last_message_id');
  }

  /**
   * Get conversation user 1
   *
   * @return BelongsTo
   */
  public function user1(): BelongsTo
  {
    return $this->belongsTo(User::class, 'user_id1');
  }

  /**
   * Get conversation user 2
   *
   * @return BelongsTo
   */
  public function user2(): BelongsTo
  {
    return $this->belongsTo(User::class, 'user_id2');
  }
}
