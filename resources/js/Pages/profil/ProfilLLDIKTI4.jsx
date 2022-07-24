import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";

const ProfilLLDIKTI4 = (props) => {
    return (
        <Layout title={props.title}>
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
            <article>
                <div className="heading">
                    <p>Sambutan</p>
                    <span>LLDIKTI Wilayah IV</span>
                </div>
            </article>
        </Layout>
    );
};

export default ProfilLLDIKTI4;
