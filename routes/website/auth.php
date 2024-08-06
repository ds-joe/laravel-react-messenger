<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->controller(RegisterController::class)->group(function () {
  Route::get('/register', 'index')->name("register");
  Route::post("/auth/register", 'register')->name('auth.register');
});

Route::middleware('guest')->controller(LoginController::class)->group(function () {
  Route::get('/login', 'index')->name("login");
  Route::post('/auth/login', 'login')->name("auth.login");
});

Route::middleware('auth')->controller(LoginController::class)->group(function () {
  Route::post('/auth/logout', 'logout')->name('auth.logout');
});
