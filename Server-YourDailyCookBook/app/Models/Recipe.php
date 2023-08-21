<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    public function ShoppingList(){
        return $this->belongsTo(Shoppinglist::class, 'product_id');
    }

    public function User(){
        return $this->belongsTo(User::class, 'id');
    }

    public function Comment(){
        return $this->hasMany(Comment::class, 'recipe_id');
    }

    public function Like(){
        return $this->hasMany(Like::class, 'recipe_id');
    }

    public function Caledar(){
        return $this->hasMany(Caledar::class, 'recipe_id');
    }
}
