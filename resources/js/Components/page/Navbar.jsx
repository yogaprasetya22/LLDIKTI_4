import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { MobileNav } from "../MobileMode";
import { DarkModeToggle } from "../DarkMode";

const NextLink = ({ href, title, name }) => {
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
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <div
                className="navbar bg-[#ffffffdb] dark:bg-[#2a303cf7] md:pr-[50px] md:pl-[50px] fixed z-40 top-0 text-black dark:text-white text-[12px] font-bold"
                style={{ backdropFilter: "blur(4px)" }}
            >
                <div className="flex-1">
                    <Link
                        className="btn btn-ghost normal-case text-xl md:text-xl "
                        href="/"
                    >
                        <img
                            src="https://i0.wp.com/www.lldikti4.id/wp-content/uploads/2021/09/LLDIKTI-LOGOrev1-1.png?resize=300%2C56&ssl=1"
                            className="w-[130px]"
                        />
                    </Link>
                    <div className="hidden md:flex justify-end w-full">
                        <ul className="menu menu-horizontal ">
                            <li tabIndex="0">
                                <NextLink
                                    href="profil"
                                    title={title}
                                    name="Profile"
                                />
                                <ul className="p-2 z-10 bg-[#fffffff1] dark:bg-[#2a303c] text-black dark:text-white delay-75">
                                    <li>
                                        <NextLink
                                            href="profil-lidikti-4"
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
                            <li>
                                <NextLink
                                    href="info"
                                    title={title}
                                    name="Info"
                                />
                            </li>
                            <li>
                                <Link>Akuntabilitas</Link>
                            </li>
                            <li>
                                <Link>Berita</Link>
                            </li>
                            <li tabIndex="0">
                                <NextLink
                                    href="layanan"
                                    title={title}
                                    name="Layanan"
                                />
                                <ul className="p-2 z-10 bg-[#fffffff1] dark:bg-[#2a303c] text-black dark:text-white delay-75">
                                    <li>
                                        <NextLink
                                            href="layanan-online"
                                            title={title}
                                            name="Layanan Online"
                                        />
                                    </li>
                                    <li>
                                        <Link>Layanan kami</Link>
                                    </li>
                                    <li>
                                        <Link>Profil Kepala LIDIKTI 4</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link>Informasi Publik</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-none gap-3 hidden md:flex">
                    <button className=" text-red-100">
                        <svg
                            // fill="currentColor"
                            style={
                                isDark ? { fill: "currentColor" } : { fill: "" }
                            }
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                        >
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                        </svg>
                    </button>
                    <Link
                        className="inline-block px-3 py-1.5 bg-blue-600 text-white font-medium text-[11px] leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        href="#"
                        role="button"
                    >
                        Kontak & Pengaduan
                    </Link>
                    <DarkModeToggle mode={setIsDark} dark={isDark} />
                </div>

                {/* Mobile Navbar */}

                <div className="mr-2 flex md:hidden gap-2">
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
        </>
    );
};

export default Navbar;
