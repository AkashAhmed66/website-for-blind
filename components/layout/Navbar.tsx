'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, Phone, Mail, Sparkles, 
  Code2, Smartphone, ShieldCheck, Users, 
  Layers, Database, GraduationCap, Building2,
  Lock, UserPlus, Send, ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [pathname]);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* Top Notification / Hotline Bar */}
      <div className="bg-[#070d1e] text-xs text-slate-300 border-b border-white/5 py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+8801326892437" 
              className="flex items-center gap-1.5 hover:text-[#7dc535] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7dc535]" />
              <span>+880 1326-892437 / 435</span>
            </a>
            <a 
              href="mailto:info@TechEureka.com" 
              className="hidden md:flex items-center gap-1.5 hover:text-[#7dc535] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#7dc535]" />
              <span>info@TechEureka.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#7dc535] animate-pulse"></span>
              IT Arm of <a href="https://tgcl.co/" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-[#7dc535] underline decoration-[#7dc535]/40 underline-offset-2">TGCL</a>
            </span>
            <Link 
              href="/registration" 
              className="hidden sm:inline-flex items-center gap-1 text-[#7dc535] hover:text-white transition-colors font-medium ml-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Training Admissions Open</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#070d1e]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/10 py-3' 
            : 'bg-[#070d1e]/75 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative p-1 rounded-xl bg-gradient-to-br from-[#7dc535]/30 via-white/10 to-transparent border border-white/10 group-hover:border-[#7dc535]/50 transition-all duration-300">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image 
                  src="/images/TechEureka.jpg" 
                  alt="Tech Eureka Logo" 
                  width={40} 
                  height={40} 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
                Tech <span className="text-[#7dc535]">Eureka</span>
              </span>
              <span className="text-[10px] text-slate-400 -mt-1 tracking-wider uppercase font-medium">
                IT & Outsourcing Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === '/' 
                  ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname.startsWith('/services') 
                    ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <div className="glass-panel-glow rounded-xl p-2 border border-white/10 shadow-2xl backdrop-blur-xl">
                    <Link 
                      href="/services" 
                      className="flex items-center gap-3 p-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-[#7dc535] hover:bg-white/5 border-b border-white/5 mb-1"
                    >
                      <Layers className="w-4 h-4 text-[#7dc535]" />
                      <span>All Services Overview</span>
                    </Link>
                    <Link 
                      href="/services/web-development" 
                      className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-[#7dc535]">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">Web Development</div>
                        <div className="text-[11px] text-slate-400">Custom web apps & portals</div>
                      </div>
                    </Link>
                    <Link 
                      href="/services/app-development" 
                      className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">App Development</div>
                        <div className="text-[11px] text-slate-400">iOS & Android solutions</div>
                      </div>
                    </Link>
                    <Link 
                      href="/services/test-service" 
                      className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">Test Service & QA</div>
                        <div className="text-[11px] text-slate-400">Automated & manual testing</div>
                      </div>
                    </Link>
                    <Link 
                      href="/services/tech-resource-sharing" 
                      className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">Tech Resource Sharing</div>
                        <div className="text-[11px] text-slate-400">Dedicated staff augmentation</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname.startsWith('/products') 
                    ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <div className="glass-panel-glow rounded-xl p-3 border border-white/10 shadow-2xl backdrop-blur-xl">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                      Enterprise ERP Solutions
                    </div>
                    <div className="grid grid-cols-1 gap-1 my-1">
                      <Link 
                        href="/products/pharma-eureka" 
                        className="p-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium">Pharma EUREKA ERP</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-[#7dc535]">Pharma</span>
                      </Link>
                      <Link 
                        href="/products/con-eureka" 
                        className="p-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium">Con EUREKA ERP</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">Chemical</span>
                      </Link>
                      <Link 
                        href="/products/leather-eureka" 
                        className="p-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium">Leather EUREKA ERP</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400">Leather</span>
                      </Link>
                      <Link 
                        href="/products/human-resource-management-system" 
                        className="p-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <span className="font-medium">Human Resource Management (HRMS)</span>
                      </Link>
                    </div>

                    <div className="border-t border-white/10 my-2 pt-2">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                        Application Suites
                      </div>
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        <Link 
                          href="/products/web-products" 
                          className="p-2 rounded-lg text-xs font-medium text-slate-300 hover:text-[#7dc535] hover:bg-white/5"
                        >
                          Web Applications
                        </Link>
                        <Link 
                          href="/products/app-products" 
                          className="p-2 rounded-lg text-xs font-medium text-slate-300 hover:text-[#7dc535] hover:bg-white/5"
                        >
                          Mobile Applications
                        </Link>
                        <Link 
                          href="/products/customized-software" 
                          className="p-2 rounded-lg text-xs font-medium text-slate-300 hover:text-[#7dc535] hover:bg-white/5 col-span-2"
                        >
                          Customized Software
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trainings Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('trainings')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname.startsWith('/trainings') 
                    ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Trainings</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'trainings' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>

              {activeDropdown === 'trainings' && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <div className="glass-panel-glow rounded-xl p-2 border border-white/10 shadow-2xl backdrop-blur-xl">
                    <Link 
                      href="/trainings" 
                      className="flex items-center gap-3 p-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-[#7dc535] hover:bg-white/5 border-b border-white/5 mb-1"
                    >
                      <GraduationCap className="w-4 h-4 text-[#7dc535]" />
                      <span>All Training Programs</span>
                    </Link>
                    <Link 
                      href="/trainings/sqa-training" 
                      className="p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors block"
                    >
                      <div className="font-medium">SQA Training (Automation)</div>
                      <div className="text-[11px] text-slate-400">Selenium, Appium, JMeter, CI/CD</div>
                    </Link>
                    <Link 
                      href="/trainings/dot-net-training" 
                      className="p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors block"
                    >
                      <div className="font-medium">Dot.Net Core Training</div>
                      <div className="text-[11px] text-slate-400">ASP.NET MVC, EF Core, SQL Server</div>
                    </Link>
                    <Link 
                      href="/trainings/spring-boot-training" 
                      className="p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors block"
                    >
                      <div className="font-medium">Spring Boot Training</div>
                      <div className="text-[11px] text-slate-400">Microservices, REST APIs, Security</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  ['/about', '/gallery', '/team'].includes(pathname) 
                    ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute left-0 top-full pt-2 w-52 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <div className="glass-panel-glow rounded-xl p-2 border border-white/10 shadow-2xl backdrop-blur-xl">
                    <Link 
                      href="/about" 
                      className="p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors block font-medium"
                    >
                      Company Profile
                    </Link>
                    <Link 
                      href="/gallery" 
                      className="p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors block font-medium"
                    >
                      Photo Gallery
                    </Link>
                    <Link 
                      href="/team" 
                      className="p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors block font-medium"
                    >
                      Meet Our Team
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Member Portal Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('member')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  ['/login', '/registration', '/portal', '/portal/admin', '/portal/students'].includes(pathname) 
                    ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Member</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'member' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>

              {activeDropdown === 'member' && (
                <div className="absolute left-0 top-full pt-2 w-56 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <div className="glass-panel-glow rounded-xl p-2 border border-white/10 shadow-2xl backdrop-blur-xl">
                    <Link 
                      href="/login" 
                      className="flex items-center gap-2.5 p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Lock className="w-4 h-4 text-[#7dc535]" />
                      <span className="font-medium">Student / Admin Login</span>
                    </Link>
                    <Link 
                      href="/registration" 
                      className="flex items-center gap-2.5 p-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <UserPlus className="w-4 h-4 text-emerald-400" />
                      <span className="font-medium">Course Registration</span>
                    </Link>
                    <Link 
                      href="/portal/admin" 
                      className="flex items-center gap-2.5 p-2.5 rounded-lg text-xs text-slate-400 hover:text-[#7dc535] hover:bg-white/5 border-t border-white/5 mt-1"
                    >
                      <span>Admin Control Panel</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/career" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === '/career' 
                  ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Career
            </Link>

            <Link 
              href="/blog" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname.startsWith('/blog') 
                  ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Blog
            </Link>

            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === '/contact' 
                  ? 'text-[#7dc535] bg-[#7dc535]/10 font-semibold' 
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Link 
              href="/contact" 
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg btn-brand text-xs lg:text-sm shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#7dc535]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#070d1e] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
            
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('services')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>
              {mobileSubmenu === 'services' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-white/5 rounded-lg my-1">
                  <Link href="/services" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">All Services</Link>
                  <Link href="/services/web-development" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Web Development</Link>
                  <Link href="/services/app-development" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">App Development</Link>
                  <Link href="/services/test-service" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Test Service & SQA</Link>
                  <Link href="/services/tech-resource-sharing" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Tech Resource Sharing</Link>
                </div>
              )}
            </div>

            {/* Mobile Products Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('products')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'products' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>
              {mobileSubmenu === 'products' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-white/5 rounded-lg my-1">
                  <Link href="/products" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">All Products</Link>
                  <Link href="/products/pharma-eureka" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Pharma EUREKA</Link>
                  <Link href="/products/con-eureka" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Con EUREKA</Link>
                  <Link href="/products/leather-eureka" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Leather EUREKA</Link>
                  <Link href="/products/human-resource-management-system" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">HRMS System</Link>
                  <Link href="/products/web-products" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Web Applications</Link>
                  <Link href="/products/app-products" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Mobile Applications</Link>
                  <Link href="/products/customized-software" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Customized Software</Link>
                </div>
              )}
            </div>

            {/* Mobile Trainings Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('trainings')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
              >
                <span>Trainings</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'trainings' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>
              {mobileSubmenu === 'trainings' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-white/5 rounded-lg my-1">
                  <Link href="/trainings" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">All Trainings</Link>
                  <Link href="/trainings/sqa-training" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">SQA Training (Automation)</Link>
                  <Link href="/trainings/dot-net-training" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Dot.Net Training</Link>
                  <Link href="/trainings/spring-boot-training" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Spring Boot Training</Link>
                </div>
              )}
            </div>

            {/* Mobile About Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('about')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'about' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>
              {mobileSubmenu === 'about' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-white/5 rounded-lg my-1">
                  <Link href="/about" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">About Us</Link>
                  <Link href="/gallery" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Photo Gallery</Link>
                  <Link href="/team" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Our Team</Link>
                </div>
              )}
            </div>

            {/* Mobile Member Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSubmenu('member')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
              >
                <span>Member Area</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'member' ? 'rotate-180 text-[#7dc535]' : ''}`} />
              </button>
              {mobileSubmenu === 'member' && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-white/5 rounded-lg my-1">
                  <Link href="/login" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Login</Link>
                  <Link href="/registration" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Registration</Link>
                  <Link href="/portal/admin" className="block px-3 py-2 text-sm text-slate-300 hover:text-[#7dc535]">Admin Portal</Link>
                </div>
              )}
            </div>

            <Link 
              href="/career" 
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
            >
              Career
            </Link>
            <Link 
              href="/blog" 
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#7dc535] hover:bg-white/5"
            >
              Contact
            </Link>

            <div className="pt-4 mt-4 border-t border-white/10">
              <Link 
                href="/registration" 
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg btn-brand text-sm text-center"
              >
                <span>Enroll in Training</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        )}
      </header>
    </>
  );
}
