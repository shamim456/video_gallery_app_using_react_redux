import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

const Tag = ({ tag = {} }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);
  const { title } = tag;

  let isSelected = selectedTags.includes(title) ? true : false;

  const handleSelected = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "px-4 py-1 text-blue-600 bg-blue-100 rounded-full cursor-pointer";
  return (
    <>
      <div className={style} onClick={handleSelected}>
        {title}
      </div>
    </>
  );
};

export default Tag;
