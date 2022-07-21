<?php

namespace Modules\ImportMyGrapari\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ImportMyGrapari\Entities\ImportMyGrapari;

class ImportMyGrapariController extends Controller
{
    protected $permision_name = 'import_mygrapari';

    public function index(Request $request)
    {
        $importmygrapari = ImportMyGrapari::select([
            'date', 'location', 'msisnd', 'transaction_id', 'transaction_type', 'result_topic'
        ])->orderBy('date', 'desc');
        $importmygrapari = $importmygrapari->fastPaginate(10);

        return $importmygrapari->appends($request->all());
    }


    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        return view('importmygrapari::show');
    }


    public function edit($id)
    {
        return view('importmygrapari::edit');
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
