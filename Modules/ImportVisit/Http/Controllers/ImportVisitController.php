<?php

namespace Modules\ImportVisit\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ImportVisitController extends Controller
{

    public function index()
    {
        return view('importvisit::index');
    }

    public function import(Request $request)
    {
        return response()->json($request->all());
    }


    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        return view('importvisit::show');
    }


    public function edit($id)
    {
        return view('importvisit::edit');
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
