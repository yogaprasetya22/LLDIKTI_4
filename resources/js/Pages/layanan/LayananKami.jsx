import AnimationCard from "@/Components/page/AnimationCard";
import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";
import LaporanGif from "@/img/gif/surat.gif";
import DemamGif from "@/img/gif/demam.gif";
import KomunikasiGif from "@/img/gif/komunikasi.gif";
import SchoolGif from "@/img/gif/school.gif";
import BookGif from "@/img/gif/112-book-morph-outline.gif";
import SuratGif from "@/img/gif/56-document-outline.gif";
import JurnalGif from "@/img/gif/966-privacy-policy-outline.gif";
import tamplate from "@/img/tamplate.png";
import { Link } from "@inertiajs/inertia-react";

const LayananKami = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">Seluruh</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">Layanan Kami</span>
                </h1>
            </Heading>
            <article >
                <div className="flex w-full justify-center items-center md:p-[20px_70px] p-[25px] mt-[2.5rem]">
                    <span
                        className="text-black dark:text-white text-[26px]"
                        style={{ fontWeight: "700", lineHeight: "141.02%" }}
                    >
                        <div className="flex items-center leading-[150%]">
                            Daring
                        </div>
                    </span>
                </div>
                <div className="flex items-center w-full flex-col">
                    <div className="w-[90%] py-7 ">
                        <div className="flex justify-center flex-wrap gap-2">
                            {DataLayananOnline.map((data, i) => (
                                <div
                                    key={i}
                                    className="w-[290px] h-[250px] rounded-md bg-[#ffffff] z-1 relative image-full hover:-translate-y-1 duration-[150ms] ease-in-out shadow-md p-4 border-[1px] mb-7"
                                >
                                    <AnimationCard data={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            <article className="mb-10">
                {" "}
                <div className="flex w-full justify-center items-center md:p-[20px_70px] p-[25px] mt-[2.5rem]">
                    <span
                        className="text-black dark:text-white text-[26px]"
                        style={{ fontWeight: "700", lineHeight: "141.02%" }}
                    >
                        <div className="flex items-center leading-[150%]">
                            Luring
                        </div>
                    </span>
                </div>
                <div className="flex w-full justify-center items-center md:p-[20px_70px] p-[25px]">
                    <div className="w-[100%] py-7">
                        <div className="flex md:justify-evenly md:flex-wrap md:flex-row md:px-0 flex-col px-4 gap-4 ">
                            {DataLayananKami.map((data, i) => {
                                let ganjil =
                                    i % 2 === 0 ? "md:text-end" : "text-start";
                                return (
                                    <div
                                        key={i}
                                        className={`bg-white ${ganjil} shadow-md drop-shadow-md border-y-[1px] mb-1 rounded-[3px] p-[5px] text-[14px] md:w-[44%]`}
                                    >
                                        <Link
                                            href="#"
                                            className="text-black font-semibold"
                                        >
                                            {data.title}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default LayananKami;

const DataLayananOnline = [
    {
        id: 1,
        background: tamplate,
        content: LaporanGif,
        title: "Simonev",
    },
    {
        id: 2,
        background: tamplate,
        content: KomunikasiGif,
        title: "Sisinfo.lldikti4",
    },
    {
        id: 3,
        background: tamplate,
        content: JurnalGif,
        title: "Simantu",
    },
    {
        id: 4,
        background: tamplate,
        content: JurnalGif,
        title: "BKD online",
    },
    {
        id: 1,
        background: tamplate,
        content: SchoolGif,
        title: "Pindah homebase",
    },
    {
        id: 2,
        background: tamplate,
        content: DemamGif,
        title: "SKP online",
    },
    {
        id: 3,
        background: tamplate,
        content: BookGif,
        title: "Digilibrary",
    },
    {
        id: 4,
        background: tamplate,
        content: JurnalGif,
        title: "Aplikasi Empat",
    },
];

const DataLayananKami = [
    {
        id: 1,
        title: "Validasi Ijasah Bagi PTS Yang Sudah Tidak Beroprasi Atau Tutup",
    },
    {
        id: 2,
        title: "Standar Layanan Mutasi Mahasiswa",
    },
    {
        id: 3,
        title: "Penilaian Angka Kredit Jabatan Akademik Dosen Asisten Ahli dan Lektor",
    },
    {
        id: 4,
        title: "Rekomendasi Usulan Jabatan Akademik Dosen Lektor Kepala dan Profesor",
    },
    {
        id: 5,
        title: "Rekomendasi Perubahan Nama Badan Penyelenggara PTS",
    },
    {
        id: 6,
        title: "Rekomendasi Alih Kelola Perguruan Tinggi Swasta",
    },
    {
        id: 7,
        title: "Rekomendasi Pendirian Perguruan Tinggi Swasta Baru",
    },
    {
        id: 8,
        title: "Rekomendasi Pembukaan Program Studi Baru PTS",
    },
    {
        id: 1,
        title: "Validasi Ijasah Bagi PTS Yang Sudah Tidak Beroprasi Atau Tutup",
    },
    {
        id: 2,
        title: "Standar Layanan Mutasi Mahasiswa",
    },
    {
        id: 3,
        title: "Penilaian Angka Kredit Jabatan Akademik Dosen Asisten Ahli dan Lektor",
    },
    {
        id: 4,
        title: "Rekomendasi Usulan Jabatan Akademik Dosen Lektor Kepala dan Profesor",
    },
    {
        id: 5,
        title: "Rekomendasi Perubahan Nama Badan Penyelenggara PTS",
    },
    {
        id: 6,
        title: "Rekomendasi Alih Kelola Perguruan Tinggi Swasta",
    },
    {
        id: 7,
        title: "Rekomendasi Pendirian Perguruan Tinggi Swasta Baru",
    },
    {
        id: 8,
        title: "Rekomendasi Pembukaan Program Studi Baru PTS",
    },
];