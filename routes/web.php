<?php

use App\Http\Controllers\LldiktiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('index', [
        'title' => 'LLDIKTI Wilayah 4',
    ]);
});

// Profil

Route::get('/profil', function () {
    return Inertia::render('profil/Profil', [
        'title' => 'profil',
    ]);
});
Route::get('/profil-lldikti-4', function () {
    return Inertia::render('profil/ProfilLLDIKTI4', [
        'title' => 'profil-lldikti-4',
    ]);
});
Route::get('/profil-kepala-lldikti-4', function () {
    return Inertia::render('profil/ProfilKLLDIKTI4', [
        'title' => 'profil-kepala-lldikti-4',
    ]);
});

// end Profil

// Info
Route::get('/info', function () {
    return Inertia::render('Info', [
        'title' => 'info',
    ]);
});
// end Info

// akuntabilitas
Route::get('/akuntabilitas', function () {
    return Inertia::render('Akuntabilitas', [
        'title' => 'akuntabilitas',
    ]);
});
// end akuntabilitas

// Berita
Route::get('/berita', function () {
    return Inertia::render('Berita', [
        'title' => 'berita',
    ]);
});
// end Berita

// Layanan
Route::get('/layanan', function () {
    return Inertia::render('layanan/Layanan', [
        'title' => 'layanan',
    ]);
});
Route::get('/layanan/layanan-online', function () {
    return Inertia::render('layanan/LayananOnline', [
        'title' => 'layanan/layanan-online',
    ]);
});
Route::get('/layanan/layanan-kami', function () {
    return Inertia::render('layanan/LayananKami', [
        'title' => 'layanan/layanan-kami',
    ]);
});
Route::get('/cara-pengajuan-layanan', function () {
    return Inertia::render('layanan/PengajuanLayanan', [
        'title' => 'cara-pengajuan-layanan',
    ]);
});

// end Layanan


require __DIR__ . '/auth.php';
