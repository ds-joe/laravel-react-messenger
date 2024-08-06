<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

abstract class AuthController extends Controller
{

  public function __construct()
  {
    $this->translateWords =  array_merge(
      __('components/layout/website/navbar'),
      __('auth')
    );
  }
}
