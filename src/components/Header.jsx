import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLandscape, setIsLandscape] = useState(window.innerHeight < 500);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsLandscape(window.innerHeight < 500);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    header: {
      backgroundColor: scrolled || menuOpen ? 'rgba(10, 14, 18, 0.98)' : 'rgba(10, 14, 18, 0.8)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // Slimmer padding if device is flipped sideways
      padding: isLandscape ? '10px 25px' : '20px 30px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000,
      boxShadow: scrolled ? '0 5px 20px rgba(0,0,0,0.5)' : 'none',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.4s ease',
      borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
      boxSizing: 'border-box'
    },
    logo: {
      width: isLandscape ? '70px' : '90px',
      height: 'auto',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    hamburger: {
      display: 'flex', // Always visible now
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '35px',
      height: '24px',
      cursor: 'pointer',
      zIndex: 1001,
      userSelect: 'none',
    },
    line: {
      width: '100%',
      height: '4px',
      backgroundColor: '#d4af37',
      borderRadius: '10px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transformOrigin: 'center',
    },
    nav: {
      // Nav is only visible when menuOpen is true
      display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'rgba(10, 14, 18, 0.98)',
      gap: isLandscape ? '20px' : '35px',
      padding: isLandscape ? '30px 0' : '60px 0',
      textAlign: 'center',
      transition: 'all 0.4s ease-in-out',
      borderBottom: '2px solid #d4af37',
      // Ensure long menus are scrollable on short landscape screens
      maxHeight: isLandscape ? '70vh' : 'none',
      overflowY: 'auto'
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '20px', 
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      position: 'relative',
      opacity: menuOpen ? 1 : 0,
      animation: menuOpen ? 'linkFadeIn 0.5s ease forwards' : 'none'
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
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

      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div style={{
          ...styles.line,
          transform: menuOpen ? 'translateY(10px) rotate(45deg)' : 'none'
        }} />
        <div style={{
          ...styles.line,
          opacity: menuOpen ? 0 : 1,
          width: '75%',
          alignSelf: 'flex-end'
        }} />
        <div style={{
          ...styles.line,
          transform: menuOpen ? 'translateY(-10px) rotate(-45deg)' : 'none'
        }} />
      </div>

      <nav style={styles.nav}>
        {['home', 'services', 'photography', 'about', 'contact'].map((id, index) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              ...styles.link,
              animationDelay: `${0.1 + index * 0.1}s`
            }}
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

      <style>
        {`
          @keyframes linkFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </header>
  );
};

export default Header;