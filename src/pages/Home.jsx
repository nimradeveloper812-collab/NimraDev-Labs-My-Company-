import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, ShoppingCart, Bot, Cpu, ShieldCheck, Zap, 
  CheckCircle2, ArrowRight, Layers, Code2, Users, TrendingUp, 
  Server, Sparkles, Terminal, Activity, Check, ChevronRight, Lock, Play
} from 'lucide-react';
import InteractiveCodeDemo from '../components/widgets/InteractiveCodeDemo';
import ProjectEstimator from '../components/widgets/ProjectEstimator';
import FAQAccordion from '../components/widgets/FAQAccordion';
import ContactForm from '../components/widgets/ContactForm';
import ProjectModal from '../components/widgets/ProjectModal';

// 1. TRUSTED COMPANIES LOGOS
const TRUSTED_COMPANIES = [
  { name: 'Vercel', logo: '▲ Vercel' },
  { name: 'Stripe', logo: 'stripe' },
  { name: 'Linear', logo: '◈ Linear' },
  { name: 'Notion', logo: 'N Notion' },
  { name: 'OpenAI', logo: '✴ OpenAI' },
  { name: 'Snowflake', logo: '❄ Snowflake' },
  { name: 'Framer', logo: '❖ Framer' },
  { name: 'Webflow', logo: 'W Webflow' }
];

// 2. CORE SERVICES (STRICTLY THE 4 SERVICES REQUESTED)
const CORE_SERVICES = [
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Professional business websites, landing pages, SaaS websites, and corporate websites.',
    icon: Globe,
    badge: 'Core Experience',
    items: [
      'Professional Business Websites',
      'High-Converting Landing Pages',
      'SaaS Product Marketing Sites',
      'Enterprise Corporate Websites'
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    metric: '99.9% Core Web Vitals Score'
  },
  {
    id: 'ecom-dev',
    title: 'E-Commerce Development',
    subtitle: 'Modern online stores with secure payments and scalable architecture.',
    icon: ShoppingCart,
    badge: 'Scalable Commerce',
    items: [
      'Custom Headless Online Stores',
      'Stripe & Multi-Currency Gateways',
      'High-Speed Product Search',
      'Inventory & ERP Synchronization'
    ],
    tech: ['Next.js', 'Shopify Plus API', 'Node.js', 'PostgreSQL', 'Redis'],
    metric: '+340% Avg Checkout Conversion'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    subtitle: 'AI chatbots, AI Assistants, Workflow Automation, OpenAI Integration, and Business Process Automation.',
    icon: Bot,
    badge: 'Next-Gen AI',
    items: [
      'Enterprise AI Chatbots & Customer Assistants',
      'Autonomous Workflow Automation Pipelines',
      'Custom OpenAI & LLM API Integration',
      'End-to-End Business Process Automation'
    ],
    tech: ['Python', 'PyTorch', 'OpenAI GPT-4o', 'LangChain', 'FastAPI'],
    metric: '85% Manual Task Reduction'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    subtitle: 'CRM, ERP, Business Dashboards, Management Systems, Booking Platforms, and Custom Business Applications.',
    icon: Cpu,
    badge: 'Enterprise Engineering',
    items: [
      'Tailored CRM & ERP Solutions',
      'Real-time Executive Business Dashboards',
      'Operational Management Systems',
      'Booking Platforms & Custom Business Apps'
    ],
    tech: ['TypeScript', 'React', 'Python', 'Docker', 'PostgreSQL'],
    metric: 'Sub-15ms API Latency'
  }
];

// 3. INDUSTRIES WE SERVE
const INDUSTRIES = [
  { title: 'Fintech & Banking', desc: 'Secure payment engines, compliance portals, multi-currency wallets.', icon: ShieldCheck },
  { title: 'Healthtech & Care', desc: 'HIPAA-compliant platforms, patient portals, telemedicine tools.', icon: Activity },
  { title: 'E-Commerce & Retail', desc: 'High-throughput stores, automated inventory, omnichannel analytics.', icon: ShoppingCart },
  { title: 'SaaS & B2B Software', desc: 'Product marketing, client dashboards, subscription management.', icon: Globe },
  { title: 'Enterprise & Logistics', desc: 'Fleet telemetry, ERP automation, real-time dispatch systems.', icon: Server },
  { title: 'AI & Data Startups', desc: 'LLM fine-tuning interfaces, vector search databases, AI agents.', icon: Bot }
];

// 4. WHY CHOOSE NIMRADEV LABS
const WHY_CHOOSE_POINTS = [
  {
    title: 'Silicon Valley Architectural Rigor',
    desc: 'Zero technical debt. We engineer clean, modular TypeScript & Python backends built for 99.99% reliability.'
  },
  {
    title: 'AI-Native Engineering Speed',
    desc: 'We leverage custom internal AI dev toolchains to ship software up to 3x faster without compromising security.'
  },
  {
    title: 'Bespoke Handcrafted UI/UX',
    desc: 'No generic templates. Every pixel, gradient, and glassmorphic card is custom-built for maximum brand prestige.'
  },
  {
    title: 'Enterprise SOC2 Security Ready',
    desc: 'Bank-grade encryption, automated vulnerability scanners, and strict data privacy protocols for Fortune 500 trust.'
  }
];

// 5. PORTFOLIO CASE STUDIES
const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'NexusAI Enterprise Knowledge Hub',
    client: 'Nexus Global',
    category: 'AI Solutions & Automation',
    description: 'Autonomous document parsing, semantic RAG search, and internal AI assistant serving 20,000 corporate employees.',
    deliverables: ['Custom LLM Fine-Tuning', 'Enterprise Document Parser', 'Real-time Analytics Dashboard'],
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI', 'Pinecone'],
    metric: '85% Faster Research Retrieval'
  },
  {
    id: 2,
    title: 'FinEdge Global Corporate Banking',
    client: 'FinEdge Inc.',
    category: 'Custom Software Development',
    description: 'High-security multi-currency dashboard with automated audit logs, compliance reporting, and real-time transaction feeds.',
    deliverables: ['Multi-Tenant CRM/ERP Portal', 'Role-Based Access Security', 'WebSocket Live Data Feeds'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    metric: '$1.2B Annual Transaction Volume'
  },
  {
    id: 3,
    title: 'LuxeShop Headless Commerce',
    client: 'Luxe Brand Co.',
    category: 'E-Commerce Development',
    description: 'Ultra-fast headless online store with instant page transitions, multi-currency checkout, and custom product 3D viewports.',
    deliverables: ['Headless Next.js Storefront', 'Stripe Multi-Currency Engine', 'Real-Time Inventory Sync'],
    technologies: ['Next.js', 'Shopify Plus API', 'Tailwind CSS', 'Redis'],
    metric: '+340% Mobile Conversions'
  },
  {
    id: 4,
    title: 'AeroCloud Enterprise Platform',
    client: 'AeroTech Systems',
    category: 'Web Development',
    description: 'Modern corporate website and product portal showcasing cloud telemetry software with interactive glassmorphism UI.',
    deliverables: ['Corporate Web Platform', 'Interactive Product Demos', 'Global Localization'],
    technologies: ['React', 'TypeScript', 'Sora Typography', 'Framer Motion'],
    metric: '99/100 Core Web Vitals'
  }
];

// 6. DEVELOPMENT PROCESS
const PROCESS_STEPS = [
  { num: '01', title: 'Discovery & Architecture Strategy', desc: 'Deep technical analysis of business objectives, user flows, and cloud infrastructure requirements.' },
  { num: '02', title: 'Precision UI/UX & Glassmorphism Design', desc: 'Crafting luxury visual systems in Sora, Space Grotesk & Inter typography with pixel-perfect accuracy.' },
  { num: '03', title: 'Agile Engineering & AI Integration', desc: 'Clean modular code sprints, weekly staging releases, and seamless OpenAI / microservice integration.' },
  { num: '04', title: 'QA Security Audit & Speed Hardening', desc: 'Penetration testing, Core Web Vitals optimization, and 99.99% uptime load stress testing.' },
  { num: '05', title: 'Production Launch & Continuous Scale', desc: 'Zero-downtime deployment, continuous monitoring, and proactive SLA retainer support.' }
];

// 7. TECHNOLOGIES MATRIX
const TECH_CATEGORIES = {
  All: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PyTorch', 'OpenAI API', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS'],
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
  Backend: ['Node.js', 'Python', 'FastAPI', 'Express', 'GraphQL', 'REST APIs'],
  'AI & ML': ['PyTorch', 'OpenAI API', 'LangChain', 'Pinecone Vector DB', 'TensorFlow'],
  'Cloud & DevOps': ['Docker', 'AWS', 'Vercel', 'PostgreSQL', 'Redis', 'Kubernetes']
};

// 8. TESTIMONIALS
const TESTIMONIALS = [
  {
    quote: "NimraDev Labs built our enterprise AI platform with incredible speed and craftsmanship. Their attention to detail and code quality rivals top Silicon Valley agencies.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Nexus Global Corp",
    avatar: "MV"
  },
  {
    quote: "The team redesigned our corporate platform and integrated our custom ERP workflows seamlessly. Our conversion metrics jumped 340% within the first 60 days.",
    author: "Elena Rostova",
    role: "VP of Product Strategy",
    company: "LuxeShop International",
    avatar: "ER"
  },
  {
    quote: "Working with NimraDev Labs felt like having an elite internal engineering team. Their AI chatbots and automation pipelines saved our operations 50+ hours weekly.",
    author: "David Chen",
    role: "Founder & CEO",
    company: "FinEdge Software",
    avatar: "DC"
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [techCategory, setTechCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredPortfolio = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-24 sm:space-y-36 pt-24 pb-16 overflow-hidden bg-[#F8F9FC] text-[#0D0D14] font-inter">
      
      {/* ========================================================
          1. HERO SECTION
         ======================================================== */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background lighting & grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-glow-purple blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#6C3FFC]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Headline & CTAs (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#6C3FFC]/20 text-[#0D0D14] text-xs font-semibold shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#6C3FFC] animate-ping" />
              <span className="font-mono text-[#6C3FFC]">NimraDev Labs · Enterprise Digital Engineering</span>
            </motion.div>

            {/* Powerful Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0D0D14] leading-[1.1]"
            >
              Building <span className="brand-text-gradient">Modern Digital</span> Experiences & AI Solutions
            </motion.h1>

            {/* Supporting Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-xl leading-relaxed font-inter max-w-2xl mx-auto lg:mx-0"
            >
              We build modern websites, AI solutions, and custom software that help businesses scale with confidence.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-sora font-semibold text-sm text-white bg-purple-gradient hover:opacity-90 shadow-purple-glow transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-sora font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-300"
              >
                <Play className="w-4 h-4 text-[#6C3FFC]" />
                <span>Explore Core Services</span>
              </a>
            </motion.div>

            {/* Statistics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200"
            >
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl text-[#0D0D14]">99.99%</span>
                <p className="text-[11px] font-mono text-slate-500 uppercase">Uptime SLA</p>
              </div>
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl text-[#6C3FFC]">$50M+</span>
                <p className="text-[11px] font-mono text-slate-500 uppercase">Client Revenue</p>
              </div>
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl text-[#0D0D14]">150+</span>
                <p className="text-[11px] font-mono text-slate-500 uppercase">Releases</p>
              </div>
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl text-emerald-600">&lt;14ms</span>
                <p className="text-[11px] font-mono text-slate-500 uppercase">API Latency</p>
              </div>
            </motion.div>

          </div>

          {/* Coding Illustration & Glass Cards (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Glass Element 1 */}
            <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center space-x-3 p-3.5 rounded-2xl bg-white border border-[#6C3FFC]/20 shadow-purple-glow animate-float text-[#0D0D14]">
              <div className="w-8 h-8 rounded-lg bg-purple-gradient flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-sora font-semibold text-[#0D0D14]">OpenAI Assistant</p>
                <p className="text-[10px] font-mono text-emerald-600">STATUS: ACTIVE</p>
              </div>
            </div>

            {/* Floating Glass Element 2 */}
            <div className="absolute -bottom-6 -right-6 z-20 hidden sm:flex items-center space-x-3 p-3.5 rounded-2xl bg-white border border-[#6C3FFC]/20 shadow-purple-glow animate-float-delayed text-[#0D0D14]">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-sora font-semibold text-[#0D0D14]">Core Web Vitals</p>
                <p className="text-[10px] font-mono text-[#6C3FFC]">SCORE: 99/100</p>
              </div>
            </div>

            {/* Main Interactive Coding Visual Widget */}
            <InteractiveCodeDemo />
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          2. TRUSTED COMPANIES TICKER
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-6 border border-[#6C3FFC]/15 shadow-sm overflow-hidden text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-semibold">
            Inspired by World-Class Standards · Engineering for Fortune 500 & Startups
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-2 opacity-80">
            {TRUSTED_COMPANIES.map((company) => (
              <span
                key={company.name}
                className="font-tech text-base sm:text-lg font-bold text-slate-700 hover:text-[#6C3FFC] transition-colors cursor-default"
              >
                {company.logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ABOUT US SECTION
         ======================================================== */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#6C3FFC]/15 relative overflow-hidden shadow-purple-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
                <Code2 className="w-3.5 h-3.5" />
                <span>About NimraDev Labs</span>
              </div>
              
              <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14] leading-tight">
                Architecting Enterprise Digital Products with Absolute Precision
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-inter">
                NimraDev Labs is an international software engineering firm. We combine deep technical expertise in modern frontend engineering, scalable cloud backend systems, and cutting-edge AI automation to build high-performance software.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200 space-y-1">
                  <h4 className="font-sora font-bold text-[#0D0D14] text-sm">Dedicated Senior Squads</h4>
                  <p className="text-xs text-slate-500 font-inter">Direct access to principal architects with zero junior handoffs.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200 space-y-1">
                  <h4 className="font-sora font-bold text-[#0D0D14] text-sm">AI Native Workflows</h4>
                  <p className="text-xs text-slate-500 font-inter">Custom LLMs and process automation baked into core systems.</p>
                </div>
              </div>
            </div>

            {/* Visual Narrative Matrix */}
            <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="font-sora font-semibold text-[#0D0D14] text-sm">Engineering Principles</span>
                <span className="text-xs font-mono text-[#6C3FFC]">VERIFIED SLA</span>
              </div>

              <div className="space-y-4 font-inter text-xs text-slate-600">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0D0D14]">Zero Technical Debt Guarantee:</strong> Every line of code is structured, typed, and documented to ensure long-term maintainability.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0D0D14]">Global Delivery Capability:</strong> Serving clients in North America, Europe, Middle East, and Pakistan with round-the-clock sprint velocity.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0D0D14]">Continuous Security & Compliance:</strong> SOC2-aligned development standards with automated threat detection.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. OUR CORE SERVICES (STRICTLY 4 SERVICES)
         ======================================================== */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Engineering Services</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold text-[#0D0D14]">
            Four Pillars of Enterprise Digital Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-inter">
            We focus exclusively on four specialized engineering domains to deliver world-class outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-[#6C3FFC]/15 flex flex-col justify-between hover:border-[#6C3FFC]/50 hover:shadow-purple-glow transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-purple-gradient flex items-center justify-center text-white shadow-purple-glow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#6C3FFC]/10 text-[#6C3FFC] border border-[#6C3FFC]/20">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title & Subtitle */}
                  <div>
                    <h3 className="font-sora font-bold text-2xl text-[#0D0D14] group-hover:text-[#6C3FFC] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-inter">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Specific Deliverable Bullet Points */}
                  <div className="space-y-2.5 pt-2">
                    {service.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center space-x-2.5 text-xs text-slate-700 font-inter">
                        <Check className="w-4 h-4 text-[#6C3FFC] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tech Stack & Metric */}
                <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#F8F9FC] text-slate-700 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-mono text-[#6C3FFC] font-semibold flex items-center space-x-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Benchmark: {service.metric}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          5. INDUSTRIES WE SERVE
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Vertical Domain Expertise</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Tailored Engineering Solutions for High-Growth Sectors
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#6C3FFC]/15 hover:border-[#6C3FFC]/40 hover:shadow-purple-glow transition-all space-y-3 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F8F9FC] border border-slate-200 flex items-center justify-center text-[#6C3FFC]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-sora font-bold text-lg text-[#0D0D14]">{ind.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-inter">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          6. WHY CHOOSE NIMRADEV LABS
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#6C3FFC]/15 relative overflow-hidden shadow-purple-glow">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <span className="text-[#6C3FFC] text-xs font-mono font-semibold uppercase tracking-wider bg-[#6C3FFC]/10 px-3.5 py-1.5 rounded-full border border-[#6C3FFC]/30">
              The Engineering Difference
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
              Why Global Enterprise Leaders Choose NimraDev Labs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE_POINTS.map((pt, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8F9FC] border border-slate-200 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-gradient flex items-center justify-center text-white font-mono font-bold text-xs shadow-purple-glow">
                    0{idx + 1}
                  </div>
                  <h3 className="font-sora font-bold text-base text-[#0D0D14]">{pt.title}</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-inter pl-11">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. PORTFOLIO SHOWCASE
         ======================================================== */}
      <section id="portfolio" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
              Featured Enterprise Case Studies
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
            {['All', 'Web Development', 'E-Commerce Development', 'AI Solutions & Automation', 'Custom Software Development'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#6C3FFC] text-white shadow-purple-glow'
                    : 'text-slate-600 hover:text-[#0D0D14]'
                }`}
              >
                {cat === 'All' ? 'All Builds' : cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPortfolio.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl border border-[#6C3FFC]/15 overflow-hidden cursor-pointer group hover:border-[#6C3FFC]/60 hover:shadow-purple-glow transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#6C3FFC]/10 text-[#6C3FFC] border border-[#6C3FFC]/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-emerald-600 font-mono flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {project.metric}
                  </span>
                </div>

                <div>
                  <h3 className="font-sora font-bold text-2xl text-[#0D0D14] group-hover:text-[#6C3FFC] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-inter">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#F8F9FC] text-slate-700 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 bg-[#F8F9FC] border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-sora font-semibold group-hover:text-[#6C3FFC]">
                <span>View Full Technical Case Study</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal Trigger */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </section>

      {/* ========================================================
          8. OUR DEVELOPMENT PROCESS
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>Agile Delivery Pipeline</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold text-[#0D0D14]">
            5 Steps to Production Engineering Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white border border-[#6C3FFC]/15 space-y-3 relative flex flex-col justify-between hover:border-[#6C3FFC]/40 hover:shadow-purple-glow transition-all shadow-sm"
            >
              <div className="space-y-3">
                <span className="font-sora font-black text-3xl text-[#6C3FFC]/40">{step.num}</span>
                <h4 className="font-sora font-bold text-[#0D0D14] text-base leading-snug">{step.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-inter">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          9. TECHNOLOGIES MATRIX
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>Industrial Tech Stack</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Modern Battle-Tested Technologies
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {Object.keys(TECH_CATEGORIES).map((cat) => (
            <button
              key={cat}
              onClick={() => setTechCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-sora font-semibold transition-all ${
                techCategory === cat
                  ? 'bg-purple-gradient text-white shadow-purple-glow'
                  : 'bg-white text-slate-600 hover:text-[#0D0D14] border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {TECH_CATEGORIES[techCategory].map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 font-mono text-xs text-slate-800 hover:border-[#6C3FFC]/50 hover:text-[#6C3FFC] transition-colors shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ========================================================
          10. TESTIMONIALS
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Trusted by Technology Leaders Globally
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-[#6C3FFC]/15 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-purple-glow transition-all">
              <p className="text-slate-700 text-sm leading-relaxed italic font-inter">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-purple-gradient flex items-center justify-center font-sora font-bold text-white text-xs shadow-purple-glow">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-sora font-bold text-[#0D0D14] text-sm">{t.author}</h4>
                  <p className="text-xs font-mono text-slate-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          11. INTERACTIVE PROJECT ESTIMATOR
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ProjectEstimator />
      </section>

      {/* ========================================================
          12. FREQUENTLY ASKED QUESTIONS
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#6C3FFC] text-xs font-mono font-semibold uppercase tracking-wider bg-[#6C3FFC]/10 px-3.5 py-1.5 rounded-full border border-[#6C3FFC]/30">
            Frequently Asked Questions
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Clear Answers for Technology Decisions
          </h2>
        </div>
        <FAQAccordion />
      </section>

      {/* ========================================================
          13. CONTACT & TECHNICAL BRIEF
         ======================================================== */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>Initiate Engagement</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold text-[#0D0D14]">
            Let's Build Your Enterprise Software Solution
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-inter">
            Submit your technical brief or project scope below. Our principal architect will respond within 12 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
