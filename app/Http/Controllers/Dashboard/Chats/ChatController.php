<?php

namespace App\Http\Controllers\Dashboard\Chats;

use App\Http\Controllers\Dashboard\DashboardController;

abstract class ChatController extends DashboardController
{

  public function __construct()
  {
    $this->pushTranslateWords([
      // Push chat layout translated words here.
    ]);
  }
}
