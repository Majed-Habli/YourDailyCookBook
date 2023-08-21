<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::group(['prefix' => 'guest'], function(){
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
});

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function(){
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});