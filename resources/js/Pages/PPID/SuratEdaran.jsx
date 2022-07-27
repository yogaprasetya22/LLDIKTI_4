import Chard from "@/Components/page/Chard";
import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";
import Informasi from "@/img/informasi-lldikti.png";

const SuratEdaran = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">SURAT EDARAN</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article>
                <div className="flex items-center w-full flex-col">
                    <div className="md:w-[100%] w-[85%] py-7">
                        <div className="flex justify-center flex-wrap gap-7 md:p-[0px_10px] ">
                            {DataSuratEdaran.map((data, i) => (
                                <div
                                    key={i}
                                    className="card md:w-[600px] lg:w-[350px] w-full px-4 md:px-0 rounded-md shadow-md drop-shadow-md bg-white hover:-translate-y-1 duration-[150ms] ease-in-out text-black font-bold "
                                >
                                    <Chard i={i} data={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default SuratEdaran;

const DataSuratEdaran = [
    {
        id: 1,
        category: "Corrupti quos ullam.",
        title:
            "Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi",
        created_at: "2022-07-24T18:36:45.000000Z",
        updated_at: "2022-07-24T18:36:45.000000Z",
        img: Informasi,
    },
    {
        id: 2,
        category: "Laboriosam in.",
        title: "Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek",
        created_at: "2022-07-24T18:36:45.000000Z",
        updated_at: "2022-07-24T18:36:45.000000Z",
        img: Informasi,
    },
    {
        id: 3,
        category: "Aut nemo non iusto.",
        title:
            "Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder",
        created_at: "2022-07-24T18:36:45.000000Z",
        updated_at: "2022-07-24T18:36:45.000000Z",
        img: Informasi,
    },
    {
        id: 4,
        category: "Enim dicta eligendi.",
        title:
            "Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi",
        created_at: "2022-07-24T18:36:45.000000Z",
        updated_at: "2022-07-24T18:36:45.000000Z",
        img: Informasi,
    },
    {
        id: 5,
        category: "Sed asperiores quia.",
        title: "Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek",
        created_at: "2022-07-24T18:36:45.000000Z",
        updated_at: "2022-07-24T18:36:45.000000Z",
        img: Informasi,
    },
    {
        id: 6,
        category: "Eligendi dicta.",
        title:
            "Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder",
        created_at: "2022-07-24T18:36:45.000000Z",
        updated_at: "2022-07-24T18:36:45.000000Z",
        img: Informasi,
    },
];
