<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

abstract class AuthController extends Controller
{
  protected array $auth_layout_words;

  public function __construct()
  {
    $this->auth_layout_words =  array_merge([
      // Put all layout words here.
    ]);
  }
}
