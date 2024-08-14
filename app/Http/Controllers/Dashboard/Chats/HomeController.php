<?php

namespace App\Http\Controllers\Dashboard\Chats;

use App\Facade\Inertia;
use App\Models\Group;
use App\Models\User;
use App\Services\Inertia\Enums\RenderLayout;
use Inertia\Response;
use Illuminate\Http\Request;

class HomeController extends ChatController
{

  /**
   * Home page
   *
   * @param Request $request
   * @return Response
   */
  public function index(Request $request): Response
  {
    $userChats = function () use ($request) {
      $user = User::findOrFail($request->user()->id);
      $users = User::getUserChats($user);
      $groups = Group::getUserChats($user);


      return $users->map(function ($user) {
        return User::toChatArray($user);
      })->concat($groups->map(function ($group) {
        return Group::toChatArray($group);
      }));
    };

    return Inertia::render(
      RenderLayout::dashboard,
      'chat',
      $this->translateWords,
      [
        'userChats' => $userChats()
      ]
    );
  }
}
