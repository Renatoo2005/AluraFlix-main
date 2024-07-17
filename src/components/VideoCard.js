import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const handleCardClick = () => {
    window.open(`https://www.youtube.com/embed/${video.id}`, "_blank");
  };

  return (
    <div className="video-card" onClick={handleCardClick}>
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoCard;
