import Heading from "@/Components/page/Heading";
import TamplatePdf from "@/Components/page/TamplatePdf";
import Layout from "@/Layouts/Layout";
import React from "react";

const MateriKegiatan = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">MATERI KEGIATAN</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article className="mb-20">
                <TamplatePdf data={DataMateriKegiatan} />
            </article>
        </Layout>
    );
};

export default MateriKegiatan;

const DataMateriKegiatan = [
    {
        des: "Materi kegiatan Penyamaan Persepsi Penilaian Jabatan Akademik Dosen Bagi Ketua Senat Perguruan Tinggi Swasta Secara Online",
        url: "https://www.lldikti4.id/download/materi-kegiatan-penyamaan-persepsi-penilaian-jabatan-akademik-dosen-bagi-ketua-senat-perguruan-tinggi-swasta-secara-online/",
        download: "218",
    },
    {
        des: "Materi Sosialisasi IKU 16 November 2020",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-iku-16-november-2020/",
        download: "339",
    },
    {
        des: "Materi Webinar Strategi Pemenangan Hibah Penelitian Kemenristek dan Publikasi Internasional Bereputasi",
        url: "https://www.lldikti4.id/download/materi-webinar-strategi-pemenangan-hibah-penelitian-kemenristek-dan-publikasi-internasional-bereputasi/",
        download: "495",
    },
    {
        des: "Materi Sosialisasi Kebijakan Merdeka Belajar � Kampus Merdeka 23 Juni 2020",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-kebijakan-merdeka-belajar-kampus-merdeka-23-juni-2020/",
        download: "555",
    },
    {
        des: "Materi Video Conference  Sosialisasi Sistem Pengisian Data Sarana dan Prasarana Perguruan Tinggi  di Lingkungan Lembaga Layanan Pendidikan Tinggi Wilayah IV",
        url: "https://www.lldikti4.id/download/materi-video-conference-sosialisasi-sistem-pengisian-data-sarana-dan-prasarana-perguruan-tinggi-di-lingkungan-lembaga-layanan-pendidikan-tinggi-wilayah-iv/",
        download: "592",
    },
    {
        des: "Materi Video Conference Bimtek Peningkatan Klaster Penelitian 2020",
        url: "https://www.lldikti4.id/download/materi-video-conference-bimtek-peningkatan-klaster-penelitian-2020/",
        download: "517",
    },
    {
        des: "Materi Video Conference Penjelasan Teknis Kontrak Penelitain dan Pengabdian Masyarakat 2020",
        url: "https://www.lldikti4.id/download/materi-video-conference-penjelasan-teknis-kontrak-penelitain-dan-pengabdian-masyarakat-2020/",
        download: "556",
    },
    {
        des: "Materi Bimtek PKM di Universitas Winaya Mukti (Jumat, 1 November 2019)",
        url: "https://www.lldikti4.id/download/materi-bimtek-pkm-di-universitas-winaya-mukti-jumat-1-november-2019/",
        download: "647",
    },
    {
        des: "Materi BIMTEK PKM di IKIP Siliwangi Tanggal 30 Oktober 2019",
        url: "https://www.lldikti4.id/download/materi-bimtek-pkm-di-ikip-siliwangi-tanggal-30-oktober-2019/",
        download: "609",
    },
    {
        des: "Materi Rakor Badan Penyelenggara 2019",
        url: "https://www.lldikti4.id/download/materi-rakor-badan-penyelenggara-2019/",
        download: "557",
    },
    {
        des: "Materi Rakerda tahun 2019",
        url: "https://www.lldikti4.id/download/materi-rakerda-tahun-2019/",
        download: "820",
    },
    {
        des: "Materi Pembinaan Karir Dosen PNS DPK (Prof. Umi Narimawati, M.Si)",
        url: "https://www.lldikti4.id/download/materi-pembinaan-karir-dosen-pns-dpk-prof-umi-narimawati-m-si/",
        download: "434",
    },
    {
        des: "Materi Bimtek Program Kreativitas Mahasiswa Bagi dosen Pembimbing Kemahasiswaan Tahun 2019",
        url: "https://www.lldikti4.id/download/materi-bimtek-program-kreativitas-mahasiswa-bagi-dosen-pembimbing-kemahasiswaan-tahun-2019/",
        download: "801",
    },
    {
        des: "Materi Bimtek Evaluasi SPMI (Juli 2019)",
        url: "https://www.lldikti4.id/download/materi-bimtek-evaluasi-spmi-juli-2019/",
        download: "1002",
    },
    {
        des: "Materi Bimbingan Teknis Penyusunan Dokumen SPMI (18-19 Juni 2019)",
        url: "https://www.lldikti4.id/download/materi-bimbingan-teknis-penyusunan-dokumen-spmi-18-19-juni-2019/",
        download: "1221",
    },
    {
        des: "Materi Bimbingan Teknis Penyusunan Instrumen Akreditasi PT (25-26 April 2019)",
        url: "https://www.lldikti4.id/download/materi-bimbingan-teknis-penyusunan-instrumen-akreditasi-pt-25-26-april-2019/",
        download: "855",
    },
    {
        des: "Materi Bimbingan Teknis Penyusunan Instrumen Akreditasi PT (11-12 April 2019)",
        url: "https://www.lldikti4.id/download/materi-bimbingan-teknis-penyusunan-instrumen-akreditasi-pt-11-12-april-2019/",
        download: "669",
    },
    {
        des: "Materi Sosialisasi Pendirian dan Perubahan Perguruan Tinggi Swasta serta Pembukaan Program Studi pada Perguruan Tinggi Swasta",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-pendirian-dan-perubahan-perguruan-tinggi-swasta-serta-pembukaan-program-studi-pada-perguruan-tinggi-swasta/",
        download: "593",
    },
    {
        des: "Materi Bimbingan Teknis Penyusunan Statuta Perguruan Tinggi Swasta (27-28 Februari 2019)",
        url: "https://www.lldikti4.id/download/materi-bimbingan-teknis-penyusunan-statuta-perguruan-tinggi-swasta-27-28-februari-2019/",
        download: "571",
    },
    {
        des: "Materi Bimbingan Teknis Penyusunan Statuta Perguruan Tinggi Swasta 2019",
        url: "https://www.lldikti4.id/download/materi-bimbingan-teknis-penyusunan-statuta-perguruan-tinggi-swasta-2019/",
        download: "834",
    },
    {
        des: "Materi Seminar KKN Tematik Citarum Harum Hotel Harris 18 Desember 2018",
        url: "https://www.lldikti4.id/download/materi-seminar-kkn-tematik-citarum-harum-hotel-harris-18-desember-2018/",
        download: "492",
    },
    {
        des: "Materi Dr. Totok Prasetyo, B.Eng., M.T.",
        url: "https://www.lldikti4.id/download/materi-dr-totok-prasetyo-b-eng-mt/",
        download: "132",
    },
    {
        des: "Materi Audit Mutu Internal (15-16 Desember 2018)",
        url: "https://www.lldikti4.id/download/materi-audit-mutu-internal-15-16-desember-2018/",
        download: "331",
    },
    {
        des: "Materi Bimtek Kepemimpinan Bagi Mahasiswa Penerima Bidikmisi Tahun 2018",
        url: "https://www.lldikti4.id/download/materi-bimtek-kepemimpinan-bagi-mahasiswa-penerima-bidikmisi-tahun-2018/",
        download: "462",
    },
    {
        des: "Materi Sosialisasi IAPS 4.0 (update)",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-iaps-4-0/",
        download: "768",
    },
    {
        des: "Materi Sosialisasi IAPT 3.0 2018",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-iapt-3-0/",
        download: "273",
    },
    {
        des: "Materi Audit Mutu Internal 2018",
        url: "https://www.lldikti4.id/download/materi-audit-mutu-internal-2018/",
        download: "332",
    },
    {
        des: "Materi Sosialisasi PPPTS 2019",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-pppts-2019/",
        download: "177",
    },
    {
        des: "Materi Sosialisasi Aplikasi Dashboard 2018",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-aplikasi-dashboard-2018/",
        download: "333",
    },
    {
        des: "Materi Workshop Implementasi SPMI Tanggal 23 s.d 25 Oktober 2018",
        url: "https://www.lldikti4.id/download/materi-workshop-implementasi-spmi-tanggal-23-s-d-25-oktober-2018/",
        download: "678",
    },
    {
        des: "Materi Bimtek Penulisan Buku Ajar tgl. 19 s.d. 21 September 2018",
        url: "https://www.lldikti4.id/download/materi-bimtek-penulisan-buku-ajar-tgl-19-s-d-21-september-2018/",
        download: "796",
    },
    {
        des: "Materi Sosialisasi JAD 1-2 Agustus 2018",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-jad-1-2-agustus-2018/",
        download: "537",
    },
    {
        des: "Materi RIP dan Renstra PTS Tanggal 12-14 Juli 2018",
        url: "https://www.lldikti4.id/download/materi-rip-dan-renstra-pts-tanggal-12-14-juli-2018/",
        download: "940",
    },
    {
        des: "Materi Rakerda 2018",
        url: "https://www.lldikti4.id/download/materi-rakerda-2018/",
        download: "498",
    },
    {
        des: "MATERI SOSIALIASI PENGISIAN PORTOFOLIO SERTIFIKASI DOSEN 2018.2",
        url: "https://www.lldikti4.id/download/materi-sosialiasi-pengisian-portofolio-sertifikasi-dosen-2018-2/",
        download: "593",
    },
    {
        des: "MATERI WORKSHOP KOMPETENSI PEMBELAJARAN BAGI DOSEN",
        url: "https://www.lldikti4.id/download/materi-workshop-kompetensi-pembelajaran-bagi-dosen/",
        download: "864",
    },
    {
        des: "Materi Bimtek Pembuatan Dokumen Akreditasi Institusi dan Program Studi PTS Tanggal 7-9 Maret 2018",
        url: "https://www.lldikti4.id/download/materi-bimtek-pembuatan-dokumen-akreditasi-institusi-dan-program-studi-pts-tanggal-7-9-maret-2018/",
        download: "1422",
    },
    {
        des: "Materi Kegiatan Penyamaan Persepsi tgl 29 s.d. 1 Februari 2018",
        url: "https://www.lldikti4.id/download/materi-kegiatan-penyamaan-persepsi-tgl-29-s-d-1-februari-2018/",
        download: "572",
    },
    {
        des: "Materi Kegiatan Penyamaan Persepsi BKD 24 & 25 Januari 2018",
        url: "https://www.lldikti4.id/download/materi-kegiatan-penyamaan-persepsi-bkd-24-25-januari-2018/",
        download: "893",
    },
    {
        des: "Materi Penguatan AIPT C ke B",
        url: "https://www.lldikti4.id/download/materi-penguatan-aipt-c-ke-b/",
        download: "737",
    },
    {
        des: "Materi Workshop Joint Curriculum & Credit Transfer 2017",
        url: "https://www.lldikti4.id/download/materi-workshop-joint-curriculum-credit-transfer-2017/",
        download: "442",
    },
    {
        des: "Materi Bimtek Penyusunan Kurikulum Berorientasi Kerangka Kualifikasi Nasional Indonesia (KKNI) Tahun 2017",
        url: "https://www.lldikti4.id/download/materi-bimtek-penyusunan-kurikulum-berorientasi-kerangka-kualifikasi-nasional-indonesia-kkni-tahun-2017/",
        download: "1504",
    },
    {
        des: "Materi Kegiatan Bimtek Pengisian InStrumen Akreditasi LAM-PT Kes",
        url: "https://www.lldikti4.id/download/materi-kegiatan-bimtek-pengisian-instrumen-akreditasi-lam-pt-kes/",
        download: "569",
    },
    {
        des: "Materi Bimbingan Teknis Penulisan Buku Ajar Tahun 2017",
        url: "https://www.lldikti4.id/download/materi-bimbingan-teknis-penulisan-buku-ajar-tahun-2017/",
        download: "812",
    },
    {
        des: "Tambahan Materi Audit Mutu Internal (AMI)",
        url: "https://www.lldikti4.id/download/tambahan-materi-audit-mutu-internal-ami/",
        download: "958",
    },
    {
        des: "Materi Audit Mutu Internal PTS di Lingkungan Kopertis Wilayah IV",
        url: "https://www.lldikti4.id/download/materi-audit-mutu-internal-pts-di-lingkungan-kopertis-wilayah-iv/",
        download: "977",
    },
    {
        des: "Materi Bimtek Penyusunan Instrumen Akreditasi Institusi PTS",
        url: "https://www.lldikti4.id/download/materi-bimtek-penyusunan-instrumen-akreditasi-institusi-pts/",
        download: "873",
    },
    {
        des: "Materi Sosialisasi Pembinaan bagi Dosen dengan Jabatan Akademik Lektor Kualifikasi Doktor",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-pembinaan-bagi-dosen-dengan-jabatan-akademik-lektor-kualifikasi-doktor/",
        download: "612",
    },
    {
        des: "Materi Tata Kelola",
        url: "https://www.lldikti4.id/download/materi-tata-kelola/",
        download: "891",
    },
    {
        des: "Materi Pelatihan Bimtek Workshop Keterampilan IT 06 Juli 2017",
        url: "https://www.lldikti4.id/download/materi-pelatihan-bimtek-workshop-keterampilan-it-06-juli-2017/",
        download: "787",
    },
    {
        des: "Materi Penjelasan Usulan Jabatan Akademik Profesor",
        url: "https://www.lldikti4.id/download/materi-penjelasan-usulan-jabatan-akademik-profesor/",
        download: "277",
    },
    {
        des: "Materi Penguatan Akreditasi Institusi PT dari B ke A",
        url: "https://www.lldikti4.id/download/materi-penguatan-akreditasi-institusi-pt-dari-b-ke-a/",
        download: "566",
    },
    {
        des: "Materi Statuta",
        url: "https://www.lldikti4.id/download/materi-statuta/",
        download: "798",
    },
    {
        des: "Materi SPMI 4-6 April 2017",
        url: "https://www.lldikti4.id/download/materi-spmi-4-6-april-2017/",
        download: "1247",
    },
    {
        des: "Materi RKAT Tanggal 25 Maret 2017",
        url: "https://www.lldikti4.id/download/materi-rkat-tanggal-25-maret-2017/",
        download: "595",
    },
    {
        des: "Materi Workshop Rencana Kerja & Anggaran Perguruan Tinggi Swasta di Lingkungan Kopertis Wilayah IV",
        url: "https://www.lldikti4.id/download/materi-workshop-rencana-kerja-anggaran-perguruan-tinggi-swasta-di-lingkungan-kopertis-wilayah-iv/",
        download: "1162",
    },
    {
        des: "Materi Workshop Penyusunan Renstra & RIP",
        url: "https://www.lldikti4.id/download/materi-workshop-penyusunan-renstra-rip/",
        download: "1280",
    },
    {
        des: "Materi Pelatihan Jurnal Ilmiah",
        url: "https://www.lldikti4.id/download/materi-pelatihan-jurnal-ilmiah/",
        download: "1612",
    },
    {
        des: "Materi PUPNS 2015",
        url: "https://www.lldikti4.id/download/materi-pupns-2015/",
        download: "3654",
    },
    {
        des: "Materi Borang Akreditasi",
        url: "https://www.lldikti4.id/download/materi-borang-akreditasi/",
        download: "2231",
    },
    {
        des: "Materi Kegiatan Bimtek Implementasi SPMI (15-17 September 2015)",
        url: "https://www.lldikti4.id/download/materi-kegiatan-bimtek-implementasi-spmi-15-17-september-2015/",
        download: "98639",
    },
    {
        des: "Materi Bimtek Jurnal Ilmiah 2015",
        url: "https://www.lldikti4.id/download/materi-bimtek-jurnal-ilmiah-2015/",
        download: "56114",
    },
    {
        des: "Materi Rapat Kerja Daerah (Rakerda) Kopertis Wilayah IV Tahun 2015",
        url: "https://www.lldikti4.id/download/materi-rapat-kerja-daerah-rakerda-kopertis-wilayah-iv-tahun-2015/",
        download: "1903",
    },
    {
        des: "Materi Sosialiasi Program Pembinaan Perguruan Tinggi Swasta (PP-PTS) di Lingkungan Kopertis Wilayah IV Tahun 2015",
        url: "https://www.lldikti4.id/download/materi-sosialiasi-program-pembinaan-perguruan-tinggi-swasta-pp-pts-di-lingkungan-kopertis-wilayah-iv-tahun-2015/",
        download: "3087",
    },
    {
        des: "Petunjuk Singkat Perbaikan Data dan Pelaporan Data melalui Aplikasi Feeder",
        url: "https://www.lldikti4.id/download/manual-pengisian-feeder-pd-dikti-20141-20142/",
        download: "2227",
    },
    {
        des: "Materi Sosialisasi Pembinaan Menuju PTS Sehat 2015 Tanggal 24 Maret 2015",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-pts-sehat-2015-tanggal-24-maret-2015/",
        download: "1909",
    },
    {
        des: "Materi Sosialisasi PMW tanggal 19 Maret 2015 � Jatinangor",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-pmw-tanggal-19-maret-2015-jatinangor/",
        download: "1496",
    },
    {
        des: "Materi Sosialisasi Kebijakan Pendidikan Tinggi dan Program Kerja Kopertis Wilayah IV",
        url: "https://www.lldikti4.id/download/materi-sosialisasi-kebijakan-pendidikan-tinggi-dan-program-kerja-kopertis-wilayah-iv/",
        download: "1317",
    },
];
