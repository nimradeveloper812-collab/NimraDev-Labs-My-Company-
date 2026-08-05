import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, ShoppingCart, Bot, Cpu, ShieldCheck, Zap, 
  CheckCircle2, ArrowRight, Layers, Code2, Users, TrendingUp, 
  Server, Sparkles, Terminal, Activity, Check, ChevronRight, Lock, Play,
  Smartphone, Search, Palette, MessageSquare, ExternalLink
} from 'lucide-react';
import InteractiveCodeDemo from '../components/widgets/InteractiveCodeDemo';
import ProjectEstimator from '../components/widgets/ProjectEstimator';
import FAQAccordion from '../components/widgets/FAQAccordion';
import ContactForm from '../components/widgets/ContactForm';
import ProjectModal from '../components/widgets/ProjectModal';
import BrandBanner from '../components/widgets/BrandBanner';
import SoftwareProducts from '../components/widgets/SoftwareProducts';

// 1. TECHNOLOGY STACK WE USE
const TRUSTED_COMPANIES = [
  { name: 'React', logo: '⚛ React' },
  { name: 'Next.js', logo: '▲ Next.js' },
  { name: 'Node.js', logo: '⬢ Node.js' },
  { name: 'Python', logo: '🐍 Python' },
  { name: 'Tailwind', logo: '🌊 Tailwind CSS' },
  { name: 'PostgreSQL', logo: '🐘 PostgreSQL' },
  { name: 'Docker', logo: '🐳 Docker' },
  { name: 'TypeScript', logo: '🟦 TypeScript' }
];

// 2. CORE SERVICES
const CORE_SERVICES = [
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Professional business websites, landing pages, web applications, and company portals.',
    icon: Globe,
    badge: 'Core Experience',
    items: [
      'Professional Business Websites',
      'High-Converting Landing Pages',
      'SaaS & Web Applications',
      'Company & Corporate Portals'
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    metric: '99.9% Uptime & Speed'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    subtitle: 'Cross-platform iOS and Android mobile apps engineered for speed and sleek UX.',
    icon: Smartphone,
    badge: 'Cross Platform',
    items: [
      'iOS & Android Mobile Apps',
      'Flutter & React Native Architecture',
      'Push Notification Engines',
      'App Store & Play Store Publishing'
    ],
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    metric: 'Seamless Cross-Platform'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    subtitle: 'AI chatbots, AI assistants, workflow automation, and custom OpenAI API integration.',
    icon: Bot,
    badge: 'AI Automation',
    items: [
      'AI Chatbots & Virtual Assistants',
      'Automated Workflow Pipelines',
      'Custom OpenAI API Integration',
      'Business Process Automation'
    ],
    tech: ['Python', 'PyTorch', 'OpenAI API', 'LangChain', 'FastAPI'],
    metric: 'Automated Operations'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    subtitle: 'CRM, ERP, business dashboards, management systems, and custom web software.',
    icon: Cpu,
    badge: 'Custom Systems',
    items: [
      'Custom CRM & ERP Solutions',
      'School & Education Systems',
      'Retail POS & Inventory Software',
      'Real-time Management Dashboards'
    ],
    tech: ['TypeScript', 'React', 'Python', 'Docker', 'PostgreSQL'],
    metric: 'High Speed Performance'
  },
  {
    id: 'ecom-dev',
    title: 'E-Commerce Development',
    subtitle: 'Modern online stores with secure payment integration and clean catalog management.',
    icon: ShoppingCart,
    badge: 'Online Stores',
    items: [
      'Custom E-Commerce Stores',
      'Secure Payment Gateways',
      'Product Search & Filtering',
      'Inventory Sync & Admin Desk'
    ],
    tech: ['Next.js', 'Shopify API', 'Node.js', 'PostgreSQL', 'Redis'],
    metric: 'Fast Mobile Checkout'
  },
  {
    id: 'seo-marketing',
    title: 'Digital Marketing & SEO',
    subtitle: 'Search engine optimization, keyword strategy, and digital visibility for businesses.',
    icon: Search,
    badge: 'Digital Growth',
    items: [
      'On-Page & Technical SEO',
      'Local & Search Ranking Strategy',
      'Conversion Rate Optimization',
      'Content Planning & Analysis'
    ],
    tech: ['Google Analytics 4', 'Search Console', 'Ahrefs', 'Semrush'],
    metric: 'Search Visibility'
  },
  {
    id: 'graphics-uiux',
    title: 'UI/UX & Graphic Design',
    subtitle: 'Clean brand identities, user interface designs, and visual marketing assets.',
    icon: Palette,
    badge: 'Design Systems',
    items: [
      'Modern UI/UX Web Layouts',
      'Mobile App UI Wireframes',
      'Brand Identity & Logos',
      'Marketing & Digital Graphics'
    ],
    tech: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Design Systems'],
    metric: '100% Tailored Designs'
  }
];

// 3. INDUSTRIES WE SERVE
const INDUSTRIES = [
  { title: 'Fintech & Payments', desc: 'Secure billing portals, payment gateway integrations, financial dashboards.', icon: ShieldCheck },
  { title: 'Healthcare & Care', desc: 'Patient booking portals, doctor scheduling, clinical management tools.', icon: Activity },
  { title: 'E-Commerce & Retail', desc: 'Online shopping stores, automated inventory, POS billing software.', icon: ShoppingCart },
  { title: 'Education & Schools', desc: 'School ERP systems, student portals, fee collection, attendance management.', icon: Globe },
  { title: 'Logistics & Transport', desc: 'Vehicle tracking platforms, ride-hailing software, order dispatch desks.', icon: Server },
  { title: 'AI & Software Startups', desc: 'AI assistants, custom web dashboards, automated background workflows.', icon: Bot }
];

// 4. WHY CHOOSE NIMRADEV LABS
const WHY_CHOOSE_POINTS = [
  {
    title: 'Clean Code & Reliable Architecture',
    desc: 'Zero technical clutter. We write clean, modular, and maintainable TypeScript & Python code built for long-term stability.'
  },
  {
    title: 'Modern Development Speed',
    desc: 'We use efficient development tools and modern frameworks to deliver projects on schedule with high accuracy.'
  },
  {
    title: 'Custom & Tailored UI/UX',
    desc: 'No generic templates. Every layout, visual component, and card is custom-crafted to reflect your company identity.'
  },
  {
    title: 'Secure & Data Protected',
    desc: 'Standard data encryption, secure authentication, and protected API endpoints to safeguard your business information.'
  }
];

// 5. PORTFOLIO CASE STUDIES (THE 4 SPECIFIC PROJECTS)
const PORTFOLIO_PROJECTS = [
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

// 6. DEVELOPMENT PROCESS
const PROCESS_STEPS = [
  { num: '01', title: 'Requirement Analysis & Strategy', desc: 'Understanding your business goals, user needs, and defining clear technical specifications.' },
  { num: '02', title: 'Modern UI/UX & Wireframing', desc: 'Designing clean visual layouts in Sora, Space Grotesk, and Inter typography.' },
  { num: '03', title: 'Agile Coding & AI Integration', desc: 'Writing modular code, setting up databases, and integrating required APIs.' },
  { num: '04', title: 'Testing, QA & Optimization', desc: 'Thorough functional testing, speed optimization, and security checks.' },
  { num: '05', title: 'Deployment & Ongoing Support', desc: 'Deploying your software live with reliable support and maintenance.' }
];

// 7. TECHNOLOGIES MATRIX
const TECH_CATEGORIES = {
  All: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PyTorch', 'OpenAI API', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS'],
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
  Backend: ['Node.js', 'Python', 'FastAPI', 'Express', 'GraphQL', 'REST APIs'],
  'AI & ML': ['PyTorch', 'OpenAI API', 'LangChain', 'Pinecone Vector DB'],
  'Cloud & DevOps': ['Docker', 'AWS', 'Vercel', 'PostgreSQL', 'Redis']
};

// 8. TESTIMONIALS
const TESTIMONIALS = [
  {
    quote: "NimraDev Labs built our web platform with exceptional quality and attention to detail. Their communication and support throughout the project was outstanding.",
    author: "Hassan Ahmed",
    role: "Founder",
    company: "Retail Platform",
    avatar: "HA"
  },
  {
    quote: "The team developed our custom software system smoothly. Our operational efficiency improved significantly after deployment.",
    author: "Usman Tariq",
    role: "Managing Director",
    company: "Logistics Solutions",
    avatar: "UT"
  },
  {
    quote: "Working with NimraDev Labs has been a great experience. Their technical expertise in AI automation and web applications helped us launch on schedule.",
    author: "Danial Chaudhry",
    role: "Head of Operations",
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
    <div className="space-y-16 sm:space-y-28 lg:space-y-36 pt-28 sm:pt-36 pb-16 overflow-x-hidden bg-[#F8F9FC] text-[#0D0D14] font-inter">
      
      {/* ========================================================
          1. HERO SECTION
         ======================================================== */}
      <section id="home" className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background lighting & grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-glow-purple blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#6C3FFC]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#6C3FFC]/20 text-[#0D0D14] text-xs font-semibold shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#6C3FFC] animate-ping" />
              <span className="font-mono text-[#6C3FFC]">NimraDev Labs · Software & AI Engineering</span>
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
                <span className="font-sora font-extrabold text-2xl text-[#0D0D14]">99.9%</span>
                <p className="text-[11px] font-mono text-slate-500 uppercase">Uptime</p>
              </div>
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl text-[#6C3FFC]">100+</span>
                <p className="text-[11px] font-mono text-slate-500 uppercase">Projects Built</p>
              </div>
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl text-[#0D0D14]">24/7</span>
                <p className="text-[11px] font-mono text-slate-500 uppercase">Support</p>
              </div>
              <div className="space-y-1">
                <span className="font-sora font-extrabold text-2xl text-emerald-600">&lt;100ms</span>
                <p className="text-[11px] font-mono text-slate-500 uppercase">Fast Speed</p>
              </div>
            </motion.div>

          </div>

          {/* Featured Core Live Projects Grid (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {PORTFOLIO_PROJECTS.map((project) => {
              const IconComp = project.category === 'Web Development' ? Globe
                : project.category === 'E-Commerce' ? ShoppingCart
                : project.category === 'AI Solutions' ? Bot : Cpu;
              return (
                <div
                  key={project.id}
                  className="bg-white p-5 rounded-2xl border border-[#6C3FFC]/15 shadow-purple-glow hover:border-[#6C3FFC]/40 transition-all space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#6C3FFC]/10 flex items-center justify-center text-[#6C3FFC] group-hover:bg-purple-gradient group-hover:text-white transition-all shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                      LIVE ONLINE
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">{project.category}</span>
                    <h4 className="font-sora font-bold text-sm text-[#0D0D14] line-clamp-1 group-hover:text-[#6C3FFC] transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sora font-semibold text-[#6C3FFC] hover:underline pt-1"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          1.5 OFFICIAL BRAND BANNER
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <BrandBanner />
      </section>

      {/* ========================================================
          2. TRUSTED COMPANIES TICKER
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-6 border border-[#6C3FFC]/15 shadow-sm overflow-hidden text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-mono font-semibold">
            Built With Modern Technology Stack & Industry Standards
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
              
              <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#0D0D14] leading-tight">
                Building High-Quality Software & Digital Solutions
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-inter">
                NimraDev Labs is a professional software engineering company based in Pakistan. We build clean web platforms, e-commerce stores, custom software systems, and AI automation to help local businesses and growing startups succeed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200 space-y-1">
                  <h4 className="font-sora font-bold text-[#0D0D14] text-sm">Dedicated Core Team</h4>
                  <p className="text-xs text-slate-500 font-inter">Direct communication with our software engineering team.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-slate-200 space-y-1">
                  <h4 className="font-sora font-bold text-[#0D0D14] text-sm">AI & Smart Workflows</h4>
                  <p className="text-xs text-slate-500 font-inter">Integrating AI tools and process automation into software.</p>
                </div>
              </div>
            </div>

            {/* Visual Narrative Matrix */}
            <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="font-sora font-semibold text-[#0D0D14] text-sm">Engineering Principles</span>
                <span className="text-xs font-mono text-[#6C3FFC]">CORE VALUE</span>
              </div>

              <div className="space-y-4 font-inter text-xs text-slate-600">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0D0D14]">Clean Code & Maintenance:</strong> Structured code for long-term scalability and easy updates.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0D0D14]">Reliable Local Support:</strong> Prompt communication and ongoing technical assistance.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#6C3FFC] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0D0D14]">Security & Best Practices:</strong> Safe data handling and secure system authentication.
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
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold text-[#0D0D14]">
            Four Pillars of Software Engineering Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-inter">
            We focus on specialized technical services to deliver clean and effective digital solutions.
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
                    <span>Focus: {service.metric}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          4.5 READY-TO-DEPLOY SOFTWARE PRODUCTS
         ======================================================== */}
      <section id="products" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SoftwareProducts />
      </section>

      {/* ========================================================
          5. INDUSTRIES WE SERVE
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Domain Experience</span>
          </div>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Solutions Designed for Key Business Sectors
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
              Why Partner With Us
            </span>
            <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
              Why Businesses Choose NimraDev Labs
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
              <span>Project Work</span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
              Featured Client Projects & Builds
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
                  <span>Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal Trigger */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </section>

      {/* ========================================================
          8. DEVELOPMENT PROCESS
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>Development Process</span>
          </div>
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold text-[#0D0D14]">
            5 Steps to Delivering Software Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6C3FFC]/15 space-y-3 relative flex flex-col justify-between hover:border-[#6C3FFC]/40 hover:shadow-purple-glow transition-all shadow-sm"
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
            <span>Tech Stack</span>
          </div>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Modern Development Stack
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
            <span>Client Feedback</span>
          </div>
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Trusted by Business Owners & Teams
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
          <h2 className="font-space text-3xl sm:text-4xl font-extrabold text-[#0D0D14]">
            Clear Answers to Common Questions
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
            <span>Get Started</span>
          </div>
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold text-[#0D0D14]">
            Let's Build Your Software Solution
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-inter">
            Submit your project requirements below. Our software engineering team will respond promptly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
