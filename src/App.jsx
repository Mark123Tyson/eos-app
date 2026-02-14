import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import About from './components/About';
import Photography from './components/pages/Photography';
import ContactPage from './components/pages/ContactPage'; 
import Footer from './components/Footer';

const App = () => (
  <div style={{ margin: 0, padding: 0, backgroundColor: '#0f1720', minHeight: '100vh', boxSizing: 'border-box' }}>
    <Header />
    <HeroSection />
    <ProductsSection />
    <Photography /> 
    <About />
    <ContactPage />
    <Footer />
  </div>
);

export default App;
