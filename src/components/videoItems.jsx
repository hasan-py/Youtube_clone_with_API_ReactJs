import React from "react";


const VideoItem =  ({ video, onVideoSelect }) => {
  return (
      
      <div className="card border-0 mr-0 mb-2" style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img className="img-fluid img-top" style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <div className="card-body">
          <h5>{video.snippet.title}</h5>
          <h6 className="text-muted">by {video.snippet.channelTitle}</h6>
        </div>
      </div>
  )
}

export default VideoItem