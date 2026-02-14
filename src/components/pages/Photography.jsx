import React, { useState, useEffect } from 'react';
import photoImg from './../../assets/onlineproduct4.avif';

const ServiceExample = () => {
  const [hovered, setHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 992;

  const styles = {
    wrapper: {
      width: '100%',
      backgroundColor: '#050811', // Matching your "Night Sky" background
      padding: isMobile ? '60px 0' : '100px 0',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    mainContainer: {
      width: isMobile ? '92%' : '85%',
      maxWidth: '1200px',
      backgroundColor: '#0a0e12',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      borderRadius: '4px', // Matches the Danish sharp aesthetic
      border: '1px solid rgba(212, 175, 55, 0.2)',
      overflow: 'hidden',
      boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
      padding: isMobile ? '0' : '10px', // No padding on mobile for full-width feel
    },
    textSide: {
      flex: '1',
      padding: isMobile ? '60px 30px' : '80px 60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'flex-start', // Center on mobile, left on desk
      textAlign: isMobile ? 'center' : 'left',
      backgroundColor: '#0d1218',
      position: 'relative',
      overflow: 'hidden',
      // The "Sand Crystal" pattern we used in Products
      backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 0)`,
      backgroundSize: '40px 40px',
    },
    category: {
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '6px',
      fontSize: '11px',
      fontWeight: 'bold',
      marginBottom: '20px',
      position: 'relative',
      zIndex: 2,
    },
    heading: {
      fontSize: isMobile ? '36px' : '48px',
      fontWeight: '900',
      color: '#fff',
      margin: '0 0 25px 0',
      lineHeight: '1.1',
      textTransform: 'uppercase',
      position: 'relative',
      zIndex: 2,
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#94a3b8',
      margin: 0,
      maxWidth: '450px',
      position: 'relative',
      zIndex: 2,
    },
    imageSide: {
      flex: '1.2', // Slightly wider image side for impact
      position: 'relative',
      cursor: 'pointer',
      overflow: 'hidden',
    },
    customCard: {
      width: '100%',
      height: '100%',
      position: 'relative',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      // Responsive ClipPath
      clipPath: isMobile 
        ? 'none' 
        : 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)', 
      backgroundColor: '#000',
    },
    img: {
      width: '100%',
      height: '100%',
      minHeight: isMobile ? '400px' : '550px',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 1.5s ease, filter 1s ease',
      transform: hovered ? 'scale(1.1)' : 'scale(1)',
      filter: hovered ? 'brightness(0.5) contrast(1.1)' : 'brightness(0.7)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 3,
      background: hovered ? 'rgba(0,0,0,0.2)' : 'transparent',
      transition: 'background 0.5s ease'
    },
    btn: {
      backgroundColor: '#d4af37',
      color: '#0a0e12',
      border: '1px solid #d4af37',
      padding: '16px 36px',
      fontSize: '13px',
      fontWeight: 'bold',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      borderRadius: '2px',
      opacity: hovered ? '1' : '0',
      transform: hovered ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.mainContainer}>
        
        <div style={styles.textSide}>
          {/* Subtle gold glow behind the text */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 60%)',
            pointerEvents: 'none'
          }} />

          <span style={styles.category}>Visual Excellence</span>
          <h2 style={styles.heading}>
            Photography <br/> <span style={{ color: '#d4af37' }}>With Vision</span>
          </h2>
          <p style={styles.description}>
            Transforming raw moments into timeless cinematic stories. 
            We bridge the gap between technical Danish precision and 
            the soulful, limitless energy of Uganda.
          </p>
        </div>

        <div 
          style={styles.imageSide}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div style={styles.customCard}>
            <img 
              src={photoImg} 
              alt="EOS Photography" 
              style={styles.img} 
            />
            
            <div style={styles.overlay}>
              <button 
                style={styles.btn}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#d4af37';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#d4af37';
                  e.target.style.color = '#0a0e12';
                }}
              >
                Book Session
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceExample;