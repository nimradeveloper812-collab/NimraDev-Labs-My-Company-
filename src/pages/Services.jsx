import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, ShoppingCart, Bot, Cpu, Smartphone, Search, Palette,
  CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Zap
} from 'lucide-react';
import SoftwareProducts from '../components/widgets/SoftwareProducts';

const coreServicesList = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    subtitle: 'High-Converting Business & SaaS Web Platforms',
    desc: 'Professional business websites, landing pages, SaaS websites, and corporate websites engineered with modern React & Next.js architecture for high conversions and instant load times.',
    deliverables: [
      'Professional Business Websites',
      'High-Converting Landing Pages',
      'SaaS Product & Marketing Websites',
      'Corporate Enterprise Web Platforms'
    ],
    badge: 'Core Expertise'
  },
  {
    id: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'Native & Cross-Platform iOS & Android Applications',
    desc: 'Bespoke mobile applications engineered using Flutter and React Native. High-throughput APIs, offline synchronization, push notifications, and App Store / Google Play publishing.',
    deliverables: [
      'iOS & Android Cross-Platform Apps',
      'Flutter & React Native Architecture',
      'Push Notification Engines',
      'App Store & Google Play Publishing'
    ],
    badge: 'Mobile Engineering'
  },
  {
    id: 'ai-solutions-automation',
    icon: Bot,
    title: 'AI Solutions & Automation',
    subtitle: 'Intelligent AI Assistants & Process Automation',
    desc: 'Deploy custom AI chatbots, AI Assistants, Workflow Automation, OpenAI Integration, and Business Process Automation directly into your operational enterprise software stack.',
    deliverables: [
      'Custom Enterprise AI Chatbots',
      'Autonomous AI Assistants',
      'Workflow Automation Pipelines',
      'OpenAI & LLM API Integration',
      'Business Process Automation'
    ],
    badge: 'Next-Gen AI'
  },
  {
    id: 'custom-software-development',
    icon: Cpu,
    title: 'Custom Software & ERP',
    subtitle: 'Tailored Business Engines & Management Systems',
    desc: 'Engineering bespoke CRM, ERP, School/Education Management Systems, Retail POS, Executive Dashboards, Booking Platforms, and Custom Business Applications.',
    deliverables: [
      'Custom CRM & Enterprise ERP Systems',
      'Education & School Management Software',
      'Retail POS & Multi-Store Inventory Engines',
      'Real-Time Analytics Dashboards',
      'Online Booking & Scheduling Platforms'
    ],
    badge: 'Enterprise Engineering'
  },
  {
    id: 'ecommerce-development',
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    subtitle: 'Scalable Online Stores & Payment Infrastructure',
    desc: 'Modern online stores with secure payment processing, headless store architecture, multi-currency checkout, and real-time inventory synchronization built to scale effortlessly.',
    deliverables: [
      'Modern Headless Online Stores',
      'Stripe & Multi-Currency Payment Integration',
      'High-Speed Catalog & Filtering System',
      'Scalable E-Commerce Cloud Architecture'
    ],
    badge: 'High Conversion'
  },
  {
    id: 'digital-marketing-seo',
    icon: Search,
    title: 'Digital Marketing & SEO',
    subtitle: 'Search Engine Dominance & Organic Growth Strategy',
    desc: 'Technical SEO audits, keyword research, on-page optimization, content strategy, and conversion rate optimization designed to drive targeted organic traffic to your digital platforms.',
    deliverables: [
      'Technical On-Page & Off-Page SEO',
      'Search Engine Keyword Rankings',
      'Conversion Rate Optimization (CRO)',
      'Performance Marketing & Analytics'
    ],
    badge: 'Organic Scale'
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX & Graphic Design',
    subtitle: 'Handcrafted User Experiences & Corporate Brand Systems',
    desc: 'Human-centered design systems, high-fidelity Figma prototypes, interactive micro-animations, and complete brand identity design for luxury SaaS and enterprise applications.',
    deliverables: [
      'Figma Web & Mobile App Design Systems',
      'Interactive Wireframes & Prototypes',
      'Corporate Logo & Brand Identity Systems',
      'Marketing Collateral & Visual Assets'
    ],
    badge: 'Visual Design'
  }
];

export default function Services() {
  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-inter bg-[#F8F9FC] text-[#0D0D14]">
      
      {/* Header */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
          <Zap className="w-3.5 h-3.5" />
          <span>Our Specialized Offerings</span>
        </div>
        <h1 className="font-sora text-4xl sm:text-6xl font-extrabold text-[#0D0D14] tracking-tight">
          Full-Spectrum <span className="brand-text-gradient">Digital Services</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          From Web & Mobile development to Custom Software, AI automation, and Digital Marketing — we build software products that help your business succeed online.
        </p>
      </section>

      {/* 4 Core Services Breakdown */}
      <section className="space-y-12">
        {coreServicesList.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-[#6C3FFC]/15 relative overflow-hidden shadow-purple-glow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-gradient flex items-center justify-center text-white shadow-purple-glow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-[#6C3FFC] font-mono font-semibold uppercase tracking-wider">
                        {service.badge}
                      </span>
                      <h2 className="font-space text-2xl sm:text-3xl font-bold text-[#0D0D14]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-sora font-semibold text-[#0D0D14] uppercase tracking-wider">
                      Included Capabilities & Deliverables:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F8F9FC] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 text-center lg:text-left">
                  <h4 className="font-sora font-bold text-[#0D0D14] text-lg">
                    Ready to build this for your organization?
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Connect directly with NimraDev Labs developers to outline your project scope and timelines.
                  </p>
                  <Link
                    to="/contact"
                    state={{ selectedService: service.title }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-purple-gradient hover:opacity-90 shadow-purple-glow transition-all"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Software Products Showcase */}
      <section className="pt-4">
        <SoftwareProducts />
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 bg-white p-10 rounded-3xl border border-[#6C3FFC]/15 shadow-purple-glow">
        <h3 className="font-sora text-2xl sm:text-3xl font-bold text-[#0D0D14]">Need a Custom Software Solution?</h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          We combine web development, AI automation tools, e-commerce features, and custom software systems tailored for your business.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-purple-gradient hover:opacity-90 transition-all shadow-purple-glow"
        >
          <span>Discuss Your Project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
}
