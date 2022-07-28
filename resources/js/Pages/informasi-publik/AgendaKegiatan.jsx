import Chard from '@/Components/page/Chard';
import Heading from '@/Components/page/Heading';
import Layout from '@/Layouts/Layout'
import React from 'react'

const AgendaKegiatan = (props) => {
  return (
      <Layout title={props.title}>
          <Heading>
              <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                  <span className=" text-[#eaa43b]">AGENDA KEGIATAN</span>
              </h1>
              <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                  <span className="text-[#2654a4]">
                      LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                  </span>
              </h1>
          </Heading>
          <article className="my-10">
              <div className="flex items-center w-full flex-col">
                  <div className="w-[100%] md:px-0  py-7">
                      <div className="flex justify-center flex-wrap gap-7 md:p-[0px_10px] ">
                          {lldikti.map((data, i) => (
                              <div
                                  key={i}
                                  className="card md:w-[600px] lg:w-[350px] w-full px-4 md:px-0 rounded-md shadow-md drop-shadow-md bg-white hover:-translate-y-1 duration-[150ms] ease-in-out text-black font-bold "
                              >
                                  <Chard i={i} data={data} />
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </article>
      </Layout>
  );
}

export default AgendaKegiatan



const lldikti = [
    {
        date: "30 Juni 2022",
        id: 1,
        img: "http://127.0.0.1:3000/resources/js/img/informasi-lldikti.png",
        title: "Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi",
    },
    {
        date: "30 Juni 2022",
        id: 2,
        img: "http://127.0.0.1:3000/resources/js/img/informasi-lldikti.png",
        title: "Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek",
    },
    {
        date: "30 Juni 2022",
        id: 3,
        img: "http://127.0.0.1:3000/resources/js/img/informasi-lldikti.png",
        title: "Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder",
    },
    {
        date: "30 Juni 2022",
        id: 4,
        img: "http://127.0.0.1:3000/resources/js/img/informasi-lldikti.png",
        title: "Pendampingan JAD Untuk Penilai JAD Internal dan Operator JAD Perguruan Tinggi",
    },
    {
        date: "30 Juni 2022",
        id: 5,
        img: "http://127.0.0.1:3000/resources/js/img/informasi-lldikti.png",
        title: "Penyerahan SK Jabatan Akademik Dosen Kemdikbudristek",
    },
    {
        date: "30 Juni 2022",
        id: 6,
        img: "http://127.0.0.1:3000/resources/js/img/informasi-lldikti.png",
        title: "Sosialisasi Pelaporan Akademik Melalui Aplikasi Neo Feeder",
    },
];