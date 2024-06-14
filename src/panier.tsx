import React from 'react';
import './assets/css/panier.css';
import { Animal } from './services';
import Header from './header';
import Footer from './footer';
interface PanierProps {
  panier: Animal[];
  count: number;
}

const Panier: React.FC<PanierProps> = ({ panier, count }) => {
  return (
    <>
    <Header count={count}></Header>
    <div className="panier-container">
      <h1>Panier</h1>
      <p>Nombre d'articles : {count}</p>
      {panier.length === 0 ? (
        <p className="empty-message">Votre panier est vide</p>
      ) : (
        <ul>
          {panier.map((animal, index) => (
            <li key={index}>
              <img src={'./img/' + animal['img-url']} alt={animal.titre} />
              <div>
                <h2>{animal.titre}</h2>
                <p>Prix : {animal.prix}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer></Footer>
    </>
  );
};

export default Panier;
