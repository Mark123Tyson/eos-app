import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaSnapchatGhost, FaTiktok, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  const sectionStyle = {
    backgroundColor: '#0f1720',
    color: 'white',
    padding: '80px 20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#d4af37',
    marginBottom: '30px',
  };

  const inputStyle = {
    width: '90%',
    maxWidth: '500px',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '6px',
    border: 'none',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
  };

  const btnStyle = {
    padding: '12px 30px',
    backgroundColor: '#9a9a10',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease, background 0.2s ease',
    marginTop: '10px',
  };

  const socialContainer = {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '28px',
  };

  const socialLinkStyle = {
    color: '#b5b514',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
          value={formData.name}
          onChange={handleChange}
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
          value={formData.email}
          onChange={handleChange}
        /><br />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={textareaStyle}
          value={formData.message}
          onChange={handleChange}
        /><br />

        <button
          type="submit"
          style={btnStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.backgroundColor = '#d4af37';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = '#9a9a10';
          }}
        >
          Send Message
        </button>
      </form>

      <div style={socialContainer}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
          onMouseEnter={(e) => e.target.style.color = '#d4af37'}
          onMouseLeave={(e) => e.target.style.color = '#b5b514'}>
          <FaInstagram />
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
          onMouseEnter={(e) => e.target.style.color = '#d4af37'}
          onMouseLeave={(e) => e.target.style.color = '#b5b514'}>
          <FaWhatsapp />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
          onMouseEnter={(e) => e.target.style.color = '#d4af37'}
          onMouseLeave={(e) => e.target.style.color = '#b5b514'}>
          <FaFacebook />
        </a>
        <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
          onMouseEnter={(e) => e.target.style.color = '#d4af37'}
          onMouseLeave={(e) => e.target.style.color = '#b5b514'}>
          <FaSnapchatGhost />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
          onMouseEnter={(e) => e.target.style.color = '#d4af37'}
          onMouseLeave={(e) => e.target.style.color = '#b5b514'}>
          <FaTiktok />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}
          onMouseEnter={(e) => e.target.style.color = '#d4af37'}
          onMouseLeave={(e) => e.target.style.color = '#b5b514'}>
          <FaYoutube />
        </a>
      </div>
    </section>
  );
};

export default ContactPage;