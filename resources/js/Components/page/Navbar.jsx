import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { MobileNav } from "../MobileMode";
import { DarkModeToggle } from "../DarkMode";
import { ThemeContext } from "@/Layouts/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const NextLink = ({ href, title, name }) => {
    console.log(title);
    const isNavbar = (rout, parent) => {
        if (!parent)
            return `${
                "/" + title === rout ? "dark:text-white text-base-100" : ""
            }`;

        return `${"/" + title === rout ? "text-yellow-500" : ""}`;
    };

    return (
        <Link href={`/${href}`} className={isNavbar(`/${href}`, true)}>
            {name}
        </Link>
    );
};

const Navbar = ({ title }) => {
    const [hover, setHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const { theme } = useContext(ThemeContext);

    return (
        <nav
            className="flex flex-col fixed w-full z-10 top-0 left-0 shadow-md "
            style={{
                backdropFilter: "blur(10px) saturate(260%) contrast(180%)",
                WebkitBackdropFilter:
                    "blur(10px) saturate(260%) contrast(180%)",
            }}
        >
            <div className=" bg-[#2654a4] md:pr-[50px] md:p-[6px_70px]  z-40 top-0  text-[15px] w-full justify-between flex ">
                <div className="lg:flex gap-3 hidden ">
                    <Link href="#" className="text-white">
                        <FontAwesomeIcon icon={faPhone} className="pr-1" />
                        +021-727-5630
                    </Link>
                    <Link href="#" className="text-white ">
                        <FontAwesomeIcon icon={faEnvelope} className="pr-1" />
                        informasi@lldikti4.or.id
                    </Link>
                    <Link href="#" className="text-white flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="pr-1"
                            viewBox="0 0 448 512"
                            width={"20px"}
                            height={"20px"}
                            fill="#fff"
                        >
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>{" "}
                        <span className="flex text-center">Whatsapp</span>
                    </Link>
                </div>
                <div className="flex gap-3 md:pr-[50px] md:p-0 p-[5px] pl-7">
                    <Link href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="pr-1"
                            width={"20px"}
                            height={"20px"}
                            fill="#fff"
                        >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                    </Link>
                    <Link href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="pr-1"
                            width={"20px"}
                            height={"20px"}
                            fill="#fff"
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </Link>
                    <Link href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="pr-1"
                            width={"20px"}
                            height={"20px"}
                            fill="#fff"
                        >
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                    </Link>
                    <Link href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 30 576 512"
                            className="pr-1"
                            width={"23px"}
                            height={"23px"}
                            fill="#fff"
                        >
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>
                    </Link>
                </div>
            </div>
            {/* Navbar */}
            <div
                className="navbar bg-[#ffffffd6] dark:bg-[#2a303cee] md:px-[120px]   z-40 top-0 text-black dark:text-white text-[16px]   transition duration-[85ms]ease-in-out
            
            "
            >
                <div className="flex-1 py-2">
                    <Link
                        className="btn btn-ghost normal-case text-xl lg:text-xl "
                        href="/"
                    >
                        <img
                            src="https://i0.wp.com/www.lldikti4.id/wp-content/uploads/2021/09/LLDIKTI-LOGOrev1-1.png?resize=300%2C56&ssl=1"
                            className="lg:w-[200px] w-[140px]"
                        />
                    </Link>
                    <div className="hidden lg:flex justify-end w-full">
                        <ul className="menu menu-horizontal ">
                            {/* Profil */}
                            <li tabIndex="0">
                                <NextLink
                                    href="profil"
                                    title={title}
                                    name="Profile"
                                />
                                <ul className="p-2 z-10 bg-[#ffffff] shadow-md drop-shadow-md dark:bg-[#2a303c] text-black dark:text-white delay-75">
                                    <li>
                                        <NextLink
                                            href="profil-lldikti-4"
                                            title={title}
                                            name="Profil LIDIKTI 4"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="profil-kepala-lldikti-4"
                                            title={title}
                                            name="Profil Kepala LLDIKTI 4"
                                        />
                                    </li>
                                </ul>
                            </li>
                            {/* info */}
                            <li>
                                <NextLink
                                    href="info"
                                    title={title}
                                    name="Info"
                                />
                            </li>
                            {/* Akuntabilitas */}
                            <li>
                                <NextLink
                                    href="akuntabilitas"
                                    title={title}
                                    name="Akuntabilitas"
                                />
                            </li>
                            {/* Berita */}
                            <li>
                                <NextLink
                                    href="berita"
                                    title={title}
                                    name="Berita"
                                />
                            </li>
                            {/* Layanan */}
                            <li tabIndex="0">
                                <NextLink
                                    href="layanan"
                                    title={title}
                                    name="Layanan"
                                />
                                <ul className="p-2 z-10 bg-[#ffffff] shadow-md drop-shadow-md dark:bg-[#2a303c] text-black dark:text-white ">
                                    <li>
                                        <NextLink
                                            href="layanan/layanan-online"
                                            title={title}
                                            name="Layanan Online"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="layanan/layanan-kami"
                                            title={title}
                                            name="Layanan Kami"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="cara-pengajuan-layanan"
                                            title={title}
                                            name="Cara Pengajuan Layanan"
                                        />
                                    </li>
                                </ul>
                            </li>
                            {/* Informasi Publik */}
                            <li tabIndex="0">
                                <NextLink
                                    href="informasi-publik"
                                    title={title}
                                    name="Informasi Publik"
                                />
                                {/* Produk Hukum */}
                                {hover && (
                                    <ul
                                        className="p-2 bg-[#ffffff] shadow-md drop-shadow-md dark:bg-[#2a303c] text-black dark:text-white delay-75 menu
                                         left-[16rem] top-[4rem] absolute z-20
                                        "
                                        onMouseEnter={(e) => setHover(true)}
                                        onMouseLeave={(e) => setHover(false)}
                                    >
                                        <li>
                                            <NextLink
                                                href="produk-hukum/surat-edaran"
                                                title={"produk-hukum/" + title}
                                                name="Surat Edaran"
                                            />
                                        </li>
                                        <li>
                                            <NextLink
                                                href="produk-hukum/undang-undang"
                                                title={"produk-hukum/" + title}
                                                name="Undang - Undang"
                                            />
                                        </li>
                                        <li>
                                            <NextLink
                                                href="produk-hukum/peraturan-ristektikti"
                                                title={"produk-hukum/" + title}
                                                name="Peraturan Ristektikti"
                                            />
                                        </li>
                                        <li>
                                            <NextLink
                                                href="produk-hukum/peraturan-presiden"
                                                title={"produk-hukum/" + title}
                                                name="Peraturan Presiden"
                                            />
                                        </li>
                                        <li>
                                            <NextLink
                                                href="produk-hukum/peraturan-mentri"
                                                title={"produk-hukum/" + title}
                                                name="Peraturan Mentri"
                                            />
                                        </li>
                                        <li>
                                            <NextLink
                                                href="produk-hukum/peraturan-pemerintah"
                                                title={"produk-hukum/" + title}
                                                name="Peraturan Pemerintah"
                                            />
                                        </li>
                                        <li>
                                            <NextLink
                                                href="produk-hukum/sk-dirjen"
                                                title={"produk-hukum/" + title}
                                                name="SK DIRJEN"
                                            />
                                        </li>
                                    </ul>
                                )}
                                {/* end */}
                                <ul className="p-2 z-10 bg-[#ffffff] shadow-md drop-shadow-md dark:bg-[#2a303c] text-black dark:text-white delay-75 overflow-y-scroll max-h-[30rem] no-scrollbar">
                                    <li>
                                        <NextLink
                                            href="standar-layanan-publik"
                                            title={title}
                                            name="Standar Layanan Publik"
                                        />
                                    </li>
                                    <li
                                        onMouseEnter={(e) => setHover(true)}
                                        onMouseLeave={(e) => setHover(false)}
                                    >
                                        <NextLink
                                            href="produk-hukum"
                                            title={title}
                                            name="Prodik Hukum"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="ppid"
                                            title={title}
                                            name="PPID"
                                        />
                                    </li>{" "}
                                    <li>
                                        <NextLink
                                            href="prosedur-operasional-standar"
                                            title={title}
                                            name="Prosedur Operasional Stander"
                                        />
                                    </li>{" "}
                                    <li>
                                        <NextLink
                                            href="peta-proses-bisnis-lldikti-wilayah-iv"
                                            title={title}
                                            name="Peta Proses Bisnis LLDIKTI Wilayah IV"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="buku-panduan-pedoman"
                                            title={title}
                                            name="Buku Panduan / Pedoman"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="materi-kegiatan"
                                            title={title}
                                            name="Materi Kegiatan"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="buletin-lldikti-wilayah-iv"
                                            title={title}
                                            name="Buletin LLDIKTI Wilayah IV"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="buku-direktori-pts-lldikti-iv"
                                            title={title}
                                            name="Buku Direktori PTS LLDIKTI IV"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            href={
                                                "https://pddikti.kemdikbud.go.id/publikasi"
                                            }
                                            className={
                                                "dark:text-white text-base-100"
                                            }
                                        >
                                            Buku Statistik Perguruan Tinggi
                                        </a>
                                    </li>
                                    <li>
                                        <NextLink
                                            href="kegiatan"
                                            title={title}
                                            name="Agenda Kegiatan"
                                        />
                                    </li>
                                    <li>
                                        <NextLink
                                            href="gallery"
                                            title={title}
                                            name="Galeri"
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-none gap-3 hidden md:flex">
                    {/* search */}
                    <button className=" text-red-100 ">
                        <svg
                            style={
                                theme === "dark"
                                    ? { fill: "currentColor" }
                                    : { fill: "" }
                            }
                            className=" transition duration-500 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                        >
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                        </svg>
                    </button>
                    <Link
                        className=" inline-block px-2 py-1.5 bg-[#3e54aa] text-white font-medium text-[13px] leading-tight rounded shadow-md hover:bg-[#2a3c84] hover:shadow-lg focus:bg-[#2a3c84] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3e54aa] active:shadow-lg transition duration-150 ease-in-out "
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        href="#"
                        role="button"
                    >
                        Kontak & Pengaduan
                    </Link>
                    <div className="lg:inline-block hidden">
                        <DarkModeToggle />
                    </div>
                </div>

                {/* Mobile Navbar */}

                <div className="lg:hidden md:hidden flex items-center ">
                    <button className=" text-red-100">
                        <svg
                            style={
                                theme === "dark"
                                    ? { fill: "currentColor" }
                                    : { fill: "" }
                            }
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                        >
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                        </svg>
                    </button>
                </div>
                <div className="mr-2 flex lg:hidden gap-2 pl-[10px] lg:pl-0 ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none  focus:ring-offset-gray-800  border-white border-2
                        "
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        {!isOpen ? (
                            <svg
                                className="block h-4 w-4 origin-center duration-300 "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                transform="scale(-1)"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-4 w-4 origin-center duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                transform="scale(-1 1)"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <MobileNav
                isOpen={isOpen}
                title={title}
                mode={setIsDark}
                dark={isDark}
            />
        </nav>
    );
};

export default Navbar;
