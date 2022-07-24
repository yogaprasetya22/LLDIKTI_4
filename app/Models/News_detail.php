<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News_detail extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_news_detail';
    protected $guarded = ['id_news_detail', 'created_at', 'updated_at'];

    public function getRouteKeyName()
    {
        return 'id_news_detail';
    }
}