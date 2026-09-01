import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Cpu, LayoutTemplate, ArrowRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'High-Performance & SEO',
    description: 'We engineer lightning-fast, responsive web apps designed to convert visitors into clients.',
    icon: Globe,
    features: [
      'React / Next.js / Tailwind CSS stack',
      'Mobile-first responsive UX across screens',
      'Advanced Technical SEO & PageSpeed 95+',
      'Custom Admin Portals & CMS integration',
    ],
    ctaText: 'Start Web Project',
    badge: 'Popular',
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Stores',
    subtitle: 'Scalable Online Storefronts',
    description: 'Modern digital storefronts with seamless product catalogs, frictionless checkout, and inventory sync.',
    icon: ShoppingBag,
    features: [
      'Multi-currency & Local Payment Gateways',
      'High-speed cart & 1-click checkout flow',
      'Automated order tracking & WhatsApp alerts',
      'Built-in conversion rate optimization',
    ],
    ctaText: 'Build Store',
    badge: 'High ROI',
  },
  {
    id: 'ai-solutions',
    title: 'AI & Automation',
    subtitle: 'Intelligent LLM Workflows',
    description: 'Empower operations with custom AI chatbots, workflow automations, and LLM integrations.',
    icon: Cpu,
    features: [
      'OpenAI & custom LLM API integrations',
      '24/7 intelligent customer support bots',
      'Automated lead qualification & routing',
      'Smart document parsing & PDF data extraction',
    ],
    ctaText: 'Automate With AI',
    badge: 'Trending',
  },
  {
    id: 'custom-software',
    title: 'Custom Software & ERP',
    subtitle: 'Tailored Operations Systems',
    description: 'Bespoke dashboards and enterprise management software crafted around your specific operations.',
    icon: LayoutTemplate,
    features: [
      'Custom CRM, ERP, and booking systems',
      'Secure role-based access & authentication',
      'Scalable cloud APIs & relational databases',
      'Real-time analytics and financial reporting',
    ],
    ctaText: 'Design System',
    badge: 'Enterprise',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-14 bg-[#F8F9FC] text-[#0D0D14] relative overflow-hidden font-inter border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Compact) */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-[#E6E6E6] mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
            <span className="text-[10px] font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Core Offerings
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] mb-2 tracking-tight">
            Specialized Digital Solutions
          </h2>
          <p className="text-slate-600 font-inter text-xs sm:text-sm">
            From modern responsive websites to intelligent AI automations and custom SaaS tools.
          </p>
        </div>

        {/* 4 Cards Grid (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group p-5 sm:p-6 rounded-2xl bg-white border border-[#E6E6E6] hover:border-[#6C3FFC]/40 transition-all duration-200 hover:shadow-purple-glow flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4EFFF] border border-[#E8DAFF] flex items-center justify-center text-[#6C3FFC] group-hover:scale-105 group-hover:bg-[#6C3FFC] group-hover:text-white transition-all duration-200 shadow-xs">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#F4EFFF] border border-[#E8DAFF] text-[#6C3FFC]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-sora font-bold text-[#0D0D14] mb-0.5 group-hover:text-[#6C3FFC] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-space font-semibold text-[#6C3FFC] uppercase tracking-wide mb-2">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 font-inter text-xs leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 mb-4 border-t border-slate-100 pt-3">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6C3FFC] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Quick Action CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-sora font-semibold text-xs text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] shadow-xs transition-all"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <a
                    href={`https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-sora font-medium text-slate-600 hover:text-[#6C3FFC] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
