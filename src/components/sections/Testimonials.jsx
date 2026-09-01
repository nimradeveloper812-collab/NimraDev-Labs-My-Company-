import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Muhammad Usman',
    role: 'Managing Director',
    company: 'Royal Tex Fabrics',
    location: 'Faisalabad / Lahore',
    review: 'NimraDev Labs ne hamaray business ke liye custom inventory aur billing software develop kiya. Sub se achi baat inki continuous support aur WhatsApp par foran response hai. Kaam bilkul waqt par deliver kiya.',
    rating: 5,
    tag: 'Inventory & POS',
  },
  {
    name: 'Zeeshan Afzal',
    role: 'Director',
    company: 'Aspire Learning Campus',
    location: 'Gujranwala, Pakistan',
    review: 'Hamein student admissions, fee receipts aur SMS notifications ke liye campus software chahiye tha. NimraDev Labs ne bohot asan aur reliable portal banaya jis se hamara manual kaam khatam ho gaya.',
    rating: 5,
    tag: 'School ERP Suite',
  },
  {
    name: 'Adeel Munir',
    role: 'Co-Founder',
    company: 'UrbanStyle Store',
    location: 'Lahore, Pakistan',
    review: 'Hamari online store ki loading speed aur checkout bohot behtar ho gaya hai. Local payment gateways aur order tracking seamlessly chal rahe hain. Highly recommended team for web development.',
    rating: 5,
    tag: 'E-Commerce Store',
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-16 bg-[#F8F9FC] relative overflow-hidden font-inter text-[#0D0D14] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Compact) */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-[#E6E6E6] mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
            <span className="text-[10px] font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Client Feedback
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] mb-2 tracking-tight">
            Trusted by Pakistani Business Owners & Founders
          </h2>
          <p className="text-slate-600 font-inter text-xs sm:text-sm">
            Real feedback from local businesses, retail chains, and institutes relying on our software.
          </p>
        </div>

        {/* Testimonials Grid (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E6E6E6] shadow-sm hover:border-[#6C3FFC]/40 hover:shadow-purple-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[#F4EFFF] text-[#6C3FFC] border border-[#E8DAFF]">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 font-inter text-xs sm:text-sm leading-relaxed mb-5 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#6C3FFC] text-white flex items-center justify-center font-sora font-bold text-xs shadow-sm shrink-0">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-sora font-bold text-xs text-[#0D0D14]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-inter leading-tight">
                    {item.role} · <span className="text-[#6C3FFC] font-semibold">{item.company}</span>
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
