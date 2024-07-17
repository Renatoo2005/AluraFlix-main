import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ChallengeReact from './components/ChallengeReact';
import CategoryList from './components/CategoryList';

const App = () => {
  const data = [
    {
      name: 'FrontEnd',
      videos: [
        { id: 'video1', title: 'Video 1', description: 'Descripción del video 1', thumbnail: './Imagenes/Video2.PNG' },
        { id: 'video2', title: 'Video 2', description: 'Descripción del video 2', thumbnail: './Imagenes/Video3.PNG' },
        { id: 'video3', title: 'Video 3', description: 'Descripción del video 3', thumbnail: './Imagenes/Video4.PNG' },
      ],
    },
    {
      name: 'BackEnd',
      videos: [
        { id: 'video4', title: 'Video 4', description: 'Descripción del video 4', thumbnail: './Imagenes/Video4.PNG' },
        { id: 'video5', title: 'Video 5', description: 'Descripción del video 5', thumbnail: './Imagenes/Video4.PNG' },
      ],
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <ChallengeReact />
      {data.map(category => (
        <CategoryList key={category.name} category={category} />
      ))}
    </div>
  );
};

export default App;
  