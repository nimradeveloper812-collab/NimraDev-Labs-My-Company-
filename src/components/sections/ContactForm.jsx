import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error(error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-14 bg-white relative overflow-hidden font-inter text-[#0D0D14] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Location (5 Cols - Compact) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F8F9FC] border border-[#E6E6E6] mb-2.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#6C3FFC]" />
                <span className="text-[10px] font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
                  Let's Connect
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sora font-bold text-[#0D0D14] mb-1.5 tracking-tight">
                Book a Free Discovery Call with <span className="text-[#6C3FFC]">Our Team</span>
              </h2>
              <p className="text-slate-600 font-inter text-xs sm:text-sm leading-relaxed">
                Whether you need a new website, custom AI workflows, or turnkey software, we're ready to engineer it.
              </p>
            </div>

            {/* Direct Contact Cards (Compact) */}
            <div className="space-y-2.5">
              
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FC] border border-[#E6E6E6] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center text-[#6C3FFC] shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sora font-bold text-[10px] uppercase tracking-wider text-slate-500">
                    Official Email
                  </h4>
                  <a href="mailto:nimra.developer.8122005@gmail.com" className="text-xs font-semibold text-[#6C3FFC] hover:underline block break-all">
                    nimra.developer.8122005@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FC] border border-[#E6E6E6] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center text-emerald-600 shrink-0 shadow-xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-[10px] uppercase tracking-wider text-slate-500">
                      Phone & WhatsApp
                    </h4>
                    <a href="tel:+923249590859" className="text-xs font-semibold text-slate-800 hover:text-[#6C3FFC] block">
                      +92 324 9590859
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20want%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-sora font-semibold text-[10px] border border-emerald-200 hover:bg-emerald-100"
                >
                  Chat ↗
                </a>
              </div>

              {/* Location & Timezone */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FC] border border-[#E6E6E6] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center text-[#6C3FFC] shrink-0 shadow-xs mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sora font-bold text-[10px] uppercase tracking-wider text-slate-500">
                    Location & Support
                  </h4>
                  <p className="text-xs text-slate-700 font-medium">
                    Pakistan · PKT (UTC+5)
                  </p>
                  <p className="text-[10px] text-slate-500 font-inter mt-0.5">
                    Fri - Sun: 24 Hours · Mon - Thu: 9:00 AM - 9:00 PM PKT
                  </p>
                </div>
              </div>

            </div>

            {/* Checklist */}
            <div className="p-3 rounded-xl bg-[#F4EFFF] border border-[#E8DAFF] flex items-center justify-between text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-medium text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6C3FFC]" />
                <span>NDA signed on request</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-[11px]">
                <Clock className="w-3.5 h-3.5 text-[#6C3FFC]" />
                <span>2-4h response</span>
              </div>
            </div>

          </div>

          {/* Right Column: Compact Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F9FC] border border-[#E6E6E6] rounded-2xl p-5 sm:p-6 shadow-xs">
            {isSubmitted ? (
              <div className="min-h-[300px] flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-sora font-bold text-[#0D0D14]">
                  Inquiry Received!
                </h3>
                <p className="text-slate-600 font-inter text-xs max-w-sm">
                  Thank you! Our technical team will review your project scope and contact you shortly.
                </p>
                <a
                  href="https://wa.me/923249590859?text=Hello%20NimraDev%20Labs%2C%20I%20just%20submitted%20a%20project%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-sora font-semibold bg-emerald-600 text-white shadow-xs hover:bg-emerald-700"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ping Us on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="border-b border-slate-200/70 pb-2 mb-1">
                  <h3 className="font-sora font-bold text-base text-[#0D0D14]">
                    Tell Us About Your Project
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[11px] font-sora font-semibold text-[#0D0D14] uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC]"
                      placeholder="e.g. Ali Khan"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[11px] font-sora font-semibold text-[#0D0D14] uppercase">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC]"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[11px] font-sora font-semibold text-[#0D0D14] uppercase">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC]"
                      placeholder="+92 300 0000000"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="company" className="text-[11px] font-sora font-semibold text-[#0D0D14] uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC]"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="projectType" className="text-[11px] font-sora font-semibold text-[#0D0D14] uppercase">
                      Service *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC]"
                    >
                      <option value="" disabled>Select service...</option>
                      <option value="Web Development">Web Development (React / Next.js)</option>
                      <option value="E-Commerce">E-Commerce Storefront</option>
                      <option value="AI Solutions">AI Solutions & Automation</option>
                      <option value="Custom Software">Custom Software / ERP</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="budget" className="text-[11px] font-sora font-semibold text-[#0D0D14] uppercase">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC]"
                    >
                      <option value="" disabled>Select budget...</option>
                      <option value="Under $1,000 / PKR 250k">Under $1,000 / PKR 250k</option>
                      <option value="$1,000 - $3,000 / PKR 250k - 750k">$1,000 - $3,000 / PKR 250k - 750k</option>
                      <option value="$3,000+ / PKR 750k+">$3,000+ / PKR 750k+</option>
                      <option value="Discuss on call">Discuss on Call</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[11px] font-sora font-semibold text-[#0D0D14] uppercase">
                    Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg text-xs text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC] resize-none"
                    placeholder="Briefly describe your vision..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-sora font-bold text-xs text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] transition-all shadow-xs disabled:opacity-70 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry & Book Call'}</span>
                  {!isSubmitting && <Send className="w-3.5 h-3.5" />}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
