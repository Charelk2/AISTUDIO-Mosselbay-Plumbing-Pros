import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { whatsappLink, telLink } from '../lib/site';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      {/* WhatsApp Button - The 'One Thing' Trigger */}
      <a 
        href={whatsappLink("Hi, I have a plumbing emergency.")}
        className="flex-1 bg-green-600 text-white flex flex-col items-center justify-center py-3 active:bg-green-700 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="w-6 h-6 animate-pulse" />
          <span className="font-bold text-lg">WhatsApp</span>
        </div>
        <span className="text-xs text-green-100 font-medium">Fastest Response</span>
      </a>

      {/* Call Button - The Fallback */}
      <a 
        href={telLink()}
        className="flex-1 bg-slate-900 text-white flex flex-col items-center justify-center py-3 active:bg-slate-800 transition-colors"
        aria-label="Call Now"
      >
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6" />
          <span className="font-bold text-lg">Call Now</span>
        </div>
        <span className="text-xs text-slate-400 font-medium">Speak to a Pro</span>
      </a>
    </div>
  );
};

export default StickyCTA;