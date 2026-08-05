import React from 'react';
import { motion } from 'framer-motion';
import LogoMark from '../common/LogoMark';

export default function BrandBanner({ className = "" }) {
  return (
    <div className={`w-full rounded-2xl bg-white border-y-4 border-y-[#6C3FFC] border-x border-x-slate-200 shadow-purple-glow overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center p-6 sm:p-10 gap-8 bg-[#F8F9FC]/60">
        
        {/* Left Branding Block (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          
          {/* Large Stylized N Logo */}
          <div className="shrink-0 w-24 h-28 sm:w-28 sm:h-32 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="bannerNLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7B4DFF" />
                  <stop offset="100%" stopColor="#6C3FFC" />
                </linearGradient>
                <linearGradient id="bannerNDiag" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#6C3FFC" />
                </linearGradient>
                <linearGradient id="bannerNRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6C3FFC" />
                  <stop offset="100%" stopColor="#582BE8" />
                </linearGradient>
              </defs>

              <rect x="18" y="10" width="16" height="80" rx="3" fill="url(#bannerNLeft)" />
              <rect x="66" y="10" width="16" height="80" rx="3" fill="url(#bannerNRight)" />
              <path d="M22 10 H34 L78 88 H66 Z" fill="url(#bannerNDiag)" />
            </svg>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden sm:block w-px h-28 bg-slate-200 shrink-0 self-center" />

          {/* Title & Tagline */}
          <div className="space-y-2 flex-1">
            <div className="inline-block relative">
              <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0D0D14] tracking-tight">
                NimraDev Labs
              </h2>
              {/* Soft purple underline accent */}
              <div className="w-full h-1 bg-[#D8C7FF] rounded-full mt-1" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-inter max-w-md">
              We build modern websites, AI solutions, and custom software that help businesses scale with confidence.
            </p>
          </div>

        </div>

        {/* Center Vertical Divider (Desktop) */}
        <div className="hidden lg:block lg:col-span-1 justify-self-center w-px h-32 bg-slate-200" />

        {/* Right Capability Pills Block (Cols 8-12) */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-3 items-center lg:items-start">
          <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
            <span className="px-5 py-2 rounded-full text-xs font-sora font-semibold text-[#6C3FFC] bg-[#F3E8FF] border border-[#6C3FFC]/30 shadow-sm">
              Web Development
            </span>
            <span className="px-5 py-2 rounded-full text-xs font-sora font-semibold text-[#6C3FFC] bg-[#F3E8FF] border border-[#6C3FFC]/30 shadow-sm">
              AI Solutions
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
            <span className="px-5 py-2 rounded-full text-xs font-sora font-semibold text-[#6C3FFC] bg-[#F3E8FF] border border-[#6C3FFC]/30 shadow-sm">
              E-Commerce
            </span>
            <span className="px-5 py-2 rounded-full text-xs font-sora font-semibold text-[#6C3FFC] bg-[#F3E8FF] border border-[#6C3FFC]/30 shadow-sm">
              Custom Software
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
