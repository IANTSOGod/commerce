import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faInfoCircle, faCog, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import logo from '/img/cat.png'; 
import './assets/css/fonts.css';
import './assets/css/header.css'; 

interface HeaderProps {
  count: number;
}

const Header: React.FC<HeaderProps> = ({ count }) => {

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" className='cat-logo' />
          <Link to="/home" className='labell'>Animal center</Link>
        </div>
        
        <nav className="nav">
          <ul>
            <li>
              <Link to="/panier" className='special_a'>
                <FontAwesomeIcon icon={faShoppingBag} />
                {count > 0 && <span className="count">{count}</span>}
              </Link>
            </li>
            <li><Link to="/panier" className='special_link'>Panier</Link></li>
            <li><Link to="/about" className='special_a'><FontAwesomeIcon icon={faInfoCircle} /></Link></li>
            <li><Link to="/about" className='special_link'>About</Link></li>
            <li><Link to="/services" className='special_a'><FontAwesomeIcon icon={faCog} /></Link></li>
            <li><Link to="/services" className='special_link'>Services</Link></li>
            <li><Link to="/contact" className='special_a'><FontAwesomeIcon icon={faEnvelope} /></Link></li>
            <li><Link to="/contact" className='special_link'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
