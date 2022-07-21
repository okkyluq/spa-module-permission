<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableDataGrapari extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_grapari', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('data_regional_id');
            $table->unsignedBigInteger('data_branch_id');
            $table->unsignedBigInteger('data_cluster_service_id');
            $table->enum('unit_type', ['1', '2', '3']);
            $table->string('unit_name');
            $table->string('ccis');
            $table->string('hiq');
            $table->text('alamat')->nullable();
            $table->string('terminal_id')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('data_regional_id')->references('id')->on('data_regional')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('data_branch_id')->references('id')->on('data_branch')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('data_cluster_service_id')->references('id')->on('data_cluster_service')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_grapari');
    }
}
