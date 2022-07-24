<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery_detail extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_gallery_detail';
    protected $guarded = ['id_gallery_detail', 'created_at', 'updated_at'];

    public function getRouteKeyName()
    {
        return 'id_gallery_detail';
    }
}