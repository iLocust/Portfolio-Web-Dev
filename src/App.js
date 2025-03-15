import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
// These components are no longer used in the minimalist design
// import Awards from './components/Awards';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Import styles
import './styles.css';
import './animations.css'; // New animations

function App() {
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