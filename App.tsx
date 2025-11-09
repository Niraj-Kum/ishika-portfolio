
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CTA from './components/CTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;