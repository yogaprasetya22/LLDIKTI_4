import Heading from "@/Components/page/Heading";
import { TitleText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";

const PPresiden = (props) => {
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
                <div className="container flex flex-col gap-5 mb-20 py-12">
                    <div className="flex flex-col pl-6">
                        {DataPPresiden.map((data, i) => (
                            <div
                                key={i}
                                className="flex flex-row pb-1 pl-2 md:pl-6"
                            >
                                <p className="pr-2">•</p>
                                <a
                                    href={data.url}
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    {data.des}
                                </a>
                            </div>
                        ))}
                        <div className="py-4">
                            <TitleText>Keputusan Presiden:</TitleText>
                            <div className="flex flex-row pb-1 pt-4 pl-2 md:pl-6">
                                <p className="pr-2">•</p>
                                <a
                                    href="http://www.kopertis3.or.id/v6/wp-content/uploads/2019/10/KEPPRES-KEMENTERIAN.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    Keputusan Presiden Republik Indonesia Nomor
                                    113/P Tahun 2019 Tentang Pembentukan
                                    Kementerian Negara dan Pengangkatan Menteri
                                    Negara Indonesia Maju Periode Tahun
                                    2019-2024
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default PPresiden;

const DataPPresiden = [
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 82 Tahun 2019 Tentang Kementerian Pendidikan Dan Kebudayaan",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/12/Perpres-Nomor-82-tahun-2019-tentang-Kemendikbud.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 72 Tahun 2019 Tentang Kementerian Pendidikan Dan Kebudayaan",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/10/Salinan-Perpres-Nomor-72-Tahun-2019.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 73 Tahun 2019 Tentang Kementerian Riset Dan Teknologi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/10/Salinan-Perpres-Nomor-73-Tahun-2019.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 74 Tahun 2019 Tentang Badan Riset Dan Inovasi Nasional",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/10/Salinan-Perpres-Nomor-74-Tahun-2019.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 39 Tahun 2019 Tentang Satu Data Indonesia",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/07/Perpres-Nomor-39-Tahun-2019-Salinan.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 131 Tahun 2018 Tentang Tunjangan Kinerja Pegawai Di Lingkungan Kementerian Riset, Teknologi, Dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Perpres-131-Tahun-2018.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 87 Tahun 2016 Tentang Satuan Tugas Sapu Bersih Pungutan Liar",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/99PERPRES_NO_87_2016.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 32 Tahun 2016 Tentang Tunjangan Kinerja Pegawai Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Perpres_Nomor_32_Tahun_2016.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 13 Tahun 2015 Tentang Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Perpres-Nomor-13-Tahun-2015.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 88 Tahun 2013 Tentang Tunjangan Kinerja Pegawai Di Lingkungan Kementerian Pendidikan dan Kebudayaan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/perpres-88.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 8 Tahun 2012 Tentang Kerangka Kualifikasi Nasional Indonesia",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Perpres_No_08_Thn_2012.pdf",
    },
    {
        des: "Peraturan Presiden Republik Indonesia Nomor 8 Tahun 2012 Tentang Kerangka Kualifikasi Nasional Indonesia",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Perpres_No_08_Thn_2012_Lampiran.pdf",
    },
];
