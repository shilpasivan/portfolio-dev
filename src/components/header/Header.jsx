// Header.jsx
import React, { useState } from 'react';
import './Header.css';

function Header({ scrollToHome, scrollToAbout, scrollToExperience, scrollToProjects, scrollToContact }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (scrollFunc) => {
    scrollFunc();
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav className='header'>
       <div className='logo'></div>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Items */}
      <ul className={`ul-style ${menuOpen ? 'open' : ''}`}>
        <li><a className='astyle' onClick={() => handleClick(scrollToHome)}>Home</a></li>
        <li><a className='astyle' onClick={() => handleClick(scrollToAbout)}>About</a></li>
        <li><a className='astyle' onClick={() => handleClick(scrollToExperience)}>Experience</a></li>
        <li><a className='astyle' onClick={() => handleClick(scrollToProjects)}>Projects</a></li>
        <li><a className='astyle' onClick={() => handleClick(scrollToContact)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
