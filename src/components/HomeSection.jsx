import React, { useEffect, useState } from "react";
import mainImg from '../assets/background1.jpg';
import portrait from '../assets/product1.jpg';
import horse from '../assets/product2.jpg';
import product from '../assets/product3.jpg';
import eventsImg from '../assets/cameraset.jpg';
import documentaryImg from '../assets/documentary.jpg';
import abstractImg from '../assets/abstract.jpeg';

const HomeSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmall = windowWidth < 768;
  const isMedium = windowWidth >= 768 && windowWidth < 1024;

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      const offset = 80; 
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  const galleryItems = [portrait, horse, product, eventsImg, documentaryImg, abstractImg];

  const styles = {
    section: {
      minHeight: isSmall ? "auto" : "100vh",
      width: "100vw", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      backgroundColor: "#050811",
      overflow: "hidden",
      color: "#fff",
      paddingTop: isSmall ? "100px" : "0", 
      paddingBottom: isSmall ? "60px" : "0",
      boxSizing: "border-box"
    },
    bgContainer: {
      position: "absolute",
      top: 0, left: 0,
      width: "100%", height: "100%",
      backgroundImage: `url(${mainImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 0,
      opacity: 0.5,
      animation: "kenBurns 20s infinite alternate"
    },
    overlay: {
      position: "absolute",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "linear-gradient(to bottom, rgba(5, 8, 17, 0.3) 0%, rgba(5, 8, 17, 0.95) 100%)",
      zIndex: 1
    },
    contentCard: {
      position: "relative",
      zIndex: 10,
      /* DYNAMIC WIDTHS: Prevents filling the screen on medium devices */
      width: isSmall ? "90%" : isMedium ? "75%" : "850px", 
      maxWidth: "1000px",
      padding: isSmall ? "30px 20px" : isMedium ? "50px 40px" : "60px",
      textAlign: "center",
      backgroundColor: "rgba(10, 14, 18, 0.4)", 
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderRadius: "20px",
      border: "1px solid rgba(212, 175, 55, 0.2)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
      animation: "fadeInUp 1.2s ease-out forwards",
      margin: "0 auto"
    },
    heading: {
      fontSize: isSmall ? "28px" : isMedium ? "50px" : "72px",
      fontWeight: "900",
      marginBottom: "2px",
      letterSpacing: isSmall ? "2px" : "8px",
      textTransform: "uppercase",
      lineHeight: 1.1,
      color: "#ffffff"
    },
    accent: {
      color: "#d4af37",
      display: "block",
      fontSize: isSmall ? "14px" : isMedium ? "18px" : "22px",
      letterSpacing: isSmall ? "6px" : "12px",
      fontWeight: "600",
      marginTop: "5px"
    },
    filmStripWrapper: {
      width: "100%",
      overflowX: "auto",
      margin: isSmall ? "20px 0" : "40px 0",
      padding: "5px 0",
      display: "flex",
      justifyContent: isSmall ? "flex-start" : "center",
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    },
    filmStrip: {
      display: "flex",
      gap: "10px",
      padding: isSmall ? "0 5px" : "0",
    },
    miniImg: {
      width: isSmall ? "100px" : "110px", 
      height: isSmall ? "130px" : "110px",
      objectFit: "cover",
      borderRadius: "4px",
      opacity: 0.9,
      borderLeft: "3px solid #111",
      borderRight: "3px solid #111",
      flexShrink: 0,
      transition: "all 0.3s ease"
    },
    subheading: {
      fontSize: isSmall ? "11px" : isMedium ? "15px" : "18px", 
      marginBottom: isSmall ? "25px" : "40px",
      color: "#ffffff",
      letterSpacing: isSmall ? "2px" : "5px",
      fontWeight: "600",
      textTransform: "uppercase",
      lineHeight: 1.5,
      margin: "0 auto 25px auto"
    },
    ctaButton: {
      display: "inline-block",
      padding: isSmall ? "14px 28px" : "18px 45px",
      fontSize: isSmall ? "11px" : "13px",
      fontWeight: "bold",
      color: "#0a0e12",
      backgroundColor: "#d4af37",
      borderRadius: "12px",
      cursor: "pointer",
      letterSpacing: "3px",
      transition: "all 0.4s ease",
      border: "1px solid #d4af37"
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes kenBurns {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section id="home" style={styles.section}>
        <div style={styles.bgContainer}></div>
        <div style={styles.overlay}></div>

        <div style={styles.contentCard}>
          <h1 style={styles.heading}>
            EOS LIMITLESS
            <span style={styles.accent}>PICTURES</span>
          </h1>

          <div style={styles.filmStripWrapper}>
            <div style={styles.filmStrip}>
              {galleryItems.map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  alt="portfolio-preview" 
                  style={styles.miniImg}
                  onMouseEnter={(e) => {
                      if(!isSmall) {
                        e.target.style.transform = "scale(1.05)";
                        e.target.style.borderColor = "#d4af37";
                      }
                  }}
                  onMouseLeave={(e) => {
                      if(!isSmall) {
                        e.target.style.transform = "scale(1)";
                        e.target.style.borderColor = "#111";
                      }
                  }}
                />
              ))}
            </div>
          </div>
          
          <p style={styles.subheading}>
            Danish Precision • Ugandan Soul <br/>
            Professional Photography & Videography <br/>
            for Global Organizations
          </p>

          <div
            style={styles.ctaButton}
            onClick={scrollToServices}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#d4af37";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#d4af37";
              e.target.style.color = "#0a0e12";
            }}
          >
            EXPLORE SHOWREEL
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;