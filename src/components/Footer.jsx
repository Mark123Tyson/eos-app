import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1a1f29', // lighter than before
    color: 'white',
    padding: '50px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    borderTop: '2px solid #d4af37', // subtle gold accent
    position: 'relative'
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#f0d36f',
    marginBottom: '20px'
  };

  const locationStyle = {
    fontSize: '16px',
    margin: '10px 0',
    transition: 'color 0.3s ease, transform 0.2s ease',
    cursor: 'default'
  };

  const locationHover = (e) => {
    e.target.style.color = '#d4af37';
    e.target.style.transform = 'scale(1.05)';
  };

  const locationUnhover = (e) => {
    e.target.style.color = 'white';
    e.target.style.transform = 'scale(1)';
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '12px 30px',
    backgroundColor: '#f0d36f',
    color: '#111',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease, background 0.2s ease'
  };

  const btnHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.backgroundColor = '#d4af37';
    e.target.style.color = '#111';
  };

  const btnUnhover = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundColor = '#f0d36f';
    e.target.style.color = '#111';
  };

  return (
    <footer style={footerStyle}>
      <h2 style={headingStyle}>BOOK US NOW</h2>
      <div
        style={locationStyle}
        onMouseEnter={locationHover}
        onMouseLeave={locationUnhover}
      >
        📍 Uganda, Kampala, Kisaasi
      </div>
      <div
        style={locationStyle}
        onMouseEnter={locationHover}
        onMouseLeave={locationUnhover}
      >
        📍 Valby, Copenhagen, Denmark
      </div>

      <a
        href="/contact"
        style={linkStyle}
        onMouseEnter={btnHover}
        onMouseLeave={btnUnhover}
      >
        Get in Touch
      </a>
      <p style={{ marginTop: '30px', fontSize: '14px', color: '#ccc' }}>
        &copy; {new Date().getFullYear()} EOS Limitless Pictures. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
