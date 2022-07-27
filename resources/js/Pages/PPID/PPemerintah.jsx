import Heading from "@/Components/page/Heading";
import { TitleText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";

const PPemerintah = (props) => {
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
                        {DataPPemerintah.map((data, i) => (
                            <div
                                key={i}
                                className="flex flex-row pb-1 pl-2 md:pl-6"
                            >
                                <p className="pr-2">•</p>
                                {data.title ? (
                                    <div className="inline-block w-full pl-3 -indent-3">
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                        >
                                            {data.des}
                                        </a>
                                        {data.title && (
                                            <span className="pl-2 text-gray-600 dark:text-white">
                                                Perguruan Tinggi Negeri dan
                                                Pendirian, Perubahan, dan
                                                Pencabutan Izin Perguruan Tinggi
                                                Swasta.
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <a
                                        href={data.url}
                                        className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                    >
                                        {data.des}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default PPemerintah;

const DataPPemerintah = [
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 30 Tahun 2019 tentang Penilaian Kinerja Pegawai Negeri Sipil",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/05/PP-Nomor-30-Tahun-2019.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 11 Tahun 2017 tentang Manajemen Pegawai Negeri Sipil",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Peraturan-Pemerintah-No-11-Tahun-2017.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 13 Tahun 2015 tentang Perubahan Kedua Atas Peraturan Pemerintah Nomor 19 Tahun 2005 Tentang Standar Nasional Pendidikan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PP-No-13-Tahun-2015.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 21 Tahun 2014 tentang Pemberhentian Pegawai Negeri Sipil Yang Mencapai Batas Usia Pensiun Bagi Pejabat Fungsional",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PP-21-Thn-2014.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 4 Tahun 2014 Tentang Penyelenggaraan Pendidikan Tinggi Dan Pengelolaan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PP-No-4-thn-2014.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 32 Tahun 2013 tentang Perubahan Atas Peraturan Pemerintah Nomor 19 Tahun 2005 tentang Standar Nasional Pendidikan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PP0322013.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 96 Tahun 2012 tentang Penutup Undang-undang Nomor 25 Tahun 2009 tentang Pelayanan Publik",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PP96-2012PelayananPublik.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 82 Tahun 2012 Tentang Penyelenggaraan Sistem Dan Transaksi Elektronik",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/08/PP82-2012TransaksiElektronik1.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 46 Tahun 2011 Tentang Penilaian Prestasi Kerja Pegawai Negeri Sipil",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PP46-2011PrestasiKerjaPNS.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 66 Tahun 2010 Tentang Perubahan Atas Peraturan Pemerintah Nomor 17 Tahun 2010 Tentang Pengelolaan Dan Penyelenggaraan Pendidikan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/pp-no-66-tahun-2010.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 17 Tahun 2010 Tentang Pengelolaan Dan Penyelenggaraan Pendidikan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/pp-17-tahun-2010.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 53 Tahun 2010 Tentang Disiplin Pegawai Negeri Sipil",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/pp-no-53-tahun-2010.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 41 Tahun 2009 Tentang Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 10 Tahun 2020 Tentang Program Indonesia Pintar",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PP41-2009-TunjanganPropfesiGurudanDosenTunjanganKhususGurudanDosenSertaTunjanganKehormatanProfesor.pdf",
        title: "Tunjangan Profesi Guru dan Dosen, Tunjangan Khusus Guru dan Dosen, serta Tunjangan Kehormatan Profesor",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 10 Tahun 2020 Tentang Program Indonesia Pintar",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/02/Permen-10-Tahun-2020.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 37 Tahun 2009 Tentang Dosen",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PP37-2009Dosen.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 19 Tahun 2005 Tentang Standar Nasional Pendidikan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/pp-19-tahun-2005-ttg-snp.pdf",
    },
    {
        des: "Peraturan Pemerintah Republik Indonesia Nomor 12 Tahun 2002 Tentang Perubahan Atas Peraturan Pemerintah Nomor 99 Tahun 2000 Tentang Kenaikan Pangkat Pegawai Negeri Sipil",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/pp_12_2002.pdf",
    },
];
