import React from "react";

const Tag = ({ tag = {} }) => {
  const { title } = tag;
  return (
    <>
      <div className="px-4 py-1 text-blue-600 bg-blue-100 rounded-full cursor-pointer">
        {title}
      </div>
    </>
  );
};

export default Tag;
