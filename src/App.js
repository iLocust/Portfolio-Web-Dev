import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
// These components are no longer used in the minimalist design
// import Awards from './components/Awards';
// import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { initAnimations } from './utils/animations';
import { initModalEffects } from './utils/modalEffects';

// Import styles
import './styles.css';
import './animations.css'; // New animations
import './modal-animations.css'; // Modal-specific animations

function App() {
  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();
    initModalEffects();
    
    // Add class to all reveal elements after a short delay
    // to trigger initial animations
    setTimeout(() => {
      document.querySelectorAll('.reveal-element').forEach(el => {
        el.classList.add('revealed');
      });
    }, 300);
  }, []);
  
  return (
    <div className="app bg-darkBg text-white">
      <Header />
      <main>
        <Hero />
        {/* <Awards /> */}
        {/* <Services /> */}
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;