<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    use HasFactory;
    protected $fillable = [
        'content',
    ];

    public  function  scopeNewNote($element, $title, $tag)
    {
        $note = new Notes();
        $note->title = $title;
        $note->tag = $tag;
        $note->content = '';
        $note->save();
        return $note;
    }
    public  function scopeGetAllNotes()
    {
        return Notes::orderby('updated_at', 'DESC')->get();
    }
    public  function scopeGetNoteByTitle($element, $title)
    {
        return Notes::where('title', 'LIKE', '%' . $title . '%')->get();
    }
}
