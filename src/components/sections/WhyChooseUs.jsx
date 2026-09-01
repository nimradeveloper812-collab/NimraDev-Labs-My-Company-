import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Lightbulb, Activity, Code2, TrendingUp, Clock, Headset, Sparkles } from 'lucide-react';

const reasons = [
  { 
    title: 'Experienced Engineering Team', 
    icon: Code2, 
    description: 'Our senior developers, AI specialists, and UI/UX architects bring years of hands-on production expertise to your project.' 
  },
  { 
    title: 'Agile & Rapid Turnaround', 
    icon: Clock, 
    description: 'We follow structured 1-2 week sprints, delivering functioning MVPs in 2-3 weeks without compromising code security.' 
  },
  { 
    title: 'Cost-Effective & Scalable', 
    icon: TrendingUp, 
    description: 'Enterprise-grade software architecture built to handle millions of transactions at transparent milestone costs.' 
  },
  { 
    title: '100% Code Ownership & NDA', 
    icon: ShieldCheck, 
    description: 'Complete intellectual property and source code ownership transferred to you with strict NDA confidentiality.' 
  },
  { 
    title: 'Modern & Future-Proof Tech', 
    icon: Lightbulb, 
    description: 'We build on modern standards: React, Next.js, Python, FastAPI, Node.js, and leading AI models for long-term reliability.' 
  },
  { 
    title: '24/7 Dedicated SLA Support', 
    icon: Headset, 
    description: 'Continuous server monitoring, automated security patching, and round-the-clock emergency support.' 
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-[#0D0D14] relative overflow-hidden font-inter border-t border-slate-100">
      {/* Subtle Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6C3FFC]/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F4EFFF] border border-[#E8DAFF] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              The NimraDev Advantage
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sora font-bold text-[#0D0D14] mb-3 tracking-tight">
            Why Choose Us as Your Technology Partner?
          </h2>
          <p className="text-slate-600 font-inter text-sm sm:text-base leading-relaxed">
            We act as your dedicated strategic engineering department, driving measurable business results.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#F8F9FC] border border-[#E6E6E6] hover:border-[#6C3FFC]/40 hover:bg-white hover:shadow-purple-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E8DAFF] flex items-center justify-center mb-4 text-[#6C3FFC] shadow-sm">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base font-sora font-bold text-[#0D0D14] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 font-inter text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
