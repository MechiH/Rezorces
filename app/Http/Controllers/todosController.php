<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class todosController extends Controller
{
    public function index()
    {
        $todos = Todo::GetAllTasks();
        return view('todo', ['todos' => $todos]);
    }
    public function getTodo($id)
    {
        return Todo::find($id);
    }

    public function getTodosByDay($date)
    {
        return Todo::GetTasksByDate($date);
    }

    public function createTodo()
    {
        Todo::NewTodo(request()->json('data')['task'], request()->json('data')['priority'], request()->json('data')['date']);
        return
            Todo::GetTasksByDate(request()->json('data')['date']);
    }

    public function editTodo()
    {
        Todo::EditTodo(request()->json('data')['id'], request()->json('data')['task'], request()->json('data')['priority'], request()->json('data')['date']);
        return
            Todo::GetTasksByDate(request()->json('data')['date']);
    }

    public function editStatusTodoToChecked($id)
    {
        Todo::checkTodo($id);
        return true;
    }

    public function deleteTodo($id)
    {
        $todo = Todo::find($id);
        $todo->delete();
        return true;
    }
}
