import React from "react";
import IconPdf from "@/img/pdf-icon.png";

const TamplatePdf = ({ data }) => {
    return (
        <article className=" py-6">
            <div className="w-full lg:hidden">
                {data.map((data, i) => {
                    return (
                        <div
                            key={i}
                            className="flex flex-wrap justify-around px-[2rem] my-5 gap-5 "
                        >
                            <div className="bg-[#ffff] md:min-w-[35rem] w-[20rem] md:min-h-[10rem] min-h-[8rem] rounded-md flex shadow-md drop-shadow-md hover:-translate-y-1 duration-[150ms] ease-in-out mb-4 md:flex-row flex-col">
                                <div className=" md:p-5 p-7 bg-[#f7f7f7] md:h-full rounded-tl-md rounded-bl-md flex items-center  justify-center">
                                    <img
                                        src={IconPdf}
                                        alt=""
                                        className="md:w-[190px] w-[80px]"
                                    />
                                </div>
                                <div className="flex flex-col p-5 text-[#36597c] gap-4  ">
                                    <a className="text-[15px] text-center md:text-left md:w-[25rem] link link-hover font-bold">
                                        {data.des}
                                    </a>
                                    <span className="flex items-center gap-1 justify-center md:justify-start">
                                        1
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-[13px]"
                                        >
                                            <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z" />
                                        </svg>
                                        {data.download} downloads
                                    </span>
                                    <span className="text-sm text-gray-900 font-light px-1 py-4  break-all">
                                        <a
                                            href="#"
                                            className="link link-hover text-blue-500 select-none"
                                        >
                                            Keputusan Menteri,
                                        </a>{" "}
                                        <a
                                            href="#"
                                            className="link link-hover text-blue-500 select-none"
                                        >
                                            Produk Hukum
                                        </a>
                                    </span>
                                    <span className="text-sm text-gray-900 font-light md:text-center">
                                        23 June 2020
                                    </span>
                                    <a
                                        href={data.url}
                                        className="bg-transparent hover:bg-blue-500 text-center text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    >
                                        DOWNLOAD
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="px-[6rem] shadow-sm drop-shadow-sm lg:inline-block hidden">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full table-fixed">
                                    <thead className="bg-gray-100 border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-semibold text-gray-900 pl-8 py-4 text-left "
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-semibold text-gray-900 px-8 py-4 text-left"
                                            >
                                                Categories
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-semibold text-gray-900 px-8 py-4 text-left"
                                            >
                                                Update Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-semibold text-gray-900 px-8 py-4 text-left"
                                            >
                                                Download
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((data, i) => {
                                            let ganjil =
                                                i % 2 === 0
                                                    ? "bg-gray-100"
                                                    : "bg-white";
                                            return (
                                                <tr
                                                    key={i}
                                                    className={`border-b ${ganjil}`}
                                                >
                                                    <td className=" max-w-[42rem] px-6 py-4 text-sm font-medium text-gray-900 flex flex-row items-center break-all">
                                                        <img
                                                            src={IconPdf}
                                                            className="w-[5rem]"
                                                            alt=""
                                                        />
                                                        <div className="flex flex-col gap-2">
                                                            <a
                                                                href={data.url}
                                                                className=" font-bold text-[#36597c] link link-hover"
                                                            >
                                                                {data.des}
                                                            </a>
                                                            <span className="flex items-center gap-1">
                                                                1
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512"
                                                                    className="w-[13px]"
                                                                >
                                                                    <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z" />
                                                                </svg>
                                                                {data.download}{" "}
                                                                downloads
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-1 py-4 max-w-[2rem] break-all">
                                                        <a
                                                            href="#"
                                                            className="link link-hover text-blue-500"
                                                        >
                                                            Keputusan Menteri,
                                                        </a>{" "}
                                                        <a
                                                            href="#"
                                                            className="link link-hover text-blue-500"
                                                        >
                                                            Produk Hukum
                                                        </a>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        23 June 2020
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <a
                                                            href={data.url}
                                                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                                        >
                                                            DOWNLOAD
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
        </article>
    );
};

export default TamplatePdf;
