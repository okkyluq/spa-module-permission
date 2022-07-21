<?php

namespace Modules\ImportMyGrapari\Entities;

use Illuminate\Database\Eloquent\Model;

class ImportMyGrapari extends Model
{
    protected $table = 'import_mygrapari';
    protected $primaryKey = 'id';
    protected $fillable = [
        'date', 'terminal', 'location', 'region', 'area', 'msisnd', 'transaction_id', 'transaction_type', 'topic_reason_1', 'topic_reason_2', 'result_topic', 'start_time', 'end_time', 'service_duration', 'transaction_status', 'payment_method', 'amount', 'denominasi', 'reason'
    ];

    protected $dates = [
        'date', 'created_at', 'updated_at'
    ];
}
