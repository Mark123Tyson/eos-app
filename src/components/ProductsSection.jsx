import React, { useState, useEffect } from 'react';
import portrait from '../assets/product1.jpg';
import horse from '../assets/product2.jpg';
import product from '../assets/product3.jpg';
import eventsImg from '../assets/cameraset.jpg';
import documentaryImg from '../assets/documentary.jpg';
import abstractImg from '../assets/abstract.jpeg';

const products = [
  { title: 'Portraits', img: portrait, desc: 'Professional portraits that capture personality, emotion, and style with precision.' },
  { title: 'Events', img: eventsImg, desc: 'Documenting weddings, corporate events, and social gatherings with a cinematic lens.' },
  { title: 'Documentary', img: documentaryImg, desc: 'Cinematic storytelling designed to showcase real-life events and powerful narratives.' },
  { title: 'Abstract', img: abstractImg, desc: 'Creative and artistic compositions for modern and abstract visuals and branding.' },
  { title: 'Videography', img: horse, desc: 'Cinematic storytelling, commercials, documentaries, and high-end event coverage.' },
  { title: 'Post-Production', img: product, desc: 'Expert editing, color grading, sound design, and visual enhancement for all media.' }
];

const ProductsSection = () => {
  const [hovered, setHovered] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 600;
  const isTablet = screenWidth <= 1024;

  const styles = {
    section: {
      position: 'relative',
      /* FIXED: Significant top padding for Mobile/Tablet to clear the fixed header */
      padding: isMobile ? '100px 20px 40px 20px' : isTablet ? '90px 30px 50px 30px' : '30px 40px 50px 40px',
      backgroundColor: '#050811',
      backgroundImage: `
        radial-gradient(circle, rgba(200, 200, 200, 0.4) 0.5px, transparent 0.5px),
        radial-gradient(circle, rgba(212, 175, 55, 0.2) 0.5px, transparent 0.5px)
      `,
      backgroundSize: '40px 40px, 60px 60px',
      color: 'white',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: '-15px', 
      zIndex: 5
    },
    heading: { 
      fontSize: isMobile ? '36px' : '48px', // Increased
      letterSpacing: '5px', 
      textTransform: 'uppercase', 
      fontWeight: '900', 
      margin: '0 0 10px 0' 
    },
    line: { 
      width: '70px', 
      height: '4px', 
      backgroundColor: '#d4af37', 
      margin: '0 auto 40px auto' 
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 1fr',
      gap: '25px', 
      maxWidth: '1400px',
      margin: '0 auto'
    },
    card: {
      position: 'relative',
      height: '480px', 
      borderRadius: '20px',
      overflow: 'hidden',
      backgroundColor: '#050811',
      border: '1px solid rgba(255,255,255,0.12)',
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '30px 25px'
    },
    baseImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1,
      opacity: 0.3,
      filter: 'grayscale(50%) blur(1px)', 
      transition: '0.6s ease'
    },
    lensImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 2,
      clipPath: 'circle(35% at 50% 38%)', 
      transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
    },
    outerRing: {
      position: 'absolute',
      top: '38%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '78%', 
      paddingBottom: '78%', 
      borderRadius: '50%',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      zIndex: 2,
      pointerEvents: 'none'
    },
    innerRing: {
      position: 'absolute',
      top: '38%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '68%', 
      paddingBottom: '68%', 
      borderRadius: '50%',
      border: '2px solid #d4af37',
      boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)',
      zIndex: 3,
      pointerEvents: 'none',
      transition: 'all 0.5s ease'
    },
    textContainer: { position: 'relative', zIndex: 4, textAlign: 'center' },
    title: {
      fontSize: '26px', // Increased from 24px
      fontWeight: '900',
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '10px',
      textShadow: '0 2px 10px rgba(0,0,0,1)'
    },
    desc: {
      fontSize: '18px', // Increased from 17px
      fontWeight: '500', 
      color: '#ffffff',
      lineHeight: '1.5',
      opacity: 0.95,
      margin: 0
    }
  };

  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.heading}>Professional Services</h2>
      <div style={styles.line}></div>
      
      <div style={styles.cardsContainer}>
        {products.map((p, idx) => (
          <div
            key={idx}
            style={{
              ...styles.card,
              borderColor: hovered === idx ? '#d4af37' : 'rgba(255,255,255,0.12)',
              transform: hovered === idx ? 'translateY(-8px)' : 'none',
              boxShadow: hovered === idx ? '0 15px 30px rgba(0,0,0,0.8)' : 'none'
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <img 
              src={p.img} 
              alt="bg" 
              style={{
                ...styles.baseImage,
                opacity: hovered === idx ? 0.45 : 0.25,
                filter: hovered === idx ? 'grayscale(0%) blur(0px)' : 'grayscale(50%) blur(1px)'
              }} 
            />

            <div style={styles.outerRing}></div>
            <div style={{
              ...styles.innerRing,
              transform: hovered === idx ? 'translate(-50%, -50%) scale(1.03)' : 'translate(-50%, -50%) scale(1)',
              borderColor: hovered === idx ? '#d4af37' : 'rgba(212, 175, 55, 0.6)'
            }}></div>

            <img 
              src={p.img} 
              alt={p.title} 
              style={{
                ...styles.lensImage,
                transform: hovered === idx ? 'scale(1.12)' : 'scale(1.02)', 
                clipPath: hovered === idx ? 'circle(38% at 50% 38%)' : 'circle(35% at 50% 38%)',
                filter: hovered === idx ? 'brightness(1.1)' : 'brightness(0.85)'
              }} 
            />

            <div style={styles.textContainer}>
              <h3 style={styles.title}>{p.title}</h3>
              <p style={styles.desc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;