'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, Phone, Mail, Globe, ArrowUp, 
  ExternalLink, ChevronRight,
  ShieldCheck, Award, Users, CheckCircle2, X
} from 'lucide-react';

export default function Footer() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpg',
    '/images/gallery/3.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
    '/images/gallery/6.jpg',
    '/images/gallery/7.jpg',
    '/images/gallery/8.jpg',
    '/images/gallery/9.jpg',
  ];

  return (
    <footer className="relative bg-[#040711] text-slate-300 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7dc535]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="p-1 rounded-xl bg-gradient-to-br from-[#7dc535]/30 to-white/10 border border-white/10">
                <Image 
                  src="/images/TechEureka.jpg" 
                  alt="Tech Eureka Logo" 
                  width={38} 
                  height={38} 
                  className="rounded-lg object-cover" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Tech <span className="text-[#7dc535]">Eureka</span>
                </span>
                <span className="text-[10px] text-slate-400 -mt-1 tracking-wider uppercase font-medium">
                  IT & Outsourcing Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Tech Eureka is the dedicated software, IT, and tech outsourcing arm of Techno Green Carbon Ltd. (TGCL). We engineer robust ERPs, custom web apps, mobile solutions, and enterprise SQA automation.
            </p>

            <div className="space-y-2.5 text-sm pt-2">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#7dc535] mt-1 shrink-0" />
                <span>Banani, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#7dc535] shrink-0" />
                <a href="mailto:info@TechEureka.com" className="hover:text-[#7dc535] transition-colors">
                  info@TechEureka.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-[#7dc535] shrink-0" />
                <a href="tel:+8801326892437" className="hover:text-[#7dc535] transition-colors">
                  +880 1326-892437, +880 1326-892435
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#7dc535] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7dc535]"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Products & ERP</span>
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Trainings</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Meet The Team</span>
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Career Opportunities</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Modules (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#7dc535] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7dc535]"></span>
              Solutions & ERP
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/pharma-eureka" className="hover:text-white flex items-center justify-between transition-colors">
                  <span>Pharma EUREKA ERP</span>
                  <span className="text-[10px] text-[#7dc535] bg-[#7dc535]/10 px-1.5 py-0.5 rounded">FDA/GMP</span>
                </Link>
              </li>
              <li>
                <Link href="/products/con-eureka" className="hover:text-white flex items-center justify-between transition-colors">
                  <span>Con EUREKA (Chemical)</span>
                  <span className="text-[10px] text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded">BSTI</span>
                </Link>
              </li>
              <li>
                <Link href="/products/leather-eureka" className="hover:text-white flex items-center justify-between transition-colors">
                  <span>Leather EUREKA ERP</span>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">Costing</span>
                </Link>
              </li>
              <li>
                <Link href="/products/human-resource-management-system" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>HRMS & Payroll System</span>
                </Link>
              </li>
              <li>
                <Link href="/trainings/sqa-training" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>SQA Automation Training</span>
                </Link>
              </li>
              <li>
                <Link href="/trainings/dot-net-training" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Dot.Net Core Masterclass</span>
                </Link>
              </li>
              <li>
                <Link href="/trainings/spring-boot-training" className="hover:text-[#7dc535] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Spring Boot & Microservices</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Photo Gallery Grid (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#7dc535] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7dc535]"></span>
                Gallery Moments
              </h3>
              <Link href="/gallery" className="text-xs text-slate-400 hover:text-[#7dc535] transition-colors">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxImg(src)}
                  className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#7dc535]"
                >
                  <Image 
                    src={src} 
                    alt={`Tech Eureka Gallery ${idx + 1}`} 
                    fill 
                    sizes="(max-width: 768px) 33vw, 100px" 
                    className="object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </button>
              ))}
            </div>
            
            <p className="text-[11px] text-slate-400">
              Capturing team milestones, workshops & technology breakthroughs.
            </p>
          </div>

        </div>

        {/* Lower Row: Socials, Parent Group & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-medium">Follow Tech Eureka:</span>
            <a 
              href="https://www.facebook.com/TechEurekaBD?mibextid=ZbWKwL" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a 
              href="https://bd.linkedin.com/company/tech-eureka" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>

          {/* Copyright & TGCL affiliation */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            <span>&copy; {new Date().getFullYear()} Tech Eureka. All Rights Reserved.</span>
            <span>•</span>
            <span>A Subsidiary of <a href="https://tgcl.co/" target="_blank" rel="noreferrer" className="text-white hover:text-[#7dc535] underline decoration-[#7dc535]/40">Techno Green Carbon Ltd. (TGCL)</a></span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#7dc535]/20 hover:border-[#7dc535]/50 text-slate-300 hover:text-white transition-all focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#7dc535]" />
            <span>Top</span>
          </button>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <Image 
              src={lightboxImg} 
              alt="Gallery Preview" 
              fill 
              className="object-contain" 
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#7dc535] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
