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
      padding: '60px 20px 30px 20px',
      textAlign: 'center',
      borderTop: '1px solid rgba(212, 175, 55, 0.3)',
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box'
    },
    heading: {
      color: '#d4af37',
      marginBottom: '25px',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontWeight: '900',
      lineHeight: '1.2'
    },
    locationItem: {
      margin: '12px 0',
      display: 'block',
      color: '#cbd5e1',
      transition: 'all 0.3s ease',
      cursor: 'default',
    },
    linkButton: {
      display: 'inline-block',
      marginTop: '10px',
      backgroundColor: 'transparent',
      color: '#d4af37',
      borderRadius: '4px',
      border: '2px solid #d4af37',
      textDecoration: 'none',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    copyright: {
      marginTop: '40px',
      fontSize: '13px',
      color: '#64748b',
      letterSpacing: '1px',
      marginBottom: '8px'
    },
    devLink: {
      fontSize: '12px',
      color: '#475569',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      letterSpacing: '0.5px'
    }
  };

  const handleMouseEnter = (e, color, bg = 'transparent') => {
    e.target.style.color = color;
    e.target.style.transform = 'scale(1.05)';
    if (bg !== 'none') e.target.style.backgroundColor = bg;
  };

  const handleMouseLeave = (e, color, bg = 'transparent') => {
    e.target.style.color = color;
    e.target.style.transform = 'scale(1)';
    if (bg !== 'none') e.target.style.backgroundColor = bg;
  };

  return (
    <footer style={styles.footer}>
      {/* Adding Media Queries via a Style Tag */}
      <style>
        {`
          /* Mobile Devices (Phones) */
          .footer-heading { font-size: 24px; }
          .footer-location { font-size: 14px; }
          .footer-btn { padding: 12px 30px; font-size: 14px; width: 80%; max-width: 300px; }

          /* Tablet & Desktop */
          @media (min-width: 768px) {
            .footer-heading { font-size: 32px; }
            .footer-location { font-size: 16px; }
            .footer-btn { padding: 14px 40px; font-size: 16px; width: auto; }
          }

          /* Large Desktop Screens */
          @media (min-width: 1200px) {
            .footer-heading { font-size: 40px; }
          }
        `}
      </style>

      <h2 className="footer-heading" style={styles.heading}>Book Us Now</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <span className="footer-location" style={styles.locationItem}>📍 Uganda, Kampala, Kisaasi</span>
        <span className="footer-location" style={styles.locationItem}>📍 Valby, Copenhagen, Denmark</span>
      </div>

      <a
        href="#contact"
        onClick={scrollToContact}
        className="footer-btn"
        style={styles.linkButton}
        onMouseEnter={(e) => handleMouseEnter(e, '#0a0e12', '#d4af37')}
        onMouseLeave={(e) => handleMouseLeave(e, '#d4af37', 'transparent')}
      >
        Get in Touch
      </a>

      <p style={styles.copyright}>
        &copy; {currentYear} EOS LIMITLESS PICTURES. ALL RIGHTS RESERVED.
      </p>

      <a 
        href="https://marktyson.netlify.app/"
        target="_blank" 
        rel="noopener noreferrer"
        style={styles.devLink}
        onMouseEnter={(e) => handleMouseEnter(e, '#d4af37', 'none')}
        onMouseLeave={(e) => handleMouseLeave(e, '#475569', 'none')}
      >
        Developed by <span style={{ fontWeight: 'bold' }}>Mark Tyson</span>
      </a>
    </footer>
  );
};

export default Footer;