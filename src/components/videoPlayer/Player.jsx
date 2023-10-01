import React from "react";

const Player = () => {
  return (
    <>
      <iframe
        width="100%"
        className="aspect-video"
        src="https://www.youtube.com/embed/aDT2ITzVY_Y?si=TWPaHk7epMivWeNC"
        title="Some video title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </>
  );
};

export default Player;
