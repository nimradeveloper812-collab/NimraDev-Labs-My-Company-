import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#F8F9FC] border border-slate-200 mb-6">
            <span className="text-xs font-sora font-semibold text-[#6C3FFC] tracking-widest uppercase">
              Client Feedback
            </span>
          </div>
          <h2 className="text-fluid-h2 font-sora font-bold text-[#0D0D14] mb-6">
            Trusted by Businesses
          </h2>
          <p className="text-slate-600 font-inter text-lg">
            We are actively building our portfolio and client relationships.
            Client success stories and testimonials will be updated here soon.
          </p>
        </div>
      </div>
    </section>
  );
}
