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
      /* FIXED: Increased padding-top for small devices to clear the fixed header */
      paddingTop: isSmall ? '100px' : '60px', 
      paddingBottom: isSmall ? '60px' : '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginTop: '-20px',
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
      backgroundColor: 'rgba(10, 14, 18, 0.6)', 
      backdropFilter: 'blur(30px)',
      WebkitBackdropFilter: 'blur(30px)',
      padding: isSmall ? '45px 25px' : '60px 50px', 
      borderRadius: '40px',
      border: '1px solid rgba(212, 175, 55, 0.2)',
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
      /* FIXED: Reduced image height for medium/small devices */
      width: isSmall ? '200px' : isMedium ? '240px' : '320px', 
      height: isSmall ? '240px' : isMedium ? '300px' : '420px',
      borderRadius: '24px',
      padding: '10px',
      background: 'linear-gradient(135deg, rgba(212,175,55,0.25) 0%, rgba(10,14,18,0.9) 100%)',
      border: '1px solid rgba(212, 175, 55, 0.4)',
      boxShadow: '0 30px 60px rgba(0,0,0,0.9), 0 0 20px rgba(212, 175, 55, 0.1)',
      transform: (isSmall || isMedium) ? 'none' : 'rotateY(-10deg) rotateX(5deg)',
      transition: 'transform 0.5s ease',
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
    heading: {
      /* INCREASED: Font size bumped for impact */
      fontSize: isSmall ? '34px' : isMedium ? '48px' : '56px', 
      fontWeight: '900',
      lineHeight: '1.05',
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '-2px',
      textShadow: '0 4px 12px rgba(0,0,0,0.5)'
    },
    bodyText: {
      /* INCREASED: Body font size to 18px */
      fontSize: isSmall ? '16px' : '18px', 
      lineHeight: '1.7', 
      color: '#e2e8f0'
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
          <span style={{color: "#d4af37", letterSpacing: '5px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', display: 'block', marginBottom: '10px'}}>The Founder</span>
          <h2 style={styles.heading}>
            Crafting <span style={{color: '#d4af37'}}>Raw</span><br/>
            Perspectives
          </h2>
          
          <div style={styles.bodyText}>
            <p style={{marginBottom: '15px', fontWeight: '800', color: '#fff', fontSize: '19px', letterSpacing: '0.5px'}}>Flexible • Approachable • Precision-Driven</p>
            <p style={{marginBottom: '15px'}}>
              From Kampala to Copenhagen, my journey bridges two worlds. Since 2010, I’ve transformed visual storytelling from a startup in Uganda to <strong>EOS Limitless Pictures</strong> in Denmark.
            </p>
            <p style={{opacity: 0.9}}>My mission: involving you in the heartbeat of the process to turn global precision into local soul.</p>
            
            <div style={{
                marginTop: '35px', 
                borderTop: '2px solid rgba(212,175,55,0.3)', 
                paddingTop: '15px',
                display: 'inline-block'
            }}>
               <span style={{fontSize: '32px', color: '#d4af37', fontStyle: 'italic', fontWeight: '800', letterSpacing: '1px'}}>E.O.S</span>
               <p style={{fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.6, fontWeight: '700'}}>Creative Director</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;