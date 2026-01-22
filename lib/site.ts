import { BusinessConfig, ServiceItem, TestimonialItem } from '../types';

export const BUSINESS_INFO: BusinessConfig = {
  name: "Mossel Bay Plumbing Pros",
  city: "Mossel Bay",
  phone: "27821234567",
  phoneDisplay: "082 123 4567",
  whatsapp: "27821234567",
  address: "14 Marsh Street, Mossel Bay Central, 6500",
  email: "info@mosselbayplumbing.co.za",
  heroHeadline: "Reliable Plumbing Services in Mossel Bay & Hartenbos",
  heroSubheadline: "Fast, affordable, and professional licensed experts available 24/7."
};

export const SERVICES: ServiceItem[] = [
  { id: '1', title: 'Emergency Repairs', description: 'Burst pipes, overflowing toilets, or severe leaks? We arrive within 60 minutes.', iconName: 'Wrench' },
  { id: '2', title: 'Installations', description: 'Professional installation of geysers, taps, mixers, and washing machine points.', iconName: 'Hammer' },
  { id: '3', title: 'Maintenance', description: 'Regular check-ups to prevent costly disasters, especially for holiday homes.', iconName: 'ShieldCheck' },
  { id: '4', title: 'Blocked Drains', description: 'Advanced equipment to clear stubborn blockages in kitchens and bathrooms instantly.', iconName: 'Droplets' },
  { id: '5', title: 'Geysers & Heat Pumps', description: 'Repair and replacement of solar geysers, electric geysers, and heat pumps.', iconName: 'Thermometer' },
  { id: '6', title: 'Leak Detection', description: 'Non-invasive leak detection to find hidden damp issues behind walls.', iconName: 'Search' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: '1', name: 'Hanlie Venter', location: 'Hartenbos', text: 'They came out at 2 AM when our geyser burst. Incredible service and fair pricing considering the hour!', rating: 5 },
  { id: '2', name: 'Mike Rossouw', location: 'Dana Bay', text: 'Professional, clean, and fast. The technician explained everything before starting work.', rating: 5 },
  { id: '3', name: 'Sarah Meyer', location: 'Heiderand', text: 'Best plumbing service in the Garden Route. Replaced my taps and fixed a leak under the sink quickly.', rating: 5 }
];

export const FEATURES = [
  { title: "Available 24/7", description: "We are always ready to handle your emergencies, day or night." },
  { title: "Licensed Experts", description: "Our team consists of fully certified and insured professionals." },
  { title: "No Call-Out Surprises", description: "Upfront quotes with no hidden fees or surprise charges." }
];

export function whatsappLink(message: string = "") {
  return `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}
export function telLink() {
  return `tel:${BUSINESS_INFO.phone}`;
}