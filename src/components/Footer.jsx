import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    footer: {
      backgroundColor: '#050811',
      color: 'white',
      padding: '40px 5% 50px 5%', // Slightly increased padding
      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: '-5px',
      position: 'relative',
      zIndex: 5
    },
    rowContainer: {
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '30px', // Increased gap
    },
    heading: {
      color: '#d4af37',
      margin: 0,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      fontWeight: '900',
      lineHeight: '1.2',
      fontSize: '28px' // Increased from 22px
    },
    locationItem: {
      margin: '8px 0',
      display: 'block',
      color: '#cbd5e1', // Lighter color for better readability
      textDecoration: 'none',
      fontSize: '15px', // Increased from 13px
      transition: 'all 0.3s ease',
      letterSpacing: '0.8px',
      fontWeight: '500'
    },
    linkButton: {
      display: 'inline-block',
      backgroundColor: 'transparent',
      color: '#d4af37',
      borderRadius: '6px',
      border: '2px solid #d4af37',
      textDecoration: 'none',
      fontWeight: '800',
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textAlign: 'center',
      fontSize: '13px' // Increased from 11px
    },
    bottomBar: {
      marginTop: '40px',
      paddingTop: '25px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      textAlign: 'center'
    },
    copyright: {
      fontSize: '12px', // Increased from 10px
      color: '#64748b',
      letterSpacing: '1.5px',
      margin: 0,
      textTransform: 'uppercase',
      fontWeight: '600'
    },
    devLink: {
      fontSize: '12px', // Increased from 10px
      color: '#94a3b8',
      textDecoration: 'none',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      display: 'inline-block'
    },
    devName: {
      color: '#d4af37',
      fontWeight: 'bold',
      marginLeft: '5px',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      opacity: 0.9
    }
  };

  return (
    <footer style={styles.footer}>
      <style>
        {`
          @media (min-width: 768px) {
            .footer-row { 
              flex-direction: row !important; 
              text-align: left;
            }
            .footer-heading { font-size: 32px !important; }
          }

          @media (max-width: 767px) {
            .footer-row { text-align: center; }
          }

          .location-link:hover {
            color: #d4af37 !important;
            transform: translateY(-2px);
          }

          .dev-name-span:hover {
            color: #fff !important;
            opacity: 1 !important;
            text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
          }
        `}
      </style>

      {/* Main Footer Row */}
      <div className="footer-row" style={styles.rowContainer}>
        <div>
          <h2 className="footer-heading" style={styles.heading}>Book Us Now</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Kisaasi+Kampala+Uganda" 
            target="_blank" rel="noopener noreferrer"
            className="location-link" style={styles.locationItem}
          >
            📍 Kisaasi, Kampala, Uganda
          </a>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Valby+Copenhagen+Denmark" 
            target="_blank" rel="noopener noreferrer"
            className="location-link" style={styles.locationItem}
          >
            📍 Valby, Copenhagen, Denmark
          </a>
        </div>

        <a
          href="#contact"
          onClick={scrollToContact}
          style={{...styles.linkButton, padding: '12px 30px'}}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#d4af37';
            e.target.style.color = '#050811';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#d4af37';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Get in Touch
        </a>
      </div>

      {/* Bottom Bar: Copyright & Developer */}
      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          © {currentYear} EOS LIMITLESS PICTURES. ALL RIGHTS RESERVED.
        </p>

        <a 
          href="https://marktyson.netlify.app/"
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.devLink}
        >
          Built by <span className="dev-name-span" style={styles.devName}>MARK TYSON</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;