import React from 'react';
import founderImg from '../assets/founder.avif';

const AboutPage = () => {
  const sectionStyle = {
    backgroundColor: '#0b0f14',
    color: 'white',
    padding: '80px 20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.8',
    minHeight: '100vh',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '40px',
    color: '#d4af37',
    marginBottom: '40px'
  };

  const textStyle = {
    fontSize: '16px',
    maxWidth: '800px',
    margin: '20px auto',
    textAlign: 'justify',      // changed to justify
    textJustify: 'inter-word', // smooth justification
    gap: '20px'
  };

  const paragraphStyle = {
    marginBottom: '20px'       // spacing between paragraphs
  };

  const imgContainerStyle = {
    width: '250px',
    height: '250px',
    margin: '40px auto',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 5px 20px rgba(0,0,0,0.5)'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const btnStyle = {
    display: 'inline-block',
    marginTop: '30px',
    padding: '14px 30px',
    backgroundColor: '#9a9a10',
    color: 'white',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease, background 0.2s ease'
  };

  const btnHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.backgroundColor = '#d4af37';
  };

  const btnUnhover = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.backgroundColor = '#9a9a10';
  };

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>About EOS Limitless Pictures</h1>

      <div style={imgContainerStyle}>
        <img src={founderImg} alt="Founder" style={imgStyle} />
      </div>

      <div style={textStyle}>
        <p style={paragraphStyle}>Involved. Flexible. Approachable.</p>

        <p style={paragraphStyle}>
          Those are some of the words used by clients when describing my approach to professional relations, and me as an individual. I prefer working closely with my clients, and I like to involve them in the creative process.
        </p>

        <p style={paragraphStyle}>
          I am based in Copenhagen, where I work as a full-time content creator best expressed through motion and still images. EOS Limitless Pictures was started in Denmark in 2020.
        </p>

        <p style={paragraphStyle}>
          I am originally from Uganda, where my creative processes were birthed, but I have lived in Denmark since 2018. In Uganda, I had my own multimedia company as well from 2010.
        </p>

        <p style={paragraphStyle}>
          My work illustrates the fusion of different experiences and perspectives on creativity.
        </p>
      </div>

      <a
        href="/contact"
        style={btnStyle}
        onMouseEnter={btnHover}
        onMouseLeave={btnUnhover}
      >
        Work With Me
      </a>
    </section>
  );
};

export default AboutPage;
