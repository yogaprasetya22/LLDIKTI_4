<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info_category extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_info_category';
    protected $guarded = ['id_info_category', 'created_at', 'updated_at'];

    public function getRouteKeyName()
    {
        return 'id_info_category';
    }
}