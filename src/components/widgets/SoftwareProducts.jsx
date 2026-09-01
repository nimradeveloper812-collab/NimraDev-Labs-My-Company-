import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, GraduationCap, ShoppingBag, Stethoscope, Store, 
  UtensilsCrossed, Landmark, Check, ArrowRight, Sparkles, ExternalLink, ShieldCheck, Zap, MessageCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'school-erp',
    icon: GraduationCap,
    title: 'Education & School ERP Suite',
    tagline: 'Complete digital campus management platform for schools, colleges & academies.',
    badge: 'Flagship Solution',
    description: 'All-in-one education ecosystem handling automated student admissions, RFID/biometric attendance telemetry, online fee collection, gradebook analytics, parent portal app, and staff payroll.',
    features: [
      'Automated Admission & Student Information System (SIS)',
      'Instant Fee Collection & Online Payment Gateway Integration',
      'Dedicated Parent, Teacher & Student Mobile Portals',
      'Examination, Report Card & Attendance Engine',
      'Biometric & RFID Attendance Integration with SMS Alerts'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    metrics: '99.9% Attendance Accuracy · 100k+ Active Students Supported'
  },
  {
    id: 'retail-pos',
    icon: Store,
    title: 'Retail POS & Multi-Store Inventory',
    tagline: 'High-speed cloud point of sale and multi-store inventory synchronization system.',
    badge: 'Enterprise POS',
    description: 'Modern barcode scanning POS engine with offline sales caching, automated stock reordering, barcode printing, multi-store transfer feeds, and real-time executive revenue dashboards.',
    features: [
      'Sub-Second Barcode Scan & Instant Thermal Receipts',
      'Offline Store Operation & Auto Cloud Sync on Reconnect',
      'Multi-Branch Inventory & Inter-Store Transfer Controls',
      'Supplier Purchase Orders, Expiry Tracking & Profit Margins',
      'Customer Loyalty Points, Customer Khata & SMS Receipts'
    ],
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    metrics: 'Sub-100ms Billing Latency · 3x Cashier Speed Increase'
  },
  {
    id: 'restaurant-pos',
    icon: UtensilsCrossed,
    title: 'Restaurant & Food Chain Management',
    tagline: 'End-to-end POS, kitchen display system (KDS), and online table ordering suite.',
    badge: 'Food & Hospitality',
    description: 'Specialized restaurant solution featuring live kitchen display orders, table reservation management, digital QR code menus, recipe inventory tracking, and multi-branch delivery dispatch.',
    features: [
      'Touchscreen POS with Floor Plan & Table Reservation Management',
      'Kitchen Display System (KDS) & Waiter Order Taking Apps',
      'Recipe-Based Raw Ingredient Inventory & Wastage Tracking',
      'Foodpanda / UberEats / Custom Online Ordering Sync',
      'Daily Z-Reports, Shift Closures & Expense Audit Trails'
    ],
    tech: ['React', 'WebSockets', 'Node.js', 'PostgreSQL'],
    metrics: '50% Faster Order-to-Kitchen Turnaround'
  },
  {
    id: 'real-estate-crm',
    icon: Landmark,
    title: 'Real Estate & Property Management CRM',
    tagline: 'Comprehensive lead pipeline, property listing, and installment tracking engine.',
    badge: 'PropTech CRM',
    description: 'Tailored for real estate developers, agencies, and property managers to track client leads, plot/property booking files, automated installment schedules, and commission disbursements.',
    features: [
      'Plot & Unit Booking with Automated Installment Schedule Plans',
      'Lead Qualification Pipeline with WhatsApp Integration',
      'Property Inventory Visualization & Availability Matrix',
      'Agent Commission Management & Milestone Payouts',
      'Payment Verification Receipts & Automated Overdue Reminders'
    ],
    tech: ['Next.js', 'Python', 'Tailwind CSS', 'PostgreSQL'],
    metrics: '4x Faster Installment Follow-up & Zero Ledger Errors'
  },
  {
    id: 'health-portal',
    icon: Stethoscope,
    title: 'Healthcare & Clinic Management Suite',
    tagline: 'Clinical appointment scheduling, EHR records, and prescription automation.',
    badge: 'HealthTech ERP',
    description: 'Patient portal and clinical management system supporting online doctor booking, queue management, electronic health records (EHR), automated AI pre-consultation notes, and pharmacy sync.',
    features: [
      'Online Doctor Scheduling & Token / Queue Manager',
      'Electronic Health Records (EHR) & Lab Result Archival',
      'E-Prescription & Pharmacy Inventory Dispatch Sync',
      'Automated Patient Intake & WhatsApp Appointment Reminders',
      'HIPAA & GDPR-Compliant Encrypted Cloud Storage'
    ],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    metrics: '15,000+ Monthly Automated Appointments Handled'
  },
  {
    id: 'enterprise-erp',
    icon: Building2,
    title: 'Enterprise ERP & Operations Engine',
    tagline: 'Customizable corporate resource planning and operational intelligence platform.',
    badge: 'Corporate ERP',
    description: 'Centralized operational command engine combining double-entry financial accounting, procurement pipelines, HR & payroll processing, asset lifecycle telemetry, and executive BI analytics.',
    features: [
      'Double-Entry Financial Accounting & General Ledger Auditing',
      'HR Management, Biometric Attendance & Automated Payroll',
      'Procurement Pipelines & Multi-Level Vendor Approval Workflows',
      'Asset Tracking & Maintenance Telemetry',
      'Role-Based Granular Access Controls & Full Audit Logs'
    ],
    tech: ['TypeScript', 'Python', 'PostgreSQL', 'Docker'],
    metrics: 'SOC2 Security Ready · Enterprise-Grade High Availability'
  }
];

export default function SoftwareProducts() {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0].id);

  const selectedProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];
  const IconComponent = selectedProduct.icon;

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden font-inter text-[#0D0D14]">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6C3FFC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFFF] border border-[#E8DAFF] text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-sora shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>Turnkey Software Engines</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0D14] tracking-tight">
            Ready-to-Deploy <span className="text-[#6C3FFC]">Enterprise Software</span> Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-inter leading-relaxed">
            Proven, battle-tested software systems built for rapid deployment, custom branding, seamless hardware integration, and reliable scaling.
          </p>
        </div>

        {/* Tabs Grid */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-2 border-b border-slate-200 pb-4 sm:pb-6 -mx-2 px-2 mb-8">
          {PRODUCTS.map((prod) => {
            const Icon = prod.icon;
            const isActive = activeTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-sora font-semibold text-xs whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#6C3FFC] text-white shadow-purple-glow'
                    : 'bg-[#F8F9FC] text-slate-700 hover:text-[#6C3FFC] border border-slate-200 hover:border-[#6C3FFC]/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#6C3FFC]'}`} />
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8F9FC] p-6 sm:p-10 rounded-[2.5rem] border border-[#E6E6E6] shadow-sm"
          >
            
            {/* Main Info (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3.5">
                <div className="w-14 h-14 rounded-2xl bg-[#6C3FFC] flex items-center justify-center text-white shadow-purple-glow shrink-0">
                  <IconComponent className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#6C3FFC]/10 text-[#6C3FFC] border border-[#6C3FFC]/20">
                    {selectedProduct.badge}
                  </span>
                  <h3 className="font-sora font-bold text-2xl sm:text-3xl text-[#0D0D14] mt-1">
                    {selectedProduct.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-inter">
                {selectedProduct.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-sora font-bold text-[#0D0D14] uppercase tracking-wider">
                  Core Enterprise Features:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 font-inter">
                      <Check className="w-4 h-4 text-[#6C3FFC] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
                <span className="text-xs font-mono text-slate-500 mr-2">Built with:</span>
                {selectedProduct.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white text-slate-700 border border-slate-200 shadow-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Box (5 Cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E6E6] space-y-6 shadow-sm">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-emerald-600 font-semibold uppercase flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Deployment Benchmark</span>
                </span>
                <p className="font-sora font-bold text-base sm:text-lg text-[#0D0D14]">
                  {selectedProduct.metrics}
                </p>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-inter">
                Deployment timelines average 1-3 weeks with custom branding, data migration, hardware setup, and 24/7 technical training.
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  to="/contact"
                  state={{ selectedService: `Product Demo: ${selectedProduct.title}` }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sora font-bold text-xs uppercase tracking-wider text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] shadow-purple-glow transition-all"
                >
                  <span>Request Live Software Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <a
                  href={`https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20want%20a%20live%20demo%20and%20pricing%20for%3A%20${encodeURIComponent(selectedProduct.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-sora font-semibold text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Instant WhatsApp Demo Request</span>
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
