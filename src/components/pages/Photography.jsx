import React from 'react';
import photoImg from './../../assets/onlineproduct4.avif';

const ServiceExample = () => {
  const sectionStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 20px',
    backgroundColor: '#0f1720',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  const textStyle = {
    flex: '1 1 400px',
    maxWidth: '500px',
    margin: '20px',
    fontSize: '16px',
    lineHeight: '1.7',
    textAlign: 'justify',
  };

  const headingStyle = {
    fontSize: '28px',
    color: '#d4af37',
    marginBottom: '15px',
  };

  const subHeadingStyle = {
    fontSize: '20px',
    color: '#b5b514',
    marginBottom: '10px',
  };

  const listStyle = {
    marginBottom: '20px',
    paddingLeft: '20px'
  };

  const imgStyle = {
    flex: '1 1 400px',
    maxWidth: '500px',
    margin: '20px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
    objectFit: 'cover',
    width: '100%',
    height: 'auto'
  };

  return (
    <section style={sectionStyle}>
      <div style={textStyle}>
        <h2 style={headingStyle}>Example: Photography</h2>
        <p style={subHeadingStyle}>Categories of Photography Services:</p>
        <ul style={listStyle}>
          <li>Portrait Photography</li>
          <li>Event Photography</li>
          <li>Corporate Photography</li>
          <li>Abstract/Creative Photography</li>
        </ul>
        <p>
          I offer services across a wide area and have extensive experience working with both private clients and corporations. Every session is customized to bring your vision to life, ensuring professional and creative results.
        </p>
      </div>

      <div>
        <img src={photoImg} alt="Photography Example" style={imgStyle} />
      </div>
    </section>
  );
};

export default ServiceExample;
