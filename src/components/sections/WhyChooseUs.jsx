import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Lightbulb, Activity, Code2, TrendingUp, Clock, Headset, Award, FileCode } from 'lucide-react';

const reasons = [
  { 
    title: 'Experienced Engineering Team', 
    icon: Code2, 
    description: 'Our senior developers, AI specialists, and UI/UX architects bring years of hands-on production expertise to your project.' 
  },
  { 
    title: 'Agile & Rapid Turnaround', 
    icon: Clock, 
    description: 'We follow structured 1-2 week sprints, delivering functioning MVPs in 2-3 weeks without compromising code security or performance.' 
  },
  { 
    title: 'Cost-Effective & Scalable', 
    icon: TrendingUp, 
    description: 'Enterprise-grade software architecture built to handle millions of transactions at transparent, milestone-based investment costs.' 
  },
  { 
    title: '100% Code Ownership & NDA', 
    icon: ShieldCheck, 
    description: 'Complete intellectual property, documentation, and repository ownership are transferred to you upon project signoff with strict NDA confidentiality.' 
  },
  { 
    title: 'Modern & Future-Proof Tech Stack', 
    icon: Lightbulb, 
    description: 'We build on modern standards: React, Next.js, Python, FastAPI, Node.js, and leading AI models for maximum long-term longevity.' 
  },
  { 
    title: '24/7 Dedicated SLA Support', 
    icon: Headset, 
    description: 'Continuous server monitoring, automated security patching, and round-the-clock emergency support to keep your operations 100% online.' 
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0D0D14] text-white relative overflow-hidden font-inter">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6C3FFC]/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-sm">
            <span className="text-xs font-sora font-semibold text-[#8B5CF6] tracking-widest uppercase">
              The NimraDev Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-white mb-6 tracking-tight">
            Why Choose Us as Your Technology Partner?
          </h2>
          <p className="text-slate-300 font-inter text-base sm:text-lg leading-relaxed">
            We don't just write code — we act as your dedicated strategic engineering department, driving measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.04] border border-white/10 hover:border-[#6C3FFC]/60 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 text-[#8B5CF6] shadow-sm">
                    <Icon className="w-7 h-7 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xl font-sora font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-300 font-inter text-sm leading-relaxed">
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
