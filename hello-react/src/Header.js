import React from 'react';
import Navigation from './Navigation'; 
import './Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="developer-name">Your Name</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
