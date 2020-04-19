import React from "react";
import VideoItem from "./videoItems";


const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <div className="Container">
      {listOfVideos}
    </div>
  );
}


export default VideoList