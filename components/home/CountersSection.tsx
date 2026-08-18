'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Handshake, Building, Briefcase, Trophy, 
  CheckCircle2, Smile, ArrowRight 
} from 'lucide-react';

interface CounterItem {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  desc: string;
}

const stats: CounterItem[] = [
  {
    icon: Handshake,
    value: 20,
    suffix: '+',
    label: 'Tech Partners',
    desc: 'Global and domestic strategic collaborations'
  },
  {
    icon: Building,
    value: 14,
    suffix: '+',
    label: 'Years of Experience',
    desc: 'Proven heritage under parent TGCL group'
  },
  {
    icon: Briefcase,
    value: 50,
    suffix: '+',
    label: 'IT Professionals',
    desc: 'Full-stack engineers & test architects'
  },
  {
    icon: Trophy,
    value: 2,
    suffix: '',
    label: 'Industry Awards',
    desc: 'Recognized for software & ERP excellence'
  },
  {
    icon: CheckCircle2,
    value: 20,
    suffix: '+',
    label: 'Projects Completed',
    desc: 'Enterprise deployments delivered live'
  },
  {
    icon: Smile,
    value: 20,
    suffix: '+',
    label: 'Happy Clients',
    desc: 'Long term recurring partnerships'
  }
];

export default function CountersSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-[#050914] relative overflow-hidden border-b border-white/10"
    >
      {/* Parallax Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b132b] via-[#050914] to-[#0b132b] opacity-80"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center justify-center border border-white/5 group hover:border-[#7dc535]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#7dc535] group-hover:bg-[#7dc535]/20 group-hover:scale-110 transition-all duration-300 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center justify-center">
                  <span className="text-gradient">
                    {inView ? stat.value : '0'}
                  </span>
                  <span className="text-[#7dc535] ml-0.5">{stat.suffix}</span>
                </div>

                <div className="text-sm font-bold text-slate-200 mt-2">
                  {stat.label}
                </div>

                <div className="text-[11px] text-slate-400 mt-1 leading-tight hidden sm:block">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-secondary-glow text-sm font-semibold hover:border-[#7dc535]/60 hover:text-white transition-all shadow-lg"
          >
            <span>See Our Project & Activity Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#7dc535]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
