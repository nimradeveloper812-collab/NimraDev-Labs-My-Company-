import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle2, ArrowRight, Code2, Sparkles, TrendingUp } from 'lucide-react';
import ProjectModal from '../components/widgets/ProjectModal';

const categories = ['All', 'Web Development', 'E-Commerce Development', 'AI Solutions & Automation', 'Custom Software Development'];

const projectsData = [
  {
    id: 1,
    title: 'NexusAI Enterprise Knowledge Hub',
    client: 'Nexus Global',
    category: 'AI Solutions & Automation',
    description: 'Autonomous document parsing, semantic RAG search, and internal AI assistant serving 20,000 corporate employees with 99.4% precision.',
    deliverables: ['Custom LLM Fine-Tuning', 'Enterprise Document Parser', 'Real-time Analytics Dashboard'],
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI', 'Pinecone'],
    metric: '85% Faster Research Retrieval'
  },
  {
    id: 2,
    title: 'FinEdge Global Corporate Banking Portal',
    client: 'FinEdge Inc.',
    category: 'Custom Software Development',
    description: 'High-security multi-currency treasury portal with automated audit logs, compliance reporting, and real-time transaction feeds.',
    deliverables: ['Multi-Tenant CRM/ERP Portal', 'Role-Based Access Security', 'WebSocket Live Data Feeds'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    metric: '$1.2B Annual Transaction Volume'
  },
  {
    id: 3,
    title: 'LuxeShop Headless Commerce Engine',
    client: 'Luxe Brand Co.',
    category: 'E-Commerce Development',
    description: 'Ultra-fast headless online store with instant page transitions, multi-currency checkout, and custom product 3D viewports.',
    deliverables: ['Headless Next.js Storefront', 'Stripe Multi-Currency Engine', 'Real-Time Inventory Sync'],
    technologies: ['Next.js', 'Shopify Plus API', 'Tailwind CSS', 'Redis'],
    metric: '+340% Mobile Conversions'
  },
  {
    id: 4,
    title: 'AeroCloud Corporate Enterprise Site',
    client: 'AeroTech Systems',
    category: 'Web Development',
    description: 'Modern corporate website and product portal showcasing cloud telemetry software with interactive glassmorphism UI.',
    deliverables: ['Corporate Web Platform', 'Interactive Product Demos', 'Global Localization'],
    technologies: ['React', 'TypeScript', 'Sora Typography', 'Framer Motion'],
    metric: '99/100 Core Web Vitals'
  },
  {
    id: 5,
    title: 'MediCare AI Intake Agent',
    client: 'HealthCare Direct',
    category: 'AI Solutions & Automation',
    description: 'Automated AI patient triage assistant streamlining clinical appointment scheduling and EHR document pre-processing.',
    deliverables: ['HIPAA-Compliant AI Agent', 'OpenAI API Workflow', 'EHR System Integration'],
    technologies: ['React', 'Python', 'OpenAI API', 'FastAPI'],
    metric: '15,000+ Monthly Automated Intake Calls'
  },
  {
    id: 6,
    title: 'GlobalSupply Logistics ERP & Dispatch',
    client: 'GlobalSupply Freight',
    category: 'Custom Software Development',
    description: 'Real-time telemetry, automated route optimization, and driver management dashboard for cross-border logistics.',
    deliverables: ['Fleet Telemetry Dashboard', 'Automated Driver Dispatch', 'Custom Booking Platform'],
    technologies: ['React', 'WebSockets', 'Node.js', 'PostgreSQL', 'Docker'],
    metric: '+42% Dispatch Efficiency'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-inter bg-[#F8F9FC] text-[#0D0D14]">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>Case Studies & Shipped Code</span>
        </div>
        <h1 className="font-sora text-4xl sm:text-6xl font-extrabold text-[#0D0D14] tracking-tight">
          Proven Impact & <span className="brand-text-gradient">Case Studies</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Explore our real-world software builds across Web Development, E-Commerce Development, AI Solutions, and Custom Enterprise Software.
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

                  <h3 className="font-sora font-bold text-xl text-[#0D0D14] group-hover:text-[#6C3FFC] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-inter">
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

              <div className="px-8 py-4 bg-[#F8F9FC] border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-sora font-semibold group-hover:text-[#6C3FFC]">
                <span>Explore Technical Overview</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#6C3FFC]" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* CTA */}
      <section className="text-center space-y-6 bg-white p-10 rounded-3xl border border-[#6C3FFC]/15 shadow-purple-glow">
        <h3 className="font-sora text-2xl sm:text-3xl font-bold text-[#0D0D14]">Have an Enterprise Project in Mind?</h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          We architect custom software solutions tailored specifically to your operational demands.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-purple-gradient hover:opacity-90 transition-all shadow-purple-glow"
        >
          <span>Start Your Custom Build</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
