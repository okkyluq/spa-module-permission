<?php

namespace Modules\TransaksiFivas\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\TransaksiFivas\Http\Requests\RequestTransaksiFivas;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Modules\TransaksiFivas\Entities\TransaksiFivas;
use Modules\TransaksiFivas\Entities\DetTransaksiFivas;
use Modules\TransaksiFivas\Transformers\TransaksiFivas as ResourceTransaksiFivas;

class TransaksiFivasController extends Controller
{

    public function index(Request $request)
    {
        $transaksi = TransaksiFivas::with(['det_transaksi_fivas.produk', 'createdBy'])->orderBy('created_at', 'desc')->paginate(10);
        return ResourceTransaksiFivas::collection($transaksi);
    }


    public function store(RequestTransaksiFivas $request)
    {
        try {
            DB::beginTransaction();
            $transaksi = TransaksiFivas::create([
                'date' => $request->date,
                'msisdn' => $request->msisdn,
                'jenis_transaksi' => $request->jenis_transaksi,
                'channel' => $request->channel,
                'referal_code_csr' => $request->referal_code_csr,
                'created_by' => Auth::user()->id,
            ]);

            $det_transaksi_fivas = collect($request->detail)->transform(function($value, $index){
                $new = [ 'produk_id' => $value['id'], 'harga' => $value['harga'], ];
                return new DetTransaksiFivas($new);
            });
            $transaksi->det_transaksi_fivas()->saveMany($det_transaksi_fivas);

            DB::commit();
            return response()->json([
                'status' => 'sukses',
            ], 200);

        } catch (\Exception $e) {
            DB::rollback();
            return response()->json($e, 400);
        }
        return response()->json($request->all());
    }


    public function show($id)
    {

    }


    public function edit($id)
    {
        $transaksi = TransaksiFivas::with(['det_transaksi_fivas.produk', 'createdBy'])->find($id);
        return new ResourceTransaksiFivas($transaksi);
    }


    public function update(Request $request, $id)
    {
        $transaksi = TransaksiFivas::find($id);
        try {
            DB::beginTransaction();
            $transaksi->update([
                'date' => $request->date,
                'msisdn' => $request->msisdn,
                'jenis_transaksi' => $request->jenis_transaksi,
                'channel' => $request->channel,
                'referal_code_csr' => $request->referal_code_csr,
            ]);
            $itemIdi = [];
            foreach ($request->detail as $isi) {
                if(isset($isi["id"]) && $isi["id"] != ""){// blok update
                    $itemIdi[] = $isi['id'];
                    $transaksi->det_transaksi_fivas()->whereId($isi['id'])->update([
                        'produk_id' => $isi["produk_id"],
                        'harga' => $isi["harga"],
                    ]);
                } else { // blok add
                    $new_det_transaksi = new DetTransaksiFivas([
                        'transaksi_fivas_id' => $transaksi->id,
                        'produk_id' => $isi["produk_id"],
                        'harga' => $isi["harga"]
                    ]);
                    $transaksi->det_transaksi_fivas()->save($new_det_transaksi);
                    $itemIdi[] = $new_det_transaksi->id;
                }
            }
            $transaksi->det_transaksi_fivas()->where('transaksi_fivas_id', $transaksi->id)->whereNotIn('id', $itemIdi)->delete();

            DB::commit();
            return response()->json([
                'status' => 'sukses',
            ], 200);
        } catch (\Illuminate\Database\QueryException $e) {
            DB::rollBack();
            return response()->json($e, 400);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json($e, 400);
        }
    }


    public function destroy($id)
    {
        $transaksi = TransaksiFivas::findOrFail($id);
        try {
            DB::beginTransaction();
            $transaksi->delete();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Berhasil Menghapus Data Transaksi !',
            ], 200);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'success' => false,
                'message' => $e
            ], 400);
        }
    }
}
