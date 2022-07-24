<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info_detail extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_info_detail';
    protected $guarded = ['id_info_detail', 'created_at', 'updated_at'];

    public function getRouteKeyName()
    {
        return 'id_info_detail';
    }
}