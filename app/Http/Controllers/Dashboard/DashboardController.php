<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;

abstract class DashboardController extends Controller
{

  public function __construct()
  {
    $this->translateWords = array_merge(
      __('components/layout/dashboard/navbar'),
    );
  }
}
