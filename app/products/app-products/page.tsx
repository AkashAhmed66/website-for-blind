import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Smartphone, CheckCircle2 } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';

export const metadata = {
  title: "App Products - Tech Eureka",
  description: "Enterprise Android & iOS apps: Sales Automation (SAS), Sales Distribution Control (SDC), eDCL, and eSOMS."
};

const appProducts = [
  {
    title: 'Sales Automation System (SAS)',
    desc: 'Simple, user-friendly business process automation with point-and-click interface, flexible approval flows, MIS reporting, and factory-to-depot distribution management.',
    image: '/images/portfolio/ISP-1.PNG',
    features: [
      'Sales Order Management (Android)',
      'Web Service (DotNet) backend',
      'SMS Management Service',
      'Distribution/Depot Management System (DMS)',
      'Management Information System (MIS)',
      'Bonus & Trade Program Declaration',
      'Route wise sales & order reports',
      'Target vs Achievement Statement'
    ]
  },
  {
    title: 'Electronic Doctor Call Log (eDCL)',
    desc: 'Digital medical record system for pharmaceutical sales reps — Tour Plan, Doctor Visit Register, Product/Gift-wise Doctor Selection, Work Plans, and Bill Statements.',
    image: '/images/portfolio/pharma-2.png',
    features: [
      'Secure user registration and authentication',
      'Rich UI and easy navigation',
      'Sync Doctor, Sample product, Nature of DA',
      'Prepare monthly Tour Plan and sync to server',
      'Create Doctor Visit Register based on Tour Plan',
      'Product Wise Doctor Selection',
      'Gift Wise Doctor Selection',
      'Sample Statement with report'
    ]
  },
  {
    title: 'Electronic Sales Order Management System (eSOMS)',
    desc: 'Android & web hybrid order management system with 24/7 real-time order processing, offline/online support, SMS-based order sending, and order draft/edit/resend.',
    image: '/images/portfolio/ISP-2.PNG',
    features: [
      'Secure user registration and authentication',
      'Rich UI and easy navigation',
      'Sync customer & product data',
      'Order processing via online & offline',
      'Order sending using SMS server',
      'Order resending capability',
      'Order draft, edit & send',
      'Place orders from anywhere, anytime'
    ]
  }
];

export default function AppProductsPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Mobile App Products"
        subtitle="Enterprise-grade Android & iOS mobile applications for field sales, distribution, medical rep visits, and order management."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'App Products' }
        ]}
        badge="Enterprise Mobile Apps"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <SectionHeader
            badge="Mobile Suite"
            title="Field-Force Mobile Applications"
            subtitle="Empowering your on-field sales teams, medical reps, and distribution networks with real-time mobile intelligence."
          />

          <div className="mt-16 space-y-16">
            {appProducts.map((app, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#7dc535]/30 transition-all`}>
                <div className={`lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image src={app.image} alt={app.title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
                </div>

                <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Android & Web</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{app.title}</h2>
                  <p className="text-sm text-slate-300 leading-relaxed">{app.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {app.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7dc535] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                      Request Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
