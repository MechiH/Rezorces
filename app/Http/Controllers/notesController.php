<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notes;

class notesController extends Controller
{
    public function index()
    {
        $Notes = Notes::GetAllNotes();
        return view('notes', ['Notes' => $Notes]);
    }
    public function getNote($id)
    {
        $Note = Notes::find($id);
        return $Note;
    }
    public function createNote()
    {
        Notes::NewNote(request()->json('data')['title'], request()->json('data')['tag']);
        return Notes::GetAllNotes();
    }
    public function editNoteContent()
    {
        $Note = Notes::find(request()->json('data')['id']);
        $Note->content = request()->json('data')['content'];
        $Note->save();
        return $Note;
    }
    public function deleteNote($id)
    {
        $Note = Notes::find($id);
        $Note->delete();
        return Notes::GetAllNotes();
    }
    public function searchNote($title)
    {
        if ($title == 'emptyString404-NotesRezorces') {
            return Notes::GetAllNotes();
        } else {
            return Notes::GetNoteByTitle($title);
        }
    }
}
