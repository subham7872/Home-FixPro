
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 p-2 rounded-lg">
              <span className="text-white font-bold text-xl italic leading-none">HF</span>
            </div>
            <span className={`text-xl font-bold font-poppins tracking-tight ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
              HomeFix <span className="text-green-500">Pro USA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Why Us', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium transition-colors hover:text-green-500 ${
                  isScrolled ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:1-800-HOME-FIX" 
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              1-800-HOME-FIX
            </a>
          </div>

          <button 
            className="md:hidden text-slate-900" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-slate-900'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-slate-900 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-xl font-bold text-white">HomeFix <span className="text-green-500">Pro USA</span></span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-white" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-center">
              {['Services', 'Why Us', 'Reviews', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-2xl font-semibold text-white hover:text-green-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="tel:1-800-HOME-FIX" 
                className="mt-4 bg-green-500 text-white py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call 1-800-HOME-FIX
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
