import Heading from "@/Components/page/Heading";
import { TitleText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";

const PMentri = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">PERATURAN MENTERI</span>
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
                        <TitleText>Peraturan Mentri:</TitleText>
                        {/* 1 */}
                        <div className=" inline-flex pl-2 md:pl-6 mt-4">
                            <p className="pr-2">•</p>
                            <div className="inline-block w-full pl-3 -indent-3">
                                <a
                                    href="https://jdih.kemdikbud.go.id/arsip/Permendikbud%202%20Tahun%202020%20-%20Salinan.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    Permendikbud No. 2 Tahun 2020
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    tentang Tata Cara Pelaksanaan Uji Kompetensi
                                    Mahasiswa Bidang Kesehatan.
                                </span>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className=" inline-flex pl-2 md:pl-6">
                            <p className="pr-2">•</p>
                            <div className="inline-block w-full pl-3 -indent-3">
                                <a
                                    href="https://jdih.kemdikbud.go.id/arsip/Salinan%20PERMENDIKBUD%203%20TAHUN%202020%20FIX%20GAB.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    Permendikbud No. 3 Tahun 2020
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    tentang Standar Nasional Pendidikan Tinggi
                                    menggantikan
                                </span>
                                <a
                                    href="https://jdih.kemdikbud.go.id/arsip/Salinan%20PERMENDIKBUD%203%20TAHUN%202020%20FIX%20GAB.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-2 link link-hover line-through"
                                >
                                    Permenristekdikti No. 44 tahun 2015
                                </a>
                                <span className="pl-3 text-gray-600 dark:text-white">
                                    tentang Standar Nasional Pendidikan Tinggi –
                                </span>
                                <a
                                    href="https://lldikti8.ristekdikti.go.id/wp-content/uploads/2019/07/PERMENRISTEKDIKTI_NO_44-THN-2015-ttg-STANDAR-NASIONAL-PENDIDIKAN-TINGGI-LAMPIRAN.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    Lampiran;
                                </a>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className=" inline-flex pl-2 md:pl-6">
                            <p className="pr-2">•</p>
                            <div className="inline-block w-full pl-3 -indent-3">
                                <a
                                    href="https://jdih.kemdikbud.go.id/arsip/Salinan%20PERMENDIKBUD%204%20TAHUN%202020%20FIX.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    Permendikbud No. 4 Tahun 2020
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    tentang Perubahan atas Permendikbud No. 88
                                    Tahun 2014 tentang Perubahan Perguruan
                                    Tinggi Negeri Menjadi Perguruan Tinggi
                                    Negeri Badan Hukum;
                                </span>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className=" inline-flex pl-2 md:pl-6">
                            <p className="pr-2">•</p>
                            <div className="inline-block w-full pl-3 -indent-3">
                                <a
                                    href="https://jdih.kemdikbud.go.id/arsip/Salinan%20PERMENDIKBUD%205%20TAHUN%202020%20FIX.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    Permendikbud No. 5 Tahun 2020
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    menggantikan
                                </span>
                                <a
                                    href="https://jdih.kemdikbud.go.id/arsip/Salinan%20PERMENDIKBUD%205%20TAHUN%202020%20FIX.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover line-through"
                                >
                                    Permenristekdikti No. 32 Tahun 2016
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    tentang Akreditasi Prodi dan Perguruan
                                    Tinggi;
                                </span>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className=" inline-flex pl-2 md:pl-6">
                            <p className="pr-2">•</p>
                            <div className="inline-block w-full pl-3 -indent-3">
                                <a
                                    href="https://jdih.kemdikbud.go.id/arsip/Salinan%20PERMENDIKBUD%206%20TAHUN%202020%20FIX.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    Permendikbud No. 6 Tahun 2020
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    menggantikan
                                </span>
                                <a
                                    href="https://lldikti8.ristekdikti.go.id/wp-content/uploads/2019/07/Permenristekdikti-60-2018-ttg-PENERIMAAN-MAHASISWA-BARU-PROGRAM-SARJANA-di-PT.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover line-through"
                                >
                                    Permenristekdikti No. 60 Tahun 2018
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    tentang Penerimaan Mahasiswa Baru Program
                                    Sarjana di Perguruan Tinggi Negeri;
                                </span>
                            </div>
                        </div>
                        {/* 6 */}
                        <div className=" inline-flex pl-2 md:pl-6">
                            <p className="pr-2">•</p>
                            <div className="inline-block w-full pl-3 -indent-3">
                                <a
                                    href="https://jdih.kemdikbud.go.id/arsip/Salinan%20PERMENDIKBUD%207%20TAHUN%202020%20FIX.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                                >
                                    Permendikbud No. 7 Tahun 2020
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    menggantikan
                                </span>
                                <a
                                    href="https://lldikti8.ristekdikti.go.id/wp-content/uploads/2019/07/Permenristekdikti-51-Tahun-2018-Pendirian-Perubahan-Pembubaran-PT-dan-pencabutan-izin-PTS.pdf"
                                    className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover line-through"
                                >
                                    Permenristekdikti No. 51 Tahun 2018
                                </a>
                                <span className="pl-2 text-gray-600 dark:text-white">
                                    tentang Pendirian, Perubahan, dan Pembubaran
                                    Perguruan Tinggi Negeri dan Pendirian,
                                    Perubahan, dan Pencabutan Izin Perguruan
                                    Tinggi Swasta.
                                </span>
                            </div>
                        </div>

                        {/* end */}
                        {DataPMentri.map((data, i) => (
                            <div
                                key={i}
                                className="flex flex-row pb-1 pl-2 md:pl-6 "
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
                        <div className="py-2">
                            <TitleText>Keputusan Presiden:</TitleText>
                        </div>
                        {DataKeputusanMenteri.map((data, i) => (
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
                        <div className="py-2">
                            <TitleText>Instruksi Menteri:</TitleText>
                        </div>
                        <div className="flex flex-row pb-1 pl-2 md:pl-6">
                            <p className="pr-2">•</p>
                            <a
                                href="http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Intruksi-Mendikbud-No-1-Thn-2013.pdf"
                                className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover"
                            >
                                Instruksi Menteri Pendidikan dan Kebudayaan
                                Republik Indonesia Nomor 01 Tahun 2013 tentang
                                Penyusunan, Penetapan, dan Penerapan Standar
                                Pelayanan
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default PMentri;

const DataPMentri = [
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 10 Tahun 2020 Tentang Program Indonesia Pintar",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/02/Permen-10-Tahun-2020.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 7 Tahun 2020 Tentang Pendirian, Perubahan, Pembubaran Perguruan Tinggi Negeri, Dan Pendirian, Perubahan, Pencabutan Izin Perguruan Tinggi Swasta",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/02/Salinan-PERMENDIKBUD-7-TAHUN-2020-FIX.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 6 Tahun 2020 Tentang Penerimaan Mahasiswa Baru Program Sarjana Pada Perguruan Tinggi Negeri",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/02/Salinan-PERMENDIKBUD-6-TAHUN-2020-FIX.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 5 Tahun 2020 Tentang Akreditasi Program Studi Dan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/02/Salinan-PERMENDIKBUD-5-TAHUN-2020-FIX.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 4 Tahun 2020 Tentang Perubahan Atas Peraturan Menteri Pendidikan Dan Kebudayaan Nomor 88 Tahun 2014 Tentang Perubahan Perguruan Tinggi Negeri Menjadi Perguruan Tinggi Negeri Badan Hukum",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/02/Salinan-PERMENDIKBUD-4-TAHUN-2020-FIX.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 3 Tahun 2020 Tentang Standar Nasional Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/02/Salinan-PERMENDIKBUD-3-TAHUN-2020-FIX-GAB.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 2 Tahun 2020 Tentang Tata Cara Pelaksanaan Uji Kompetensi Mahasiswa Bidang Kesehatan",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/01/Permendikbud-2-Tahun-2020-Salinan.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 37 Tahun 2019 Tentang Tentang Uraian Jabatan Di Lembaga Layanan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/01/37-tahun-2019.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 37 Tahun 2019 Tentang Tentang Uraian Jabatan Di Lembaga Layanan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/01/lampiran-37-2019.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 33 Tahun 2019 Tentang Penyelenggaraan Pendidikan Antikorupsi Di Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/10/Permenristekdikti-No-33-Tahun-2019-New.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 31 Tahun 2019 Tentang Rincian Tugas Unit Kerja Di Lingkungan Lembaga Layanan Pendidikan Tinggi Tipe A",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/10/Permenristekdikti-No-31-Tahun-2109-Rintu.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 24 Tahun 2019 Tentang Manajemen Inovasi Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/05/PERMENRISTEKDIKTI-NOMOR-24-TAHUN-2019.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 14 Tahun 2019 Tentang Pelaksanaan Pemberian Tunjangan Kinerja Pegawai Di Lingkungan Kementerian Riset, Teknologi, Dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Permenristekdikti-No-14-Tahun-2019-LLDIKTI-III.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 14 Tahun 2019 Tentang Pelaksanaan Pemberian Tunjangan Kinerja Pegawai Di Lingkungan Kementerian Riset, Teknologi, Dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-Permenristekdikti-No-14-Tahun-2019-LLDIKTI-III.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 10 Tahun 2019 Tentang Kelas Jabatan Di Lembaga Layanan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Permenristekdikti-No-10-Tahun-2019-LLDIKTI-III.pdf",
    },
    {
        des: "Lampiran I Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 10 Tahun 2019 Tentang Kelas Jabatan Di Lembaga Layanan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-Permenristekdikti-KJ-LLDIKTI-III-A.pdf",
    },
    {
        des: "Lampiran II Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 10 Tahun 2019 Tentang Kelas Jabatan Di Lembaga Layanan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-Permenristekdikti-KJ-LLDIKTI-III-B.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 7 Tahun 2019 Tentang Perpindahan Dosen Warga Negara Indonesia Dari Perguruan Tinggi Luar Negeri Ke Perguruan Tinggi Dalam Negeri",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Permenristekdikti-No-7-Tahun-2019-LLDIKTI-III.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 5 Tahun 2019 Tentang Program Profesi Advokat",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/04/Permenristekdikti-No.-5-Tahun-2019-Tentang-Program-Profesi-Advokat_.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 1 Tahun 2019 Tentang Pejabat Penilai Dan Atasan Pejabat Penilai Prestasi Kerja Pegawai Negeri Sipil Di Lingkungan Kementerian Riset, Teknologi, Dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Permenristekdikti-No-1-Tahun-2019-LLDIKTI-III.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 1 Tahun 2019 Tentang Pejabat Penilai Dan Atasan Pejabat Penilai Prestasi Kerja Pegawai Negeri Sipil Di Lingkungan Kementerian Riset, Teknologi, Dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Lampiran-Permenristekdikti-No-1-Tahun-2019-LLDIKTI-III.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 59 Tahun 2018 Tentang Ijazah, Sertifikat Kompetensi, Sertifikat Profesi, Gelar, Dan Tata Cara Penulisan Gelar Di Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/01/Permenristekdikti-No-59-Tahun-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 54 Tahun 2018 Tentang Penyelenggaraan Program Diploma Dalam Sistem Terbuka Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/11/PERMENRISTEKDIKTI-NO-54-TAHUN-2018-PROGRAM-DIPLOMA-SISTEM-TERBUKA.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 53 Tahun 2018 Tentang Perguruan Tinggi Luar Negeri",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/11/PERMENRISTEKDIKTI-NO-53-TAHUN-2018-TENTANG-PTLN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 52 Tahun 2018 Tentang Prosedur Pendirian Perguruan Tinggi Swasta, Pembukaan Program Studi, Program Kerjasama Dan Swasta Di Perguruan Tinggi Swasta",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/11/PERMENRISTEKDIKTI-NO-52-TAHUN-2018-TENTANG-JOINT-PROGRAM.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 51 Tahun 2018 Tentang Pendirian, Perubahan, Pembubaran Perguruan Tinggi Negeri, Dan Pendirian, Perubahan, Pencabutan Izin Perguruan Tinggi Swasta",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/11/PERMENRISTEKDIKTI-NO-51-TAHUN-2018-PENDIRIAN-PERUBAHAN-PEMBUBARAN-PTN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Nomor 50 Tahun 2018 Tentang Perubahan Atas Peraturan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Nomor 44 Tahun 2015 Tentang Standar Nasional Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/11/PERMENRISTEKDIKTI-50-NO-TAHUN-2018-TENTANG-SNDIKTI.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 49 Tahun 2018 Tentang Komite Nasional Kualifikasi Indonesia",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/11/PERMENRISTEKDIKTI-TENTANG-PEMBENTUKAN-KOMITE-NASIONAL-KUALIFIKASI-INDONESIA.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 44 Tahun 2018 Tentang Perubahan Atas Peraturan Menteri Pendidikan Dan Kebudayaan Nomor 14 Tahun 2016 Tentang Ketentuan Teknis Pelaksanaan Pemberian Tunjangan Kinerja Pegawai Di Lingkungan Kementerian Pendidikan Dan Kebudayaan",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/10/PERMENDIKBUD-NO-44-TAHUN-2018.pdf",
    },
    {
        des: "Matriks Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 40 Tahun 2018 Tentang Prioritas Riset Nasional Tahun 2017-2019",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/10/MATRIKS-PERMENRISTEKDIKTI-NOMOR-40-TAHUN-2018-TENTANG-PRN-2017-2019.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 40 Tahun 2018 Tentang Prioritas Riset Nasional Tahun 2017-2019",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/10/LAMPIRAN-PERMENRISTEKDIKTI-NOMOR-40-TAHUN-2018-TENTANG-PRN-2017-2019.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 40 Tahun 2018 Tentang Prioritas Riset Nasional Tahun 2017-2019",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/10/PERMENRISTEKDIKTI-NOMOR-40-TAHUN-2018-TENTANG-PRN-2017-2019.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 36 Tahun 2018 Tentang Tata Cara Penyusunan Prioritas Penelitian Nasional dan Kebijakan Pemantauan Dan Evaluasi Pelaksanaan Rencana Induk Riset Nasional",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/10/permenristekdikti-36-2018-tata-cara-riset.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 33 Tahun 2018 Tentang Program Penamaan Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/09/Permenristekdikti-33-Tahun-2018-ttg-Penamaan-Prodi.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 23 Tahun 2018 Tentang Klasifikasi Arsip, Jadwal Retensi Arsip, Dan Sistem Klasifikasi Keamanan Dan Akses Arsip Dinamis Di Lingkungan Kementerian Riset, Teknologi, Dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/06/Permenristekdikti-23-Thn-2018.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 23 Tahun 2018 Tentang Klasifikasi Arsip, Jadwal Retensi Arsip, Dan Sistem Klasifikasi Keamanan Dan Akses Arsip Dinamis Di Lingkungan Kementerian Riset, Teknologi, Dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/06/Permenristekdikti-23-Thn-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 20 Tahun 2018 Tentang Penelitian",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/07/permenristekdikti-nomor-20-tahun-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 18 Tahun 2018 Tentang Standar Nasional Pendidikan Kedokteran",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/06/Permenristekdikti-No-18-Tahun-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 16 Tahun 2018 tentang Tata Cara Penyusunan Statuta Perguruan Tinggi Swasta",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/Permenristekdikti-No-16-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 15 Tahun 2018 tentang Organisasi dan Tata Kerja Lembaga Layanan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/Permenristekdikti-No-15-Tahun-2018.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 15 Tahun 2018 tentang Organisasi dan Tata Kerja Lembaga Layanan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/Lampiran-permenristekdikti-no-15-tahun-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 9 Tahun 2018 tentang Akreditasi Jurnal Ilmiah",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/SALINAN-PERMENRISTEKDIKTI-NOMOR-9-TAHUN-2018-TENTANG-AKREDITASI-JURNAL.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 8 Tahun 2018 tentang Tata Cara Pengangkatan Pegawai Negeri Sipil Dalam Jabatan Fungsional Dosen Melalui Penyesuaian / Inpassing",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/04/Permenristekdikti-No-8-Thn-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 3 Tahun 2018 tentang Penggabungan dan Penyatuan Perguruan Tinggi Swasta",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/02/Permenristekdikti-no.3-Tahun-2018.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 2 Tahun 2018 tentang Pedoman Analisis Biaya Kerja Jabatan Pelaksana Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/01/Lampiran-Permenristekditi-No-02-Thn-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 2 Tahun 2018 tentang Pedoman Analisis Biaya Kerja Jabatan Pelaksana Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/01/Permenristekditi-No-02-Thn-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 91 Tahun 2017 tentang Perpindahan Dosen dan Alih Tugas Pegawai Negeri Sipil Non Dosen Menjadi Dosen",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/Permenristekdikti-No-91-2017.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Pendidikan, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 65 Tahun 2017 tentang kebijakan Keprotokolan di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-65-Tahun-2017-Lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 65 Tahun 2017 tentang Pedoman Keprotokolan di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-65-Tahun-2017-tentang-Pedoman-Keprotokolan-di-Lingkungan-Kemristekdikti.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 62 Tahun 2017 tentang Tata Kelola Teknologi Informasi di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-62-Tahun-2017-tentang-Tata-Kelola-Teknologi-Informasi-di-Lingkungan-Kemristekdikti.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 59 Tahun 2017 tentang Penyetaraan Ijazah dan Konversi Nilai Indeks Prestasi Kumulatif Lulusan Perguruan Tinggi Luar Negeri",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Permenristekdikti-no.59-Tahun-2017-tentang-Penyetaraan-Ijazah-dan-Konversi-Nilai-Indeks-Prestasi-Kumulatif-Lulusan-Perguruan-Tinggi-Luar-Negeri.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 55 Tahun 2017 Tentang Standar Pendidikan Guru",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/55.-SALINAN-PERMENRISTEKDIKTI-NO.55-TH-2017-TENTANG-STANDAR-PENDIDIKAN-GURU.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 55 Tahun 2017 Tentang Standar Pendidikan Guru",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/55.-SALINAN-PERMENRISTEKDIKTI-NO.55-TH-2017-TENTANG-STANDAR-PENDIDIKAN-GURU-LAMPIRAN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 51 Tahun 2017 Tentang Sertifikasi Pendidik Untuk Dosen",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/51.-SALINAN-PERMENRISTEKDIKTI-NO-51-TAHUN-2017.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 50 Tahun 2017 Tentang Rencana Strategis Kementerian Riset, Teknologi, dan Pendidikan Tinggi Tahun 2015-2019",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/50.-SALINAN-PERMEN-NO.50-TH-2017-RENSTRA-KEMENRISTEKDIKTI-TH-2015-2019.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 43 Tahun 2017 Tentang Kuota Nasional dan Seleksi Penerimaan Mahasiswa Baru Program Studi Kedokteran dan Program Studi Kedokteran Gigi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/08/Permenristekdikti-14-Tahun-2018.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 20 Tahun 2017 Tentang Pemberian Tunjangan Profesi Dosen dan Tunjangan Kehormatan Profesor",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-PERMENRISTEKDIKTI-NO.-20-TH.-2017-TTG-TUNJANGAN-PROFESI-KEHORMATAN-DISTRIBUSI-II.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Pendidikan, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 20 Tahun 2017 Tentang Pemberian Tunjangan Profesi Dosen dan Tunjangan Keh",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-LAMPIRAN-PERMENRISTEKDIKTI-NO.-20-TH.-2017-TTG-TUNJANGAN-PROFESI-KEHORMATAN-DISTRIBUSI-II.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 15 Tahun 2017 Tentang Penamaan Pogram Studi Pada Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/15.-SALINAN-PERMEN-NOMOR-15-TAHUN-2017-TENTANG-PENAMAAN-PROGRAM-STUDI-PADA-PT.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 14 Tahun 2017 Tentang Daftar Kegiatan dan Obyek Perijinan Penelitian Asing Yang Tidak Direkomendasikan",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/14.-SALINAN-PERMENRISTEKDIKTI-NOMOR-14-TAHUN-2017.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 14 Tahun 2017 Tentang Daftar Kegiatan dan Obyek Perijinan Penelitian Asing Yang Tidak Direkomendasikan",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/14.-SALINAN-LAMPIRAN-PERMEN-NOMOR-14-TAHUN-2017.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 4 Tahun 2017 Tentang Komisi Kerja Sama di Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Permenristekdikti-No-4-Tahun-2017.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 4 Tahun 2017 Tentang Komisi Kerja Sama di Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Lampiran-Permenristekdikti-No-4-Tahun-2017.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 1 Tahun 2017 Tentang Pembukaan, Perubahan, dan Penutupan Program Studi di Luar Kampus Utama Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/1.-SALINAN-PERMENRISTEKDIKTI-NOMOR-1-TAHUN-2017-TENTANG-PSDKU.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 100 Tahun 2016 Tentang Pendirian, Perubahan, Pembubaran Perguruan Tinggi Negeri, dan Pendirian, Perubahan, Pencabutan Izin Perguruan Tinggi Swasta",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-100.-PERMENRISTEKDIKTI-NOMOR-100-TAHUN-2016-PENGGANTI-PERMENRISTEKDIKTI-NOMOR-50.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 98 Tahun 2016 Tentang Pemberian Kuasa dan Delegasi Wewenang Kegiatan Administrasi Kepegawaian Kepada Pejabat Tertentu Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/98.-SALINAN-PERMENRISTEKDIKTI-NOMOR-98-TAHUN-2016-TENTANG-PEMBERIAN-KUASA-DAN-DELEGASI-WEWENANG-KEPEGAWAIAN-DI-KEMENRISTEKDIKTI.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 98 Tahun 2016 Tentang Pemberian Kuasa dan Delegasi Wewenang Kegiatan Administrasi Kepegawaian Kepada Pejabat Tertentu Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/LAMPIRAN-I-PERMEN-NOMOR-98-TAHUN-2016-TENTANG-PEMBERIAN-KUASA-DAN-DELEGASI-WEWENANG-KEPEGAWAIAN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 90 Tahun 2016 Tentang Pelimpahan Sebagian Wewenang dan Tanggung Jawab Pengelolaan Barang Milik Negara Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-PERMEN-NOMOR-90-TAHUN-2016-TENTANG-PELIMPAHAN-KEWENANGAN-DAN-TANGGUNG-JAWAB-BMN-PENGUNDANGAN.pdf",
    },
    {
        des: "Lampiran I Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 90 Tahun 2016 Tentang Pelimpahan Sebagian Wewenang dan Tanggung Jawab Pengelolaan Barang Milik Negara Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-LAMPIRAN-I-PENGUNDANGAN.pdf",
    },
    {
        des: "Lampiran II Peraturan Menteri Pendidikan, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 90 Tahun 2016 Tentang Pelimpahan Sebagian Wewenang dan Tanggung Jawab Pengelolaan Barang Milik Negara Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-LAMPIRAN-II-PENGUNDANGAN.pdf",
    },
    {
        des: "Lampiran III Peraturan Menteri Pendidikan, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 90 Tahun 2016 Tentang Pelimpahan Sebagian Wewenang dan Tanggung Jawab Pengelolaan Barang Milik Negara Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-LAMPIRAN-III-PENGUNDANGAN.pdf",
    },
    {
        des: "Lampiran IV Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 90 Tahun 2016 Tentang Pelimpahan Sebagian Wewenang dan Tanggung Jawab Pengelolaan Barang Milik Negara Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-LAMPIRAN-IV-PENGUNDANGAN.pdf",
    },
    {
        des: "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Republik Indonesia Nomor 25 Tahun 2016 Tentang Nomenklatur Jabatan Pelaksana Bagi Pegawai Negeri Sipil di Lingkungan Pemerintah",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/permenpan2016_025r.pdf",
    },
    {
        des: "Peraturan Menteri Keuangan Republik Indonesia Nomor 106 Tahun 2016 tentang Standar Biaya Keluaran Tahun Anggaran 2017",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/69.-PMK-106-Tahun-2016-1_.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 75 Tahun 2016 Tentang Layanan Informasi Publik",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/75.-SALINAN-PERMEN-NOMOR-75-TAHUN-2016-TENTANG-LAYANAN-INFORMASI-PUBLIK.pdf",
    },
    {
        des: "Laporan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 69 Tahun 2016 tentang Pembentukan Komite Penilai dan atau Reviewer dan Tata Cara melakukan Evaluasi dengan Sistem Biaya Keluaran",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-69-Tahun-2016-Lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 69 Tahun 2016 Tentang Pembentukan Komite Penilai dan / atau Reviewer dan Tata Cara melakukan Evaluasi dengan Sistem Biaya Keluaran",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-69-Tahun-2016-tentang-Pembentukan-Komite-Penilai-dan-atau-Reviewer-dan-Tata-Cara-Pelaksanaan-Penilaian-Penelitian-dengan-Menggunakan-Sistem-Biaya-Keluaran.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 68 Tahun 2016 Tentang Layanan Pengadaan Sistem Elektronik Di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-68-Tahun-2016-tentang-Layanan-Pengadaan-Sistem-Elektronik-Di-Lingkungan-Kemristekdikti.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 65 Tahun 2016 Tentang Gelar Doktor Kehormatan",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/65.-SALINAN-PERMENRISTEKDIKTI-NOMOR-65-TAHUN-2016-TENTANG-GELAR-DOKTOR-KEHORMATAN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 63 Tahun 2016 Tentang Gelar dan Tata Cara Penulisan Gelar di Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/63.-SALINAN-PERMENRISTEKDIKTI-NOMOR-63-TAHUN-2016-TENTANG-TATA-CARA-PENULISAN-GELAR.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 62 Tahun 2016 Tentang Sistem Penjaminan Mutu Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-62-Tahun-2016-tentang-SPM-Dikti.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 61 Tahun 2016 Tentang Pangkalan Data Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-61-Tahun-2016-Tentang-Pangkalan-Data-Pendidikan-Tinggi.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 60 Tahun 2016 Tentang Pedoman Penanganan Pengaduan Whistleblower dan Pengaduan Masyarakat di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/60.-SALINAN-PERMENRISTEKDIKTI-NOMOR-60-TAHUN-2016-TENTANG-PEDOMAN-PENANGANAN-PENGADUAN.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 59 Tahun 2016 Pelayanan Publik Di Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-59-Tahun-2016-Lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 59 Tahun 2016 Tentang Pelayanan Publik Di Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-59-Tahun-2016-tentang-Pelayanan-Publik-Di-Kemristekdikti.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 55 Tahun 2016 Tentang Pengendalian Gratifikasi di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/55.-SALINAN-PERMENRISTEKDIKTI-NOMOR-55-TAHUN-2016-TENTANG-PENGENDALIAN-GRATIFIKASI.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 53 Tahun 2016 Tentang Tata Cara Pembentukan Peraturan Perundangan-di Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/53.-SALINAN-PERMENRISTEKDIKTI-NOMOR-53-TAHUN-2016-TENTANG-TATA-CARA-PEMBENTUKAN-PUU.pdf",
    },
    {
        des: "Lampiran I dan II Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 53 Tahun 2016 Tentang Tata Cara Pembentukan Peraturan Perundangan-di Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/53.-SALINAN-LAMPIRAN-I-DAN-LAMPIRAN-II-PERMEN-NOMOR-53-TAHUN-2016-TENTANG-TATA-CARA-PEMBENTUKAN-PUU.pdf",
    },
    {
        des: "Lampiran III Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 53 Tahun 2016 Tentang Tata Cara Pembentukan Peraturan Perundangan-di Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/53.-SALINAN-LAMPIRAN-III-PERMEN-NOMOR-53-TAHUN-2016-TENTANG-TATA-CARA-PEMBENTUKAN-PUU.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 52 Tahun 2016 Tentang Komite Nasional",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-PERMENRISTEKDIKTI-NOMOR-52-TAHUN-2016-TENTANG-KNAPP.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Pendidikan, Teknologi dan Pendidikan Tinggi Republik Indonesia Nomor 42 Tahun 2016 tentang Pengukuran dan Penetapan Tingkat Kesiapterapan Teknologi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-42-Tahun-2016-Lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 42 Tahun 2016 Tentang Pengukuran dan Penetapan Tingkat Kesiapterapan Teknologi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-42-Tahun-2016-tentang-Pengukuran-dan-Penetapan-Tingkat-Kesiapterapan-Teknologi.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 35 Tahun 2016 Tentang Penyelenggaraan Program Studi Program Profesi Insinyur",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/PERMEN-NOMOR-35-TAHUN-2016-TENTANG-PROGRAM-PROFESI-INSINYUR-FINAL-SALINAN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 32 Tahun 2016 Tentang Program Akreditasi Studi dan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-32-Tahun-2016-tentang-Akreditasi-Prodi-dan-Perguruan-Tinggi.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 31 Tahun 2016 Tentang Pemberian Tunjangan Kinerja Pegawai di Lingkungan Kementerian Riset, Teknologi dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-31-Tahun-2016-Lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 31 Tahun 2016 Tentang Pemberian Tunjangan Kinerja Pegawai di Lingkungan Kementerian Riset, Teknologi dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/PERMEN-NOMOR-26-TAHUN-2016-TENTANG-REKOGNISI-PEMBELAJARAN-LAMPAU-SALINAN.pdf",
    },
    {
        des: "Peraturan Menteri Keuangan Republik Indonesia Nomor 72 / PMK.05 / 2016 Tentang Uang Makan Untuk Pegawai Aparatur Sipil Negara",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/NOMOR-72-TAHUN-2016-TENTANG-UANG-MAKAN-BAGI-PEGAWAI-APARATUR-SIPIL-NEGARA.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 26 Tahun 2016 Tentang Rekognisi Pembelajaran Lampau",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/PERMEN-NOMOR-26-TAHUN-2016-TENTANG-REKOGNISI-PEMBELAJARAN-LAMPAU-SALINAN.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor 12 Tahun 2016 Tentang Tata Cara Pelaksanaan Uji Kompetensi Mahasiswa Bidang Kesehatan",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-12-Tahun-2016-Lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 12 Tahun 2016 Tentang Tata Cara Pelaksanaan Uji Kompetensi Mahasiswa Bidang Kesehatan",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/No.-12-Tahun-2016-Tentang-Tata-Cara-Pelaksanaan-Uji-Kompetensi-Mahasiswa-Bidang-Kesehatan.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 11 Tahun 2016 Tentang Sertifikat Profesi Dokter atau Dokter Gigi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-LAMPIRAN-PERMEN-NOMOR-11-TAHUN-2016-TENTANG-SERTFIKAT-PROFESI-DOKTER.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 11 Tahun 2016 Tentang Sertifikat Profesi Dokter atau Dokter Gigi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SALINAN-PERMEN-NOMOR-11-TAHUN-2016-TENTANG-SERTIFIKAT-PROFESI-DOKTER.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Pendidikan, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 2 Tahun 2016 Tentang Perubahan Atas Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 26 Tahun 2015 Tentang Registrasi Pendidik pada Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/LAMPIRAN-PERMEN-NOMOR-2-TAHUN-2016-TENTANG-PERUBAHAN-PERMEN-NOMOR-26-TAHUN-2015-SALINAN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 2 Tahun 2016 Tentang Perubahan Atas Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 26 Tahun 2015 Tentang Registrasi Pendidik di Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/PERMEN-NOMOR-2-TAHUN-2016-TENTANG-PERUBAHAN-PERMEN-NOMOR-26-TAHUN-2015.pdf",
    },
    {
        des: "Peraturan Menteri Keuangan Nomor 65 / PMK.02 / 2015 Tentang Standar Biaya Kirim Tahun Anggaran 2016",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/NO.-65-TAHUN-2015-TENTANG-STANDAR-BIAYA-MASUKAN-TAHUN-ANGGARAN-2016.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 51 Tahun 2015 Tentang Tata Naskah Dinas di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/07/PERMENRISTEKDIKTI-NOMOR-51-TAHUN-2015.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 50 Tahun 2015 Tentang Pendirian, Perubahan, Pembubaran Perguruan Tinggi Negeri dan Pendirian, Perubahan, dan Pencabutan Izin Perguruan Tinggi Swasta",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/PERMENRISTEKDIKTI-NOMOR-50-TAHUN-2015-TENTANG-PENDIRIAN-PEMBUBARAN-PT-SALINAN.pdf",
    },
    {
        des: "Ringkasan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 44 Tahun 2015 Tentang Standar Nasional Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/LAMPIRAN-PERMENRISTEKDIKTI-NOMOR-44-TAHUN-2015-TENTANG-SNPT-SALINAN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 44 Tahun 2015 Tentang Standar Nasional Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/PERMENRISTEKDIKTI-NOMOR-44-TAHUN-2015-TENTANG-SNPT-SALINAN.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 26 Tahun 2015 Tentang Registrasi Pendidik pada Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Permenristekdikti-Nomor-26-Tahun-2015-tentang-Registrasi-Pendidik-Pada-Perguruan-Tinggi.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 20 Tahun 2015 Tentang Tata Naskah Dinas di Lingkungan Kementerian Riset, Teknologi, dan Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/SALINAN-PERMEN-NOMOR-20-TAHUN-2015.pdf",
    },
    {
        des: "Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 19 Tahun 2015 Tentang Program Pembinaan Perguruan Tinggi Swasta Tahun 2015",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Salinan-Permenristekdikti-Nomor-19-Tahun-2015-Tentang-Program-Pembinaan-Perguruan-Tinggi-Swasta-Tahun-2015.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 154 Tahun 2014 Tentang Rumpun Ilmu Pengetahuan dan Teknologi serta Gelar Lulusan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud_tahun2014_nomor154.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 154 Tahun 2014 Tentang Rumpun Ilmu Pengetahuan dan Teknologi serta Gelar Lulusan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud_tahun2014_nomor154_lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 139 Tahun 2014 Tentang Pedoman Statuta dan Organisasi Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Permendikbud139-2014PedomanStatuta-OrganisasiPT.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 96 Tahun 2014 Tentang Penyelenggaran Bantuan Biaya Pendidikan BIDIKMISI",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud_tahun2014_nomor096.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 95 Tahun 2014 Tentang Pendirian, Perubahan, dan Pembubaran Perguruan Tinggi Negeri Serta Pendirian, Perubahan, dan Pencabutan Izin Perguruan Tinggi Swasta",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud_tahun2014_nomor095.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 92 Tahun 2014 Tentang Pencatatan Pekerjaan Angka Kredit Jabatan Fungsional Dosen",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud_tahun2014_nomor092.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 92 Tahun 2014 Petunjuk Pelaksanaan Penilaian Angka Kredit Jabatan Fungsional Dosen",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud_tahun2014_nomor092_lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 87 Tahun 2014 Tentang Program Akreditasi Studi dan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permen-Nomor-87-Tahun-2014.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 81 Tahun 2014 Tentang Ijazah, Sertifikat Kompetensi, dan Sertifikat Profesi Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud_tahun2014_nomor081.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 67 tahun 2014 Tentang Pejabat Penilai Dosen pada SKP",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2014/11/Permendikbud-No.-67-tahun-2014-Pejabat-Penilai-Dosen-pada-SKP.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 50 Tahun 2014 tentang Sistem Penjaminan Mutu Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2014_nomor050.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 49 Tahun 2014 tentang Standar Nasional Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2014_nomor049.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 46 Tahun 2014 tentang Pendidikan Khusus, Pendidikan Layanan Khusus dan / atau Pembelajaran Layanan Khusus Pada Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2014_nomor046.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 18 Tahun 2014 tentang Pedoman Penyelesaian Kerugian Negara di Lingkungan Kementerian Pendidikan dan Kebudayaan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2014_nomor018.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 14 Tahun 2014 Tentang Pekerjaan Sama Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2014_nomor014.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 11 Tahun 2014 Tentang Pengesahan Fotokopi Ijazah, Fotokopi Sertifikat Profesi, Fotokopi Surat Keterangan Pengganti Ijazah / Sertifikat Profesi, dan Penerbitan Surat Keterangan Pengganti Ijazah / Sertifikat Profesi Lulusan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2014_nomor011.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 8 Tahun 2014 Tentang Alih Jabatan / Tugas Pegawai Negeri Sipil Dosen",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2014_nomor008.pdf",
    },
    {
        des: "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 16 Tahun 2014 tentang Pedoman Survei Kepuasan Publik Terhadap Penyelenggaraan Pelayanan Publik",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permenpan2014_016.pdf",
    },
    {
        des: "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 15 Tahun 2014 tentang Pedoman Standar Pelayanan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permenpan2014_015.pdf",
    },
    {
        des: "Permendikbud No 14 tahun 2014 Tentang Kerjasama Perguruan Tinggi",
        url: "https://www.lldikti4.id/download/permendikbud-no-14-tahun-2014-tentang-kerjasama-perguruan-tinggi/",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 110 Tahun 2013 Tentang Pemberian Kuasa Kepada Pejabat Tertentu Dan Pimpinan Perguruan Tinggi Negeri Di Lingkungan Kementerian Pendidikan dan Kebudayaan Untuk Menandatangani Keputusan Pemberian Dan Penghentian Pembayaran Tunjangan Kinerja Pegawai Di Lingkungan Kementerian Pendidikan dan Kebudayaan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permendikbud-110-th-2013.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 109 Tahun 2013 Tentang Penyelenggaraan Pendidikan Jarak Jauh Pada Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2013_nomor109.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 107 Tahun 2013 Tentang Tunjangan Kinerja Bagi Pegawai Di Lingkungan Kementerian Pendidikan dan Kebudayaan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud-107-2013.pdf",
    },
    {
        des: "Lampiran Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 107 Tahun 2013 Tentang Tunjangan Kinerja Bagi Pegawai Di Lingkungan Kementerian Pendidikan dan Kebudayaan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2013_nomor107_lampiran.pdf",
    },
    {
        des: "Peraturan Menteri Keuangan Republik Indonesia Nomor 72 / PMK.02 / 2013 Tentang Standar Biaya Kirim Tahun Anggaran 2014",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PMK-72-2013-SBM-TA-2014.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 84 Tahun 2013 Tentang Pengangkatan Dosen Tetap Non Pegawai Negeri Sipil Pada Perguruan Tinggi Negeri Dan Dosen Tetap Pada Perguruan Tinggi Swasta",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud-no-84-tahun-2013-tentang-pengangkatan-dosen-tetap-non-pns.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 78 Tahun 2013 Tentang Pemberian Tunjangan Profesi dan Tunjangan Kehormatan Bagi Dosen Yang Menduduki Jabatan Akademik Profesor",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2013_nomor78.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 73 Tahun 2013 Tentang Penerapan Kerangka Kualifikasi Nasional Indonesia Bidang Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2013_nomor73.pdf",
    },
    {
        des: "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 17 Tahun 2013 tentang Jabatan Fungsional Dosen dan Angka Kreditnya",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permenpan-17-20131.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 52 Tahun 2013 tentang Rincian Tugas Unit Kerja di Lingkungan Direktorat Jenderal Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2013_nomor52.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 51 Tahun 2013 tentang Pengendalian Gratifikasi di Lingkungan Kementerian Pendidikan dan Kebudayaan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permen_tahun2013_nomor51.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 48 Tahun 2013 tentang Pendirian, Perubahan, dan Pencabutan Izin Akademi Komunitas",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud48thn2013.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 42 Tahun 2013 tentang Perubahan Atas Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 1 Tahun 2013 Tentang Organisasi dan Tata Kerja Swasta Perguruan Tinggi Swasta",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendikbud42thn2013.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 1 Tahun 2013 Tentang Organisasi dan Tata Kerja Koordinasi Perguruan Tinggi Swasta",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/salinan-Permendikbud-No-1-thn-20131.pdf",
    },
    {
        des: "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 35 Tahun 2012 tentang Pedoman Penyusunan Standar Operasional Administrasi Pemerintahan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permenpan2012_035.pdf",
    },
    {
        des: "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 36 Tahun 2012 tentang Petunjuk Teknis Penyusunan, Penetapan, dan Penerusan Standar Pelayanan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permenpan-36-Th-2012.pdf",
    },
    {
        des: "Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 35 Tahun 2012 tentang Pedoman Penyusunan Standar Operasional Administrasi Pemerintahan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permenpan2012_035.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 40 Tahun 2012 Tentang Pengangkatan Profesor / Guru Besar Tidak Tetap Pada Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permendikbud-40-2012-Pengangkatan-Profesor-Tidak-Tetap.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 33 Tahun 2012 Tentang Pengangkatan dan Pemberhentian Rektor / Ketua Perguruan Tinggi Yang Disidang Oleh Pemerintah",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PERMENDIKBUD-2012-NOMOR-33-PENGANGKATAN-REKTOR.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 17 Tahun 2011 Tentang Pemberian Beasiswa untuk Pendidik dan Tenaga Kependidikan pada Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Nomor-17-Tahun-2011.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 20 Tahun 2011 tentang Penyelenggaraan Prodi di Luar Domisili Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendiknas-nomor-20-tahun-2011.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Nomor 36 Tahun 2010 Tentang Organisasi Dan Tata Kerja Kementerian Pendidikan Nasional",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permen36-2010.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 17 Tahun 2010 Tentang Pencegahan Dan Penanggulangan Plagiat Di Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendiknas-no-17-tahun-2010.pdf",
    },
    {
        des: "Peraturan Menteri Keuangan Nomor 164 / PMK.05 / 2010 Tahun 2010 tentang Tata Cara Pembayaran Tunjangan Profesi Guru dan Dosen, serta Tunjangan Kehormatan Profesor",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/PMK164-2010.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 6 Tahun 2010 Tentang Renungan Atas Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 28 Tahun 2005 Tentang Badan Akreditasi Nasional Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permen06-2010Akreditasi.pdf",
    },
    {
        des: "Permendiknas Nomor 48 Tahun 2009 Tentang Pedoman Pemberian Tugas Belajar Bagi Pegawai Negeri Sipil Di Lingkungan Departemen Pendidikan Nasional",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendiknas-no-48-tahun-2009.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 59 Tahun 2008 Tentang Pengesahan Fotokopi Ijazah / Surat Tanda Tamat Belajar, Surat Keterangan Pengganti yang Berpenghargaan Sama Dengan Ijazah / Surat Tanda Tamat Belajar dan Penerbitan Surat Keterangan Pengganti yang Berpenghargaan Sama Dengan Ijazah / Surat Tanda Tamat Belajar",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permen59-2008.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 38 Tahun 2008 tentang Pengelolaan Teknologi Informasi dan Komunikasi di Lingkungan Departemen Pendidikan Nasional",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permen38-2008PengelolaanTIK.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 20 Tahun 2008 Tentang Penetapan Yang Melewati Pangkat Dosen Bukan Pegawai Negeri Sipil Yang Telah Menduduki Jabatan Akademik Pada Perguruan Tinggi Yang Diselenggarakan Oleh Masyarakat Dengan Pangkat Pegawai Negeri Sipil",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Permen20-2008.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 25 Tahun 2007 Tentang Persyaratan dan Proyek Bagi Warga Negara Sebagai Salah Satu Perguruan Tinggi Di Indonesia",
        url: "http://www.kopertis3.or.id/html/wp-content/uploads/2011/04/Permen25-2007.pdf",
    },
    {
        des: "Peraturan Menteri Pendidikan Nasional Republik Indonesia Nomor 28 Tahun 2005 Tentang Badan Akreditasi Nasional Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/permendiknas-no-28-tahun-2005-tentang-badan-akreditasi-nasional-perguruan-tinggi.pdf",
    },
];

const DataKeputusanMenteri = [
    {
        des: "Keputusan Menteri Pendidikan Dan Kebudayaan Republik Indonesia Nomor 83/P/2020 Tentang Lembaga Akreditasi Internasional",
        url: "http://lldikti3.ristekdikti.go.id/v6/wp-content/uploads/2020/02/Kepemdikbud-Nomor-83_P_2020-cap.pdf.pdf.pdf",
    },
    {
        des: "Keputusan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 164/M/KPT/2019 Tentang Penyebutan Jabatan Akademik Dosen Dalam Bahasa Inggris",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/08/Kepmen-Penyebutan-JA-Dosen-dalam-Bahasa-Inggris.pdf",
    },
    {
        des: "Keputusan Menteri Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia Nomor 57/M/Kpt/2019 Tentang Nama Program Studi Pada Perguruan Tinggi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/03/Kepmen-no-57-2019-Nama-Prodi.pdf",
    },
    {
        des: "Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 81 / M / KPT / 2018 Tentang Program Kuota Nasional Studi Kedokteran dan Program Studi Kedokteran Gigi",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/08/Kepmen-81-Thn-2018.pdf",
    },
    {
        des: "Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 257 / M / KPT / 2017 Tentang Nama Program Studi Pada Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/KEPMEN-NO-257.pdf",
    },
    {
        des: "Lampiran Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 257 / M / KPT / 2017 Tentang Nama Program Studi Pada Perguruan Tinggi Program Studi Spesialis",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Lampiran-Nomenklatur-Prodi-Spesialis-27-Agustus-2017-rev.pdf",
    },
    {
        des: "Lampiran Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 257 / M / KPT / 2017 Tentang Nama Program Studi Pada Perguruan Tinggi Program Studi Diploma I dan Diploma II",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Lampiran-Nomenklatur-Prodi-Vokasi-D1D2-27-agustus-2017.pdf",
    },
    {
        des: "Lampiran Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 257 / M / KPT / 2017 Tentang Nama Program Studi Pada Perguruan Tinggi Program Studi Diploma IV",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Lampiran-Nomenklatur-Prodi-Vokasi-IV-27-agustus-2017.pdf",
    },
    {
        des: "Lampiran Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 257 / M / KPT / 2017 Tentang Nama Program Studi Pada Perguruan Tinggi Program Studi Akademik",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Lampiran-Nomenklatur-Prodi-Akademik-27-Agustus-2017-rev.pdf",
    },
    {
        des: "Lampiran Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 257 / M / KPT / 2017 Tentang Nama Program Studi Pada Perguruan Tinggi Program Studi Profesi",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Lampiran-Nomenklatur-Prodi-Profesi-II-27-Agustus-2017.pdf",
    },
    {
        des: "Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 192 / M / KPT / 2017 Tentang Perguruan Tinggi Penyelenggara Sertifikasi Bagi Guru Dalam Jabatan Melalui Pendidikan dan Latihan Profesi Guru",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/SK-Diklat-PPG.pdf",
    },
    {
        des: "Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 195 / M / Kp / IV / 2015 Tentang Penetapan Logo Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Kepmen-Logo.pdf",
    },
    {
        des: "Lampiran Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 195 / M / Kp / 2015 Tentang Penetapan Logo Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Lampiran-Kepmen-Logo.pdf",
    },
    {
        des: "Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 144 / M / Kp / IV / 2015 Tentang Perubahan Nama Domain Kementerian Riset dan Teknologi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Kepmen-Domain.pdf",
    },
    {
        des: "Keputusan Menteri Pendidikan Nasional Republik Indonesia Nomor 045 / U / 2002 Tentang Kurikulum Inti Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Kepmen045-U-2002KurikulumInti.pdf",
    },
    {
        des: "Keputusan Menteri Pendidikan Nasional Republik Indonesia Nomor 004 / U / 2002 Program Akreditasi Studi Pada Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/kepmen_004_2002.pdf",
    },
    {
        des: "Keputusan Menteri Pendidikan Nasional Republik Indonesia Nomor 184 / U / 2001 Tentang Pedoman Pengawasan  Program Pengendalian dan Pembinaan Diploma, Sarjana dan Pascasarjana di Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/kepmen-184-2001.pdf",
    },
    {
        des: "Keputusan Menteri Pendidikan Nasional Republik Indonesia Nomor 178 / U / 2001 Tentang Gelar dan Lulusan Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Kepmen178-U-2001GelarLulusanPT.pdf",
    },
    {
        des: "Keputusan Menteri Pendidikan Nasional Republik Indonesia Nomor 36 / D / O / 2001 Tentang Petunjuk Pelaksanaan Penilaian Angka Kredit Jabatan Dosen",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Kepmen36-D-O-2001PenilaianKredit.pdf",
    },
    {
        des: "Keputusan Menteri Pendidikan Nasional Republik Indonesia Nomor 232 / U / 2000 Tentang Pedoman Penyusunan Kurikulum Pendidikan Tinggi dan Penilaian Hasil Belajar Mahasiswa",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/kepmen-232-2000.pdf",
    },
    {
        des: "Keputusan Menteri Pendidikan Nasional Republik Indonesia Nomor 234 / U / 2000 Tentang Pedoman Pendirian Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/kepmen-234-00.pdf",
    },
    {
        des: "Keputusan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 223 / U / 1998 Tentang Kerjasam Antar Perguruan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/Kepmen223-U-1998KerjasamaPT.pdf",
    },
];
