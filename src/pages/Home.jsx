import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiGlobe, FiCode, FiCpu, FiRefreshCw, FiShield, FiZap, 
  FiCheckCircle, FiArrowRight, FiLayers, FiCheck, FiUsers, FiTrendingUp, FiServer 
} from 'react-icons/fi';
import ProjectEstimator from '../components/widgets/ProjectEstimator';
import FAQAccordion from '../components/widgets/FAQAccordion';

const servicesList = [
  {
    icon: FiGlobe,
    title: 'Business Website Development',
    desc: 'High-converting, lightning-fast corporate websites designed to position your brand as an industry leader.',
    features: ['Custom Responsive Design', 'SEO & Speed Optimized', 'CMS / Content Management', 'Analytics Setup']
  },
  {
    icon: FiCode,
    title: 'Custom Web Applications',
    desc: 'Scalable SaaS platforms, client portals, and complex web tools engineered with modern React architecture.',
    features: ['React & Node Architecture', 'Secure Auth & Database', 'API Integration', 'Role-Based Dashboards']
  },
  {
    icon: FiCpu,
    title: 'AI Automation & AI Integration',
    desc: 'Embed intelligent LLMs, autonomous agents, and automated data workflows directly into your operational software.',
    features: ['Custom AI Chatbots', 'LLM Pipeline Integration', 'Workflow Automation', 'Document Intelligence']
  },
  {
    icon: FiRefreshCw,
    title: 'Website Redesign',
    desc: 'Transform legacy web software into modern, glassmorphism-enhanced digital experiences with peak Core Web Vitals.',
    features: ['Modern UI/UX Overhaul', 'Zero-Downtime Migration', 'Mobile Optimization', 'Code Refactoring']
  },
  {
    icon: FiShield,
    title: 'Website Maintenance & SLA',
    desc: 'Proactive maintenance, 24/7 server monitoring, security patching, and on-demand feature iterations.',
    features: ['24/7 Monitoring', 'Security & Backup', 'Monthly Speed Audits', 'On-Call Engineers']
  },
  {
    icon: FiZap,
    title: 'Performance Optimization',
    desc: 'Audit and tune your codebase to achieve near-100 Lighthouse performance scores and instant loading speeds.',
    features: ['Core Web Vitals Audit', 'Asset Compression', 'Database Optimization', 'CDN Setup']
  }
];

const techStack = [
  { name: 'React', desc: 'UI Architecture' },
  { name: 'Node.js', desc: 'Backend APIs' },
  { name: 'Python', desc: 'AI Pipelines' },
  { name: 'Tailwind CSS', desc: 'Styling' },
  { name: 'TypeScript', desc: 'Type Safety' },
  { name: 'Docker', desc: 'Containerization' },
  { name: 'PostgreSQL', desc: 'Relational DB' },
  { name: 'FastAPI', desc: 'AI Endpoints' },
];

const featuredProjects = [
  {
    title: 'NexusAI Enterprise Platform',
    category: 'AI Solution & SaaS',
    desc: 'Autonomous document parsing and data extraction platform built for financial institutions.',
    tags: ['React', 'Python', 'FastAPI', 'PyTorch'],
    imageBg: 'from-purple-900/60 to-slate-900'
  },
  {
    title: 'FinEdge Global Banking Portal',
    category: 'Custom Web Application',
    desc: 'High-security multi-currency dashboard serving over 50,000 active monthly corporate users.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    imageBg: 'from-blue-900/60 to-slate-900'
  },
  {
    title: 'Apex Logistics Intelligence',
    category: 'Business Automation',
    desc: 'Real-time fleet tracking and automated dispatch system boosting delivery efficiency by 42%.',
    tags: ['React', 'WebSockets', 'Mapbox', 'Docker'],
    imageBg: 'from-emerald-900/60 to-slate-900'
  }
];

const processSteps = [
  { num: '01', title: 'Discovery & Architecture', desc: 'We align on business objectives, target audience, and engineer a technical blueprint tailored for your goals.' },
  { num: '02', title: 'Design & Prototyping', desc: 'Crafting premium, glassmorphism-infused UI layouts in Poppins & Inter typography that wow users.' },
  { num: '03', title: 'Agile Code Sprints', desc: 'Clean, modular React + Node/Python engineering with daily staging builds and continuous feedback.' },
  { num: '04', title: 'AI & API Integration', desc: 'Wiring custom LLM pipelines, database schemas, and payment integrations with enterprise security.' },
  { num: '05', title: 'QA & Staging Launch', desc: 'Comprehensive cross-device testing, Core Web Vitals optimization, and seamless production deployment.' }
];

export default function Home() {
  return (
    <div className="space-y-24 sm:space-y-32 pt-24 pb-16 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="text-center space-y-8 relative z-10 max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold shadow-glow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Next-Gen Software Engineering & AI Agency</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Engineering <span className="brand-gradient-text">World-Class Software</span> & AI Workflows
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-body"
          >
            NimraDev Labs builds modern web applications, custom SaaS platforms, and autonomous AI automation for ambitious businesses in Pakistan and across the globe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-base text-white bg-gradient-to-r from-brand-600 via-brand-500 to-sky-500 hover:from-brand-500 hover:to-sky-400 shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
            >
              <span>Schedule a Project Call</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* Terminal / Code Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl text-left">
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">nimradev-architecture.config.js</span>
                </div>
                <span className="text-[10px] text-brand-400 font-mono uppercase bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/30">
                  Status: Operational
                </span>
              </div>
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-300 bg-slate-950/80">
                <p className="text-slate-500">// NimraDev Labs Core Stack Engine</p>
                <p><span className="text-purple-400">const</span> <span className="text-sky-300">agencyProfile</span> = &#123;</p>
                <p className="pl-4"><span className="text-brand-300">name</span>: <span className="text-emerald-300">'NimraDev Labs'</span>,</p>
                <p className="pl-4"><span className="text-brand-300">qualityStandard</span>: <span className="text-emerald-300">'Silicon Valley Grade'</span>,</p>
                <p className="pl-4"><span className="text-brand-300">capabilities</span>: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Tailwind'</span>, <span className="text-amber-300">'Python AI'</span>, <span className="text-amber-300">'Cloud SaaS'</span>],</p>
                <p className="pl-4"><span className="text-brand-300">deploymentUptime</span>: <span className="text-purple-300">99.99</span>,</p>
                <p>&#125;;</p>
                <p className="text-emerald-400 pt-2">✔ Optimized React bundle generated [0.12s]</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. TECH STACK TICKER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold font-heading">
            Built with Modern Industrial Technology Standards
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-brand-500/50 hover:bg-slate-900/80 transition-all text-center space-y-1"
              >
                <p className="font-heading font-bold text-slate-100 text-sm">{tech.name}</p>
                <p className="text-[10px] text-slate-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
            Our Core Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Engineering Solutions Built to Scale
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From high-converting corporate sites to complex AI agent integrations, we ship production-ready software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-7 border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/40 flex items-center justify-center text-brand-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <FiCheck className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
                The NimraDev Advantage
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                International Quality Engineered for Local & Global Scale
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We bridge the gap between heavy software agencies and generic freelancers. At NimraDev Labs, every project gets dedicated senior architects, clean code design, and continuous AI innovation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <h4 className="font-heading font-bold text-white text-base">Clean Codebase</h4>
                  <p className="text-xs text-slate-400">Strict modular React architecture with zero bloat.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <h4 className="font-heading font-bold text-white text-base">AI First Approach</h4>
                  <p className="text-xs text-slate-400">Smart automation baked in from day one.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <h4 className="font-heading font-bold text-white text-base">Peak Performance</h4>
                  <p className="text-xs text-slate-400">Targeting 95+ Core Web Vitals across devices.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <h4 className="font-heading font-bold text-white text-base">24/7 SLA Support</h4>
                  <p className="text-xs text-slate-400">Dedicated assistance for Pakistan & global clients.</p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 bg-slate-950/60 p-8 rounded-2xl border border-slate-800 text-center">
              <div className="space-y-2 p-4">
                <h3 className="font-heading font-extrabold text-4xl text-brand-400">99.9%</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Uptime SLA Guaranteed</p>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-heading font-extrabold text-4xl text-sky-400">100%</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Custom Bespoke Code</p>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-heading font-extrabold text-4xl text-purple-400">&lt; 1.0s</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Avg Page Load Speed</p>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-heading font-extrabold text-4xl text-emerald-400">12h</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Rapid Inquiry Response</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DEVELOPMENT PROCESS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
            Our Execution Pipeline
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            From Blueprint to Global Deployment
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Our streamlined engineering workflow ensures total transparency and rapid iteration cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step, idx) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-heading font-black text-3xl text-brand-500/40">{step.num}</span>
                <h4 className="font-heading font-bold text-white text-base">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED PROJECTS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
              Selected Case Studies
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Featured Software Engineering Builds
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
          >
            <span>View All Case Studies</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800 overflow-hidden group flex flex-col justify-between"
            >
              <div className={`h-48 bg-gradient-to-br ${project.imageBg} p-6 flex flex-col justify-end relative overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                <span className="relative z-10 text-[11px] font-semibold text-brand-300 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full w-max border border-slate-700">
                  {project.category}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-brand-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INTERACTIVE PROJECT ESTIMATOR */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ProjectEstimator />
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
            Client Voices
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by Forward-Thinking Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
              "NimraDev Labs built our enterprise SaaS platform in record time. Their React code structure and AI workflow integrations are top tier."
            </p>
            <div className="pt-4 border-t border-slate-800/60">
              <p className="font-heading font-bold text-white text-sm">Hassan Raza</p>
              <p className="text-xs text-slate-500">CTO, FinEdge Global</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
              "The glassmorphic design and Core Web Vitals optimization transformed our brand perception. We saw a 180% surge in customer inquiries."
            </p>
            <div className="pt-4 border-t border-slate-800/60">
              <p className="font-heading font-bold text-white text-sm">Sarah Ahmed</p>
              <p className="text-xs text-slate-500">Founder, Apex Logistics</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
              "Exceptional professionalism from Pakistan. NimraDev Labs delivered our custom AI chatbot integration seamlessly into our web app."
            </p>
            <div className="pt-4 border-t border-slate-800/60">
              <p className="font-heading font-bold text-white text-sm">Tariq Mahmood</p>
              <p className="text-xs text-slate-500">Product Manager, NexusAI</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Everything You Need to Know
          </h2>
        </div>
        <FAQAccordion />
      </section>

      {/* 10. CALL TO ACTION BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-10 sm:p-16 bg-gradient-to-r from-brand-900 via-brand-600 to-sky-600 border border-brand-500/50 shadow-glow-lg text-center space-y-8 relative overflow-hidden">
          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Engineer Your Next Digital Milestone?
            </h2>
            <p className="text-brand-100 text-sm sm:text-base leading-relaxed">
              Partner with NimraDev Labs to build high-performance web software and AI automation.
            </p>
          </div>
          <div className="pt-2 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-sm text-slate-950 bg-white hover:bg-slate-100 shadow-xl transition-all"
            >
              <span>Initiate Contact</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
