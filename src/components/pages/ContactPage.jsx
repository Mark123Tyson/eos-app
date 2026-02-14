import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaSnapchatGhost, FaTiktok, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [btnHovered, setBtnHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 992;

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
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '80px 15px' : '100px 0',
      backgroundImage: `radial-gradient(circle, rgba(200, 200, 200, 0.05) 0.5px, transparent 0.5px)`,
      backgroundSize: '50px 50px',
    },
    mainSectionPanel: {
      width: isMobile ? '100%' : '85%',
      maxWidth: '1200px',
      backgroundColor: 'rgba(13, 18, 24, 0.8)',
      backdropFilter: 'blur(15px)',
      // SOFTENED EDGES
      borderRadius: '20px', 
      border: '1px solid rgba(212, 175, 55, 0.2)',
      boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
      padding: isMobile ? '40px 20px' : '70px',
      position: 'relative',
      overflow: 'hidden',
      // LIVELY ANIMATION
      animation: 'floatPanel 6s ease-in-out infinite'
    },
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '40px' : '80px',
      alignItems: 'center',
    },
    infoSide: {
      flex: '1',
      textAlign: isMobile ? 'center' : 'left',
    },
    label: {
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontSize: '11px',
      fontWeight: 'bold',
      marginBottom: '15px',
      display: 'block'
    },
    heading: {
      fontSize: isMobile ? '38px' : '56px',
      fontWeight: '900',
      color: '#fff',
      lineHeight: '1.1',
      marginBottom: '20px',
      textTransform: 'uppercase',
    },
    description: {
      fontSize: '16px',
      color: '#94a3b8',
      lineHeight: '1.8',
      maxWidth: '400px',
      marginBottom: '35px',
    },
    formCard: {
      flex: '1.2',
      width: '100%',
      backgroundColor: 'rgba(10, 14, 18, 0.6)',
      padding: isMobile ? '30px 20px' : '45px',
      // SOFTENED EDGES
      borderRadius: '16px', 
      border: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    },
    input: (isFocused) => ({
      width: '100%',
      backgroundColor: '#050811',
      border: isFocused ? '1px solid #d4af37' : '1px solid #1e293b',
      padding: '16px',
      marginBottom: '20px',
      color: 'white',
      // SOFTENED EDGES
      borderRadius: '12px', 
      fontSize: '15px',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      // LIVELY FOCUS GLOW
      boxShadow: isFocused ? '0 0 20px rgba(212, 175, 55, 0.15)' : 'none',
      transform: isFocused ? 'translateY(-2px)' : 'translateY(0)'
    }),
    socialLink: {
      color: '#64748b',
      fontSize: '22px',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    }
  };

  return (
    <div id="contact" style={styles.wrapper}>
      {/* CSS For the Lively Floating Effect */}
      <style>
        {`
          @keyframes floatPanel {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <div style={styles.mainSectionPanel}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08), transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={styles.container}>
          <div style={styles.infoSide}>
            <span style={styles.label}>Connect With Us</span>
            <h1 style={styles.heading}>Your Vision <br/><span style={{color: '#d4af37'}}>Realized</span></h1>
            <p style={styles.description}>
              From the heart of Kampala to the streets of Copenhagen, 
              we are ready to capture your story.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              {socialPlatforms.map((platform, idx) => (
                <a 
                  key={idx} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.color = platform.color;
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)'; 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'; 
                  }}
                >
                  <platform.Icon />
                </a>
              ))}
            </div>
          </div>

          <div style={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={styles.input(activeField === 'name')}
                onFocus={() => setActiveField('name')}
                onBlur={() => setActiveField(null)}
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={styles.input(activeField === 'email')}
                onFocus={() => setActiveField('email')}
                onBlur={() => setActiveField(null)}
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="How can we help?"
                required
                style={{
                  ...styles.input(activeField === 'message'),
                  height: '150px',
                  resize: 'none'
                }}
                onFocus={() => setActiveField('message')}
                onBlur={() => setActiveField(null)}
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  backgroundColor: btnHovered ? '#fff' : '#d4af37',
                  color: '#0a0e12',
                  border: 'none',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  borderRadius: '12px', // Softened button
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: btnHovered ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: btnHovered ? '0 10px 20px rgba(212, 175, 55, 0.3)' : 'none'
                }}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;