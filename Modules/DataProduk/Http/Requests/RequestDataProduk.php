<?php

namespace Modules\DataProduk\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RequestDataProduk extends FormRequest
{

    public function rules()
    {
        $rules = array();
        $request = \Request::instance();
        if($this->isMethod('PUT')){
            $id = \Request::instance()->id;
            $rules = [
                'jenis_produk' => 'required',
                'kategori_produk' => 'required_if:jenis_produk,"0"',
                'nama_produk' => 'required',
                'harga' => 'required|min:0|not_in:0',
            ];
        } else if($this->isMethod('POST')){
            $rules = [
                'jenis_produk' => 'required',
                'kategori_produk' => 'required_if:jenis_produk,"0"',
                'nama_produk' => 'required',
                'harga' => ['required', 'min:0', 'not_in:0',
                    Rule::unique('data_produk')->where(function ($query) use($request) {
                        return $query->where('nama_produk', $request->nama_produk)
                                ->where('jenis_produk', $request->jenis_produk)
                                ->where('harga', $request->harga);
                    }),
                ]
            ];
        }

        return $rules;
    }

    public function messages()
    {
        $request = \Request::instance();
        $messages = array();
        $messages = [
            'jenis_produk.required' => 'Jenis Produk Wajib Dipilih !',
            'kategori_produk.required_if' => 'Kategori Wajib Dipilih jika Jenis Produk PSB',
            'nama_produk.required' => 'Nama Produk Masih Kosong !',
            'harga.required' => 'Harga Wajib Terisi !',
            'harga.not_in' => 'Harga Wajib Terisi !',
            'harga.unique' => $request->nama_produk.' dengan harga '.number_format($request->harga).' sudah ada',
        ];
        return $messages;
    }
}
