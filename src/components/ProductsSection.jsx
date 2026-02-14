import React, { useState } from 'react';
import portrait from '../assets/product1.jpg';
import horse from '../assets/product2.jpg';
import product from '../assets/product3.jpg';
import eventsImg from '../assets/cameraset.jpg';
import documentaryImg from '../assets/documentary.jpg';
import abstractImg from '../assets/abstract.jpeg';

const products = [
  { 
    title: 'Portraits', 
    img: portrait, 
    link: '/photography/portraits',
    desc: 'Professional portraits that capture personality, emotion, and style.'
  },
  { 
    title: 'Events', 
    img: eventsImg, 
    link: '/photography/events',
    desc: 'Documenting weddings, corporate events, and social gatherings.'
  },
  { 
    title: 'Documentary', 
    img: documentaryImg, 
    link: '/videography/documentary',
    desc: 'Cinematic storytelling to showcase real-life events and narratives.'
  },
  { 
    title: 'Abstract', 
    img: abstractImg, 
    link: '/photography/abstract',
    desc: 'Creative and artistic compositions for modern and abstract visuals.'
  },
  { 
    title: 'Videography', 
    img: horse, 
    link: '/videography',
    desc: 'Cinematic storytelling, commercials, documentaries, and events.'
  },
  { 
    title: 'Post Production', 
    img: product, 
    link: '/postproduction',
    desc: 'Editing, color grading, sound design, and visual enhancement.'
  }
];

const ProductsSection = () => {
  const [hovered, setHovered] = useState(null);

  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: '#0f1720',
    color: 'white',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '36px',
    marginBottom: '50px',
    letterSpacing: '1px'
  };

  const cardsContainer = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px'
  };

  const baseCardStyle = {
    width: '300px',
    borderRadius: '15px',
    overflow: 'hidden',
    textDecoration: 'none',
    backgroundColor: '#1c2430',
    color: 'white',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '20px'
  };

  const titleStyle = {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#d4af37' // gold accent
  };

  const descStyle = {
    fontSize: '14px',
    opacity: 0.8,
    lineHeight: '1.5'
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Our Services</h2>

      <div style={cardsContainer}>
        {products.map((p, idx) => {
          const isHovered = hovered === idx;

          return (
            <a
              key={idx}
              href={p.link}
              style={{
                ...baseCardStyle,
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                backgroundColor: isHovered ? '#243041' : '#1c2430'
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={p.img} alt={p.title} style={imageStyle} />

              <div style={contentStyle}>
                <h3 style={titleStyle}>{p.title}</h3>
                <p style={descStyle}>{p.desc}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
