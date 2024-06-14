import './assets/css/fonts.css';
import './assets/css/services.css';
import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';

export interface Animal {
  titre: string;
  description: string;
  'img-url': string;
  nombre: string;
  prix: string;
}

interface ServicesProps {
  panier: Animal[];
  setPanier: React.Dispatch<React.SetStateAction<Animal[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Services: React.FC<ServicesProps> = ({ panier,  setPanier, count, setCount }) => {
  const [data, setData] = useState<{ [key: string]: Animal }>({});

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/jsons/articles.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      
    };

    fetchData();
  }, []);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const addToCart = (animal: Animal) => {
    const newAnimal = [...panier];
    newAnimal.push(animal);
    setPanier(newAnimal);
    localStorage.setItem('animal' , JSON.stringify(newAnimal));
    incrementCount();
  };


  return (
    <div className="serv">
      <Header count={count} />
      <div className="all">
        {Object.entries(data).map(([key, animal]) => (
          <div key={key} className="animal">
            <h2>{animal.titre}</h2>
            <img src={'./img/' + animal['img-url']} alt={animal.titre} />
            <p>{animal.description}</p>
            <p>Prix : {animal.prix}</p>
            <button onClick={() => addToCart(animal)} className='add'>Acheter</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
