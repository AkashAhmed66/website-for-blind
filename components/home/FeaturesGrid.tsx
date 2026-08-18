import React from 'react';
import { 
  Heart, Code, Film, Newspaper, Monitor, 
  Feather, RefreshCw, Diamond, Headphones 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const features = [
  {
    icon: Heart,
    title: 'Clean & Modern Design',
    description: 'Minimalist, sleek, contemporary, engaging design customized to resonate with your target demographic.'
  },
  {
    icon: Code,
    title: 'Useful Shortcodes & Modules',
    description: 'Efficient, intuitive modular building blocks enhancing flexibility and accelerating development.'
  },
  {
    icon: Film,
    title: 'Parallax & Visual Depth',
    description: 'Engaging, interactive multi-layer scrolling and dynamic animations for captivating user journeys.'
  },
  {
    icon: Newspaper,
    title: 'Multipurpose Concept',
    description: 'Versatile, highly adaptable architectural patterns suitable for diverse industries and scales.'
  },
  {
    icon: Monitor,
    title: 'Responsive Layout',
    description: 'Fluid layout structures adapting seamlessly from high-DPI desktop screens to compact mobile devices.'
  },
  {
    icon: Feather,
    title: 'Lightweight Performance',
    description: 'Optimized assets and streamlined rendering pipelines ensuring ultra-fast load times and low memory use.'
  },
  {
    icon: RefreshCw,
    title: 'Free Lifetime Updates',
    description: 'Continuous framework upgrades, security patches, and functional enhancements at no additional cost.'
  },
  {
    icon: Diamond,
    title: 'Endless Possibilities',
    description: 'Infinite potential for custom ERP workflows, cloud plugins, API endpoints, and business integrations.'
  },
  {
    icon: Headphones,
    title: '24/7 Live Support',
    description: 'Constant, real-time technical assistance and SLA guarantees for your business peace of mind.'
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-[#050914] relative overflow-hidden border-b border-white/10">
      {/* Glow mesh */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#7dc535]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Platform Strengths"
          title="Engineered for Peak Performance"
          subtitle="Every project delivered by Tech Eureka embodies uncompromising standards in performance, design elegance, and high availability."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl glass-panel glass-panel-hover border border-white/5 hover:border-[#7dc535]/40 flex items-start gap-5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7dc535] group-hover:bg-[#7dc535] group-hover:text-slate-950 shrink-0 transition-all duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#7dc535] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
