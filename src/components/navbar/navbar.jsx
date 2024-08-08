import React, { useState, useEffect } from 'react';
import './navbar.css';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleMouseMove = (event) => {
    if (event.clientY <= 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 992) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`navbar ${showNavbar ? '' : 'hidden'}`}>
      <button onClick={toggleNavbar} className="navbar-toggler">
        ☰
      </button>
      <div className={`menu ${isOpen ? 'open' : 'close'}`}>
        <a href="#home" className="menuitem" onClick={closeNavbar}>
          Home
        </a>
        <a href="#education" className="menuitem" onClick={closeNavbar}>
          Education
        </a>
        <a href="#skills" className="menuitem" onClick={closeNavbar}>
          Skills
        </a>
        <a href="#experience" className="menuitem" onClick={closeNavbar}>
          Experience
        </a>
        <a href="#knowme" className="menuitem" onClick={closeNavbar}>
          Know Me
        </a>
        <a href="#contactme" className="menuitem" onClick={closeNavbar}>
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default CustomNavbar;
