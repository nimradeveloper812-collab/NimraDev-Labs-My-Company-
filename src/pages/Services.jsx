import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiGlobe, FiCode, FiCpu, FiRefreshCw, FiShield, FiZap, 
  FiCheck, FiArrowRight, FiSliders, FiCheckCircle 
} from 'react-icons/fi';

const detailedServices = [
  {
    id: 'business-website',
    icon: FiGlobe,
    title: 'Business Website Development',
    subtitle: 'High-Converting Corporate Web Platforms',
    desc: 'We build modern, aesthetic, and blazing-fast corporate websites engineered to convert visitors into loyal clients. Every website is built with custom React components, responsive layouts, and SEO best practices.',
    deliverables: ['Custom Mobile-First UI/UX', 'Core Web Vitals Speed Tuning', 'SEO Meta Tags & Schema Markup', 'Content Management System (CMS)'],
    badge: 'Popular for Businesses'
  },
  {
    id: 'custom-webapp',
    icon: FiCode,
    title: 'Custom Web Applications & SaaS',
    subtitle: 'Scalable Software Applications',
    desc: 'From multi-tenant SaaS products to internal enterprise admin dashboards, we engineer robust full-stack applications with bulletproof state management and secure REST/GraphQL APIs.',
    deliverables: ['React + Node/Python Architecture', 'User Authentication & RBAC', 'Database Modeling & Indexing', 'Stripe / Local Payment Gateway'],
    badge: 'Enterprise Grade'
  },
  {
    id: 'ai-automation',
    icon: FiCpu,
    title: 'AI Automation & AI Integration',
    subtitle: 'Intelligent Workflows & Autonomous Agents',
    desc: 'Supercharge your software with autonomous AI capabilities. We integrate cutting-edge LLMs, custom RAG document parsers, and intelligent support agents directly into your operational systems.',
    deliverables: ['Embedded AI Chatbots', 'Automated Document Processing', 'Custom API Pipeline Construction', 'Fine-Tuned Prompt Systems'],
    badge: 'Futuristic Tech'
  },
  {
    id: 'website-redesign',
    icon: FiRefreshCw,
    title: 'Website Redesign & Modernization',
    subtitle: 'Transforming Legacy Codebases',
    desc: 'If your current site looks dated or loads slowly, we perform complete architectural overhauls—upgrading your design system to glassmorphism and modern Poppins/Inter typography.',
    deliverables: ['Modern Aesthetics Overhaul', 'Zero-Downtime Migration', 'Mobile Responsiveness Upgrade', 'Refactored Clean Code'],
    badge: 'High Impact'
  },
  {
    id: 'website-maintenance',
    icon: FiShield,
    title: 'Website Maintenance & Security SLA',
    subtitle: 'Proactive 24/7 Operations',
    desc: 'Keep your digital infrastructure secure and operational around the clock. We manage continuous server updates, security monitoring, content revisions, and cloud backups.',
    deliverables: ['24/7 Uptime Monitoring', 'Regular Security Patching', 'Automated Cloud Backups', 'Monthly Performance Audits'],
    badge: '24/7 Support'
  },
  {
    id: 'performance-optimization',
    icon: FiZap,
    title: 'Performance & Speed Optimization',
    subtitle: 'Near-100 Core Web Vitals Guaranteed',
    desc: 'Slow loading times cost customers. We profile client-side and server-side execution to optimize bundle sizes, lazy load media, and achieve instant page transitions.',
    deliverables: ['Lighthouse 95+ Score Audit', 'Asset & Image Compression', 'Cache Strategy Tuning', 'CDN Edge Deployment'],
    badge: 'Speed Boost'
  }
];

export default function Services() {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
          Engineering Capabilities
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Bespoke Services for <span className="brand-gradient-text">Modern Growth</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Comprehensive web development, AI integration, and cloud application engineering designed to give your company an unfair competitive advantage.
        </p>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="space-y-12">
        {detailedServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/40 flex items-center justify-center text-brand-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-brand-400 font-semibold uppercase tracking-wider">
                        {service.badge}
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-heading font-semibold text-white uppercase tracking-wider">
                      Key Deliverables Included:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                          <FiCheckCircle className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 text-center lg:text-left">
                  <h4 className="font-heading font-bold text-white text-lg">
                    Ready to build this for your company?
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Schedule a technical discovery session with NimraDev Labs engineers today.
                  </p>
                  <Link
                    to="/contact"
                    state={{ selectedService: service.title }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-glow-sm transition-all"
                  >
                    <span>Request Service Brief</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 glass-panel p-10 rounded-3xl border border-slate-800">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Need a Custom Technical Architecture?</h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          We can combine web engineering, custom AI agents, and cloud infrastructure into a unified solution.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-glow-sm"
        >
          <span>Discuss Custom Scope</span>
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
