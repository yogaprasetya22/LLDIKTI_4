<?php

namespace Database\Seeders;


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
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
        ],
        [
            'des' => 'Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi',
            'category' => 'category'
        ],
        [
            'des' => 'Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek',
            'category' => 'category'
        ],
        [
            'des' => 'Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder',
            'category' => 'category'
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
                'category' => $author['category'],
                'description' => $author['des'],
            ]);
        }
    }
}
