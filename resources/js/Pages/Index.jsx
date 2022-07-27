import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import bgheader from "@/img/bg-header.png";
import BookGif from "@/img/gif/112-book-morph-outline.gif";
import SuratGif from "@/img/gif/56-document-outline.gif";
import JurnalGif from "@/img/gif/966-privacy-policy-outline.gif";
import tamplate from "@/img/tamplate.png";
import Informasi from "@/img/informasi-lldikti.png";
import galeri1 from "@/img/galeryi-kami/galeri-1.png";
import galeri2 from "@/img/galeryi-kami/galeri-2.png";
import galeri3 from "@/img/galeryi-kami/galeri-3.png";
import galeri4 from "@/img/galeryi-kami/galeri-4.png";
import galeri5 from "@/img/galeryi-kami/galeri-5.png";
import IconSalin from "@/img/icon-salin.png";
import IconLLDIKTI from "@/img/icon-llditi.png";
import React from "react";
import Tamplate from "@/Components/page/Tamplate";
import Chard from "@/Components/page/Chard";
import AnimationCard from "@/Components/page/AnimationCard";

const Index = ({ title }) => {
    return (
        <Layout title={title}>
            <header
                className="relative overflow-hidden bg-no-repeat bg-cover mt-10"
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
                            <h5 className="md:text-3xl lg:mt-0 text-[19px] lg:mb-4  md:mb-2 font-semibold">
                                Selamat datang di
                            </h5>
                            <h1 className=" md:text-[35px] text-[25px] font-bold mt-0  mb-1">
                                Lembaga Layanan Pendidikan Tinggi Wilayah
                            </h1>
                            <h1 className=" md:text-[35px] text-[25px] font-bold mb-3">
                                <span className="text-[#2654a4]">
                                    Jawa Barat
                                </span>{" "}
                                dan{" "}
                                <span className="text-[#eaa43b]">Banten</span>
                            </h1>
                            <div className=" flex justify-center items-center mb-6">
                                <p className="text-center lg:max-w-[60%]  md:text-[17.5px] max-w-[80%] text-[15px]">
                                    LLDIKTI mempunyai tugas membantu peningkatan
                                    mutu penyelenggaraan pendidikan tinggi
                                    negara maupun perguruan tinggi swasta
                                    diwilayah kerjanya
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-center gap-4 flex-col md:flex-row mb-1">
                                <Link
                                    className="flex text-[16px] leading-[16px] font-extrabold text-blue-100 border-[3px] p-3 rounded-md  dark:border-[#393939] border-[#2654a4] bg-[#2654a4] dark:hover:bg-[#393939] transition-all justify-center items-center"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    href="#"
                                    role="button"
                                >
                                    Layanan Kami
                                    <span className="pl-2">
                                        <img
                                            src={IconSalin}
                                            alt=""
                                            className="w-[16px]"
                                        />
                                    </span>
                                </Link>
                                <Link
                                    className="flex text-[16px] leading-[16px] text-[#2654a4] font-extrabold hover:text-blue-100 border-[3px] p-3 rounded-md border-[#2654a4]  hover:border-[#2654a4] hover:bg-[#2654a4]  transition-all justify-center items-center"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    href="#"
                                    role="button"
                                >
                                    Profil LLDIKTI
                                    <span className="pl-2">
                                        <img
                                            src={IconLLDIKTI}
                                            alt=""
                                            className="w-[16px]"
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Sebaran Perguruan Tinggi */}
            <article className="mt-10 mb-16">
                <div className="w-full md:mt-0 flex">
                    <div className=" flex flex-col md:flex-row justify-center mitems-center w-full collapse multi-collapse md:gap-6 gap-2">
                        {PerguruanTinggi.map((data, i) => (
                            <div
                                key={i}
                                className=" p-[8px] rounded-md flex flex-col dark:text-white text-black text-sm"
                            >
                                <span className="text-center font-bold text-3xl">
                                    {data.total}
                                </span>
                                <span className="text-[14px] dark:text-[#eaeaea] text-[#000] text-center">
                                    {data.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
            {/* Layanan Online */}
            <Tamplate
                title="Layanan Online"
                color={true}
                link="layanan/layanan-online"
            >
                <div className="w-[90%] py-7">
                    <div className="flex justify-center flex-wrap gap-2">
                        {LayananOnline.map((data, i) => (
                            <div
                                key={i}
                                className="w-[290px] h-[250px] rounded-md bg-[#ffffff] z-1 relative image-full hover:-translate-y-1 duration-[150ms] ease-in-out shadow-md p-4 border-[1px]"
                            >
                                <AnimationCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </Tamplate>
            {/* Layanan Kami */}
            <Tamplate title="Layanan Kami" link="layanan/layanan-kami">
                <div className="w-[90%] md:w-[100%] py-7">
                    <div className="flex md:justify-evenly md:flex-wrap md:flex-row md:px-0 flex-col px-4 gap-4 ">
                        {LayananKami.map((data, i) => {
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
            </Tamplate>

            {/* Berita Kami */}
            <Tamplate title="Berita Kami" color={true} link="berita">
                <div className="md:w-[100%] w-[85%] py-7">
                    <div className="flex justify-center flex-wrap gap-7 md:p-[0px_10px]">
                        {informasi.map((data, i) => (
                            <div
                                key={i}
                                className="card md:w-[600px] lg:w-[350px] w-full px-4 md:px-0 md:rounded-md rounded-none shadow-md drop-shadow-md bg-white hover:-translate-y-1 duration-[150ms] ease-in-out text-black font-bold"
                            >
                                <Chard i={i} data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </Tamplate>
            {/* Galeri Kami */}
            <Tamplate title="Galeri Kami" link="gallery">
                <div className="md:w-[90%] w-[85%] py-7">
                    <div className="flex lg:justify-around lg:flex-row flex-col md:p-[0px_10px]">
                        <img
                            className="hover:-translate-y-1 duration-[150ms] ease-in-out rounded-md shadow-md md:h-[370px] h-[180px] md:shadow-[-1px_12px_30px_-13.2px_rgba(0,0,0,0.75)] mb-3 lg:mb-0"
                            style={{
                                backgroundPosition: "50%",
                                backgroundSize: "auto",
                                objectFit: "cover",
                                background: "#eaea",
                            }}
                            src={galeri1}
                            alt=""
                        />
                        <div className="flex md:flex-wrap md:flex-row justify-center item-center md:gap-2 gap-4 flex-col ">
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
            </Tamplate>
            {/* Informasi */}
            <Tamplate title="Informasi kami" color={true} link='info'>
                <div className="md:w-[100%] w-[85%] py-7">
                    <div className="flex justify-center flex-wrap gap-7 md:p-[0px_10px]">
                        {informasi.map((data, i) => (
                            <div
                                key={i}
                                className="card md:w-[600px] lg:w-[350px] w-full px-4 md:px-0 md:rounded-md rounded-none shadow-md drop-shadow-md bg-white hover:-translate-y-1 duration-[150ms] ease-in-out text-black font-bold"
                            >
                                <Chard i={i} data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </Tamplate>
            <article className="bg-[#ffffff]">
                <div className="flex items-center w-full flex-col ">
                    <div className="w-[95%] py-7">
                        <div className="flex lg:justify-between lg:flex-row flex-col gap-7 md:p-[0px_10px]">
                            {/* line 1 */}
                            <div className="flex flex-col w-full">
                                <div className="flex items-center text-[26px] text-black font-extrabold leading-[150%]">
                                    Butuh Bantuan ?
                                    <span className="pl-2 pt-3">
                                        <svg
                                            width="7"
                                            height="7"
                                            viewBox="0 0 7 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                                fill="#24529E"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex justify-between lg:gap-[3rem] gap-6 text-black text-start ">
                                    <div className="">
                                        <div className="alamat my-4 flex flex-col ">
                                            <span className=" font-extrabold">
                                                Alamat
                                            </span>
                                            Jl. PH.H. Mustofa No.38, Cikutra,
                                            Kec. Cibeunying Kidul, Kota Bandung,
                                            Jawa Barat 40124
                                        </div>
                                        <div className="jam my-4 flex flex-col ">
                                            <span className=" font-extrabold">
                                                Jam Operasional
                                            </span>
                                            <div className=" w-full">
                                                <span className="flex flex-col lg:flex-row">
                                                    Senin
                                                    <p className="md:pl-10 pl-4">
                                                        08.00 - 16.00
                                                    </p>
                                                </span>
                                                <span className="flex flex-col lg:flex-row">
                                                    Selasa
                                                    <p className="md:pl-8 pl-4">
                                                        08.00 - 16.00
                                                    </p>
                                                </span>
                                                <span className="flex flex-col lg:flex-row">
                                                    Rabu
                                                    <p className="md:pl-10 pl-4">
                                                        08.00 - 16.00
                                                    </p>
                                                </span>
                                                <span className="flex flex-col lg:flex-row">
                                                    Kamis
                                                    <p className="md:pl-9 pl-4">
                                                        08.00 - 16.00
                                                    </p>
                                                </span>
                                                <span className="flex flex-col lg:flex-row">
                                                    Jumat
                                                    <p className="md:pl-10 pl-4">
                                                        08.00 - 16.00
                                                    </p>
                                                </span>
                                                <span className="flex flex-col lg:flex-row">
                                                    Sabtu
                                                    <p className="md:pl-10 pl-4">
                                                        Tutup
                                                    </p>
                                                </span>
                                                <span className="flex flex-col lg:flex-row">
                                                    Minggu
                                                    <p className="md:pl-7 pl-4">
                                                        Tutup
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" md:w-full w-[50%]">
                                        <div className="flex flex-col my-4">
                                            <span className=" font-extrabold">
                                                Telphone
                                            </span>
                                            022-727-5630
                                        </div>
                                        <div className="flex flex-col my-4">
                                            <span className=" font-extrabold">
                                                Whatsapp
                                            </span>
                                            082244121226 (Chat Only)
                                            <br />
                                            +62 822-4412-1226
                                        </div>
                                        <div className="flex flex-col my-4">
                                            <span className=" font-extrabold">
                                                Email
                                            </span>
                                            <span className="flex flex-col md:flex-row">
                                                Humas
                                                <p className="md:pl-8 md:my-0 my-2 pl-2">
                                                    humas@lldikti4.or.id
                                                </p>
                                            </span>
                                            <span className="flex flex-col md:flex-row">
                                                Informasi
                                                <p className="md:pl-4 md:my-0 my-2 pl-2">
                                                    informasi@lldikti4.or.id
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* line 2 */}
                            <div className="gmap_canvas">
                                <iframe
                                    className="rounded-md shadow-md drop-shadow-md lg:w-[688px] w-full lg:h-full h-[300px]"
                                    // width={688}
                                    // height={400}
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Kopertis%20Region%20IV&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder={0}
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                />
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

const PerguruanTinggi = [
    {
        id: 1,
        total: 98,
        title: "Universitas",
    },
    {
        id: 2,
        total: 19,
        title: "Institut",
    },
    {
        id: 3,
        total: 202,
        title: "Sekolah Tinggi",
    },
    {
        id: 4,
        total: 84,
        title: "Akademi",
    },
    {
        id: 5,
        total: 41,
        title: "Politeknik",
    },
    {
        id: 6,
        total: 5,
        title: "Komunikasi",
    },
];

const LayananOnline = [
    {
        id: 1,
        background: tamplate,
        content: SuratGif,
        title: "SPTMJ Online",
    },
    {
        id: 2,
        background: tamplate,
        content: BookGif,
        title: "Digilibrary",
    },
    {
        id: 3,
        background: tamplate,
        content: JurnalGif,
        title: "Jurnal LLDIKTI",
    },
    {
        id: 4,
        background: tamplate,
        content: BookGif,
        title: "Buletin LLDIMTI",
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
        date: "30 Juni 2022",
        img: Informasi,
    },
    {
        id: 2,
        title: "Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek",
        date: "30 Juni 2022",
        img: Informasi,
    },
    {
        id: 3,
        title: "Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder",
        date: "30 Juni 2022",
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
