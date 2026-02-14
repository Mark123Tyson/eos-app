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
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    section: {
      height: "100vh",
      width: "100vw", // Force full viewport width
      margin: 0,
      padding: 0,
      backgroundImage: `url(${mainImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed", // Keeps background static while content scrolls
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      color: "#fff",
      overflow: "hidden"
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // Darker gradient to make small white text "pop"
      background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
      zIndex: 1
    },
    contentCard: {
      position: "relative",
      zIndex: 2,
      maxWidth: "90%",
      width: "800px",
      padding: isMobile ? "30px 15px" : "50px",
      textAlign: "center",
      // Increased opacity for better readability
      backgroundColor: "rgba(0, 0, 0, 0.4)", 
      backdropFilter: "blur(12px)",
      borderRadius: "12px",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      animation: "fadeInUp 1.2s ease-out forwards"
    },
    heading: {
      fontSize: isMobile ? "32px" : "58px",
      fontWeight: "900",
      marginBottom: "15px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      textShadow: "2px 2px 10px rgba(0,0,0,0.8)" // Shadow for visibility
    },
    accent: {
      color: "#d4af37",
      textShadow: "0px 0px 15px rgba(212, 175, 55, 0.4)"
    },
    subheading: {
      fontSize: isMobile ? "15px" : "20px",
      marginBottom: "35px",
      color: "#ffffff", // Pure white for max contrast
      letterSpacing: "4px",
      fontWeight: "500",
      textTransform: "uppercase",
      textShadow: "1px 1px 5px rgba(0,0,0,0.9)"
    },
    ctaButton: {
      display: "inline-block",
      padding: "14px 36px",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#000",
      backgroundColor: "#d4af37", // Solid gold for visibility
      borderRadius: "4px",
      cursor: "pointer",
      letterSpacing: "2px",
      transition: "all 0.3s ease",
      border: "none",
      boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)"
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "40px",
      zIndex: 3,
      cursor: "pointer",
      textAlign: "center",
      animation: "float 2s ease-in-out infinite",
      // Bright gold and larger size for visibility
      color: "#d4af37",
      fontSize: "32px", 
      filter: "drop-shadow(0px 0px 8px rgba(0,0,0,1))"
    },
    footerStats: {
      position: "absolute",
      bottom: "100px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: isMobile ? "15px" : "40px",
      zIndex: 2,
      color: "#fff",
      fontSize: "13px",
      letterSpacing: "3px",
      fontWeight: "600",
      textShadow: "0 2px 4px #000"
    }
  };

  return (
    <>
      {/* CSS Reset to remove white margins/padding from the page */}
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section id="home" style={styles.section}>
        <div style={styles.overlay}></div>

        <div style={styles.contentCard}>
          <h1 style={styles.heading}>
            EOS LIMITLESS <span style={styles.accent}>PICTURES</span>
          </h1>
          
          <p style={styles.subheading}>
            Cinematic Storytelling
          </p>

          <div
            style={styles.ctaButton}
            onClick={scrollToServices}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#d4af37";
              e.target.style.transform = "translateY(0)";
            }}
          >
            EXPLORE WORK
          </div>
        </div>

        {!isMobile && (
          <div style={styles.footerStats}>
            <span>COMMERCIAL</span>
            <span>•</span>
            <span>NARRATIVE</span>
            <span>•</span>
            <span>DOCUMENTARY</span>
          </div>
        )}

        <div style={styles.scrollIndicator} onClick={scrollToServices}>
          <div style={{ fontSize: "12px", fontWeight: "bold", color: "#fff", marginBottom: "5px" }}>SCROLL</div>
          <div style={{ fontWeight: "bold" }}>↓</div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;