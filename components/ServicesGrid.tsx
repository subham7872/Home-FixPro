
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, getIcon } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">
            Professional Home Repair Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From minor fixes to major installations, our certified local experts handle it all with speed and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-500 hover:bg-white transition-all group shadow-sm hover:shadow-xl cursor-default"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-bold text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
