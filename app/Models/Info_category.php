<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

class Info_category extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $primaryKey = 'id_info_category';
    protected $guarded = ['id_info_category'];

    public function getRouteKeyName()
    {
        return 'id_info_category';
    }
}
