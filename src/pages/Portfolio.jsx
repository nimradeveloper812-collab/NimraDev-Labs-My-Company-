import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle2, ArrowRight, Code2, Sparkles, TrendingUp } from 'lucide-react';
import ProjectModal from '../components/widgets/ProjectModal';

const categories = ['All', 'Web Development', 'E-Commerce Development', 'AI Solutions & Automation', 'Custom Software Development'];

const projectsData = [
  {
    id: 1,
    title: 'Quad Healthcare Credentialing Website',
    client: 'Quad Healthcare',
    category: 'Web Development',
    description: 'Medical credentialing & provider onboarding platform built with Next.js, automated background verifications, and compliance reporting.',
    deliverables: ['Healthcare Credentialing Portal', 'Automated Verification Flow', 'Provider Dashboard'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    metric: 'Automated Provider Intake',
    liveUrl: 'https://quadhealthcare.com'
  },
  {
    id: 2,
    title: 'NimraMart – Modern E-Commerce Store',
    client: 'NimraMart Retail',
    category: 'E-Commerce Development',
    description: 'Modern online store with fast product catalog search, secure payment checkout, automated inventory sync, and mobile UX.',
    deliverables: ['Next.js Storefront', 'Secure Payment Integration', 'Inventory Management'],
    technologies: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Redis', 'Node.js'],
    metric: 'Fast Mobile Checkout',
    liveUrl: 'https://nimramart.com'
  },
  {
    id: 3,
    title: 'TravelMate AI – AI Travel Assistant',
    client: 'TravelMate AI',
    category: 'AI Solutions & Automation',
    description: 'AI travel planner and assistant leveraging OpenAI API, destination recommendations, and automated itinerary generation.',
    deliverables: ['AI Travel Assistant', 'OpenAI API Pipeline', 'Itinerary Planner'],
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI API', 'Pinecone'],
    metric: 'Instant AI Itineraries',
    liveUrl: 'https://travelmate.ai'
  },
  {
    id: 4,
    title: 'RideFlow – Uber Clone Platform',
    client: 'RideFlow Mobility',
    category: 'Custom Software Development',
    description: 'Ride-hailing & vehicle dispatch platform featuring real-time driver tracking, dynamic fare calculations, rider app, and admin control desk.',
    deliverables: ['Driver Dispatch Engine', 'Dynamic Fare Calculator', 'Operations Admin Dashboard'],
    technologies: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Docker', 'Flutter'],
    metric: 'Real-time Tracking',
    liveUrl: 'https://rideflow.app'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-inter bg-[#F8F9FC] text-[#0D0D14]">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>Our Work & Projects</span>
        </div>
        <h1 className="font-sora text-4xl sm:text-6xl font-extrabold text-[#0D0D14] tracking-tight">
          Live Projects & <span className="brand-text-gradient">Work Portfolio</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Explore live production projects across Web Development, E-Commerce Development, AI Solutions, and Custom Software Development.
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
              className={`px-4 py-2 rounded-xl text-xs font-sora font-semibold transition-all duration-200 border ${
                isActive
                  ? 'bg-purple-gradient border-[#6C3FFC] text-white shadow-purple-glow'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-[#0D0D14] shadow-sm'
              }`}
            >
              {cat === 'All' ? 'All Portfolio Builds' : cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl border border-[#6C3FFC]/15 overflow-hidden flex flex-col justify-between cursor-pointer hover:border-[#6C3FFC]/60 hover:shadow-purple-glow transition-all duration-300 group shadow-sm"
            >
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#6C3FFC]/10 text-[#6C3FFC] border border-[#6C3FFC]/20">
                      {project.category}
                    </span>
                    <span className="text-xs text-emerald-600 font-mono flex items-center gap-1 font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {project.metric}
                    </span>
                  </div>

                  <h3 className="font-sora font-bold text-2xl text-[#0D0D14] group-hover:text-[#6C3FFC] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-inter">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#F8F9FC] text-slate-700 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 bg-[#F8F9FC] border-t border-slate-100 flex items-center justify-between gap-4 text-xs font-sora font-semibold">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-gradient text-white hover:opacity-90 transition-all shadow-purple-glow cursor-pointer"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-[#6C3FFC] transition-colors"
                >
                  <span>View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* CTA */}
      <section className="text-center space-y-6 bg-white p-10 rounded-3xl border border-[#6C3FFC]/15 shadow-purple-glow">
        <h3 className="font-sora text-2xl sm:text-3xl font-bold text-[#0D0D14]">Have a Project in Mind?</h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          We build custom software solutions tailored specifically to your business requirements.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-purple-gradient hover:opacity-90 transition-all shadow-purple-glow"
        >
          <span>Start Your Build</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
