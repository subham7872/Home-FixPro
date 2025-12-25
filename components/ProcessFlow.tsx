
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, UserCheck, Search, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: 'Request Service',
    desc: 'Call us or fill out our simple online form.'
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: 'Quick Callback',
    desc: 'A local pro calls you within 15 minutes.'
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'On-Site Inspection',
    desc: 'Clear upfront quote provided on-site.'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Job Done',
    desc: 'Quality work completed with a full warranty.'
  }
];

const ProcessFlow: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">How It Works</h2>
          <p className="text-slate-400">Stress-free repair process from start to finish.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-800 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-green-500 mb-6 border-4 border-slate-900 outline outline-2 outline-slate-800 group-hover:outline-green-500/50 transition-all">
                  <div className="bg-slate-700 p-4 rounded-full group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm hidden lg:flex">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
