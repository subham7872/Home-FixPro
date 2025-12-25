
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';
import { TRUST_INDICATORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-10" 
          alt="Home Repair Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-slate-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-green-200"
            >
              <ShieldCheck className="w-4 h-4" />
              Available 24/7 For Emergency Services
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-poppins font-bold text-slate-900 leading-tight mb-6"
            >
              Trusted Home Repair <br /> 
              <span className="text-green-500">Experts Available 24/7</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              From plumbing emergencies to electrical maintenance, we provide fast, reliable solutions for homeowners and landlords. Licensed, insured, and locally trusted.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#get-estimate" 
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Get Free Estimate
              </a>
              <a 
                href="tel:1-800-HOME-FIX" 
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-xl hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {TRUST_INDICATORS.map((indicator, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-600 font-medium">
                  {indicator.icon}
                  {indicator.text}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1200" 
                alt="Plumber working"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl flex items-center gap-4 shadow-lg border border-white">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Over 50,000 Homes Fixed</p>
                  <p className="text-sm text-slate-600">Rated 4.9/5 by local residents</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-2xl shadow-xl font-bold text-center border-4 border-white hidden md:block"
            >
              <div className="text-2xl leading-none">30</div>
              <div className="text-xs uppercase">Min Response</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export default Hero;
