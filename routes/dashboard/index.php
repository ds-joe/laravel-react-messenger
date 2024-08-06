<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])
  // ->prefix("dashboard") we need to uncomment this when have a website page.
  ->group(function () {
    require_once __DIR__ . "/chat.php";
  });
