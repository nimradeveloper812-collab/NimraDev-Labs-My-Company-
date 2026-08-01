import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const categories = ['All', 'Web Application', 'AI Solution', 'Business Website', 'Automation'];

const projectsData = [
  {
    id: 1,
    title: 'NexusAI Intelligence Hub',
    category: 'AI Solution',
    desc: 'Autonomous document parsing platform utilizing LLMs to extract data from financial statements with 99.4% accuracy.',
    tech: ['React', 'Python', 'FastAPI', 'PyTorch', 'Tailwind'],
    metrics: '+340% Processing Speed | $120k Annual Savings',
    gradient: 'from-purple-900/60 via-slate-900 to-slate-950'
  },
  {
    id: 2,
    title: 'FinEdge Global Corporate Portal',
    category: 'Web Application',
    desc: 'Multi-currency corporate treasury platform with real-time analytics, RBAC permissions, and automated reporting.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Docker'],
    metrics: '50,000+ Active Users | <200ms API Latency',
    gradient: 'from-blue-900/60 via-slate-900 to-slate-950'
  },
  {
    id: 3,
    title: 'Apex Logistics Intelligence',
    category: 'Automation',
    desc: 'Fleet tracking dispatch system featuring real-time map telemetry, automated driver routing, and SMS notifications.',
    tech: ['React', 'WebSockets', 'Mapbox API', 'Node.js'],
    metrics: '+42% Route Efficiency | 100k Daily Telemetry Events',
    gradient: 'from-emerald-900/60 via-slate-900 to-slate-950'
  },
  {
    id: 4,
    title: 'Vanguard Capital Partners',
    category: 'Business Website',
    desc: 'Premium glassmorphic corporate web app designed to showcase investment portfolios and collect LP inquiries.',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Headless CMS'],
    metrics: '99/100 Core Web Vitals | +210% Inquiries',
    gradient: 'from-amber-900/60 via-slate-900 to-slate-950'
  },
  {
    id: 5,
    title: 'MediCare AI Assist',
    category: 'AI Solution',
    desc: 'Patient intake automation agent enabling clinics to streamline appointments and medical history pre-processing.',
    tech: ['React', 'Python', 'OpenAI API', 'Tailwind'],
    metrics: '15,000+ Patient Bookings | Zero Intake Queue',
    gradient: 'from-cyan-900/60 via-slate-900 to-slate-950'
  },
  {
    id: 6,
    title: 'PakMarket B2B E-Commerce Platform',
    category: 'Web Application',
    desc: 'High-scale B2B marketplace connecting local wholesalers across Pakistan with automated invoicing and logistics.',
    tech: ['React', 'Node.js', 'Redis', 'PostgreSQL'],
    metrics: '10,000+ Monthly Orders | 99.98% Uptime',
    gradient: 'from-rose-900/60 via-slate-900 to-slate-950'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
          Our Portfolio & Case Studies
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Engineering Impact Through <span className="brand-gradient-text">Shipped Code</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Explore how NimraDev Labs delivers high-impact software, custom AI systems, and responsive web builds for ambitious companies.
        </p>
      </section>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 border ${
                isActive
                  ? 'bg-brand-600 border-brand-500 text-white shadow-glow-sm'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between"
            >
              <div className={`h-52 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative`}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-brand-300 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full border border-slate-700">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur flex items-center justify-center text-slate-300">
                    <FiExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-brand-300 font-semibold flex items-center gap-2">
                    <FiCheckCircle className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 glass-panel p-10 rounded-3xl border border-slate-800">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Have a Unique Project in Mind?</h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          We architect custom software solutions tailored specifically to your operational demands.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-500 shadow-glow-sm"
        >
          <span>Start Your Custom Build</span>
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
