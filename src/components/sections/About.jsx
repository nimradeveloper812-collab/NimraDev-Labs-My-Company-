import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HeartHandshake, Users, Rocket, Code2, Sparkles } from 'lucide-react';
import LogoMark from '../common/LogoMark';

const pillars = [
  {
    title: 'High-Standard Code',
    description: 'Clean architecture, automated testing, and international software design principles.',
    icon: Code2,
  },
  {
    title: 'Client-Centric Focus',
    description: 'Transparent business language, speed, and direct developer communication.',
    icon: HeartHandshake,
  },
  {
    title: 'Direct Dev Access',
    description: 'Collaborate directly with lead software architects. Weekly milestone demos.',
    icon: Users,
  },
  {
    title: 'Enterprise Scalability',
    description: 'From initial MVP to high-traffic cloud backends and automated AI pipelines.',
    icon: Rocket,
  },
];

const checklist = [
  'Transparent milestone pricing with zero hidden fees',
  'Rapid 2-3 week turnaround for custom MVPs',
  'Direct WhatsApp & PKT/UTC+5 timezone support',
  '100% full IP & source code ownership transferred',
  'Enterprise security, SSL encryption, and privacy ready',
  '30-day dedicated post-launch warranty included',
];

const achievements = [
  { count: '5+', title: 'Projects Delivered', desc: 'Pakistan & Global' },
  { count: '90%', title: 'Client Satisfaction', desc: 'Long-term partnerships' },
  { count: '5+', title: 'Engineers & Experts', desc: 'Full-stack & AI' },
  { count: '24/7', title: 'Technical Support', desc: 'Real-time SLA' }
];

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-14 bg-white relative overflow-hidden font-inter text-[#0D0D14] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Story Grid (Compact) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left Column (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F8F9FC] border border-[#E6E6E6] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
              <span className="text-[10px] font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
                Who We Are · About Us
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] tracking-tight leading-tight">
              Engineering Digital Growth for <span className="text-[#6C3FFC]">Enterprises & Startups</span>
            </h2>
            
            <p className="text-slate-600 font-inter text-xs sm:text-sm leading-relaxed">
              At <strong>NimraDev Labs</strong>, we are an advanced software and AI engineering house dedicated to building reliable, high-performance, and future-ready technology solutions.
            </p>
            
            <p className="text-slate-600 font-inter text-xs sm:text-sm leading-relaxed">
              We empower corporate enterprises, educational institutions, retail chains, and visionary startups with custom web applications, turnkey ERP/POS systems, mobile apps, and AI automations.
            </p>

            {/* Compact Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6C3FFC] shrink-0" />
                  <span className="text-xs font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column: Visual Card (5 Cols - Compact) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm rounded-2xl border border-[#6C3FFC]/20 p-5 bg-[#F8F9FC] shadow-sm flex flex-col items-center text-center space-y-3">
              <div className="flex items-center gap-3">
                <LogoMark className="w-12 h-12 bg-white border border-[#E8DAFF] shadow-sm rounded-xl shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg font-sora font-extrabold text-[#0D0D14] tracking-tight leading-none">
                    NimraDev Labs
                  </h3>
                  <p className="text-[10px] font-mono text-[#6C3FFC] font-semibold uppercase tracking-wider mt-0.5">
                    Software & AI Engineering
                  </p>
                </div>
              </div>

              {/* Achievement Grid inside card */}
              <div className="grid grid-cols-2 gap-2 w-full pt-1">
                {achievements.map((item, idx) => (
                  <div key={idx} className="bg-white p-2.5 rounded-xl border border-[#E6E6E6] text-center shadow-xs">
                    <span className="font-sora font-extrabold text-base text-[#6C3FFC] block leading-tight">
                      {item.count}
                    </span>
                    <span className="font-sora font-bold text-[10px] text-[#0D0D14] block leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-3.5 py-1 rounded-full bg-white border border-[#E6E6E6] text-slate-700 font-sora font-semibold text-[10px] shadow-xs">
                Enterprise Quality · 100% Code Ownership
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* 4 Pillars of Approach (Compact) */}
        <div className="pt-8 border-t border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8F9FC] border border-[#E6E6E6] hover:border-[#6C3FFC]/40 hover:bg-white hover:shadow-purple-glow transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center mb-2 text-[#6C3FFC] shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-sora font-bold text-[#0D0D14] text-xs mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-600 font-inter text-[11px] leading-snug">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
