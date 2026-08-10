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
    <section id="services" className="py-24 bg-[#F8F9FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Our Core Services
            </span>
          </div>
          <h2 className="text-fluid-h2 font-sora font-bold text-[#0D0D14] mb-6">
            Digital Solutions for Modern Businesses
          </h2>
          <p className="text-slate-600 font-inter text-lg">
            We provide specialized engineering services to build, scale, and automate your digital presence.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-[#6C3FFC]/40 transition-all duration-300 hover:shadow-glass-light flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F8F9FC] border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#6C3FFC]/5 transition-colors">
                  <Icon className="w-6 h-6 text-[#6C3FFC] stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-sora font-bold text-[#0D0D14] mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 font-inter leading-relaxed">
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
