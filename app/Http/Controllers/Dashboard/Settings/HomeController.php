<?php

namespace App\Http\Controllers\Dashboard\Settings;

use App\Facade\Inertia;
use App\Facade\Notification;
use App\Facade\Storage;
use App\Http\Requests\Dashboard\Settings\UserInformationRequest;
use App\Models\User;
use App\Services\Inertia\Enums\RenderLayout;
use App\Services\Notification\Enums\NotificationType;
use Illuminate\Support\Facades\Hash;
use Inertia\Response;

class HomeController extends SettingsController
{
  /**
   * Display settings page
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'settings',
      $this->translateWords
    );
  }


  /**
   * Update user information
   * 
   * @param UserInformationRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function updateUserInformation(UserInformationRequest $request): \Illuminate\Http\RedirectResponse
  {
    $user = User::findOrFail($request->user()->id);

    $user->full_name = $request->full_name;
    $user->email = $request->email;
    $user->phone = $request->phone;
    $user->avatar = Storage::restore($user->avatar_raw, Storage::getPath(User::class), $request->avatar);

    if ($request->password) {
      $user->password = Hash::make($request->password);
    }

    $user->save();

    return back()->with(Notification::create(__('pages/dashboard/settings.settings_updated'), NotificationType::success));
  }
}
