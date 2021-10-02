<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ressorces;
class ressorcesController extends Controller
{
    // --- return view
    public function index(){
        $ressorces=ressorces::GetAllRessorces();
        return view('welcome',['ressorces'=>$ressorces]);
    }
    // --- add new ressource
    public function add(){
        ressorces::AddNewRessorce(request('link'),request('tag'));
        return redirect()->back();
    }
    // ---searcH for ressource by tag
    public function search(){
        $result=ressorces::GetRessorcesByTag(request()->json('data'));
        return json_encode($result);
    }
}
