import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Calendar, Code2 } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';
import PricingPlans from '../../../components/home/PricingPlans';

export const metadata = {
  title: "Dot.Net Core Enterprise Training - Tech Eureka",
  description: "3-month intensive ASP.NET Core MVC enterprise training covering EF Core, MSSQL, Security, Deployment, and real-world project work."
};

const chapters = [
  {
    num: '1', title: 'Introduction to .NET Framework and ASP.NET Core',
    topics: ['Introduction to ASP.NET Core and .NET Framework', 'Required Set up (software installation and environment)', 'Top Level overview of ASP.NET Core', 'Introduction with Visual Studio 2022']
  },
  {
    num: '2', title: 'Introduction to MVC Framework & .NET Project Architecture',
    topics: ['Introduction to MVC pattern', '.NET Core MVC project architecture', 'Component of MVC design pattern', 'Introduction to Model, View and Controller and their responsibility', '.NET MVC and its features', 'How an application works?']
  },
  {
    num: '3', title: 'Web Application Architecture, Request & Response',
    topics: ['Introduction to Web application architecture', 'HTML and CSS', 'UI Design using Bootstrap and Material', 'Introduction to Javascript and jQuery']
  },
  {
    num: '4', title: 'Razor View Engine',
    topics: ['Razor View Engine, Razor Syntax', 'Symbol to transition from HTML to C#', 'Implicit, Explicit Razor expressions and transitions', 'Expression encoding']
  },
  {
    num: '5', title: 'ASP.NET Core Controller, View and Model',
    topics: ['Controller Responsibility & Action Methods', 'ActionResult vs IActionResult', 'ViewResult, JsonResult, ContentResult, FileResult variants', 'Dependency Injection in Controller (Constructor & Action Injection)', 'Model binding — Form values, Route values, Query strings', 'Customize Model Binding With Attributes', 'Razor Views, Layout, RenderBody, RenderSection', 'ViewBag, ViewData, TempData']
  },
  {
    num: '6', title: 'ORM in ASP.NET Core — Entity Framework Core',
    topics: ['What is ORM?', 'Introduction to Entity Framework Core', 'Conceptual Model, Storage Model, Mapping', 'Create the Model & Register context with dependency injection', 'Add Migration and Create Database', 'Synchronous vs. Asynchronous code']
  },
  {
    num: '7', title: 'Introduction to MSSQL and SQL Server',
    topics: ['Intro to Microsoft SQL Server 2014', 'Introduction to T-SQL Querying', 'SELECT Queries, Querying Multiple Tables', 'Sorting and Filtering Data', 'DML (INSERT, UPDATE, DELETE)', 'Built-In Functions, Grouping & Aggregating Data', 'Sub-queries, Table Expressions, Set Operators', 'Window Ranking, Pivoting & Grouping Sets', 'Stored Procedures, T-SQL Programming', 'Error Handling & Transactions (Modules 1–18)']
  },
  {
    num: '8', title: 'Security, Authentication & Authorization',
    topics: ['Authentication in ASP.NET Core', 'Identity on ASP.NET Core', 'Configure Identity', 'Introduction to Authorization', 'Simple, Role-based, Claims-Based Authorization', 'Custom Policy-Based Authorization', 'Resource Based Authorization', 'View Based Authorization']
  },
  {
    num: '9', title: 'ASP.NET MVC Core Application Deployment',
    topics: ['Deploy Web Application in Remote Server', 'Publishing and packaging Web API', 'Configuring Server', 'Deploying the Application and Go Live']
  },
  {
    num: '10', title: 'Project Work with ASP.NET Core MVC',
    topics: ['Project plan, approach and methodology', 'Setting up the Project environment', 'Conceptualization of requirements and develop requirements specification', 'Designing solution in detail', 'Development based on the design', 'Testing and debugging the Application', 'Deploy Application to server']
  },
  {
    num: '11', title: 'Real Life Project (Complete)',
    topics: ['E-commerce type project', 'Employment management system']
  }
];

export default function DotNetTrainingPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Dot.Net Core Enterprise Training"
        subtitle="3-month intensive ASP.NET Core MVC enterprise development training — from architecture to real-world project deployment."
        breadcrumbs={[
          { label: 'Trainings', href: '/trainings' },
          { label: 'Dot.Net Training' }
        ]}
        badge="Enterprise Focus"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Overview Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-6.jpg" alt="Dot Net Training" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5" />
                <span>Enterprise ASP.NET Core Training</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Dot.Net Core Enterprise Training
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
                Master enterprise-level ASP.NET Core MVC application development. This hands-on program covers MVC architecture, Razor View Engine, Entity Framework Core, Microsoft SQL Server (18 modules), Role-Based Security, Deployment, and culminates in complete real-world eCommerce and employment management projects.
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

          {/* Full Syllabus */}
          <SectionHeader badge="Course Curriculum" title="Complete 11-Module Syllabus" subtitle="From ASP.NET fundamentals to production deployment — built for professional developers." />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/40 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7dc535] bg-[#7dc535]/10 px-2 py-0.5 rounded">Module {ch.num}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3">{ch.title}</h3>
                <ul className="space-y-1.5">
                  {ch.topics.map((topic, tidx) => (
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
              Enroll in Dot.Net Core Training <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <PricingPlans />
    </div>
  );
}
