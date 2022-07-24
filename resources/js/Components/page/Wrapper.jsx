import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import { Link } from "@inertiajs/inertia-react";

const Wrapper = ({ data }) => {
    return (
        <>
            <div className=" p-12 bg-[#f7f7f7] h-full rounded-tl-md rounded-bl-md flex items-center justify-center">
                <img src={data.imgage} alt="" className="w-[90px]" />
            </div>
            <div className="flex flex-col p-5 text-black gap-4">
                <span className="text-[16px] font-extrabold ">
                    {data.title}
                </span>
                <span className="text-[15px]">{data.desc}</span>
                <Link
                    href={data.link}
                    className="flex text-[15px] text-[#5b7db6]"
                >
                    Unduh
                    <span className="pl-1">
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            className="text-[10px]"
                        />
                    </span>
                </Link>
            </div>
        </>
    );
};

export default Wrapper;
