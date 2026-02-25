import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProductsSection from './components/ProductsSection';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div
      style={{
        margin: 0,
        backgroundColor: '#050811',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <section id="home">
        <HomeSection />
      </section>

      <section id="services">
        <ProductsSection />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

      <Footer />
    </div>
  );
};

export default App;