<?php

namespace Modules\TransaksiFivas\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\TransaksiFivas\Entities\DetTransaksiFivas;
use App\Models\User;

class TransaksiFivas extends Model
{
    protected $table = 'transaksi_fivas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'date', 'msisdn', 'jenis_transaksi', 'channel', 'referal_code_csr', 'created_by'
    ];

    public function createdBy()
    {
    	return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function det_transaksi_fivas()
    {
        return $this->hasMany(DetTransaksiFivas::class, 'transaksi_fivas_id', 'id');
    }

    public function getLabelJenisTransaksiAttribute()
    {
        $jenis_transaksi = ['Prepaid', 'Postpaid'];
        return $jenis_transaksi[$this->jenis_transaksi];
    }

    public function getLabelChannelAttribute()
    {
        $channel = ['Mobile', 'OBC', 'Virtual Assistant', 'Walk-In'];
        return $this->channel === null ? null : $channel[$this->channel];
    }

}
