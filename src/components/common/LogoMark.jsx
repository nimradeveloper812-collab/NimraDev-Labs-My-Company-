import React from 'react';

export default function LogoMark({ className = "w-10 h-10", size = 40 }) {
  return (
    <div className={`relative rounded-2xl bg-[#EFE9FF] border border-[#D8C7FF] p-2 flex items-center justify-center shadow-sm shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="purpleNLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B4DFF" />
            <stop offset="100%" stopColor="#6C3FFC" />
          </linearGradient>
          <linearGradient id="purpleNDiag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6C3FFC" />
          </linearGradient>
          <linearGradient id="purpleNRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C3FFC" />
            <stop offset="100%" stopColor="#582BE8" />
          </linearGradient>
        </defs>

        {/* N Lettermark - Left Pillar */}
        <rect x="20" y="20" width="14" height="60" rx="3" fill="url(#purpleNLeft)" />
        
        {/* N Lettermark - Right Pillar */}
        <rect x="66" y="20" width="14" height="60" rx="3" fill="url(#purpleNRight)" />
        
        {/* N Lettermark - Dynamic Diagonal Stroke */}
        <path
          d="M23 20 H34 L77 76 H66 Z"
          fill="url(#purpleNDiag)"
        />
      </svg>
    </div>
  );
}
