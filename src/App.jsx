import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import About from './components/About';
import Photography from './components/pages/Photography';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';

const App = () => (
  <div style={{ margin: 0, paddingTop: '100px', backgroundColor: '#0f1720', minHeight: '100vh', boxSizing: 'border-box' }}>
    <Header />
    <Routes>
      <Route path="/" element={
        <>
          <div id="home"><HeroSection /></div>
          <div id="services"><ProductsSection /></div>
          <div id="photography"><Photography /></div>
          <div id="about"><About /></div>
          <div id="contact"><ContactPage /></div>
        </>
      } />
      <Route path="/services" element={<ProductsSection />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
