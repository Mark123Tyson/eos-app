import React, { useState, useEffect } from 'react';
import founderImg from '../assets/founder.avif';

const AboutPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 992;

  const styles = {
    section: {
      backgroundColor: '#050811', // Syncing with your Moonlit background
      color: 'white',
      padding: isMobile ? '80px 20px' : '120px 5vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    contentWrapper: {
      width: '90%',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      gap: isMobile ? '40px' : '80px',
      backgroundColor: 'rgba(13, 18, 24, 0.7)', // Slightly transparent for depth
      backdropFilter: 'blur(10px)',
      padding: isMobile ? '40px 25px' : '70px',
      borderRadius: '24px', // Softened edges as requested
      border: '1px solid rgba(212, 175, 55, 0.2)',
      boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
      backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 0)`,
      backgroundSize: '40px 40px',
    },
    imageSide: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    },
    imgFrame: {
      width: isMobile ? '240px' : '380px',
      height: isMobile ? '240px' : '380px',
      borderRadius: '50%',
      padding: '10px',
      border: '2px solid rgba(212, 175, 55, 0.5)', // Gold border instead of white
      boxShadow: '0 0 50px rgba(212, 175, 55, 0.1)',
    },
    img: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    textSide: {
      flex: '1.5',
      textAlign: isMobile ? 'center' : 'left',
    },
    label: {
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontSize: '11px',
      fontWeight: 'bold',
      marginBottom: '15px',
      display: 'block'
    },
    heading: {
      fontSize: isMobile ? '38px' : '52px',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '30px',
      textTransform: 'uppercase',
    },
    textBody: {
      fontSize: '17px',
      lineHeight: '1.8',
      color: '#94a3b8', // Softer blue-grey for readability
      textAlign: isMobile ? 'center' : 'left',
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.contentWrapper}>
        
        {/* IMAGE SIDE */}
        <div style={styles.imageSide}>
          <div style={styles.imgFrame}>
            <img src={founderImg} alt="EOS Founder" style={styles.img} />
          </div>
          {/* Subtle gold glow behind the founder photo */}
          <div style={{
            position: 'absolute',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
            zIndex: -1
          }} />
        </div>

        {/* TEXT SIDE */}
        <div style={styles.textSide}>
          <span style={styles.label}>Est. 2020</span>
          <h1 style={styles.heading}>The Visionary <br/><span style={{color: '#d4af37'}}>Behind EOS</span></h1>
          
          <div style={styles.textBody}>
            <p style={{marginBottom: '20px', fontWeight: 'bold', color: '#fff', fontSize: '19px', letterSpacing: '1px'}}>
              Involved • Flexible • Approachable
            </p>

            <p style={{marginBottom: '20px'}}>
              Clients often describe my approach as deeply collaborative. I prefer working closely 
              with my partners, involving them in the creative heartbeat of every project to ensure 
              the final vision is truly limitless.
            </p>

            <p style={{marginBottom: '20px'}}>
              Based in Copenhagen, I am a content creator originally from Uganda. 
              My journey began in 2010 with my own multimedia company in Kampala, 
              eventually evolving into <strong>EOS Limitless Pictures</strong> here in Denmark.
            </p>

            <p>
              My work is a fusion of global precision and diverse soul, 
              resulting in still and motion images that capture life's rawest moments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;