import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  subtitle?: string;
  badge?: string;
  bgImage?: string;
}

export default function BreadcrumbHero({
  title,
  breadcrumbs,
  subtitle,
  badge,
  bgImage = '/images/banner/banner1.jpg',
}: BreadcrumbHeroProps) {
  return (
    <div className="relative py-20 lg:py-24 bg-[#050914] overflow-hidden border-b border-white/10">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage} 
          alt={title} 
          fill 
          priority 
          className="object-cover opacity-25" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/85 to-[#070d1e]/90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7dc535]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7dc535]"></span>
            <span>{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="mt-6 flex justify-center">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <li>
              <Link href="/" className="hover:text-[#7dc535] flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#7dc535] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
