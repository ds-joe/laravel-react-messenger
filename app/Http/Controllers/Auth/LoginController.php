<?php

namespace App\Http\Controllers\Auth;

use App\Facade\Inertia;
use App\Facade\Notification;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\Inertia\Enums\RenderLayout;
use App\Services\Notification\Enums\NotificationType;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class LoginController extends AuthController
{
  /**
   * Display login view
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::auth,
      'login',
      $this->auth_layout_words
    );
  }

  /**
   * Login
   *
   * @param Request $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function login(LoginRequest $request): \Illuminate\Http\RedirectResponse
  {
    if (Auth::attempt($request->only('email', 'password'), $request->get('remember', false))) {
      return redirect()->route('messenger.home')->with(Notification::create(__('auth.login_success'), NotificationType::success));
    }
    return redirect()->back()->with(Notification::create(__('auth.login_invalid'), NotificationType::error));
  }

  /**
   * Logout
   *
   * @return \Illuminate\Http\RedirectResponse
   */
  public function logout(): \Illuminate\Http\RedirectResponse
  {
    Auth::logout();
    return redirect()->back()->with(Notification::create(__('auth.logout'), NotificationType::success));
  }
}
