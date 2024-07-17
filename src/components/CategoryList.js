import React from 'react';
import VideoCard from './VideoCard';
import './CategoryList.css';

const CategoryList = ({ category }) => {
  return (
    <div className="category-list" style={{ backgroundColor: 'black', padding: '20px', color: 'white' }}>
      <h2>{category.name}</h2>
      <div className="video-container">
        {category.videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
