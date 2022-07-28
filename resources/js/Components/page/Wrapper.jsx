import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import { Link } from "@inertiajs/inertia-react";

const Wrapper = ({ data }) => {
    return (
        <div className="bg-[#ffff] md:w-[35rem] w-[20rem] md:h-[10rem] h-[20rem] rounded-md flex shadow-md drop-shadow-md hover:-translate-y-1 duration-[150ms] ease-in-out mb-4 md:flex-row flex-col">
            <div className=" md:p-12 p-7 bg-[#f7f7f7] md:h-full rounded-tl-md rounded-bl-md flex items-center  justify-center">
                <img
                    src={data.imgage}
                    alt=""
                    className="md:w-[90px] w-[50px]"
                />
            </div>
            <div className="flex flex-col p-5 text-black gap-4">
                <span className="text-[16px] font-semibold ">{data.title}</span>
                <span className="text-[15px]">{data.desc}</span>
                <Link
                    href={data.link}
                    className="flex text-[15px] text-[#5b7db6] select-none link link-hover"
                >
                    Unduh
                    <span className="pl-1 ">
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            className="text-[10px]"
                        />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Wrapper;
