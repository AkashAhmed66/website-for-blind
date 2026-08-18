import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Monitor, CheckCircle2, Database, ShoppingCart, Users, FileText, BookOpen, Building2 } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';

export const metadata = {
  title: "Web Products - Tech Eureka",
  description: "Enterprise web platforms: eCommerce, CRM, POS, ISP Billing, Tender Management, ELS, EDMS, HBMS."
};

const webProducts = [
  {
    title: 'Pharma Eureka ERP',
    icon: Database,
    desc: 'GMP & FDA compliant pharmaceutical ERP covering production, procurement, QA/QC, HRMS, payroll and MIS.',
    image: '/images/portfolio/pharma-1.jpg',
    href: '/products/pharma-eureka',
    tags: ['Pharmaceutical', 'GMP', 'FDA']
  },
  {
    title: 'Con Eureka ERP',
    icon: Database,
    desc: 'BSTI compliant ERP for Chemical & Cosmetics with GMP traceability, MRP, procurement, and financial management.',
    image: '/images/pages/about-4.jpg',
    href: '/products/con-eureka',
    tags: ['Chemical', 'BSTI', 'GMP']
  },
  {
    title: 'Leather Eureka ERP',
    icon: Building2,
    desc: 'Specialized leather manufacturing ERP with batch tracking, production scheduling, inventory and export management.',
    image: '/images/pages/about-5.jpg',
    href: '/products/leather-eureka',
    tags: ['Leather', 'Manufacturing', 'Export']
  },
  {
    title: 'Human Resource Management System',
    icon: Users,
    desc: 'Full HRMS with HR management, payroll engine, biometric attendance, training management and rich reporting.',
    image: '/images/portfolio/hrm-dashboard.png',
    href: '/products/human-resource-management-system',
    tags: ['HRMS', 'Payroll', 'Attendance']
  },
  {
    title: 'Sales & Distribution Control System (SDC)',
    icon: ShoppingCart,
    desc: 'Centralized sales and distribution management with route-wise distribution, stock requisition, and real-time visibility.',
    image: '/images/portfolio/pos-dashboard-2.png',
    href: '/products/web-products',
    tags: ['Sales', 'Distribution', 'Route']
  },
];

export default function WebProductsPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Web Product Suite"
        subtitle="Enterprise-grade web platforms and cloud ERP solutions for diverse industry verticals — ready to deploy and scale."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Web Products' }
        ]}
        badge="Cloud-Ready SaaS Platforms"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <SectionHeader
            badge="Our Web Platforms"
            title="Enterprise Web Software Products"
            subtitle="Industry-specific web ERP and management platforms built with ASP.NET Core, React, and SQL Server — fully customizable."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProducts.map((prod, idx) => {
              const Icon = prod.icon;
              return (
                <div key={idx} className="group rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/50 transition-all overflow-hidden flex flex-col shadow-lg">
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <Image src={prod.image} alt={prod.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#7dc535]/15 text-[#7dc535]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex gap-1">
                        {prod.tags.map((tag, tidx) => (
                          <span key={tidx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#7dc535] transition-colors mb-2">{prod.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-5 flex-grow">{prod.desc}</p>
                    <Link href={prod.href} className="w-full py-2.5 rounded-xl btn-brand text-xs font-bold flex items-center justify-center gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 rounded-3xl glass-panel-glow border border-[#7dc535]/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Web Platform?</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              We can build an enterprise web solution fully tailored to your organization&apos;s unique workflow and compliance requirements.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
              Request Custom Web Solution <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
