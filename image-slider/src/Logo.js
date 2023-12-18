import React from 'react';
import logoImage from './logo.png'; // Replace 'logo.png' with your actual logo file

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;