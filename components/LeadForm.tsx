
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, User, Phone, MapPin, ChevronLeft } from 'lucide-react';
import { SERVICES } from '../constants';
import { LeadStep, LeadData } from '../types';

const LeadForm: React.FC = () => {
  const [step, setStep] = useState<LeadStep>('service');
  const [formData, setFormData] = useState<LeadData>({
    serviceType: '',
    name: '',
    phone: '',
    zip: ''
  });

  const handleServiceSelect = (id: string) => {
    setFormData({ ...formData, serviceType: id });
    setStep('contact');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    // Simulated submission
    console.log('Lead submitted:', formData);
  };

  const reset = () => {
    setStep('service');
    setFormData({ serviceType: '', name: '', phone: '', zip: '' });
  };

  return (
    <div id="get-estimate" className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Side Info */}
        <div className="bg-slate-900 p-8 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4">Request Service</h3>
            <p className="text-slate-400 text-sm mb-6">Complete our quick form and a local technician will call you within 15 minutes.</p>
            
            <div className="space-y-6">
              {[
                { label: 'Licensed Experts', desc: 'Background-checked staff' },
                { label: 'Upfront Pricing', desc: 'No hidden surprise fees' },
                { label: 'Warranty Included', desc: 'Satisfaction guaranteed' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="bg-green-500/20 p-1.5 rounded-full h-fit">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{item.label}</p>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Support 24/7</p>
            <p className="text-xl font-bold text-green-500">1-800-HOME-FIX</p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:col-span-2 p-8">
          <AnimatePresence mode="wait">
            {step === 'service' && (
              <motion.div
                key="step-service"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-bold text-slate-900">What do you need help with?</h4>
                  <span className="text-xs font-bold text-slate-400">STEP 1/2</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.title)}
                      className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl hover:border-green-500 hover:bg-green-50 group transition-all text-left"
                    >
                      <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-slate-700">{service.title}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'contact' && (
              <motion.div
                key="step-contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-2 mb-6 cursor-pointer text-slate-400 hover:text-slate-600" onClick={() => setStep('service')}>
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm font-medium">Back to service selection</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-bold text-slate-900">Where should we contact you?</h4>
                  <span className="text-xs font-bold text-slate-400">STEP 2/2</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      required
                      type="text" 
                      placeholder="Your Full Name" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      required
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      required
                      type="text" 
                      placeholder="ZIP Code" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                      value={formData.zip}
                      onChange={(e) => setFormData({...formData, zip: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-green-500 text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-lg mt-4 active:scale-95"
                  >
                    Submit Request
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    By submitting, you agree to our terms & may receive automated SMS/calls regarding your request.
                  </p>
                </form>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="step-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-3">Request Received!</h4>
                <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                  A technician specializing in <span className="font-bold text-slate-900">{formData.serviceType}</span> is being dispatched to call you shortly at {formData.phone}.
                </p>
                <button 
                  onClick={reset}
                  className="text-green-500 font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
