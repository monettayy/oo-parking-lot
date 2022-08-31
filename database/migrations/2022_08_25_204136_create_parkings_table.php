<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParkingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parkings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('vehicle_id');
            $table->integer('slot_id');
            $table->timestamp('entry');
            $table->timestamp('exit')->nullable();
            $table->double('total_days')->default(0.00);
            $table->double('total_hours')->default(0.00);
            $table->double('total_minutes')->default(0.00);
            $table->decimal('charge_rate');
            $table->decimal('computed_amount')->default(0.00);
            $table->tinyInteger('status')->default(0);
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
        Schema::dropIfExists('parkings');
    }
}
