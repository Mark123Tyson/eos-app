import React, { useState, useEffect, useRef } from 'react';

const ProofGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['Corporate', 'NGO', 'Events', 'Branding', 'Videography', 'Post-Production'];
  
  // Responsive check for padding adjustments
  const isSmallOrMedium = windowWidth < 1100;

  const imageLinks = [
    "https://i.ibb.co/qLJjy2hF/image1.webp", "https://i.ibb.co/dnWQ3BB/image2.webp",
    "https://i.ibb.co/Qjp3kwMQ/image3.webp", "https://i.ibb.co/qLYK4m2T/image4.webp",
    "https://i.ibb.co/RTQ7pFBY/image5.webp", "https://i.ibb.co/fGPjPTWf/image6.webp",
    "https://i.ibb.co/jZ14pSHM/image7.webp", "https://i.ibb.co/276vnMsD/image8.webp",
    "https://i.ibb.co/Q3VryXsY/image9.webp", "https://i.ibb.co/3mVqXVRZ/image10.webp",
    "https://i.ibb.co/PZ6vVLtF/image11.webp", "https://i.ibb.co/DDfpb6gx/image12.webp",
    "https://i.ibb.co/YTDJ8F7r/image13.webp", "https://i.ibb.co/nMfbFF42/image14.webp",
    "https://i.ibb.co/nsgBQTcP/image15.webp", "https://i.ibb.co/Kxv3gLfX/image16.webp",
    "https://i.ibb.co/dJs2Kb3K/image17.webp", "https://i.ibb.co/dwfFS4ZK/image18.webp",
    "https://i.ibb.co/jCmnfmB/image19.webp", "https://i.ibb.co/cSdZNPDw/image20.webp",
    "https://i.ibb.co/nMdCMYqM/image21.webp", "https://i.ibb.co/YFQy0tBm/image22.webp",
    "https://i.ibb.co/xt6fZVNv/image23.webp", "https://i.ibb.co/7dvvXWXF/image24.webp",
    "https://i.ibb.co/kVFWvhf6/image25.webp", "https://i.ibb.co/6RWTNsD6/image26.webp",
    "https://i.ibb.co/P3ZVDwK/image27.webp", "https://i.ibb.co/zh3S9LLc/image28.webp",
    "https://i.ibb.co/DHZRhj5N/image29.webp", "https://i.ibb.co/htKt2Mz/image30.webp",
    "https://i.ibb.co/rK0cJsQj/image31.webp", "https://i.ibb.co/Qvqc9BQS/image32.webp",
    "https://i.ibb.co/b5LNK2CL/image33.webp", "https://i.ibb.co/DP3qjFbn/image34.webp",
    "https://i.ibb.co/39XSyGzH/image35.webp", "https://i.ibb.co/0jSV539m/image36.webp",
    "https://i.ibb.co/7x3RBYwK/image37.webp", "https://i.ibb.co/v2sH0bh/image38.webp"
  ];

  const serviceAlbums = categories.map((cat, index) => ({
    category: cat,
    title: `${cat} Portfolio`,
    images: imageLinks.slice(index * 6, (index * 6) + 6)
  }));

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = sectionRef.current.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const Navigation = ({ isFooter }) => (
    <div style={{...styles.filterMenu, marginBottom: isFooter ? '10px' : '12px'}}>
      <button 
        onClick={() => handleCategoryChange('All')}
        style={{...styles.filterBtn, color: activeCategory === 'All' ? '#d4af37' : '#fff', borderColor: activeCategory === 'All' ? '#d4af37' : 'rgba(255,255,255,0.2)'}}
        onMouseEnter={(e) => { e.target.style.background = 'rgba(212, 175, 55, 0.1)'; }}
        onMouseLeave={(e) => { e.target.style.background = 'none'; }}
      >
        All Services
      </button>
      {categories.map(cat => (
        <button 
          key={cat} 
          onClick={() => handleCategoryChange(cat)}
          style={{
            ...styles.filterBtn,
            color: activeCategory === cat ? '#d4af37' : 'rgba(255,255,255,0.6)',
            borderColor: activeCategory === cat ? '#d4af37' : 'rgba(255,255,255,0.1)',
          }}
          onMouseEnter={(e) => { e.target.style.borderColor = '#d4af37'; e.target.style.color = '#fff'; }}
          onMouseLeave={(e) => { 
            if(activeCategory !== cat) {
               e.target.style.borderColor = 'rgba(255,255,255,0.1)';
               e.target.style.color = 'rgba(255,255,255,0.6)';
            }
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );

  const styles = {
    section: { 
      backgroundColor: '#050811', 
      /* FIXED: Added top padding for small/medium devices to prevent header overlap */
      padding: isSmallOrMedium ? '100px 5% 50px 5%' : '10px 5% 50px 5%', 
      marginTop: '-15px',
      textAlign: 'center', 
      color: 'white',
      position: 'relative',
      zIndex: 5
    },
    heading: { 
      fontSize: '44px', 
      letterSpacing: '5px', 
      textTransform: 'uppercase', 
      marginBottom: '8px',
      marginTop: '0',
      fontWeight: '900'
    },
    line: { width: '60px', height: '4px', backgroundColor: '#d4af37', margin: '0 auto 25px auto' },
    filterMenu: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' },
    filterBtn: { 
      background: 'none', 
      border: '1px solid', 
      padding: '8px 18px', 
      cursor: 'pointer', 
      borderRadius: '4px', 
      textTransform: 'uppercase', 
      fontSize: '11px', 
      fontWeight: '700',
      letterSpacing: '1.5px', 
      transition: '0.3s all ease' 
    },
    subLabel: { 
      textTransform: 'uppercase', 
      fontSize: '13px', 
      color: '#d4af37', 
      marginBottom: '35px', 
      letterSpacing: '2px', 
      opacity: 0.7, 
      marginTop: '12px' 
    },
    footerLabel: { 
      textTransform: 'uppercase', 
      fontSize: '13px', 
      color: '#d4af37', 
      marginBottom: '15px', 
      letterSpacing: '2px', 
      opacity: 0.7 
    },
    
    grid: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
      gap: '30px', 
      maxWidth: '1400px', 
      margin: '0 auto' 
    },

    card: { 
      position: 'relative', 
      height: '450px', 
      cursor: 'pointer', 
      overflow: 'hidden', 
      borderRadius: '15px', 
      border: '1px solid #1a1a1a', 
      backgroundColor: '#000',
      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
    },
    compositeContainer: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', height: '100%', width: '100%', gap: '2px' },
    baseImg: { width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' },
    portalContainer: { position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' },
    circleFrame: { 
      width: '160px', 
      height: '160px', 
      borderRadius: '50%', 
      border: '4px solid #d4af37', 
      overflow: 'hidden', 
      boxShadow: '0 0 35px rgba(0,0,0,0.9)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      zIndex: 5
    },
    roundImg: { width: '100%', height: '100%', objectFit: 'cover' },
    overlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)', padding: '30px 25px', textAlign: 'left', zIndex: 10 },
    tag: { color: '#d4af37', fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' },
    cardTitle: { fontSize: '22px', margin: '5px 0', color: '#fff', fontWeight: '800' },
    singleImgWrapper: { 
      height: '350px', 
      borderRadius: '12px', 
      overflow: 'hidden', 
      border: '1px solid #1a1a1a',
      transition: 'transform 0.3s ease'
    },
    singleImg: { width: '100%', height: '100%', objectFit: 'cover' }
  };

  return (
    <section id="proof" ref={sectionRef} style={styles.section}>
      <h2 style={styles.heading}>Project Archive</h2>
      <div style={styles.line}></div>

      <Navigation isFooter={false} />
      <p style={styles.subLabel}>Filter by Specialty</p>

      <div style={styles.grid}>
        {activeCategory === 'All' ? (
          serviceAlbums.map((album) => (
            <div 
              key={album.category} 
              style={{
                ...styles.card,
                transform: hoveredCard === album.category ? 'translateY(-5px)' : 'translateY(0)',
                borderColor: hoveredCard === album.category ? '#d4af37' : '#1a1a1a',
                boxShadow: hoveredCard === album.category ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
              }} 
              onClick={() => handleCategoryChange(album.category)}
              onMouseEnter={() => setHoveredCard(album.category)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.compositeContainer}>
                {[1, 2, 3, 4, 5].map((imgIdx, gridIdx) => {
                  const gridPos = [
                    {gc: '1/2', gr: '1/2'}, {gc: '2/4', gr: '1/2'},
                    {gc: '1/2', gr: '2/4'}, {gc: '2/3', gr: '3/4'}, {gc: '3/4', gr: '3/4'}
                  ];
                  return (
                    <img 
                      key={imgIdx}
                      src={album.images[imgIdx]} 
                      style={{
                        ...styles.baseImg, 
                        gridColumn: gridPos[gridIdx].gc, 
                        gridRow: gridPos[gridIdx].gr,
                        opacity: hoveredCard === album.category ? 0.6 : 0.45,
                        filter: hoveredCard === album.category ? 'grayscale(0%)' : 'grayscale(30%)'
                      }} 
                      alt="sub" 
                    />
                  )
                })}
                
                <div style={styles.portalContainer}>
                  <div style={{
                    ...styles.circleFrame,
                    transform: hoveredCard === album.category ? 'scale(1.1)' : 'scale(1)',
                    borderColor: hoveredCard === album.category ? '#fff' : '#d4af37'
                  }}>
                    <img src={album.images[0]} style={styles.roundImg} alt="focus" />
                  </div>
                </div>

                <div style={styles.overlay}>
                  <span style={styles.tag}>{album.category}</span>
                  <h3 style={styles.cardTitle}>{album.title}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          imageLinks.filter((_, i) => categories[i % 6] === activeCategory).map((img, idx) => (
            <div key={idx} style={styles.singleImgWrapper}>
              <img src={img} alt="gallery" style={styles.singleImg} />
            </div>
          ))
        )}
      </div>

      <div style={{marginTop: '40px'}}>
        <p style={styles.footerLabel}>Browse Other Services</p>
        <Navigation isFooter={true} />
      </div>
    </section>
  );
};

export default ProofGallery;