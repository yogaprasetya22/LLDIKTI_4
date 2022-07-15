import Layout from "@/Layouts/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";
import bgheader from "@/img/bg-header.png";
import digilibrary from "@/img/layanan-online/digilibrary.png";
import buletin from "@/img/layanan-online/buletin.png";
import jurnal from "@/img/layanan-online/jurnal.png";
import sptmj from "@/img/layanan-online/sptmj.png";
import Informasi from "@/img/informasi-lldikti.png";
import galeri1 from "@/img/galeryi-kami/galeri-1.png";
import galeri2 from "@/img/galeryi-kami/galeri-2.png";
import galeri3 from "@/img/galeryi-kami/galeri-3.png";
import galeri4 from "@/img/galeryi-kami/galeri-4.png";
import galeri5 from "@/img/galeryi-kami/galeri-5.png";
import React from "react";

const Index = ({ title }) => {
    return (
        <Layout title={title}>
            <header
                className="relative overflow-hidden bg-no-repeat bg-cover"
                style={{
                    backgroundPosition: "50%",
                    height: "400px",
                    backgroundImage: `url(${bgheader})`,
                    backgroundSize: "auto",
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-center dark:text-white text-black px-6 md:px-12">
                            <h5 className="text-2xl mb-2">Selamat datang di</h5>
                            <h1 className=" text-3xl font-bold mt-0 mb-3">
                                Lembaga Layanan Pendidikan Tinggi Wilayah
                            </h1>
                            <h1 className=" text-3xl font-bold mb-3">
                                <span className="text-[#2654a4]">
                                    Jawa Barat
                                </span>{" "}
                                dan{" "}
                                <span className="text-[#eaa43b]">Banten</span>
                            </h1>
                            <div className=" flex justify-center items-center mb-6">
                                <p className="text-center max-w-[45%]">
                                    LLDIKTI mempunyai tugas membantu peningkatan
                                    mutu penyelenggaraan pendidikan tinggi
                                    negara maupun perguruan tinggi swasta
                                    diwilayah kerjanya
                                </p>
                            </div>
                            <Link
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                href="#"
                                role="button"
                            >
                                Baca Selengkapnya
                                <span className="pl-1">
                                    <FontAwesomeIcon
                                        icon={faArrowRightLong}
                                        className="text-[10px]"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            {/* asdasd */}
            <article className="">
                <div className="w-full h-20 mb-6 flex">
                    <div className=" flex justify-center items-center w-full collapse multi-collapse gap-4">
                        <div className="  p-[8px] rounded-md flex flex-col dark:text-white text-black text-sm">
                            <span className="text-center font-bold text-2xl">
                                98
                            </span>
                            <span className="text-[13px] dark:text-[#edededaa] text-[#303030aa]">
                                Universitas
                            </span>
                        </div>
                        <div className="  p-[8px] rounded-md flex flex-col dark:text-white text-black text-sm">
                            <span className="text-center font-bold text-2xl">
                                19
                            </span>
                            <span className="text-[13px] dark:text-[#edededaa] text-[#303030aa]">
                                Institut
                            </span>
                        </div>
                        <div className="  p-[8px] rounded-md flex flex-col dark:text-white text-black text-sm">
                            <span className="text-center font-bold text-2xl">
                                202
                            </span>
                            <span className="text-[13px] dark:text-[#edededaa] text-[#303030aa]">
                                Sekolah Tinggi
                            </span>
                        </div>
                        <div className="  p-[8px] rounded-md flex flex-col dark:text-white text-black text-sm">
                            <span className="text-center font-bold text-2xl">
                                84
                            </span>
                            <span className="text-[13px] dark:text-[#edededaa] text-[#303030aa]">
                                Akademi
                            </span>
                        </div>
                        <div className="  p-[8px] rounded-md flex flex-col dark:text-white text-black text-sm">
                            <span className="text-center font-bold text-2xl">
                                41
                            </span>
                            <span className="text-[13px] dark:text-[#edededaa] text-[#303030aa]">
                                politektnik
                            </span>
                        </div>
                        <div className="  p-[8px] rounded-md flex flex-col dark:text-white text-black text-sm">
                            <span className="text-center font-bold text-2xl">
                                5
                            </span>
                            <span className="text-[13px] dark:text-[#edededaa] text-[#303030aa]">
                                Komunikasi
                            </span>
                        </div>
                    </div>
                </div>
            </article>
            {/* Layanan Online */}
            <article className="mb-6">
                <div className="flex items-center w-full flex-col">
                    <div className="flex w-full justify-between md:p-[20px_70px] p-[25px]">
                        <span className="text-black dark:text-white font-bold text-[19px]">
                            Layanan Online
                        </span>
                        <Link href="#" className="text-[13px] text-blue-600">
                            Selengkapnya{" "}
                            <span className="pl-1">
                                <FontAwesomeIcon
                                    icon={faArrowRightLong}
                                    className="text-[10px]"
                                />
                            </span>
                        </Link>
                    </div>
                    <div className="w-[90%]">
                        <div className="flex justify-center flex-wrap gap-2">
                            {LayananOnline.map((data, i) => (
                                <img
                                    key={i}
                                    className="hover:-translate-y-1 duration-[150ms] ease-in-out rounded-md shadow-md md:h-[180px]"
                                    style={{
                                        backgroundPosition: "50%",
                                        backgroundSize: "auto",
                                        objectFit: "cover",
                                        background: "#eaea",
                                    }}
                                    src={data.title}
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            {/* Layanan Kami */}
            <article className="mb-6">
                <div className="flex items-center w-full flex-col">
                    <div className="flex w-full justify-between md:p-[20px_70px] p-[25px]">
                        <span className="text-black dark:text-white font-bold text-[19px]">
                            Layanan Kami
                        </span>
                        <Link href="#" className="text-[13px] text-blue-600">
                            Selengkapnya{" "}
                            <span className="pl-1">
                                <FontAwesomeIcon
                                    icon={faArrowRightLong}
                                    className="text-[10px]"
                                />
                            </span>
                        </Link>
                    </div>
                    <div className="w-[100%]">
                        <div className="flex md:justify-center md:flex-wrap gap-2 ">
                            {LayananKami.map((data, i) => (
                                <div
                                    key={i}
                                    className="bg-white md:shadow-[-1px_12px_30px_-13.2px_rgba(0,0,0,0.75)] shadow-[-1px_12px_35px_-16px_rgba(0,0,0,0.75)] mb-1 rounded-[3px] p-[6px] text-[13px] md:w-[44%] m-[0px_5px]"
                                >
                                    <Link
                                        href="#"
                                        className="text-black font-bold"
                                    >
                                        {data.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            {/* Informasi */}
            <article className="mb-6">
                <div className="flex items-center w-full flex-col">
                    <div className="flex w-full justify-between md:p-[20px_70px] p-[25px]">
                        <span className="text-black dark:text-white font-bold text-[19px]">
                            Informasi
                        </span>
                        <Link href="#" className="text-[13px] text-blue-600">
                            Selengkapnya{" "}
                            <span className="pl-1">
                                <FontAwesomeIcon
                                    icon={faArrowRightLong}
                                    className="text-[10px]"
                                />
                            </span>
                        </Link>
                    </div>
                    <div className="w-[100%]">
                        <div className="flex justify-center flex-wrap gap-2  md:p-[0px_10px]">
                            {informasi.map((data, i) => (
                                <div
                                    className="card md:w-[400px] w-full  md:rounded-md rounded-none  md:shadow-[-1px_12px_30px_-23px_rgba(0,0,0,0.75)] bg-white hover:-translate-y-1 duration-[150ms] ease-in-out text-black font-bold"
                                    key={i}
                                >
                                    <figure>
                                        <img src={data.img} alt="Shoes" />
                                    </figure>
                                    <div className="p-[5px_10px]">
                                        <p className="text-[15px]">
                                            {data.title}
                                        </p>
                                    </div>
                                    <div className="p-[5px_10px_5px]">
                                        <p className="text-xs md:text-xs">
                                            {data.date}
                                        </p>
                                    </div>
                                    <div className="p-[0px_10px_10px] border-t-2">
                                        <Link
                                            href="#"
                                            className="text-[13px] text-blue-600"
                                        >
                                            Selengkapnya{" "}
                                            <span className="pl-1">
                                                <FontAwesomeIcon
                                                    icon={faArrowRightLong}
                                                    className="text-[10px]"
                                                />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            {/* Berita Kami */}
            <article className="mb-6">
                <div className="flex items-center w-full flex-col">
                    <div className="flex w-full justify-between md:p-[20px_70px] p-[25px]">
                        <span className="text-black dark:text-white font-bold text-[19px]">
                            Berita Kami
                        </span>
                        <Link href="#" className="text-[13px] text-blue-600">
                            Selengkapnya{" "}
                            <span className="pl-1">
                                <FontAwesomeIcon
                                    icon={faArrowRightLong}
                                    className="text-[10px]"
                                />
                            </span>
                        </Link>
                    </div>
                    <div className="w-[100%]">
                        <div className="flex justify-center flex-wrap gap-2  md:p-[0px_10px]">
                            {informasi.map((data, i) => (
                                <div
                                    className="card md:w-[400px] w-full  md:rounded-md rounded-none  md:shadow-[-1px_12px_30px_-23px_rgba(0,0,0,0.75)] bg-white hover:-translate-y-1 duration-[150ms] ease-in-out text-black font-bold"
                                    key={i}
                                >
                                    <figure>
                                        <img src={data.img} alt="Shoes" />
                                    </figure>
                                    <div className="p-[5px_10px]">
                                        <p className="text-[15px]">
                                            {data.title}
                                        </p>
                                    </div>
                                    <div className="p-[5px_10px_5px]">
                                        <p className="text-xs md:text-xs">
                                            {data.date}
                                        </p>
                                    </div>
                                    <div className="p-[0px_10px_10px] border-t-2">
                                        <Link
                                            href="#"
                                            className="text-[13px] text-blue-600"
                                        >
                                            Selengkapnya{" "}
                                            <span className="pl-1">
                                                <FontAwesomeIcon
                                                    icon={faArrowRightLong}
                                                    className="text-[10px]"
                                                />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            {/* Berita Kami */}
            <article className="mb-6">
                <div className="flex items-center w-full flex-col">
                    <div className="flex w-full justify-between md:p-[20px_70px] p-[25px]">
                        <span className="text-black dark:text-white font-bold text-[19px]">
                            Berita Kami
                        </span>
                        <Link href="#" className="text-[13px] text-blue-600">
                            Selengkapnya{" "}
                            <span className="pl-1">
                                <FontAwesomeIcon
                                    icon={faArrowRightLong}
                                    className="text-[10px]"
                                />
                            </span>
                        </Link>
                    </div>
                    <div className="w-[90%]">
                        <div className="flex justify-around md:p-[0px_10px]">
                            <img
                                className="hover:-translate-y-1 duration-[150ms] ease-in-out rounded-md shadow-md md:h-[370px] md:shadow-[-1px_12px_30px_-13.2px_rgba(0,0,0,0.75)] "
                                style={{
                                    backgroundPosition: "50%",
                                    backgroundSize: "auto",
                                    objectFit: "cover",
                                    background: "#eaea",
                                }}
                                src={galeri1}
                                alt=""
                            />
                            <div className="flex flex-wrap justify-center item-center gap-2">
                                {Galeri.map((data, i) => (
                                    <img
                                        key={i}
                                        className="hover:-translate-y-1 duration-[150ms] ease-in-out rounded-md shadow-md md:h-[180px] md:shadow-[-1px_12px_30px_-13.2px_rgba(0,0,0,0.75)] "
                                        style={{
                                            backgroundPosition: "50%",
                                            backgroundSize: "auto",
                                            objectFit: "cover",
                                            background: "#eaea",
                                        }}
                                        src={data.img}
                                        alt=""
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

//https://placeimg.com/400/225/arch

export default Index;

const LayananOnline = [
    {
        id: 1,
        title: digilibrary,
    },
    {
        id: 2,
        title: buletin,
    },
    {
        id: 3,
        title: jurnal,
    },
    {
        id: 4,
        title: sptmj,
    },
];

const LayananKami = [
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

const informasi = [
    {
        id: 1,
        title: "Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi",
        date: "30 Juni 2022 - 21:37",
        img: Informasi,
    },
    {
        id: 2,
        title: "Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi",
        date: "30 Juni 2022 - 21:37",
        img: Informasi,
    },
    {
        id: 3,
        title: "Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi",
        date: "30 Juni 2022 - 21:37",
        img: Informasi,
    },
];
const Galeri = [
    {
        id: 1,
        img: galeri2,
    },
    {
        id: 2,
        img: galeri3,
    },
    {
        id: 3,
        img: galeri4,
    },
    {
        id: 4,
        img: galeri5,
    },
];
