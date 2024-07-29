<?php

namespace App\Http\Controllers\Messenger;

use App\Facade\Inertia;
use App\Services\Inertia\Enums\RenderLayout;
use Inertia\Response;

class HomeController extends MessengerController
{

  /**
   * Home page
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::messenger,
      'home',
      $this->messenger_layout_words
    );
  }
}
