import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";
import IconPdf from "@/img/pdf-icon.png";
import TamplatePdf from "@/Components/page/TamplatePdf";

const ProdukHukum = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">Produk Hukum</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <TamplatePdf data={DataProdukHukum} />
        </Layout>
    );
};

export default ProdukHukum;

const DataProdukHukum = [
    {
        des: "PERATURAN MENTERI PENDIDIKAN DAN KEBUDAYAAN REPUBLIK INDONESIA NOMOR 5 TAHUN 2020 TENTANG AKREDITASI PROGRAM STUDI DAN PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/peraturan-menteri-pendidikan-dan-kebudayaan-republik-indonesia-nomor-5-tahun-2020-tentang-akreditasi-program-studi-dan-perguruan-tinggi/",
        download: 150,
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 20 Tahun 2018 Tentang Penelitian",
        url: "https://www.lldikti4.id/download/peraturan-menteri-riset-teknologi-dan-pendidikan-tinggi-republik-indonesia-nomor-20-tahun-2018-tentang-penelitian/",
        download: 672,
    },
    {
        des: "PERATUARAN MENTERI RISET, TEKNOLOGI, DAN PENDIDIKAN TINGGI REPUBLIK INDONESIA  NOMOR 15  TAHUN 2018 TENTANG  ORGANISASI DAN TATA KERJA LEMBAGA LAYANAN PENDIDIKAN TINGGI",
        url: "https://www.lldikti4.id/download/peratuaran-menteri-riset-teknologi-dan-pendidikan-tinggi-republik-indonesia-nomor-15-tahun-2018-tentang-organisasi-dan-tata-kerja-lembaga-layanan-pendidikan-tinggi/",
        download: 377,
    },
    {
        des: "PERMEN Nomor 20 Tahun 2017 Tentang PEMBERIAN TUNJANGAN PROFESI DOSEN DAN TUNJANGAN KEHORMATAN PROFESOR",
        url: "https://www.lldikti4.id/download/permen-nomor-20-tahun-2017-tentang-pemberian-tunjangan-profesi-dosen-dan-tunjangan-kehormatan-profesor/",
        download: 1176,
    },
    {
        des: "PERMEN Nomor 50 Tahun 2017 Tentang RENSTRA Kemenristek Dikti",
        url: "https://www.lldikti4.id/download/permen-nomor-50-tahun-2017-tentang-renstra-kemenristek-dikti/",
        download: 315,
    },
    {
        des: "Permen Nomor 51 Tahun 2017 Tentang SERTIFIKASI PENDIDIK UNTUK DOSEN",
        url: "https://www.lldikti4.id/download/permen-nomor-51-tahun-2017-tentang-sertifikasi-pendidik-untuk-dosen/",
        download: 224,
    },
    {
        des: "KEPUTUSAN DIRJEN PEMBELAJARAN DAN KEMAHASISWAAN KEMRISTEKDIKTI NOMOR 302BSK2017 TENTANG PDM",
        url: "https://www.lldikti4.id/download/keputusan-dirjen-pembelajaran-dan-kemahasiswaan-kemristekdikti-nomor-302bsk2017-tentang-pdm/",
        download: 265,
    },
    {
        des: "Lampiran SK DIRJEN PEDOMAN TATA CARA PENYELENGAARAAN RPL",
        url: "https://www.lldikti4.id/download/lampiran-sk-dirjen-pedoman-tata-cara-penyelengaaraan-rpl/",
        download: 248,
    },
    {
        des: "SK DIRJEN PEDOMAN TATA CARA PENYELENGARAAN RPL",
        url: "https://www.lldikti4.id/download/sk-dirjen-pedoman-tata-cara-penyelengaraan-rpl/",
        download: 245,
    },
    {
        des: "KEPMEN-Diklat-PPG",
        url: "https://www.lldikti4.id/download/kepmen-diklat-ppg/",
        download: 78,
    },
    {
        des: "SURAT EDARAN DOSEN BERKUALIFIKASI S1",
        url: "https://www.lldikti4.id/download/surat-edaran-dosen-berkualifikasi-s1/",
        download: 202,
    },
    {
        des: "Lampiran PERMEN No 20 PEMBERIAN TUNJANGAN PROFESI DOSEN DAN TUNJANGAN KEHORMATAN PROFESOR",
        url: "https://www.lldikti4.id/download/lampiran-permen-no-20-pemberian-tunjangan-profesi-dosen-dan-tunjangan-kehormatan-profesor/",
        download: 1941,
    },
    {
        des: "PERMEN No. 20 PEMBERIAN TUNJANGAN PROFESI DOSEN DAN TUNJANGAN KEHORMATAN PROFESOR",
        url: "https://www.lldikti4.id/download/permen-no-20-pemberian-tunjangan-profesi-dosen-dan-tunjangan-kehormatan-profesor/",
        download: 3015,
    },
    {
        des: "Peraturan BAN PT No. 4 tahun 2017 tentang Instrumen Akreditasi",
        url: "https://www.lldikti4.id/download/peraturan-ban-pt-no-4-tahun-2017-tentang-instrumen-akreditasi/",
        download: 1105,
    },
    {
        des: "Peraturan BAN PT No. 2 tahun 2017 tentang SAN Dikti",
        url: "https://www.lldikti4.id/download/peraturan-ban-pt-no-2-tahun-2017-tentang-san-dikti/",
        download: 753,
    },
    {
        des: "SE Dirjen Kelembagaan Ilmu Pengetahuan, Teknologi dan Dikti",
        url: "https://www.lldikti4.id/download/se-dirjen-kelembagaan-ilmu-pengetahuan-teknologi-dan-dikti/",
        download: 270,
    },
    {
        des: "PERATURAN PEMERINTAH REPUBLIK INDONESIA NOMOR 37 TAHUN 2009 TENTANG DOSEN",
        url: "https://www.lldikti4.id/download/peraturan-pemerintah-republik-indonesia-nomor-37-tahun-2009-tentang-dosen/",
        download: 770,
    },
    {
        des: "NOMOR 66 TAHUN 2010 TENTANG PERUBAHAN ATAS PERATURAN PEMERINTAH NOMOR 17 TAHUN 2010 TENTANG PENGELOLAAN DAN PENYELENGGARAAN PENDIDIKAN",
        url: "https://www.lldikti4.id/download/nomor-66-tahun-2010-tentang-perubahan-atas-peraturan-pemerintah-nomor-17-tahun-2010-tentang-pengelolaan-dan-penyelenggaraan-pendidikan/",
        download: 1321,
    },
    {
        des: "NOMOR 17 TAHUN 2010 TENTANG PENGELOLAAN DAN PENYELENGGARAAN PENDIDIKAN",
        url: "https://www.lldikti4.id/download/nomor-17-tahun-2010-tentang-pengelolaan-dan-penyelenggaraan-pendidikan/",
        download: 1146,
    },
    {
        des: "Penjelasan UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 16 TAHUN 2001 TENTANG Y A Y A S A N",
        url: "https://www.lldikti4.id/download/penjelasan-undang-undang-republik-indonesia-nomor-16-tahun-2001-tentang-y-a-y-a-s-a-n/",
        download: 2293,
    },
    {
        des: "UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 16 TAHUN 2001 TENTANG Y A Y A S A N",
        url: "https://www.lldikti4.id/download/undang-undang-republik-indonesia-nomor-16-tahun-2001-tentang-y-a-y-a-s-a-n/",
        download: 2565,
    },
    {
        des: "PERATURAN PRESIDEN REPUBLIK INDONESIA NOMOR 87 TAHUN 2016 TENTANG SATUAN TUGAS SAPU BERSIH PUNGUTAN LIAR",
        url: "https://www.lldikti4.id/download/peraturan-presiden-republik-indonesia-nomor-87-tahun-2016-tentang-satuan-tugas-sapu-bersih-pungutan-liar/",
        download: 346,
    },
    {
        des: "Lampiran Perpres NOMOR 8 TAHUN 2012 TENTANG KERANGKA KUALIFIKASI NASIONAL INDONESIA",
        url: "https://www.lldikti4.id/download/lampiran-perpres-nomor-8-tahun-2012-tentang-kerangka-kualifikasi-nasional-indonesia/",
        download: 439,
    },
    {
        des: "Perpres NOMOR 8 TAHUN 2012 TENTANG KERANGKA KUALIFIKASI NASIONAL INDONESIA",
        url: "https://www.lldikti4.id/download/perpres-nomor-8-tahun-2012-tentang-kerangka-kualifikasi-nasional-indonesia/",
        download: 714,
    },
    {
        des: "NOMOR 15 TAHUN 2017 TENTANG PENAMAAN PROGRAM STUDI PADA PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/nomor-15-tahun-2017-tentang-penamaan-program-studi-pada-perguruan-tinggi/",
        download: 481,
    },
    {
        des: "Lampiran NOMOR 14 TAHUN 2017 TENTANG DAFTAR KEGIATAN DAN OBJEK PERIZINAN PENELITIAN ASING YANG TIDAK DIREKOMENDASIKAN",
        url: "https://www.lldikti4.id/download/nomor-14-tahun-2017-tentang-daftar-kegiatan-dan-objek-perizinan-penelitian-asing-yang-tidak-direkomendasikan-2/",
        download: 117,
    },
    {
        des: "NOMOR 14 TAHUN 2017 tentang DAFTAR KEGIATAN DAN OBJEK PERIZINAN PENELITIAN ASING YANG TIDAK DIREKOMENDASIKAN",
        url: "https://www.lldikti4.id/download/nomor-14-tahun-2017-tentang-daftar-kegiatan-dan-objek-perizinan-penelitian-asing-yang-tidak-direkomendasikan/",
        download: 59,
    },
    {
        des: "Lampiran Permen No 4 Tahun 2017 tentang Pedoman Kerjasama di Kemenristek dikti",
        url: "https://www.lldikti4.id/download/lampiran-permen-no-4-tahun-2017-tentang-pedoman-kerjasama-di-kemenristek-dikti/",
        download: 236,
    },
    {
        des: "Permen No 4 Tahun 2017 tentang Pedoman Kerjasama di Kemenristek dikti",
        url: "https://www.lldikti4.id/download/pedoman-kerja-sama-di-kementerian-riset-teknologi-dan-pendidikan-tinggi/",
        download: 718,
    },
    {
        des: "PEMBUKAAN, PERUBAHAN, DAN PENUTUPAN PROGRAM STUDI DI LUAR KAMPUS UTAMA PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/pembukaan-perubahan-dan-penutupan-program-studi-di-luar-kampus-utama-perguruan-tinggi/",
        download: 542,
    },
    {
        des: "GELAR DAN TATA CARA PENULISAN GELAR DI PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/gelar-dan-tata-cara-penulisan-gelar-di-perguruan-tinggi/",
        download: 11051,
    },
    {
        des: "PERGURUAN TINGGI PENYELENGGARA PROGRAM STUDI DI LUAR DOMISILI",
        url: "https://www.lldikti4.id/download/perguruan-tinggi-penyelenggara-program-studi-di-luar-domisili/",
        download: 205,
    },
    {
        des: "PERGURUAN TINGGI PENYELENGGARA SERTIFIKASI PENDIDIK UNTUK DOSEN",
        url: "https://www.lldikti4.id/download/perguruan-tinggi-penyelenggara-sertifikasi-pendidik-untuk-dosen/",
        download: 383,
    },
    {
        des: "Permendikbud NOMOR:84 TAHUN 2013 TENTANG PENGANGKATAN DOSEN TETAP NON PNS di PTN DAN DOSEN TETAP di PTS",
        url: "https://www.lldikti4.id/download/permendikbud-nomor84-tahun-2013-tentang-pengangkatan-dosen-tetap-non-pns-di-ptn-dan-dosen-tetap-di-pts-2/",
        download: 1577,
    },
    {
        des: "LAMPIRAN PERATURAN MENTERI PENDIDIKAN DAN KEBUDAYAAN NOMOR 42 TAHUN 2013",
        url: "https://www.lldikti4.id/download/lampiran-peraturan-menteri-pendidikan-dan-kebudayaan-nomor-42-tahun-2013/",
        download: 128,
    },
    {
        des: "PERUBAHAN ATAS PERATURAN MENTERI PENDIDIKAN DAN KEBUDAYAAN NOMOR 1 TAHUN 2013 TENTANG ORGANISASI DAN TATA KERJA KOORDINASI PERGURUAN TINGGI SWASTA",
        url: "https://www.lldikti4.id/download/perubahan-atas-peraturan-menteri-pendidikan-dan-kebudayaan-nomor-1-tahun-2013-tentang-organisasi-dan-tata-kerja-koordinasi-perguruan-tinggi-swasta/",
        download: 365,
    },
    {
        des: "LAMPIRAN PERMENRISTEKDIKTI NO. 20 TH. 2017 TTG TUNJANGAN PROFESI & KEHORMATAN",
        url: "https://www.lldikti4.id/download/lampiran-permenristekdikti-no-20-th-2017-ttg-tunjangan-profesi-kehormatan/",
        download: 331,
    },
    {
        des: "PERMENRISTEKDIKTI NO.  20 TH. 2017 TTG TUNJANGAN PROFESI & KEHORMATAN",
        url: "https://www.lldikti4.id/download/permenristekdikti-no-20-th-2017-ttg-tunjangan-profesi-kehormatan/",
        download: 220,
    },
    {
        des: "GURU DAN DOSEN",
        url: "https://www.lldikti4.id/download/guru-dan-dosen/",
        download: 2666,
    },
    {
        des: "IMPLEMENTASI SN DIKTI PADA PROGRAM MAGISTER, DOKTOR DAN DOKTOR TERAPAN",
        url: "https://www.lldikti4.id/download/implementasi-sn-dikti-pada-program-magister-doktor-dan-doktor-terapan/",
        download: 544,
    },
    {
        des: "SURAT EDARAN DOSEN S1",
        url: "https://www.lldikti4.id/download/surat-edaran-dosen-s1/",
        download: 519,
    },
    {
        des: "Rumpun Ilmu Pengetahuan dan Teknologi serta Gelar Lulusan Peruruan Tinggi",
        url: "https://www.lldikti4.id/download/rumpun-ilmu-pengetahuan-dan-teknologi-serta-gelar-lulusan-peruruan-tinggi/",
        download: 1761,
    },
    {
        des: "PROGRAM PEMBINAAN PERGURUAN TINGGI SWASTA TAHUN 2015",
        url: "https://www.lldikti4.id/download/program-pembinaan-perguruan-tinggi-swasta-tahun-2015/",
        download: 364,
    },
    {
        des: "PERMENRISTEKDIKTI NOMOR 100 TAHUN 2016 PENGGANTI PERMENRISTEKDIKTI NOMOR 50",
        url: "https://www.lldikti4.id/download/permenristekdikti-nomor-100-tahun-2016-pengganti-permenristekdikti-nomor-50/",
        download: 870,
    },
    {
        des: "PERUBAHAN KEDUA ATAS PERATURAN PEMERINTAH NOMOR 19 TAHUN 2005 TENTANG STANDAR NASIONAL PENDIDIKAN",
        url: "https://www.lldikti4.id/download/perubahan-kedua-atas-peraturan-pemerintah-nomor-19-tahun-2005-tentang-standar-nasional-pendidikan/",
        download: 289,
    },
    {
        des: "PENYELENGGARAAN PENDIDIKAN TINGGI DAN PENGELOLAAN PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/penyelenggaraan-pendidikan-tinggi-dan-pengelolaan-perguruan-tinggi-2/",
        download: 1231,
    },
    {
        des: "PERUBAHAN ATAS PERATURAN PEMERINTAH NOMOR 19 TAHUN 2005 TENTANG STANDAR NASIONAL PENDIDIKAN",
        url: "https://www.lldikti4.id/download/perubahan-atas-peraturan-pemerintah-nomor-19-tahun-2005-tentang-standar-nasional-pendidikan/",
        download: 696,
    },
    {
        des: "PELAKSANAAN UNDANG-UNDANG NOMOR 25 TAHUN 2009 TENTANG PELAYANAN PUBLIK",
        url: "https://www.lldikti4.id/download/pelaksanaan-undang-undang-nomor-25-tahun-2009-tentang-pelayanan-publik/",
        download: 362,
    },
    {
        des: "PERMENRISTEK No 50, PENDIRIAN, PERUBAHAN, PEMBUBARAN PERGURUAN TINGGI NEGERI, DAN PENDIRIAN, PERUBAHAN, PENCABUTAN IZIN PERGURUAN TINGGI SWASTA",
        url: "https://www.lldikti4.id/download/permenristek-no-50-pendirian-perubahan-pembubaran-perguruan-tinggi-negeri-dan-pendirian-perubahan-pencabutan-izin-perguruan-tinggi-swasta/",
        download: 448,
    },
    {
        des: "REGISTRASI PENDIDIK PADA PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/registrasi-pendidik-pada-perguruan-tinggi-2/",
        download: 349,
    },
    {
        des: "PEDOMAN STATUTA DAN ORGANISASI PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/pedoman-statuta-dan-organisasi-perguruan-tinggi/",
        download: 1714,
    },
    {
        des: "PERMENDIKBUD No 095, PENDIRIAN, PERUBAHAN, DAN PEMBUBARAN PERGURUAN TINGGI NEGERI SERTA PENDIRIAN, PERUBAHAN, DAN PENCABUTAN IZIN PERGURUAN TINGGI SWASTA",
        url: "https://www.lldikti4.id/download/pendirian-perubahan-dan-pembubaran-perguruan-tinggi-negeri-serta-pendirian-perubahan-dan-pencabutan-izin-perguruan-tinggi-swasta/",
        download: 435,
    },
    {
        des: "KEBIJAKAN PENYUSUNAN INSTRUMEN AKREDITASI",
        url: "https://www.lldikti4.id/download/kebijakan-penyusunan-instrumen-akreditasi/",
        download: 107,
    },
    {
        des: "SISTEM AKREDITASI NASIONAL PENDIDIKAN TINGGI",
        url: "https://www.lldikti4.id/download/sistem-akreditasi-nasional-pendidikan-tinggi/",
        download: 82,
    },
    {
        des: "TATA CARA PELAKSANAAN UJI KOMPETENSI MAHASISWA BIDANG KESEHATAN",
        url: "https://www.lldikti4.id/download/tata-cara-pelaksanaan-uji-kompetensi-mahasiswa-bidang-kesehatan/",
        download: 170,
    },
    {
        des: "PANDUAN UMUM PENGENALAN KEHIDUPAN KAMPUS BAGI MAHASISWA BARU",
        url: "https://www.lldikti4.id/download/panduan-umum-pengenalan-kehidupan-kampus-bagi-mahasiswa-baru/",
        download: 393,
    },
    {
        des: "KURIKULUM INTI PENDIDIKAN TINGGI",
        url: "https://www.lldikti4.id/download/kurikulum-inti-pendidikan-tinggi/",
        download: 738,
    },
    {
        des: "SALINAN PERMEN NOMOR 15 TAHUN 2017 TENTANG PENAMAAN PROGRAM STUDI PADA PT",
        url: "https://www.lldikti4.id/download/salinan-permen-nomor-15-tahun-2017-tentang-penamaan-program-studi-pada-pt/",
        download: 1353,
    },
    {
        des: "PERMENRISTEKDIKTI NOMOR 1 TAHUN 2017 TENTANG PSDKU",
        url: "https://www.lldikti4.id/download/permenristekdikti-nomor-1-tahun-2017-tentang-psdku-2/",
        download: 430,
    },
    {
        des: "NOMOR 63  TAHUN 2016 TENTANG GELAR DAN TATA CARA PENULISAN GELAR DI PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/nomor-63-tahun-2016-tentang-gelar-dan-tata-cara-penulisan-gelar-di-perguruan-tinggi/",
        download: 7885,
    },
    {
        des: "PERMENRISTEKDIKTI NO 2 TAHUN 2016 TAS PERATURAN MENTERI  RISET, TEKNOLOGI, DAN  PENDIDIKAN  TINGG I NOMOR 26  TAHUN 2015  TENTANG  REGISTRASI  PENDIDIK  PADA PERGURUAN TINGGI DAN NOMOR 26 TAHUN 2015 TENTANG REGISTRASI PENDIDIK PADA PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/registrasi-pendidik-pada-perguruan-tinggi/",
        download: 1483,
    },
    {
        des: "LAMPIRAN PERATURAN MENTERI NOMOR 2 TAHUN 2016 TENTANG REGISTRASI PENDIDIK PADA PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/lampiran-peraturan-menteri-nomor-2-tahun-2016-tentang-registrasi-pendidik-pada-perguruan-tinggi/",
        download: 1827,
    },
    {
        des: "PERMEN NOMOR 2 TAHUN 2016 TENTANG REGISTRASI PENDIDIK PADA PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/permen-nomor-26-tahun-2015-tentang-registrasi-pendidik-pada-perguruan-tinggi/",
        download: 630,
    },
    {
        des: "PENYELENGGARAAN PENDIDIKAN TINGGI DAN PENGELOLAAN PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/penyelenggaraan-pendidikan-tinggi-dan-pengelolaan-perguruan-tinggi/",
        download: 681,
    },
    {
        des: "UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 12 TAHUN 2012 TENTANG PENDIDIKAN TINGGI",
        url: "https://www.lldikti4.id/download/undang-undang-republik-indonesia-nomor-12-tahun-2012-tentang-pendidikan-tinggi/",
        download: 3908,
    },
    {
        des: "SALINAN 100. PERMENRISTEKDIKTI NOMOR 100 TAHUN 2016 PENGGANTI PERMENRISTEKDIKTI NOMOR 50",
        url: "https://www.lldikti4.id/download/salinan-100-permenristekdikti-nomor-100-tahun-2016-pengganti-permenristekdikti-nomor-50/",
        download: 2023,
    },
    {
        des: "AKREDITASI PROGRAM STUDI DAN PERGURUAN TINGGI",
        url: "https://www.lldikti4.id/download/akreditasi-program-studi-dan-perguruan-tinggi/",
        download: 1130,
    },
    {
        des: "PERMENRISTEKDIKTI NOMOR 62 TAHUN 2016 TENTANG SPMI-SALINAN",
        url: "https://www.lldikti4.id/download/permenristekdikti-nomor-62-tahun-2016-tentang-spmi-salinan/",
        download: 3343,
    },
    {
        des: "PERMENRISTEKDIKTI NOMOR 61 TAHUN 2016 TENTANG PANGKALAN DATA PENDIDIKAN TINGGI",
        url: "https://www.lldikti4.id/download/permenristekdikti-nomor-61-tahun-2016-tentang-pangkalan-data-pendidikan-tinggi/",
        download: 3519,
    },
    {
        des: "NOMOR 11 TAHUN 2014 TENTANG KEINSINYURAN",
        url: "https://www.lldikti4.id/download/nomor-11-tahun-2014-tentang-keinsinyuran/",
        download: 2245,
    },
    {
        des: "Undang Undang Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
        url: "https://www.lldikti4.id/download/undang-undang-nomor-11-tahun-2008-tentang-informasi-dan-transaksi-elektronik/",
        download: 2224,
    },
    {
        des: "Undang Undang Nomor 20 tahun 2003 tentang Sistem pendidikan nasional",
        url: "https://www.lldikti4.id/download/undang-undang-nomor-20-tahun-2003-tentang-sistem-pendidikan-nasional/",
        download: 3694,
    },
    {
        des: "PERUBAHAN ATAS UNDANG-UNDANG NOMOR 16 TAHUN 2001 TENTANG YAYASAN",
        url: "https://www.lldikti4.id/download/perubahan-atas-undang-undang-nomor-16-tahun-2001-tentang-yayasan/",
        download: 2403,
    },
];
