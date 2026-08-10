import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Cpu, LayoutTemplate } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Professional, responsive, and modern websites designed around business needs.',
    icon: Globe,
  },
  {
    title: 'E-Commerce Development',
    description: 'Modern online stores with product management, shopping carts, checkout, and payment integration.',
    icon: ShoppingBag,
  },
  {
    title: 'AI Solutions & Automation',
    description: 'AI chatbots, AI assistants, workflow automation, OpenAI integrations, and intelligent business solutions.',
    icon: Cpu,
  },
  {
    title: 'Custom Software Development',
    description: 'Custom dashboards, CRM systems, ERP solutions, booking systems, management systems, and business applications.',
    icon: LayoutTemplate,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0D0D14] relative overflow-hidden">
      {/* Glowy background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C3FFC]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="text-xs font-sora font-semibold text-[#8B5CF6] tracking-widest uppercase shadow-purple-glow">
              Our Core Services
            </span>
          </div>
          <h2 className="text-fluid-h2 font-sora font-bold text-white mb-6">
            Digital Solutions for Modern Businesses
          </h2>
          <p className="text-slate-400 font-inter text-lg">
            We provide specialized engineering services to build, scale, and automate your digital presence.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#8B5CF6]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(108,63,252,0.25)] hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Inner hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#6C3FFC]/0 to-[#6C3FFC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#6C3FFC]/20 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(108,63,252,0.4)] relative z-10">
                  <Icon className="w-6 h-6 text-[#8B5CF6] stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-sora font-bold text-white mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-slate-400 font-inter text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
