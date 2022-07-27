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

const LayananOnline = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">LAYANAN ONLINE</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">Seputar LLDIKTI 4</span>
                </h1>
            </Heading>
            <article className="flex items-center w-full flex-col">
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
            </article>
        </Layout>
    );
};

export default LayananOnline;

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
    {
        id: 2,
        background: tamplate,
        content: LaporanGif,
        title: "JAD Online",
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
        title: "Buletin LLDIKTI",
    },
];