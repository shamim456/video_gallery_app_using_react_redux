import React from "react";
import Loading from "../UI/Loading";
import { useGetRelatedVideoQuery } from "../../features/api/apiSlice";
import RelatedVideoListItem from "./RelatedVideoListItem";

const RelatedVideoList = ({ title, id }) => {
  const {
    data: relatedVideo,
    isLoading,
    isError,
    error,
  } = useGetRelatedVideoQuery({ title, id });
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && relatedVideo.length === 0)
    content = <div className="col-span-12">No related videos found!!</div>;
  if (!isLoading && !isError && relatedVideo.length > 0)
    content = relatedVideo.map((video) => (
      <RelatedVideoListItem video={video} />
    ));
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
