import React from 'react';
import Link from 'next/link';
import { 
  Code2, Smartphone, ShieldCheck, Users, 
  ArrowRight, CheckCircle2, Sparkles, Layers 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Full-Stack Solutions',
    description: 'Our web development services offer tailored solutions for designing, creating, and optimizing high-performance websites and SaaS platforms, ensuring seamless UX and enterprise functionality.',
    icon: Code2,
    color: 'emerald',
    href: '/services/web-development',
    features: ['Custom Web Applications', 'React & Next.js Architecture', 'Cloud API Integrations', 'SEO & Speed Optimization']
  },
  {
    id: 'app-development',
    title: 'App Development',
    category: 'Mobile Innovation',
    description: 'Our app development services craft custom mobile applications with intuitive interfaces, top-notch native performance, and feature integration that elevates continuous user engagement.',
    icon: Smartphone,
    color: 'sky',
    href: '/services/app-development',
    features: ['iOS & Android Native Apps', 'Cross-Platform Flutter/React Native', 'Secure Offline Sync', 'Enterprise App Store Deploy']
  },
  {
    id: 'test-service',
    title: 'Test Service & QA',
    category: 'Quality Engineering',
    description: 'Our SQA test services guarantee flawless software through rigorous automated and manual test suites, verifying functionality, load tolerance, and airtight security before release.',
    icon: ShieldCheck,
    color: 'purple',
    href: '/services/test-service',
    features: ['Selenium & Appium Automation', 'End-to-End JMeter Load Testing', 'CI/CD Pipeline Integration', 'Security & Penetration QA']
  },
  {
    id: 'tech-resource-sharing',
    title: 'Tech Resource Sharing',
    category: 'Staff Augmentation',
    description: 'Tech resource sharing involves deploying elite pre-vetted developers, SQA engineers, and cloud architects into your teams, eliminating hiring friction and accelerating delivery.',
    icon: Users,
    color: 'amber',
    href: '/services/tech-resource-sharing',
    features: ['Pre-vetted Senior Developers', 'Flexible Full-time/Part-time', 'Dedicated SQA Engineers', 'Seamless Workflow Integration']
  }
];

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-[#070d1e] relative overflow-hidden border-b border-white/10">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7dc535]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="What We Deliver"
          title="Engineered Services We Provide"
          subtitle="Empowering modern businesses with custom software development, mobile innovation, automated quality assurance, and elite technical talent."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                className="group relative rounded-2xl glass-panel glass-panel-hover p-7 flex flex-col justify-between border border-white/10 hover:border-[#7dc535]/50 transition-all duration-300"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7dc535] group-hover:bg-[#7dc535] group-hover:text-[#050914] group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {srv.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7dc535] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-4">
                    {srv.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-8 border-t border-white/5 pt-4">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7dc535] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Read More Link */}
                <Link 
                  href={srv.href}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#7dc535] text-slate-200 hover:text-black font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 group-hover:border-[#7dc535] transition-all"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Bar */}
        <div className="mt-16 p-8 rounded-2xl glass-panel-glow border border-[#7dc535]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#7dc535]/20 text-[#7dc535]">
              <Layers className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need a Customized Architecture for Your Industry?</h4>
              <p className="text-sm text-slate-300">We analyze your business workflow and create custom ERPs, portals, or automation suites.</p>
            </div>
          </div>
          <Link 
            href="/contact"
            className="px-6 py-3 rounded-xl btn-brand text-sm font-bold shrink-0 whitespace-nowrap shadow-lg shadow-[#7dc535]/20"
          >
            Request Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
