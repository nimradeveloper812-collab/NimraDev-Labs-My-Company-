import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Compass, Cpu, Globe, Shield, Target, Users, ArrowRight, Code2 } from 'lucide-react';

const companyValues = [
  {
    icon: Award,
    title: 'Silicon Valley Standards',
    desc: 'We adhere strictly to clean code architecture, modular component patterns, and modern performance benchmarks.'
  },
  {
    icon: Cpu,
    title: 'AI Native Development',
    desc: 'We leverage AI in our internal engineering pipelines and integrate intelligent agents into client products.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Data privacy, secure authentication, sanitized inputs, and encrypted database connections are non-negotiable.'
  },
  {
    icon: Target,
    title: 'Quantifiable Business Impact',
    desc: 'We design digital products that drive measurable conversion, efficiency gains, and revenue growth.'
  }
];

export default function About() {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-inter bg-[#F8F9FC] text-[#0D0D14]">
      
      {/* Hero Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>About NimraDev Labs</span>
        </div>
        <h1 className="font-sora text-4xl sm:text-6xl font-extrabold text-[#0D0D14] tracking-tight">
          Pioneering Enterprise <span className="brand-text-gradient">Digital Engineering</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          NimraDev Labs is an international software engineering firm. We design, engineer, and deploy high-impact web applications, e-commerce engines, custom software, and autonomous AI solutions for global enterprises.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#6C3FFC]/15 space-y-4 shadow-purple-glow">
          <div className="w-12 h-12 rounded-2xl bg-purple-gradient flex items-center justify-center text-white shadow-purple-glow">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-sora font-bold text-2xl text-[#0D0D14]">Our Vision</h3>
          <p className="text-slate-600 text-sm leading-relaxed font-inter">
            To build world-class digital experiences that empower businesses to scale with confidence, setting international benchmarks in performance, AI capabilities, and architectural elegance.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#6C3FFC]/15 space-y-4 shadow-purple-glow">
          <div className="w-12 h-12 rounded-2xl bg-[#F8F9FC] border border-slate-200 flex items-center justify-center text-[#6C3FFC]">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-sora font-bold text-2xl text-[#0D0D14]">Our Mission</h3>
          <p className="text-slate-600 text-sm leading-relaxed font-inter">
            To eliminate technical complexity for Fortune 500 brands and high-growth startups by shipping bespoke, secure, and production-ready Web, E-Commerce, AI, and Custom Software applications.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#6C3FFC] text-xs font-mono font-semibold uppercase tracking-wider bg-[#6C3FFC]/10 px-3.5 py-1.5 rounded-full border border-[#6C3FFC]/30">
            Engineering Principles
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Our Foundational Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className="bg-white p-6 rounded-2xl border border-[#6C3FFC]/15 space-y-4 hover:border-[#6C3FFC]/40 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F8F9FC] border border-slate-200 flex items-center justify-center text-[#6C3FFC]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-sora font-bold text-[#0D0D14] text-base">{val.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-inter">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#6C3FFC]/15 space-y-8 shadow-purple-glow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="font-sora font-bold text-2xl sm:text-3xl text-[#0D0D14]">
              Global Scale, Dedicated Senior Engineers
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-inter">
              Headquartered in Pakistan with global delivery teams serving North America, Europe, the Middle East, and Asia.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-700 font-inter">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#6C3FFC] w-4 h-4" />
                <span>24/7 global SLA support with flexible time-zone coverage.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#6C3FFC] w-4 h-4" />
                <span>Transparent milestone pricing and weekly staging demo releases.</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-slate-200 space-y-4 text-center">
            <h4 className="font-sora font-bold text-[#0D0D14] text-lg">Partner with NimraDev Labs</h4>
            <p className="text-xs text-slate-500 font-inter">Schedule a technical architectural review with our engineering leads.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-gradient text-white font-sora font-semibold text-xs shadow-purple-glow"
            >
              <span>Initiate Contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
