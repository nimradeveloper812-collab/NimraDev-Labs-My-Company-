import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, GraduationCap, ShoppingBag, Stethoscope, Store, 
  Check, ArrowRight, Sparkles, ExternalLink, ShieldCheck, Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'school-erp',
    icon: GraduationCap,
    title: 'Education & School ERP Suite',
    tagline: 'Complete digital campus management platform for schools, colleges & universities.',
    badge: 'Flagship Solution',
    description: 'All-in-one education ecosystem handling automated student admissions, attendance telemetry, online fee collection, gradebook analytics, parent portal app, and staff payroll.',
    features: [
      'Automated Admission & Student Information System',
      'Instant Fee Collection & Online Payment Gateway',
      'Parent & Student Mobile App Portals',
      'Examination, Report Card & Attendance Engine',
      'Biometric & RFID Attendance Integration'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    metrics: '99.9% Attendance Accuracy · 100k+ Active Students'
  },
  {
    id: 'retail-pos',
    icon: Store,
    title: 'Retail POS & Inventory Engine',
    tagline: 'High-speed cloud point of sale and multi-store inventory synchronization system.',
    badge: 'Enterprise POS',
    description: 'Modern barcode scanning POS engine with offline sales caching, automated stock reordering, barcode printing, multi-store transfer feeds, and real-time revenue dashboards.',
    features: [
      'Sub-Second Barcode Scan & Instant Thermal Receipts',
      'Offline Store Operation & Auto Cloud Sync',
      'Multi-Branch Inventory & Transfer Controls',
      'Supplier Purchase Orders & Profit Margin Analytics',
      'Customer Loyalty Points & SMS Receipts'
    ],
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    metrics: 'Sub-100ms Billing Latency · 3x Cashier Speed'
  },
  {
    id: 'enterprise-erp',
    icon: Building2,
    title: 'Enterprise ERP & Operations Engine',
    tagline: 'Customizable resource planning and operational intelligence platform for mid-market & enterprise.',
    badge: 'Corporate ERP',
    description: 'Centralized operational command engine combining financial accounting, procurement pipelines, HR & payroll processing, asset lifecycle management, and executive BI reporting.',
    features: [
      'Double-Entry Financial Accounting & General Ledger',
      'HR Management, Attendance & Automated Payroll',
      'Procurement Pipelines & Vendor Approval Workflows',
      'Asset Tracking & Maintenance Telemetry',
      'Role-Based Granular Audit Trail Controls'
    ],
    tech: ['TypeScript', 'Python', 'PostgreSQL', 'Docker'],
    metrics: 'SOC2 Security Ready · Zero Data Loss Uptime'
  },
  {
    id: 'health-portal',
    icon: Stethoscope,
    title: 'Healthcare & Patient Intake Portal',
    tagline: 'HIPAA-aligned clinical appointment scheduling and EHR document automation suite.',
    badge: 'Healthtech ERP',
    description: 'Patient portal and clinical management system supporting online doctor booking, tele-consultation video rooms, automated AI triage questionnaires, and electronic prescription generation.',
    features: [
      'Online Doctor Scheduling & Slot Allocator',
      'Automated Patient AI Intake & Pre-Consultation Notes',
      'EHR & Lab Result Document Management',
      'E-Prescription & Pharmacy Dispatch Sync',
      'HIPAA & GDPR Compliant Encrypted Storage'
    ],
    tech: ['React', 'Python', 'OpenAI API', 'FastAPI'],
    metrics: '15,000+ Monthly Automated Patient Intakes'
  },
  {
    id: 'headless-commerce',
    icon: ShoppingBag,
    title: 'Headless E-Commerce Storefront Engine',
    tagline: 'Ultra-fast global online store infrastructure with sub-second page rendering.',
    badge: 'Scalable Commerce',
    description: 'Next-gen e-commerce platform built on headless microservices, multi-currency checkout, dynamic product filtering, and instant search indexing for high-volume retail brands.',
    features: [
      'Instant Page Transitions & 100/100 Lighthouse Performance',
      'Stripe, PayPal & Regional Payment Gateways',
      'Dynamic Elastic Product Search & Filter Engine',
      'Omnichannel Order Management & Courier Webhooks',
      'Multi-Language & Multi-Currency Auto Localization'
    ],
    tech: ['Next.js', 'Shopify Plus API', 'Tailwind CSS', 'Redis'],
    metrics: '+340% Mobile Checkout Conversion'
  }
];

export default function SoftwareProducts() {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0].id);

  const selectedProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];
  const IconComponent = selectedProduct.icon;

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 border border-[#6C3FFC]/15 shadow-purple-glow space-y-8 sm:space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
          <Zap className="w-3.5 h-3.5" />
          <span>Turnkey Software Engines</span>
        </div>
        <h2 className="font-space text-2xl sm:text-4xl font-extrabold text-[#0D0D14]">
          Ready-to-Deploy Software Solutions
        </h2>
        <p className="text-slate-600 text-xs sm:text-base font-inter">
          Pre-built software systems designed for rapid deployment, reliable performance, and custom branding.
        </p>
      </div>

      {/* Tabs (Horizontal scrolling on mobile) */}
      <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-2 border-b border-slate-200 pb-4 sm:pb-6 -mx-2 px-2">
        {PRODUCTS.map((prod) => {
          const Icon = prod.icon;
          const isActive = activeTab === prod.id;
          return (
            <button
              key={prod.id}
              onClick={() => setActiveTab(prod.id)}
              className={`flex items-center space-x-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl font-sora font-semibold text-xs whitespace-nowrap shrink-0 transition-all duration-200 ${
                isActive
                  ? 'bg-purple-gradient text-white shadow-purple-glow'
                  : 'bg-[#F8F9FC] text-slate-700 hover:text-[#6C3FFC] border border-slate-200'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-[#6C3FFC]'}`} />
              <span>{prod.title.split('&')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Product Highlight Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProduct.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8F9FC] p-6 sm:p-10 rounded-2xl border border-slate-200"
        >
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-gradient flex items-center justify-center text-white shadow-purple-glow">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#6C3FFC]/10 text-[#6C3FFC] border border-[#6C3FFC]/20">
                  {selectedProduct.badge}
                </span>
                <h3 className="font-sora font-bold text-2xl text-[#0D0D14] mt-1">
                  {selectedProduct.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-inter">
              {selectedProduct.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-sora font-bold text-[#0D0D14] uppercase tracking-wider">
                Key Production Capabilities:
              </p>
              {selectedProduct.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-700 font-inter">
                  <Check className="w-4 h-4 text-[#6C3FFC] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-slate-500 mr-2">Built with:</span>
              {selectedProduct.tech.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white text-slate-700 border border-slate-200 shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Box */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-emerald-600 font-semibold uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Benchmark</span>
              </span>
              <p className="font-sora font-bold text-base text-[#0D0D14]">
                {selectedProduct.metrics}
              </p>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-inter">
              Deployment timelines average 2-4 weeks with full source code access, cloud setup, and SLA support.
            </p>

            <div className="space-y-3 pt-2">
              <Link
                to="/contact"
                state={{ selectedService: `Product Demo: ${selectedProduct.title}` }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sora font-semibold text-xs uppercase tracking-wider text-white bg-purple-gradient hover:opacity-90 shadow-purple-glow transition-all"
              >
                <span>Request Software Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20want%20a%20demo%20of%20your%20Software%20Product%3A%20"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-sora font-semibold text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
