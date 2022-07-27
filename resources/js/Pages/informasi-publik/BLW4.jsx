import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";
import lldikti0 from "@/img/beletin-galery/lldikti0.jpg";
import lldikti1 from "@/img/beletin-galery/lldikti1.jpg";
import lldikti2 from "@/img/beletin-galery/lldikti2.jpg";
import lldikti3 from "@/img/beletin-galery/lldikti3.jpg";
import lldikti4 from "@/img/beletin-galery/lldikti4.jpg";
import lldikti5 from "@/img/beletin-galery/lldikti5.jpg";
import lldikti6 from "@/img/beletin-galery/lldikti6.jpg";
import lldikti7 from "@/img/beletin-galery/lldikti7.jpg";
import lldikti8 from "@/img/beletin-galery/lldikti8.jpg";
import lldikti9 from "@/img/beletin-galery/lldikti9.jpg";
import lldikti10 from "@/img/beletin-galery/lldikti10.jpg";
import lldikti11 from "@/img/beletin-galery/lldikti11.jpg";
import lldikti12 from "@/img/beletin-galery/lldikti12.jpg";

const BLW4 = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">
                        PROSEDUR OPERASIONAL STANDAR
                    </span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article>
                <div className="flex items-center w-full flex-col py-10">
                    <div className="w-[100%] px-5">
                        <div className="flex justify-center flex-wrap gap-7 md:p-[0px_10px] ">
                            {DataBLW4.map((data, i) => (
                                <div
                                    key={i}
                                    className="card md:w-[600px] lg:w-[350px] w-full px-4 md:px-0 rounded-md shadow-md drop-shadow-md bg-white hover:-translate-y-1 duration-[150ms] ease-in-out text-black font-bold border-t-[2px]"
                                >
                                    <figure className="p-6">
                                        <img
                                            src={data.img}
                                            alt="Shoes"
                                            className=" shadow-md drop-shadow-md"
                                        />
                                    </figure>
                                    <div className="p-[10px_15px_5px] text-center">
                                        <p className="text-[16px] text-gray-600 dark:text-white font-bold pb-2">
                                            {data.des}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BLW4;


const DataBLW4 = [
    { img: lldikti0, des: "Buletin LLDIKTI IV - April 2022" },
    {
        img: lldikti1,
        des: "Buletin LLDIKTI IV - Agustus 2021",
    },
    {
        img: lldikti2,
        des: "Buletin LLDIKTI IV - Agustus 2021",
    },
    {
        img: lldikti3,
        des: "Buletin LLDIKTI IV - April 2021",
    },
    {
        img: lldikti4,
        des: "Buletin LLDIKTI IV - April 2020",
    },
    {
        img: lldikti5,
        des: "Buletin Vol. 16 Bulan Desember",
    },
    {
        img: lldikti6,
        des: "Buletin Vol.15 Agustus 2016",
    },
    {
        img: lldikti7,
        des: "Buletin_Vol_17_No_II",
    },
    {
        img: lldikti8,
        des: "Buletin Desember 2018",
    },
    {
        img: lldikti9,
        des: "Buleletin I - 2014",
    },
    {
        img: lldikti10,
        des: "Buletin I - 2016",
    },
    {
        img: lldikti11,
        des: "Buletin LLDIKTI IV – Vol 16",
    },
    {
        img: lldikti12,
        des: "Buletin LLDIKTI IV – Vol 18",
    },
];