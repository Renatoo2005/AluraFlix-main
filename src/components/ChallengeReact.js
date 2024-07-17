import React, { useState } from 'react';
import './ChallengeReact.css';
import videoImage from '../Imagenes/Video1.PNG';
import backgroundImage from '../Imagenes/Alura.PNG';
import Modal from './Modal';

const ChallengeReact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="challenge" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="challenge-content">
        <button className="challenge-button">FRONTEND</button>
        <h1 className="challenge-title">Challenge React</h1>
        <p className="challenge-description">
          Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className="challenge-image" onClick={handleImageClick}>
        <img src={videoImage} alt="Imagen del video" />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} videoSrc="https://www.youtube.com/embed/ov7vA5HFe6w" />
    </div>
  );
};

export default ChallengeReact;
