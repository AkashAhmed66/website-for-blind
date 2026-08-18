'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, ExternalLink, Sparkles, Filter } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'products' | 'trainings';
  categoryLabel: string;
  image: string;
  tags: string[];
}

const portfolioData: PortfolioItem[] = [
  { id: 1, title: 'Accounts & Ledger System', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/account-1.png', tags: ['FinTech', 'Accounting'] },
  { id: 2, title: 'Financial Analytics Suite', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/account-2.png', tags: ['Reporting', 'ERP'] },
  { id: 3, title: 'Akij Enterprise Dashboard', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/akij.png', tags: ['Enterprise', 'Dashboard'] },
  { id: 4, title: 'CRM Client Portal', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/crm-dashboard.png', tags: ['CRM', 'Pipeline'] },
  { id: 5, title: 'HRM Attendance & Payroll', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/hrm-dashboard.png', tags: ['HRMS', 'Payroll'] },
  { id: 6, title: 'Retail POS & Cash Flow', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/pos-dashboard-2.png', tags: ['POS', 'Inventory'] },
  { id: 7, title: 'ISP Billing & Network Portal', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/ISP-1.PNG', tags: ['ISP', 'Billing'] },
  { id: 8, title: 'ISP Client Management System', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/ISP-2.PNG', tags: ['Radius', 'Automation'] },
  { id: 9, title: 'Lilyana Modern eCommerce', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/Lilyana-1.PNG', tags: ['eCommerce', 'Storefront'] },
  { id: 10, title: 'Lilyana Checkout & Orders', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/Lilyana-2.PNG', tags: ['Payment', 'Orders'] },
  { id: 11, title: 'Pharma B2B eCommerce 1', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/pharma-1.jpg', tags: ['Pharma', 'B2B'] },
  { id: 12, title: 'Pharma Inventory Management', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/pharma-2.png', tags: ['Batch Tracking', 'ERP'] },
  { id: 13, title: 'Pharma Prescription & Dispatch', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/pharma-3.png', tags: ['Healthcare', 'Compliance'] },
  { id: 14, title: 'Tender & e-Procurement 1', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/tender-1.png', tags: ['Tender', 'Procurement'] },
  { id: 15, title: 'Tender Evaluation & Scoring', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/tender-2.png', tags: ['Bidding', 'Audit'] },
  { id: 16, title: 'Tender Vendor Portal', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/tender-3.png', tags: ['Vendor Portal', 'Security'] },
  { id: 17, title: 'Tender Reports & Summary', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/tender-4.png', tags: ['Analytics', 'Export'] },
  { id: 18, title: 'ELS E-Learning Dashboard', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/p_8.png', tags: ['EdTech', 'Dashboard'] },
  { id: 19, title: 'ELS Student Learning Portal', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/p_10.png', tags: ['Courseware', 'Live Sessions'] },
  { id: 20, title: 'EDMS Document Workflow 1', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/p_1.jpeg', tags: ['EDMS', 'Document OCR'] },
  { id: 21, title: 'EDMS Secure Vault 2', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/p_2.jpeg', tags: ['Archival', 'Security'] },
  { id: 22, title: 'EDMS Digital Signature 3', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/p_3.jpeg', tags: ['Compliance', 'Cloud'] },
  { id: 23, title: 'HBMS Healthcare Billing System', category: 'products', categoryLabel: 'Products', image: '/images/portfolio/p_7.jpeg', tags: ['Hospital', 'Billing'] },
  { id: 24, title: 'SQA Automation Live Workshop', category: 'trainings', categoryLabel: 'Trainings', image: '/images/portfolio/training_1.png', tags: ['Selenium', 'CI/CD'] },
  { id: 25, title: 'Enterprise Development Bootcamp', category: 'trainings', categoryLabel: 'Trainings', image: '/images/portfolio/training_2.png', tags: ['DotNet', 'Spring Boot'] },
];

export default function PortfolioFilter() {
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'trainings'>('all');
  const [selectedImg, setSelectedImg] = useState<PortfolioItem | null>(null);

  const filteredItems = activeTab === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <section className="py-24 bg-[#070d1e] relative overflow-hidden border-b border-white/10">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#7dc535]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Delivered Excellence"
          title="Featured Projects & Solutions"
          subtitle="Explore our battle-tested ERP systems, enterprise dashboards, specialized industry applications, and hands-on corporate trainings."
        />

        {/* Tab Filters */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#7dc535] text-slate-950 shadow-lg shadow-[#7dc535]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              All Projects ({portfolioData.length})
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'products'
                  ? 'bg-[#7dc535] text-slate-950 shadow-lg shadow-[#7dc535]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Products &amp; ERPs ({portfolioData.filter(p => p.category === 'products').length})
            </button>
            <button
              onClick={() => setActiveTab('trainings')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'trainings'
                  ? 'bg-[#7dc535] text-slate-950 shadow-lg shadow-[#7dc535]/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Trainings ({portfolioData.filter(p => p.category === 'trainings').length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#7dc535]/50 transition-all duration-300 cursor-pointer flex flex-col shadow-lg"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#7dc535] text-slate-950 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 bg-[#070d1e]/80 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-semibold text-[#7dc535] uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#7dc535] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#070d1e] rounded-2xl border border-white/20 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div>
                <span className="text-xs text-[#7dc535] font-semibold uppercase tracking-wider">
                  {selectedImg.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-white">{selectedImg.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImg(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <Image
                src={selectedImg.image}
                alt={selectedImg.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-1.5">
                {selectedImg.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded bg-[#7dc535]/15 text-[#7dc535] font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedImg(null)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
