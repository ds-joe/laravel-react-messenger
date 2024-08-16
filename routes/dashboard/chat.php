<?php

use App\Http\Controllers\Dashboard\Chats\HomeController;
use App\Http\Controllers\Dashboard\Chats\MessagesController;
use Illuminate\Support\Facades\Route;

# Main Controller
Route::controller(HomeController::class)
  ->group(function () {
    Route::get('/', 'index')->name("dashboard.chat");
  });

# Messages Controller
Route::controller(MessagesController::class)
  ->group(function () {
    Route::get("/chat/user/{user_id}", 'loadOneToOneMessages')->name('chat.user');
    Route::get("/chat/group/{group_id}", 'loadGroupMessages')->name('chat.group');
    Route::get("/chat/old/messages/{message}", 'loadOldMessages')->name('chat.old.messages');
    Route::post("/chat/send/message", 'store')->name('chat.send.message');
    Route::delete("/chat/delete/message/{message}", 'destroy')->name('chat.delete.message');
  });
