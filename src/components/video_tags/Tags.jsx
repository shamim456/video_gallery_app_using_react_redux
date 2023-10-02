import React, { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Loading from "../UI/Loading";

const Tags = () => {
  const disptach = useDispatch();
  const { isLoading, isError, error, tags } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    disptach(fetchTags());
  }, [disptach]);

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && tags.length === 0)
    content = <div className="col-span-12">No tags found!</div>;

  if (!isLoading && !isError && tags.length > 0) {
    content = tags.map((tag) => <Tag key={tag.id} tag={tag} />);
  }
  return (
    <section>
      <div className="flex gap-2 px-5 py-6 mx-auto overflow-y-auto border-b max-w-7xl lg:px-0">
        {content}
      </div>
    </section>
  );
};

export default Tags;
