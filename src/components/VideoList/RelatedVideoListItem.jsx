import React from "react";
import { Link } from "react-router-dom";

const RelatedVideoListItem = ({ video }) => {
  const { title, author, date, duration, thumbnail, id } = video || {};
  return (
    <div className="flex flex-row w-full gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`/videos/${id}`}>
          <img src={thumbnail} className="object-cover" alt={title} />
        </Link>
        <p className="absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py">
          {duration}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <Link to={`/videos/${id}`}>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
        </Link>
        <Link className="mt-2 text-xs text-gray-400 hover:text-gray-600" to="#">
          {author}
        </Link>
        <p className="mt-1 text-xs text-gray-400">100K views . {date}</p>
      </div>
    </div>
  );
};

export default RelatedVideoListItem;
