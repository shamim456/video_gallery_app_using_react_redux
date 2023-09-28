import React from "react";
import Navbar from "../layouts/navbar/Navbar";
import Tags from "../components/video_tags/Tags";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import Footer from "../layouts/footer/Footer";
import Pagination from "../components/UI/Pagination";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
