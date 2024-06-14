import React from 'react';
import './assets/css/fonts.css';
import './assets/css/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>2024</p><p className='others'>&copy;Animal center. All Rights Reserved.</p>
        <ul className="social">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
