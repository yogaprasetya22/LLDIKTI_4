import React from "react";
import LLDIKTI from "@/img/lldikti.png";
import { Link } from "@inertiajs/inertia-react";

const Footer = () => {
    return (
        <>
            <div className=" py-10 bg-[#2654a4] dark:bg-[#1c2c47] text-white flex flex-col flex-wrap">
                <div className="pb-6  container my-5">
                    <img src={LLDIKTI} alt="" className="w-[13rem]" />
                </div>
                <footer className="footer container flex lg:flex-row flex-col">
                    <div className="w-full">
                        <span className=" text-center text-white text-[16px] pb-2 font-extrabold">
                            Tentang
                        </span>
                        <Link className="w-[13rem] text-gray-300 link link-hover">
                            LLDIKTI Wilayah 4 memiliki tugas melaksanakan
                            fasilitasi peningkatan mutu penyelenggaraan
                            pendidikan tinggi di provinsi Jawa Barat.
                        </Link>
                    </div>
                    <div className="w-[12rem]">
                        <span className="text-center text-white text-[16px] pb-2 font-extrabold">
                            Informasi Kontak
                        </span>
                        <span className="text-white flex flex-col gap-1">
                            Telp
                            <Link
                                href=""
                                className=" text-gray-300 link link-hover"
                            >
                                +022 7275630
                            </Link>
                        </span>
                        <span className="text-white flex flex-col gap-1">
                            Email
                            <Link
                                href=""
                                className=" text-gray-300  link link-hover"
                            >
                                informasi@lldikti4.or.id
                            </Link>
                        </span>
                        <span className="text-white flex flex-col gap-1 w-[13rem]">
                            Alamat
                            <Link
                                href=""
                                className=" text-gray-300  link link-hover"
                            >
                                Alamat Jl. PH.H. Mustofa No.38, Cikutra, Kec.
                                Cibeunying Kidul, Kota Bandung, Jawa Barat 40124
                            </Link>
                        </span>
                    </div>
                    <div className="w-full">
                        <span className="text-center text-white text-[16px] pb-2 font-extrabold">
                            Direktori
                        </span>
                        <ul>
                            <li className="flex items-center gap-2">
                                <svg
                                    width="4"
                                    height="10"
                                    viewBox="0 .8 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                        fill="#fff"
                                    />
                                </svg>
                                <Link className="link link-hover text-gray-300 ">
                                    Direktori Gurubesar
                                </Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg
                                    width="4"
                                    height="10"
                                    viewBox="0 .8 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                        fill="#fff"
                                    />
                                </svg>
                                <Link className="link link-hover text-gray-300 ">
                                    Direktori Doktor
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <span className="text-center text-white text-[16px] pb-2 font-extrabold">
                            Pranala
                        </span>
                        <ul>
                            <li className="flex items-center gap-2">
                                <svg
                                    width="4"
                                    height="10"
                                    viewBox="0 .8 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                        fill="#fff"
                                    />
                                </svg>
                                <Link className="link link-hover text-gray-300 ">
                                    Data kelembagaan
                                </Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg
                                    width="4"
                                    height="10"
                                    viewBox="0 .8 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                        fill="#fff"
                                    />
                                </svg>
                                <Link className="link link-hover text-gray-300 ">
                                    Informasi kegiantan LLDIKTI Wilayah IV
                                </Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg
                                    width="4"
                                    height="10"
                                    viewBox="0 .8 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                        fill="#fff"
                                    />
                                </svg>
                                <Link className="link link-hover text-gray-300 ">
                                    Beasiswa dosen
                                </Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg
                                    width="4"
                                    height="10"
                                    viewBox="0 .8 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                        fill="#fff"
                                    />
                                </svg>
                                <Link className="link link-hover text-gray-300 ">
                                    Pangkalan Data PT (PD-DIKTI)
                                </Link>
                            </li>
                            <li className=" w-[18rem] relative">
                                <svg
                                    width="4"
                                    height="10"
                                    viewBox="0 .8 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 7C2.5375 7 1.71111 6.6583 1.02083 5.9749C0.340278 5.28173 0 4.45188 0 3.48536C0 2.52859 0.340278 1.70851 1.02083 1.0251C1.71111 0.341701 2.5375 0 3.5 0C4.43333 0 5.25 0.341701 5.95 1.0251C6.65 1.70851 7 2.52859 7 3.48536C7 4.12971 6.83472 4.72036 6.50417 5.25732C6.18333 5.78452 5.76042 6.2092 5.23542 6.53138C4.71042 6.84379 4.13194 7 3.5 7Z"
                                        fill="#fff"
                                    />
                                </svg>
                                <Link className="link link-hover text-gray-300 absolute pl-[13px] -top-[1px]">
                                    Ijin Pendirian Perguruan Tinggi Swasta,
                                    Program Studi dan Ahli Kelola atau Perubahan
                                    Perguruan Tinggi Swasta
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-center text-white text-[16px] pb-2 font-extrabold mt-11 lg:mt-0">
                            Meida Sosial
                        </span>
                        <div className="grid grid-flow-col gap-4">
                            <Link href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </Link>
                            <Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </Link>
                            <Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </Link>
                            <Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="pr-1"
                                    width={"27px"}
                                    height={"27px"}
                                    fill="#fff"
                                >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="bg-black dark:bg-gray-300 dark:text-black w-full p-2 text-center text-[14px] leading-[150%] font-bold">
                Lembaga Layanan Pendidikan Tinggi (LLDIKTI) Wilayah IV Jawa
                Barat dan Banten @ {new Date().getFullYear()} - Hak Cipta
                Dilindungi
            </div>
        </>
    );
};

export default Footer;
