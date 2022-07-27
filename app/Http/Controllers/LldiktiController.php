<?php

namespace App\Http\Controllers;

use App\Http\Resources\newlldikti;
use App\Models\Info_category;
use App\Models\Info_detail;
use App\Models\lldikti;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LldiktiController extends Controller
{
    public function index()
    {
        return Inertia::render('Index');
    }
    public function info()
    {
        $lldikti = new newlldikti(Info_category::paginate(6));
        return Inertia::render('Info', [
            'title' => 'info',
            'lldikti' => $lldikti,
        ]);
    }
    public function berita()
    {
        $lldikti = new newlldikti(Info_category::paginate(6));
        return Inertia::render('Berita', [
            'title' => 'berita',
            'lldikti' => $lldikti,
        ]);
    }
    public function informasiPublik()
    {
        $lldikti = new newlldikti(Info_category::paginate(6));
        return Inertia::render('informasi-publik/InformasiPublik', [
            'title' => 'informasi-publik',
            'lldikti' => $lldikti,
        ]);
    }
    public function PeraturanRistektikti()
    {
        $lldikti = new newlldikti(Info_detail::paginate(6));
        return Inertia::render('PPID/PRistekdikti', [
            'title' => 'peraturan-ristektikti',
            'lldikti' => $lldikti,
        ]);
    }
}
