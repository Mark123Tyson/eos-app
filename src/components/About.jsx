import React, { useState, useEffect } from 'react';
import founderImg from '../assets/founder.avif';
import mainImg from '../assets/background1.jpg';

const AboutPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmall = windowWidth < 768;
  const isMedium = windowWidth >= 768 && windowWidth < 1100;

  const styles = {
    section: {
      position: 'relative',
      backgroundColor: '#050811',
      color: 'white',
      paddingTop: isSmall ? '100px' : '80px', 
      paddingBottom: isSmall ? '60px' : '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginTop: '-20px',
      fontFamily: "'Inter', sans-serif" // Global base
    },
    bgContainer: {
      position: "absolute",
      top: 0, left: 0, width: "100%", height: "100%",
      backgroundImage: `url(${mainImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 0,
      opacity: 0.08,
      filter: 'blur(15px)',
    },
    overlay: {
      position: "absolute",
      top: 0, left: 0, width: "100%", height: "100%",
      background: "linear-gradient(to bottom, #050811 0%, transparent 20%, transparent 80%, #050811 100%)",
      zIndex: 1
    },
    contentCard: {
      position: "relative",
      zIndex: 10,
      width: '92%', 
      maxWidth: '1100px',
      display: 'flex',
      flexDirection: (isSmall || isMedium) ? 'column' : 'row', 
      alignItems: 'center',
      gap: isSmall ? '40px' : '60px', 
      backgroundColor: 'rgba(10, 14, 18, 0.4)', 
      backdropFilter: 'blur(30px)',
      WebkitBackdropFilter: 'blur(30px)',
      padding: isSmall ? '45px 25px' : '60px 50px', 
      borderRadius: '40px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 50px 100px -20px rgba(0,0,0,1)',
      boxSizing: 'border-box'
    },
    imageSide: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      perspective: '1200px',
      width: '100%'
    },
    imgFrame: {
      position: 'relative',
      width: isSmall ? '220px' : isMedium ? '260px' : '340px', 
      height: isSmall ? '270px' : isMedium ? '320px' : '450px',
      borderRadius: '24px',
      padding: '10px',
      background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(10,14,18,0.9) 100%)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      boxShadow: '0 30px 60px rgba(0,0,0,0.9)',
      transform: (isSmall || isMedium) ? 'none' : 'rotateY(-8deg) rotateX(4deg)',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '16px',
    },
    textSide: {
      flex: '1.5',
      textAlign: (isSmall || isMedium) ? 'center' : 'left',
      width: '100%',
      maxWidth: '650px'
    },
    founderTag: {
      fontFamily: "'Syncopate', sans-serif",
      color: "#d4af37", 
      letterSpacing: '6px', 
      fontSize: '11px', 
      fontWeight: '700', 
      textTransform: 'uppercase', 
      display: 'block', 
      marginBottom: '15px'
    },
    heading: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: isSmall ? '44px' : isMedium ? '58px' : '68px', 
      fontWeight: '400', // Bebas is naturally bold; 400 keeps it clean
      lineHeight: '1.0',
      marginBottom: '25px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#fff'
    },
    introText: {
        fontFamily: "'Inter', sans-serif",
        marginBottom: '20px', 
        fontWeight: '600', 
        color: '#d4af37', 
        fontSize: isSmall ? '16px' : '19px', 
        letterSpacing: '0.5px'
    },
    bodyText: {
      fontFamily: "'Inter', sans-serif",
      fontSize: isSmall ? '15px' : '17px', // Slightly reduced for cleaner look
      lineHeight: '1.8', 
      color: '#cbd5e1',
      fontWeight: '400'
    },
    signatureSection: {
        marginTop: '35px', 
        borderTop: '1px solid rgba(212,175,55,0.2)', 
        paddingTop: '20px',
        display: 'inline-block',
        textAlign: (isSmall || isMedium) ? 'center' : 'left'
    },
    signature: {
        fontFamily: "'Syncopate', sans-serif",
        fontSize: '28px', 
        color: '#fff', 
        fontWeight: '700', 
        letterSpacing: '4px'
    },
    role: {
        fontFamily: "'Inter', sans-serif",
        fontSize: '10px', 
        letterSpacing: '4px', 
        textTransform: 'uppercase', 
        opacity: 0.5, 
        fontWeight: '600',
        marginTop: '5px'
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.bgContainer}></div>
      <div style={styles.overlay}></div>

      <div style={styles.contentCard}>
        
        <div style={styles.imageSide}>
          <div style={styles.imgFrame}>
            <img src={founderImg} alt="EOS Founder" style={styles.img} />
            {/* Corner Accents */}
            <div style={{position:'absolute', top:'-4px', left:'-4px', width:'20px', height:'20px', borderTop:'3px solid #d4af37', borderLeft:'3px solid #d4af37', borderRadius: '4px 0 0 0'}}></div>
            <div style={{position:'absolute', top:'-4px', right:'-4px', width:'20px', height:'20px', borderTop:'3px solid #d4af37', borderRight:'3px solid #d4af37', borderRadius: '0 4px 0 0'}}></div>
            <div style={{position:'absolute', bottom:'-4px', left:'-4px', width:'20px', height:'20px', borderBottom:'3px solid #d4af37', borderLeft:'3px solid #d4af37', borderRadius: '0 0 0 4px'}}></div>
            <div style={{position:'absolute', bottom:'-4px', right:'-4px', width:'20px', height:'20px', borderBottom:'3px solid #d4af37', borderRight:'3px solid #d4af37', borderRadius: '0 0 4px 0'}}></div>
          </div>
        </div>

        <div style={styles.textSide}>
          <span style={styles.founderTag}>The Founder</span>
          <h2 style={styles.heading}>
            Crafting <span style={{color: '#d4af37'}}>Raw</span><br/>
            Perspectives
          </h2>
          
          <div style={styles.bodyText}>
            <p style={styles.introText}>Flexible • Approachable • Precision-Driven</p>
            <p style={{marginBottom: '15px'}}>
              From Kampala to Copenhagen, my journey bridges two worlds. Since 2010, I’ve transformed visual storytelling from a startup in Uganda to <strong>EOS Limitless Pictures</strong> in Denmark.
            </p>
            <p style={{opacity: 0.8}}>My mission: involving you in the heartbeat of the process to turn global precision into local soul.</p>
            
            <div style={styles.signatureSection}>
               <span style={styles.signature}>E.O.S</span>
               <p style={styles.role}>Creative Director</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;