export interface BusinessConfig {
  name: string;
  city: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  address: string;
  email: string;
  heroHeadline: string;
  heroSubheadline: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FeatureItem {
  title: string;
  description: string;
}