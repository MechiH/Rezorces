<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class goals extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'date'
    ];
    public  function scopeGetAllGoals()
    {
        return goals::orderby('updated_at', 'DESC')->get();
    }
    public  function scopeNewGoal($el, $title, $desc, $date)
    {
        $goal = new goals();
        $goal->title = $title;
        $goal->description = $desc;
        $goal->date = $date;
        $goal->save();
        return $goal;
    }
    public  function scopeEditGoal($el, $id, $title, $desc, $date)
    {
        $goal = goals::find($id);
        $goal->title = $title;
        $goal->description = $desc;
        $goal->date = $date;
        $goal->save();
        return $goal;
    }
}
