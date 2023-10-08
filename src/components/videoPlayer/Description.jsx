import React from "react";
// import LikeUnlike from "./LikeUnlike";

const Description = ({ video = {} }) => {
  const { title, date, description } = video;
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="flex items-center pb-4 border-b space-between">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        {/* <!-- like/unlike --> */}
        {/* <LikeUnlike /> */}
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
    </div>
  );
};

export default Description;
