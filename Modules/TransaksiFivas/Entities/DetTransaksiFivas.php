<?php

namespace Modules\TransaksiFivas\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\DataProduk\Entities\DataProduk;

class DetTransaksiFivas extends Model
{
    protected $table = 'det_transaksi_fivas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'transaksi_fivas_id', 'produk_id', 'harga'
    ];

    public function produk()
    {
        return $this->belongsTo(DataProduk::class, 'produk_id', 'id');
    }
}
