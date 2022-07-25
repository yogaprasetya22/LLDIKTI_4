<?php

namespace Database\Seeders;

use App\Models\costum\DbCreate;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Info_category;

class DatabaseSeeder extends Seeder

{
    /**
     * Seed the application's database.
     *
     * @return void
     * 
     */
    protected $authors = [
        [   
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [   
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [   
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [   
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [   
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [   
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [   
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [   
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
        ]
    ];
    public function run()
    {
        // \App\Models\User::factory(10)->create();


        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        foreach ($this->authors as $author) {
            Info_category::create([
                'category' => fake()->text(20),
                'description' => $author['des'],
            ]);
        }
    }
}
