import React, { useEffect, useState } from "react";
import mainImg from '../assets/background1.jpg';
import portrait from '../assets/product1.jpg';
import horse from '../assets/product2.jpg';
import product from '../assets/product3.jpg';
import eventsImg from '../assets/cameraset.jpg';
import documentaryImg from '../assets/documentary.jpg';
import abstractImg from '../assets/abstract.jpeg';

const HomeSection = () => {
  // FIX 1: Safe window access — prevents crash during pre-render/SSR/bot crawl
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
      boxSizing: "border-box",
      fontFamily: "'Inter', sans-serif",
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
      // FIX 2: Only run Ken Burns after component mounts (not during bot snapshot)
      animation: mounted ? "kenBurns 20s infinite alternate" : "none",
    },
    overlay: {
      position: "absolute",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "linear-gradient(to bottom, rgba(5, 8, 17, 0.3) 0%, rgba(5, 8, 17, 0.95) 100%)",
      zIndex: 1,
    },
    contentCard: {
      position: "relative",
      zIndex: 10,
      width: isSmall ? "90%" : isMedium ? "75%" : "850px",
      maxWidth: "1100px",
      padding: isSmall ? "30px 20px" : isMedium ? "50px 40px" : "60px",
      textAlign: "center",
      backgroundColor: "rgba(10, 14, 18, 0.2)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderRadius: "24px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
      margin: "0 auto",
      // FIX 3: Start visible (opacity: 1) so thumbnail bot sees content immediately
      // Animation only runs after mount, so the bot captures the fully visible state
      opacity: 1,
      transform: "translateY(0)",
      animation: mounted ? "fadeInUp 1.2s ease-out forwards" : "none",
    },
    heading: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: isSmall ? "42px" : isMedium ? "70px" : "90px",
      fontWeight: "400",
      marginBottom: "0px",
      letterSpacing: isSmall ? "4px" : "12px",
      textTransform: "uppercase",
      lineHeight: 1,
      color: "#ffffff",
    },
    accent: {
      fontFamily: "'Syncopate', sans-serif",
      color: "#d4af37",
      display: "block",
      fontSize: isSmall ? "12px" : isMedium ? "16px" : "18px",
      letterSpacing: isSmall ? "8px" : "16px",
      fontWeight: "700",
      marginTop: "10px",
    },
    filmStripWrapper: {
      width: "100%",
      overflowX: "auto",
      margin: isSmall ? "20px 0" : "45px 0",
      padding: "5px 0",
      display: "flex",
      justifyContent: isSmall ? "flex-start" : "center",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    filmStrip: {
      display: "flex",
      gap: "12px",
      padding: isSmall ? "0 5px" : "0",
    },
    miniImg: {
      width: isSmall ? "100px" : "120px",
      height: isSmall ? "130px" : "150px",
      objectFit: "cover",
      borderRadius: "4px",
      opacity: 0.8,
      border: "1px solid rgba(255,255,255,0.1)",
      flexShrink: 0,
      transition: "all 0.4s ease",
    },
    subheading: {
      fontFamily: "'Inter', sans-serif",
      fontSize: isSmall ? "12px" : isMedium ? "14px" : "16px",
      marginBottom: isSmall ? "25px" : "40px",
      color: "#e2e8f0",
      letterSpacing: "3px",
      fontWeight: "400",
      textTransform: "uppercase",
      lineHeight: 1.8,
      margin: "0 auto 30px auto",
      opacity: 0.9,
    },
    ctaButton: {
      fontFamily: "'Syncopate', sans-serif",
      display: "inline-block",
      padding: isSmall ? "14px 28px" : "18px 50px",
      fontSize: isSmall ? "10px" : "12px",
      fontWeight: "700",
      color: "#0a0e12",
      backgroundColor: "#d4af37",
      borderRadius: "8px",
      cursor: "pointer",
      letterSpacing: "4px",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      border: "2px solid #d4af37",
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syncopate:wght@700&family=Inter:wght@400;600&display=swap');

          @keyframes kenBurns {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
          }

          /* FIX 4: Animation starts FROM visible state so content shows immediately */
          @keyframes fadeInUp {
            from { opacity: 0.8; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .film-strip-wrapper::-webkit-scrollbar {
            display: none;
          }

          .mini-img:hover {
            transform: translateY(-10px);
            border-color: #d4af37 !important;
            opacity: 1 !important;
          }

          .cta-btn:hover {
            background-color: transparent !important;
            color: #d4af37 !important;
            transform: scale(1.05);
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

          <div className="film-strip-wrapper" style={styles.filmStripWrapper}>
            <div style={styles.filmStrip}>
              {galleryItems.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="portfolio-preview"
                  className="mini-img"
                  style={styles.miniImg}
                />
              ))}
            </div>
          </div>

          <p style={styles.subheading}>
            Danish Precision • Ugandan Soul <br />
            Professional Photography & Videography <br />
            for Global Organizations
          </p>

          <div
            className="cta-btn"
            style={styles.ctaButton}
            onClick={scrollToServices}
          >
            EXPLORE SHOWREEL
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
