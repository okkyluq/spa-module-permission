<?php

namespace Modules\DataProduk\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class DataProduk extends JsonResource
{
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'jenis_produk' => $this->jenis_produk,
            'kategori_produk' => $this->kategori_produk,
            'nama_produk' => $this->nama_produk,
            'harga' => $this->harga,
            'created_by' => $this->created_by,
            'label_jenis_produk' => $this->label_jenis_produk,
            'label_kategori_produk' => $this->label_kategori_produk,
        ];

    }


}
