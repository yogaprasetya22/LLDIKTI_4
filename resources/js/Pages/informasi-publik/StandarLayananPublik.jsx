import Heading from "@/Components/page/Heading";
import { Paragraph, SubText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";
import { useState } from "react";
import lldiktipdf from "@/img/2a.-SK-Standar-Pelayanan-Publik-Lampiran-Final-2.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const StandarLayananPublik = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">
                        STANDAR PELAYANAN PUBLIK LLDIKTI WILAYAH IV
                    </span>
                </h1>
                <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                    <span className="text-[#2654a4]">
                        LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                    </span>
                </h1>
            </Heading>
            <article>
                <div className="w-full container mt-20">
                    <div className="flex justify-center items-center ">
                        <div className="max-w-[50rem] flex flex-col gap-5">
                            <img
                                className="rounded-md shadow-md drop-shadow-md bg-white hover:-translate-y-1 duration-[150ms] ease-in-out "
                                src="https://i0.wp.com/www.lldikti4.id/wp-content/uploads/2022/04/4X4A4336-scaled.jpg?resize=1024%2C683&ssl=11"
                                alt="Dr. M. Samsuri, S.Pd., M.T."
                            />
                            <img
                                className="rounded-md shadow-md drop-shadow-md bg-white hover:-translate-y-1 duration-[150ms] ease-in-out "
                                src="https://i0.wp.com/www.lldikti4.id/wp-content/uploads/2022/04/Maklumat-Pakta-Integritas-scaled.jpg?fit=2560%2C1811&ssl=1"
                                alt="Maklumat Pakta Integritas"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-10">
                        <Paragraph>
                            Puji syukur kita panjatkan kehadirat Tuhan Yang Maha
                            Esa, karena atas rahmat dan karunia-Nya Standar
                            Pelayanan Publik LLDIKTI Wilayah IV ini dapat
                            tersusun.
                        </Paragraph>
                        <Paragraph>
                            Sebagaimana diamanatkan Undang-Undang Nomor 25 Tahun
                            2009 tentang Pelayanan Publik dan sebagai tindak
                            lanjut Peraturan Menteri Negara Pendayagunaan
                            Aparatur Negara dan Reformasi Birokrasi Nomor 15
                            tahun 2014 tentang Pedoman Standar Pelayanan, bahwa
                            setiap penyelenggara pelayanan publik wajib
                            menyusun, menetapkan, dan menerapkan Standar
                            Pelayanan serta menetapkan Maklumat Pelayanan dengan
                            memperhatikan kemampuan penyelenggara, kebutuhan
                            masyarakat, dan kondisi lingkungan.
                        </Paragraph>
                        <Paragraph>
                            Standar Pelayanan Publik ini disusun untuk
                            memberikan informasi kepada pelanggan/stakeholder
                            yang terkait dengan pelayanan LLDIKTI Wilayah IV,
                            mulai dari persyaratan, prosedur, waktu, biaya,
                            hasil sampai dengan penanganan pengaduan. Selain itu
                            juga untuk meningkatkan kualitas dan kinerja
                            pelayanan sesuai dengan kebutuhan masyarakat dan
                            selaras dengan kemampuan penyelenggara sehingga
                            mendapatkan kepercayaan masyarakat. Pada akhirnya
                            kami mengucapkan terima kasih kepada semua pihak
                            yang secara aktif membantu kelancaran Penyusunan
                            Standar Pelayanan Publik LLDIKTI Wilayah IV ini.
                            Semoga Standar Pelayanan Publik yang telah disusun
                            dapat diterapkan dengan baik dan konsisten.
                        </Paragraph>
                        <Paragraph>
                            Download Dokumen Standar Pelayanan Publik LLDIKTI
                            Wilayah IV:
                        </Paragraph>
                        <br />
                        <br />
                    </div>
                    <div className="pdf w-full flex justify-center items-start">
                        <div className="flex flex-col relative">
                            <div className="max-h-[53rem] rounded-md shadow-md drop-shadow-md border-[1px] mb-[7rem]">
                                <Document
                                    file={lldiktipdf}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} />
                                </Document>
                            </div>

                            <div className="flex justify-between items-center px-[7rem]  py-5 absolute bottom-0 w-full">
                                <button
                                    className=" btn btn-outline rounded-md text-[#24529e]"
                                    onClick={goToPrevPage}
                                >
                                    Prev
                                </button>
                                <p className="text-[#24529e] font-semibold">
                                    Page {pageNumber} of {numPages}
                                </p>
                                <button
                                    className=" btn btn-outline rounded-md text-[#24529e]"
                                    onClick={goToNextPage}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default StandarLayananPublik;
