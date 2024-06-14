import './assets/css/home.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

interface HomeProps {
  count: number;
}

const Home: React.FC<HomeProps> = ({ count }) => {
  return (
    <div>
      <Header count={count} />

      <main className="home">
        <section className="banner">
          <div className="container">
            <h1>Bienvenue à Animal Center</h1>
            <p>Trouvez tout ce dont vos animaux de compagnie ont besoin!</p>
            <Link to='/services' className='shop-now'>Magasinnez maintenant</Link>
          </div>
        </section>

        <section className="categories">
          <div className="container">
            <h2>Catégories populaires</h2>
            <div className="category-grid">
              <div className="category-item">
                <img src="/img/maine-coon-histoire.jpg" alt="Nourriture pour chats" />
                <h3>Chat</h3>
              </div>
              <div className="category-item">
                <img src="/img/coup-mise-au-point-peu-profonde-mignon-chiot-golden-retriever-assis-sol-herbe.jpg" alt="Jouets pour chiens" />
                <h3>Chiens</h3>
              </div>
              <div className="category-item">
                <img src="/img/perroquet.jpg" alt="Cages pour oiseaux" />
                <h3>Oiseaux</h3>
              </div>
              <div className="category-item">
                <img src="/img/bitro.jpg" alt="Aquariums" />
                <h3>Lapin</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <h2>Témoignages</h2>
            <div className="testimonial-grid">
              <div className="testimonial-item">
                <p>"Animal Center a tout ce dont j'ai besoin pour mon chat!"</p>
                <p>- Alice</p>
              </div>
              <div className="testimonial-item">
                <p>"Service incroyable et produits de qualité."</p>
                <p>- Jean</p>
              </div>
              <div className="testimonial-item">
                <p>"Mes poissons adorent leur nouvel aquarium!"</p>
                <p>- Marie</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
