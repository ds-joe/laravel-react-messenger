<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\Settings\HomeController;


Route::controller(HomeController::class)
  ->group(function () {
    Route::get("/settings", 'index')->name('dashboard.settings');
    Route::post("/settings/update/userInformation", 'updateUserInformation')->name("dashboard.settings.update.userInformation");
  });
