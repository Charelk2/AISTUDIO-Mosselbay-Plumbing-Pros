import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, whatsappLink, telLink } from '../lib/site';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2074&auto=format&fit=crop" 
          alt="Professional plumber fixing a sink" 
          className="w-full h-full object-cover"
        />
        {/* Dark Moody Overlay */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
            </span>
            <span className="text-white text-sm font-medium">#1 Rated in {BUSINESS_INFO.city}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            {BUSINESS_INFO.heroHeadline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-slate-200 mb-8 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
            {BUSINESS_INFO.heroSubheadline}
          </p>

          {/* Value Props - STEPPS (Practical Value) */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-10 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>60 Minute Response Time</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-500"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>No Hidden Call-Out Fees</span>
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex gap-4">
            <a 
              href={whatsappLink("I need a plumber urgently.")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-green-900/50 flex items-center gap-2 transform hover:-translate-y-1"
            >
              WhatsApp Us
            </a>
            <a 
              href={telLink()}
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
            >
              Call Now: {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;