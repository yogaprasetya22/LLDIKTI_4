import React from "react";
import bgheader from "@/img/bg-header.png";

const Heading = ({ children }) => {
    return (
        <header
            className="relative overflow-hidden bg-no-repeat shadow-md max-h-[23rem]"
            style={{
                backgroundPosition: "50%",
                height: "400px",
                backgroundImage: `url(${bgheader})`,
            }}
        >
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div className="flex justify-center items-center h-full">
                    <div className="text-center dark:text-white text-black px-6 md:px-12">
                        {children}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Heading;
