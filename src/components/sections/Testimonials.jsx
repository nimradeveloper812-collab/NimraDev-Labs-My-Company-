import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Hamza Tariq',
    role: 'CEO & Founder',
    company: 'RetailHub Pakistan',
    location: 'Lahore, Pakistan',
    review: 'NimraDev Labs transformed our offline retail inventory into a high-speed e-commerce store with integrated local payments. Our online checkout conversion increased by over 180% in the first two months. Their communication and WhatsApp responsiveness was exceptional.',
    rating: 5,
    tag: 'E-Commerce Platform',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Product Lead',
    company: 'Nexus Health SaaS',
    location: 'London / Remote',
    review: 'The technical depth and speed of execution at NimraDev Labs is on par with top European agencies. They engineered our healthcare compliance portal 2 weeks ahead of schedule with zero security vulnerabilities. Highly recommended for enterprise projects.',
    rating: 5,
    tag: 'Enterprise Web & Security',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Operations Director',
    company: 'Apex Logistics & Freight',
    location: 'Karachi, Pakistan',
    review: 'We needed a custom fleet dispatch system with live GPS telemetry. Other agencies quoted astronomical prices and 6-month timelines. NimraDev Labs delivered a production-ready custom software in just 4 weeks. It saved us hundreds of manual hours.',
    rating: 5,
    tag: 'Custom Fleet SaaS',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F8F9FC] relative overflow-hidden font-inter text-[#0D0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E6E6] mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#6C3FFC]" />
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Client Testimonials & Trust
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#0D0D14] mb-4 tracking-tight">
            Trusted by Business Leaders Across Pakistan & Worldwide
          </h2>
          <p className="text-slate-600 font-inter text-base sm:text-lg">
            Hear directly from the founders, directors, and teams who rely on our software engineering expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#E6E6E6] shadow-sm hover:border-[#6C3FFC]/40 hover:shadow-purple-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#F4EFFF] text-[#6C3FFC] border border-[#E8DAFF]">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 font-inter text-sm leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#6C3FFC] text-white flex items-center justify-center font-sora font-bold text-sm shadow-sm">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-sora font-bold text-sm text-[#0D0D14]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-inter">
                    {item.role} · <span className="text-[#6C3FFC] font-medium">{item.company}</span>
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono">
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
