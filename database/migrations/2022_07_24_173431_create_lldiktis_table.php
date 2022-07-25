<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('lldiktis', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('title');
        //     $table->string('description');
        //     $table->string('category');
        //     $table->timestamps();
        // });
        Schema::create(
            'lldiktis',
            function (Blueprint $table) {
                $table->id();
                $table->string('category', 128);
                $table->text('description');
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lldiktis');
    }
};
