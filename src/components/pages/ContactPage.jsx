import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaSnapchatGhost, FaTiktok, FaYoutube, FaCheckCircle } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [btnHovered, setBtnHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  /* Added state for the popup visibility */
  const [showPopup, setShowPopup] = useState(false);

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "31159a2b-c757-4bb0-ba84-5486b9e86b11");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true); // Trigger the popup
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    wrapper: {
      backgroundColor: '#050811',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isSmall ? '100px 15px 50px 15px' : isMedium ? '80px 20px 60px 20px' : '60px 20px 100px 20px', 
      backgroundImage: `radial-gradient(circle, rgba(212, 175, 55, 0.03) 0.5px, transparent 0.5px)`,
      backgroundSize: '40px 40px',
      margin: 0,
      position: 'relative',
      zIndex: 5,
      fontFamily: "'Inter', sans-serif"
    },
    mainSectionPanel: {
      width: '100%',
      maxWidth: (isSmall || isMedium) ? '700px' : '1200px',
      backgroundColor: 'rgba(13, 18, 24, 0.6)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      borderRadius: '24px', 
      border: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
      padding: isSmall ? '40px 20px' : '60px',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      display: 'flex',
      flexDirection: (isSmall || isMedium) ? 'column' : 'row',
      gap: (isSmall || isMedium) ? '40px' : '80px',
      alignItems: 'center',
    },
    infoSide: {
      flex: '1',
      textAlign: (isSmall || isMedium) ? 'center' : 'left',
      width: '100%'
    },
    label: {
      fontFamily: "'Syncopate', sans-serif",
      color: '#d4af37',
      textTransform: 'uppercase',
      letterSpacing: '5px',
      fontSize: '12px',
      fontWeight: '700',
      marginBottom: '20px',
      display: 'block'
    },
    heading: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: isSmall ? '42px' : isMedium ? '54px' : '72px',
      fontWeight: '400',
      color: '#fff',
      lineHeight: '1',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    },
    description: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '16px',
      color: '#94a3b8', 
      lineHeight: '1.8',
      maxWidth: (isSmall || isMedium) ? '100%' : '480px',
      marginBottom: '40px',
      letterSpacing: '0.2px'
    },
    formCard: {
      flex: '1.1',
      width: '100%',
      backgroundColor: 'rgba(10, 14, 18, 0.4)',
      padding: isSmall ? '30px' : '45px',
      borderRadius: '20px', 
      border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    input: (isFocused) => ({
      width: '100%',
      backgroundColor: '#02040a',
      border: isFocused ? '1px solid #d4af37' : '1px solid rgba(255,255,255,0.1)',
      padding: '18px 22px',
      marginBottom: '18px',
      color: 'white',
      borderRadius: '12px', 
      fontSize: '15px',
      fontFamily: "'Inter', sans-serif",
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'all 0.3s ease',
    }),
    socialLink: {
      color: '#64748b',
      fontSize: '26px',
      transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      display: 'inline-block'
    },
    /* POPUP STYLES */
    modalOverlay: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(5, 8, 17, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(10px)'
    },
    modalContent: {
      backgroundColor: '#0a0e1a',
      padding: '50px 40px',
      borderRadius: '24px',
      border: '1px solid #d4af37',
      textAlign: 'center',
      maxWidth: '400px',
      width: '90%',
      boxShadow: '0 20px 50px rgba(0,0,0,1)'
    }
  };

  return (
    <section id="contact" style={styles.wrapper}>
      {/* POPUP SCREEN */}
      {showPopup && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <FaCheckCircle style={{ fontSize: '60px', color: '#d4af37', marginBottom: '20px' }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '36px', color: '#fff', letterSpacing: '2px', marginBottom: '10px' }}>SUCCESS!</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '30px', lineHeight: '1.6' }}>
              Your message has been sent to EOS Limitless. We will reach out shortly.
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              style={{
                backgroundColor: '#d4af37', color: '#0a0e12', padding: '12px 30px', borderRadius: '8px', 
                border: 'none', fontFamily: "'Syncopate', sans-serif", fontWeight: '700', fontSize: '10px', 
                letterSpacing: '2px', cursor: 'pointer'
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <div style={styles.mainSectionPanel}>
        <div style={styles.container}>
          <div style={styles.infoSide}>
            <span style={styles.label}>Connect With Us</span>
            <h2 style={styles.heading}>Your Vision <br/><span style={{color: '#d4af37'}}>Realized</span></h2>
            <p style={styles.description}>
              From Kampala to Copenhagen, we capture stories that matter. Reach out and let's create something limitless.
            </p>
            
            <div style={{ display: 'flex', gap: '30px', justifyContent: (isSmall || isMedium) ? 'center' : 'flex-start' }}>
              {socialPlatforms.map((p, idx) => (
                <a 
                  key={idx} href={p.url} target="_blank" rel="noopener noreferrer" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => { e.currentTarget.style.color = p.color; e.currentTarget.style.transform = 'translateY(-6px) scale(1.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
                >
                  <p.Icon />
                </a>
              ))}
            </div>
          </div>

          <div style={styles.formCard}>
            <form onSubmit={onSubmit}>
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
                style={{ ...styles.input(activeField === 'message'), height: '140px', resize: 'none' }}
                onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)}
                value={formData.message} onChange={handleChange}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)}
                style={{
                  width: '100%', padding: '20px',
                  backgroundColor: isSubmitting ? '#1e293b' : (btnHovered ? '#fff' : '#d4af37'),
                  color: '#0a0e12', border: 'none', 
                  fontFamily: "'Syncopate', sans-serif",
                  fontWeight: '700',
                  textTransform: 'uppercase', 
                  letterSpacing: '4px', 
                  fontSize: '11px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                  borderRadius: '12px', transition: 'all 0.4s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;