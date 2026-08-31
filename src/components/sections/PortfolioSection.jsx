import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText, CheckCircle2, TrendingUp, Sparkles, ExternalLink, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Web Development', 'E-Commerce', 'AI Solutions', 'Custom Software'];

const projects = [
  {
    id: 1,
    title: 'PDFora',
    category: 'Custom Software',
    typeTag: 'SaaS Platform',
    description: 'A lightning-fast, privacy-first PDF manipulation cloud suite allowing users to merge, split, compress, and edit PDF files effortlessly without server upload bottlenecks.',
    results: '+15,000+ monthly active users · 0.28s in-browser execution speed',
    tech: ['Next.js', 'WebAssembly', 'Tailwind CSS', 'Vercel'],
    link: 'https://pdfora.nimradev.site',
    isSpecial: true,
  },
  {
    id: 2,
    title: 'Medical Credentialing Pro',
    category: 'Web Development',
    typeTag: 'Enterprise Portal',
    description: 'A compliant healthcare credential verification platform that automates document intake, background checks, and doctor license validations.',
    results: '65% reduction in manual verification turnaround time',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    link: '#',
    logoText: 'MC',
  },
  {
    id: 3,
    title: 'NimraMart Digital Store',
    category: 'E-Commerce',
    typeTag: 'Modern E-Commerce',
    description: 'A high-conversion online retail storefront with instant product search, dynamic filtering, multi-currency pricing, and streamlined 1-click checkout.',
    results: '+180% increase in checkout conversions & 99.98% uptime',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS', 'Supabase'],
    link: '#',
    logoText: 'NM',
  },
  {
    id: 4,
    title: 'TravelMate AI',
    category: 'AI Solutions',
    typeTag: 'AI Automation',
    description: 'An intelligent AI-driven travel planning assistant that generates multi-destination itineraries, cost breakdowns, and live booking suggestions.',
    results: 'Automated 85% of repetitive customer support and booking queries',
    tech: ['OpenAI API', 'FastAPI', 'React', 'Tailwind CSS'],
    link: '#',
    logoText: 'TM',
  },
  {
    id: 5,
    title: 'RideFlow Logistics',
    category: 'Custom Software',
    typeTag: 'Fleet Management',
    description: 'A comprehensive transport management solution featuring real-time vehicle dispatch, driver telemetry tracking, and automated route optimization.',
    results: '40% decrease in driver idle time & 30% fuel efficiency gain',
    tech: ['React', 'WebSockets', 'Mapbox GL', 'Node.js'],
    link: '#',
    logoText: 'RF',
  },
  {
    id: 6,
    title: 'Apex Billing & Client CRM',
    category: 'Custom Software',
    typeTag: 'B2B SaaS',
    description: 'Unified automated invoicing and client pipeline management platform customized for agency operations and recurring billing workflows.',
    results: 'Over 500+ invoices generated monthly with zero billing disputes',
    tech: ['React', 'Tailwind CSS', 'PostgreSQL', 'Express'],
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
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden font-inter text-[#0D0D14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#6C3FFC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FC] border border-[#E6E6E6] mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#6C3FFC]" />
              <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
                Featured Case Studies & Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#0D0D14] mb-4 tracking-tight">
              Proven Digital Products Built for Real Growth
            </h2>
            <p className="text-slate-600 font-inter text-base sm:text-lg">
              Explore our track record of high-performance web applications, AI automations, and custom enterprise software.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sora font-semibold text-xs text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] transition-all shadow-purple-glow hover:shadow-purple-glow-lg shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-sora font-semibold transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-[#6C3FFC] text-white shadow-purple-glow'
                  : 'bg-[#F8F9FC] border border-[#E6E6E6] text-slate-600 hover:text-[#6C3FFC] hover:border-[#6C3FFC]/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col rounded-3xl bg-[#F8F9FC] border border-[#E6E6E6] overflow-hidden hover:border-[#6C3FFC]/40 hover:shadow-[0_10px_40px_rgba(108,63,252,0.12)] transition-all duration-300"
              >
                {/* Visual Header / Banner */}
                <div className={`aspect-[16/10] w-full relative overflow-hidden flex flex-col items-center justify-center ${project.isSpecial ? 'bg-gradient-to-br from-[#0D0D14] via-[#161426] to-[#0D0D14]' : 'bg-slate-100'}`}>
                  {project.isSpecial ? (
                    <>
                      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                      <div className="absolute top-0 w-full h-full bg-[#6C3FFC]/20 blur-[50px]" />
                      
                      {/* Special PDFora Logo */}
                      <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#6C3FFC] to-[#8B5CF6] flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 border border-white/20">
                        <FileText className="w-9 h-9 text-white mb-0.5" strokeWidth={1.75} />
                        <span className="font-sora font-extrabold text-white text-[11px] tracking-wider">
                          PDFora
                        </span>
                      </div>

                      <div className="relative z-10 mt-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono">
                        pdfora.nimradev.site ↗
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-[#E6E6E6] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <span className="font-sora font-extrabold text-[#6C3FFC] text-lg">
                          {project.logoText}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Top Type Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-md border border-white/40 text-[#0D0D14] shadow-sm">
                      {project.typeTag}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-sora font-bold text-[#0D0D14] group-hover:text-[#6C3FFC] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 font-inter text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Results Delivered Box */}
                    <div className="p-3 rounded-xl bg-white border border-[#E6E6E6] mb-4 flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs font-semibold text-slate-800 font-inter">
                        <span className="text-emerald-700">Results:</span> {project.results}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-md bg-white border border-[#E6E6E6] text-[10px] font-mono text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    {project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-sora font-semibold text-[#6C3FFC] hover:underline"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-sora font-semibold text-[#6C3FFC] hover:underline"
                      >
                        <span>Request Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}

                    <span className="text-[11px] font-mono text-slate-400 font-medium">
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
