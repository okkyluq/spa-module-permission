<?php

namespace Modules\DataProduk\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\DataProduk\Entities\DataProduk;
use Modules\DataProduk\Http\Requests\RequestDataProduk;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Exceptions\PermissionException;
use App\Services\CheckPermission;
use Modules\DataProduk\Transformers\SingleDataProduk as SingleResourceDataProduk;
use Modules\DataProduk\Transformers\DataProduk as ResourceDataProduk;

class DataProdukController extends Controller
{
    protected $permision_name = 'data_produk';

    public function index(Request $request)
    {
        $dataproduk = DataProduk::with(['createdBy'])->orderBy('created_at', 'desc')->paginate(10);
        return ResourceDataProduk::collection($dataproduk);
    }


    public function store(RequestDataProduk $request)
    {
        try {
            if(!Auth::user()->hasPermissionTo('create_'.$this->permision_name)) {
                return response()->json([
                    'message' => 'Anda tidak memiliki hak akses untuk membuat data produk',
                ], 403);
            }

            DB::beginTransaction();
            DataProduk::create([
                'jenis_produk' => $request->jenis_produk,
                'kategori_produk' => $request->kategori_produk,
                'nama_produk' => $request->nama_produk,
                'harga' => $request->harga,
                'created_by' => Auth::user()->id,
            ]);
            DB::commit();
            return response()->json([
                'status' => 'sukses',
            ], 200);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json($e, 400);
        }
    }


    public function show($id)
    {

    }


    public function edit($id)
    {

    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }

    public function getProdukByName(Request $request)
    {
        $produk = [];
        if($request->has('q')){
            $search = $request->q;
            $produk = DataProduk::select(['id', 'nama_produk'])
                    ->with(['harga_list' => function($query){
                        $query->select(['nama_produk', 'harga']);
                    }])
                    ->where('nama_produk', 'LIKE', '%'.$search.'%')
                    ->groupBy(['nama_produk'])
                    ->limit(4)
                    ->get();
        }
        return SingleResourceDataProduk::collection($produk);
    }
}
