import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Calendar, ShieldCheck } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';
import PricingPlans from '../../../components/home/PricingPlans';

export const metadata = {
  title: "SQA Training (Automation) - Tech Eureka",
  description: "Intensive 3-month SQA Test Automation training covering Selenium, Appium, JMeter, API testing, CI/CD — Friday & Saturday batches."
};

const chapters = [
  {
    num: 'Chapter 1',
    title: 'Testing Fundamentals',
    topics: [
      'What Is Testing?', 'Why Is Testing Necessary?',
      'Testing Contributions To Success — QA And Testing',
      'Errors, Defects, And Failures — Root Causes And Effects',
      'Seven Testing Principles', 'Test Process In Context',
      'Test Activities And Tasks — Test Work Products', 'Defect Life Cycle'
    ]
  },
  {
    num: 'Chapter 2',
    title: 'Testing Throughout the SDLC',
    topics: [
      'Software/System Development Life Cycle (SDLC)',
      'Waterfall Life Cycle', 'Agile Life Cycle',
      'V-Model of Testing and Software Testing Life Cycle (STLC)',
      'Software Testing Categories', 'Categories of Test Techniques',
      'Black-Box Test Techniques (Equivalence Partitioning, Boundary Value Analysis)',
      'White-Box & Experience-Based Test Techniques'
    ]
  },
  {
    num: 'Chapter 3',
    title: 'Test Management: Test Plan & Test Cases',
    topics: [
      'Test Plan: Purpose and Content', 'Entry Criteria and Exit Criteria',
      'Test Case Design', 'Test Scenario', 'Test Case Specifications',
      'Bug Tracking Software Basic'
    ]
  },
  {
    num: 'Chapter 4',
    title: 'Java Programming for QA',
    topics: [
      'Java Basic & Package Concept', 'Variables and Object Creation in Java',
      'Java Access Modifiers & Methods', 'Java Encapsulation',
      'Java Constructor/Destructor', 'TestNG Integration with Selenium'
    ]
  },
  {
    num: 'Chapter 5',
    title: 'Selenium WebDriver',
    topics: [
      'Introduction to Selenium WebDriver', 'Environment Setup & First Script',
      'Cross Browser Testing using Selenium', 'Git Version Control Basics',
      'Sessions, Parallel run and Dependency in Selenium',
      'Apache Maven & Java Projects', 'TestNG Framework for Automation',
      'TestNG Annotations & Data Providers', 'Data driven testing with Apache POI',
      'Page Object Model (POM)', 'Parametrization with XML & Data Providers',
      'PDF, Email and Screenshot Reports', 'Listeners, Alert & Popup Handling',
      'Database Testing using Selenium', 'Cookie Handling in Selenium'
    ]
  },
  {
    num: 'Chapter 6',
    title: 'BDD — Cucumber & Gherkin',
    topics: ['Behavior Driven Development (BDD)', 'Cucumber Framework', 'Gherkin Language']
  },
  {
    num: 'Chapter 7',
    title: 'App Automation (Appium)',
    topics: [
      'Introduction to Mobile Automation Testing', 'Selenium 3.0 and APIs',
      'Automation for iOS and Android Devices', 'Running scripts on Emulators & Real Devices',
      'Understanding API Levels and Appium Concepts',
      'Client/Server Architecture, Desired Capabilities, Appium Server',
      'Installing JDK, Maven, Android SDK', 'UI Automator Viewer',
      'Object Locators and Techniques (XPath, ClassName, UIAutomator)',
      'Appium Inspector: Recording & Locating Elements',
      'Native App, Hybrid App & Web App Testing',
      'TouchActions and User Gesture Handling'
    ]
  },
  {
    num: 'Chapter 8',
    title: 'API Automation',
    topics: ['Postman for API Testing', 'Rest Assured (Java Library for API)', 'API Chaining & Auth']
  },
  {
    num: 'Chapter 9',
    title: 'Database Testing',
    topics: ['SQL Query Fundamentals for QA', 'Database Validation Strategies', 'Query Assertions in Automation']
  },
  {
    num: 'Chapter 10',
    title: 'End-to-End Load Testing with JMeter',
    topics: [
      'Plugin setup', 'Report analysis', 'Load Test Algorithm',
      'Real Load Test Case Scenario & Scripting',
      'Post BeanShell & Pre BeanShell scripting'
    ]
  },
  {
    num: 'Chapter 11',
    title: 'End-to-End Automation Framework & CI/CD',
    topics: [
      'Design web, app & API automation in same architecture',
      'Git setup & Uses', 'For CI/CD — GitHub Actions'
    ]
  }
];

export default function SQATrainingPage() {
  return (
    <div>
      <BreadcrumbHero
        title="SQA Training (Automation)"
        subtitle="Intensive 3-month professional SQA Test Automation training. From fundamentals to CI/CD pipelines — industry-ready skills."
        breadcrumbs={[
          { label: 'Trainings', href: '/trainings' },
          { label: 'SQA Training' }
        ]}
        badge="Highest Placement Rate"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Overview Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-4.jpg" alt="SQA Training" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Industry Standard QA Automation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                SQA Training (Automation)
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
                Our SQA Automation training program transforms you into an industry-ready quality assurance engineer. Covering the complete spectrum from manual testing fundamentals to advanced end-to-end automation with Selenium, Appium, JMeter, and CI/CD pipelines — with real project experience throughout.
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
          <SectionHeader badge="Course Curriculum" title="Complete 11-Chapter Syllabus" subtitle="Industry-aligned, mentor-driven curriculum built around real enterprise QA workflows." />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/40 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7dc535] bg-[#7dc535]/10 px-2 py-0.5 rounded">{ch.num}</span>
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
              Enroll in SQA Automation Training <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <PricingPlans />
    </div>
  );
}
