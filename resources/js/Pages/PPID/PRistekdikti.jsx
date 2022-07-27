import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";
import Paginator from "@/Components/Paginator";
import { useState } from "react";
import { useEffect } from "react";
import TamplatePdf from "@/Components/page/TamplatePdf";

const PRistekdikti = (props) => {
    const [dataPR, setData] = useState([]);
    useEffect(() => {
        const Validasi = () => {
            const data = props?.lldikti.data;
            setData(
                data.map((item) => {
                    return {
                        id: item.id,
                        des: item.description,
                        url: item.url,
                        download: item.download,
                    };
                })
            );
        };
        Validasi();
    }, []);
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">
                        PERATURAN RISTEKDIKTI
                    </span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <TamplatePdf data={dataPR} />
            <div className="flex justify-center items-center">
                <Paginator meta={props?.lldikti?.meta} />
            </div>
        </Layout>
    );
};

export default PRistekdikti;
