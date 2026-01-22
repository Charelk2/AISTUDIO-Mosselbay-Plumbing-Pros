import React from 'react';
import { TESTIMONIALS } from '../lib/site';
import { Star, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16">
          Why Locals Trust Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 flex-grow">"{testimonial.text}"</p>
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;