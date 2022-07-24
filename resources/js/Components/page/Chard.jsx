import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

const Chard = ({ data }) => {
    return (
        <>
            <figure>
                <img src={data.img} alt="Shoes" />
            </figure>
            <div className="p-[10px_15px_5px]">
                <p className="text-xs md:text-xs">{data.date}</p>
            </div>
            <div className="p-[10px_15px]">
                <p className="text-[16px] font-extrabold leading-[150%]">
                    {data.title}
                </p>
            </div>
            <div className="h-10">
                <div className=" absolute w-full bottom-0 p-[10px_15px_10px]">
                    <Link href="#" className="text-[15px] text-blue-600">
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
        </>
    );
};

export default Chard;
