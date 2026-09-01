import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, ShoppingCart, Brain, Settings, ArrowRight, 
  Sparkles, CheckCircle2, MessageCircle, Star, Layers 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoMark from '../common/LogoMark';

const bannerServices = [
  { 
    title: 'Web Design & Dev', 
    icon: Monitor, 
    desc: 'High-speed, responsive & modern web apps built to convert.' 
  },
  { 
    title: 'E-Commerce Stores', 
    icon: ShoppingCart, 
    desc: 'Scalable online stores with local payment & inventory sync.' 
  },
  { 
    title: 'AI & Automations', 
    icon: Brain, 
    desc: 'Intelligent AI chatbots, workflows, and custom LLM integrations.' 
  },
  { 
    title: 'Custom Software & ERP', 
    icon: Settings, 
    desc: 'Tailored CRM, ERP, and SaaS architectures crafted for business.' 
  },
];

const keyStats = [
  { value: '5+', label: 'Delivered Projects', sub: 'Global & Pakistan Delivery' },
  { value: '90%', label: 'Client Satisfaction', sub: 'Verified 5-Star Reviews' },
  { value: '2-3 Wks', label: 'Rapid Turnaround', sub: 'Agile MVP Sprints' },
  { value: '24/7', label: 'Dedicated Support', sub: 'Direct Engineering SLA' },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#F8F9FC] font-inter">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6C3FFC]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1500px] w-full mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Main Card Container */}
        <div className="bg-white/90 backdrop-blur-xl border border-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_10px_40px_-15px_rgba(108,63,252,0.1)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Side: Brand, Headline, Conversion Copy & CTA (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
            >
              
              {/* Compact Trust Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F9FC] border border-[#E6E6E6] shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C3FFC] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6C3FFC]"></span>
                </span>
                <span className="text-[11px] font-sora font-semibold text-[#0D0D14]">
                  Accepting Projects · Pakistan & Global
                </span>
              </div>

              {/* Main Headline with Logo */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <LogoMark className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F4EFFF] border-[#E8DAFF] shrink-0 shadow-sm rounded-2xl" />
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sora font-extrabold text-[#0D0D14] tracking-tight leading-tight">
                    NimraDev <span className="text-[#6C3FFC]">Labs</span>
                  </h1>
                  <p className="text-xs font-space font-semibold text-[#6C3FFC] tracking-wide uppercase mt-0.5">
                    Software & AI Engineering Excellence
                  </p>
                </div>
              </div>

              {/* Subheadline (Micro-typography) */}
              <p className="text-xs sm:text-sm text-slate-600 font-inter leading-relaxed max-w-lg">
                We craft intelligent <span className="font-semibold text-[#0D0D14]">web applications</span>, <span className="font-semibold text-[#0D0D14]">turnkey ERP/POS software</span>, and <span className="font-semibold text-[#0D0D14]">AI automations</span> that empower businesses to scale with speed and efficiency.
              </p>

              {/* Compact CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-sora font-bold text-xs text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] shadow-sm hover:shadow-purple-glow transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-sora font-semibold text-xs text-[#0D0D14] bg-white border border-[#E6E6E6] hover:border-[#6C3FFC]/50 hover:text-[#6C3FFC] shadow-sm transition-all"
                >
                  <Layers className="w-3.5 h-3.5 text-[#6C3FFC]" />
                  <span>Explore Products</span>
                </a>

                <a
                  href="https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-sora font-semibold text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Social Proof Snippet */}
              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 font-inter">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span><strong>5.0/5.0</strong> rating by corporate leaders & founders</span>
              </div>

            </motion.div>

            {/* Right Side: 4 Core Service Cards (5 Cols - Compact Grid) */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="lg:col-span-5 grid grid-cols-2 gap-3 w-full"
            >
              {bannerServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#F8F9FC] rounded-2xl p-3.5 sm:p-4 border border-[#E6E6E6] shadow-sm hover:border-[#6C3FFC]/40 hover:bg-white hover:shadow-purple-glow hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DAFF] flex items-center justify-center mb-2 shadow-sm">
                        <Icon className="w-4 h-4 text-[#6C3FFC] stroke-[1.75]" />
                      </div>
                      <h3 className="font-sora font-bold text-[#0D0D14] text-xs leading-tight mb-1">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 font-inter text-[11px] leading-snug line-clamp-2">
                        {service.desc}
                      </p>
                    </div>
                    <Link 
                      to="/services"
                      className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-sora font-semibold text-[#6C3FFC]"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* Bottom Enterprise Stats Counter Bar (Compact) */}
          <div className="mt-6 pt-4 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-3">
            {keyStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F8F9FC] border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DAFF] flex items-center justify-center shrink-0 text-[#6C3FFC]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-sora font-extrabold text-base text-[#0D0D14] leading-none">
                      {stat.value}
                    </span>
                    <span className="font-sora font-semibold text-[10px] text-[#6C3FFC]">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-inter leading-none mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
