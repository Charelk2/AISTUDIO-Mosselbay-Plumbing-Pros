import React from 'react';
import { SERVICES } from '../lib/site';
import { IconRenderer } from './IconRenderer';
import { whatsappLink } from '../lib/site';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Plumbing Emergencies? <br/>
            <span className="text-blue-600">We Fix Them Fast.</span>
          </h2>
          <p className="text-slate-600 text-lg">
            From leaking taps to burst geysers, our licensed professionals handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <a 
              key={service.id} 
              href={whatsappLink(`I'm interested in ${service.title}`)}
              className="group border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-100 bg-slate-50 hover:bg-white"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconRenderer name={service.iconName} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                Book Now <span>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;