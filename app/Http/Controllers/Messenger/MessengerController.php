<?php

namespace App\Http\Controllers\Messenger;

use App\Http\Controllers\Controller;

abstract class MessengerController extends Controller
{
  protected array $messenger_layout_words;

  public function __construct()
  {
    $this->messenger_layout_words =  array_merge([
      // Put all layout words here.
    ]);
  }
}
