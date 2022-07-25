import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

const Tamplate = ({ children, title, color }) => {
    return (
        <article className="">
            <div
                className={` ${
                    color
                        ? "bg-[#fafafa] dark:bg-[#3f3e3ee9] "
                        : " dark:bg-[#393939]"
                } `}
            >
                <div className="flex items-center w-full flex-col">
                    <div className="flex w-full justify-center items-center md:p-[20px_70px] p-[25px] mt-[2.5rem]">
                        <span
                            className="text-black dark:text-white text-[26px]"
                            style={{ fontWeight: "700", lineHeight: "141.02%" }}
                        >
                            <div className="flex items-center leading-[150%]">
                                {" "}
                                {title}
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
                    {children}
                </div>
                <div className="flex w-full justify-center p-[20px_70px] pb-[4rem] ">
                    <Link
                        href="#"
                        className="text-[15px] text-[#2654a4] font-extrabold hover:text-blue-100 border-[3px] p-2 rounded-md border-[#2654a4] dark:border-[#393939] hover:border-[#2654a4] hover:bg-[#2654a4] dark:hover:bg-[#393939] transition-all"
                    >
                        Selengkapnya{" "}
                        <span className="pl-1">
                            <FontAwesomeIcon
                                icon={faArrowRightLong}
                                className="text-[10px]"
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Tamplate;
