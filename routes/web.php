<?php

use Illuminate\Support\Facades\Route;
use App\Facade\Inertia;
use App\Services\Inertia\Enums\RenderLayout;

Route::get("/", function () {
  return Inertia::render(
    RenderLayout::messenger,
    'home',
    []
  );
});
