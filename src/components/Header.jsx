import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const scrollTimer = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 1024) setMenuOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.innerWidth <= 1024) {
        setVisible(false);
        clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => setVisible(true), 150);
      } else {
        setVisible(true);
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

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const styles = {
    header: {
      /* FIXED: Reverted to the discussed #0a0e12 color palette */
      backgroundColor:
        scrolled || menuOpen
          ? 'rgba(10, 14, 18, 0.98)'
          : 'rgba(10, 14, 18, 0.8)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isDesktop
        ? scrolled
          ? '12px 80px'
          : '20px 80px'
        : '15px 25px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      transition: 'all 0.4s ease',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      opacity: visible ? 1 : 0,
    },

    logo: {
      width: isDesktop ? (scrolled ? '90px' : '110px') : '80px',
      cursor: 'pointer',
      borderRadius: '25% 0% 25% 0%',
      transition: 'all 0.4s ease',
    },

    hamburger: {
      display: isDesktop ? 'none' : 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '32px',
      height: '20px',
      cursor: 'pointer',
      zIndex: 1002,
    },

    line: {
      width: '100%',
      height: '4px',
      backgroundColor: '#d4af37',
      borderRadius: '10px',
      transition: 'all 0.3s ease',
    },

    nav: {
      display: isDesktop ? 'flex' : menuOpen ? 'flex' : 'none',
      flexDirection: isDesktop ? 'row' : 'column',
      position: isDesktop ? 'static' : 'absolute',
      top: isDesktop ? 'auto' : '100%',
      left: 0,
      right: 0,
      height: isDesktop ? 'auto' : '100vh',
      /* FIXED: Reverted to the discussed #0a0e12 color palette */
      backgroundColor: isDesktop
        ? 'transparent'
        : 'rgba(10, 14, 18, 0.98)',
      gap: isDesktop ? '35px' : '30px',
      padding: isDesktop
        ? '0'
        : isLandscape
        ? '30px 0'
        : '100px 0',
      textAlign: 'center',
      alignItems: 'center',
      zIndex: 1001,
    },

    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: isDesktop ? '12px' : '20px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <header style={styles.header}>
      <img
        src={logo}
        alt="Logo"
        style={styles.logo}
        onClick={() => scrollTo('home')}
      />

      <div
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          style={{
            ...styles.line,
            transform: menuOpen
              ? 'translateY(8.5px) rotate(45deg)'
              : 'none',
          }}
        />
        <div
          style={{
            ...styles.line,
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <div
          style={{
            ...styles.line,
            transform: menuOpen
              ? 'translateY(-8.5px) rotate(-45deg)'
              : 'none',
          }}
        />
      </div>

      <nav style={styles.nav}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={styles.link}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(item.id);
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = '#d4af37')
            }
            onMouseLeave={(e) =>
              (e.target.style.color = '#ffffff')
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;