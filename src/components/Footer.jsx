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
      backgroundColor: '#0a0e12',
      color: 'white',
      padding: '40px 5%',
      borderTop: '1px solid rgba(212, 175, 55, 0.3)',
      width: '100%',
      boxSizing: 'border-box',
    },
    rowContainer: {
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '30px',
    },
    heading: {
      color: '#d4af37',
      margin: 0,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontWeight: '900',
      lineHeight: '1.2'
    },
    locationItem: {
      margin: '8px 0',
      display: 'block',
      color: '#cbd5e1',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'all 0.3s ease',
    },
    linkButton: {
      display: 'inline-block',
      backgroundColor: 'transparent',
      color: '#d4af37',
      borderRadius: '4px',
      border: '2px solid #d4af37',
      textDecoration: 'none',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textAlign: 'center'
    },
    bottomBar: {
      marginTop: '40px',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Always centered
      justifyContent: 'center',
      gap: '12px',
      textAlign: 'center'
    },
    copyright: {
      fontSize: '11px',
      color: '#64748b',
      letterSpacing: '1px',
      margin: 0,
      textTransform: 'uppercase'
    },
    devLink: {
      fontSize: '11px',
      color: '#94a3b8',
      textDecoration: 'none',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      display: 'inline-block'
    },
    devName: {
      color: '#d4af37',
      fontWeight: 'bold',
      marginLeft: '5px',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    }
  };

  return (
    <footer style={styles.footer}>
      <style>
        {`
          /* Top row: Column on Mobile, Row on Desktop */
          @media (min-width: 768px) {
            .footer-row { 
              flex-direction: row !important; 
              text-align: left;
            }
            .footer-heading { font-size: 28px; }
          }

          @media (max-width: 767px) {
            .footer-row { text-align: center; }
          }

          .location-link:hover {
            color: #d4af37 !important;
            transform: scale(1.02);
          }

          .dev-name-span:hover {
            text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
            letter-spacing: 2px;
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
            e.target.style.color = '#0a0e12';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#d4af37';
          }}
        >
          Get in Touch
        </a>
      </div>

      {/* Bottom Bar: Copyright & Developer (Centered for all devices) */}
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