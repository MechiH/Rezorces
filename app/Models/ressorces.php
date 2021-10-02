<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use KubAT\PhpSimple\HtmlDomParser;

class ressorces extends Model
{
    use HasFactory;

    public  function scopeGetAllRessorces (){
        return ressorces::orderby('updated_at','DESC')->get();
    }

    public function scopeGetRessorcesByTag($element,$tag){
        $ressourceByTag=ressorces::where("Tags",$tag)->orderby('updated_at','DESC')->get();
        return $ressourceByTag;
    }

    public function scopeAddNewRessorce($element,$link,$tags){
        // --- Get Title
        $ressorce = new ressorces();
        $dom = HtmlDomParser::file_get_html($link, false, null, 0);
        $title = $dom->find('title')[0]->innertext;
        // --- Create New Ressorce
        $ressorce->Title=$title;
        $ressorce->Link=$link;
        $ressorce->Tags=$tags;

        $ressorce->save();
    }

}
