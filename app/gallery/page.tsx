'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import SectionHeader from '../../components/ui/SectionHeader';

const galleryItems = [
  { id: 1, title: 'Corporate Headquarters & Strategy Session', category: 'Culture', image: '/images/gallery/gallery1.jpg' },
  { id: 2, title: 'Enterprise Development Team at Work', category: 'Engineering', image: '/images/gallery/gallery2.jpg' },
  { id: 3, title: 'Client Consultation & Architecture Review', category: 'Consulting', image: '/images/gallery/gallery3.jpg' },
  { id: 4, title: 'SQA Automation Live Workshop', category: 'Training', image: '/images/gallery/gallery4.jpg' },
  { id: 5, title: 'TGCL Group Annual Conference & Recognition', category: 'Events', image: '/images/gallery/gallery5.jpg' },
  { id: 6, title: 'Cloud Infrastructure & DevOps Briefing', category: 'Engineering', image: '/images/gallery/gallery6.jpg' },
  { id: 7, title: 'Interactive Product Demo & Client Feedback', category: 'Product', image: '/images/gallery/gallery7.jpg' },
  { id: 8, title: 'Team Collaboration & Hackathon', category: 'Culture', image: '/images/gallery/gallery8.jpg' },
];

export default function GalleryPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === 0 ? galleryItems.length - 1 : activeIdx - 1);
    }
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === galleryItems.length - 1 ? 0 : activeIdx + 1);
    }
  };

  return (
    <div>
      <BreadcrumbHero
        title="Photo & Activity Gallery"
        subtitle="Moments from our engineering floor, corporate workshops, client milestones, and team celebrations."
        breadcrumbs={[{ label: 'Gallery' }]}
        badge="Life at Tech Eureka"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <SectionHeader
            badge="Visual Journey"
            title="Our People, Culture & Milestones"
            subtitle="Take a look inside Tech Eureka's offices, live training workshops, and corporate events under the TGCL group."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#7dc535]/50 transition-all duration-300 cursor-pointer aspect-[4/3] shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7dc535] bg-[#050914]/80 px-2 py-0.5 rounded-full self-start backdrop-blur-sm">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white line-clamp-1">{item.title}</span>
                    <div className="p-2 rounded-full bg-[#7dc535] text-slate-950 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveIdx(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#070d1e] rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div>
                <span className="text-xs text-[#7dc535] font-semibold uppercase tracking-wider">
                  {galleryItems[activeIdx].category}
                </span>
                <h3 className="text-sm font-bold text-white">{galleryItems[activeIdx].title}</h3>
              </div>
              <button
                onClick={() => setActiveIdx(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={galleryItems[activeIdx].image}
                alt={galleryItems[activeIdx].title}
                fill
                className="object-contain"
              />
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#7dc535] text-white hover:text-black transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#7dc535] text-white hover:text-black transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-white/5 border-t border-white/10 text-center text-xs text-slate-400">
              Photo {activeIdx + 1} of {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
