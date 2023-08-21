<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Recipe;
use Auth;

class RecipeController extends Controller
{
    function CreateRecipe(Request $request){

        $fileNameExt = $request->file('image_url')->getClientOriginalName();
        $fileName = pathinfo($fileNameExt, PATHINFO_FILENAME);
        $fileExt = $request->file('image_url')->getClientOriginalExtension();
        $fileNameToStore = $fileName.'_'.time().'.'.$fileExt;
        $pathToStore = $request->file('image_url')->storeAs('public/recipe_images',$fileNameToStore);

        $user = Auth::user();

        $recipe = new Recipe;
        $recipe->user_id = $user->id;
        $recipe->name = $request->name;
        $recipe->cousine = $request->cousine;
        $recipe->ingredients = $request->ingredients;
        $recipe->image_url = $fileNameToStore;
        $recipe->save();

        return response()->json([
            'status' => 'success',
            'data' => $recipe
        ]);
    }

    function getMyRecipes(){
        $user = Auth::user();
        $user_id = $user->id;
        $recipe = $user->Recipes()->get();

        return response()->json([
            'status' => 'success',
            'user_id' => $user_id,
            'data' => $recipe
        ]);
    }

    function getRecipes(){
        $recipe = Recipe::with('user')->get();

        return response()->json([
            'status' => 'success',
            'data' => $recipe
        ]);
    }
}
