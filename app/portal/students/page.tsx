'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, Video, FileCode, Award, CheckCircle2, 
  Clock, Download, Calendar, ExternalLink, Sparkles 
} from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';

const courseModules = [
  { id: 1, title: 'Chapter 1: Testing Fundamentals & Quality Assurance', status: 'Completed', date: 'Week 1', recordingUrl: '#', resources: '3 files' },
  { id: 2, title: 'Chapter 2: SDLC & STLC Test Techniques (Black/White Box)', status: 'Completed', date: 'Week 2', recordingUrl: '#', resources: '4 files' },
  { id: 3, title: 'Chapter 3: Test Plan & Test Case Development in Jira', status: 'Completed', date: 'Week 3', recordingUrl: '#', resources: '2 files' },
  { id: 4, title: 'Chapter 4: Java OOP, Data Structures & TestNG', status: 'Completed', date: 'Week 4', recordingUrl: '#', resources: '5 files' },
  { id: 5, title: 'Chapter 5: Selenium WebDriver & Page Object Model (POM)', status: 'In Progress', date: 'Week 5 (Current)', recordingUrl: '#', resources: '6 files' },
  { id: 6, title: 'Chapter 6: BDD Framework with Cucumber & Gherkin', status: 'Upcoming', date: 'Week 6', recordingUrl: '#', resources: 'Pending' },
  { id: 7, title: 'Chapter 7: Mobile App Automation with Appium', status: 'Upcoming', date: 'Week 7-8', recordingUrl: '#', resources: 'Pending' },
  { id: 8, title: 'Chapter 8: API Automation with Postman & RestAssured', status: 'Upcoming', date: 'Week 9', recordingUrl: '#', resources: 'Pending' },
  { id: 9, title: 'Chapter 9: Database Testing with SQL Querying', status: 'Upcoming', date: 'Week 10', recordingUrl: '#', resources: 'Pending' },
  { id: 10, title: 'Chapter 10: End-to-End Load Testing with JMeter', status: 'Upcoming', date: 'Week 11', recordingUrl: '#', resources: 'Pending' },
  { id: 11, title: 'Chapter 11: CI/CD Automation with GitHub Actions & Capstone', status: 'Upcoming', date: 'Week 12', recordingUrl: '#', resources: 'Pending' },
];

export default function StudentPortalPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Student Learning Portal"
        subtitle="Access your active course materials, live class Zoom links, hands-on lab code repositories, and certification progress."
        breadcrumbs={[
          { label: 'Portal' },
          { label: 'Student Dashboard' }
        ]}
        badge="Batch 2026-A Enrolled"
      />

      <section className="py-16 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Top Course Status Card */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-[#7dc535]/30 shadow-2xl mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7dc535] bg-[#7dc535]/15 px-3 py-1 rounded-full">
                  Active Enrollment
                </span>
                <span className="text-xs text-slate-400">Student ID: TE-SQA-2026-084</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">SQA Training (Automation)</h2>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                Instructor: <span className="text-white font-semibold">Monjurul Alam</span> • Class Time: <span className="text-white font-semibold">Friday &amp; Saturday, 8:00 PM – 10:00 PM</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <a
                href="#live"
                className="px-6 py-3 rounded-xl btn-brand text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Video className="w-4 h-4" />
                <span>Join Next Live Class</span>
              </a>
              <Link
                href="/portal/payments"
                className="px-6 py-3 rounded-xl btn-secondary-glow text-xs sm:text-sm font-medium"
              >
                Payment Receipts
              </Link>
            </div>
          </div>

          {/* Progress & Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Syllabus Timeline */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Course Curriculum &amp; Recordings</h3>

              {courseModules.map((mod) => (
                <div
                  key={mod.id}
                  className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    mod.status === 'In Progress'
                      ? 'glass-panel-glow border-[#7dc535]/50 bg-[#7dc535]/5'
                      : 'glass-panel border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        mod.status === 'Completed'
                          ? 'bg-[#7dc535]/15 text-[#7dc535]'
                          : mod.status === 'In Progress'
                          ? 'bg-sky-500/15 text-sky-400'
                          : 'bg-white/5 text-slate-500'
                      }`}>
                        {mod.status}
                      </span>
                      <span className="text-xs text-slate-400">{mod.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{mod.title}</h4>
                    <div className="text-[11px] text-slate-400">Class Resources: {mod.resources}</div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    {mod.status !== 'Upcoming' && (
                      <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#7dc535] text-slate-200 hover:text-black text-xs font-semibold flex items-center gap-1.5 transition-all">
                        <Video className="w-3.5 h-3.5" />
                        <span>Recording</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Quick Resources & Certificate Status */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white">Course Progress</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300 font-semibold">
                    <span>Course Completion</span>
                    <span className="text-[#7dc535]">45%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#7dc535] rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="text-[11px] text-slate-400">5 of 11 chapters completed</div>
                </div>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white">Student Resources</h3>
                <div className="space-y-3">
                  <a href="#git" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between text-xs text-slate-300 transition-colors">
                    <span className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-[#7dc535]" />
                      <span>Class GitHub Repository</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                  <a href="#lab" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between text-xs text-slate-300 transition-colors">
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-sky-400" />
                      <span>Selenium &amp; Appium Lab Setups</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                  <a href="#zoom" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between text-xs text-slate-300 transition-colors">
                    <span className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-purple-400" />
                      <span>Zoom Meeting Link (Recurring)</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-2 text-center">
                <Award className="w-10 h-10 text-amber-400 mx-auto" />
                <h3 className="text-sm font-bold text-white">Verified Certificate</h3>
                <p className="text-xs text-slate-400">Issued upon 80%+ attendance and successful Capstone project defense.</p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
