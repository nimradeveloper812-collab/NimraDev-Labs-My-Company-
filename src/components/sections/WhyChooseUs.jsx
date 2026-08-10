import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Lightbulb, Activity, Code2, TrendingUp } from 'lucide-react';

const reasons = [
  { title: 'Quality Driven', icon: ShieldCheck, description: 'Every line of code and design element is crafted to meet the highest industry standards.' },
  { title: 'Client Focused', icon: Target, description: 'We align our engineering process with your specific business goals and operational needs.' },
  { title: 'Innovation Led', icon: Lightbulb, description: 'Integrating modern solutions like AI to keep your business ahead of the curve.' },
  { title: 'Reliable Development', icon: Activity, description: 'Robust architectures and thorough testing ensure your products perform consistently.' },
  { title: 'Modern Technology', icon: Code2, description: 'Utilizing the latest frameworks and tools for fast, secure, and maintainable software.' },
  { title: 'Scalable Solutions', icon: TrendingUp, description: 'Built to grow with your business, from initial launch to enterprise scale.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0D0D14] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6C3FFC]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="text-xs font-sora font-semibold text-[#8B5CF6] tracking-widest uppercase">
              The NimraDev Advantage
            </span>
          </div>
          <h2 className="text-fluid-h2 font-sora font-bold text-white mb-6">
            Why Choose Us
          </h2>
          <p className="text-slate-400 font-inter text-lg">
            We go beyond just writing code. We act as your engineering partners to ensure digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#6C3FFC]/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#6C3FFC]/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#8B5CF6] stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-sora font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-400 font-inter text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
