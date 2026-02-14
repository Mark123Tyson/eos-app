import React from 'react';
import mainImg from '../assets/background1.jpg';

const HeroSection = () => {
  const heroStyle = {
    width: '100%',
    minHeight: '80vh',
    backgroundImage: `url(${mainImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(11,15,20,0.6)', // dark overlay for readability
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '900px',
    padding: '20px'
  };

  const headingStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#d4af37', // gold accent
    letterSpacing: '1px'
  };

  const subheadingStyle = {
    fontSize: '20px',
    opacity: 0.9,
    marginBottom: '30px'
  };

  const btnStyle = {
    display: 'inline-block',
    padding: '14px 30px',
    backgroundColor: '#9a9a10',
    color: 'white',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease, background 0.2s ease'
  };

  const btnHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.backgroundColor = '#d4af37';
  };

  const btnUnhover = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundColor = '#9a9a10';
  };

  return (
    <section style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Welcome to EOS Limitless Pictures</h1>
        <p style={subheadingStyle}>Your one-stop creative production company</p>
        <a
          href="/services"
          style={btnStyle}
          onMouseEnter={btnHover}
          onMouseLeave={btnUnhover}
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
