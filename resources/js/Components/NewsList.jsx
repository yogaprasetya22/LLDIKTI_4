import React from "react";

const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div
                className="card md:w-96 w-full  md:rounded-md rounded-none bg-base-100 md:shadow-[0px_13px_25px_-2px_rgba(0,0,0,0.57)]"
                key={i}
            >
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-md md:text-md">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-xs md:text-xs">{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const NewsList = ({ news }) => {
    return news ? (
        isNews(news)
    ) : (
        <p className="text-2xl text-center">Beritanya kosong ngabbb</p>
    );
};

export default NewsList;
