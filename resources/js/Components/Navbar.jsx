import React, { useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { useContext } from "react";
import { ThemeContext } from "@/Layouts/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMobile, setOpenMobile] = useState(false);
    const isNavbar = (rout, parent) => {
        if (!parent)
            return `${
                "/" + title === rout ? "dark:text-white text-base-100" : ""
            }`;
        return `${"/" + title === rout ? "text-yellow-500" : ""}`;
    };
    const isNavbarMobile = (rout) => {
        return ` ${"/" + title === rout ? "text-yellow-500" : ""}`;
    };
    const toggle = () => {
        setOpenMobile(!isOpenMobile);
    };
    return (
        <>
            <div
                className="navbar bg-[#fffffff1] dark:bg-[#2a303ccc] md:pr-[50px] md:pl-[50px] fixed z-40 top-0 text-grey-600"
                style={{ backdropFilter: "blur(2px)" }}
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
                    <div className="flex-none  hidden md:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li>
                                <Link
                                    href="/"
                                    className={isNavbar("/Homepage")}
                                >
                                    Home
                                </Link>
                            </li>
                            <li tabIndex="0">
                                <Link
                                    href="/profile"
                                    className={isNavbar("/Profile")}
                                >
                                    Profile
                                </Link>
                                <ul className="p-2 z-10 bg-base-100 text-grey-400 delay-75">
                                    <li>
                                        <Link
                                            href="/about"
                                            className={isNavbar(
                                                "/About",
                                                "parent"
                                            )}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>Submenu 2</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link>Item 3</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-none gap-2 hidden md:flex ">
                    <div className="form-control max-h-6 justify-center ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered dark:bg-white bg-base-100"
                        />
                    </div>
                    <DarkModeToggle />
                </div>

                {/* Mobile Navbar */}

                <div className="mr-2 flex md:hidden gap-2">
                    <DarkModeToggle />
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
            <Transition
                show={isOpen}
                enter="transition ease-out duration-[250ms] transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className={
                    "fixed z-30 top-0 w-full mt-[64px] bg-[#fffffff1] dark:bg-[#2a303ccc]"
                }
            >
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                        <ul className="menu flex flex-col p-0 ">
                            <li>
                                <Link
                                    href="/"
                                    className={isNavbarMobile("/Homepage")}
                                >
                                    Home
                                </Link>
                            </li>
                            {!isOpenMobile && (
                                <li tabIndex={"0"}>
                                    <button
                                        onClick={toggle}
                                        className={isNavbarMobile("/Profile")}
                                    >
                                        Profile
                                    </button>
                                </li>
                            )}
                            {isOpenMobile && (
                                <ul className="text-grey-400 ">
                                    <li>
                                        <Link
                                            href="/profile"
                                            className={isNavbarMobile(
                                                "/Profile"
                                            )}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about"
                                            className={isNavbarMobile("/About")}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>Submenu 2</Link>
                                    </li>
                                </ul>
                            )}
                            <li>
                                <Link>Item 3</Link>
                            </li>
                        </ul>

                        <Link
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Calendar
                        </Link>

                        <Link
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Reports
                        </Link>
                    </div>
                </div>
            </Transition>
        </>
    );
};

export default Navbar;

const DarkModeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isDarkMode, setDarkMode] = useState(false);
    const toggle = () => {
        setDarkMode(!isDarkMode);
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: "inline-block" }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <button
                    onClick={toggle}
                    id="theme-toggle"
                    type="button"
                    className="p-2 rounded-full text-gray-400 hover:text-white focus:outline-none  focus:ring-offset-gray-800  border-white border-[1px] dark:bg-white bg-base-100 "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    {!isDarkMode ? (
                        <svg
                            className="block h-4 w-4  "
                            width="20px"
                            height="20px"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Lager_94" data-name="Lager 94">
                                <path
                                    id="Path_70"
                                    data-name="Path 70"
                                    d="M12.516,4.509A12,12,0,0,0,22.3,19.881,12.317,12.317,0,0,0,24,20a11.984,11.984,0,0,0,3.49-.514,12.1,12.1,0,0,1-9.963,8.421A12.679,12.679,0,0,1,16,28,12,12,0,0,1,12.516,4.509M16,0a16.5,16.5,0,0,0-2.212.15A16,16,0,0,0,16,32a16.526,16.526,0,0,0,2.01-.123A16.04,16.04,0,0,0,31.85,18.212,16.516,16.516,0,0,0,32,15.944,1.957,1.957,0,0,0,30,14a2.046,2.046,0,0,0-1.23.413A7.942,7.942,0,0,1,24,16a8.35,8.35,0,0,1-1.15-.08,7.995,7.995,0,0,1-5.264-12.7A2.064,2.064,0,0,0,16.056,0Z"
                                    fill="#eaea"
                                />
                            </g>
                        </svg>
                    ) : (
                        <svg
                            className="block h-4 w-4 origin-center duration-500 "
                            width="20px"
                            height="20px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            // transform="translate(100% , 60%)"
                            viewBox="0 0 108.336 108.336"
                        >
                            <g>
                                <path
                                    d="M54.168,0C24.3,0,0,24.3,0,54.168c0,29.869,24.3,54.168,54.168,54.168s54.168-24.299,54.168-54.168
		C108.336,24.3,84.036,0,54.168,0z M83.828,22.145c-0.037,0.033-0.068,0.071-0.102,0.108c-1.049-1.956-2.203-3.851-3.476-5.677
		c-0.675-0.968-1.366-1.875-2.065-2.753c0.006,0.003,0.014,0.003,0.019,0.006c0.385,0.227,0.709,0.541,1.228,0.523
		c0.188-0.006,0.538,0.128,0.483,0.572c-0.047,0.369,0.594,0.341,0.619,0.751l0.002,0.001c0.44-0.042,0.709,0.244,0.983,0.518
		c0.137,0.103,0.299,0.188,0.449,0.212c0.355,0.058,0.557,0.235,0.699,0.56c0.111,0.249,0.289,0.445,0.6,0.541
		c0.437,0.133,0.574,0.544,0.471,0.938c-0.104,0.401-0.004,0.676,0.244,0.968C84.598,20.132,84.525,21.515,83.828,22.145z
		 M85.799,23.483c-0.258,0.042-0.346-0.108-0.318-0.337c0.027-0.248,0.189-0.317,0.408-0.246c0.275,0.09,0.566,0.136,0.809,0.333
		c0.394,0.318,0.439,0.539-0.122,0.664c-0.089-0.084-0.175-0.168-0.263-0.251C86.174,23.484,86.004,23.451,85.799,23.483z
		 M94.656,44.726c-0.385-0.035-0.365-0.474-0.627-0.638c-0.094,0.09-0.115,0.224-0.049,0.287c0.813,0.756,0.731,1.739,0.533,2.648
		c-0.175,0.804-0.875,1.257-1.646,1.533c-0.242-0.029-0.311-0.204-0.297-0.401c0.043-0.582-0.328-0.868-0.764-1.118
		c-0.962-0.551-1.015-0.707-0.671-1.771c0.115-0.357,0.263-0.707,0.308-1.085c0.022-0.19,0.074-0.379,0.283-0.446
		c0.248-0.08,0.313,0.162,0.45,0.276c-0.002-0.011,0.011-0.017-0.006-0.029c-0.369-0.275-0.104-0.63-0.119-0.949
		c-0.004-0.086-0.012-0.171-0.016-0.257c0.164-0.303,0.176-0.609-0.089-0.849c-0.188-0.175-0.104-0.381-0.146-0.572
		c-0.002-0.024-0.01-0.04-0.012-0.062c-0.24-0.025-0.479-0.047-0.711-0.1c-0.166-0.038-0.31-0.108-0.414-0.216
		c-0.054,0.001-0.106,0.006-0.16,0.019c-0.049,0.03-0.101,0.049-0.151,0.068c-0.078-0.011-0.136,0.012-0.191,0.037
		c-0.028,0.133-0.023,0.272-0.03,0.409c-0.784-4.818-2.043-9.359-3.771-13.628c0.045-0.123,0.088-0.246,0.115-0.376
		c0.066-0.308,0.234-0.554,0.596-0.508c0.359,0.046,0.515-0.098,0.615-0.435c0.094-0.306,0.354-0.43,0.691-0.412
		c0.309,0.016,0.486,0.126,0.588,0.429c0.057,0.164,0.193,0.314,0.381,0.535c-0.537-0.671-0.725-1.406-1.027-2.078
		c-0.205-0.46-0.762-0.494-0.887-0.969c-0.123-0.467-0.047-1.015-0.459-1.374c-0.44-0.384-0.213-0.803-0.106-1.219
		c0.028-0.117,0.151-0.13,0.256-0.151c0.021,0.003,0.032,0.014,0.053,0.018c0.017-0.105-0.098-0.168-0.211-0.231v-0.655
		c0.646,0.533,1.257,0.965,1.772,1.486c0.394,0.394,0.894,0.622,1.291,0.992c0.354,0.327,0.134,0.398-0.174,0.451
		c0.004,0.125,0.01,0.25,0.017,0.374c-0.052,0.139-0.104,0.275-0.147,0.415c-0.099,0.314-0.244,0.438-0.523,0.16
		c-0.119-0.117-0.285-0.277-0.43-0.13c-0.156,0.158,0.041,0.307,0.145,0.422c0.248,0.275,0.717,0.46,0.34,0.958
		c-0.014,0.018,0.014,0.099,0.039,0.109c0.689,0.257,0.766,1.233,1.588,1.343c0.285,0.038,0.381,0.229,0.248,0.512
		c-0.107,0.229-0.096,0.475,0.104,0.637c0.23,0.187,0.242-0.128,0.361-0.203c0.086-0.053,0.176-0.041,0.219,0.041
		c0.119,0.222,0.285,0.485,0.099,0.703c-0.269,0.314-0.347,0.587-0.111,0.953c0.111,0.174,0.058,0.314-0.215,0.288
		c-0.424-0.042-0.438,0.307-0.504,0.587c-0.09,0.378,0.187,0.349,0.43,0.444c0.31,0.121,0.416,0.479,0.603,0.75
		c0.301,0.44,0.301,0.955,0.486,1.417c0.08,0.198,0.057,0.418-0.152,0.564c-0.443,0.31-0.549,0.778-0.562,1.273
		c-0.018,0.712-0.182,1.383,0.14,2.14c0.271,0.642,0.779,0.712,1.205,0.947c0.799,0.441,1.08,0.835,0.858,1.712
		c-0.086,0.341-0.09,0.64,0.011,0.974c0.145,0.485,0.409,0.963,0.127,1.5c-0.078,0.152,0.062,0.318,0.194,0.433
		c0.623,0.536,0.625,1.19,0.363,1.896C94.754,44.659,94.713,44.7,94.656,44.726z"
                                    fill="#ccc"
                                />
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>
                    )}
                </button>
            </motion.div>
        </AnimatePresence>
    );
};
