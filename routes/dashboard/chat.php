<?php

use App\Http\Controllers\Dashboard\Chats\HomeController;
use Illuminate\Support\Facades\Route;

Route::controller(HomeController::class)
  ->group(function () {
    Route::get('/', 'index')->name("dashboard.chat");
  });
