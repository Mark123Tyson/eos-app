import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaSnapchatGhost, FaTiktok, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [btnHovered, setBtnHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmall = windowWidth < 768;
  const isMedium = windowWidth >= 768 && windowWidth < 1100;

  const socialPlatforms = [
    { Icon: FaInstagram, color: '#E1306C', url: 'https://instagram.com' },
    { Icon: FaWhatsapp, color: '#25D366', url: 'https://wa.me/yournumber' },
    { Icon: FaFacebook, color: '#1877F2', url: 'https://facebook.com' },
    { Icon: FaSnapchatGhost, color: '#FFFC00', url: 'https://snapchat.com' },
    { Icon: FaTiktok, color: '#FFFFFF', url: 'https://tiktok.com' }, 
    { Icon: FaYoutube, color: '#FF0000', url: 'https://youtube.com' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We will reach out shortly!`);
    setFormData({ name: '', email: '', message: '' });
  };

  const styles = {
    wrapper: {
      backgroundColor: '#050811',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      /* FIXED: Added significant top padding for mobile/tablet to avoid header overlap */
      padding: isSmall ? '100px 15px 50px 15px' : isMedium ? '80px 20px 60px 20px' : '40px 20px 80px 20px', 
      backgroundImage: `radial-gradient(circle, rgba(212, 175, 55, 0.03) 0.5px, transparent 0.5px)`,
      backgroundSize: '40px 40px',
      margin: 0,
      marginTop: '-15px', 
      position: 'relative',
      zIndex: 5
    },
    mainSectionPanel: {
      width: '100%',
      maxWidth: (isSmall || isMedium) ? '700px' : '1200px',
      backgroundColor: 'rgba(13, 18, 24, 0.8)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      borderRadius: '25px', 
      border: '1px solid rgba(212, 175, 55, 0.15)',
      boxShadow: '0 40px 80px rgba(0,0,0,0.9)',
      padding: isSmall ? '40px 20px' : '50px',
      position: 'relative',
      overflow: 'hidden',
      animation: 'subtleFloat 5s ease-in-out infinite'
    },
    container: {
      display: 'flex',
      flexDirection: (isSmall || isMedium) ? 'column' : 'row',
      gap: (isSmall || isMedium) ? '35px' : '60px',
      alignItems: 'center',
    },
    infoSide: {
      flex: '1',
      textAlign: (isSmall || isMedium) ? 'center' : 'left',
      width: '100%'
    },
    label: {
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      /* INCREASED: Small text label size */
      fontSize: '13px',
      fontWeight: '900',
      marginBottom: '15px',
      display: 'block'
    },
    heading: {
      fontSize: isSmall ? '34px' : isMedium ? '44px' : '54px',
      fontWeight: '900',
      color: '#fff',
      lineHeight: '1.1',
      marginBottom: '15px',
      textTransform: 'uppercase',
    },
    description: {
      /* INCREASED: Small text description size */
      fontSize: '17px',
      color: '#cbd5e1', 
      lineHeight: '1.6',
      maxWidth: (isSmall || isMedium) ? '100%' : '450px',
      marginBottom: '35px',
    },
    formCard: {
      flex: '1.2',
      width: '100%',
      backgroundColor: 'rgba(10, 14, 18, 0.5)',
      padding: isSmall ? '25px' : '35px',
      borderRadius: '16px', 
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    input: (isFocused) => ({
      width: '100%',
      backgroundColor: '#02040a',
      border: isFocused ? '1px solid #d4af37' : '1px solid #1e293b',
      padding: '16px 20px',
      marginBottom: '15px',
      color: 'white',
      borderRadius: '10px', 
      /* INCREASED: Input text size */
      fontSize: '16px',
      boxSizing: 'border-box',
      outline: 'none',
      transition: '0.3s ease',
      transform: isFocused ? 'scale(1.01)' : 'scale(1)'
    }),
    socialLink: {
      color: '#64748b',
      fontSize: '24px',
      transition: '0.3s ease',
      display: 'inline-block'
    }
  };

  return (
    <section id="contact" style={styles.wrapper}>
      <style>
        {`
          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>

      <div style={styles.mainSectionPanel}>
        <div style={styles.container}>
          <div style={styles.infoSide}>
            <span style={styles.label}>Connect With Us</span>
            <h2 style={styles.heading}>Your Vision <br/><span style={{color: '#d4af37'}}>Realized</span></h2>
            <p style={styles.description}>
              From Kampala to Copenhagen, we capture stories that matter. Reach out and let's create something limitless.
            </p>
            
            <div style={{ display: 'flex', gap: '25px', justifyContent: (isSmall || isMedium) ? 'center' : 'flex-start' }}>
              {socialPlatforms.map((p, idx) => (
                <a 
                  key={idx} href={p.url} target="_blank" rel="noopener noreferrer" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => { e.currentTarget.style.color = p.color; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <p.Icon />
                </a>
              ))}
            </div>
          </div>

          <div style={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <input
                type="text" name="name" placeholder="Name" required
                style={styles.input(activeField === 'name')}
                onFocus={() => setActiveField('name')} onBlur={() => setActiveField(null)}
                value={formData.name} onChange={handleChange}
              />
              <input
                type="email" name="email" placeholder="Email" required
                style={styles.input(activeField === 'email')}
                onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)}
                value={formData.email} onChange={handleChange}
              />
              <textarea
                name="message" placeholder="Project details..." required
                style={{ ...styles.input(activeField === 'message'), height: '130px', resize: 'none' }}
                onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)}
                value={formData.message} onChange={handleChange}
              />
              <button
                type="submit"
                onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
                style={{
                  width: '100%', padding: '18px',
                  backgroundColor: btnHovered ? '#fff' : '#d4af37',
                  color: '#0a0e12', border: 'none', fontWeight: '900',
                  textTransform: 'uppercase', letterSpacing: '2.5px', 
                  /* INCREASED: Button text size */
                  fontSize: '13px',
                  cursor: 'pointer', borderRadius: '10px', transition: '0.3s ease'
                }}
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;