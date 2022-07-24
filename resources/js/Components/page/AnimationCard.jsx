import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

const AnimationCard = ({ data, link }) => {
    return (
        <>
            <figure>
                <img src={data.background} alt="Shoes" />
            </figure>
            <div className="absolute top-0 h-full w-[95%] flex justify-center items-center flex-col">
                <img
                    className=" -mt-4 h-[130px]"
                    style={{
                        backgroundPosition: "50%",
                        backgroundSize: "auto",
                        objectFit: "cover",
                    }}
                    src={data.content}
                    alt=""
                />
                <span className="font-bold text-black mt-3">{data.title}</span>
                <Link href={link} className="font-bold text-[#2654a4] mt-3">
                    Kunjungi Layanan{" "}
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

export default AnimationCard;
