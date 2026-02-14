import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProductsSection from './components/ProductsSection';
import About from './components/About';
import Photography from './components/pages/Photography';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ 
      margin: 0, 
      backgroundColor: '#050811', 
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden' // Prevents horizontal jitter during scroll
    }}>
      <Header />
      
      {/* Wrapping everything in one view ensures IDs are always 'findable' 
         Remove the <Routes> for these sections to keep them on one page.
      */}
      <div id="home"><HomeSection /></div>
      <div id="services"><ProductsSection /></div>
      <div id="photography"><Photography /></div>
      <div id="about"><About /></div>
      <div id="contact"><ContactPage /></div>
      
      <Footer />
    </div>
  );
};

export default App;