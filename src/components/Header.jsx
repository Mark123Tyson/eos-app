import React from 'react';
import logo from '../assets/logo.png'; // replace with your logo path

const Header = () => {
  const headerStyle = {
    backgroundColor: '#1a1f29', // lighter than pure dark
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 3px 15px rgba(0,0,0,0.4)',
    backdropFilter: 'blur(5px)' // subtle blur for elegance
  };

  const logoStyle = {
    width: '100px', // slightly smaller
    height: 'auto'
  };

  const navStyle = {
    display: 'flex',
    gap: '25px',
    fontWeight: 'bold'
  };

  const linkStyle = {
    color: '#f0d36f', // a lighter gold
    textDecoration: 'none',
    transition: 'color 0.3s ease, transform 0.2s ease'
  };

  const hoverLink = (e) => {
    e.target.style.color = '#d4af37';
    e.target.style.transform = 'scale(1.05)';
  };

  const unhoverLink = (e) => {
    e.target.style.color = '#f0d36f';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <header style={headerStyle}>
      <img src={logo} alt="EOS Limitless Pictures Logo" style={logoStyle} />
      <nav style={navStyle}>
        <a href="/" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={unhoverLink}>Home</a>
        <a href="/services" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={unhoverLink}>Services</a>
        <a href="/about" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={unhoverLink}>About</a>
        <a href="/contact" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={unhoverLink}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
