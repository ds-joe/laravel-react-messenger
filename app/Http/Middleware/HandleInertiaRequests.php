<?php

namespace App\Http\Middleware;

use App\Facade\Notification;
use App\Models\Group;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
  /**
   * The root template that is loaded on the first page visit.
   *
   * @var string
   */
  protected $rootView = 'index';

  /**
   * Determine the current asset version.
   */
  public function version(Request $request): string|null
  {
    return parent::version($request);
  }

  /**
   * Define the props that are shared by default.
   *
   * @return array<string, mixed>
   */
  public function share(Request $request): array
  {

    return [
      ...parent::share($request),
      'auth' => [
        'user' => $request->user(),
      ],
      "page_words" => [],
      Notification::getSessionName() => Notification::getSessionNotification()
    ];
  }
}
