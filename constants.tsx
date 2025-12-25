
import React from 'react';
import { 
  Droplets, 
  Wind, 
  Zap, 
  Wrench, 
  Flame, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Star 
} from 'lucide-react';
import { Service, Review } from './types';

export const COLORS = {
  navy: '#0F172A',
  electricGreen: '#22C55E',
  slate: '#64748B'
};

export const SERVICES: Service[] = [
  {
    id: 'plumbing',
    title: 'Plumbing Repairs',
    description: 'Expert leak repair, pipe replacement, and fixture installation.',
    icon: 'Droplets'
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    description: 'Powerful clearing of clogs in sinks, showers, and main lines.',
    icon: 'Droplets'
  },
  {
    id: 'hvac',
    title: 'HVAC Solutions',
    description: 'Reliable furnace repair and high-efficiency AC installation.',
    icon: 'Wind'
  },
  {
    id: 'electrical',
    title: 'Electrical Repairs',
    description: 'Safe troubleshooting, panel upgrades, and rewiring.',
    icon: 'Zap'
  },
  {
    id: 'water-heater',
    title: 'Water Heaters',
    description: 'Repair and installation of tank and tankless systems.',
    icon: 'Flame'
  },
  {
    id: 'emergency',
    title: '24/7 Emergency',
    description: 'Immediate response for urgent repairs at any hour.',
    icon: 'Wrench'
  }
];

export const TRUST_INDICATORS = [
  { icon: <Star className="w-5 h-5 text-yellow-400" />, text: '5-Star Reviews' },
  { icon: <ShieldCheck className="w-5 h-5 text-green-500" />, text: 'Licensed & Insured' },
  { icon: <Clock className="w-5 h-5 text-green-500" />, text: 'Same-Day Service' },
  { icon: <MapPin className="w-5 h-5 text-green-500" />, text: 'Local Technicians' }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Michael R.',
    rating: 5,
    text: 'Called for a pipe burst at 2 AM. They arrived in 30 minutes and fixed it instantly. Absolute lifesavers!',
    location: 'Houston, TX'
  },
  {
    id: '2',
    author: 'Sarah L.',
    rating: 5,
    text: 'Professional, upfront with pricing, and very tidy. The best HVAC service I have had in years.',
    location: 'Phoenix, AZ'
  },
  {
    id: '3',
    author: 'James T.',
    rating: 5,
    text: 'Upgraded our electrical panel. Fast, efficient, and passed inspection without a hitch.',
    location: 'Miami, FL'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Droplets': return <Droplets className="w-8 h-8" />;
    case 'Wind': return <Wind className="w-8 h-8" />;
    case 'Zap': return <Zap className="w-8 h-8" />;
    case 'Wrench': return <Wrench className="w-8 h-8" />;
    case 'Flame': return <Flame className="w-8 h-8" />;
    default: return <Wrench className="w-8 h-8" />;
  }
};
