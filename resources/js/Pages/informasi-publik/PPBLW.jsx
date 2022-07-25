import Heading from '@/Components/page/Heading';
import Layout from '@/Layouts/Layout'
import React from 'react'

const PPBLW = (props) => {
  return (
      <Layout title={props.title}>
          <Heading>
              <h1 className=" md:text-[40px] text-[30px] font-bold mb-3">
                  <span className=" text-[#eaa43b]">
                      PETA PROSES BISNIS LLDIKTI Wilayah IV
                  </span>
              </h1>
              <h1 className=" md:text-[31px] text-[21px] mt-0  mb-10">
                  <span className="text-[#2654a4]">
                      LEMBAGA LAYANAN PENDIDIKAN TINGGI WILAYAH 4
                  </span>
              </h1>
          </Heading>
          <article className="w-full">
              <div className="flex justify-center items-center py-20">
                  <a
                      href="https://www.lldikti4.id/wp-content/uploads/2022/06/Probis-LLDIKTI-Wilayah-IV-All.pdf"
                      className="btn bg-[#2654a4] text-white"
                  >
                      Download
                  </a>
              </div>
          </article>
      </Layout>
  );
}

export default PPBLW