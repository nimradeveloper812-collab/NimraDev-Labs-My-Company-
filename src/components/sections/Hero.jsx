import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, ShoppingCart, Brain, Settings, ArrowRight, 
  ShieldCheck, Sparkles, PhoneCall, CheckCircle2, MessageCircle, Star, Award, Layers 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoMark from '../common/LogoMark';

const bannerServices = [
  { 
    title: 'Web Design &\nDevelopment', 
    icon: Monitor, 
    desc: 'High-speed, responsive & modern web apps built to convert visitors into paying clients.' 
  },
  { 
    title: 'E-Commerce\nSolutions', 
    icon: ShoppingCart, 
    desc: 'Scalable online stores with seamless payment gateways, checkout, and inventory sync.' 
  },
  { 
    title: 'AI Solutions &\nAutomation', 
    icon: Brain, 
    desc: 'Intelligent AI chatbots, workflow automation, and custom LLM integrations for your operations.' 
  },
  { 
    title: 'Custom Software\n& ERP Systems', 
    icon: Settings, 
    desc: 'Tailored CRM, ERP, and SaaS architectures crafted specifically for your business model.' 
  },
];

const keyStats = [
  { value: '500+', label: 'Delivered Projects', sub: 'Global & Pakistan Delivery' },
  { value: '99.8%', label: 'Client Satisfaction', sub: 'Verified 5-Star Reviews' },
  { value: '2-3 Wks', label: 'Rapid Turnaround', sub: 'Agile MVP & Production Sprints' },
  { value: '24/7', label: 'Dedicated Support', sub: 'Direct Engineering SLA' },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 pb-20 overflow-hidden bg-[#F8F9FC] min-h-[92vh] flex flex-col justify-center font-inter">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Purple Gradient ambient background waves */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6C3FFC]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-tr from-[#8B5CF6]/30 to-[#6C3FFC]/20 [clip-path:polygon(0_60%,_100%_100%,_100%_100%,_0%_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-[0_20px_80px_-20px_rgba(108,63,252,0.12)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Side: Brand, Headline, Conversion Copy & CTA (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            >
              
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E6E6] shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C3FFC] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6C3FFC]"></span>
                </span>
                <span className="text-xs font-sora font-semibold text-[#0D0D14]">
                  Accepting New Projects · Pakistan & Global Clients
                </span>
              </div>

              {/* Main Headline (Sora) */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6">
                <LogoMark className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[#F4EFFF] border-[#E8DAFF] shrink-0 shadow-sm rounded-3xl" />
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold text-[#0D0D14] tracking-tight leading-[1.15]">
                    NimraDev <span className="text-[#6C3FFC]">Labs</span>
                  </h1>
                  <p className="text-xs sm:text-sm font-space font-semibold text-[#6C3FFC] tracking-wider mt-1 uppercase">
                    Software & AI Engineering Excellence
                  </p>
                </div>
              </div>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 font-inter leading-relaxed max-w-xl">
                We craft intelligent, future-ready <span className="font-semibold text-[#0D0D14]">web applications</span>, <span className="font-semibold text-[#0D0D14]">turnkey ERP/POS software</span>, and <span className="font-semibold text-[#0D0D14]">AI automations</span> that empower businesses to scale with speed and efficiency.
                <span className="block mt-2 text-slate-500 text-sm">
                  World-class software engineering with direct technical communication, transparent milestone pricing, and 100% full code ownership.
                </span>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sora font-bold text-sm text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] shadow-purple-glow hover:shadow-purple-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-sora font-semibold text-sm text-[#0D0D14] bg-white border border-[#E6E6E6] hover:border-[#6C3FFC]/50 hover:text-[#6C3FFC] shadow-sm transition-all duration-300 text-center"
                >
                  <Layers className="w-4 h-4 text-[#6C3FFC]" />
                  <span>Explore Software Products</span>
                </a>

                <a
                  href="https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-sora font-semibold text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all duration-300 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Social Proof Quick Snippet */}
              <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 font-inter">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span><strong>5.0/5.0</strong> rating by corporate leaders & founders across Pakistan & globally</span>
              </div>

            </motion.div>

            {/* Right Side: 4 Core Service Cards (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
            >
              {bannerServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E6E6E6] shadow-sm hover:border-[#6C3FFC]/40 hover:shadow-purple-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#F4EFFF] border border-[#E8DAFF] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#6C3FFC] stroke-[1.5]" />
                      </div>
                      <h3 className="font-sora font-bold text-[#0D0D14] text-sm sm:text-base leading-tight mb-2 whitespace-pre-line">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 font-inter text-xs leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <Link 
                      to="/services"
                      className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-sora font-semibold text-[#6C3FFC] hover:text-[#8B5CF6]"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* Bottom Enterprise Stats Counter Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyStats.map((stat, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F4EFFF] border border-[#E8DAFF] flex items-center justify-center shrink-0 mt-0.5 text-[#6C3FFC]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sora font-extrabold text-xl sm:text-2xl text-[#0D0D14] leading-tight">
                    {stat.value}
                  </h4>
                  <p className="font-sora font-bold text-xs text-[#6C3FFC]">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-500 font-inter mt-0.5">
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
