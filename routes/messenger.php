<?php

use App\Http\Controllers\Messenger\HomeController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->controller(HomeController::class)->group(function () {
  Route::get('/', 'index')->name("messenger.home");
});
