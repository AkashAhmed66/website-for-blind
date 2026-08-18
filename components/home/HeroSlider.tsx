'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronLeft, ChevronRight, Sparkles, ArrowRight, 
  Play, ShieldCheck, Award, Users, CheckCircle2
} from 'lucide-react';

interface Slide {
  id: number;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
  videoSrc?: string;
  imageSrc: string;
}

const slides: Slide[] = [
  {
    id: 1,
    tag: 'Next-Gen IT Engineering & Outsourcing',
    title: 'Your Challenge is',
    highlight: 'Our Progress',
    description: 'Transforming enterprise challenges into scalable, high-performance digital engines. From mission-critical ERPs to robust automated testing ecosystems.',
    primaryBtn: { text: 'Contact Us Today', href: '/contact' },
    secondaryBtn: { text: 'Explore Services', href: '/services' },
    videoSrc: '/videos/video1.mp4',
    imageSrc: '/videos/Screenshot1.jpg',
  },
  {
    id: 2,
    tag: 'Enterprise ERP & Cloud Architecture',
    title: 'Innovative IT Solutions for',
    highlight: 'a Better Future',
    description: 'At Tech Eureka, we provide premier software development and tech talent outsourcing for businesses worldwide. Delivering GMP, FDA, and BSTI compliant systems.',
    primaryBtn: { text: 'Learn About Us', href: '/about' },
    secondaryBtn: { text: 'View Products', href: '/products' },
    videoSrc: '/videos/video2.mp4',
    imageSrc: '/videos/Screenshot2.jpg',
  },
  {
    id: 3,
    tag: 'Professional Skill Building & Placement',
    title: 'How Big Can You Dream?',
    highlight: 'We Make It Happen',
    description: 'Industry-standard training in SQA Test Automation, Dot.Net Core Enterprise MVC, and Spring Boot Microservices with direct live project experience.',
    primaryBtn: { text: 'Enroll in Training', href: '/registration' },
    secondaryBtn: { text: 'View Curriculum', href: '/trainings' },
    videoSrc: '/videos/video.mp4',
    imageSrc: '/videos/Screenshot3.jpg',
  },
  {
    id: 4,
    tag: 'Global Tech Delivery Hub',
    title: 'Global Solutions &',
    highlight: 'Skills for Tomorrow',
    description: 'We are bridging technological gaps and elevating businesses through precision engineering, dedicated staff augmentation, and unwavering quality.',
    primaryBtn: { text: 'Meet Our Team', href: '/team' },
    secondaryBtn: { text: 'Get In Touch', href: '/contact' },
    imageSrc: '/images/slider2/bg1.jpg',
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div 
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050914]"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Slide Media Layers */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Video or Image Background */}
          {slide.videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={slide.imageSrc}
              className="w-full h-full object-cover"
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={slide.imageSrc}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          )}

          {/* Deep Dark Overlays & Gradient Glass Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/80 to-[#070d1e]/85"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050914]/50 to-[#050914]/95"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>
      ))}

      {/* Decorative Glow Balls */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#7dc535]/15 rounded-full blur-3xl pointer-events-none z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none z-10"></div>

      {/* Active Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-brand text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 animate-in fade-in-50 slide-in-from-top-4 duration-500 shadow-lg shadow-[#7dc535]/10">
          <Sparkles className="w-4 h-4 text-[#7dc535]" />
          <span>{slides[currentSlide].tag}</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight max-w-5xl leading-[1.15] mb-6">
          {slides[currentSlide].title}{' '}
          <span className="text-gradient-green block sm:inline">
            {slides[currentSlide].highlight}
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 text-balance">
          {slides[currentSlide].description}
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href={slides[currentSlide].primaryBtn.href}
            className="w-full sm:w-auto px-8 py-4 rounded-xl btn-brand text-base font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#7dc535]/25 hover:scale-105 transition-all"
          >
            <span>{slides[currentSlide].primaryBtn.text}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href={slides[currentSlide].secondaryBtn.href}
            className="w-full sm:w-auto px-8 py-4 rounded-xl btn-secondary-glow text-base font-medium flex items-center justify-center gap-2"
          >
            <span>{slides[currentSlide].secondaryBtn.text}</span>
          </Link>
        </div>

        {/* Feature Highlights Pills under Hero */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-[#7dc535]/15 text-[#7dc535]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">ISO & GMP Ready</div>
              <div className="text-[11px] text-slate-400">Compliant ERP suites</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-sky-500/15 text-sky-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">14+ Years Group Exp.</div>
              <div className="text-[11px] text-slate-400">Proven track record</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">50+ Engineers</div>
              <div className="text-[11px] text-slate-400">Full-stack & SQA team</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">24/7 Dedicated Aid</div>
              <div className="text-[11px] text-slate-400">Uninterrupted support</div>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#7dc535] text-white hover:text-black border border-white/10 backdrop-blur-md transition-all focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#7dc535] text-white hover:text-black border border-white/10 backdrop-blur-md transition-all focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-[#7dc535] shadow-lg shadow-[#7dc535]/50' 
                : 'w-2.5 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
