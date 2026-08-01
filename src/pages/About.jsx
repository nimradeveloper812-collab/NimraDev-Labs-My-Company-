import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAward, FiCheckCircle, FiCompass, FiCpu, FiGlobe, FiShield, FiTarget, FiUsers, FiArrowRight } from 'react-icons/fi';

const companyValues = [
  {
    icon: FiAward,
    title: 'Silicon Valley Standards',
    desc: 'We adhere strictly to clean code architecture, modular component patterns, and modern performance benchmarks.'
  },
  {
    icon: FiCpu,
    title: 'AI First Philosophy',
    desc: 'We leverage AI in our internal engineering pipelines and integrate intelligent agents into client products.'
  },
  {
    icon: FiShield,
    title: 'Enterprise Security',
    desc: 'Data privacy, secure authentication, sanitized inputs, and encrypted database connections are non-negotiable.'
  },
  {
    icon: FiTarget,
    title: 'Business Driven Impact',
    desc: 'We don’t just write code; we design digital products that drive measurable conversion and revenue growth.'
  }
];

export default function About() {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
          About NimraDev Labs
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Pioneering Digital Excellence & <span className="brand-gradient-text">Intelligent Software</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          NimraDev Labs is an elite software engineering agency based in Pakistan, dedicated to delivering international-grade web platforms and custom AI solutions to forward-thinking organizations.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/40 flex items-center justify-center text-brand-400">
            <FiCompass className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-white">Our Vision</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            To establish Pakistan as a recognized hub of premium, elite software engineering by building software applications that compete with top-tier Silicon Valley products in cleanliness, speed, and user experience.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-sky-600/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
            <FiGlobe className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-white">Our Mission</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            To empower businesses worldwide with robust web applications, automated workflow systems, and bespoke AI capabilities that accelerate business efficiency and delight end users.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/30">
            Engineering Culture
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Our Foundational Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-base">{val.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global & Local Reach */}
      <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Rooted in Pakistan, Serving Global Markets
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We proudly partner with ambitious Pakistani tech enterprises while managing project lifecycles for clients in North America, Europe, and the Middle East.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-brand-400 w-4 h-4" />
                <span>Full remote collaboration capabilities with flexible time-zone coverage.</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-brand-400 w-4 h-4" />
                <span>Transparent pricing, clear milestone tracking, and weekly staging builds.</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 text-center">
            <h4 className="font-heading font-bold text-white text-lg">Ready to Work with Us?</h4>
            <p className="text-xs text-slate-400">Let’s discuss your product roadmap and engineering requirements.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-heading font-semibold text-xs shadow-glow-sm"
            >
              <span>Get Started</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
