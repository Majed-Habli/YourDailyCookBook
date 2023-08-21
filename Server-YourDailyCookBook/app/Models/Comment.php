<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public function User(){
        return $this->belongsTo(User::class, 'id');
    }

    public function Recipe(){
        return $this->belongsTo(Recipe::class, 'id');
    }
}
