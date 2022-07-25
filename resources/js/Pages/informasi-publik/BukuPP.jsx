import Heading from "@/Components/page/Heading";
import { TitleText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";

const BukuPP = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">
                        BUKU PANDUAN / PEDOMAN
                    </span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article>
                <div className="container flex flex-col gap-5 mb-20">
                    <TitleText>Bagian Umum</TitleText>
                    <div className="flex flex-col pl-6">
                        {BPP.map((data, i) => (
                            <div key={i} className="flex flex-row">
                                <p className="pr-2">•</p>
                                <a
                                    href="#"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3"
                                >
                                    {data.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BukuPP;

const BPP = [
    {
        title: "Pedoman Operasional Tentang Penilaian Angka Kredit Kenaikan Jabatan Akademik/Pangkat Dosen  ",
    },
    {
        title: "Persyaratan Usulan Dosen (NIDN, NIDK, NUP, Perubahan Nomor Registrasi, Perubahan Data Dosen, Pindah Homebase External-Internal) ",
    },
    {
        title: "Buku Panduan Pengusulan Program Penelitian Dan Pengabdian Kepada Masyarakat Melalui Simlitabmas Tahun 2018  ",
    },
    {
        title: "Panduan Penyusunan LKPT APT v1_1 ",
    },
    {
        title: "Panduan Penyusunan LED APT V1_1 ",
    },
    {
        title: "Panduan Edisi XII – Skema Penelitian 2018",
    },
    {
        title: "Persyaratan Perubahan Data Mahasiswa 2018",
    },
    {
        title: "Panduan Akses E-Resources 2018",
    },
    {
        title: "Panduan Beasiswa Peningkatan Prestasi Akademik (PPA) Tahun 2018",
    },
    {
        title: "Tata Cara dihapus PPH / PPN Dana Hibah Penelitian dan Pengabdian bagi Masyarakat",
    },
    {
        title: "Pedoman Perpajakan Hibah Penelitian Tahun 2018",
    },
    {
        title: "SINTA – Panduan Untuk Verifikator",
    },
    {
        title: "SINTA – Panduan Google Scholar",
    },
    {
        title: "SINTA – Panduan untuk Penulis",
    },
    {
        title: "Intisari Statistik Pendidikan Tinggi Tahun 2017",
    },
    {
        title: "Buku Statistik Pendidikan Tinggi Tahun 2017",
    },
    {
        title: "Panduan Tata Cara Penyelenggaraan Rekognisi Pembelajaran Lampau",
    },
    {
        title: "Slide Presentasi Rekognisi Pembelajaran Lampau 2017",
    },
    {
        title: "Pedoman Bantuan Biaya Pendidikan Bidikmisi Tahun 2017",
    },
    {
        title: "Bahan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia pada Rapat Kerja Nasional Tahun 2017",
    },
    {
        title: "Persyaratan dan Prosedur Pendirian dan Perubahan PTS serta Pembukaan Program Studi Perguruan Pada Perguruan Tinggi Tahun 2017",
    },
    {
        title: "Menutupi Pedoman Sistem Penjaminan Mutu Pendidikan Tinggi 2016",
    },
    {
        title: "Pedoman Sistem Penjaminan Mutu Pendidikan Tinggi 2016",
    },
    {
        title: "Buku Kurikulum Pendidikan Tinggi Tahun 2014 Direktorat Pembelajaraan dan Kemahasiswaan Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan",
    },
    {
        title: "Buku Panduan Pengembangan Kurikulum Berbasis Kompetensi Pendidikan Tinggi",
    },
    {
        title: "Pedoman Program Bantuan Dana Untuk Kegiatan Kemahasiswaan (Ko Dan Ekstra Kurikuler) Tahun 2014",
    },
    {
        title: "Buku Pedoman Olimpiade Nasional Matematika dan Ilmu Pengetahuan Alam Perguruan Tinggi (ON MIPA-PT) Tahun 2014",
    },
    {
        title: "Pedoman Program Mahasiswa Wirausaha (PMW) Tahun 2013",
    },
    {
        title: "Pedoman Bidikmisi Tahun 2012",
    },
];
