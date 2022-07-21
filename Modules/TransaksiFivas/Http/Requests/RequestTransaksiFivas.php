<?php

namespace Modules\TransaksiFivas\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestTransaksiFivas extends FormRequest
{
    public function rules()
    {
        $rules = array();
        $request = \Request::instance();
        if($this->isMethod('PUT')){
            $id = $request->id;
            $rules = [
                'date' => 'required',
                'msisdn' => 'required',
                'jenis_transaksi' => 'required',
                'channel' => 'required',
                'referal_code_csr' => 'required_if:channel, ===, 2',
                'detail' => 'required',
                'detail.*.id' => 'required',
                'detail.*.harga' => 'required',
            ];
        } else if($this->isMethod('POST')){
            $rules = [
                'date' => 'required',
                'msisdn' => 'required',
                'jenis_transaksi' => 'required',
                'channel' => 'required',
                'referal_code_csr' => 'required_if:channel, ===, 2',
                'detail' => 'required',
                'detail.*.id' => 'required',
                'detail.*.harga' => 'required',
            ];
        }

        return $rules;
    }

    public function messages()
    {
        $messages = array();
        $messages = [
            'date.required' => 'Tanggal Wajib Dipilih !',
            'msisdn.required' => 'MSIDN Wajib Diisi !',
            'jenis_transaksi.required' => 'Jenis Transaksi Wajib Dipilih !',
            'channel.required' => 'Channel wajib dipilih !',
            'referal_code_csr.required_if' => 'Referal Code Wajib Dipilih Jika Channel Virtual Assistant',
            'detail.*.id.required' => 'Produk wajib dipilih',
            'detail.*.harga.required' => 'Harga belum terisi',
        ];
        return $messages;
    }
}
