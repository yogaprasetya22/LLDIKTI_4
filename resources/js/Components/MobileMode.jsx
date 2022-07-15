import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";
import { DarkModeToggle } from "./DarkMode";

export const MobileNav = ({ isOpen, title }) => {
    const [isOpenMobile, setOpenMobile] = useState(false);

    const isNavbarMobile = (rout) => {
        return ` ${"/" + title === "/" + rout ? "text-yellow-500" : ""}`;
    };

    const toggle = () => {
        setOpenMobile(!isOpenMobile);
    };
    return (
        <Transition
            show={isOpen}
            enter="transition ease-out duration-[250ms] transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className={
                "fixed z-30 top-0 w-full mt-[95px] bg-[#fffffff1] dark:bg-[#2a303cf6] dark:text-white text-black"
            }
        >
            <div className="lg:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                    <ul className="menu flex flex-col p-0 ">
                        {!isOpenMobile && (
                            <li tabIndex={"0"}>
                                <button
                                    onClick={toggle}
                                    className={isNavbarMobile("profil")}
                                >
                                    Profil
                                </button>
                            </li>
                        )}
                        {isOpenMobile && (
                            <ul className="text-grey-400 ">
                                <li>
                                    <NextLinkMobile
                                        href="profil"
                                        title={title}
                                        name="Profil"
                                    />
                                </li>
                                <li>
                                    <Link
                                        href="profil-lldikti-4"
                                        className={isNavbarMobile(
                                            "profil-lldikti-4"
                                        )}
                                    >
                                        Profil LLDIKTI 4
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="profil-kepala-lidikti-4"
                                        className={isNavbarMobile(
                                            "profil-kepala-lidikti-4"
                                        )}
                                    >
                                        Profil Kepala LLDIKTI 4
                                    </Link>
                                </li>
                            </ul>
                        )}
                        <li>
                            <NextLinkMobile
                                href="profil"
                                title={title}
                                name="Profil"
                            />
                        </li>
                        <li>
                            <Link>Item 3</Link>
                        </li>
                    </ul>

                    <Link
                        href="#"
                        className="  block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Calendar
                    </Link>

                    <Link
                        href="#"
                        className="  block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Reports
                    </Link>
                </div>
                <div class="divider">OR</div>
                <div className=" w-full dark:text-white text-black p-[0px_30px]">
                    <div className="lg:hidden mb-3 flex justify-between items-center">
                        <span className="pr-3">Swith Theme :</span>
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </Transition>
    );
};

const NextLinkMobile = ({ href, title, name }) => {
    const isNavbarMobile = (rout) => {
        return ` ${"/" + title === rout ? "text-yellow-500" : ""}`;
    };
    return (
        <Link href={`/${href}`} className={isNavbarMobile(`/${href}`)}>
            {name}
        </Link>
    );
};
