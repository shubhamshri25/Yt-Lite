import React from "react";

const VideoPlay = ({ selectedVideos }) => {
  return (
    <div className="video-play">
      {selectedVideos && (
        <div>
          <iframe
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${selectedVideos.id.videoId}`}
          ></iframe>
          <h3>Title - {selectedVideos.snippet.title}</h3>
        </div>
      )}
    </div>
  );
};

export default VideoPlay;
