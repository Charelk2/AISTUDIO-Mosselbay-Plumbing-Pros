import React from 'react';
import { Phone } from 'lucide-react';
import { telLink, BUSINESS_INFO } from '../lib/site';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-40 transition-all duration-300 glass shadow-sm py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a href="#" className="font-black text-xl md:text-2xl tracking-tighter text-slate-900 leading-tight">
          Mossel Bay <br className="md:hidden" />
          <span className="text-blue-600">Plumbing Pros</span>
        </a>

        {/* Desktop Links (Minimal - One Thing Focus) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-colors">Services</a>
          <a href="#reviews" className="text-slate-600 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-colors">Reviews</a>
          
          <a 
            href={telLink()} 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            <Phone className="w-4 h-4" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Header CTA Icon (Since full menu is distracting) */}
        <a href={telLink()} className="md:hidden bg-blue-600 text-white p-2 rounded-full shadow-lg animate-pulse">
            <Phone className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;