import Heading from "@/Components/page/Heading";
import Layout from "@/Layouts/Layout";
import React from "react";
import galeri1 from "@/img/galeryi-kami/galeri-1.png";
import galeri2 from "@/img/galeryi-kami/galeri-2.png";
import galeri3 from "@/img/galeryi-kami/galeri-3.png";
import galeri4 from "@/img/galeryi-kami/galeri-4.png";
import galeri5 from "@/img/galeryi-kami/galeri-5.png";
import { Paragraph, SubText } from "@/Components/TextParagraph";

const ProfilLLDIKTI4 = (props) => {
    const [button, setButton] = React.useState(false);
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
                <div className="w-full container py-4">
                    <div className=" float-left my-6 mx-2 w-[15rem] md:inline-block hidden">
                        Kepala Lembaga Layanan Pendidikan Tinggi (LLDIKTI)
                        Wilayah IV, Jawa Barat dan Banten​
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-start">
                            <p className=" text-blue-600 text-[23px] font-extrabold">
                                Sambutan
                            </p>
                            <span className=" text-black dark:text-white text-[35px] font-extrabold">
                                LLDIKTI Wilayah IV
                            </span>
                        </div>
                        <Paragraph>
                            Kami ucapkan selamat datang di website LLDIKTI
                            Wilayah IV Jawa Barat dan Banten, dalam rangka
                            meningkatkan kualitas pelayanan publik dan
                            pemanfaatan teknologi internet di LLDIKTI Wilayah IV
                            agar menjadi efektif, efisien, transparan dan
                            akuntabel kepada masyarakat, Alhamdulillah website
                            LLDIKTI Wilayah IV kini dapat menghadirkan dan
                            menyajikan sumber informasi online sebagai sarana
                            unutk menyampaikan informasi terkini yang dapat
                            diakses langsung oleh masyarakat luas.{" "}
                        </Paragraph>
                        <Paragraph>
                            Dalam mengakomodir aspirasi masyarakat untuk
                            memperoleh informasi yang dapat diandalkan,
                            terpercaya, mudah didapat, dan tersaji secara
                            interaktif, keberadaan internet ini merupakan sarana
                            untuk lebih mempermudah dan mempercepat komunikasi
                            kami dengan 489 Perguruan Tinggi Swasta (PTS ) yang
                            tersebar di wilayah Jawa Barat dan Banten khususnya
                            dan juga dengan masyarakat pada umumnya.
                        </Paragraph>
                        <Paragraph>
                            Secara struktural LLDIKTI Wilayah IV Jawa Barat dan
                            Banten merupakan unit pelaksana teknis Direktorat
                            Jenderal Pendidikan Tinggi yang melaksanakan tugas
                            Pembinaan, Pengendalian, dan Pengawasan (BINDALWAS)
                            kepada PTS berdasarkan Peraturan Menteri Pendidikan
                            dan Kebudayaan RI Nomor 1 Tahun 2013 tentang
                            Organisasi dan Tata Kerja Koordinasi Perguruan
                            Tinggi Swasta, dan saat ini berubah bentuk menjadi
                            Lembaga Layanan Pendidikan Tinggi (LLDIKTI)
                            berdasarkan Pemenristekdikti no.15 tahun 2018.
                            LLDIKTI berfungsi membantu meningkatkan mutu
                            penyelenggaraan Pendidikan Tinggi.{" "}
                        </Paragraph>
                        <Paragraph>
                            Indikator mutu penyelenggaraan pendidikan merupakan
                            satuan kerja pemerintah yang berfungsi membantu
                            meningkatkan mutu penyelenggaraan Pendidikan Tinggi.
                            Indikator mutu penyelenggaraan pendidikan tinggi
                            yaitu terlampauinya Standard Nasional Pendidikan
                            Tinggi yang dilaksanakan oleh setiap perguruan
                            tinggi swasta
                        </Paragraph>
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                        <Paragraph>
                            Salah satu kewajiban yang harus dipenuhi oleh
                            perguruan tinggi adalah menyampaikan data dan
                            informasi penyelenggaraan perguruan tinggi setiap
                            akhir semester yang dapat di input langsung melalui
                            aplikasi Feeder Online Pangkalan Data Pendidikan
                            Tinggi (PDDIKTI) yang menjadi dasar dan sumber
                            informasi perguruan tinggi secara nasional.
                        </Paragraph>
                        <Paragraph>
                            Website ini disediakan sebagai sarana edukasi,
                            publikasi dan informasi kegiatan LLDIKTI Wilayah IV
                            yang terkait dengan BINDALWAS, oleh karena itu, kami
                            berharap agar semua stakeholders dapat memanfaatkan
                            fasilitas yang kami sediakan untuk kemajuan dunia
                            pendidikan tinggi di wilayah Jawa Barat dan Banten.
                        </Paragraph>
                        <Paragraph>
                            Kami menyadari bahwa website LLDIKTI Wilayah IV
                            masih banyak kekurangan, oleh karena itu masukan dan
                            saran dapat disampaikan untuk peningkatan kualitas
                            website maupun contents yang perlu ditampilan.
                            Akhirnya kami mengucapkan terima kasih kepada semua
                            pihak yang terlibat atas partisipasi yang telah di
                            berikan.
                        </Paragraph>
                    </div>
                </div>
                <div className="flex items-center w-full flex-col">
                    <div className="flex w-full justify-center items-center md:p-[20px_70px] p-[25px] mt-[2.5rem]">
                        <span
                            className="text-black dark:text-white text-[26px]"
                            style={{ fontWeight: "700", lineHeight: "141.02%" }}
                        >
                            <div className="flex items-center leading-[150%]">
                                {" "}
                                Sejarah Kami
                                <span className="pl-2 pt-2">
                                    <svg
                                        width="7"
                                        height="7"
                                        viewBox="0 0 7 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                            fill="#24529E"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className="md:w-[90%] w-[85%] py-7">
                        <div className="flex lg:justify-around lg:flex-row flex-col md:p-[0px_10px]">
                            <div className="flex md:flex-wrap md:flex-row justify-center item-center md:gap-6 gap-4 flex-col ">
                                {Galeri.map((data, i) => (
                                    <img
                                        key={i}
                                        className="hover:-translate-y-1 duration-[150ms] ease-in-out rounded-md shadow-md drop-shadow-md md:h-[220px] md:shadow-[-1px_12px_30px_-13.2px_rgba(0,0,0,0.75)]"
                                        style={{
                                            backgroundPosition: "50%",
                                            backgroundSize: "auto",
                                            objectFit: "cover",
                                            background: "#eaea",
                                        }}
                                        src={data.img}
                                        alt=""
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full container">
                    <div className="flex flex-col gap-4 mt-6">
                        <Paragraph>
                            Sejarah perkembangan Kopertis dimulai dengan
                            terbitnya Surat Keputusan Menteri Pendidikan dan
                            Kebudayaan Republik Indonesia Nomor 1/PK/1968
                            tanggal 17 Februari 1968. Berdasarkan keputusan
                            tersebut dibentuk
                            <SubText>
                                Koordinator Perguruan Tinggi (KOPERTI)
                            </SubText>
                            yang mempunyai fungsi sebagai aparatur konsultatif
                            dengan Kepala Kantor Perwakilan Pendidikan dan
                            Kebudayaan setempat. Sehubungan dengan makin
                            bertambahnya pendirian perguruan tinggi terutama
                            Perguruan Tinggi Swasta, maka Menteri Pendidikan dan
                            Kebudayaan mengeluarkan Surat Keputusan Nomor
                            079/O/1975 tanggal 17 April 1975 yang membatasi
                            ruang lingkup kerja Koordinator Perguruan Tinggi,
                            khususnya untuk memberikan pelayanan kepada
                            Perguruan Tinggi Swasta maka
                            <SubText>
                                Koordinator Perguruan Tinggi (KOPERTI)
                            </SubText>
                            di rubah menjadi
                            <SubText>
                                Koordinator Perguruan Tinggi Swasta (KOPERTIS)
                            </SubText>
                            .
                        </Paragraph>
                        <Paragraph>
                            Dalam rangka penyesuaian dengan perkembangan di
                            bidang pengelolaan Perguruan Tinggi Swasta, Menteri
                            Pendidikan dan Kebudayaan menerbitkan Surat
                            Keputusan
                            <SubText>
                                No. 062/O/1982 dan No. 0135/O/1990
                            </SubText>
                            tanggal 15 Maret 1990, tentang Organisasi dan Tata
                            Kerja Koordinator Perguruan Tinggi Swasta yang
                            didalamnya selain mengatur susunan organisasi dan
                            tata kerja Kopertis juga merubah Wilayah kerja
                            menjadi 12 Wilayah terdiri dari
                            <SubText>KOPERTIS Wilayah I</SubText>
                            Medan,<SubText>KOPERTIS Wilayah II</SubText>
                            Palembang,<SubText>KOPERTIS Wilayah III</SubText>
                            Jakarta,<SubText>KOPERTIS Wilayah IV</SubText>
                            Bandung,<SubText>KOPERTIS Wilayah V</SubText>
                            Yogyakarta, KOPERTIS Wilayah VI Semarang, KOPERTIS
                            Wilayah VII Surabaya, KOPERTIS Wilayah VIII Bali,
                            <SubText>KOPERTIS Wilayah IX</SubText>
                            Ujung Pandang, KOPERTIS Wilayah X Padang, KOPERTIS
                            Wilayah XI Banjarmasin, dan KOPERTIS Wilayah XII
                            Ambon.
                        </Paragraph>
                        <Paragraph>
                            Dengan semakin berkembangnya Perguruan Tinggi
                            Swasta, Kementerian Pendidikan dan Kebudayaan
                            mengeluarkan
                            <SubText>
                                Peraturan Menteri Pendidikan dan Kebudayaan
                                Republik Indonesia No. 1 tahun 2013 jo No. 42
                                tahun 2013.
                            </SubText>
                            Organisasi dan Tata Kerja Kopertis kembali merubah
                            wilayah kerja menjadi 14 Wilayah dengan bertambahnya
                            Kopertis Wilayah XIII Aceh dan
                            <SubText>Kopertis Wilayah XIV Papua</SubText>.
                            Dengan adanya peraturan ini juga beberapa bagian ada
                            yang berubah nama sekaligus merubah uraian tugas
                            bagian tersebut karena sudah tidak sesuai dengan
                            perkembangan pendidikan tinggi sekarang.
                        </Paragraph>
                        <Paragraph>
                            Sesuai peraturan Meteri Riset, Teknologi, dan
                            Pendidikan Tinggi Republik Indonesia nomor 15 tahun
                            2018 tentang Organisasi dan Tata Kerja Lembaga
                            Layanan Pendidikan Tinggi, maka tahun 2018 Kopertis
                            berubah nama menjadi LLDIKTI yang dipimpin oleh
                            seorang Kepala. LLDIKTI berada di bawah dan
                            bertanggung jawab kepada Menteri Riset, Teknologi,
                            dan Pendidikan Tinggi.
                        </Paragraph>
                    </div>
                </div>
                <div className="flex items-center w-full flex-col mb-10">
                    <div className="flex w-full justify-center items-center md:p-[20px_70px] p-[25px] mt-[2.5rem]">
                        <span
                            className="text-black dark:text-white text-[26px]"
                            style={{ fontWeight: "700", lineHeight: "141.02%" }}
                        >
                            <div className="flex items-center leading-[150%]">
                                {" "}
                                Fungsi Dan Tugas
                                <span className="pl-2 pt-2">
                                    <svg
                                        width="7"
                                        height="7"
                                        viewBox="0 0 7 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                            fill="#24529E"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className="w-full container">
                        <div className="flex flex-col gap-4 mt-6">
                            <Paragraph>
                                Sebagaimana Peraturan Menteri Pendidikan dan
                                Kebudayaan nomor 1 tahun 2013 jo nomor 42 tahun
                                2013 tentang Organisasi dan Tata Kerja (OTK)
                                Kopertis. Kopertis mempunyai tugas merumuskan
                                kebijakan dan melaksanakan pengawasan,
                                pengendalian, dan pembinaan perguruan tinggi
                                swasta di wilayah kerjanya berdasarkan kebijakan
                                Direktur Jenderal Pendidikan Tinggi. Sesuai
                                dengan OTK tersebut dalam melaksanakan tugas
                                Kopertis menyelenggarakan fungsi :
                            </Paragraph>
                            <div className="flex flex-col mt-5">
                                <div className="flex justify-center md:justify-start">
                                    <button
                                        className={`${
                                            !button
                                                ? "border-[#000] border-[2px_2px_5px_2px] border-b-[#fff] dark:border-b-[#242937] z-[1] rounded-br-md rounded-bl-md text-[#2657a7]"
                                                : "text-[#000] dark:text-white"
                                        } -mb-1 lg:w-[12%] md:w-[15%] w-[20%] md:p-4 p-2 text-center md:text-[26px] text-[15px]`}
                                        onClick={() => setButton(false)}
                                    >
                                        Fungsi
                                    </button>
                                    <button
                                        className={`${
                                            button
                                                ? "border-[#000] border-[2px_2px_5px_2px] border-b-[#fff] dark:border-b-[#242937] z-[1] rounded-br-md rounded-bl-md text-[#2657a7]"
                                                : "text-[#000] dark:text-white"
                                        } -mb-1 lg:w-[12%] md:w-[15%] w-[20%] md:p-4 p-2 text-center md:text-[26px] text-[15px]`}
                                        onClick={() => setButton(true)}
                                    >
                                        Tugas
                                    </button>
                                </div>
                                <div className="border-[2px]  border-[#000] py-10 ">
                                    <div className="flex justify-evenly flex-row flex-wrap">
                                        {button ? (
                                            <>
                                                {" "}
                                                {tugas.map((data, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex flex-col lg:text-justify gap-3 lg:w-[35%] w-[50%] p-4"
                                                    >
                                                        <p className=" font-extrabold text-blue-600 md:text-[19px]">
                                                            {data.no}
                                                        </p>
                                                        <span className="text-[16px] font-bold">
                                                            {data.des}
                                                        </span>
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <>
                                                {fungsi.map((data, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex flex-col lg:text-justify gap-3 lg:w-[35%] w-[50%] p-4 "
                                                    >
                                                        <p className=" font-extrabold text-blue-600 text-[19px]">
                                                            {data.no}
                                                        </p>
                                                        <span className="text-[16px] font-bold">
                                                            {data.des}
                                                        </span>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default ProfilLLDIKTI4;

const Galeri = [
    {
        id: 1,
        img: "https://i0.wp.com/www.lldikti4.id/wp-content/uploads/2021/09/WhatsApp-Image-2019-12-02-at-7.34.30-PM.jpeg?ssl=1",
    },
    {
        id: 2,
        img: "https://i0.wp.com/www.lldikti4.id/wp-content/uploads/2021/09/WhatsApp-Image-2019-11-29-at-10.38.37-AM1.jpeg?ssl=1",
    },
    {
        id: 3,
        img: "https://i0.wp.com/www.lldikti4.id/wp-content/uploads/2021/09/4X4A5967-scaled.jpg?ssl=1",
    },
];

const fungsi = [
    {
        id: 1,
        no: "01.",
        des: "merumuskan kebijakan pengawasan, pengendalian, dan pembinaan perguruan tinggi swasta di wilayah kerjanya berdasarkan kebijakan Direktur Jenderal;",
    },
    {
        id: 2,
        no: "02.",
        des: "melaksanakan koordinasi dalam rangka pengawasan, pengendalian, dan pembinaan perguruan tinggi swasta di wilayah kerjanya;",
    },
    {
        id: 3,
        no: "03.",
        des: "melaksanakan koordinasi pelaksanaan pemantauan dan evaluasi penyelenggaraan. pendidikan, penelitian, dan pengabdian kepada masyarakat pada perguruan tinggi swasta di wilayah kerjanya dan wilayah pengembangannya;",
    },
    {
        id: 4,
        no: "04.",
        des: "melaksanakan koordinasi dalam rangka pembinaan ketenagaan perguruan tinggi swasta.",
    },
    {
        id: 5,
        no: "05.",
        des: "melaksanakan kerja sama dalam rangka pengawasan, pengendalian, dan pembinaan perguruan tinggi swasta di wilayah kerjanya;",
    },
    {
        id: 6,
        no: "06.",
        des: "melaksanakan dan koordinasi pengernbangan perguruan tinggi swasta di wilayah kerjanya.",
    },
];
const tugas = [
    {
        id: 1,
        no: "A",
        des: "pelaksanaan pemetaan mutu pendidikan tinggi di wilayah kerjanya;",
    },
    {
        id: 2,
        no: "B",
        des: "pelaksanaan fasilitasi peningkatan mutu penyelenggaraan pendidikan tinggi di wilayah kerjanya;",
    },
    {
        id: 3,
        no: "C",
        des: "pelaksanaan fasilitasi peningkatan mutu pengelolaan perguruan tinggi di wilayah kerjanya;",
    },
    {
        id: 4,
        no: "D",
        des: "pelaksanaan fasilitasi kesiapan perguruan tinggi dalam penjaminan mutu eksternal di wilayah kerjanya;",
    },
    {
        id: 5,
        no: "E",
        des: "pelaksanaan evaluasi dan pelaporan pelaksanaan fasilitasi peningkatan mutu perguruan tinggi di wilayah kerjanya;",
    },
    {
        id: 6,
        no: "F",
        des: "pengelolaan data dan informasi di bidang mutu pendidikan tinggi di wilayah kerjanya; dan",
    },
    {
        id: 7,
        no: "G",
        des: "pelaksanaan administrasi LLDIKTI.",
    },
];
