<?php

namespace App\Http\Controllers\Dashboard\Settings;

use App\Http\Controllers\Dashboard\DashboardController;

class SettingsController extends DashboardController
{
  public function __construct()
  {
    parent::__construct();
    $this->pushTranslateWords(array_merge(
      __('pages/dashboard/settings')
    ));
  }
}
