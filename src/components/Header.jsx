import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // Make sure this path points to your actual logo image

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = screenWidth <= 768;

  const styles = {
    header: {
      backgroundColor: scrolled || menuOpen ? 'rgba(10, 14, 18, 0.95)' : 'rgba(10, 14, 18, 0.8)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '10px 20px' : '15px 50px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: scrolled ? '0 5px 20px rgba(0,0,0,0.5)' : 'none',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.4s ease',
      borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent'
    },
    logo: {
      width: isMobile ? '70px' : '90px',
      height: 'auto',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      borderRadius: '8px', // <<< ADDED THIS LINE for rounded corners
      overflow: 'hidden' // Important for borderRadius to apply cleanly to the image itself
    },
    nav: {
      display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'absolute' : 'static',
      top: isMobile ? '100%' : 'auto',
      left: 0,
      right: 0,
      backgroundColor: isMobile ? 'rgba(10, 14, 18, 0.98)' : 'transparent',
      gap: isMobile ? '25px' : '35px',
      padding: isMobile ? '40px 0' : '0',
      textAlign: 'center',
      transition: 'all 0.3s ease-in-out',
      borderBottom: isMobile && menuOpen ? '2px solid #d4af37' : 'none'
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      position: 'relative'
    },
    hamburger: {
      fontSize: '30px',
      color: '#d4af37',
      cursor: 'pointer',
      display: isMobile ? 'block' : 'none',
      transition: 'transform 0.3s ease'
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <img 
        src={logo} 
        alt="EOS Logo" 
        style={styles.logo} 
        onClick={() => scrollTo('home')}
      />

      <div
        style={{
          ...styles.hamburger,
          transform: menuOpen ? 'rotate(90deg)' : 'rotate(0)'
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </div>

      <nav style={styles.nav}>
        {['home', 'services', 'photography', 'about', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#d4af37'}
            onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(id);
            }}
          >
            {id}
          </a>
        ))}
      </nav>

      {/* Global CSS for the Hover Underline Effect */}
      <style>
        {`
          @media (min-width: 769px) {
            nav a::after {
              content: '';
              position: absolute;
              width: 0;
              height: 2px;
              bottom: -5px;
              left: 0;
              background-color: #d4af37;
              transition: width 0.3s ease;
            }
            nav a:hover::after {
              width: 100%;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;