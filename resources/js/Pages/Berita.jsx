import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";
import Paginator from "@/Components/Paginator";

const berita = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">Berita</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                       Seputar LLDIKTI 4
                    </span>
                </h1>
            </Heading>
        </Layout>
    );
};

export default berita;
