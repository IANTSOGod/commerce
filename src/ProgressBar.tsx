// src/ProgressBar.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/ProgressBar.css';

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress(prevProgress => prevProgress + 1);
      }, 50);

      return () => clearInterval(timer);
    } else {
      navigate('/home'); 
    }
  }, [progress, navigate]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
      </div>
    </div>
  );
};

export default ProgressBar;
