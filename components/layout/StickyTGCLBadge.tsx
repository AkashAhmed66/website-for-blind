'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function StickyTGCLBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside 
      aria-label="Parent Company Affiliation"
      className="fixed top-1/2 -translate-y-1/2 right-0 z-40 hidden md:block"
    >
      <div 
        className="relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <a 
          href="https://tgcl.co/" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2.5 bg-[#0b132b]/90 hover:bg-[#111c40] text-white pl-3 pr-2.5 py-3 rounded-l-2xl border-y border-l border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-300 transform hover:-translate-x-1"
        >
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
              Subsidiary of
            </span>
            <span className="text-xs font-bold text-[#7dc535] flex items-center gap-1">
              TGCL <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </span>
          </div>

          <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-inner overflow-hidden">
            <img 
              src="https://tgcl.co/img/tgcl_logo.png" 
              alt="TGCL Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback text if external image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
        </a>

        {/* Hover Tooltip Box */}
        {hovered && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-64 p-3 rounded-xl bg-[#070d1e] text-slate-200 border border-[#7dc535]/30 shadow-2xl backdrop-blur-xl animate-in fade-in-50 slide-in-from-right-2 duration-200 text-xs pointer-events-none">
            <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7dc535]"></span>
              Techno Green Carbon Ltd.
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Tech Eureka operates as the specialized software, cloud engineering, and IT research division of TGCL.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
