import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const PengajuanLayanan = (props) => {
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
                {/* <div className="flex w-full justify-center items-center md:p-[20px_70px] p-[25px]">
                    <div className="w-[90%] md:w-[100%] py-7">
                        <div className="flex md:justify-evenly md:flex-wrap md:flex-row md:px-0 flex-col px-4 gap-4 ">
                            {DataLayananKami.map((data, i) => {
                                let ganjil =
                                    i % 2 === 0 ? "text-end" : "text-start";
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
                </div> */}
            </article>
        </Layout>
    );
};

export default PengajuanLayanan;

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
