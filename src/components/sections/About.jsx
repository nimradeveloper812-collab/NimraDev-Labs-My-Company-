import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import LogoMark from '../common/LogoMark';

const features = [
  'Quality-Driven Development',
  'Modern Technology Stack',
  'Client-Focused Approach',
  'Practical & Scalable Solutions',
  'Innovation-Led Engineering',
  'Long-Term Business Growth',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#F8F9FC] border border-slate-200 mb-6">
              <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
                About Us
              </span>
            </div>
            
            <h2 className="text-fluid-h2 font-sora font-bold text-[#0D0D14] mb-6">
              A Growing Technology Company Based in Pakistan
            </h2>
            
            <p className="text-slate-600 font-inter mb-6 leading-relaxed">
              At NimraDev Labs, we believe in building digital products that actually move the needle for your business. We are not about vanity metrics or unnecessary complexity; we focus on quality, innovation, and practical solutions.
            </p>
            
            <p className="text-slate-600 font-inter mb-8 leading-relaxed">
              By combining modern technologies with a client-focused development approach, we ensure that every website, AI integration, and custom software we deliver is built for reliability, scalability, and long-term business growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6C3FFC]" />
                  <span className="text-sm font-sora font-medium text-[#0D0D14]">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            {/* DP Image Recreation Container */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-full border-2 border-[#8B5CF6]/40 flex items-center justify-center p-8 overflow-hidden bg-white shadow-[0_0_60px_rgba(108,63,252,0.05)]">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Logo */}
                <LogoMark className="w-32 h-32 lg:w-40 lg:h-40 bg-[#F4EFFF] border-[#E8DAFF] [&_svg]:scale-110 shadow-sm mb-8" />
                
                {/* Name */}
                <h3 className="text-3xl lg:text-4xl font-sora font-bold text-[#0D0D14] tracking-tight mb-4">
                  NimraDev Labs
                </h3>
                
                {/* Tagline */}
                <p className="text-[#6C3FFC] font-inter text-sm max-w-[280px] leading-relaxed mb-6">
                  We build modern websites, AI solutions, and custom software that help businesses scale with confidence.
                </p>
                
                {/* Dots */}
                <div className="flex gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/50"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/50"></div>
                </div>
                
                {/* Pill Button */}
                <div className="px-6 py-2 rounded-full bg-[#F4EFFF] border border-[#E8DAFF] text-[#6C3FFC] font-sora font-semibold text-xs tracking-wider">
                  NimraDev Labs
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
