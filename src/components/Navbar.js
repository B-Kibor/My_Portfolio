import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/assets/images/logo.png" alt="Logo" onError={(e) => e.target.style.display = 'none'} />
        </div>
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="home" smooth duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="about" smooth duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="work" smooth duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="contact" smooth duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
