import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Server, Database, Brain, Smartphone, Cloud } from 'lucide-react';

const techCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    desc: 'Ultra-fast, reactive, and responsive client-side interfaces.',
    techs: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3'],
  },
  {
    name: 'Backend & APIs',
    icon: Server,
    desc: 'High-concurrency, secure, and maintainable server engines.',
    techs: ['Node.js', 'Express', 'Python', 'FastAPI', 'PHP / Laravel', '.NET Core'],
  },
  {
    name: 'AI & Automation',
    icon: Brain,
    desc: 'Custom LLMs, intelligent agents, and workflow automations.',
    techs: ['OpenAI APIs', 'LangChain', 'Anthropic Claude', 'Hugging Face', 'Document AI', 'Python ML'],
  },
  {
    name: 'Mobile Apps',
    icon: Smartphone,
    desc: 'Native and cross-platform mobile apps for iOS & Android.',
    techs: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin', 'PWA'],
  },
  {
    name: 'Databases & Cache',
    icon: Database,
    desc: 'Scalable data persistence with high-speed indexing.',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Firebase'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    desc: 'Automated CI/CD pipelines and high-availability cloud hosting.',
    techs: ['Docker', 'AWS', 'Vercel', 'DigitalOcean', 'Cloudflare', 'GitHub Actions'],
  },
];

export default function Technologies() {
  return (
    <section className="py-24 bg-[#F8F9FC] relative overflow-hidden font-inter text-[#0D0D14]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C3FFC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E6E6] mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#6C3FFC]" />
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Technology Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#0D0D14] mb-4 tracking-tight">
            Modern & Proven Tech Stack We Work With
          </h2>
          <p className="text-slate-600 font-inter text-base sm:text-lg">
            We leverage industry-standard languages, frameworks, and cloud infrastructures to build scalable software.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-[#E6E6E6] hover:border-[#6C3FFC]/40 hover:shadow-purple-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4EFFF] border border-[#E8DAFF] flex items-center justify-center text-[#6C3FFC] shrink-0">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-sora font-bold text-[#0D0D14]">
                        {category.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-inter">
                        {category.desc}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {category.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#F8F9FC] border border-slate-200 text-xs font-mono text-slate-700 font-medium hover:border-[#6C3FFC]/50 hover:text-[#6C3FFC] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
