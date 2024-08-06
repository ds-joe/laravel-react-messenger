<?php

namespace App\Http\Controllers\Dashboard\Chats;

use App\Facade\Inertia;
use App\Services\Inertia\Enums\RenderLayout;
use Inertia\Response;

class HomeController extends ChatController
{

  /**
   * Home page
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'chat/home',
      $this->translateWords
    );
  }
}
