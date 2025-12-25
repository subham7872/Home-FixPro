
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600">Rated 4.9/5 stars based on over 12,000+ local customer reviews.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group"
            >
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-green-100 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 mb-8 italic relative z-10 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-full border border-slate-200 shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                  <img src={`https://picsum.photos/100/100?random=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-700">Join 50,000+ happy homeowners.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
