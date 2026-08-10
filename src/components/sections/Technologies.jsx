import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    name: 'Frontend',
    techs: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    name: 'Backend',
    techs: ['Node.js', 'PHP', 'Python', '.NET'],
  },
  {
    name: 'Database',
    techs: ['MongoDB', 'SQL Server', 'Oracle'],
  },
  {
    name: 'AI',
    techs: ['OpenAI APIs', 'AI Automation', 'AI Integrations'],
  },
];

export default function Technologies() {
  return (
    <section className="py-24 bg-[#F8F9FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Technologies We Use
            </span>
          </div>
          <h2 className="text-fluid-h2 font-sora font-bold text-[#0D0D14] mb-6">
            Modern Tech Stack
          </h2>
          <p className="text-slate-600 font-inter text-lg">
            We use proven, scalable technologies to build robust software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-[#6C3FFC]/30 transition-all duration-300"
            >
              <h3 className="text-lg font-sora font-bold text-[#0D0D14] mb-6 pb-4 border-b border-slate-100">
                {category.name}
              </h3>
              <div className="flex flex-col gap-4">
                {category.techs.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#6C3FFC]/50"></div>
                    <span className="font-inter font-medium text-slate-700">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
