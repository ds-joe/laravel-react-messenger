<?php

namespace App\Http\Controllers\Auth;

use App\Facade\Inertia;
use App\Facade\Notification;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use App\Services\Inertia\Enums\RenderLayout;
use App\Services\Notification\Enums\NotificationType;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Response;

class RegisterController extends AuthController
{
  /**
   * Display register page
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::website,
      'auth/register',
      $this->translateWords
    );
  }

  /**
   * Register new account.
   *
   * @param RegisterRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function register(RegisterRequest $request): \Illuminate\Http\RedirectResponse
  {
    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'email_verified_at' => now(),
      'password' => Hash::make($request->password)
    ]);
    Auth::loginUsingId($user->id); # After sign up login with user id.
    return redirect()->route('login')->with(Notification::create(__('auth.account_created'), NotificationType::success));
  }
}
