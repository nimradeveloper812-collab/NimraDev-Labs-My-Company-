import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { HiOutlineCalculator } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const projectTypes = [
  { id: 'business-site', name: 'Business Website', basePrice: 450, baseDays: 7 },
  { id: 'custom-webapp', name: 'Custom SaaS / Web App', basePrice: 1200, baseDays: 18 },
  { id: 'ai-automation', name: 'AI Solution & Agents', basePrice: 1500, baseDays: 20 },
  { id: 'redesign', name: 'Website Redesign', basePrice: 550, baseDays: 10 },
];

const featureAddons = [
  { id: 'cms', name: 'Admin Dashboard / CMS', price: 300, days: 4 },
  { id: 'payment', name: 'Payment Gateway Integration', price: 250, days: 3 },
  { id: 'ai-chatbot', name: 'Embedded AI Chatbot', price: 400, days: 5 },
  { id: 'seo-boost', name: 'Enterprise SEO & Speed Optimization', price: 200, days: 2 },
  { id: 'multi-lang', name: 'Multi-Language Support (Urdu/English)', price: 150, days: 2 },
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
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider">
            <HiOutlineCalculator className="w-4 h-4" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Estimate Your Project Scope & Investment
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Get instant clarity on estimated investment and delivery timeline for your software build with NimraDev Labs.
          </p>
        </div>

        {/* Step 1: Select Project Type */}
        <div className="space-y-3">
          <label className="block font-heading font-semibold text-white text-sm">
            1. Select Primary Service Type:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projectTypes.map((type) => {
              const isSelected = selectedType.id === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                  className={`flex items-center justify-between p-4 rounded-xl text-left transition-all border ${
                    isSelected
                      ? 'bg-brand-600/20 border-brand-500 text-white shadow-glow-sm'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="font-medium text-sm">{type.name}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 text-brand-300">
                    From ${type.basePrice}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Addons */}
        <div className="space-y-3">
          <label className="block font-heading font-semibold text-white text-sm">
            2. Select Add-on Capabilities:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featureAddons.map((addon) => {
              const isChecked = selectedAddons.some((a) => a.id === addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl text-left transition-all border ${
                    isChecked
                      ? 'bg-brand-600/20 border-brand-500/80 text-white'
                      : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? 'bg-brand-500 text-white' : 'bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {isChecked && <FiCheck className="w-3.5 h-3.5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-200 truncate">{addon.name}</p>
                    <p className="text-[11px] text-slate-400">+${addon.price} | +{addon.days} days</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Output Bar */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-navy-900 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Estimated Investment</p>
            <div className="flex items-baseline gap-2 justify-center sm:justify-start">
              <span className="font-heading font-extrabold text-3xl text-white">${totalPrice}</span>
              <span className="text-slate-400 text-xs">USD approx</span>
            </div>
            <p className="text-xs text-brand-300 font-medium">Estimated Delivery: ~{totalDays} business days</p>
          </div>

          <Link
            to="/contact"
            state={{ selectedService: selectedType.name, estimatedPrice: totalPrice }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 shrink-0"
          >
            <span>Lock in Scope & Contact</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
