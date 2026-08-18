import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, FlaskConical, Sparkles } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';

export const metadata = {
  title: "Pharma Eureka ERP - Tech Eureka",
  description: "GMP and FDA compliant Pharmaceutical ERP covering Production, Procurement, QA/QC, HRMS, MIS and more."
};

const coreModules = [
  {
    title: 'Production Management',
    desc: 'Production module in PharmaEUREKA-ERP is the most effective way to identify and track every single raw material from receipt through every production stage.'
  },
  {
    title: 'Procurement Management',
    desc: 'Manages the procurement system with elimination of duplication of work, greater control over the process, faster decision-making, and only approved vendors used in the system.'
  },
  {
    title: 'Human Resource Management',
    desc: 'HRMS is an advanced generic application designed to help pharmaceutical companies easily manage difficult tasks of human resource record keeping and reporting.'
  },
  {
    title: 'Accounting System',
    desc: 'After entering accounts vouchers, the software provides all financial information to the organization, enabling efficient business operation with right-time, right information.'
  },
  {
    title: 'Payroll Management',
    desc: 'Ensures payroll is turned around quickly and accurately every time for all employees. Fully compliant with all legislation with experienced, qualified payroll professionals.'
  },
  {
    title: 'Dashboard & MIS',
    desc: 'Real-time single-page dashboard showing graphical key performance indicators (KPIs) enabling instantaneous and informed decisions. MIS generates cross-module reports.'
  }
];

const otherModules = [
  { title: 'Raw Material Inventory (RMIS)', desc: 'Functional automation for RM warehouse with QA and Production department dependencies.' },
  { title: 'Packaging Material Inventory (PMIS)', desc: 'Automation for PM warehouse with QA and Production department dependencies.' },
  { title: 'Finished Goods Inventory (FGIS)', desc: 'Business process automation for the Finished Goods warehouse.' },
  { title: 'Quality Management (QM)', desc: 'Covers QC operations: Sampling, Testing, GRN Release, Batch Release with varied reporting.' },
  { title: 'Raw Material QC (RMQCS)', desc: 'Assists QA for RM testing, test requests, test results linked with RM Warehouse.' },
  { title: 'Packaging Material QC (PMQCS)', desc: 'Assists QA for PM testing, test requests, test results linked with PM Warehouse.' },
  { title: 'Production (IPC) QC', desc: 'WIP Quality Control assists QA for in-process testing linked with production.' },
  { title: 'Finished Goods QC (FGQCS)', desc: 'FG testing and handling of test requests, results linked with FG Warehouse.' },
];

export default function PharmaEurekaPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Pharma Eureka ERP"
        subtitle="GMP, FDA & 21 CFR Part II Compliant Pharmaceutical ERP — Your end-to-end solution for batch process manufacturing excellence."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Pharma Eureka' }
        ]}
        badge="Pharmaceutical ERP"
        bgImage="/images/portfolio/pharma-1.jpg"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-3.jpg" alt="Pharma Eureka ERP" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GMP · FDA · 21 CFR Part II</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                PharmaEUREKA — Compliant Pharmaceutical ERP
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Tech Eureka has introduced PharmaEUREKA, a compliant Pharmaceutical ERP solution designed specifically for the pharmaceutical industry. The solution has been designed with GMP and FDA compliance as a top priority, ensuring that it meets all statutory regulations. With the recent launch of 21 CFR Part II, many companies are still struggling with its implementation. PharmaEUREKA-ERP, however, is user-friendly and quick to implement, making it the ideal solution for companies looking to manage their business more effectively.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                The pharmaceutical industry is categorized as batch process manufacturing, and PharmaEUREKA-ERP makes forecasting simple, providing a powerful end-to-end business integration solution. Whether you&apos;re looking to streamline your processes or ensure regulatory compliance, PharmaEUREKA-ERP is the solution you need to manage your pharmaceutical business with confidence.
              </p>
              <div className="p-4 rounded-xl bg-[#7dc535]/10 border border-[#7dc535]/30 text-sm text-[#7dc535] font-medium">
                PharmaEUREKA-ERP is our core product designed to be feature rich, affordable and configurable. Our aim is to help businesses streamline processes, improve productivity and maximize ROI.
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Core Modules */}
          <SectionHeader badge="Core Modules" title="Primary ERP Modules" subtitle="Covering every critical function of a pharmaceutical enterprise from procurement to MIS." />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreModules.map((mod, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/40 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7dc535] shrink-0" />
                  <h3 className="text-base font-bold text-white group-hover:text-[#7dc535] transition-colors">{mod.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>

          {/* Other Modules */}
          <div className="mt-16">
            <SectionHeader badge="Extended Modules" title="Additional Quality & Inventory Modules" />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherModules.map((mod, idx) => (
                <div key={idx} className="p-5 rounded-xl glass-panel border border-white/5 hover:border-[#7dc535]/30 flex items-start gap-3 transition-all">
                  <FlaskConical className="w-4 h-4 text-[#7dc535] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">{mod.title}</div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">{mod.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-brand text-base font-bold shadow-xl">
              Schedule a Pharma Eureka Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
