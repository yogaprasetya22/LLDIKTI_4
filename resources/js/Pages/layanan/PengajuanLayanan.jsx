import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import {
    faCaretDown,
    faCaretRight,
    fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PengajuanLayanan = (props) => {
    const [buttonSet, setButton] = useState({
        p1: false,
        p2: false,
        p3: false,
        p4: false,
    });
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">
                        CARA PENGAJUAN LAYANAN
                    </span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">Seputar LLDIKTI 4</span>
                </h1>
            </Heading>
            <article className="my-10">
                {/* 1 */}
                <div className="flex items-start w-full flex-col container hs-dropdown">
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ p1: !buttonSet.p1 })}
                        >
                            {buttonSet.p1 ? (
                                <TitleOf>
                                    Penggunaan Aplikasi EMPAT (E-Office
                                    Manajemen Pelayanan Aplikasi Terpadu)
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Penggunaan Aplikasi EMPAT (E-Office
                                    Manajemen Pelayanan Aplikasi Terpadu)
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.p1 ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                <div className="flex flex-row pl-2 md:pl-6">
                                    <video
                                        className="md:h-[30rem] md:w-[45rem] w-[20rem] h-[15rem] rounded-md"
                                        controls
                                    >
                                        <source
                                            className="rounded-md"
                                            src="https://www.lldikti4.id/wp-content/uploads/2022/06/Layanan-EMPAT.mp4?_=1"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="flex items-start w-full flex-col container hs-dropdown">
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ p2: !buttonSet.p2 })}
                        >
                            {buttonSet.p2 ? (
                                <TitleOf>
                                    Pengusulan Jabatan Akademik Dosen (JAD)
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Pengusulan Jabatan Akademik Dosen (JAD)
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.p2 ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                <div className="flex flex-row pl-2 md:pl-6">
                                    <video
                                        className="md:h-[30rem] md:w-[45rem] w-[20rem] h-[15rem] rounded-md"
                                        controls
                                    >
                                        <source
                                            className=""
                                            src="https://www.lldikti4.id/wp-content/uploads/2022/06/JAD-Online.mp4?_=2"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="flex items-start w-full flex-col container hs-dropdown">
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ p3: !buttonSet.p3 })}
                        >
                            {buttonSet.p3 ? (
                                <TitleOf>
                                    Proses Pendataan Perguruan Tinggi dan Prodi
                                    pada PDDIKTI
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Proses Pendataan Perguruan Tinggi dan Prodi
                                    pada PDDIKTI
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.p3 ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                <div className="flex flex-row pl-2 md:pl-6">
                                    <video
                                        className="md:h-[30rem] md:w-[45rem] w-[20rem] h-[15rem] rounded-md"
                                        controls
                                    >
                                        <source
                                            className=""
                                            src="https://www.lldikti4.id/wp-content/uploads/2022/06/Proses-Pendataan-PT_Prodi-Studi-pada-PDDIKTI.mp4?_=3"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="flex items-start w-full flex-col container hs-dropdown">
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ p4: !buttonSet.p4 })}
                        >
                            {buttonSet.p4 ? (
                                <TitleOf>
                                    Pengusulan Alur Mutasi/Perpindahan Mahasiswa
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Pengusulan Alur Mutasi/Perpindahan Mahasiswa
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.p4 ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                <div className="flex flex-row pl-2 md:pl-6">
                                    <video
                                        className="md:h-[30rem] md:w-[45rem] w-[20rem] h-[15rem] rounded-md"
                                        controls
                                    >
                                        <source
                                            className=""
                                            src="https://www.lldikti4.id/wp-content/uploads/2022/07/Alur-Mutasi-Mahasiswa.mp4?_=4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default PengajuanLayanan;

const TitleOn = ({ children }) => {
    // #ffb94c
    return (
        <div className=" py-3 px-4 inline-flex  text-start lg:text-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm  hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            <div className="flex items-center flex-fow gap-4 font-semibold text-[#2657a7] md:text-[1.5rem] text-[13px]">
                <FontAwesomeIcon icon={faCaretRight} />
                <span>{children}</span>
            </div>
        </div>
    );
};
const TitleOf = ({ children }) => {
    // #ffb94c
    return (
        <div className="hs-dropdown-toggle py-3 px-4 inline-flex text-start lg:text-center items-center gap-2 rounded-md border font-medium bg-white  transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            <div className="flex items-center flex-fow gap-4 font-semibold text-[#ffb94c] md:text-[1.5rem] text-[13px]">
                <FontAwesomeIcon icon={faCaretDown} />
                <span>{children}</span>
            </div>
        </div>
    );
};

const DataLayananKami = [
    {
        id: 1,
        title: "Penggunaan Aplikasi EMPAT (E-Office Manajemen Pelayanan Aplikasi Terpadu)",
    },
    {
        id: 2,
        title: "Pengusulan Jabatan Akademik Dosen (JAD)",
    },
    {
        id: 3,
        title: "Proses Pendataan Perguruan Tinggi dan Prodi pada PDDIKTI",
    },
    {
        id: 4,
        title: "Pengusulan Alur Mutasi/Perpindahan Mahasiswa",
    },
];
