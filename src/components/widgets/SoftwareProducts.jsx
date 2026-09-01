import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, GraduationCap, ShoppingBag, Stethoscope, Store, 
  UtensilsCrossed, Landmark, Check, ArrowRight, Sparkles, ShieldCheck, Zap, MessageCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'school-erp',
    icon: GraduationCap,
    title: 'Education & School ERP',
    tagline: 'Complete digital campus management platform for schools & colleges.',
    badge: 'Flagship Solution',
    description: 'All-in-one education ecosystem handling automated admissions, attendance telemetry, online fee collection, and parent portals.',
    features: [
      'Automated Admission & Student Information System (SIS)',
      'Instant Fee Collection & Online Payment Gateway Sync',
      'Dedicated Parent, Teacher & Student Mobile Portals',
      'Biometric & RFID Attendance Integration with SMS Alerts'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    metrics: '99.9% Attendance Accuracy · 100k+ Students'
  },
  {
    id: 'retail-pos',
    icon: Store,
    title: 'Retail POS & Inventory',
    tagline: 'High-speed cloud point of sale and multi-store inventory sync.',
    badge: 'Enterprise POS',
    description: 'Modern barcode scanning POS engine with offline sales caching, automated stock reordering, and revenue dashboards.',
    features: [
      'Sub-Second Barcode Scan & Thermal Receipts',
      'Offline Store Operation & Auto Cloud Sync',
      'Multi-Branch Inventory & Stock Transfers',
      'Customer Loyalty Points & Khata Ledger'
    ],
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    metrics: 'Sub-100ms Billing Latency · 3x Cashier Speed'
  },
  {
    id: 'restaurant-pos',
    icon: UtensilsCrossed,
    title: 'Restaurant Management',
    tagline: 'End-to-end POS, kitchen display system (KDS), and digital orders.',
    badge: 'Food & Hospitality',
    description: 'Specialized restaurant solution featuring live kitchen display orders, table reservations, and raw ingredient tracking.',
    features: [
      'Touchscreen POS with Floor Plan & Table Management',
      'Kitchen Display System (KDS) & Waiter Apps',
      'Raw Ingredient Inventory & Wastage Tracking',
      'Daily Z-Reports, Shift Closures & Audit Trails'
    ],
    tech: ['React', 'WebSockets', 'Node.js', 'PostgreSQL'],
    metrics: '50% Faster Order Turnaround'
  },
  {
    id: 'real-estate-crm',
    icon: Landmark,
    title: 'Real Estate & Property CRM',
    tagline: 'Lead pipeline, property booking files, and installment tracking.',
    badge: 'PropTech CRM',
    description: 'Tailored for real estate developers and agencies to track client leads, plot booking files, and automated installment plans.',
    features: [
      'Plot & Unit Booking with Automated Installment Schedules',
      'Lead Qualification Pipeline with WhatsApp Integration',
      'Agent Commission Management & Payouts',
      'Automated Overdue Payment Reminders'
    ],
    tech: ['Next.js', 'Python', 'Tailwind CSS', 'PostgreSQL'],
    metrics: '4x Faster Installment Follow-up'
  },
  {
    id: 'health-portal',
    icon: Stethoscope,
    title: 'Healthcare & Clinic Suite',
    tagline: 'Clinical appointment scheduling, EHR records, and prescription sync.',
    badge: 'HealthTech ERP',
    description: 'Patient portal and clinical management system supporting online doctor booking, queue management, and EHR records.',
    features: [
      'Online Doctor Scheduling & Token / Queue Manager',
      'Electronic Health Records (EHR) & Lab Archival',
      'E-Prescription & Pharmacy Inventory Sync',
      'HIPAA & GDPR-Compliant Encrypted Cloud'
    ],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    metrics: '15,000+ Monthly Appointments'
  },
  {
    id: 'enterprise-erp',
    icon: Building2,
    title: 'Enterprise Operations ERP',
    tagline: 'Corporate resource planning, accounting, and payroll platform.',
    badge: 'Corporate ERP',
    description: 'Centralized operational command engine combining financial accounting, procurement, HR & payroll, and executive BI analytics.',
    features: [
      'Double-Entry Accounting & General Ledger',
      'HR Management, Attendance & Automated Payroll',
      'Procurement & Multi-Level Vendor Approvals',
      'Role-Based Granular Access Controls'
    ],
    tech: ['TypeScript', 'Python', 'PostgreSQL', 'Docker'],
    metrics: 'SOC2 Ready · High Availability'
  }
];

export default function SoftwareProducts() {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0].id);

  const selectedProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];
  const IconComponent = selectedProduct.icon;

  return (
    <section id="products" className="py-12 sm:py-14 bg-white relative overflow-hidden font-inter text-[#0D0D14] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Compact) */}
        <div className="text-center space-y-2 max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFFF] border border-[#E8DAFF] text-[#6C3FFC] text-[10px] font-semibold uppercase tracking-wider font-sora shadow-xs">
            <Zap className="w-3 h-3" />
            <span>Turnkey Software Engines</span>
          </div>
          <h2 className="font-sora text-2xl sm:text-3xl font-extrabold text-[#0D0D14] tracking-tight">
            Ready-to-Deploy <span className="text-[#6C3FFC]">Software</span> Solutions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-inter">
            Proven software systems built for rapid deployment, custom branding, and reliable scaling.
          </p>
        </div>

        {/* Tabs Grid (Compact) */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-1.5 border-b border-slate-200 pb-3 mb-6">
          {PRODUCTS.map((prod) => {
            const Icon = prod.icon;
            const isActive = activeTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-sora font-semibold text-xs whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#6C3FFC] text-white shadow-xs'
                    : 'bg-[#F8F9FC] text-slate-700 hover:text-[#6C3FFC] border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#6C3FFC]'}`} />
                <span>{prod.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Product Highlight Detail Card (Compact) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#F8F9FC] p-5 sm:p-6 rounded-2xl border border-[#E6E6E6] shadow-xs"
          >
            
            {/* Main Info (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-[#6C3FFC] flex items-center justify-center text-white shadow-xs shrink-0">
                  <IconComponent className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[#6C3FFC]/10 text-[#6C3FFC] border border-[#6C3FFC]/20">
                    {selectedProduct.badge}
                  </span>
                  <h3 className="font-sora font-bold text-lg sm:text-xl text-[#0D0D14] mt-0.5">
                    {selectedProduct.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-inter">
                {selectedProduct.description}
              </p>

              <div className="space-y-2 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-700 font-inter">
                      <Check className="w-3.5 h-3.5 text-[#6C3FFC] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/80">
                <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
                {selectedProduct.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white text-slate-700 border border-slate-200 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Box (5 Cols - Compact) */}
            <div className="lg:col-span-5 bg-white p-4 sm:p-5 rounded-xl border border-[#E6E6E6] space-y-4 shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-emerald-600 font-semibold uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Deployment Benchmark</span>
                </span>
                <p className="font-sora font-bold text-sm text-[#0D0D14]">
                  {selectedProduct.metrics}
                </p>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed font-inter">
                Turnaround 1-2 weeks with custom branding, data migration, and training.
              </p>

              <div className="space-y-2 pt-1">
                <Link
                  to="/contact"
                  state={{ selectedService: `Product Demo: ${selectedProduct.title}` }}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-sora font-bold text-xs uppercase tracking-wider text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] shadow-xs transition-all"
                >
                  <span>Request Live Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                
                <a
                  href={`https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20want%20a%20demo%20for%3A%20${encodeURIComponent(selectedProduct.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-sora font-semibold text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Demo Request</span>
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
