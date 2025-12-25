
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-green-500 p-2 rounded-lg">
                <span className="text-white font-bold text-xl italic leading-none">HF</span>
              </div>
              <span className="text-xl font-bold font-poppins text-slate-900">
                HomeFix <span className="text-green-500">Pro USA</span>
              </span>
            </div>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Premium home repair services for homeowners who value speed, quality, and fair pricing. Available 24/7 across the United States.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-100 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors text-slate-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-100 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors text-slate-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-100 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors text-slate-500">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-4">
              {['Emergency Repairs', 'Plumbing Services', 'HVAC Solutions', 'Electrical Work', 'Water Heaters', 'Drain Cleaning'].map(item => (
                <li key={item}>
                  <a href="#services" className="text-slate-500 hover:text-green-500 text-sm font-medium transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Process', 'Pricing Guide', 'Customer Reviews', 'Careers', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-green-500 text-sm font-medium transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-slate-100 p-2 rounded-lg h-fit text-slate-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Emergency Help</p>
                  <a href="tel:1-800-HOME-FIX" className="font-bold text-slate-900 hover:text-green-500 transition-colors">1-800-HOME-FIX</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-100 p-2 rounded-lg h-fit text-slate-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Email Us</p>
                  <p className="font-bold text-slate-900">support@homefixprousa.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-100 p-2 rounded-lg h-fit text-slate-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Main Office</p>
                  <p className="font-bold text-slate-900">742 Service Blvd, Suite 100<br />Austin, TX 73301</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© 2024 HomeFix Pro USA. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-500">Privacy Policy</a>
            <a href="#" className="hover:text-green-500">Terms of Service</a>
            <a href="#" className="hover:text-green-500">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
