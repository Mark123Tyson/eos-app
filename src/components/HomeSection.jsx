import React, { useEffect, useState } from "react";
import mainImg from '../assets/background1.jpg';

const HomeSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      const offset = 80; 
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  const styles = {
    section: {
      height: "100vh",
      width: "100%",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // On mobile, we align to the top with padding so it's closer to the header
      justifyContent: isMobile ? "flex-start" : "center",
      paddingTop: isMobile ? "120px" : "0", 
      position: "relative",
      color: "#fff",
      overflow: "hidden",
      backgroundColor: "#050811"
    },
    bgContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${mainImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: isMobile ? "scroll" : "fixed",
      animation: "kenBurns 20s infinite alternate",
      zIndex: 0
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to bottom, rgba(5, 8, 17, 0.3) 0%, rgba(5, 8, 17, 0.8) 100%)",
      zIndex: 1
    },
    contentCard: {
      position: "relative",
      zIndex: 2,
      maxWidth: "92%",
      width: "850px",
      // Reduced padding on mobile to save space
      padding: isMobile ? "30px 15px" : "60px",
      textAlign: "center",
      backgroundColor: "rgba(10, 14, 18, 0.4)", 
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderRadius: "20px", // Softened to match your new "Lively" theme
      border: "1px solid rgba(212, 175, 55, 0.2)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
      animation: "fadeInUp 1.2s ease-out forwards"
    },
    heading: {
      fontSize: isMobile ? "28px" : "64px", // Shrunk slightly for mobile
      fontWeight: "900",
      marginBottom: "10px",
      letterSpacing: isMobile ? "1px" : "6px",
      textTransform: "uppercase",
      lineHeight: 1.1
    },
    accent: {
      color: "#d4af37",
      display: "inline" 
    },
    subheading: {
      fontSize: isMobile ? "11px" : "18px",
      marginBottom: isMobile ? "25px" : "40px",
      color: "#cbd5e1",
      letterSpacing: isMobile ? "3px" : "5px",
      fontWeight: "400",
      textTransform: "uppercase"
    },
    ctaButton: {
      display: "inline-block",
      padding: isMobile ? "14px 30px" : "16px 40px",
      fontSize: isMobile ? "11px" : "13px",
      fontWeight: "bold",
      color: "#0a0e12",
      backgroundColor: "#d4af37",
      borderRadius: "12px", // Matches the new softer vibe
      cursor: "pointer",
      letterSpacing: "3px",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      border: "1px solid #d4af37",
      textDecoration: "none"
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
          @keyframes float {
            0% { transform: translateY(0px) rotate(45deg); }
            50% { transform: translateY(10px) rotate(45deg); }
            100% { transform: translateY(0px) rotate(45deg); }
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
            EOS LIMITLESS <span style={styles.accent}>PICTURES</span>
          </h1>
          
          <p style={styles.subheading}>
            Danish Precision • Ugandan Soul
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

        {/* Scroll Indicator - Hidden if it crowds the card on small screens */}
        {!isMobile && (
          <div 
            onClick={scrollToServices}
            style={{
              position: "absolute",
              bottom: "30px",
              zIndex: 3,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: 0.8
            }}
          >
            <span style={{ fontSize: '10px', letterSpacing: '3px', marginBottom: '10px' }}>SCROLL</span>
            <div style={{
              width: "12px",
              height: "12px",
              borderBottom: "2px solid #d4af37",
              borderRight: "2px solid #d4af37",
              transform: "rotate(45deg)",
              animation: "float 2s infinite"
            }}></div>
          </div>
        )}
      </section>
    </>
  );
};

export default HomeSection;