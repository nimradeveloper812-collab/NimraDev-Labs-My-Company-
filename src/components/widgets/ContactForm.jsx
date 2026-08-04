import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle2, User, Mail, Building, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const location = useLocation();
  const preselected = location.state?.selectedService || 'Web Development';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselected,
    budget: '$5,000 - $15,000',
    message: location.state?.estimatedPrice ? `Estimated Scope Investment: ~$${location.state.estimatedPrice}` : '',
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
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#6C3FFC]/20 relative shadow-purple-glow text-[#0D0D14]">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-sora text-2xl font-bold text-[#0D0D14]">Project Brief Transmitted!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto font-inter">
            Thank you for connecting with NimraDev Labs. Our Senior Engineering Architect will review your technical specifications and respond within 12 business hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', company: '', service: 'Web Development', budget: '$5,000 - $15,000', message: '' });
            }}
            className="mt-4 px-6 py-2.5 rounded-xl bg-[#F8F9FC] border border-slate-200 text-slate-700 text-xs font-mono font-semibold hover:bg-slate-100 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 font-inter">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                Full Name <span className="text-[#6C3FFC]">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  required
                  placeholder="Alexander Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-[#F8F9FC] border border-slate-200 rounded-xl text-[#0D0D14] placeholder-slate-400 text-sm focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                Work Email <span className="text-[#6C3FFC]">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="email"
                  required
                  placeholder="alexander@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-[#F8F9FC] border border-slate-200 rounded-xl text-[#0D0D14] placeholder-slate-400 text-sm focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
                />
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Company */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                Company / Organization
              </label>
              <div className="relative">
                <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="AeroTech Global Corp."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-[#F8F9FC] border border-slate-200 rounded-xl text-[#0D0D14] placeholder-slate-400 text-sm focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
                />
              </div>
            </div>

            {/* Service Selection - 4 Core Services */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                Core Service Category
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-[#F8F9FC] border border-slate-200 rounded-xl text-[#0D0D14] text-sm focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
              >
                <option value="Web Development">Web Development</option>
                <option value="E-Commerce Development">E-Commerce Development</option>
                <option value="AI Solutions & Automation">AI Solutions & Automation</option>
                <option value="Custom Software Development">Custom Software Development</option>
              </select>
            </div>

          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
              Project Architecture & Requirements <span className="text-[#6C3FFC]">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Detail your goals, tech stack preferences, target timeline, or integrations..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-4 bg-[#F8F9FC] border border-slate-200 rounded-xl text-[#0D0D14] placeholder-slate-400 text-sm focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-sora font-semibold text-sm text-white bg-purple-gradient hover:opacity-90 shadow-purple-glow transition-all duration-300 disabled:opacity-50"
          >
            {loading ? (
              <span>Transmitting Architecture Brief...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Technical Brief</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

