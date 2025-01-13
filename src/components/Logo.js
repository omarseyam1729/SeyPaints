import React from 'react';
import '../styles/Logo.css'; // Ensure to create a CSS file for styling

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-icon">
        🎨
      </div>
      <h1 className="logo-text">
        <span className="sey">Sey</span>
        <span className="paints">Paint</span>
      </h1>
    </div>
  );
};

export default Logo;
