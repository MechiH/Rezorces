<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ressorces extends Model
{
    use HasFactory;

    public function getAllRessorces (){
        return ressorces::all();
    }

    public function getRessorcesByTag($tag){
        $start = microtime(true);
        $ressourceByTag=ressorces::where("Tags",$tag);
        $end = (microtime(true) - $start);
        echo "elapsed time: $end";
        return ressourceByTag;
    }

}
