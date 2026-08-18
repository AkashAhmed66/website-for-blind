import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Layers, Lock, Zap, Scale, Puzzle } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import ServicesShowcase from '../../../components/home/ServicesShowcase';

export const metadata = {
  title: "Customized Software - Tech Eureka",
  description: "Bespoke enterprise software solutions tailored to your unique business workflow — scalable, secure, and seamlessly integrated."
};

const keyFeatures = [
  { icon: Layers, title: 'Tailored to Your Requirements', desc: 'We analyze your unique business workflow and engineer purpose-built modules, eliminating every friction point in your operational pipeline.' },
  { icon: Zap, title: 'User-Friendly Interface', desc: 'Intuitive UI/UX designed for easy adoption, minimal training overhead, and maximum daily productivity by your end-users.' },
  { icon: Lock, title: 'High-Level Security', desc: 'Enterprise-grade role-based access control, encrypted data layers, audit trails, and penetration-tested security hardening.' },
  { icon: Puzzle, title: 'Seamless System Integration', desc: 'Native integrations with your existing ERP modules, third-party APIs, cloud services, and legacy data sources.' },
  { icon: Scale, title: 'Scalable Architecture', desc: 'Engineered on cloud-ready microservices and modular monolith patterns that scale linearly with your business growth.' },
  { icon: Sparkles, title: 'Ongoing Support & Evolution', desc: '24/7 dedicated technical support, proactive maintenance cycles, and continuous feature enhancements as your needs evolve.' },
];

export default function CustomizedSoftwarePage() {
  return (
    <div>
      <BreadcrumbHero
        title="Customized Software"
        subtitle="Purpose-built enterprise software solutions engineered precisely to your unique business demands — scalable, secure, and integrated."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Customized Software' }
        ]}
        badge="Bespoke Development"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-6.jpg" alt="Customized Software Development" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Purpose-Built for Your Business</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Software That Fits Like a Glove
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                We provide Customized Software solutions to meet the unique demands of your industry. Our software is user-friendly, efficient, and scalable, allowing you to optimize your business processes, increase productivity, and ultimately drive growth.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                We understand that every business is different, and that&apos;s why we work closely with you to understand your needs and develop a solution that fits like a glove. Our Customized Software solutions are designed to provide you with the competitive edge you need to succeed in today&apos;s fast-paced business environment.
              </p>
              <div className="p-4 rounded-xl bg-[#7dc535]/10 border border-[#7dc535]/30 text-sm text-[#7dc535] font-medium">
                We don&apos;t just build software — we engineer operational transformation that compounds value over time.
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                  Discuss Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7dc535]"></span>
                <span>What We Guarantee</span>
              </span>
              <h2 className="text-3xl font-extrabold text-white">Key Features of Our Customized Software</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="p-7 rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/40 flex items-start gap-5 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7dc535] group-hover:bg-[#7dc535] group-hover:text-slate-950 shrink-0 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#7dc535] transition-colors">{feat.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 p-10 rounded-3xl glass-panel-glow border border-[#7dc535]/30 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Ready to Build Your Custom Enterprise Solution?</h3>
            <p className="text-slate-300 text-sm mb-8 max-w-2xl mx-auto">
              Start with a free discovery consultation. We&apos;ll analyze your current workflow, identify automation opportunities, and present a proposal within 48 hours.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl btn-brand text-base font-bold shadow-xl">
              Get a Free Discovery Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

      <ServicesShowcase />
    </div>
  );
}
