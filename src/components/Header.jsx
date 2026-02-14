import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; 

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
      backgroundColor: scrolled || menuOpen ? 'rgba(10, 14, 18, 0.98)' : 'rgba(10, 14, 18, 0.8)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '15px 25px' : '15px 50px',
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
      width: isMobile ? '80px' : '100px',
      height: 'auto',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      borderRadius: '8px',
    },
    hamburger: {
      display: isMobile ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '35px',   // Width of the icon
      height: '24px',  // Height of the stack
      cursor: 'pointer',
      zIndex: 1001,
      userSelect: 'none',
      transition: 'all 0.3s ease',
    },
    line: {
      width: '100%',
      height: '4px', // Thicker lines for visibility
      backgroundColor: '#d4af37',
      borderRadius: '10px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transformOrigin: 'center',
    },
    nav: {
      display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'absolute' : 'static',
      top: isMobile ? '100%' : 'auto',
      left: 0,
      right: 0,
      backgroundColor: isMobile ? 'rgba(10, 14, 18, 0.98)' : 'transparent',
      gap: isMobile ? '30px' : '35px',
      padding: isMobile ? '60px 0' : '0',
      textAlign: 'center',
      transition: 'all 0.4s ease-in-out',
      borderBottom: isMobile && menuOpen ? '2px solid #d4af37' : 'none',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: isMobile ? '20px' : '14px', // Larger font for mobile links
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      position: 'relative',
      opacity: isMobile && !menuOpen ? 0 : 1,
      animation: isMobile && menuOpen ? 'linkFadeIn 0.5s ease forwards' : 'none'
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

      {/* CUSTOM CSS HAMBURGER */}
      <div 
        style={styles.hamburger} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
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
              animationDelay: isMobile ? `${0.2 + index * 0.1}s` : '0s'
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