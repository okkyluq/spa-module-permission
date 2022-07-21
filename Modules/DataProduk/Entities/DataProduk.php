<?php

namespace Modules\DataProduk\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\DataProduk\Entities\DataProduk;
use App\Models\User;

class DataProduk extends Model
{
    protected $table = 'data_produk';
    protected $primaryKey = 'id';
    protected $fillable = [
        'jenis_produk', 'kategori_produk', 'nama_produk', 'harga', 'created_by'
    ];

    public function createdBy()
    {
    	return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function harga_list()
    {
        return $this->hasMany(DataProduk::class, 'nama_produk', 'nama_produk');
    }

    public function getLabelJenisProdukAttribute()
    {
        $jenis_produk = ['PSB', 'Fivas'];
        return $jenis_produk[$this->jenis_produk];
    }

    public function getLabelKategoriProdukAttribute()
    {
        $kategori_produk = ['Migrasi', 'PSB', 'Reaktivasi', 'Uplift Gaspol'];
        return $this->kategori_produk === null ? null : $kategori_produk[$this->kategori_produk];
    }
}
