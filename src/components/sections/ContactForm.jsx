import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error(error);
      setErrorMsg('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6C3FFC]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#F8F9FC] border border-slate-200 mb-6">
              <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
                Contact Us
              </span>
            </div>
            <h2 className="text-fluid-h2 font-sora font-bold text-[#0D0D14] mb-6">
              Let's Build Something <span className="brand-text-gradient">Better.</span>
            </h2>
            <p className="text-slate-600 font-inter text-lg mb-10 max-w-md">
              Whether you need a modern website, custom software, or an AI solution, we are ready to help you scale with confidence.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-sora font-semibold text-[#0D0D14] mb-1">Email</h4>
                <a href="mailto:nimra.developer.8122005@gmail.com" className="text-slate-600 font-inter hover:text-[#6C3FFC]">
                  nimra.developer.8122005@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-sora font-semibold text-[#0D0D14] mb-1">Phone / WhatsApp</h4>
                <a href="tel:+923249590859" className="text-slate-600 font-inter hover:text-[#6C3FFC]">
                  +92 324 9590859
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#F8F9FC] border border-slate-200 rounded-[2.5rem] p-8 sm:p-10 shadow-glass-light">
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-sora font-bold text-[#0D0D14] mb-2">Message Sent!</h3>
                <p className="text-slate-600 font-inter">We'll get back to you shortly to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-sora font-semibold text-[#0D0D14] uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-sora font-semibold text-[#0D0D14] uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-sora font-semibold text-[#0D0D14] uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-sora font-semibold text-[#0D0D14] uppercase tracking-wide">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-xs font-sora font-semibold text-[#0D0D14] uppercase tracking-wide">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors"
                  >
                    <option value="" disabled>Select a project type...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="E-Commerce">E-Commerce Development</option>
                    <option value="AI Solutions">AI Solutions & Automation</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-sora font-semibold text-[#0D0D14] uppercase tracking-wide">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0D0D14] focus:outline-none focus:border-[#6C3FFC] focus:ring-1 focus:ring-[#6C3FFC] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-sora font-bold text-sm text-white bg-[#6C3FFC] hover:bg-[#8B5CF6] transition-all duration-300 shadow-purple-glow disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Start a Project'}</span>
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
                {errorMsg && (
                  <p className="text-red-500 text-sm font-inter text-center mt-4">{errorMsg}</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
