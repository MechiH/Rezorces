<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $table = 'todo';
    use HasFactory;
    protected $fillable = [
        'task',
        'priority',
        'date',
        'status'
    ];
    public function scopeGetAllTasks()
    {
        return Todo::where('status', 'Progress')->orderby('updated_at', 'DESC')->get();
    }
    public function scopeNewTodo($el, $task, $priority, $date)
    {
        $todo = new Todo();
        $todo->task = $task;
        $todo->priority = $priority;
        $todo->date = $date;
        $todo->save();
        return $todo;
    }
    public function scopeEditTodo($el, $id, $task, $priority, $date)
    {
        $todo = Todo::find($id);
        $todo->task = $task;
        $todo->priority = $priority;
        $todo->date = $date;
        $todo->save();
        return $todo;
    }
    public function scopeGetTasksByDate($el, $date)
    {
        return Todo::where('date', $date)->get();
    }
    public function scopecheckTodo($el, $id)
    {
        $todo = Todo::find($id);
        $todo->status = 'Done';
        $todo->save();
        return $todo;
    }
}
