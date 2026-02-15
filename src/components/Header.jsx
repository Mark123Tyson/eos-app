import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true); // Controls the "Appear/Hide"
  const [scrolled, setScrolled] = useState(false);
  
  const scrollTimer = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 1024) setMenuOpen(false);
    };

    const handleScroll = () => {
      // 1. Check if we've scrolled past the hero
      setScrolled(window.scrollY > 50);

      // 2. Medium/Small device logic: Hide while moving
      if (window.innerWidth <= 1024) {
        setVisible(false); // Hide immediately on scroll start

        // 3. Clear existing timer and set a new one
        clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => {
          setVisible(true); // Show when scroll stops
        }, 150); // Delay in milliseconds after stop
      } else {
        setVisible(true); // Always visible on Desktop
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer.current);
    };
  }, []);

  const isDesktop = screenWidth > 1024;
  const isLandscape = window.innerHeight < 500 && !isDesktop;

  const styles = {
    header: {
      backgroundColor: scrolled || menuOpen ? 'rgba(10, 14, 18, 0.98)' : 'rgba(10, 14, 18, 0.8)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isDesktop ? '15px 80px' : '15px 25px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
      boxSizing: 'border-box',
      // THE MAGIC: Transition for hiding/showing
      transition: 'transform 0.4s ease, background-color 0.4s ease, opacity 0.4s ease',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      opacity: visible ? 1 : 0,
    },
    logo: {
      width: isDesktop ? '100px' : '80px',
      height: 'auto',
      cursor: 'pointer',
      borderRadius: '25% 0% 25% 0%', // Unique shape for the logo
      transition: 'all 0.3s ease',
    },
    // ... (rest of the styles stay the same as previous Header code)
    hamburger: {
      display: isDesktop ? 'none' : 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '35px',
      height: '24px',
      cursor: 'pointer',
      zIndex: 1001,
    },
    line: {
      width: '100%',
      height: '4px',
      backgroundColor: '#d4af37',
      borderRadius: '10px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    nav: {
      display: isDesktop ? 'flex' : (menuOpen ? 'flex' : 'none'),
      flexDirection: isDesktop ? 'row' : 'column',
      position: isDesktop ? 'static' : 'absolute',
      top: isDesktop ? 'auto' : '100%',
      left: 0,
      right: 0,
      backgroundColor: isDesktop ? 'transparent' : 'rgba(10, 14, 18, 0.98)',
      gap: isDesktop ? '35px' : '30px',
      padding: isDesktop ? '0' : (isLandscape ? '30px 0' : '60px 0'),
      textAlign: 'center',
      alignItems: 'center',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: isDesktop ? '13px' : '20px', 
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: isDesktop ? '2px' : '4px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <img src={logo} alt="EOS Logo" style={styles.logo} onClick={() => scrollTo('home')} />

      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div style={{...styles.line, transform: menuOpen ? 'translateY(10px) rotate(45deg)' : 'none'}} />
        <div style={{...styles.line, opacity: menuOpen ? 0 : 1, width: '75%', alignSelf: 'flex-end'}} />
        <div style={{...styles.line, transform: menuOpen ? 'translateY(-10px) rotate(-45deg)' : 'none'}} />
      </div>

      <nav style={styles.nav}>
        {['home', 'services', 'photography', 'about', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={styles.link}
            onMouseEnter={(e) => e.target.style.color = '#d4af37'}
            onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
          >
            {id}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;