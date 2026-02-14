import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#1a1f29',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    boxShadow: '0 3px 15px rgba(0,0,0,0.4)',
    backdropFilter: 'blur(5px)'
  };

  const logoStyle = { width: '100px', height: 'auto' };
  const navStyle = { display: 'flex', gap: '30px', fontWeight: 'bold' };
  const linkStyle = {
    color: '#f0d36f',
    textDecoration: 'none',
    transition: 'color 0.3s ease, transform 0.2s ease',
    cursor: 'pointer'
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const hoverLink = (e) => { e.target.style.color = '#d4af37'; e.target.style.transform = 'scale(1.05)'; };
  const unhoverLink = (e) => { e.target.style.color = '#f0d36f'; e.target.style.transform = 'scale(1)'; };

  return (
    <header style={headerStyle}>
      <img src={logo} alt="EOS Logo" style={logoStyle} />
      <nav style={navStyle}>
        {['home', 'services', 'photography', 'about', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={linkStyle}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            onMouseEnter={hoverLink}
            onMouseLeave={unhoverLink}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
