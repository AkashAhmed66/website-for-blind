import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Calendar, Server } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';
import PricingPlans from '../../../components/home/PricingPlans';

export const metadata = {
  title: "Spring Boot & Microservices Training - Tech Eureka",
  description: "3-month Spring Boot training covering Spring MVC, Data JPA, Spring Security, Microservices, Docker, API Gateway, and real projects."
};

const modules = [
  {
    num: '1', title: 'Introduction to Spring Boot',
    topics: ['Introduction to Spring Boot & Advantages', 'Setting up a Spring Boot project', 'Spring Boot configuration', 'Creating and running a Spring Boot application', 'Spring Boot development environment']
  },
  {
    num: '2', title: 'Building Web Applications with Spring Boot',
    topics: ['Introduction to Spring MVC & Architecture', 'RESTful Web Services', 'Building a RESTful API with Spring Boot', 'Handling HTTP requests and responses', 'Implementing request mapping and URL mapping', 'Handling request and response bodies', 'Error handling and exception handling', 'Securing web applications with Spring Security']
  },
  {
    num: '3', title: 'Data Access with Spring Boot',
    topics: ['Introduction to Spring Data', 'ORM with Hibernate', 'Implementing CRUD operations with Spring Data', 'Handling transactions with Spring Boot', 'Querying data with Spring Boot', 'Integration testing with Spring Boot']
  },
  {
    num: '4', title: 'Advanced Spring Boot Concepts (1) — Microservices',
    topics: ['Securing APIs', 'Load Balancing', 'API Gateway', 'Discovery service', 'Circuit breaker', 'Configuration management', 'Message broker', 'API documentation']
  },
  {
    num: '5', title: 'Advanced Spring Boot Concepts (2) — Deployment',
    topics: ['Spring Boot Actuator', 'Logging and monitoring with Spring Boot', 'Spring Boot DevTools', 'Spring Boot Deployment', 'Dockerizing a Spring Boot application', 'Building Microservices with Spring Boot']
  },
  {
    num: '6', title: 'Best Practices and Design Patterns',
    topics: ['Design patterns with Spring Boot', 'Best practices for Spring Boot development', 'Spring Boot architecture and performance', 'Security best practices for Spring Boot', 'Spring Boot and RESTful API best practices', 'Microservices best practices']
  },
  {
    num: 'Live', title: 'Real-Time Project Building',
    topics: ['E-commerce type project', 'Employment management system type project']
  }
];

export default function SpringBootTrainingPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Spring Boot & Microservices Training"
        subtitle="Modern backend architecture training — Spring Boot, Spring Data JPA, Security, Docker, Microservices, and real project builds."
        breadcrumbs={[
          { label: 'Trainings', href: '/trainings' },
          { label: 'Spring Boot Training' }
        ]}
        badge="Modern Backend"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Overview Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-5.jpg" alt="Spring Boot Training" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Server className="w-3.5 h-3.5" />
                <span>Microservices & Modern Backend</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Spring Boot &amp; Microservices Training
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#7dc535]" />
                  <div>
                    <div className="text-xs font-bold text-white">Duration</div>
                    <div className="text-xs text-slate-400">3 Months</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#7dc535]" />
                  <div>
                    <div className="text-xs font-bold text-white">Schedule</div>
                    <div className="text-xs text-slate-400">Friday & Saturday</div>
                  </div>
                </div>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                Master modern Java backend development with Spring Boot, covering RESTful APIs, Spring Data JPA with Hibernate, Spring Security with JWT, advanced Microservices patterns (API Gateway, Circuit Breaker, Discovery Service, Load Balancing), Docker containerization, and real-world employment and eCommerce project builds.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/registration" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-secondary-glow text-sm font-medium">
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>

          {/* Modules */}
          <SectionHeader badge="Course Curriculum" title="Complete 6-Module Syllabus" subtitle="From Spring Boot fundamentals to production-grade Microservices architecture and Docker deployment." />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border transition-all ${mod.num === 'Live' ? 'glass-panel-glow border-[#7dc535]/40' : 'glass-panel border-white/10 hover:border-[#7dc535]/40'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7dc535] bg-[#7dc535]/10 px-2 py-0.5 rounded">Module {mod.num}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3">{mod.title}</h3>
                <ul className="space-y-1.5">
                  {mod.topics.map((topic, tidx) => (
                    <li key={tidx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-[#7dc535] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/registration" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-brand text-base font-bold shadow-xl">
              Enroll in Spring Boot Training <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <PricingPlans />
    </div>
  );
}
