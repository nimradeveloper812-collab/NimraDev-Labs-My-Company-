import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Users, Code2, Rocket, Award, Globe } from 'lucide-react';
import LogoMark from '../common/LogoMark';

const pillars = [
  {
    title: 'Local Trust + Global Standards',
    description: 'We understand the unique hurdles of Pakistani businesses — payment integrations, local user habits, and cost-efficiency — while writing clean, international-grade code.',
    icon: Globe,
  },
  {
    title: 'Zero Jargon, 100% Results',
    description: 'No overwhelming tech buzzwords. We speak clear business language, focusing on speed, conversion rates, and measurable ROI for your company.',
    icon: Zap,
  },
  {
    title: 'Direct Engineering Access',
    description: 'Work directly with lead software engineers and UI/UX designers. No middlemen, no lost requirements, and agile turnaround on every sprint.',
    icon: Users,
  },
  {
    title: 'Built For Long-Term Scale',
    description: 'From your first landing page to high-traffic SaaS backends and automated AI workflows, our code is structured for effortless scaling.',
    icon: Rocket,
  },
];

const checklist = [
  'Transparent milestone pricing with zero hidden fees',
  'Rapid 2-3 week delivery for custom web & MVPs',
  'Direct WhatsApp & PKT/UTC+5 timezone communication',
  '100% full IP & source code ownership transferred to you',
  'Enterprise security, SSL encryption, and GDPR/privacy ready',
  '30-day dedicated post-launch warranty & support included',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden font-inter text-[#0D0D14]">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6C3FFC]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FC] border border-[#E6E6E6] shadow-sm">
              <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
                Our Story & Mission
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#0D0D14] tracking-tight leading-tight">
              Engineering Digital Growth for <span className="text-[#6C3FFC]">Local & Global</span> Visionaries
            </h2>
            
            <p className="text-slate-600 font-inter text-base sm:text-lg leading-relaxed">
              At <strong>NimraDev Labs</strong>, we founded our software engineering house with a straightforward vision: to give Pakistani business owners, entrepreneurs, and global founders the exact same caliber of high-end software architecture that world-class tech companies rely on — without excessive agency overhead.
            </p>
            
            <p className="text-slate-600 font-inter text-sm sm:text-base leading-relaxed">
              Whether you are modernizing a traditional brick-and-mortar business in Pakistan, launching an e-commerce brand, or building a next-generation AI SaaS product, we combine battle-tested technical reliability with conversion-focused design.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column: Visual Brand Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] border-2 border-[#6C3FFC]/20 flex items-center justify-center p-8 overflow-hidden bg-[#F8F9FC] shadow-[0_20px_60px_rgba(108,63,252,0.08)]">
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                <LogoMark className="w-28 h-28 bg-white border border-[#E8DAFF] shadow-sm rounded-3xl" />
                
                <div>
                  <h3 className="text-2xl font-sora font-extrabold text-[#0D0D14] tracking-tight">
                    NimraDev Labs
                  </h3>
                  <p className="text-xs font-mono text-[#6C3FFC] font-semibold uppercase tracking-wider mt-1">
                    Pakistan · Global Delivery
                  </p>
                </div>
                
                <p className="text-slate-600 font-inter text-xs leading-relaxed max-w-xs">
                  We build modern websites, AI solutions, and custom software that help businesses scale with confidence.
                </p>
                
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8B5CF6]/40"></div>
                  <div className="w-2 h-2 rounded-full bg-[#6C3FFC]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#8B5CF6]/40"></div>
                </div>

                <div className="px-5 py-1.5 rounded-full bg-white border border-[#E6E6E6] text-slate-700 font-sora font-semibold text-[11px] shadow-sm">
                  Reliable · Scalable · High-Converting
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* 4 Pillars of Approach */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-sora font-bold text-[#0D0D14] mb-3">
              How Our Team Delivers Reliable Growth
            </h3>
            <p className="text-slate-600 text-sm">
              Our engineering philosophy combines technical excellence with direct business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E6E6E6] hover:border-[#6C3FFC]/40 hover:bg-white hover:shadow-purple-glow transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E6E6] flex items-center justify-center mb-4 text-[#6C3FFC] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-sora font-bold text-[#0D0D14] text-base mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 font-inter text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
