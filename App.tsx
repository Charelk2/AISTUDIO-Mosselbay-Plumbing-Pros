import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <ContactFooter />
      <StickyCTA />
    </main>
  );
};

export default App;