import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, ShieldCheck, Rocket, Headset, Sparkles } from 'lucide-react';

const processSteps = [
  { 
    num: '01', 
    title: 'Discovery', 
    desc: 'Understanding business goals, scope, and target audience.',
    icon: Search
  },
  { 
    num: '02', 
    title: 'UI/UX Design', 
    desc: 'Interactive Figma wireframes and modern user journeys.',
    icon: PenTool
  },
  { 
    num: '03', 
    title: 'Agile Coding', 
    desc: 'Clean, test-driven modular code in fast 1-2 week sprints.',
    icon: Code
  },
  { 
    num: '04', 
    title: 'QA & Testing', 
    desc: 'Rigorous functional, security, and performance testing.',
    icon: ShieldCheck
  },
  { 
    num: '05', 
    title: 'Deployment', 
    desc: 'Automated CI/CD setup, cloud servers, and live launch.',
    icon: Rocket
  },
  { 
    num: '06', 
    title: '24/7 Support', 
    desc: 'Dedicated maintenance, SLA monitoring, and upgrades.',
    icon: Headset
  },
];

export default function Process() {
  return (
    <section id="process" className="py-14 sm:py-16 bg-[#F8F9FC] relative overflow-hidden font-inter text-[#0D0D14] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Compact) */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-[#E6E6E6] mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
            <span className="text-[10px] font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Proven Methodology
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] mb-2 tracking-tight">
            Our 6-Step Software Engineering Process
          </h2>
          <p className="text-slate-600 font-inter text-xs sm:text-sm">
            A transparent, milestone-driven development lifecycle engineered for on-time delivery.
          </p>
        </div>

        <div className="relative">
          {/* Subtle connecting line on desktop */}
          <div className="hidden xl:block absolute top-1/2 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#6C3FFC]/20 to-transparent -translate-y-7 pointer-events-none"></div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="relative flex flex-col items-center text-center p-4 sm:p-5 bg-white rounded-2xl border border-[#E6E6E6] hover:border-[#6C3FFC]/40 hover:shadow-purple-glow hover:-translate-y-1 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F4EFFF] border border-[#E8DAFF] flex items-center justify-center mb-3 z-10 shadow-sm group-hover:scale-105 group-hover:bg-[#6C3FFC] text-[#6C3FFC] group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  
                  <span className="font-mono text-[10px] font-bold text-[#6C3FFC] bg-[#F4EFFF] px-2 py-0.5 rounded-full mb-1.5">
                    Step {step.num}
                  </span>

                  <h3 className="text-xs sm:text-sm font-sora font-bold text-[#0D0D14] mb-1 leading-snug">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 font-inter text-[11px] leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
