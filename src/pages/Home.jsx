import React from "react";

import Tags from "../components/video_tags/Tags";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import Pagination from "../components/UI/Pagination";
import PublicLayout from "../layouts/PublicLayout";

const Home = () => {
  return (
    <PublicLayout>
      <Tags />
      <VideoGrid />
      <Pagination />
    </PublicLayout>
  );
};

export default Home;
