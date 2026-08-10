import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your business, audience, and goals.' },
  { num: '02', title: 'Planning', desc: 'Defining the tech stack, architecture, and roadmap.' },
  { num: '03', title: 'Design', desc: 'Creating intuitive UI/UX with modern aesthetics.' },
  { num: '04', title: 'Development', desc: 'Building scalable, secure, and clean code.' },
  { num: '05', title: 'Testing', desc: 'Rigorous QA to ensure a bug-free experience.' },
  { num: '06', title: 'Launch', desc: 'Deploying the solution and monitoring performance.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#F8F9FC] border border-slate-200 mb-6">
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              How We Work
            </span>
          </div>
          <h2 className="text-fluid-h2 font-sora font-bold text-[#0D0D14] mb-6">
            Our Engineering Process
          </h2>
          <p className="text-slate-600 font-inter text-lg">
            A systematic, transparent approach from concept to deployment.
          </p>
        </div>

        <div className="relative">
          {/* Subtle connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6C3FFC]/20 to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center p-6 bg-[#F8F9FC] lg:bg-transparent rounded-2xl lg:rounded-none border border-slate-200 lg:border-none"
              >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#6C3FFC] flex items-center justify-center mb-4 z-10 shadow-glass-light group-hover:scale-110 transition-transform">
                  <span className="font-sora font-bold text-sm text-[#0D0D14]">{step.num}</span>
                </div>
                <h3 className="text-lg font-sora font-bold text-[#0D0D14] mb-2">{step.title}</h3>
                <p className="text-slate-500 font-inter text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
