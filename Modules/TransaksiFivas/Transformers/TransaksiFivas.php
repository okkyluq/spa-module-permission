<?php

namespace Modules\TransaksiFivas\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class TransaksiFivas extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'date' => $this->date,
            'msisdn' => $this->msisdn,
            'jenis_transaksi' => $this->jenis_transaksi,
            'channel' => $this->channel,
            'referal_code_csr' => $this->referal_code_csr,
            'label_jenis_transaksi' => $this->label_jenis_transaksi,
            'label_channel' => $this->label_channel,
            'created_by' => $this->createdBy,
            'detail_transaksi' => $this->det_transaksi_fivas
        ];
    }
}
