import React from 'react';
import './assets/css/fonts.css';
import './assets/css/homeBody.css';

interface BodyProps {
  onIncrement: () => void;
}

const Body: React.FC<BodyProps> = ({ onIncrement }) => {
  const handleButtonClick = () => {
    onIncrement();
  };

  return (
    <div className="body">
      <div className="container">
        <h2>Marchandise</h2>
        <p>Ajoutez la marchandise à votre panier :</p>
        <button onClick={handleButtonClick}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Body;
