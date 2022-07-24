<?php

namespace App\Models\costum;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;


class DbCreate extends Model
{
    protected $dbName;

    public function __construct($name = null)
    {
        if (!is_null($name)) {
            $this->dbName = $name;
        } else {
            $this->dbName = env('DB_DATABASE', 'lldikti');
        }
    }

    public function dbExists()
    {
        try {
            DB::connection()->getPdo(); //connection check 
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function dbMake($isBlank = false)
    {
        try {
            DB::disconnect($this->dbName);
            Config::set('database.connections.mysql.database', ''); //set blank db first
            DB::statement("CREATE DATABASE " . $this->dbName);
            Config::set('database.connections.mysql.database', $this->dbName);
            DB::reconnect();

            $this->up($isBlank);

            return true;
        } catch (\Exception $ex) {
            return $ex->getMessage();
        }
    }

    public function up($isBlank = true)
    {
        if (!Schema::hasTable('users')) {
            Schema::create('users', function (Blueprint $table) {
                $table->integer('id_user', true)->notNull();
                $table->string('username', 20)->unique()->notNull();
                $table->string('password', 512)->notNull();
                $table->boolean('is_active')->default(true);
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('profiles')) {
            Schema::create('profiles', function (Blueprint $table) {
                $table->integer('id_profile', true)->notNull();
                $table->string('title', 128)->notNull();
                $table->mediumText('content')->notNull();
                $table->string('img_uri_one', 512)->nullable();
                $table->string('img_uri_two', 512)->nullable();
                $table->string('img_uri_three', 512)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('info_categories')) {
            Schema::create('info_categories', function (Blueprint $table) {
                $table->integer('id_info_category', true)->notNull();
                $table->string('category', 128)->notNull();
                $table->text('description')->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('info_details')) {
            Schema::create('info_details', function (Blueprint $table) {
                $table->integer('id_info_detail', true)->notNull();
                $table->integer('id_info_category')->notNull();
                $table->foreign('id_info_category')->references('id_info_category')->on('info_categories')->onDelete('cascade');
                $table->string('title', 128)->notNull();
                $table->mediumText('content')->notNull();
                $table->string('author', 128)->notNull();
                $table->string('img_uri_one', 512)->nullable();
                $table->string('img_uri_two', 512)->nullable();
                $table->string('img_uri_three', 512)->nullable();
                $table->string('attachment', 512)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('documents_categories')) {
            Schema::create('documents_categories', function (Blueprint $table) {
                $table->integer('id_document_category', true)->notNull();
                $table->string('category', 128)->notNull();
                $table->text('description')->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('documents')) {
            Schema::create('documents', function (Blueprint $table) {
                $table->integer('id_document', true)->notNull();
                $table->integer('id_document_category')->notNull();
                $table->foreign('id_document_category')->references('id_document_category')->on('documents_categories')->onDelete('cascade');
                $table->string('title', 128)->notNull();
                $table->string('uri', 512)->notNull();
                $table->string('description', 512)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('news_categories')) {
            Schema::create('news_categories', function (Blueprint $table) {
                $table->integer('id_news_category', true)->notNull();
                $table->string('category', 128)->notNull();
                $table->text('description')->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('news_details')) {
            Schema::create('news_details', function (Blueprint $table) {
                $table->integer('id_news_detail', true)->notNull();
                $table->integer('id_news_category')->notNull();
                $table->foreign('id_news_category')->references('id_news_category')->on('news_categories')->onDelete('cascade');
                $table->string('title', 128)->notNull();
                $table->mediumText('content')->notNull();
                $table->string('author', 128)->notNull();
                $table->string('img_uri_one', 512)->nullable();
                $table->string('img_uri_two', 512)->nullable();
                $table->string('img_uri_three', 512)->nullable();
                $table->string('attachment', 512)->nullable();
                $table->integer('visited')->notNull();
                $table->text('tag')->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('gallery_categories')) {
            Schema::create('gallery_categories', function (Blueprint $table) {
                $table->integer('id_gallery_category', true)->notNull();
                $table->string('category', 128)->notNull();
                $table->text('description')->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }



        if (!Schema::hasTable('gallery_details')) {
            Schema::create('gallery_details', function (Blueprint $table) {
                $table->integer('id_gallery_detail', true)->notNull();
                $table->integer('id_gallery_category')->notNull();
                $table->foreign('id_gallery_category')->references('id_gallery_category')->on('gallery_categories')->onDelete('cascade');
                $table->string('title', 128)->notNull();
                $table->string('uri', 512)->notNull();
                $table->string('description', 512)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('contacts')) {
            Schema::create('contacts', function (Blueprint $table) {
                $table->integer('id_contact', true)->notNull();
                $table->string('address', 512)->notNull();
                $table->string('whatsapp', 50)->nullable();
                $table->string('email', 128)->nullable();
                $table->string('facebook', 128)->nullable();
                $table->string('instagram', 128)->nullable();
                $table->string('youtube', 128)->nullable();
                $table->string('googlemap', 512)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }

        if (!Schema::hasTable('operationals')) {
            Schema::create('operationals', function (Blueprint $table) {
                $table->integer('id_operational', true)->notNull();
                $table->string('hari', 50)->notNull();
                $table->string('waktu', 50)->notNull();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrentOnUpdate();
            });
        }
    }

    public function down($isBlank = false)
    {
        $sql = "DROP DATABASE IF EXISTS " . $this->dbName;
        try {
            DB::statement($sql);
            // $this->dbMake($isBlank);
            return true;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}