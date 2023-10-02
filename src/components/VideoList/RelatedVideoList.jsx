import React, { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlcie";
import Loading from "../UI/Loading";

const RelatedVideoList = ({ tags, id }) => {
  const dispatch = useDispatch();
  const { relatedVideo, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id }));
  }, [dispatch, id, tags]);

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
