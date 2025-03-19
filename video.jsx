import React, { useState } from "react";
import './video.css';

const Thumbnail = ({ video }) => {
  return (
    <img
      src={video.thumbnail} 
      alt={video.title}
      className="thumbnail"
    />
  );
};

const LikeButton = ({ video }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button className="like-button" onClick={() => setLiked(!liked)}>
      {liked ? "❤️" : "🤍"} 
    </button>
  );
};

// Video Component:)
function Video({ video }) {
  return (
    <div className="video-card">
      <Thumbnail video={video} />
      <div className="video-info">
        <a href={video.url} target="_blank" rel="noopener noreferrer">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
      </div>
      <LikeButton video={video} />
    </div>
  );
}

export default Video;
