<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shoppinglist extends Model
{
    use HasFactory;

    public function UserShopingList(){
        return $this->belongsTo(User::class, 'id');
    }

    public function RecipeShopingList(){
        return $this->belongsTo(Recipe::class, 'id');
    }
}
