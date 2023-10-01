import React from "react";
import { Link } from "react-router-dom";

const Video = ({ video = {} }) => {
  const { id, thumbnail, title, duration, author, avatar, views, date } = video;

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="flex flex-col w-full">
        <div className="relative">
          <Link to={`videos/${id}`}>
            <img src={thumbnail} className="w-full h-auto" alt={title} />
          </Link>

          <p className="absolute px-1 text-xs text-gray-100 bg-gray-900 right-2 bottom-2 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row gap-2 mt-2">
          <Link to={`videos/${id}`} className="shrink-0">
            <img src={avatar} className="w-6 h-6 rounded-full" alt={author} />
          </Link>

          <div clas="flex flex-col">
            <Link to={`videos/${id}`}>
              <p className="text-sm font-semibold text-slate-900">{title}</p>
            </Link>
            <Link
              className="mt-2 text-xs text-gray-400 hover:text-gray-600"
              to={`videos/${id}`}
            >
              {author}
            </Link>
            <p className="mt-1 text-xs text-gray-400">
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
