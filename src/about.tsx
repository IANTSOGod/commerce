import './assets/css/fonts.css';
import './assets/css/about.css'
import Header from './header';
import Footer from './footer';

interface ServicesProps {
  count: number;
}

const About: React.FC<ServicesProps> = ({count}) => {

  return (
    <div>
      <Header count={count} />
      <div className="container">
      <div className="content-table">
        <div className="table-row">
          <div className="table-cell">
            <img src={"./img/image1.jpg"} alt="Image 1"/>
          </div>
          <div className="table-cell">
            <p className="redac">Nos services</p>
            <div className="redac1">
                <p>Nous proposons une gamme complete de services pour répondre à tous les besoins de vos animaux de companie</p>
            </div>
        </div>
        </div>
        <div className="table-row">
            <div className="table-cell">
                <p className="redac">Nos installations</p>
                    <div className="redac1">
                        <p>Nos installations modernes sont équipées des dernières technologies pour assurer le confort et la sécurité de vos animaux.</p>
                        <p>Nous disposons de salles d'examen bien équipées, de salles de chirurgie stériles, de laboratoires de diagnostic et d'espaces de convalescence pour assurer des soins de qualité à chaque étape du traitement.</p>        
                    </div>
            </div>
            <div className="table-cell">
            <img src={"./img/image2.jpg"} alt="Image 2"/>
          </div>
        
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default About;
