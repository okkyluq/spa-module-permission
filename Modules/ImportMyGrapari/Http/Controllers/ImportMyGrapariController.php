<?php

namespace Modules\ImportMyGrapari\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ImportMyGrapari\Entities\ImportMyGrapari;
use Rap2hpoutre\FastExcel\FastExcel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

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

    public function import(Request $request)
    {
        try {
            if(!Auth::user()->hasPermissionTo('import_'.$this->permision_name)) {
                return response()->json([
                    'message' => 'Anda tidak memiliki hak akses untuk membuat data produk',
                ], 403);
            }
            DB::beginTransaction();
            $import = (new FastExcel)->import($request->file('file_excel'), function ($line) {
                return ImportMyGrapari::create([
                    "date" => date('Y-m-d', strtotime($line['Date'])),
                    "terminal" => explode(" - ",$line['Terminal'])[0],
                    "location" => $line['Location'],
                    "region" => $line['Region'],
                    "area" => $line['Area'],
                    "msisnd" => $line['MSISDN'],
                    "transaction_id" => $line['Transaction ID'],
                    "transaction_type" => $line['Transaction Type'],
                    "topic_reason_1" => $line['Topic Reason 1'],
                    "topic_reason_2" => $line['Topic Reason 2'],
                    "result_topic" => $line['Result Topic'],
                    "start_time" => $line['Start Time'],
                    "end_time" => $line['End Time'],
                    "service_duration" => $line['Service Duration'],
                    "transaction_status" => $line['Transaction Status'],
                    "payment_method" => $line['Payment Method'],
                    "amount" => $line['Amount'],
                    "denominasi" => $line['Denominasi'],
                    "reason" => $line['Reason'],
                ]);
            });
            DB::commit();
            return response()->json([
                'status' => 'sukses',
            ], 200);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json($e, 400);
        }
    }
}
