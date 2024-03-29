import Heading from "@/Components/page/Heading";
import { TitleText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";

const SKD = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">SK DIRJEN</span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article>
                <div className="container flex flex-col gap-5 mb-20 py-12">
                    <TitleText>Surat Keputusan Dirjen:</TitleText>
                    <div className="flex flex-col pl-6">
                        {DataSKD.map((data, i) => (
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
                    <TitleText>
                        SK Sekretaris Jenderal
                        <span className="text-[#ce3366] pl-2">
                            Peraturan Menteri Pendidikan Dan Kebudayaan Republik
                            Indonesia Nomor 5 Tahun 2020 Tentang Akreditasi
                            Program Studi Dan Perguruan Tinggi
                        </span>
                    </TitleText>
                    <div className="flex flex-col pl-6">
                        <div className="flex flex-row">
                            <p className="pr-2">•</p>
                            <a
                                href="http://www.kopertis3.or.id/v6/wp-content/uploads/2018/08/salinan-Kepsekjen-ttg-Standar-Pengelolaan-PDDIKTI.pdf"
                                className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                            >
                                Surat Keputusan Sekretaris Jenderal
                                Kemenristekdikti Nomor: 85 / A / KPT / 2018
                                Tentang Standar Pengelolaan Pangkalan Data
                                Pendidikan Tinggi (PDDIKTI)
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default SKD;

const DataSKD = [
    {
        des: "Keputusan Direktur Jenderal Pembelajaran Dan Kemahasiswaan Kementerin Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 232/B/Hk/2019 Tentang Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/11/SK-Dirjen-Nomor-232-B-HK-2019-ttg-NAMA-PROGRAM-STUDI-PADA-PERGURUAN-TINGGI.pdf",
    },
    {
        des: "Lampiran1 Akademik Keputusan Direktur Jenderal Pembelajaran Dan Kemahasiswaan Kementerin Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 232/B/Hk/2019 Tentang Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/11/Lampiran-I-Akademik-Kepdirjen-232-2019.pdf",
    },
    {
        des: "Lampiran Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 47/B/HK/2019 Tentang Pedoman Pengusulan dan Penyesuaian Nama Program Studi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-Kepdirjen-No.47-thn-2019-Pedoman.pdf",
    },
    {
        des: "Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 47/B/HK/2019 Tentang Pedoman Pengusulan dan Penyesuaian Nama Program Studi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Kepdirjen-No.47-thn-2019-ttg-Pedoman.pdf",
    },
    {
        des: "Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 46/B/HK/2019 Tentang Daftar Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Kepdirjen-No.46-thn-2019-ttg-Daftar-Nama-Program-Studi.pdf",
    },
    {
        des: "Lampiran 1 Program Akademik Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 46/B/HK/2019 Tentang Daftar Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-1-Akademik-1.pdf",
    },
    {
        des: "Lampiran 2 Program Magister Terapan dan Doktor Terapan Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 46/B/HK/2019 Tentang Daftar Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-2-S2S3-Terapan.pdf",
    },
    {
        des: "Lampiran 3 Program Profesi Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 46/B/HK/2019 Tentang Daftar Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-3-Profesi.pdf",
    },
    {
        des: "Lampiran 4 Program Spesialis Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 46/B/HK/2019 Tentang Daftar Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-4-Spesialis.pdf",
    },
    {
        des: "Lampiran 5 Program Vokasi Diploma III dan Sarjana Terapan Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 46/B/HK/2019 Tentang Daftar Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-5-D3D4.pdf",
    },
    {
        des: "Lampiran 6 Vokasi Diploma I dan Diploma II Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 46/B/HK/2019 Tentang Daftar Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-6-D1D2.pdf",
    },
    {
        des: "Surat Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 302 / B / SK / 2017 Tentang Prosedur Perubahan Data Mahasiswa",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/SK-Dirjen-Belmawa-Tentang-Prosedur-Perubahan-Data-Mahasiswa.pdf",
    },
    {
        des: "Surat Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 123 / B / SK / 2017 Tentang Pedoman Tata Cara Penyelenggaraan Rekognisi Pembelajaran Lampau",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SK-DIRJEN-tentang-Pedoman-RPL-SALINAN.pdf",
    },
    {
        des: "Lampiran Surat Keputusan Direktur Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 123 / B / SK / 2017 Tentang Pedoman Tata Cara Penyelenggaraan Rekognisi Pembelajaran Lampau",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Lampiran-Pedoman-RPL-SALINAN.pdf",
    },
    {
        des: "Surat Keputusan Direktur Jenderal Pendidikan Tinggi Nomor: 25 / DIKTI / Kep / 2014 Tanggal 30 Juni 2015 Tentang Panduan Umum Pengenlan Kehidupan Kampus Untuk Mahasiswa Baru",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Keputusan-Dirjen-Dikti-No-25-Tahun-20141.pdf",
    },
    {
        des: "Surat Keputusan Direktur Jenderal Pendidikan Tinggi Nomor: 163 / DIKTI / KEP / 2007 tentang Penataan dan Kodifikasi Program Studi di Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/SKDirjen163-DIKTI-Kep-2007Lengkap.pdf",
    },
    {
        des: "Surat Keputusan Direktur Jenderal Pendidikan Tinggi No: 34 / DIKTI / Kep / 2002 Tentang Perubahan dan Peraturan Direktur Jenderal Pendidikan Tinggi No: 08 / DIKTI / Kep / 2002 Tentang Penggunaan Teknis Keputusan Menteri Pendidikan Nasional No: 184 / U / 2001 Tentang Pedoman Pengawasan  Pengendalian dan Pembinaan Program Diploma, Sarjana dan Pascasarjana di Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/kepdirjen-034-2002.pdf",
    },
    {
        des: "Surat Keputusan Direktur Jenderal Pendidikan Tinggi No: 08 / DIKTI / Kep / 2002 Tentang Penutupan Keputusan Menteri Pendidikan Nasional Nomor 184 / U / 2001 Tentang Pedoman Pengendalian Program Pengembalian dan Pembimbing Diploma, Sarjana dan Pasca Sarjana di Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/SKDirjen08-DIKTI-Kep-2002.docx",
    },
    {
        des: "Surat Keputusan Direktur Jenderal Pendidikan Tinggi Nomor: Nomor: 108 / DIKTI / Kep / 2001 Tentang Pedoman Pembukaan Program Studi dan / atau berdasarkan Keputusan Menteri Pendidikan Nasional Nomor: 234 / U / 2000 Tentang Pendirian Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/108-dikti-kep-2001.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 5 Tahun 2020 Tentang Akreditasi Program Studi Dan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/01/Salinan-PERMENDIKBUD-5-TAHUN-2020.pdf",
    },
];
