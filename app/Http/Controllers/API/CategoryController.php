<?php

namespace App\Http\Controllers\API;

use App\Helpers\ApiFormatter;
use App\Http\Controllers\Controller;
use App\Models\Info_category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dt = Info_category::all();
        if ($dt) {
            return ApiFormatter::createApi(200, 'Success', $dt);
        } else {
            return ApiFormatter::createApi(400, 'Failed');
        }
    }
}
