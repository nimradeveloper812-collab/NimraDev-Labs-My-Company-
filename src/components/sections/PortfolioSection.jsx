import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Web Development', 'E-Commerce', 'AI Solutions', 'Custom Software'];

const projects = [
  {
    id: 1,
    title: 'PDFora Cloud Suite',
    category: 'Custom Software',
    typeTag: 'SaaS Platform',
    description: 'Lightning-fast, privacy-first PDF manipulation cloud suite allowing instant merge, split, and compression.',
    results: '+15k monthly users · 0.28s in-browser execution',
    tech: ['Next.js', 'Wasm', 'Tailwind', 'Vercel'],
    link: 'https://pdfora.nimradev.site',
    isSpecial: true,
  },
  {
    id: 2,
    title: 'Medical Credentialing',
    category: 'Web Development',
    typeTag: 'Enterprise Portal',
    description: 'Healthcare credential verification platform automating document intake and doctor license validation.',
    results: '65% reduction in verification turnaround time',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    logoText: 'MC',
  },
  {
    id: 3,
    title: 'NimraMart Digital',
    category: 'E-Commerce',
    typeTag: 'Modern Store',
    description: 'High-conversion online retail storefront with instant product search, multi-currency, and 1-click checkout.',
    results: '+180% increase in checkout conversions',
    tech: ['Next.js', 'Stripe', 'Supabase'],
    link: '#',
    logoText: 'NM',
  },
  {
    id: 4,
    title: 'TravelMate AI',
    category: 'AI Solutions',
    typeTag: 'AI Automation',
    description: 'Intelligent AI travel planning assistant generating multi-destination itineraries and live booking suggestions.',
    results: 'Automated 85% of customer support queries',
    tech: ['OpenAI API', 'FastAPI', 'React'],
    link: '#',
    logoText: 'TM',
  },
  {
    id: 5,
    title: 'RideFlow Logistics',
    category: 'Custom Software',
    typeTag: 'Fleet Tracking',
    description: 'Transport management solution featuring vehicle dispatch, driver telemetry, and automated route optimization.',
    results: '40% decrease in driver idle time',
    tech: ['React', 'WebSockets', 'Node.js'],
    link: '#',
    logoText: 'RF',
  },
  {
    id: 6,
    title: 'Apex Billing CRM',
    category: 'Custom Software',
    typeTag: 'B2B SaaS',
    description: 'Unified automated invoicing and client pipeline management platform customized for agency recurring billing.',
    results: '500+ invoices generated monthly with 0 errors',
    tech: ['React', 'PostgreSQL', 'Express'],
    link: '#',
    logoText: 'AB',
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-12 sm:py-14 bg-white relative overflow-hidden font-inter text-[#0D0D14] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Compact) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F8F9FC] border border-[#E6E6E6] mb-2.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
              <span className="text-[10px] font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
                Featured Work
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] mb-1 tracking-tight">
              Proven Digital Products
            </h2>
            <p className="text-slate-600 font-inter text-xs sm:text-sm">
              High-performance web apps, AI automations, and custom enterprise software.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-sora font-semibold text-xs text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] transition-all shadow-xs shrink-0"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Tags (Compact) */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1.5 rounded-xl text-xs font-sora font-semibold transition-all duration-150 cursor-pointer ${
                activeFilter === category
                  ? 'bg-[#6C3FFC] text-white shadow-xs'
                  : 'bg-[#F8F9FC] border border-[#E6E6E6] text-slate-600 hover:text-[#6C3FFC]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid (Compact) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                key={project.id}
                className="group flex flex-col rounded-2xl bg-[#F8F9FC] border border-[#E6E6E6] overflow-hidden hover:border-[#6C3FFC]/40 hover:shadow-purple-glow transition-all duration-200"
              >
                {/* Visual Banner (Compact) */}
                <div className={`aspect-[16/8] w-full relative overflow-hidden flex flex-col items-center justify-center ${project.isSpecial ? 'bg-gradient-to-br from-[#0D0D14] to-[#161426]' : 'bg-slate-100'}`}>
                  {project.isSpecial ? (
                    <>
                      <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-tr from-[#6C3FFC] to-[#8B5CF6] flex flex-col items-center justify-center shadow-sm">
                        <FileText className="w-5 h-5 text-white" />
                        <span className="font-sora font-extrabold text-white text-[9px]">
                          PDFora
                        </span>
                      </div>
                      <div className="relative z-10 mt-1.5 px-2 py-0.5 rounded-full bg-white/10 text-white text-[9px] font-mono">
                        pdfora.nimradev.site ↗
                      </div>
                    </>
                  ) : (
                    <div className="relative z-10 w-11 h-11 rounded-xl bg-white border border-[#E6E6E6] flex items-center justify-center shadow-xs">
                      <span className="font-sora font-extrabold text-[#6C3FFC] text-sm">
                        {project.logoText}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-2.5 left-2.5 z-20">
                    <span className="px-2 py-0.5 rounded-md text-[9px] font-mono uppercase font-semibold bg-white/90 text-[#0D0D14] shadow-xs">
                      {project.typeTag}
                    </span>
                  </div>
                </div>

                {/* Content (Compact) */}
                <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-sora font-bold text-[#0D0D14] group-hover:text-[#6C3FFC] transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 font-inter text-xs leading-relaxed mb-2.5">
                      {project.description}
                    </p>
                    
                    {/* Results Box */}
                    <div className="p-2 rounded-lg bg-white border border-[#E6E6E6] mb-2.5 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <p className="text-[11px] font-semibold text-slate-800 font-inter truncate">
                        <span className="text-emerald-700">Result:</span> {project.results}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white border border-[#E6E6E6] text-[9px] font-mono text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between">
                    {project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-sora font-semibold text-[#6C3FFC] hover:underline"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-[11px] font-sora font-semibold text-[#6C3FFC] hover:underline"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}

                    <span className="text-[10px] font-mono text-slate-400">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
