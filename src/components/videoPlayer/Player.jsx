import React from "react";

const Player = ({ title, link }) => {
  return (
    <>
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </>
  );
};

export default Player;
