import React from 'react';
import Link from 'next/link';
import { 
  Check, Sparkles, ArrowRight, Calendar, 
  Clock, ShieldCheck, BookOpen, Layers 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const plans = [
  {
    id: 'sqa',
    title: 'SQA Training (Automation)',
    tag: 'Highest Placement Rate',
    price: '25,000',
    currency: '৳',
    duration: '3 Months Intensive',
    schedule: 'Friday & Saturday',
    href: '/trainings/sqa-training',
    enrollHref: '/registration',
    features: [
      'Testing Fundamentals & SDLC/STLC',
      'Java OOP & TestNG Framework',
      'Selenium WebDriver 3.0 & POM',
      'Mobile Automation with Appium',
      'API Testing with Postman & RestAssured',
      'End-to-End Load Testing with JMeter',
      'CI/CD Pipeline with Git Actions',
      'Mock Interviews & Resume Assistance'
    ],
    popular: true
  },
  {
    id: 'dotnet',
    title: 'Dot.Net Core Enterprise Training',
    tag: 'Enterprise Focus',
    price: '25,000',
    currency: '৳',
    duration: '3 Months Intensive',
    schedule: 'Friday & Saturday',
    href: '/trainings/dot-net-training',
    enrollHref: '/registration',
    features: [
      'ASP.NET Core & .NET Framework Deep Dive',
      'MVC Architectural Design Pattern',
      'Entity Framework Core (ORM) & Migrations',
      'Microsoft SQL Server (T-SQL, Stored Procs)',
      'Authentication & Role-based Authorization',
      'Razor View Engine & Material Design UI',
      'Server Deployment & Web API Publishing',
      'Real-world eCommerce & ERP Capstone'
    ],
    popular: false
  },
  {
    id: 'springboot',
    title: 'Spring Boot & Microservices',
    tag: 'Modern Backend',
    price: '25,000',
    currency: '৳',
    duration: '3 Months Intensive',
    schedule: 'Friday & Saturday',
    href: '/trainings/spring-boot-training',
    enrollHref: '/registration',
    features: [
      'Spring Boot Core Architecture & Actuator',
      'RESTful Web Services & OpenAPI Docs',
      'Spring Data JPA & Hibernate ORM',
      'Spring Security & JWT Authentication',
      'Microservices Design Patterns & API Gateway',
      'Circuit Breaker & Load Balancing',
      'Dockerizing Spring Boot Applications',
      'Production Employment Portal Project'
    ],
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <section className="py-24 bg-[#070d1e] relative overflow-hidden border-b border-white/10">
      {/* Glow mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7dc535]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Professional Up-Skilling"
          title="Career-Defining Training Packages"
          subtitle="Transform into an industry-ready engineer with intensive hands-on coaching, real project architectures, and mentorship from senior developers."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'glass-panel-glow border-2 border-[#7dc535] shadow-2xl shadow-[#7dc535]/15 md:-translate-y-2'
                  : 'glass-panel border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-brand text-[11px] font-bold tracking-wider uppercase shadow-lg shadow-[#7dc535]/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Recommended</span>
                </div>
              )}

              <div>
                <div className="text-xs font-semibold text-[#7dc535] uppercase tracking-wider mb-2">
                  {plan.tag}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {plan.title}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 my-6 pb-6 border-b border-white/10">
                  <span className="text-2xl font-bold text-[#7dc535]">{plan.currency}</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-medium ml-1">/ full course</span>
                </div>

                {/* Timing Info */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#7dc535]" />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#7dc535]" />
                    <span>{plan.schedule}</span>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#7dc535] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-white/5">
                <Link
                  href={plan.enrollHref}
                  className={`w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'btn-brand shadow-xl'
                      : 'bg-white/10 hover:bg-[#7dc535] text-white hover:text-black'
                  }`}
                >
                  <span>Enroll in Course</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={plan.href}
                  className="w-full py-2 text-center text-xs text-slate-400 hover:text-[#7dc535] font-medium block transition-colors"
                >
                  View Full Course Syllabus →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
