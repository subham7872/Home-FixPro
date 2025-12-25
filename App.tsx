
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import LeadForm from './components/LeadForm';
import ProcessFlow from './components/ProcessFlow';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <ServicesGrid />

        <section id="why-us" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Quality assurance" 
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-8">
                  Why Thousands Trust <br />
                  <span className="text-green-500">HomeFix Pro USA</span>
                </h2>
                <div className="space-y-8">
                  {[
                    { title: 'Upfront Pricing', desc: 'We provide detailed quotes before any work begins. No hidden fees, no surprises.' },
                    { title: '24/7 Rapid Response', desc: 'Emergency? Our team is on standby 24 hours a day, 7 days a week, 365 days a year.' },
                    { title: 'Certified Techs', desc: 'All technicians are background-checked, licensed, insured, and continuously trained.' },
                    { title: 'Local Expertise', desc: 'We live where you live. We understand local building codes and specific climate needs.' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white shrink-0 font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessFlow />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">Get Your Free Estimate</h2>
              <p className="text-slate-600">Takes less than 60 seconds. No credit card required.</p>
            </div>
            <LeadForm />
          </div>
        </section>

        <Testimonials />

        {/* Call to Action Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-8">
                Need Urgent Help? <br />
                <span className="text-green-500">We're One Call Away.</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12">
                Don't let a small leak turn into a major disaster. Get professional help now.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:1-800-HOME-FIX" className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-2xl flex items-center justify-center gap-4 transition-all shadow-2xl active:scale-95">
                  <Phone className="w-8 h-8" />
                  Call 1-800-HOME-FIX
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white/90 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <a 
            href="tel:1-800-HOME-FIX" 
            className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 rounded-xl shadow-2xl active:scale-95 transition-transform"
          >
            <Phone className="w-6 h-6" />
            Call Emergency Dispatch
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
