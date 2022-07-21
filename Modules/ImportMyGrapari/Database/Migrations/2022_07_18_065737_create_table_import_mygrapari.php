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
        Schema::create('import_mygrapari', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date')->nullable();
            $table->string('terminal')->nullable();
            $table->string('location')->nullable();
            $table->string('region')->nullable();
            $table->string('area')->nullable();
            $table->string('msisnd')->nullable();
            $table->string('transaction_id')->nullable();
            $table->string('transaction_type')->nullable();
            $table->string('topic_reason_1')->nullable();
            $table->string('topic_reason_2')->nullable();
            $table->string('result_topic')->nullable();
            $table->string('start_time')->nullable();
            $table->string('end_time')->nullable();
            $table->string('service_duration')->nullable();
            $table->string('transaction_status')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('amount')->nullable();
            $table->string('denominasi')->nullable();
            $table->string('reason')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('import_mygrapari');
    }
};
