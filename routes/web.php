<?php

use App\Http\Controllers\LldiktiController;
use App\Models\costum\DbCreate;
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
    return Inertia::render('Index', [
        'title' => 'index',
    ]);
});
// Route::get('/', [LldiktiController::class, 'index']);

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
// Route::get('/info', function () {
//     return Inertia::render('Info', [
//         'title' => 'info',
//     ]);
// });
Route::get('/info', [LldiktiController::class, 'info']);
// end Info

// akuntabilitas
Route::get('/akuntabilitas', function () {
    return Inertia::render('Akuntabilitas', [
        'title' => 'akuntabilitas',
    ]);
});
// end akuntabilitas

// Berita
Route::get('/berita', [LldiktiController::class, 'berita']);
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


// Informasi Publik
Route::get('/informasi-publik', [LldiktiController::class, 'informasiPublik']);

Route::get('/standar-layanan-publik', function () {
    return Inertia::render('informasi-publik/StandarLayananPublik', [
        'title' => 'standar-layanan-publik',
    ]);
});
Route::get('/produk-hukum', function () {
    return Inertia::render('informasi-publik/ProdukHukum', [
        'title' => 'produk-hukum',
    ]);
});
Route::get('/ppid', function () {
    return Inertia::render('informasi-publik/PPID', [
        'title' => 'ppid',
    ]);
});
Route::get('/prosedur-operasional-standar', function () {
    return Inertia::render('informasi-publik/POS', [
        'title' => 'prosedur-operasional-standar',
    ]);
});
Route::get('/peta-proses-bisnis-lldikti-wilayah-iv', function () {
    return Inertia::render('informasi-publik/PPBLW', [
        'title' => 'peta-proses-bisnis-lldikti-wilayah-iv',
    ]);
});
Route::get('/buku-panduan-pedoman', function () {
    return Inertia::render('informasi-publik/BukuPP', [
        'title' => 'buku-panduan-pedoman',
    ]);
});
Route::get('/materi-kegiatan', function () {
    return Inertia::render('informasi-publik/MateriKegiatan', [
        'title' => 'materi-kegiatan',
    ]);
});
Route::get('/buletin-lldikti-wilayah-iv', function () {
    return Inertia::render('informasi-publik/BLW4', [
        'title' => 'buletin-lldikti-wilayah-iv',
    ]);
});
Route::get('/buku-direktori-pts-lldikti-iv', function () {
    return Inertia::render('informasi-publik/BDPL4', [
        'title' => 'buku-direktori-pts-lldikti-iv',
    ]);
});
Route::get('/kegiatan', function () {
    return Inertia::render('informasi-publik/AgendaKegiatan', [
        'title' => 'kegiatan',
    ]);
});
Route::get('/gallery', function () {
    return Inertia::render('informasi-publik/Galery', [
        'title' => 'gallery',
    ]);
});
// end Informasi Publik


// PPID
Route::get('/produk-hukum/undang-undang', function () {
    return Inertia::render('PPID/UUD', [
        'title' => 'undang-undang',
    ]);
});
Route::get('/produk-hukum/surat-edaran', function () {
    return Inertia::render('PPID/SuratEdaran', [
        'title' => 'surat-edaran',
    ]);
});
Route::get("produk-hukum/peraturan-ristektikti", [LldiktiController::class, 'PeraturanRistektikti']);
Route::get('/produk-hukum/peraturan-presiden', function () {
    return Inertia::render('PPID/PPresiden', [
        'title' => 'peraturan-presiden',
    ]);
});
Route::get('/produk-hukum/peraturan-mentri', function () {
    return Inertia::render('PPID/PMentri', [
        'title' => 'peraturan-mentri',
    ]);
});
Route::get('/produk-hukum/peraturan-pemerintah', function () {
    return Inertia::render('PPID/PPemerintah', [
        'title' => 'peraturan-pemerintah',
    ]);
});
Route::get('/produk-hukum/sk-dirjen', function () {
    return Inertia::render('PPID/SKD', [
        'title' => 'sk-dirjen',
    ]);
});
// end PPID







//ROUTE PENGADUAN
Route::get('/DbDelete', function () {
    $db = new DbCreate();
    $db->down(false);
    return redirect('/');
});

Route::get('/DbCreate', function () {
    $db = new DbCreate();
    $db->dbMake(false);
    return redirect('/');
});






require __DIR__ . '/auth.php';
