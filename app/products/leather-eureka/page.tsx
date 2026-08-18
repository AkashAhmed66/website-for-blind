import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Factory } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';

export const metadata = {
  title: "Leather Eureka ERP - Tech Eureka",
  description: "Specialized ERP for leather manufacturing: procurement, production scheduling, inventory, sales, payroll, and MIS reporting."
};

const benefits = {
  'Procurement / Purchase': [
    'Yearly leather purchase target define',
    'Purchase cost calculation',
    'Purchase requisition generation',
    'Authentic approval management',
    'Billing and payment management',
    'Supplier and buyer wise ledger'
  ],
  'Production Management': [
    'Production schedule management',
    'Production recipe management',
    'Requisition management for production',
    'Machine wise chemical consumption',
    'Production status monitoring'
  ],
  'Inventory Management': [
    'Multiple inventories for leather and chemicals',
    'Store to store goods transfer facility',
    'Stock adjustment facility',
    'Supplier, buyer, store wise stock status'
  ],
  'Sales / Export Management': [
    'Sales order management',
    'Export LC management',
    'Costing of exported goods'
  ],
  'Chemical Loan Management': [
    'Loan request and approval',
    'Partial loan return/receive facilities',
    'Dollar to dollar loan adjustment facilities',
    'Loan retain off management'
  ],
  'Pay Roll Management': [
    'User define policy setup facilities',
    'Category and structure wise salary setup',
    'Employee loan management',
    'Salary sheet, bank/cash statement',
    'Employee wise salary ledger',
    'Salary probation vouchers'
  ]
};

const modules = ['Master Data', 'Material Management System (MMS)', 'Quality Control System (QCS)', 'Finished Goods Store (FGS)', 'Sales and Distribution'];

const reports = ['Daily and periodical standard reports', 'Summarized reports', 'Productivity reports', 'Daily stock, daily Rejections', 'Stock valuation Analysis Report', 'Management Review Meeting Reports'];

export default function LeatherEurekaPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Leather Eureka ERP"
        subtitle="Comprehensive ERP purpose-built for leather manufacturing — streamlining procurement, production, inventory, exports, and payroll."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Leather Eureka' }
        ]}
        badge="Leather Industry ERP"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-5.jpg" alt="Leather Eureka ERP" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" />
                <span>Leather Industry Specific ERP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                LeatherEUREKA — ERP for Leather Business
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Leather manufacturing is a complex industry with multiple variables to consider. Traditional manual or semi-automated systems often fall short in effectively processing the crucial information needed for cost-effective decision making. To address this challenge, Tech Eureka has collaborated with experts in the leather manufacturing process to create LeatherEUREKA ERP.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                With this ERP solution, leather manufacturers can easily analyze their cost information and gain control over their costs, resulting in increased profitability. The comprehensive, user-friendly system is designed specifically to meet the unique needs of the leather industry and streamline the decision-making process.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Benefits by area */}
          <SectionHeader badge="Core Benefits" title="Module Benefits & Features" subtitle="Deep functional coverage across all leather manufacturing operational areas." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(benefits).map(([area, items]) => (
              <div key={area} className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/40 transition-all">
                <h3 className="text-base font-bold text-[#7dc535] mb-4">{area}</h3>
                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7dc535] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Modules & Reports */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl glass-panel border border-white/10">
              <h3 className="text-xl font-bold text-white mb-5">System Modules</h3>
              <ul className="space-y-3">
                {modules.map((mod, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#7dc535] shrink-0" />
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl glass-panel border border-white/10">
              <h3 className="text-xl font-bold text-white mb-5">MIS Reports</h3>
              <ul className="space-y-3">
                {reports.map((rep, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#7dc535] shrink-0" />
                    <span>{rep}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-brand text-base font-bold shadow-xl">
              Schedule a Leather Eureka Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
