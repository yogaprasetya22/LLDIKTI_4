import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";
import SuratGif from "@/img/56-document-outline.gif";
import tamplate from "@/img/tamplate.png";
import AnimationCard from "@/Components/page/AnimationCard";

const Profil = ({ title }) => {
    return (
        <Layout title={title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">Profil</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <div className="flex items-center w-full flex-col">
                <div className="flex w-full justify-center items-center md:p-[20px_70px] p-[25px] mt-[2.5rem]">
                    <div className=" w-[60%] py-7">
                        <div className="flex justify-between  flex-wrap">
                            {LayananOnline.map((data, i) => (
                                <div
                                    key={i}
                                    className="w-[290px] h-[250px]  rounded-md bg-[#ffffff] z-1 relative image-full hover:-translate-y-1 duration-[150ms] ease-in-out shadow-md p-4 border-[1px]"
                                >
                                    <AnimationCard
                                        data={data}
                                        link={data.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profil;

const LayananOnline = [
    {
        id: 1,
        background: tamplate,
        content: SuratGif,
        title: "Profil LLDIKTI 4",
        link: "/profil-lldikti-4",
    },
    {
        id: 2,
        background: tamplate,
        content: SuratGif,
        title: "Profil Kepala LLDIKTI 4",
        link: "/profil-kepala-lldikti-4",
    },
];
