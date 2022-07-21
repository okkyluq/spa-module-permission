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
        Schema::create('transaksi_fivas', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->string('msisdn');
            $table->enum('jenis_transaksi', ['0', '1']);
            $table->enum('channel', ['0', '1', '2', '3']);
            $table->string('referal_code_csr')->nullable();
            $table->unsignedBigInteger('created_by');
            $table->timestamps();

            $table->foreign('created_by')->on('users')->references('id')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaksi_fivas');
    }
};
