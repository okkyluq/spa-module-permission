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
        Schema::create('data_produk', function (Blueprint $table) {
            $table->id();
            $table->enum('jenis_produk', ['0', '1']);
            $table->enum('kategori_produk', ['0', '1', '2', '3'])->nullable();
            $table->text('nama_produk');
            $table->decimal('harga', 12, 0);
            $table->unsignedBigInteger('created_by');
            $table->timestamps();

            $table->softDeletes();
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
        Schema::dropIfExists('data_produk');
    }
};
