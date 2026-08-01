import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiSend, FiCheckCircle, FiUser, FiMail, FiMessageSquare, FiBriefcase } from 'react-icons/fi';

export default function ContactForm() {
  const location = useLocation();
  const preselected = location.state?.selectedService || 'Business Website Development';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselected,
    budget: '$1,000 - $3,000',
    message: location.state?.estimatedPrice ? `Estimated Project Investment: ~$${location.state.estimatedPrice}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 relative">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-glow-sm">
            <FiCheckCircle className="w-8 h-8" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-white">Inquiry Received!</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Thank you for reaching out to NimraDev Labs. Our engineering leads will review your inquiry and respond within 12 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', company: '', service: 'Business Website Development', budget: '$1,000 - $3,000', message: '' });
            }}
            className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Full Name <span className="text-brand-400">*</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                <input
                  type="text"
                  required
                  placeholder="Ali Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Work Email <span className="text-brand-400">*</span>
              </label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                <input
                  type="email"
                  required
                  placeholder="ali@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Company */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Company / Organization
              </label>
              <div className="relative">
                <FiBriefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="TechCorp Ltd."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Required Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              >
                <option value="Business Website Development">Business Website Development</option>
                <option value="Custom Web Applications">Custom Web Applications (SaaS)</option>
                <option value="AI Automation & AI Integration">AI Automation & AI Integration</option>
                <option value="Website Redesign">Website Redesign</option>
                <option value="Website Maintenance">Website Maintenance</option>
                <option value="Performance Optimization">Performance Optimization</option>
              </select>
            </div>

          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Project Details & Goals <span className="text-brand-400">*</span>
            </label>
            <div className="relative">
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project, timeline, target audience, or specific requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-sky-500 hover:from-brand-500 hover:to-sky-400 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 disabled:opacity-50"
          >
            {loading ? (
              <span>Transmitting Inquiry...</span>
            ) : (
              <>
                <FiSend className="w-4 h-4" />
                <span>Submit Technical Brief</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
