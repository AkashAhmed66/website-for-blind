import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, FlaskConical, Beaker } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';

export const metadata = {
  title: "Con Eureka ERP - Tech Eureka",
  description: "BSTI compliant ERP for Chemical & Cosmetics industry — GMP traceability, MRP, procurement, supply chain, quality management."
};

const features = [
  'Product Data Management', 'CRM', 'Production Management', 'Service Management',
  'Supply Chain Management', 'Project Management', 'Warehouse Management', 'Document Management',
  'Business Intelligence', 'Sales Management', 'Planning and Scheduling', 'Financial Management',
  'Supplier Relationship Management', 'Governance, Risk and Compliance', 'Human Resources', 'Retail Management'
];

const coreModules = [
  {
    title: 'Master Planning (MRP)',
    desc: 'Production planning and material requirement planning (MRP). Generates production batches based on forecasting including rolling forecast and monthly material requirements.'
  },
  {
    title: 'Procurement Management',
    desc: 'Manages procurement with elimination of duplication of work, greater control over the process, faster decision-making. Only approved vendors are used in the system.'
  },
  {
    title: 'Human Resource Management',
    desc: 'Advanced HRMS application designed to help companies in any industry easily manage the difficult tasks of human resource record keeping and reporting.'
  },
  {
    title: 'Accounting System',
    desc: 'After entering accounts vouchers, the software provides all financial information to the organization for right-time, right-information decision-making.'
  },
  {
    title: 'Payroll Management',
    desc: 'Ensures payroll is turned around quickly and accurately every time for all employees. Fully compliant with all legislation.'
  },
  {
    title: 'Dashboard',
    desc: 'Real-time, single-page user interface with graphical KPI presentation — current status snapshot and historical trends for instantaneous informed decisions.'
  }
];

const otherModules = [
  { title: 'Raw Material Inventory System (RMIS)', desc: 'Functional automation for RM warehouse with QA and Production dependencies.' },
  { title: 'Packaging Material Inventory System (PMIS)', desc: 'Automation for PM warehouse with QA and Production dependencies.' },
  { title: 'Finished Goods Inventory System (FGIS)', desc: 'Functional automation for FG warehouse business processes.' },
  { title: 'Quality Management (QM)', desc: 'Covers operational aspects of QC — Sampling, Quality Testing, GRN Release, Batch Release with varied reports.' },
  { title: 'Raw Material QC (RMQCS)', desc: 'Assists QA in RM testing, test request and result management linked with RM Warehouse.' },
  { title: 'Packaging Material QC (PMQCS)', desc: 'Assists QA in PM testing, test request and result management linked with PM Warehouse.' },
  { title: 'Production (IPC) QC', desc: 'WIP Quality Control assisting QA in in-process testing linked with production.' },
  { title: 'Finished Goods QC (FGQCS)', desc: 'FG testing and result management linked with FG Warehouse.' }
];

export default function ConEurekaPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Con Eureka ERP"
        subtitle="GMP & BSTI Compliant ERP for Chemical & Cosmetics Manufacturers — Data visibility, traceability, and production excellence."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Con Eureka' }
        ]}
        badge="Chemical & Cosmetics ERP"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-4.jpg" alt="Con Eureka ERP" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>GMP · BSTI Compliant</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                ConEUREKA-ERP for the Chemical &amp; Cosmetics Industry
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Companies in the Chemical &amp; Cosmetics Industry face unique challenges, being a science-based industry that constantly innovates. Quality and compliance must be monitored at all stages, from ingredient selection to manufacturing, storage and end product distribution. Many companies struggle with disparate systems, paper processes and repetitive data entry, hindering their productivity.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                GMP is essential to guarantee product consistency, control in manufacturing and regulatory compliance. ConEUREKA-ERP addresses these issues by providing data visibility, traceability, and supporting GMP requirements, enabling companies to meet certifications like BSTI. The software streamlines processes, reducing manual efforts and enhancing efficiency.
              </p>
              <div className="p-4 rounded-xl bg-[#7dc535]/10 border border-[#7dc535]/30 text-sm text-[#7dc535] font-medium">
                ConEUREKA-ERP is our core product designed to be feature rich, affordable and configurable — helping businesses streamline processes, improve productivity and maximize ROI.
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Features */}
          <SectionHeader badge="Platform Capabilities" title="Full Feature Coverage" />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 rounded-xl glass-panel border border-white/5 hover:border-[#7dc535]/30 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#7dc535] shrink-0" />
                <span className="text-xs text-slate-300 font-medium">{feat}</span>
              </div>
            ))}
          </div>

          {/* Core Modules */}
          <div className="mt-16">
            <SectionHeader badge="Core Modules" title="Primary ERP Modules" subtitle="End-to-end process coverage for the Chemical & Cosmetics value chain." />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>

          {/* Other Modules */}
          <div className="mt-16">
            <SectionHeader badge="Extended Modules" title="Production & Quality Management" />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherModules.map((mod, idx) => (
                <div key={idx} className="p-5 rounded-xl glass-panel border border-white/5 hover:border-[#7dc535]/30 flex items-start gap-3 transition-all">
                  <Beaker className="w-4 h-4 text-[#7dc535] shrink-0 mt-0.5" />
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
              Schedule a Con Eureka Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
