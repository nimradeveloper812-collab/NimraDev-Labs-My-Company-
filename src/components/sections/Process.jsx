import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, ShieldCheck, Rocket, Headset, Sparkles } from 'lucide-react';

const processSteps = [
  { 
    num: '01', 
    title: 'Discovery & Consultation', 
    desc: 'Understanding your business goals, target audience, technical scope, and project deliverables.',
    icon: Search
  },
  { 
    num: '02', 
    title: 'UI/UX & Architecture', 
    desc: 'Crafting intuitive Figma user journeys, interactive wireframes, and scalable database schemas.',
    icon: PenTool
  },
  { 
    num: '03', 
    title: 'Agile Development', 
    desc: 'Writing clean, test-driven modular code in 1-2 week sprints with continuous milestone demos.',
    icon: Code
  },
  { 
    num: '04', 
    title: 'Rigorous QA & Security', 
    desc: 'End-to-end functional testing, performance stress tests, vulnerability audits, and cross-browser QA.',
    icon: ShieldCheck
  },
  { 
    num: '05', 
    title: 'Cloud Deployment', 
    desc: 'Automated CI/CD deployment, SSL setup, cloud server configurations, and database indexing.',
    icon: Rocket
  },
  { 
    num: '06', 
    title: '24/7 SLA Support', 
    desc: 'Post-launch warranty, continuous server monitoring, software feature upgrades, and technical training.',
    icon: Headset
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden font-inter text-[#0D0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FC] border border-[#E6E6E6] mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#6C3FFC]" />
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              How We Work · Proven Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#0D0D14] mb-4 tracking-tight">
            Our 6-Step Software Engineering Process
          </h2>
          <p className="text-slate-600 font-inter text-base sm:text-lg">
            A transparent, milestone-driven development lifecycle engineered for on-time, zero-defect delivery.
          </p>
        </div>

        <div className="relative">
          {/* Subtle connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#6C3FFC]/25 to-transparent -translate-y-8 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center p-6 bg-[#F8F9FC] rounded-3xl border border-[#E6E6E6] hover:border-[#6C3FFC]/40 hover:bg-white hover:shadow-purple-glow transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#6C3FFC] flex items-center justify-center mb-4 z-10 shadow-sm group-hover:scale-110 group-hover:bg-[#6C3FFC] text-[#6C3FFC] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  
                  <span className="font-mono text-xs font-bold text-[#6C3FFC] bg-[#F4EFFF] px-2.5 py-0.5 rounded-full mb-2">
                    Step {step.num}
                  </span>

                  <h3 className="text-sm font-sora font-bold text-[#0D0D14] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 font-inter text-xs leading-relaxed">
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
