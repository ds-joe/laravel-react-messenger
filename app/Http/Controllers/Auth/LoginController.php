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
      RenderLayout::website,
      'auth/login',
      $this->translateWords
    );
  }

  /**
   * Login
   *
   * @param LoginRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function login(LoginRequest $request): \Illuminate\Http\RedirectResponse
  {
    if (!$this->multiCredentials($request)) {
      return redirect()->route('dashboard.chat')->with(Notification::create(__('auth.login_success'), NotificationType::success));
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

  /**
   * Multi login credentials
   * 
   * @param LoginRequest $request
   * @return bool
   */
  private function multiCredentials(LoginRequest $request): bool
  {
    if (Auth::attempt(['email' => $request->username, 'password' => $request->password], $request->get('remember', false))) return true;
    if (Auth::attempt(['phone' => $request->username, 'password' => $request->password], $request->get('remember', false))) return true;
    return false;
  }
}
