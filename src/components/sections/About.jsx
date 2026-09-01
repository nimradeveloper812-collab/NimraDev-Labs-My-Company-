import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Users, Code2, Rocket, Award, Globe, HeartHandshake } from 'lucide-react';
import LogoMark from '../common/LogoMark';

const pillars = [
  {
    title: 'High-Standard Engineering',
    description: 'We adhere to clean architecture, automated testing, and international software design principles to build robust digital solutions.',
    icon: Code2,
  },
  {
    title: 'Client-Centric Collaboration',
    description: 'We speak transparent business language, focusing on speed, measurable ROI, and direct developer communication with no bureaucratic delays.',
    icon: HeartHandshake,
  },
  {
    title: 'Direct Engineering Access',
    description: 'Collaborate directly with lead software architects and senior developers. Transparent sprint roadmaps and weekly milestone demos.',
    icon: Users,
  },
  {
    title: 'Built For Enterprise Scale',
    description: 'From your initial MVP launch to high-traffic cloud backends and automated AI pipelines, our systems scale seamlessly.',
    icon: Rocket,
  },
];

const checklist = [
  'Transparent milestone pricing with zero hidden fees',
  'Rapid 2-3 week turnaround for custom MVPs & web portals',
  'Direct WhatsApp & PKT/UTC+5 timezone communication',
  '100% full IP & source code ownership transferred to client',
  'Enterprise security, SSL encryption, and GDPR/privacy ready',
  '30-day dedicated post-launch warranty & SLA support included',
];

const achievements = [
  { count: '5+', title: 'Projects Delivered', desc: 'Across Pakistan, UK, UAE & USA' },
  { count: '90%', title: 'Client Satisfaction', desc: 'Long-term corporate partnerships' },
  { count: '30+', title: 'Engineers & Tech Experts', desc: 'Full-stack, AI, Mobile & UI/UX' },
  { count: '24/7', title: 'Technical Support', desc: 'Real-time monitoring & maintenance' }
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
                Who We Are · About Us
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#0D0D14] tracking-tight leading-tight">
              Engineering Digital Growth for <span className="text-[#6C3FFC]">Enterprises & Startups</span>
            </h2>
            
            <p className="text-slate-600 font-inter text-base sm:text-lg leading-relaxed">
              At <strong>NimraDev Labs</strong>, we are an advanced software and AI engineering house dedicated to building reliable, high-performance, and future-ready technology solutions.
            </p>
            
            <p className="text-slate-600 font-inter text-sm sm:text-base leading-relaxed">
              We empower corporate enterprises, educational institutions, retail chains, and visionary startups with custom web applications, turnkey ERP/POS systems, mobile apps, and AI automations designed to streamline operations and accelerate revenue.
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
          
          {/* Right Column: Visual Brand & Achievement Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-[3rem] border-2 border-[#6C3FFC]/20 p-8 overflow-hidden bg-[#F8F9FC] shadow-[0_20px_60px_rgba(108,63,252,0.08)] flex flex-col items-center text-center space-y-6">
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <LogoMark className="w-24 h-24 bg-white border border-[#E8DAFF] shadow-sm rounded-3xl" />
                
                <div>
                  <h3 className="text-2xl font-sora font-extrabold text-[#0D0D14] tracking-tight">
                    NimraDev Labs
                  </h3>
                  <p className="text-xs font-mono text-[#6C3FFC] font-semibold uppercase tracking-wider mt-1">
                    Software & AI Engineering
                  </p>
                </div>
                
                <p className="text-slate-600 font-inter text-xs leading-relaxed max-w-xs">
                  Delivering cutting-edge web applications, enterprise ERP/POS software, and intelligent AI automations worldwide.
                </p>
              </div>

              {/* Achievement Grid inside card */}
              <div className="relative z-10 grid grid-cols-2 gap-3 w-full pt-2">
                {achievements.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-2xl border border-[#E6E6E6] shadow-sm text-center">
                    <span className="font-sora font-extrabold text-lg text-[#6C3FFC] block">
                      {item.count}
                    </span>
                    <span className="font-sora font-bold text-[11px] text-[#0D0D14] block leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 px-5 py-1.5 rounded-full bg-white border border-[#E6E6E6] text-slate-700 font-sora font-semibold text-[11px] shadow-sm">
                Enterprise Quality · 100% Code Ownership
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* 4 Pillars of Approach */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-sora font-bold text-[#0D0D14] mb-3">
              Our Core Engineering Values
            </h3>
            <p className="text-slate-600 text-sm">
              Our engineering philosophy combines technical excellence with measurable business value.
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
