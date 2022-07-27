import Heading from "@/Components/page/Heading";
import { TitleText } from "@/Components/TextParagraph";
import Layout from "@/Layouts/Layout";
import React from "react";

const BukuPP = (props) => {
    return (
        <Layout title={props.title}>
            <Heading>
                <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                    <span className=" text-[#eaa43b]">
                        BUKU PANDUAN / PEDOMAN
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
                    <TitleText>Bagian Umum</TitleText>
                    <div className="flex flex-col pl-6">
                        {BPP.map((data, i) => (
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
            </article>
        </Layout>
    );
};

export default BukuPP;

const BPP = [
    {
        des: "Pedoman Operasional Tentang Penilaian Angka Kredit Kenaikan Jabatan Akademik/Pangkat Dosen",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2019/12/PO-Penilaian-Angka-Kredit-Dosen-16-OKTOBER-2019_compressed.pdf",
    },
    {
        des: "Persyaratan Usulan Dosen (NIDN, NIDK, NUP, Perubahan Nomor Registrasi, Perubahan Data Dosen, Pindah Homebase External-Internal)",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/11/Persyaratan-Usulan-Dosen.pdf",
    },
    {
        des: "Buku Panduan Pengusulan Program Penelitian Dan Pengabdian Kepada Masyarakat Melalui Simlitabmas Tahun 2018",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/08/Pengusulan-Program-Penelitian-Dan-Pengabdian-Kepada-Masyarakat-Melalui-Simlitabmas-Tahun-2018.pdf",
    },
    {
        des: "Panduan Penyusunan LKPT APT v1_1",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/08/Panduan-Penyusunan-LKPT-APT-v1_1-kopertis-3.pdf",
    },
    {
        des: "Panduan Penyusunan LED APT V1_1",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/08/Panduan-Penyusunan-LED-APT-v1_1-kopertis-3.pdf",
    },
    {
        des: "Panduan Edisi XII Skema Penelitian 2018",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/08/Panduan-Edisi-XII-Skema-Penelitian-2018.pdf",
    },
    {
        des: "Persyaratan Perubahan Data Mahasiswa 2018",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/07/Persyaratan-Perubahan-Data-Mahasiswa-2018.pdf",
    },
    {
        des: "Panduan Akses E-Resources 2018",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/Panduan-Akses-E-Resources-2018.pdf",
    },
    {
        des: "Panduan Beasiswa Peningkatan Prestasi Akademik (PPA) Tahun 2018",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/Panduan-Beasiswa-PPA-tahun-2018.pdf",
    },
    {
        des: "Tata Cara dihapus PPH / PPN Dana Hibah Penelitian dan Pengabdian bagi Masyarakat",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/Tata_Cara_PAJAK-PENELITIAN.pdf",
    },
    {
        des: "Pedoman Perpajakan Hibah Penelitian Tahun 2018",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/05/Pedoman-Perpajakan-Hibah-Penelitian.pdf",
    },
    {
        des: "SINTA Panduan Untuk Verifikator",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/04/PANDUAN-VERIFIKATOR-LENGKAP.pdf",
    },
    {
        des: "SINTA Panduan Google Scholar",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/04/PANDUAN-GS-LENGKAP.pdf",
    },
    {
        des: "SINTA Panduan untuk Penulis",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/04/SINTA-PANDUAN-PENULIS-LENGKAP.pdf",
    },
    {
        des: "Intisari Statistik Pendidikan Tinggi Tahun 2017",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/02/Intisari-Statistik-Pendidikan-Tinggi-2017.pdf",
    },
    {
        des: "Buku Statistik Pendidikan Tinggi Tahun 2017",
        url: "http://www.kopertis3.or.id/v6/wp-content/uploads/2018/02/Buku-Statistik-Pendidikan-Tinggi-2017.pdf",
    },
    {
        des: "Panduan Tata Cara Penyelenggaraan Rekognisi Pembelajaran Lampau",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Lampiran-Pedoman-RPL-SALINAN1.pdf",
    },
    {
        des: "Slide Presentasi Rekognisi Pembelajaran Lampau 2017",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/1D1_Dit-Pembelajaran_21032017_SLIDE-PRESENTASI-RPL.pdf",
    },
    {
        des: "Pedoman Bantuan Biaya Pendidikan Bidikmisi Tahun 2017",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/PEDOMAN_BIDIKMISI_2017.pdf",
    },
    {
        des: "Bahan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia pada Rapat Kerja Nasional Tahun 2017",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Bahan-Paparan-Bapak-Menteri-30-jan-2017-rev-9.compressed.pdf",
    },
    {
        des: "Persyaratan dan Prosedur Pendirian dan Perubahan PTS serta Pembukaan Program Studi Perguruan Pada Perguruan Tinggi Tahun 2017",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/Persyaratan_dan_Prosedur_Pendirian_PTS_dan_Prodi_PT2017.pdf",
    },
    {
        des: "Menutupi Pedoman Sistem Penjaminan Mutu Pendidikan Tinggi 2016",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/cover-ristekdikti-rev-28-03-2015.pdf",
    },
    {
        des: "Pedoman Sistem Penjaminan Mutu Pendidikan Tinggi 2016",
        url: "http://lldikti3.ristekdikti.go.id/v2/wp-content/uploads/PEDOMAN-SISTEM-PENJAMINAN-MUTU-DIKTI-rev-28-03-2016.pdf",
    },
    {
        des: "Buku Kurikulum Pendidikan Tinggi Tahun 2014 Direktorat Pembelajaraan dan Kemahasiswaan Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2014/11/Final-Buku-K-DIKTI.pdf",
    },
    {
        des: "Buku Panduan Pengembangan Kurikulum Berbasis Kompetensi Pendidikan Tinggi",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2011/04/BUKU-Panduan-KBK.pdf",
    },
    {
        des: "Pedoman Program Bantuan Dana Untuk Kegiatan Kemahasiswaan (Ko Dan Ekstra Kurikuler) Tahun 2014",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2014/03/Pedoman-Dana-Bantuan-Keg2014.pdf",
    },
    {
        des: "Buku Pedoman Olimpiade Nasional Matematika dan Ilmu Pengetahuan Alam Perguruan Tinggi (ON MIPA-PT) Tahun 2014",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2014/03/PEDOMAN-OLIMPIADE-MIPA-11022014.pdf",
    },
    {
        des: "Pedoman Program Mahasiswa Wirausaha (PMW) Tahun 2013",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2014/03/B1.-Pedoman-PMW-2013.pdf",
    },
    {
        des: "Pedoman Bidikmisi Tahun 2012",
        url: "http://lldikti3.ristekdikti.go.id/html/wp-content/uploads/2014/03/Pedoman-Bidikmisi-2012-17-JAN.pdf",
    },
];
