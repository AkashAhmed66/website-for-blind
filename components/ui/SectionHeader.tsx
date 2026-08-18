import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`space-y-3 ${center ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider ${center ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7dc535] animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
