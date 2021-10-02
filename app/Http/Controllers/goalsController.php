<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\goals;

class goalsController extends Controller
{
    // return all goals
    public function index()
    {
        $goals = goals::GetAllGoals();
        return view('goals', ['goals' => $goals]);
    }

    // create a new Goal
    public function createGoal()
    {
        $goal = goals::NewGoal(request()->json('data')['title'], request()->json('data')['desc'], request()->json('data')['date']);
        return $goal;
    }


    // Edit a Goal
    public function editGoal()
    {
        $goal = goals::EditGoal(request()->json('data')['id'], request()->json('data')['title'], request()->json('data')['desc'], request()->json('data')['date']);
        return $goal;
    }
    // Delete a Goal
    public function deleteGoal($id)
    {
        $goal = goals::find($id);
        $goal->delete();
        return true;
    }
}
