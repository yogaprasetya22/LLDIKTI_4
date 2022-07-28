import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Paginator = ({ meta }) => {
    const currnet = meta?.current_page;
    const prev = meta?.links[0].url;
    const prevCurrnet = meta?.links[3].url;
    const next = meta?.links[meta.links.length - 1].url;
    const nextCurrnet = meta?.links[meta?.last_page - 2].url;

    return (
        <div className="btn-group mt-2 mb-8 flex gap-2 md:px-[5rem] w-full justify-center">
            {prev ? (
                <ButonLink link={prev} title="« Sebelumnya" />
            ) : (
                <ButonP title="« Sebelumnya" />
            )}
            {currnet == meta?.last_page && (
                <ButonLink
                    link={nextCurrnet}
                    title={currnet ? currnet - 2 : 1}
                />
            )}
            {currnet > 1 && <ButonLink link={prev} title={currnet - 1} />}

            <ButonP title={currnet} clr={true} />

            {currnet < meta?.last_page && (
                <ButonLink link={next} title={currnet + 1} />
            )}

            {currnet == 1 && (
                <ButonLink link={prevCurrnet} title={currnet + 2} />
            )}

            {next ? (
                <ButonLink link={next} title="Selanjutnya »" />
            ) : (
                <ButonP title="Selanjutnya »" />
            )}
        </div>
    );
};

export default Paginator;

const ButonP = ({ title, clr }) => (
    <button
        className={`btn btn-outline rounded-md text-[#24529e] dark:text-white dark:border-[#24529e] ${
            clr ? "bg-[#24529e] text-[#fff]" : ""
        } text-[11px] p-3 md:text-[15px]  md:p-4`}
    >
        {title}
    </button>
);

const ButonLink = ({ title, link }) => (
    <a
        href={link}
        className="btn btn-outline rounded-md text-[#24529e] dark:text-white dark:border-[#24529e] text-[11px] p-3 md:text-[15px] md:p-4"
    >
        {title}
    </a>
);
