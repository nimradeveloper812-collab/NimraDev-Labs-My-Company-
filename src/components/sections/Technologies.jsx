import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Server, Database, Brain, Smartphone, Cloud } from 'lucide-react';

const techCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    desc: 'Ultra-fast, reactive client interfaces.',
    techs: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    name: 'Backend & APIs',
    icon: Server,
    desc: 'High-concurrency secure engines.',
    techs: ['Node.js', 'Python', 'FastAPI', 'Express', 'PHP / Laravel'],
  },
  {
    name: 'AI & Automations',
    icon: Brain,
    desc: 'Custom LLMs & intelligent workflows.',
    techs: ['OpenAI APIs', 'LangChain', 'Claude', 'Hugging Face', 'Document AI'],
  },
  {
    name: 'Mobile Apps',
    icon: Smartphone,
    desc: 'Native & cross-platform mobile apps.',
    techs: ['React Native', 'Flutter', 'iOS / Swift', 'Android', 'PWA'],
  },
  {
    name: 'Databases & Cache',
    icon: Database,
    desc: 'Scalable data persistence & speed.',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    desc: 'Automated CI/CD & cloud hosting.',
    techs: ['Docker', 'AWS', 'Vercel', 'DigitalOcean', 'GitHub Actions'],
  },
];

export default function Technologies() {
  return (
    <section className="py-12 sm:py-14 bg-[#F8F9FC] relative overflow-hidden font-inter text-[#0D0D14] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Compact) */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-[#E6E6E6] mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
            <span className="text-[10px] font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Technology Stack
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] mb-1 tracking-tight">
            Modern & Proven Tech Stack
          </h2>
          <p className="text-slate-600 font-inter text-xs sm:text-sm">
            Industry-standard languages, frameworks, and cloud infrastructures.
          </p>
        </div>

        {/* Tech Cards Grid (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E6E6] hover:border-[#6C3FFC]/40 hover:shadow-purple-glow transition-all duration-200 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F4EFFF] border border-[#E8DAFF] flex items-center justify-center text-[#6C3FFC] shrink-0">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-sora font-bold text-[#0D0D14]">
                        {category.name}
                      </h3>
                      <span className="text-[10px] text-slate-500 font-inter">
                        {category.desc}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100">
                    {category.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-[#F8F9FC] border border-slate-200 text-[11px] font-mono text-slate-700 font-medium"
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
