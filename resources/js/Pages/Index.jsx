import Layout from "@/Layouts/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";
import bgheader from "@/img/bg-header.png";
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
                                href="#!"
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
            <article className="">
                <div className="w-full h-20 mb-6 flex">
                    <div className=" flex justify-center items-center w-full collapse multi-collapse gap-1">
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
            <article className="">
                <div className="w-full h-20 mb-6 flex">
                    <div className=" bg-slate-50 flex justify-center items-center w-full collapse multi-collapse gap-1">
                        hello
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;
