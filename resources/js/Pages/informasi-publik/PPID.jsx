import Heading from "@/Components/page/Heading";
import { Paragraph, TitleText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";

const PPID = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">PRODUK HUKUM</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article className="my-10">
                <div className="w-full container">
                    <div className="flex flex-col gap-4 mt-10">
                        <TitleText>
                            PPID (Pejabat Pengelola Informasi dan Dokumentasi)
                        </TitleText>
                        <Paragraph>
                            PPID adalah kepanjangan dari Pejabat Pengelola
                            Informasi dan Dokumentasi, dimana PPID berfungsi
                            sebagai pengelola dan penyampai dokumen yang
                            dimiliki oleh badan publik sesuai dengan amanat UU
                            14/2008 tentang Keterbukaan Informasi Publik. Dengan
                            keberadaan PPID maka masyarakat yang akan
                            menyampaikan permohonan informasi lebih mudah dan
                            tidak berbelit karena dilayani lewat satu pintu.
                        </Paragraph>
                        <Paragraph>
                            Pejabat Pengelola Informasi dan Dokumentasi (PPID)
                            adalah pejabat yang bertanggung jawab di bidang
                            penyimpanan, pendokumentasian, penyediaan, dan/atau
                            pelayanan informasi di badan publik.
                        </Paragraph>
                        <TitleText>PROFIL PPID LLDIKTI WILAYAH IV</TitleText>
                        <div className="flex flex-col pl-6">
                            {profil.map((data, i) => (
                                <div key={i} className="flex flex-row">
                                    <p className="pr-2">{data.id}</p>
                                    <a href="/ppid" className="text-[#cc3366]">
                                        {data.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <TitleText>
                            Download Dokumen Standar Pelayanan Publik Kopertis
                            Wilayah IV:
                        </TitleText>
                        <div className="flex flex-col pl-6">
                            {pelayananPublik.map((data, i) => (
                                <div key={i} className="flex flex-row">
                                    <p className="pr-2">{data.id}</p>
                                    <a
                                        href={data.link}
                                        className="text-[#cc3366]"
                                    >
                                        {data.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <TitleText>Daftar Informasi Publik</TitleText>
                        <div className="flex flex-col pl-6">
                            {DaftarInformasiPublik.map((data, i) => (
                                <div key={i} className="flex flex-row">
                                    <p className="pr-2">{data.id}</p>
                                    <a href="/ppid" className="text-[#cc3366]">
                                        {data.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <TitleText>Layanan Informasi Publikasi</TitleText>
                        <div className="flex flex-col pl-6">
                            {LayananInformasiPublik.map((data, i) => (
                                <div key={i} className="flex flex-row">
                                    <p className="pr-2">{data.id}</p>
                                    <a href="/ppid" className="text-[#cc3366]">
                                        {data.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="w-[60%] text-center px-3 py-4 flex justify-between">
                            <div className="h-[30px] w-[6px] rounded-full bg-gray-200"></div>
                            <span className=" font-extrabold text-black dark:text-white text-[19px]">
                                Layanan Online
                            </span>
                        </div>
                        <TitleText>Layanan Publik</TitleText>
                        <TitleText>Bagian Umum</TitleText>
                        <div className="flex flex-col pl-6">
                            {BagianUmum.map((data, i) => (
                                <div key={i} className="flex flex-row">
                                    <p className="pr-2">•</p>
                                    <span className="text-gray-500 dark:text-gray-100">
                                        {data.title}
                                    </span>
                                </div>
                            ))}
                            <span className="pl-[3rem] flex items-center">
                                <p className="text-[25px]">◦</p>
                                <a
                                    href="http://surat.lldikti4.or.id/"
                                    className="text-[#cc3366] pl-3"
                                >
                                    e-Office
                                </a>
                            </span>
                        </div>
                        <TitleText>
                            Bagian Sumberdaya Perguruan Tinggi
                        </TitleText>
                        <div className="flex flex-col pl-6">
                            <div className="flex flex-row">
                                <p className="pr-2">•</p>
                                <span className="text-gray-500 dark:text-gray-100">
                                    Sub Bagian Pendidik dan Tenaga Kependidikan
                                </span>
                            </div>
                            <span className="pl-[3rem] flex items-center text-gray-500 dark:text-gray-100">
                                <p className="text-[25px]">◦</p>
                                <p className="pl-3">Informasi</p>
                            </span>
                            <span className="pl-[3rem] flex items-center text-gray-500 dark:text-gray-100 -mt-2">
                                <p className="text-[25px]">◦</p>
                                <p className="pl-3">
                                    Sertifikasi Dosen (Serdos)
                                </p>
                            </span>
                            <div className="flex flex-row">
                                <p className="pr-2">•</p>
                                <span className="text-gray-500 dark:text-gray-100">
                                    Sub Bagian Pendidik dan Tenaga Kependidikan
                                </span>
                            </div>
                        </div>
                        <TitleText>Bagian Akademik dan Kemahasiswaan</TitleText>
                        <div className="flex flex-col pl-6">
                            <div className="flex flex-row">
                                <p className="pr-2">•</p>
                                <span className="text-gray-500 dark:text-gray-100">
                                    Sub Bagian Akademik
                                </span>
                            </div>
                            <div className="flex flex-row">
                                <p className="pr-2">•</p>
                                <span className="text-gray-500 dark:text-gray-100">
                                    Sub Bagian Kemahasiswaan
                                </span>
                            </div>{" "}
                            <span className="pl-[3rem] flex items-center text-gray-500 dark:text-gray-100">
                                <p className="text-[25px]">◦</p>
                                <p className="pl-3">
                                    Rekomendasi Perpindahan Mahasiswa
                                </p>
                            </span>
                            <span className="pl-[3rem] flex items-center text-gray-500 dark:text-gray-100 -mt-2">
                                <p className="text-[25px]">◦</p>
                                <p className="pl-3">
                                    Informasi Beasiswa Mahasiswa
                                </p>
                            </span>
                        </div>
                        <TitleText>
                            Bagian Kelembagaan, Sistem Informasi dan Kerjasama
                        </TitleText>
                        <div className="flex flex-col pl-6 mb-[2rem]">
                            <div className="flex flex-row">
                                <p className="pr-2">•</p>
                                <span className="text-gray-500 dark:text-gray-100 mb-3">
                                    Sub Bagian Akademik
                                </span>
                            </div>
                            {SBK.map((data, i) => (
                                <span
                                    key={i}
                                    className="pl-[3rem] flex items-center text-gray-500 dark:text-gray-100 -mt-3"
                                >
                                    <p className="text-[25px]">◦</p>
                                    <a
                                        href={data.link}
                                        className={`pl-3 ${
                                            data.link ? "text-[#cc3366]" : ""
                                        }`}
                                    >
                                        {data.title}
                                    </a>
                                </span>
                            ))}
                            <div className="flex flex-row">
                                <p className="pr-2">•</p>
                                <span className="text-gray-500 dark:text-gray-100 mb-3">
                                    Sub Bagian Sistem Informasi dan Kerjasama
                                </span>
                            </div>
                            {SBSI.map((data, i) => (
                                <div key={i}>
                                    <span className="pl-[3rem] flex items-center text-gray-500 dark:text-gray-100 -mt-3">
                                        <p className="text-[25px]">◦</p>
                                        <a
                                            href={data.link}
                                            className={`pl-3 text-[#cc3366]`}
                                        >
                                            {data.title}
                                        </a>
                                    </span>
                                    {data?.data && (
                                        <div className="flex flex-col pl-[6rem]">
                                            {data?.data.map((data2, i2) => (
                                                <div
                                                    key={i2}
                                                    className={`flex flex-row ${
                                                        data2.title ==
                                                        "Pembukaan Perbaikan Semesteran"
                                                            ? " mb-4"
                                                            : ""
                                                    }`}
                                                >
                                                    <p className="pr-2">•</p>
                                                    <span className="text-gray-500 dark:text-gray-100 -mb-1">
                                                        {data2.title}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default PPID;

const profil = [
    {
        id: "1.",
        title: "Profil Singkat",
    },
    {
        id: "2.",
        title: "Tugas Dan Fungsi",
    },
    {
        id: "3.",
        title: "Visi dan Misi",
    },
    {
        id: "4.",
        title: "Struktur PPID",
    },
    {
        id: "5.",
        title: "Regulasi",
    },
    {
        id: "6.",
        title: "Maklumat",
    },
];

const pelayananPublik = [
    {
        id: "1.",
        title: "SK Koordinator Kopertis Wilayah IV tentang Penetapan Maklumat Pelayanan Pada Kopertis Wilayah IV",
        link: "https://www.kopertis4.or.id/wp-content/uploads/2018/05/SK-maklumat-pelayanan-Kopwil-IV.pdf",
    },
    {
        id: "2.",
        title: "SPP Kopertis Wilayah IV Tahun 2016",
        link: "https://www.kopertis4.or.id/wp-content/uploads/2018/05/SPP-Kopertis-Wilayah-IV-Tahun-2016.pdf",
    },
];

const DaftarInformasiPublik = [
    {
        id: "1.",
        title: "Informasi Secara Berkala",
    },
    {
        id: "2.",
        title: "Informasi Tiap Saat",
    },
    {
        id: "3.",
        title: "Informasi Secara Serta Merta",
    },
];

const LayananInformasiPublik = [
    {
        id: "1.",
        title: "Permohonan Informasi",
    },
    {
        id: "2.",
        title: "Pengajuan Keberatan",
    },
    {
        id: "3.",
        title: "Pengajuan Penyelesaian Sengketa",
    },
];
//  •
const BagianUmum = [
    {
        id: 1,
        title: "Sub Bagian Perencanaan dan Penganggaran",
    },
    {
        id: 2,
        title: "Sub Bagian Hukum Kepegawaian dan Tatalaksana",
    },
    {
        id: 3,
        title: "Sub Bagian Tata Usaha dan Barang Milik Negara",
    },
];

const SBK = [
    {
        id: 1,
        title: "Sistem Penjaminan Mutu Internal (SPMI)",
    },
    {
        id: 1,
        title: "Pendirian PT, Perubahan Bentuk, Prodi Baru Perguruan Tinggi",
    },
    {
        id: 1,
        title: "Akreditasi PT dan Akreditasi Prodi",
        link: "http://ban-pt.go.id/",
    },
    {
        id: 1,
        title: "Informasi Data Kelembagaan Perguruan Tinggi",
        link: "http://sisinfo.kopertis4.or.id/",
    },
];
const SBSI = [
    {
        id: 1,
        title: "Perpindahan Homebase Dosen",
        link: "http://homebase.kopertis4.or.id/",
    },
    {
        id: 1,
        title: "Informasi dan Data Pangkalan Pendidikan Tinggi",
        link: "http://forlap.ristekdikti.go.id/",
        data: [
            {
                id: 1,
                title: "Ajuan dan Perubahan NIDN, NUPN dan NIDK",
            },
            {
                id: 1,
                title: "Perubahan Data Mahasiwa",
            },
            {
                id: 1,
                title: "Pembukaan Perbaikan Semesteran",
            },
        ],
    },
    {
        id: 1,
        title: "Informasi Perubahan data-data Dosen",
        link: "http://sister.ristekdikti.go.id/",
    },
    {
        id: 1,
        title: "Informasi Kerjasama Perguruan Tinggi",
        link: "http://laporankerja.ristekdikti.go.id/",
    },
    {
        id: 1,
        title: "Validasi data Lulusan",
        link: "http://wisuda.kopertis4.or.id/",
    },
];
