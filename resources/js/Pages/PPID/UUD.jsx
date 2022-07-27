import Heading from "@/Components/page/Heading";
import TamplatePdf from "@/Components/page/TamplatePdf";
import { TitleText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";

const UUD = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">UNDANG – UNDANG</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article>
                <div className="container flex flex-col gap-5 py-12">
                    <div className="flex flex-col">
                        {DataUUD.map((data, i) => (
                            <div key={i} className="flex flex-row">
                                <a
                                    href={data.url}
                                    className=" dark:text-[#eb6f98] text-[#cc3366] link link-hover"
                                >
                                    {data.des}
                                </a>
                            </div>
                        ))}
                    </div>
                    <TitleText>Undang - Undang</TitleText>
                    <div className="flex flex-col pl-6">
                        {DataUUD2.map((data, i) => (
                            <div key={i} className="flex flex-row">
                                <p className="pr-2">•</p>
                                <a
                                    href={data.url}
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    {data.des}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-20 w-full">
                    <TamplatePdf data={DataUUDPdf} />
                </div>
            </article>
        </Layout>
    );
};

export default UUD;

const DataUUD = [
    {
        des: "UUD TAHUN 1945 (Naskah Asli)",
        url: "http://jdih.bpk.go.id/wp-content/uploads/2011/03/UUD45.pdf",
    },
    {
        des: "UUD 1945 (Perubahan I)",
        url: "http://jdih.bpk.go.id/wp-content/uploads/2011/03/UUD45_perubahan1.pdf",
    },
    {
        des: "UUD 1945 (Perubahan II)",
        url: "http://jdih.bpk.go.id/wp-content/uploads/2011/03/UUD45_perubahan2.pdf",
    },
    {
        des: "UUD 1945 (Perubahan III)",
        url: "http://jdih.bpk.go.id/wp-content/uploads/2011/03/UUD45_perubahan3.pdf",
    },
    {
        des: "UUD 1945 (Perubahan IV)",
        url: "http://jdih.bpk.go.id/wp-content/uploads/2011/03/UUD45_perubahan4.pdf",
    },
    {
        des: "UUD 1945 Perubahan (Keseluruhan)",
        url: "http://jdih.bpk.go.id/wp-content/uploads/2011/03/UUD45_SatuNaskah.pdf",
    },
];

const DataUUD2 = [
    {
        des: "Undang-undang Republik Indonesia Nomor 11 Tahun 2014 Tentang Keinsinyuran",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/uu2014_011.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 5 Tahun 2014 Tentang Aparatur Sipil Negara",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/UU5-2014AparaturSipilNegara.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 24 Tahun 2013 Tentang Perubahan Atas Undang-undang Nomor 23 Tahun 2006 Tentang Administrasi Kependudukan",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/10/UU_-No-24-Th-2013.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 20 Tahun 2013 Tentang Pendidikan Kedokteran",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/UU0202013.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 12 Tahun 2012 Tentang Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/UU_NO_12_Thn_2012.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 12 Tahun 2011 Tentang Pembentukan Peraturan Perundangan-undangan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/UU12-2011Lengkap.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 25 Tahun 2009 Tentang Pelayanan Publik",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/UU-25-2009.pdf",
    },
    {
        des: "Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/10/UU_No_14_Tahun_2008.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/08/11_UU_NO_11_TAHUN_2008_TENTANG_INFORMASI_DAN_TRANSAKSI_ELEKTRONIK.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 14 Tahun 2005 Tentang Guru dan Dosen",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/UU_NO_14_Tahun_2005.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 28 Tahun 2004 Tentang Perubahan Atas Undang-undang Nomor 16 Tahun 2001 Tentang Yayasan",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/UU28-2004Yayasan.pdf",
    },
    {
        des: "Undang-undang Republik Indonesia Nomor 20 Tahun 2003 Tentang Sistem Pendidikan Nasional",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/sisdiknas.pdf",
    },
    {
        des: "Undang-undang Nomor 16 Tahun 2001 Tentang Yayasan",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/UU_no_16_th_2001.pdf",
    },
    {
        des: "Penjelasan Undang-undang Nomor 16 Tahun 2001 Tentang Yayasan",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/UU_no_16_th_2001_penjelasan.pdf",
    },
];

const DataUUDPdf = [
    {
        des: "Penjelasan UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 16 TAHUN 2001 TENTANG Y A Y A S A N",
        url: "https://www.lldikti4.id/download/penjelasan-undang-undang-republik-indonesia-nomor-16-tahun-2001-tentang-y-a-y-a-s-a-n/",
        download: "2293 ",
    },
    {
        des: "UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 16 TAHUN 2001 TENTANG Y A Y A S A N",
        url: "https://www.lldikti4.id/download/undang-undang-republik-indonesia-nomor-16-tahun-2001-tentang-y-a-y-a-s-a-n/",
        download: "2565 ",
    },
    {
        des: "GURU DAN DOSEN",
        url: "https://www.lldikti4.id/download/guru-dan-dosen/",
        download: "2666 ",
    },
    {
        des: "UNDANG-UNDANG REPUBLIK INDONESIA NOMOR 12 TAHUN 2012 TENTANG PENDIDIKAN TINGGI",
        url: "https://www.lldikti4.id/download/undang-undang-republik-indonesia-nomor-12-tahun-2012-tentang-pendidikan-tinggi/",
        download: "3908 ",
    },
    {
        des: "NOMOR 11 TAHUN 2014 TENTANG KEINSINYURAN",
        url: "https://www.lldikti4.id/download/nomor-11-tahun-2014-tentang-keinsinyuran/",
        download: "2245 ",
    },
    {
        des: "UNDANG UNDANG REPUBLIK INDONESIA NOMOR 5 TAHUN  2014 TENTANG APARATUR SIPIL NEGARA",
        url: "https://www.lldikti4.id/download/undang-undang-republik-indonesia-nomor-5-tahun-2014-tentang-aparatur-sipil-negara/",
        download: "2116 ",
    },
    {
        des: "Undang Undang Nomor 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik",
        url: "https://www.lldikti4.id/download/undang-undang-nomor-11-tahun-2008-tentang-informasi-dan-transaksi-elektronik/",
        download: "2224 ",
    },
    {
        des: "Undang Undang Nomor 20 tahun 2003 tentang Sistem pendidikan nasional",
        url: "https://www.lldikti4.id/download/undang-undang-nomor-20-tahun-2003-tentang-sistem-pendidikan-nasional/",
        download: "3694 ",
    },
    {
        des: "PERUBAHAN ATAS UNDANG-UNDANG NOMOR 16 TAHUN 2001 TENTANG YAYASAN",
        url: "https://www.lldikti4.id/download/perubahan-atas-undang-undang-nomor-16-tahun-2001-tentang-yayasan/",
        download: "2403 ",
    },
];
