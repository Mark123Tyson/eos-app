import React, { useState, useEffect } from 'react';
import founderImg from '../assets/founder.avif';

const AboutPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 992;

  const styles = {
    section: {
      backgroundColor: '#0a0e12',
      color: 'white',
      padding: isMobile ? '60px 20px' : '100px 5vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    // The main content box that frames everything
    contentWrapper: {
      width: '90%',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      gap: isMobile ? '40px' : '80px',
      backgroundColor: '#0d1218',
      padding: isMobile ? '30px' : '60px',
      borderRadius: '20px',
      border: '1px solid rgba(212, 175, 55, 0.15)',
      boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
      // Subtle textured background matching the service section
      backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 0)`,
      backgroundSize: '40px 40px',
    },
    imageSide: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
    },
    imgFrame: {
      width: isMobile ? '220px' : '350px',
      height: isMobile ? '220px' : '350px',
      borderRadius: '50%',
      padding: '8px',
      border: '4px solid #e6e2d8',
      boxShadow: '0 10px 40px rgba(212, 175, 55, 0.2)',
    },
    img: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      filter: 'grayscale(20%)',
    },
    textSide: {
      flex: '1.5',
      textAlign: isMobile ? 'center' : 'left',
    },
    label: {
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginBottom: '15px',
      display: 'block'
    },
    heading: {
      fontSize: isMobile ? '36px' : '52px',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '30px',
      textTransform: 'uppercase',
    },
    textBody: {
      fontSize: '18px',
      lineHeight: '1.8',
      color: '#b0b0b0',
      textAlign: isMobile ? 'center' : 'justify',
    },
    btn: {
      display: 'inline-block',
      marginTop: '40px',
      padding: '16px 40px',
      backgroundColor: btnHovered ? '#fff' : '#d4af37',
      color: '#000',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: '900',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      boxShadow: btnHovered ? '0 0 30px rgba(212, 175, 55, 0.5)' : 'none',
      transform: btnHovered ? 'translateY(-5px)' : 'translateY(0)',
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.contentWrapper}>
        
        {/* IMAGE SIDE */}
        <div style={styles.imageSide}>
          <div style={styles.imgFrame}>
            <img src={founderImg} alt="Founder" style={styles.img} />
          </div>
        </div>

        {/* TEXT SIDE */}
        <div style={styles.textSide}>
          <span style={styles.label}>Since 2020</span>
          <h1 style={styles.heading}>The Visionary <br/><span style={{color: '#d4af37'}}>Behind EOS</span></h1>
          
          <div style={styles.textBody}>
            <p style={{marginBottom: '20px', fontWeight: 'bold', color: '#fff', fontSize: '20px'}}>
              Involved. Flexible. Approachable.
            </p>

            <p style={{marginBottom: '20px'}}>
              Clients often describe my approach as collaborative. I prefer working closely 
              with my partners, involving them in the creative heartbeat of every project.
            </p>

            <p style={{marginBottom: '20px'}}>
              Based in Copenhagen, I am a full-time content creator originally from Uganda. 
              My journey began in 2010 with my own multimedia company in Uganda, 
              eventually leading to the birth of EOS Limitless Pictures in Denmark in 2020.
            </p>

            <p>
              My work is a fusion of global experiences and diverse perspectives, 
              resulting in still and motion images that push creative boundaries.
            </p>
          </div>

          <a
            href="/contact"
            style={styles.btn}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            Work With Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;