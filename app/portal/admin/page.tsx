'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, DollarSign, Database, BookOpen, 
  ShieldCheck, Activity, CheckCircle2, Search, 
  ArrowUpRight, Download, Filter, Layers 
} from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';

const recentRegistrations = [
  { id: 'REG-2026-101', name: 'Md. Tanvir Ahmed', course: 'SQA Training (Automation)', phone: '+8801711223344', status: 'Confirmed', date: '2026-08-17' },
  { id: 'REG-2026-102', name: 'Farhana Kabir', course: 'Dot.Net Training', phone: '+8801819887766', status: 'Pending Payment', date: '2026-08-16' },
  { id: 'REG-2026-103', name: 'Shakil Mahmud', course: 'Spring Boot Training', phone: '+8801912334455', status: 'Confirmed', date: '2026-08-15' },
  { id: 'REG-2026-104', name: 'Sadia Sultana', course: 'SQA Training (Automation)', phone: '+8801615556677', status: 'Confirmed', date: '2026-08-14' },
  { id: 'REG-2026-105', name: 'Arifur Rahman', course: 'Dot.Net Training', phone: '+8801326892437', status: 'In Review', date: '2026-08-14' },
];

const erpDeployments = [
  { name: 'Pharma Eureka ERP', client: 'Beximco / Apex Pharma Cluster', status: 'Active (21 CFR Part II)', uptime: '99.98%' },
  { name: 'Con Eureka ERP', client: 'Chemical & Cosmetics Unit 4', status: 'Active (BSTI Compliant)', uptime: '99.95%' },
  { name: 'Leather Eureka ERP', client: 'Savar Tannery Estate Hub', status: 'Active (Batch Sync)', uptime: '100%' },
  { name: 'HRMS Cloud Instance', client: 'TGCL Corporate Headquarters', status: 'Active (Payroll Mode)', uptime: '99.99%' },
];

export default function AdminPortalPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRegistrations = recentRegistrations.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <BreadcrumbHero
        title="Admin Management Portal"
        subtitle="Live administrative control center for student enrollments, ERP product telemetries, and operational status."
        breadcrumbs={[
          { label: 'Portal' },
          { label: 'Admin Dashboard' }
        ]}
        badge="Internal Management Console"
      />

      <section className="py-16 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium">Active Students</span>
                <div className="text-3xl font-black text-white mt-1">142</div>
                <div className="text-[11px] text-[#7dc535] mt-1 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+18 this month</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#7dc535]/15 text-[#7dc535]">
                <Users className="w-6 h-6" />
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium">Live ERP Instances</span>
                <div className="text-3xl font-black text-white mt-1">24</div>
                <div className="text-[11px] text-sky-400 mt-1">100% Operational Uptime</div>
              </div>
              <div className="p-3 rounded-xl bg-sky-500/15 text-sky-400">
                <Database className="w-6 h-6" />
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium">Monthly Course Revenue</span>
                <div className="text-3xl font-black text-white mt-1">৳3.55M</div>
                <div className="text-[11px] text-[#7dc535] mt-1">Batch 2026 Collection</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium">Active QA Pipelines</span>
                <div className="text-3xl font-black text-white mt-1">58</div>
                <div className="text-[11px] text-amber-400 mt-1">JMeter &amp; Selenium Jobs</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400">
                <Activity className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Student Registrations Table */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Recent Training Registrations</h3>
                  <p className="text-xs text-slate-400">Manage new student enrollments across all 3 tracks</p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search applicant or course..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#7dc535]"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="text-slate-400 border-b border-white/10 pb-2">
                    <tr>
                      <th className="pb-3 font-semibold">ID</th>
                      <th className="pb-3 font-semibold">Student Name</th>
                      <th className="pb-3 font-semibold">Course Program</th>
                      <th className="pb-3 font-semibold">Phone</th>
                      <th className="pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {filteredRegistrations.map((reg) => (
                      <tr key={reg.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5 font-mono text-[#7dc535]">{reg.id}</td>
                        <td className="py-3.5 font-bold text-white">{reg.name}</td>
                        <td className="py-3.5">{reg.course}</td>
                        <td className="py-3.5">{reg.phone}</td>
                        <td className="py-3.5">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                            reg.status === 'Confirmed'
                              ? 'bg-[#7dc535]/15 text-[#7dc535]'
                              : reg.status === 'Pending Payment'
                              ? 'bg-amber-500/15 text-amber-400'
                              : 'bg-white/10 text-slate-300'
                          }`}>
                            {reg.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Live ERP Instances Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white">Live ERP Deployments</h3>
              <p className="text-xs text-slate-400">Active server heartbeats &amp; client telemetry</p>

              <div className="space-y-4 pt-2">
                {erpDeployments.map((inst, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{inst.name}</span>
                      <span className="text-[10px] font-mono text-[#7dc535] font-bold">{inst.uptime}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">{inst.client}</div>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7dc535] animate-pulse"></span>
                      <span>{inst.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
