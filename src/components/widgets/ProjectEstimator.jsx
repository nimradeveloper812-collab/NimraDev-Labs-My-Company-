import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectTypes = [
  { id: 'web-dev', name: 'Web Development', desc: 'Business sites, SaaS, Corporate', basePrice: 1200, baseDays: 10 },
  { id: 'ecom-dev', name: 'E-Commerce Development', desc: 'Custom stores, Secure checkout', basePrice: 2500, baseDays: 18 },
  { id: 'ai-solutions', name: 'AI Solutions & Automation', desc: 'Chatbots, OpenAI, Workflows', basePrice: 3500, baseDays: 21 },
  { id: 'custom-software', name: 'Custom Software Development', desc: 'CRM, ERP, Dashboards, Platforms', basePrice: 4800, baseDays: 30 },
];

const featureAddons = [
  { id: 'cms', name: 'Admin Dashboard & Analytics', price: 600, days: 4 },
  { id: 'payment', name: 'Multi-Currency Payment Gateway', price: 400, days: 3 },
  { id: 'ai-chatbot', name: 'Enterprise AI Agent Integration', price: 800, days: 5 },
  { id: 'seo-boost', name: 'Enterprise SEO & Speed Tuning', price: 500, days: 2 },
  { id: 'security', name: 'SOC2 Security Audit & Hardening', price: 750, days: 3 },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (addon) => {
    if (selectedAddons.some((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const totalPrice = selectedType.basePrice + selectedAddons.reduce((sum, item) => sum + item.price, 0);
  const totalDays = selectedType.baseDays + selectedAddons.reduce((sum, item) => sum + item.days, 0);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#6C3FFC]/20 relative overflow-hidden shadow-purple-glow text-[#0D0D14]">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6C3FFC]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C3FFC]/10 border border-[#6C3FFC]/30 text-[#6C3FFC] text-xs font-semibold uppercase tracking-wider font-mono">
            <Calculator className="w-4 h-4" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h3 className="font-sora text-2xl sm:text-3xl font-bold text-[#0D0D14]">
            Estimate Your Project Investment
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto font-inter">
            Select your service category and additional modules for estimated budget transparency and production timelines.
          </p>
        </div>

        {/* Step 1: Select Core Service */}
        <div className="space-y-3">
          <label className="block font-sora font-semibold text-[#0D0D14] text-sm">
            1. Select Core Service:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projectTypes.map((type) => {
              const isSelected = selectedType.id === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                  className={`flex flex-col p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-[#6C3FFC]/10 border-[#6C3FFC] text-[#0D0D14] shadow-sm'
                      : 'bg-[#F8F9FC] border-slate-200 text-slate-700 hover:border-[#6C3FFC]/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="font-sora font-semibold text-sm text-[#0D0D14]">{type.name}</span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-[#6C3FFC]/15 text-[#6C3FFC]">
                      From ${type.basePrice}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-inter">{type.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Addons */}
        <div className="space-y-3">
          <label className="block font-sora font-semibold text-[#0D0D14] text-sm">
            2. Add Additional Modules & Features:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featureAddons.map((addon) => {
              const isChecked = selectedAddons.some((a) => a.id === addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon)}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all border ${
                    isChecked
                      ? 'bg-[#6C3FFC]/10 border-[#6C3FFC] text-[#0D0D14]'
                      : 'bg-[#F8F9FC] border-slate-200 text-slate-600 hover:border-[#6C3FFC]/30'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? 'bg-[#6C3FFC] text-white' : 'bg-white border border-slate-300'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-[#0D0D14] truncate">{addon.name}</p>
                    <p className="text-[11px] font-mono text-slate-500">+${addon.price} | +{addon.days} days</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Output Bar */}
        <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#6C3FFC]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-mono font-semibold">Estimated Project Investment</p>
            <div className="flex items-baseline gap-2 justify-center sm:justify-start">
              <span className="font-sora font-extrabold text-3xl text-[#0D0D14]">${totalPrice}</span>
              <span className="text-slate-500 text-xs font-mono">USD</span>
            </div>
            <p className="text-xs text-[#6C3FFC] font-medium font-inter">Estimated Timeline: ~{totalDays} business days</p>
          </div>

          <Link
            to="/contact"
            state={{ selectedService: selectedType.name, estimatedPrice: totalPrice }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-purple-gradient hover:opacity-90 shadow-purple-glow transition-all duration-300 shrink-0"
          >
            <span>Discuss Estimated Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

