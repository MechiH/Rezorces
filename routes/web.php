<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/* Resorce Routes */

Route::get('/', [App\Http\Controllers\ressorcesController::class, 'index'])->name('home');
Route::post('/', [App\Http\Controllers\ressorcesController::class, 'add']);
Route::post('/search', [App\Http\Controllers\ressorcesController::class, 'search']);


/* Notes Routes */
Route::get('/notes', [App\Http\Controllers\notesController::class, 'index'])->name('notes');
Route::get('/getNote/{id}', [App\Http\Controllers\notesController::class, 'getNote'])->name('getNote');
Route::get('/searchNote/{title}', [App\Http\Controllers\notesController::class, 'searchNote'])->name('searchNote');
Route::post('/createNote', [App\Http\Controllers\notesController::class, 'createNote'])->name('createNote');
Route::put('/editNoteContent', [App\Http\Controllers\notesController::class, 'editNoteContent'])->name('editNoteContent');
Route::delete('/deleteNote/{id}', [App\Http\Controllers\notesController::class, 'deleteNote'])->name('deleteNote');

/* Todo Routes */
Route::get('/todos', [App\Http\Controllers\todosController::class, 'index'])->name('todos');
Route::get('/getTodo/{id}', [App\Http\Controllers\todosController::class, 'getTodo'])->name('getTodo');
Route::get('/todoByDate/{date}', [App\Http\Controllers\todosController::class, 'getTodosByDay'])->name('getTodosByDay');
Route::get('/checkTodo/{id}', [App\Http\Controllers\todosController::class, 'editStatusTodoToChecked'])->name('editStatusTodoToChecked');
Route::post('/createTodo', [App\Http\Controllers\todosController::class, 'createTodo'])->name('createTodo');
Route::put('/editTodo', [App\Http\Controllers\todosController::class, 'editTodo'])->name('editTodo');
Route::delete('/deleteTodo/{id}', [App\Http\Controllers\todosController::class, 'deleteTodo'])->name('deleteTodo');

/* Goals Routes */
Route::get('/goals', [App\Http\Controllers\goalsController::class, 'index'])->name('goals');
Route::post('/createGoal', [App\Http\Controllers\goalsController::class, 'createGoal'])->name('createGoal');
Route::put('/editGoal', [App\Http\Controllers\goalsController::class, 'editGoal'])->name('editGoal');
Route::delete('/deleteGoal/{id}', [App\Http\Controllers\goalsController::class, 'deleteGoal'])->name('deleteGoal');
