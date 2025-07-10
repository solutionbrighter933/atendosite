import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import IntegrationsDemo from './components/IntegrationsDemo';
import AgentTypes from './components/AgentTypes';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TermosDeUso from './pages/TermosDeUso';
import Privacidade from './pages/Privacidade';
import Sobre from './pages/Sobre';
import { initializeAnimations } from './utils/animations';
import './styles/animations.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <IntegrationsDemo />
      <AgentTypes />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      
      <div id="cursor-follower" className="fixed w-4 h-4 bg-cyan-400/50 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300" />
    </>
  );
};

function App() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
        </div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/termos" element={<TermosDeUso />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;