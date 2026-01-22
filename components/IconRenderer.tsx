import React from 'react';
import { Wrench, Hammer, ShieldCheck, Droplets, Thermometer, Search, Star, Phone, CheckCircle2, Clock, MapPin, MessageCircle } from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className }) => {
  const props = { className };

  switch (name) {
    case 'Wrench': return <Wrench {...props} />;
    case 'Hammer': return <Hammer {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Droplets': return <Droplets {...props} />;
    case 'Thermometer': return <Thermometer {...props} />;
    case 'Search': return <Search {...props} />;
    case 'Star': return <Star {...props} />;
    case 'Phone': return <Phone {...props} />;
    case 'CheckCircle2': return <CheckCircle2 {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'MapPin': return <MapPin {...props} />;
    case 'MessageCircle': return <MessageCircle {...props} />;
    default: return <Wrench {...props} />;
  }
};