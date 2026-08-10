import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Brain, Settings } from 'lucide-react';
import LogoMark from '../common/LogoMark';

const bannerServices = [
  { title: 'Web\nDevelopment', icon: Monitor, desc: 'We build fast, responsive and modern websites tailored to your business needs.' },
  { title: 'E-Commerce\nDevelopment', icon: ShoppingCart, desc: 'We create secure and scalable online stores that help you sell and grow online.' },
  { title: 'AI Solutions &\nAutomation', icon: Brain, desc: 'We develop AI-powered solutions and automation systems to improve efficiency.' },
  { title: 'Custom Software\nDevelopment', icon: Settings, desc: 'We build custom software and applications designed to solve your unique business challenges.' },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-[#F8F9FC] min-h-[90vh] flex items-center">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      
      {/* Purple Gradient wave at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-tr from-[#8B5CF6]/80 to-[#6C3FFC]/80 [clip-path:polygon(0_60%,_100%_100%,_100%_100%,_0%_100%)] opacity-90 rounded-bl-[2rem] rounded-br-[2rem]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-tr from-[#8B5CF6]/40 to-[#6C3FFC]/40 [clip-path:polygon(0_70%,_100%_90%,_100%_100%,_0%_100%)] opacity-80 rounded-bl-[2rem] rounded-br-[2rem]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-tr from-[#8B5CF6]/20 to-[#6C3FFC]/20 [clip-path:polygon(0_80%,_100%_80%,_100%_100%,_0%_100%)] opacity-60 rounded-bl-[2rem] rounded-br-[2rem]"></div>

      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[3rem] p-8 lg:p-16 shadow-[0_20px_80px_-20px_rgba(108,63,252,0.15)]">
          
          {/* Left Side: Brand & Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col lg:flex-row items-center lg:items-start gap-8 text-center lg:text-left"
          >
            <LogoMark className="w-32 h-32 lg:w-40 lg:h-40 bg-[#F4EFFF] border-[#E8DAFF] [&_svg]:scale-110 shrink-0 shadow-sm" />
            
            <div className="flex flex-col justify-center border-l-0 lg:border-l border-slate-200/80 lg:pl-8 py-2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-sora font-extrabold text-[#0D0D14] tracking-tight mb-4 lg:mb-6">
                NimraDev <span className="text-[#6C3FFC]">Labs</span>
              </h1>
              
              <div className="w-16 h-1 bg-gradient-to-r from-[#6C3FFC] to-[#8B5CF6] rounded-full mx-auto lg:mx-0 mb-4 lg:mb-6"></div>
              
              <p className="text-lg lg:text-xl text-slate-600 font-inter max-w-lg leading-relaxed">
                We build modern websites, <span className="font-semibold text-[#0D0D14]">AI</span> solutions, and custom software that help businesses scale with confidence.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Services Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          >
            {bannerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-[0_8px_30px_-10px_rgba(108,63,252,0.1)] flex flex-col items-center text-center hover:border-[#6C3FFC]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F4EFFF] border border-[#E8DAFF] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#6C3FFC] stroke-[1.5]" />
                  </div>
                  <h3 className="font-sora font-bold text-[#0D0D14] text-sm md:text-base leading-tight mb-4 whitespace-pre-line">
                    {service.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-slate-200 mb-4"></div>
                  <p className="text-slate-500 font-inter text-[11px] md:text-xs leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
