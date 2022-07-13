import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const currnet = meta.current_page;

    return (
        <div className="btn-group mt-2 mb-2">
            {prev ? (
                <Link href={prev} className="btn btn-outline">
                    «
                </Link>
            ) : (
                <button className="btn btn-outline">«</button>
            )}
            <button className="btn rounded-none btn-outline">
                Page {currnet}
            </button>
            {next ? (
                <Link href={next} className="btn btn-outline ">
                    »
                </Link>
            ) : (
                <button className="btn btn-outline">»</button>
            )}
        </div>
    );
};

export default Paginator;
