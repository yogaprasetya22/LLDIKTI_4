import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import IconLLdikti from "@/img/icons-salin-color.png";
import React from "react";
import Wrapper from "@/Components/page/Wrapper";

const akuntabilitas = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">AKUNTABILITAS</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article>
                <div className="text-center flex flex-col gap-6 py-5 text-black dark:text-white mt-2">
                    <p className=" text-extrabold text-[26px]">Document</p>
                    <span className=" text-extrabold text-[35px]">
                        Akuntabilitas
                    </span>
                </div>
                <div className="w-full ">
                    <div className="flex flex-wrap justify-around px-[5rem] my-5 gap-5 ">
                        {/* page */}
                        {dataAkuntabilitas.map((data, i) => (
                            <div
                                key={i}
                               
                            >
                                <Wrapper data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default akuntabilitas;

const dataAkuntabilitas = [
    {
        id: 1,
        imgage: IconLLdikti,
        title: "Perjanjian Kerja",
        desc: " Perjanjian Kinerja Tahun 2022 Kepala LLDIKTI Wilayah IV Bandung Dengan Sekretaris Jenderal",
        link: "#",
    },
    {
        id: 2,
        imgage: IconLLdikti,
        title: "Perjanjian Kerja",
        desc: " Perjanjian Kinerja Tahun 2022 Kepala LLDIKTI Wilayah IV Bandung Dengan Sekretaris Jenderal",
        link: "#",
    },
    {
        id: 3,
        imgage: IconLLdikti,
        title: "Perjanjian Kerja",
        desc: " Perjanjian Kinerja Tahun 2022 Kepala LLDIKTI Wilayah IV Bandung Dengan Sekretaris Jenderal",
        link: "#",
    },
    {
        id: 4,
        imgage: IconLLdikti,
        title: "Perjanjian Kerja",
        desc: " Perjanjian Kinerja Tahun 2022 Kepala LLDIKTI Wilayah IV Bandung Dengan Sekretaris Jenderal",
        link: "#",
    },
    {
        id: 5,
        imgage: IconLLdikti,
        title: "Perjanjian Kerja",
        desc: " Perjanjian Kinerja Tahun 2022 Kepala LLDIKTI Wilayah IV Bandung Dengan Sekretaris Jenderal",
        link: "#",
    },
    {
        id: 6,
        imgage: IconLLdikti,
        title: "Perjanjian Kerja",
        desc: " Perjanjian Kinerja Tahun 2022 Kepala LLDIKTI Wilayah IV Bandung Dengan Sekretaris Jenderal",
        link: "#",
    },
];
