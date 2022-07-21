<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Modules\ImportMyGrapari\Entities\ImportMyGrapariMDB;

class DashboardController extends Controller
{
    public function tes()
    {
        ImportMyGrapariMDB::create([
            'date' => date('Y-m-d'),
            'terminal' => 'Tes',
            'location' => 'Tes',
            'region' => 'Tes',
            'area' => 'Tes',
            'msisnd' => 'Tes',
            'transaction_id' => 'Tes',
            'transaction_type' => 'Tes',
            'topic_reason_1' => 'Tes',
            'topic_reason_2' => 'Tes',
            'result_topic' => 'Tes',
            'start_time' => 'Tes',
            'end_time' => 'Tes',
            'service_duration' => 'Tes',
            'transaction_status' => 'Tes',
            'payment_method' => 'Tes',
            'amount' => 'Tes',
            'denominasi' => 'Tes',
            'reason' => 'Tes',
        ]);

        dd('hello');
    }
}
