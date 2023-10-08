import React from "react";
import { useParams } from "react-router-dom";

import Player from "../components/videoPlayer/Player";
import Description from "../components/videoPlayer/Description";
// import RelatedVideo from "../components/VideoList/RelatedVideoList";
import PublicLayout from "../layouts/PublicLayout";
import Loading from "../components/UI/loaders/PlayerLoader";
import Error from "../components/UI/Error";
import { useGetVideoQuery } from "../features/api/apiSlice";

const Video = () => {
  const { videoId } = useParams();

  const {
    data: video,
    isLoading,
    isError,
    error,
  } = useGetVideoQuery({ videoId });
  const { link, title, tags, id } = video || {};
  console.log(video);
  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Error message={error} />;

  if (!isLoading && !isError && !video.id) content = <Error message={error} />;

  if (!isLoading && !isError && video.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="w-full space-y-8 col-span-full lg:col-span-2">
          <Player link={link} title={title} />
          <Description video={video} />
        </div>
        {/* <RelatedVideo tags={tags} id={id} /> */}
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
