import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import {
    faCaretDown,
    faCaretRight,
    fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const POS = (props) => {
    const [buttonSet, setButton] = useState({
        LA: false,
        LK: false,
        LKSP: false,
        LSIK: false,
        LKT: false,
        LPP: false,
        LHH: false,
        LTU: false,
    });
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
                <div className="flex items-start w-full flex-col py-10 container hs-dropdown">
                    {/* 1 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LA: !buttonSet.LA })}
                        >
                            {buttonSet.LA ? (
                                <TitleOf>Layanan Akademik</TitleOf>
                            ) : (
                                <TitleOn>Layanan Akademik</TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LA ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLayananAkademik.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LK: !buttonSet.LK })}
                        >
                            {buttonSet.LK ? (
                                <TitleOf>Layanan Kemahasiswaan</TitleOf>
                            ) : (
                                <TitleOn>Layanan Kemahasiswaan</TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LK ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLayananKemahasiswaan.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LPTK: !buttonSet.LPTK })}
                        >
                            {buttonSet.LPTK ? (
                                <TitleOf>
                                    Layanan Pendidik dan Tenaga Kependidikan
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Layanan Pendidik dan Tenaga Kependidikan
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LPTK ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLPTK.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LKSP: !buttonSet.LKSP })}
                        >
                            {buttonSet.LKSP ? (
                                <TitleOf>
                                    Layanan Kelembagaan, Sarana dan Prasarana
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Layanan Kelembagaan, Sarana dan Prasarana
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LKSP ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLKSP.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LSIK: !buttonSet.LSIK })}
                        >
                            {buttonSet.LSIK ? (
                                <TitleOf>
                                    Layanan Sistem Informasi dan Kerjasama
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Layanan Sistem Informasi dan Kerjasama
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LSIK ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLSIK.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LKT: !buttonSet.LKT })}
                        >
                            {buttonSet.LKT ? (
                                <TitleOf>
                                    Layanan Kepegawaian dan Tatalaksana
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Layanan Kepegawaian dan Tatalaksana
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LKT ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLKT.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LPP: !buttonSet.LPP })}
                        >
                            {buttonSet.LPP ? (
                                <TitleOf>
                                    Layanan Perencanaan dan Penganggaran
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Layanan Perencanaan dan Penganggaran
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LPP ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLPP.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 7 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LHH: !buttonSet.LHH })}
                        >
                            {buttonSet.LHH ? (
                                <TitleOf>Layanan Humas dan Hukum</TitleOf>
                            ) : (
                                <TitleOn>Layanan Humas dan Hukum</TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LHH ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLHH.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* 8 */}
                    <div className="p-2 ">
                        <button
                            onClick={() => setButton({ LTU: !buttonSet.LTU })}
                        >
                            {buttonSet.LTU ? (
                                <TitleOf>
                                    Layanan Tata Usaha dan Barang Milik Negara
                                </TitleOf>
                            ) : (
                                <TitleOn>
                                    Layanan Tata Usaha dan Barang Milik Negara
                                </TitleOn>
                            )}
                        </button>
                        <div
                            className={`${
                                buttonSet.LTU ? "flex" : "hidden"
                            } flex-col gap-5 transition-all duration-300`}
                        >
                            <div className="flex flex-col pt-4">
                                {DataLTU.map((data, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-row pl-2 md:pl-6"
                                    >
                                        <p className="pr-2">•</p>
                                        <a
                                            href={data.url}
                                            className=" dark:text-[#eb6f98] text-[#cc3366] pl-3 link link-hover text-[13px]"
                                        >
                                            {data.des}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default POS;

const TitleOn = ({ children }) => {
    // #ffb94c
    return (
        <div className=" py-3 px-4 inline-flex  text-start lg:text-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm  hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            <div className="flex items-center flex-fow gap-4 font-semibold text-[#2657a7] md:text-[1.5rem] text-[13px]">
                <FontAwesomeIcon icon={faCaretRight} />
                <span className=" select-none">{children}</span>
            </div>
        </div>
    );
};
const TitleOf = ({ children }) => {
    // #ffb94c
    return (
        <div className="hs-dropdown-toggle py-3 px-4 inline-flex text-start lg:text-center items-center gap-2 rounded-md border font-medium bg-white  transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            <div className="flex items-center flex-fow gap-4 font-semibold text-[#ffb94c] md:text-[1.5rem] text-[13px]">
                <FontAwesomeIcon icon={faCaretDown} />
                <span className=" select-none">{children}</span>
            </div>
        </div>
    );
};

const DataLTU = [
    {
        des: "POS-TU-1-V09 Penerimaan, Pencatatan dan Pendistribusian Surat Masuk",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Penerimaan-Pencatatan-dan-Pendistribusian-Surat-Masuk.pdf",
    },
    {
        des: "POS-TU-2-V10 Penerimaan, Pencatatan dan Pendistribusian Surat Keluar",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Penerimaan-Pencatatan-dan-Pendistribusian-Surat-Keluar.pdf",
    },
    {
        des: "POS-TU-3-V03 Penggandaan Surat dan Dokumen",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Penggandaan-Surat-dan-Dokumen.pdf",
    },
    {
        des: "POS-TU-5-V05 Urusan Pencatatan, Penyimpanan, Penataan, Pemeliharaan dan Usul Penyusutan Arsip",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Urusan-Pencatatan-Penyimpanan-Penataan-Pemeliharaan-dan-Usul-Penyusutan-Arsip.pdf",
    },
    {
        des: "POS-TU-6-V03 Pemberian Layanan Peminjaman Arsip",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pemberian-Layanan-Peminjaman-Arsip.pdf",
    },
    {
        des: "POS-TU-7-V07 Pengelolaan Keamanan Gedung",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pengelolaan-Keamanan-Gedung.pdf",
    },
    {
        des: "POS-TU-8-V07 Pemeliharaan Kebersihan",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pemeliharaan-Kebersihan.pdf",
    },
    {
        des: "POS-TU-9-V03 Pemeliharaan Gedung Kantor dan Kendaraan Dinas",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pemeliharaan-Gedung-Kantor-dan-Kendaraan-Dinas.pdf",
    },
    {
        des: "POS-TU-10-V02 Pemantauan dan Evaluasi Persuratan, Kearsipan, Kerumahtanggaan dan Pengelolaan BMN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pemantauan-dan-Evaluasi-Persuratan-Kearsipan-Kerumahtanggaan-dan-Pengelolaan-BMN.pdf",
    },
    {
        des: "POS-TU-11-V09 Pemeliharaan Sarana dan Prasarana Lainnya",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pemeliharaan-Sarana-dan-Prasarana-Lainnya.pdf",
    },
    {
        des: "POS-TU-12-V04 Pengaturan Penggunaan Gedung Kantor",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pengaturan-Penggunaan-Gedung-Kantor.pdf",
    },
    {
        des: "POS-TU-13-V08 Pengaturan Penggunaan Kendaraan Dinas",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pengaturan-Penggunaan-Kendaraan-Dinas.pdf",
    },
    {
        des: "POS-TU-14-V03 Pengaturan Penggunaan Peralatan Kantor",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pengaturan-Penggunaan-Peralatan-Kantor.pdf",
    },
    {
        des: "POS-TU-16-V07 Penerimaan Tamu",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Penerimaan-Tamu.pdf",
    },
    {
        des: "POS-TU-17-V08 Rapat Dinas",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Rapat-Dinas.pdf",
    },
    {
        des: "POS-TU-19-V02 Pengelolaan Sistem Informasi Manajemen Akuntansi BMN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Pengelolaan-Sistem-Informasi-Manajemen-Akuntansi-BMN.pdf",
    },
    {
        des: "POS-TU-20-V02 Rekonsiliasi Sistem Informasi Manajemen Akuntansi BMN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Rekonsiliasi-Sistem-Informasi-Manajemen-Akuntansi-BMN.pdf",
    },
    {
        des: "POS-TU-21-V02 Penyusunan Bahan Koordinasi Pengelolaan BMN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Penyusunan-Bahan-Koordinasi-Pengelolaan-BMN.pdf",
    },
    {
        des: "POS-TU-23-V08 Inventarisasi BMN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Inventarisasi-BMN.pdf",
    },
    {
        des: "POS-TU-24-V03 Penyusunan Rencana Kebutuhan dan Pengadaan Barang dan Jasa",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Penyusunan-Rencana-Kebutuhan-dan-Pengadaan-Barang-dan-Jasa.pdf",
    },
    {
        des: "POS-TU-25-V03 Urusan Pengadaan Barang dan Jasa",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Urusan-Pengadaan-Barang-dan-Jasa.pdf",
    },
    {
        des: "POS-TU-26-V03 Penerimaan, Penyimpanan dan Pendistribusian BMN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Penerimaan-Penyimpanan-dan-Pendistribusian-BMN.pdf",
    },
    {
        des: "POS-TU-27-V02 Penyusunan Usul Penghapusan BMN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Tata-Usaha-dan-BMN-Penyusunan-Usul-Penghapusan-BMN.pdf",
    },
];

const DataLHH = [
    {
        des: "POS-TU-4-V03 Penyusun Risalah Rapat Dinas",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Humas-dan-Hukum-Penyusun-Risalah-Rapat-Dinas.pdf",
    },
    {
        des: "POS-TU-15-V08 Keprotokolan atau Upacara",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Humas-dan-Hukum-Keprotokolan-atau-Upacara.pdf",
    },
    {
        des: "POS-TU-18-V03 Penyiapan Bahan Publikasi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Humas-dan-Hukum-Penyiapan-Bahan-Publikasi.pdf",
    },
    {
        des: "POS-TU-22-V03 Penyiapan Bahan Jawaban Atas Pemberitaan Media Massa",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Humas-dan-Hukum-Penyiapan-Bahan-Jawaban-Atas-Pemberitaan-Media-Massa.pdf",
    },
    {
        des: "POS-HM-1-V01 Penyiapan Bahan Jawaban atas Pengaduan Melalui LAPOR",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Humas-dan-Hukum-Penyiapan-Bahan-Jawaban-atas-Pengaduan-Melalui-LAPOR.pdf",
    },
    {
        des: "POS-HM-2-V01 Pengaduan Pelayanan Publik",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Humas-dan-Hukum-Pengaduan-Pelayanan-Publik.pdf",
    },
];

const DataLPP = [
    {
        des: "POS-PP-01-V02 Penyusunan Rencana Program Unit Kerja",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Penyusunan-Rencana-Program-Unit-Kerja.pdf",
    },
    {
        des: "POS-PP-02-V08 Penyusunan RKA-KL",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Penyusunan-RKA-KL.pdf",
    },
    {
        des: "POS-PP-03-V02 Revisi Anggaran ke KPA",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Revisi-Anggaran-ke-KPA.pdf",
    },
    {
        des: "POS-PP-04-V02 Revisi Anggaran ke DJA-DJPB",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Revisi-Anggaran-ke-DJA-DJPB.pdf",
    },
    {
        des: "POS-PP-05-V02 Pelaksanaan Kegiatan",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pelaksanaan-Kegiatan.pdf",
    },
    {
        des: "POS-PP-06-V02 Pencairan Dana Melalui LS Bendahara (Non Kontraktual)",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pencairan-Dana-Melalui-LS-Bendahara-Non-Kontraktual.pdf",
    },
    {
        des: "POS-PP-07-V02 Pencairan Dana Melalui LS Kontraktual",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pencairan-Dana-Melalui-LS-Kontraktual.pdf",
    },
    {
        des: "POS-PP-08-V02 Pencairan Dana Melalui LS Pihak Ketiga",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pencairan-Dana-Melalui-LS-Pihak-Ketiga.pdf",
    },
    {
        des: "POS-PP-09-V02 Pencairan Dana Melalui Ganti Uang Persediaan (GUP)",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pencairan-Dana-Melalui-Ganti-Uang-Persediaan-GUP.pdf",
    },
    {
        des: "POS-PP-10-V09 Pencairan Dana Malalui Uang Persediaan (UP)",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pencairan-Dana-Malalui-Uang-Persediaan-UP.pdf",
    },
    {
        des: "POS-PP-11-V02 Pencairan Dana Malalui Tambahan Uang Persediaan (TUP)",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pencairan-Dana-Malalui-Tambahan-Uang-Persediaan-TUP.pdf",
    },
    {
        des: "POS-PP-12-V07 Pembayaran Gaji Pegawai",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pembayaran-Gaji-Pegawai.pdf",
    },
    {
        des: "POS-PP-13-V10 Pembayaran Tunjangan Sertifikasi Dosen, Uang Makan dan Uang Lembur",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pembayaran-Tunjangan-Sertifikasi-Dosen-Uang-Makan-dan-Uang-Lembur.pdf",
    },
    {
        des: "POS-PP-14-V02 Mekanisme Retur dana SPM dan SP2D",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Mekanisme-Retur-dana-SPM-dan-SP2D.pdf",
    },
    {
        des: "POS-PP-15-V02 Perpajakan Bagi Bendahara Pengeluaran dan Bendahara Pengeluaran Pembantu",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Perpajakan-Bagi-Bendahara-Pengeluaran-dan-Bendahara-Pengeluaran-Pembantu.pdf",
    },
    {
        des: "POS-PP-16-V02 Pemenuhan Ganti Uang Nihil",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pemenuhan-Ganti-Uang-Nihil.pdf",
    },
    {
        des: "POS-PP-17-V02 Pembuatan Surat Keterangan Penghentian Pembayaran (bagi dosen PNS dan Dosen yayasan)",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pembuatan-Surat-Keterangan-Penghentian-Pembayaran-bagi-dosen-PNS-dan-Dosen-yayasan.pdf",
    },
    {
        des: "POS-PP-18-V02 Pertanggungjawaban Kegiatan Swakelola",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pertanggungjawaban-Kegiatan-Swakelola.pdf",
    },
    {
        des: "POS-PP-19-V07 Penyusunan Laporan Keuangan",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Penyusunan-Laporan-Keuangan.pdf",
    },
    {
        des: "POS-PP-20-V02 Penyusuan Laporan Kinerja",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Penyusuan-Laporan-Kinerja.pdf",
    },
    {
        des: "POS-PP-21-V02 Pengumpulan Data Kinerja",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Perencanaan-dan-Keuangan-Pengumpulan-Data-Kinerja.pdf",
    },
];

const DataLKT = [
    {
        des: "POS-HKT-1-V03 Penyiapan Bahan Usulan Pengadaan CPNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Penyiapan-Bahan-Usulan-Pengadaan-CPNS.pdf",
    },
    {
        des: "POS-HKT-2-V03 Penyiapan Bahan Pelantikan, Pengangkatan dan Sumpah PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Penyiapan-Bahan-Pelantikan-Pengangkatan-dan-Sumpah-PNS.pdf",
    },
    {
        des: "POS-HKT-3-V06 Pemrosesan SK Inpassing Golongan III dan SK KP Inpassing Golongan III",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Pemrosesan-SK-Inpassing-Golongan-III-dan-SK-KP-Inpassing-Golongan-III.pdf",
    },
    {
        des: "POS-HKT-4-V03 Pemrosesan Usulan SK Inpassing Golongan IV dan SK KP Inpassing Golongan IV",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Pemrosesan-Usulan-SK-Inpassing-Golongan-IV-dan-SK-KP-Inpassing-Golongan-IV.pdf",
    },
    {
        des: "POS-HKT-5-V08 Pemrosesan Usulan SK Kenaikan Pangkat PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Pemrosesan-Usulan-SK-Kenaikan-Pangkat-PNS.pdf",
    },
    {
        des: "POS-HKT-6-V03 Pemrosesan SK Jabatan Akademik Dosen Asisten Ahli dan Lektor",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Pemrosesan-SK-Jabatan-Akademik-Dosen-Asisten-Ahli-dan-Lektor.pdf",
    },
    {
        des: "POS-HKT-7-V03 Pemreosesan Usulan SK Perpindahan Dosen dan Alih Tugas Nondosen Menjadi Dosen",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Pemreosesan-Usulan-SK-Perpindahan-Dosen-dan-Alih-Tugas-Nondosen-Menjadi-Dosen.pdf",
    },
    {
        des: "POS-HKT-8-V03 Pemreosesan Pelanggaran Disiplin PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Pemreosesan-Pelanggaran-Disiplin-PNS.pdf",
    },
    {
        des: "POS-HKT-9-V03 Pemrosesan Pemberhentian PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tatalaksana-Pemrosesan-Pemberhentian-PNS.pdf",
    },
    {
        des: "POS-HKT-10-V03 Pemrosesan Pemberian Cuti PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-Pemberian-Cuti-PNS.pdf",
    },
    {
        des: "POS-HKT-11-V03 Pemrosesan Pemberian Penghargaan Satya Lencana Karya Satya Bagi PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-Pemberian-Penghargaan-Satya-Lencana-Karya-Satya-Bagi-PNS.pdf",
    },
    {
        des: "POS-HKT-12-V03 Pemrosesan Verifikasi dan Validasi SKP Dosen",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-Verifikasi-dan-Validasi-SKP-Dosen.pdf",
    },
    {
        des: "POS-HKT-13-V05 Pemrosesan Pegawai Yang Akan Mengikuti Pelatihan",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-Pegawai-Yang-Akan-Mengikuti-Pelatihan.pdf",
    },
    {
        des: "POS-HKT-14-V03 Pemrosesan SK Izin Belajar PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-SK-Izin-Belajar-PNS.pdf",
    },
    {
        des: "POS-HKT-15-V03 Pemrosesan Usulan SK Tugas Belajar PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-Usulan-SK-Tugas-Belajar-PNS.pdf",
    },
    {
        des: "POS-HKT-16-V07 Pemrosesan Usulan Pembuatan KARPEG, KARIS, KARSU, BPJS dan TASPEN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-Usulan-Pembuatan-KARPEG-KARIS-KARSU-BPJS-dan-TASPEN.pdf",
    },
    {
        des: "POS-HKT-17-V03 Penyiapan Bahan Pengangkatan CPNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Penyiapan-Bahan-Pengangkatan-CPNS.pdf",
    },
    {
        des: "POS-HKT-18-V02 Penyusunan Rancangan Keputusan, Nota Kesepahaman dan Perjanjian Kerja Sama",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Penyusunan-Rancangan-Keputusan-Nota-Kesepahaman-dan-Perjanjian-Kerja-Sama.pdf",
    },
    {
        des: "POS-HKT-19-V02 Penyusunan Bahan Pemberian Bantuan dan Layanan Hukum Terhadap Penyelesaian Kasus Hukum dan Hak Asasi Manusia",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Humas-dan-Hukum-Penyusunan-Bahan-Pemberian-Bantuan-dan-Layanan-Hukum-Terhadap-Penyelesaian-Kasus-Hukum-dan-Hak-Asasi-Manusia.pdf",
    },
    {
        des: "POS-HKT-20-V06 Pemrosesan SK Kenaikan Gaji Berkala PNS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-SK-Kenaikan-Gaji-Berkala-PNS.pdf",
    },
    {
        des: "POS-HKT-21-V06 Pemrosesan Surat Rekomendasi Pindah Homebase Dosen Tetap Yayasan",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kepegawaian-dan-Tata-Laksana-Pemrosesan-Surat-Rekomendasi-Pindah-Homebase-Dosen-Tetap-Yayasan.pdf",
    },
];

const DataLayananAkademik = [
    {
        des: "POS-AK-1-V03 Pelaksanaan Pengumpulan dan Pengolahan Data Mutu Akademik",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Pelaksanaan-Pengumpulan-dan-Pengolahan-Data-Mutu-Akademik.pdf",
    },
    {
        des: "POS-AK-2-V03 Pelaksanaan Penyusunan Pedoman Kegiatan Akademik",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Pelaksanaan-Penyusunan-Pedoman-Kegiatan-Akademik.pdf",
    },
    {
        des: "POS-AK-3-V03 Pengelolaan Program Penelitian dan Pengabdian Kepada Masyarakat",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Pengelolaan-Program-Penelitian-dan-Pengabdian-Kepada-Masyarakat.pdf",
    },
    {
        des: "POS-AK-4-V05 Validasi dan Verifikasi Ijazah",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Validasi-dan-Verifikasi-Ijazah.pdf",
    },
    {
        des: "POS-AK-5-V07 Penyelesaian Legalisasi Fotokopy Ijazah Bagi PTS yang Sudah Ditutup",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Penyelesaian-Legalisasi-Fotokopy-Ijazah-Bagi-PTS-yang-Sudah-Ditutup.pdf",
    },
    {
        des: "POS-AK-6-V03 Penerbitan Surat Keterangan Pengganti Ijazah bagi Perguruan Tinggi yang Tutup",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Penerbitan-Surat-Keterangan-Pengganti-Ijazah-bagi-Perguruan-Tinggi-yang-Tutup.pdf",
    },
    {
        des: "POS-AK-8-V03 Pelaporan Pendataan Kekayaan Intelektual dan Publikasi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Pelaporan-Pendataan-Kekayaan-Intelektual-dan-Publikasi.pdf",
    },
    {
        des: "POS-AK-9-V03 Pelaksanaan Pemantauan dan Evaluasi Pelaksanaan Pembelajaran",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Pelaksanaan-Pemantauan-dan-Evaluasi-Pelaksanaan-Pembelajaran.pdf",
    },
    {
        des: "POS-AK-10-V03 Pelaksanaan Pemantauan dan Evaluasi Pelaksanaan Penelitian dan Pengabdian",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Pelaksanaan-Pemantauan-dan-Evaluasi-Pelaksanaan-Penelitian-dan-Pengabdian.pdf",
    },
    {
        des: "POS-AK-11-V01 Verifikasi Perpanjangan Masa Studi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Verifikasi-Perpanjangan-Masa-Studi.pdf",
    },
    {
        des: "POS-AK-12-V01 Reset atau Pembatalan PIN",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Akademik-Reset-atau-Pembatalan-PIN.pdf",
    },
];

const DataLayananKemahasiswaan = [
    {
        des: "POS-KM-1-V07 Rekomendasi Mutasi Mahasiswa",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kemahasiswaan-Pemberian-Rekomendasi-Mutasi-Mahasiswa.pdf",
    },
    {
        des: "POS-KM-2-V11 Pemberian Beasiswa UKT SPP",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kemahasiswaan-Pemberian-Beasiswa-UKT-SPP.pdf",
    },
    {
        des: "POS-KM-6-V04 Pemberian Beasiswa KIP Kuliah",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kemahasiswaan-Pemberian-Beasiswa-KIP-Kuliah.pdf",
    },
    {
        des: "POS-KM-1-V07 Rekomendasi Mutasi Mahasiswa",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kemahasiswaan-Pemberian-Rekomendasi-Mutasi-Mahasiswa.pdf",
    },
    {
        des: "POS-KM-2-V11 Pemberian Beasiswa UKT SPP",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kemahasiswaan-Pemberian-Beasiswa-UKT-SPP.pdf",
    },
    {
        des: "POS-KM-6-V04 Pemberian Beasiswa KIP Kuliah",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kemahasiswaan-Pemberian-Beasiswa-KIP-Kuliah.pdf",
    },
];

const DataLPTK = [
    {
        des: "POS-DK-1-V08 Penerbitan Penilaian Angka Kredit (PAK) Jabatan Akademik Dosen Asisten Ahli dan Lektor",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Pendidikan-dan-Tenaga-Kependidikan-Penerbitan-Penilaian-Angka-Kredit-PAK-Jabatan-Akademik-Dosen-Asisten-Ahli-dan-Lektor.pdf",
    },
    {
        des: "POS-DK-2-V07 Pemrosesan Usulan Jabatan Fungsional Dosen Lektor Kepala dan Guru Besar",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Pendidikan-dan-Tenaga-Kependidikan-Pemrosesan-Usulan-Jabatan-Fungsional-Dosen-Lektor-Kepala-dan-Guru-Besar.pdf",
    },
    {
        des: "POS-DK-3-V09 Penerbitan Surat Rekomendasi Beasiswa Unggulan Dosen Indonesia dalam dan luar Negeri",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Pendidikan-dan-Tenaga-Kependidikan-Penerbitan-Surat-Rekomendasi-Beasiswa-Unggulan-Dosen-Indonesia-dalam-dan-luar-Negeri.pdf",
    },
    {
        des: "POS-DK-4-V06 Proses Sertifikasi Dosen",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Pendidikan-dan-Tenaga-Kependidikan-Proses-Sertifikasi-Dosen.pdf",
    },
    {
        des: "POS-DK-5-V04 Pemilihan Diktendik Berprestasi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Pendidikan-dan-Tenaga-Kependidikan-Pemilihan-Diktendik-Berprestasi.pdf",
    },
    {
        des: "POS-DK-6-V02 Beban Kinerja Dosen",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Pendidikan-dan-Tenaga-Kependidikan-Beban-Kinerja-Dosen.pdf",
    },
];

const DataLKSP = [
    {
        des: "POS-KL-1-V01 Standar Pelayanan Rekomendasi Alih Kelola Perguruan Tinggi Swasta",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasarana-Standar-Pelayanan-Rekomendasi-Alih-Kelola-Perguruan-Tinggi-Swasta.pdf",
    },
    {
        des: "POS-KL-2-V01 Standar Pelayanan Rekomendasi Pendirian Perguruan Tinggi Swasta Baru",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasarana-Standar-Pelayanan-Rekomendasi-Pendirian-Perguruan-Tinggi-Swasta-Baru.pdf",
    },
    {
        des: "POS-KL-3-V01 Standar Pelayanan Rekomendasi Pembukaan Program Studi Baru PTS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Pembukaan-Program-Studi-Baru-PTS.pdf",
    },
    {
        des: "POS-KL-4-V01 Standar Pelayanan Rekomendasi Perubahan Bentuk Perguruan Tinggi Swasta",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Perubahan-Bentuk-Perguruan-Tinggi-Swasta.pdf",
    },
    {
        des: "POS-KL-5-V01 Standar Pelayanan Rekomendasi Pembukaan Program Studi Luar Kampus Utama",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Pembukaan-Program-Studi-Luar-Kampus-Utama.pdf",
    },
    {
        des: "POS-KL-6-V01 Standar Pelayanan Rekomendasi Perubahan Lokasi Kampus Utama Perguruan Tinggi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Perubahan-Lokasi-Kampus-Utama-Perguruan-Tinggi.pdf",
    },
    {
        des: "POS-KL-7-V01 Standar Pelayanan Rekomendasi Penggabungan Penyatuan PTS",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Penggabungan-Penyatuan-PTS.pdf",
    },
    {
        des: "POS-KL-8-V01 Standar Pelayanan Rekomendasi Pencabutan Izin Program Studi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Pencabutan-Izin-Program-Studi.pdf",
    },
    {
        des: "POS-KL-9-V01 Standar Pelayanan Rekomendasi Perubahan Nama Perguruan Tinggi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Perubahan-Nama-Perguruan-Tinggi.pdf",
    },
    {
        des: "POS-KL-10-V01 Standar Pelayanan Rekomendasi Perubahan Nama Program Studi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Perubahan-Nama-Program-Studi.pdf",
    },
    {
        des: "POS-KL-11-V01 Standar Pelayanan Rekomendasi Perubahan Nama Badan Penyelenggara Perguruan Tinggi Swasta",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Standar-Pelayanan-Rekomendasi-Perubahan-Nama-Badan-Penyelenggara-Perguruan-Tinggi-Swasta.pdf",
    },
    {
        des: "POS-SP-1-V03 Pengumpulan, Pengolahan dan Pemetaan Data Sarana dan Prasarana Perguruan Tinggi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Pengumpulan-Pengolahan-dan-Pemetaan-Data-Sarana-dan-Prasarana-Perguruan-Tinggi.pdf",
    },
    {
        des: "POS-SP-2-V03 Pemberian Rekomendasi Bantuan Sarana Prasarana PT",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Pemberian-Rekomendasi-Bantuan-Sarana-Prasarana-PT.pdf",
    },
    {
        des: "POS-SP-3-V03 Penyiapan Bahan Fasilitas dan Pemberian Bimbingan Teknis",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Penyiapan-Bahan-Fasilitas-dan-Pemberian-Bimbingan-Teknis.pdf",
    },
    {
        des: "POS-SP-4-V03 Pemantauan dan Evaluasi Sarana dan Prasarana Perguruan Tinggi (Monev)",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Kelembagaan-dan-Sarana-Prasana-Pemantauan-dan-Evaluasi-Sarana-dan-Prasarana-Perguruan-Tinggi-Monev.pdf",
    },
];

const DataLSIK = [
    {
        des: "POS-SI-1-V03 Pengembangan Sistem Informasi Melalui Vendor",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Sistem-Informasi-dan-Kerjasama-Pengembangan-Sistem-Informasi-Melalui-Vendor.pdf",
    },
    {
        des: "POS-SI-2-V03 Rancangan Pengembangan Sistem Informasi yang Dikelola dan Dievaluasi Sendiri",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Sistem-Informasi-dan-Kerjasama-Rancangan-Pengembangan-Sistem-Informasi-yang-Dikelola-dan-Dievaluasi-Sendiri.pdf",
    },
    {
        des: "POS-SI-3-V07 Pemeliharaan Jariangan dan Sistem Informasi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Sistem-Informasi-dan-Kerjasama-Pemeliharaan-Jariangan-dan-Sistem-Informasi.pdf",
    },
    {
        des: "POS-SI-4-V07 Pembuatan BAP Usulan Tipe 1",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Sistem-Informasi-dan-Kerjasama-Pembuatan-BAP-Usulan-Tipe-1.pdf",
    },
    {
        des: "POS-SI-5-V03 Evaluasi Pelaporan Semester Perguruan Tinggi Melalui Aplikasi Feeder",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Sistem-Informasi-dan-Kerjasama-Evaluasi-Pelaporan-Semester-Perguruan-Tinggi-Melalui-Aplikasi-Feeder.pdf",
    },
    {
        des: "POS-SI-6-V03 Pengelolaan Pangkalan Data Pendidikan Tinggi dan SISTER",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Sistem-Informasi-dan-Kerjasama-Pengelolaan-Pangkalan-Data-Pendidikan-Tinggi-dan-SISTER.pdf",
    },
    {
        des: "POS-SI-7-V03 Mengembangkan Desain Serta Mengelola Laman",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Sistem-Informasi-dan-Kerjasama-Mengembangkan-Desain-Serta-Mengelola-Laman.pdf",
    },
    {
        des: "POS-SI-8-V03 Pengumpulan, Pengolahan dan Penyusunan Bahan Fasilitasi Pengembangan Kerjasama Perguruan Tinggi",
        url: "https://www.lldikti4.id/wp-content/uploads/2022/04/Layanan-Sistem-Informasi-dan-Kerjasama-Pengumpulan-Pengolahan-dan-Penyusunan-Bahan-Fasilitasi-Pengembangan-Kerjasama-Perguruan-Tinggi.pdf",
    },
];
