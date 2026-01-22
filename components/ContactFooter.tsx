import React from 'react';
import { BUSINESS_INFO, whatsappLink, telLink } from '../lib/site';
import { Phone, MessageCircle } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-24 md:pb-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          Don't Let A Leak Ruin Your Day.
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Our team is on standby in {BUSINESS_INFO.city} right now. No call-out fees for emergencies.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          <a 
            href={telLink()} 
            className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS_INFO.phoneDisplay}
          </a>
          <a 
            href={whatsappLink("I need a quote.")}
            className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="mt-2">{BUSINESS_INFO.address}</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;