import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Cpu, LayoutTemplate, ArrowRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'High-Performance & Conversion-Focused',
    description: 'We engineer lightning-fast, ultra-responsive websites and web applications designed to build trust, engage visitors, and convert them into long-term clients.',
    icon: Globe,
    features: [
      'React / Next.js / Tailwind CSS stack',
      'Mobile-first responsive UX across all screens',
      'Advanced Technical SEO & Google PageSpeed 95+',
      'Custom Admin Portals & CMS integration',
    ],
    ctaText: 'Start Web Project',
    badge: 'Popular',
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Development',
    subtitle: 'Scalable Online Stores & Checkout',
    description: 'Modern, high-converting digital storefronts with seamless product catalogs, frictionless checkout flows, and automated inventory management.',
    icon: ShoppingBag,
    features: [
      'Multi-currency & Local Payment Gateways',
      'High-speed cart & 1-click checkout flow',
      'Automated order tracking & SMS/WhatsApp alerts',
      'Built-in conversion rate optimization (CRO)',
    ],
    ctaText: 'Build Your Store',
    badge: 'High ROI',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    subtitle: 'Intelligent Workflows & Custom LLMs',
    description: 'Empower your operations with custom AI chatbots, intelligent workflow automations, and LLM integrations that slash manual work and improve turnaround times.',
    icon: Cpu,
    features: [
      'OpenAI & custom LLM API integrations',
      '24/7 intelligent customer service bots',
      'Automated lead qualification & routing',
      'Smart document parsing & PDF data extraction',
    ],
    ctaText: 'Automate With AI',
    badge: 'Trending',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    subtitle: 'Tailored CRM, ERP & SaaS Platforms',
    description: 'Bespoke dashboards and enterprise management software crafted specifically around your unique business operations, logistics, and data pipelines.',
    icon: LayoutTemplate,
    features: [
      'Custom CRM, ERP, and booking systems',
      'Secure role-based access & authentication',
      'Scalable cloud APIs & relational database design',
      'Real-time analytics and financial reporting',
    ],
    ctaText: 'Design Custom System',
    badge: 'Enterprise',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0D0D14] text-white relative overflow-hidden font-inter">
      {/* Glowy background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C3FFC]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-xs font-sora font-semibold text-[#8B5CF6] tracking-widest uppercase">
              Core Engineering Offerings
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-white mb-6 tracking-tight">
            Specialized Digital Solutions for Scaling Businesses
          </h2>
          <p className="text-slate-300 font-inter text-base sm:text-lg leading-relaxed">
            From modern responsive websites to intelligent AI automations and custom SaaS tools, we deliver dependable software with clear ROI.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 sm:p-10 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#8B5CF6]/60 transition-all duration-300 hover:shadow-[0_10px_50px_rgba(108,63,252,0.2)] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Gradient */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#6C3FFC]/10 rounded-full blur-2xl group-hover:bg-[#6C3FFC]/25 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Card Header with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 group-hover:bg-[#6C3FFC] group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-7 h-7 stroke-[1.75]" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-[#6C3FFC]/20 border border-[#6C3FFC]/40 text-[#8B5CF6]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-sora font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-space font-medium text-[#8B5CF6] uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-300 font-inter text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 border-t border-white/10 pt-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Quick Action CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sora font-semibold text-xs text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] shadow-sm transition-all duration-300 group-hover:shadow-purple-glow"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-sora font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#12121D] to-[#181827] border border-[#6C3FFC]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <h4 className="text-xl font-sora font-bold text-white mb-2">
              Need a Custom Architecture or Unsure Where to Start?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm font-inter">
              Schedule a 15-minute discovery call with our lead technical architect to review your requirements with zero commitment.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-sora font-bold text-xs text-[#0D0D14] bg-white hover:bg-slate-100 transition-all shadow-md"
          >
            <span>Book Free Discovery Call</span>
            <ArrowRight className="w-4 h-4 text-[#6C3FFC]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
