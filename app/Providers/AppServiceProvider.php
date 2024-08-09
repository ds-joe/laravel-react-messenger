<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Inertia\Inertia;
use App\Services\Notification\Notification;
use App\Services\Storage\Storage;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    //
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {

    $this->app->bind('Storage', fn() => new Storage());
    $this->app->bind('Inertia', fn() => new Inertia());
    $this->app->bind('Notification', fn() => new Notification());
  }
}
