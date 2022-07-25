import { useState, useEffect } from "react";
import React from "react";
import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import Chard from "@/Components/page/Chard";
import Informasi from "@/img/informasi-lldikti.png";
import Paginator from "@/Components/Paginator";

const InformasiPublik = (props) => {
    const [lldikti, setLldikti] = useState([]);
    const [meta, setMeta] = useState([]);
    useEffect(() => {
        const Validasi = async () => {
            const data = props.lldikti;
            setLldikti(
                data.data.map((item) => {
                    return {
                        id: item.id,
                        title: item.description,
                        date: "30 Juni 2022",
                        img: Informasi,
                    };
                })
            );
            setMeta({ data: data.meta });
        };
        Validasi();
    }, []);
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">Informasi Publik</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">Seputar LLDIKTI 4</span>
                </h1>
            </Heading>
            <article>
                <div className="flex items-center w-full flex-col">
                    <div className="md:w-[100%] w-[85%] py-7">
                        <div className="flex justify-center flex-wrap gap-7 md:p-[0px_10px] ">
                            {lldikti.map((data, i) => (
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
            <div className="flex justify-center items-center">
                <Paginator meta={meta?.data} />
            </div>
        </Layout>
    );
};

export default InformasiPublik;
