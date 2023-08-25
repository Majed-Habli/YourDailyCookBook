<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shoppinglist;
use App\Models\user;
use Auth;

class ShoppingController extends Controller
{
    public function addToList(Request $request){

        $user = Auth::user();
        $user_id = $user->id;
        $item = new Shoppinglist;
        $item->user_id = $user_id;
        $item->recipe_id = $request->recipe_id;
        $item->save();

        return response()->json([
            'status' => 'success',
            'data' => $item
        ]);

    }

    public function shoppingList(){

        $user = Auth::user();
        $list = $user->ShoppingList()->with('RecipeShopingList')->get();

        return response()->json([
            'status' => 'success',
            'data' => $list
        ]);

    }
}
