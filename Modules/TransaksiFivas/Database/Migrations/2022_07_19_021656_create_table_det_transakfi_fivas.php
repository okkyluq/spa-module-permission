<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('det_transaksi_fivas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('transaksi_fivas_id');
            $table->unsignedBigInteger('produk_id');
            $table->decimal('harga', 12, 0);
            $table->timestamps();

            $table->foreign('transaksi_fivas_id')->on('transaksi_fivas')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('produk_id')->on('data_produk')->references('id')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('det_transaksi_fivas');
    }
};
