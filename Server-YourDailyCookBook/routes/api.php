<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipeController;


Route::group(['prefix' => 'guest'], function(){
    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
    Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
});

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function(){
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh',[AuthController::class, 'refresh']);
    Route::post('create_recipe', [RecipeController::class, 'CreateRecipe']);
    Route::get('my_recipe', [RecipeController::class, 'getMyRecipes']);
    Route::get('all_recipes', [RecipeController::class, 'getRecipes']);
    Route::get('liked_recipes', [RecipeController::class, 'likedRecipes']);
    Route::post('like_recipe', [RecipeController::class, 'likeRecipe']);
    Route::post('add_comment', [RecipeController::class, 'addComment']);
});