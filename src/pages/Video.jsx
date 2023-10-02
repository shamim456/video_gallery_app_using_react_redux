import React, { useEffect } from "react";
import Player from "../components/videoPlayer/Player";
import Description from "../components/videoPlayer/Description";
import RelatedVideo from "../components/VideoList/RelatedVideoList";
import PublicLayout from "../layouts/PublicLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../features/video/videoSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/UI/Loading";

const Video = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const { link, title, tags, id } = video || {};

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !video.id)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && video.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="w-full space-y-8 col-span-full lg:col-span-2">
          <Player link={link} title={title} />
          <Description video={video} />
        </div>
        <RelatedVideo tags={tags} id={id} />
      </div>
    );

  return (
    <PublicLayout>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </PublicLayout>
  );
};

export default Video;
