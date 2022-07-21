<?php

namespace Modules\DataProduk\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class SingleDataProduk extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nama_produk' => $this->nama_produk,
            'harga_list' => $this->harga_list,
        ];
    }
}
