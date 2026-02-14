import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 768;

  const headerStyle = {
    backgroundColor: '#1a1f29',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    boxShadow: '0 3px 15px rgba(0,0,0,0.4)',
    backdropFilter: 'blur(5px)'
  };

  const logoStyle = {
    width: isMobile ? '80px' : '100px',
    height: 'auto'
  };

  const navStyle = {
    display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    position: isMobile ? 'absolute' : 'static',
    top: isMobile ? '70px' : 'auto',
    left: 0,
    right: 0,
    backgroundColor: isMobile ? '#1a1f29' : 'transparent',
    gap: isMobile ? '20px' : '30px',
    padding: isMobile ? '20px 0' : '0',
    textAlign: 'center',
    fontWeight: 'bold'
  };

  const linkStyle = {
    color: '#f0d36f',
    textDecoration: 'none',
    fontSize: isMobile ? '16px' : '16px',
    cursor: 'pointer'
  };

  const hamburgerStyle = {
    fontSize: '28px',
    color: '#f0d36f',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none'
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false); // close menu after click
    }
  };

  return (
    <header style={headerStyle}>
      <img src={logo} alt="EOS Logo" style={logoStyle} />

      {/* Hamburger Icon */}
      <div
        style={hamburgerStyle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </div>

      <nav style={navStyle}>
        {['home', 'services', 'photography', 'about', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={linkStyle}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(id);
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
