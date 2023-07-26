import React from "react";

const VideoList = ({ videos, setSelectedVideos }) => {
  return (
    <div className="video-list">
      {videos &&
        videos.map((value, index) => (
          <div key={index} onClick={() => setSelectedVideos(value)}>
            <img
              src={value.snippet.thumbnails.medium.url}
              alt={value.snippet.description}
            />
          </div>
        ))}
    </div>
  );
};

export default VideoList;
