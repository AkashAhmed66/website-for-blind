import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Package, ArrowRight, ShieldCheck, Database, 
  FlaskConical, Pill, FileSpreadsheet, Users, 
  BarChart3, Factory, Boxes, Cpu
} from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import SectionHeader from '../../components/ui/SectionHeader';

export const metadata = {
  title: "Our Products - Tech Eureka",
  description: "Explore Tech Eureka's enterprise ERP products: Pharma Eureka, Con Eureka, Leather Eureka, HRMS, Web Products, Mobile Apps, and Custom Software."
};

const products = [
  {
    id: 'pharma-eureka',
    title: 'Pharma Eureka ERP',
    category: 'Pharmaceutical ERP',
    tag: 'GMP & FDA Compliant',
    icon: Pill,
    image: '/images/portfolio/pharma-1.jpg',
    href: '/products/pharma-eureka',
    description: 'End-to-end pharmaceutical ERP covering Production, Procurement, QA/QC, Inventory, HR, Payroll, Dashboard & MIS — GMP, FDA, 21 CFR Part II ready.',
    modules: ['Production Management', 'Procurement', 'QA/QC Management', 'HRMS & Payroll', 'MIS & Dashboard']
  },
  {
    id: 'con-eureka',
    title: 'Con Eureka ERP',
    category: 'Chemical & Cosmetics ERP',
    tag: 'BSTI Compliant',
    icon: FlaskConical,
    image: '/images/pages/about-4.jpg',
    href: '/products/con-eureka',
    description: 'Comprehensive ERP for Chemical & Cosmetics companies with GMP traceability, production planning (MRP), procurement, supply chain, and full financial management.',
    modules: ['Master Planning & MRP', 'Supply Chain', 'Quality Management', 'Financial Management', 'CRM & Sales']
  },
  {
    id: 'leather-eureka',
    title: 'Leather Eureka ERP',
    category: 'Leather Industry ERP',
    tag: 'Industry Specific',
    icon: Factory,
    image: '/images/pages/about-6.jpg',
    href: '/products/leather-eureka',
    description: 'Specialized ERP platform for the leather manufacturing industry with full batch tracking, production scheduling, procurement, inventory, and compliance reporting.',
    modules: ['Production & Batch Control', 'Procurement', 'Inventory Management', 'Quality Control', 'MIS Reports']
  },
  {
    id: 'human-resource-management-system',
    title: 'HRMS',
    category: 'HR & Payroll System',
    tag: 'Enterprise Ready',
    icon: Users,
    image: '/images/portfolio/hrm-dashboard.png',
    href: '/products/human-resource-management-system',
    description: 'Advanced Human Resource Management System streamlining employee lifecycle, attendance, leave, payroll, KPI tracking, and recruitment.',
    modules: ['Employee Database', 'Attendance & Leave', 'Payroll Engine', 'Recruitment Portal', 'KPI Evaluation']
  },
  {
    id: 'web-products',
    title: 'Web Product Suite',
    category: 'SaaS Web Platforms',
    tag: 'Cloud-Ready',
    icon: Database,
    image: '/images/portfolio/Lilyana-1.PNG',
    href: '/products/web-products',
    description: 'Ready-to-deploy enterprise web platforms: E-Commerce (B2B & B2C), CRM, POS, ISP Billing, Tender Management, ELS, EDMS, and Hospital Billing.',
    modules: ['eCommerce Storefront', 'CRM & Pipeline', 'POS & Inventory', 'Tender Management', 'EDMS & ELS']
  },
  {
    id: 'app-products',
    title: 'Mobile App Products',
    category: 'Enterprise Mobile',
    tag: 'Android & iOS',
    icon: Cpu,
    image: '/images/portfolio/ISP-2.PNG',
    href: '/products/app-products',
    description: 'Enterprise-grade Android & iOS mobile applications: Sales Automation (SAS), Sales Distribution Control (SDC), eDCL Doctor Logs, and eSOMS order management.',
    modules: ['Sales Automation (SAS)', 'SDC Distribution', 'eDCL Doctor Call Log', 'eSOMS Order Management']
  },
  {
    id: 'customized-software',
    title: 'Customized Software',
    category: 'Bespoke Development',
    tag: 'Fully Tailored',
    icon: Boxes,
    image: '/images/pages/about-9.jpg',
    href: '/products/customized-software',
    description: 'We analyze your unique business workflow and engineer purpose-built ERP modules, portals, automation pipelines, and API integrations from ground up.',
    modules: ['Workflow Analysis', 'Custom ERP Modules', 'API & Microservices', 'System Integration', 'Training & Support']
  }
];

export default function ProductsPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Our Products & Solutions"
        subtitle="Battle-tested enterprise software products engineered for Pharma, Chemical, Leather, HR, eCommerce, and bespoke business automation."
        breadcrumbs={[{ label: 'Products' }]}
        badge="Enterprise Software Suite"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <SectionHeader
            badge="Proven Technology"
            title="Industry-Specific ERP Products"
            subtitle="Every product is engineered with compliance, scalability, and real-world enterprise workflows at the core."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => {
              const Icon = prod.icon;
              return (
                <div
                  key={prod.id}
                  className="group rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/50 transition-all duration-300 shadow-xl flex flex-col overflow-hidden"
                >
                  {/* Product thumbnail */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-black/30 to-transparent"></div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full badge-brand text-[10px] font-bold uppercase tracking-wider">
                      {prod.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#7dc535]/15 text-[#7dc535]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{prod.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#7dc535] transition-colors mb-3">
                      {prod.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-5 flex-grow">
                      {prod.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5 border-t border-white/5 pt-4">
                      {prod.modules.map((mod, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                          {mod}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={prod.href}
                      className="w-full py-2.5 rounded-xl btn-brand text-xs font-bold flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>Explore Product</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 rounded-3xl glass-panel-glow border border-[#7dc535]/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Don&apos;t See Your Industry Listed?</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-2xl mx-auto">
              We build custom ERP and enterprise application solutions for any industry vertical. Contact us with your workflow requirements and we&apos;ll craft a bespoke proposal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                Request Custom Product
              </Link>
              <Link href="/products/customized-software" className="px-8 py-3 rounded-xl btn-secondary-glow text-sm font-medium">
                Learn About Customized Software
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
