
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  location: string;
}

export type LeadStep = 'service' | 'contact' | 'success';

export interface LeadData {
  serviceType: string;
  name: string;
  phone: string;
  zip: string;
}
