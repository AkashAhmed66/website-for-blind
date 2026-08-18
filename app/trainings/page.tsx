import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, GraduationCap, Clock, Calendar, Users, ShieldCheck, Code2, Server } from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import SectionHeader from '../../components/ui/SectionHeader';
import PricingPlans from '../../components/home/PricingPlans';

export const metadata = {
  title: "Professional Trainings - Tech Eureka",
  description: "Industry-standard IT training programs: SQA Automation, Dot.Net Core, Spring Boot & Microservices. Friday & Saturday batches."
};

const trainings = [
  {
    id: 'sqa-training',
    title: 'SQA Training (Automation)',
    tag: 'Highest Placement Rate',
    icon: ShieldCheck,
    href: '/trainings/sqa-training',
    duration: '3 Months | Fri & Sat',
    chapters: 11,
    highlights: [
      'Testing Fundamentals & STLC/SDLC',
      'Java OOP & TestNG Framework',
      'Selenium WebDriver 3.0 & POM',
      'Mobile Automation with Appium',
      'API Testing: Postman & RestAssured',
      'End-to-End JMeter Load Testing',
      'CI/CD with GitHub Actions',
      'Mock Interviews & Career Guidance'
    ]
  },
  {
    id: 'dot-net-training',
    title: 'Dot.Net Core Enterprise Training',
    tag: 'Enterprise Focus',
    icon: Code2,
    href: '/trainings/dot-net-training',
    duration: '3 Months | Fri & Sat',
    chapters: 11,
    highlights: [
      'ASP.NET Core & MVC Architecture',
      'Razor View Engine',
      'Entity Framework Core (ORM)',
      'Microsoft SQL Server (18 modules)',
      'Authentication & Authorization',
      'Dependency Injection Deep Dive',
      'Web Application Deployment',
      'Real E-Commerce & ERP Project'
    ]
  },
  {
    id: 'spring-boot-training',
    title: 'Spring Boot & Microservices',
    tag: 'Modern Backend',
    icon: Server,
    href: '/trainings/spring-boot-training',
    duration: '3 Months | Fri & Sat',
    chapters: 6,
    highlights: [
      'Spring Boot Core Architecture',
      'RESTful Web Services with Spring MVC',
      'Spring Data JPA & Hibernate ORM',
      'Spring Security & JWT',
      'Microservices: API Gateway, Circuit Breaker',
      'Load Balancing & Discovery Service',
      'Dockerizing Spring Boot Apps',
      'Live Employment Portal Project'
    ]
  }
];

export default function TrainingsPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Professional IT Training Programs"
        subtitle="Industry-standard, hands-on training programs designed to launch career-defining skills in SQA Automation, .NET Core, and Spring Boot Microservices."
        breadcrumbs={[{ label: 'Trainings' }]}
        badge="Career-Defining Programs"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Why Train with Us */}
          <SectionHeader
            badge="Why Train With Us"
            title="Industry-Aligned Curriculum & Expert Mentorship"
            subtitle="Every training program is built around real enterprise workflows, live project experience, and direct mentorship from senior engineers."
          />

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { icon: GraduationCap, label: 'Expert Mentors', sub: 'Senior Industry Practitioners' },
              { icon: Clock, label: '3-Month Programs', sub: 'Friday & Saturday Batches' },
              { icon: Users, label: 'Live Projects', sub: 'Real Enterprise Capstone' },
              { icon: CheckCircle2, label: 'Job Assistance', sub: 'Mock Interviews & Resume Help' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl glass-panel border border-white/10 flex flex-col items-center text-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#7dc535]/15 text-[#7dc535]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Training Cards */}
          <SectionHeader badge="Available Courses" title="Choose Your Training Track" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainings.map((tr) => {
              const Icon = tr.icon;
              return (
                <div key={tr.id} className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#7dc535]/40 transition-all flex flex-col shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#7dc535]/15 text-[#7dc535]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7dc535] bg-[#7dc535]/10 px-2.5 py-1 rounded-full">{tr.tag}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{tr.title}</h3>
                  <div className="text-xs text-slate-400 mb-5">{tr.duration} • {tr.chapters} Chapters</div>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {tr.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7dc535] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    <Link href="/registration" className="w-full py-3 px-4 rounded-xl btn-brand text-sm font-bold flex items-center justify-center gap-2">
                      Enroll Now <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href={tr.href} className="w-full py-2 text-center text-xs text-slate-400 hover:text-[#7dc535] block transition-colors">
                      View Full Syllabus →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <PricingPlans />
    </div>
  );
}
