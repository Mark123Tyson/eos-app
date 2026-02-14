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
  { title: 'Post Production', img: product, desc: 'Expert editing, color grading, sound design, and visual enhancement for all media.' }
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
      padding: isMobile ? '80px 20px' : '120px 40px',
      backgroundColor: '#0a0e12', // Matches HomeSection background
      color: 'white',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden'
    },
    heading: {
      fontSize: isMobile ? '36px' : '52px', // Large and bold
      letterSpacing: '4px',
      textTransform: 'uppercase',
      fontWeight: '900',
      margin: '0 0 15px 0',
      textShadow: '0 4px 10px rgba(0,0,0,0.5)'
    },
    line: {
      width: '100px',
      height: '5px',
      backgroundColor: '#d4af37',
      margin: '0 auto 60px auto'
    },
    cardsContainer: {
      display: 'grid',
      // Responsive columns
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 1fr',
      gap: '40px',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    card: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      height: isMobile ? '400px' : '500px', // Taller cards for better presence
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      cursor: 'pointer',
      transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
      border: '1px solid rgba(255,255,255,0.1)'
    },
    imageWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.8s ease'
    },
    // Stronger gradient for better text readability
    cardOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.95) 100%)',
      zIndex: 2
    },
    content: {
      position: 'relative',
      zIndex: 3,
      padding: isMobile ? '25px' : '35px',
      textAlign: 'left',
      width: '100%',
      boxSizing: 'border-box'
    },
    title: {
      fontSize: isMobile ? '26px' : '30px', // Bold, high-visibility title
      fontWeight: '800',
      color: '#d4af37',
      marginBottom: '12px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
    },
    desc: {
      fontSize: isMobile ? '16px' : '18px', // Increased font size for readability
      lineHeight: '1.6',
      color: '#ffffff',
      fontWeight: '500', // Medium weight pops better than thin
      textShadow: '1px 1px 3px rgba(0,0,0,1)',
      margin: 0,
      // Always visible on mobile, hidden on desktop until hover
      opacity: isMobile ? 1 : (hovered !== null ? 1 : 0),
      transform: isMobile ? 'none' : (hovered !== null ? 'translateY(0)' : 'translateY(20px)'),
      transition: 'all 0.4s ease'
    }
  };

  return (
    <section id="services" style={styles.section}>
      <div style={{ animation: 'fadeIn 1s ease-in' }}>
        <h2 style={styles.heading}>Our Services</h2>
        <div style={styles.line}></div>
      </div>

      <div style={styles.cardsContainer}>
        {products.map((p, idx) => {
          const isThisHovered = hovered === idx;

          return (
            <div
              key={idx}
              style={{
                ...styles.card,
                transform: isThisHovered ? 'scale(1.03)' : 'scale(1)',
                borderColor: isThisHovered ? '#d4af37' : 'rgba(255,255,255,0.1)'
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.imageWrapper}>
                <img 
                  src={p.img} 
                  alt={p.title} 
                  style={{
                    ...styles.image,
                    transform: isThisHovered ? 'scale(1.1)' : 'scale(1)',
                    filter: isThisHovered ? 'brightness(1.1)' : 'brightness(0.8)'
                  }} 
                />
                <div style={styles.cardOverlay}></div>
              </div>

              <div style={styles.content}>
                <h3 style={styles.title}>{p.title}</h3>
                <p style={{
                  ...styles.desc,
                  opacity: isMobile || isThisHovered ? 1 : 0,
                  transform: isMobile || isThisHovered ? 'translateY(0)' : 'translateY(20px)'
                }}>
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          /* Prevent horizontal scroll on some browsers */
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}
      </style>
    </section>
  );
};

export default ProductsSection;