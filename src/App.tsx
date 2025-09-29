import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <div className="scroll-smooth">
      <Navigation 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <main className="snap-y snap-mandatory overflow-y-auto h-screen">
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-start">
          <Skills />
        </div>
        <div className="snap-start">
          <Projects />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;