'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, CheckCircle2, ArrowRight, 
  Sparkles, Calendar, Clock, ShieldCheck, UserCheck 
} from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: 'male',
    currentStatus: 'student',
    degree: '',
    institute: '',
    training_program: 'SQA Training (Automation)',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <BreadcrumbHero
        title="Training Registration"
        subtitle="Enroll in our industry-standard 3-month certification programs in SQA Automation, .NET Core Enterprise, or Spring Boot Microservices."
        breadcrumbs={[{ label: 'Registration' }]}
        badge="Career Acceleration"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#7dc535]/30 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#7dc535]/20 text-[#7dc535] flex items-center justify-center mx-auto border-2 border-[#7dc535]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Registration Successful!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>! Your application for <span className="text-[#7dc535] font-bold">{formData.training_program}</span> has been received. Our course coordinator will call you at <span className="text-white font-bold">{formData.phone}</span> with orientation and payment details.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <Link href="/portal/payments" className="px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                    View Payment Instructions
                  </Link>
                  <Link href="/portal/students" className="px-6 py-3 rounded-xl btn-secondary-glow text-sm font-medium">
                    Preview Student Portal
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Spring/Autumn 2026 Batches Open</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Enroll in a Professional Training Program</h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2">
                    Classes held every Friday &amp; Saturday • 3 Months Duration • ৳25,000 per track
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="01XXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Gender *</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070d1e] border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Current Status & Degree */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Current Status *</label>
                      <select
                        value={formData.currentStatus}
                        onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070d1e] border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                      >
                        <option value="student">Student</option>
                        <option value="job holder">Job Holder / Professional</option>
                        <option value="job seeker">Job Seeker</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Course / Degree *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. BSc in CSE, BBA, Diploma in IT"
                        value={formData.degree}
                        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 4: Institute & Training Program */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Institute / University *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dhaka University, BRAC, AIUB, BUET"
                        value={formData.institute}
                        onChange={(e) => setFormData({ ...formData, institute: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Training Program *</label>
                      <select
                        value={formData.training_program}
                        onChange={(e) => setFormData({ ...formData, training_program: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070d1e] border border-[#7dc535] text-[#7dc535] font-bold text-sm focus:outline-none"
                      >
                        <option value="SQA Training (Automation)">SQA Training (Automation) — ৳25,000</option>
                        <option value="Dot.Net Training">Dot.Net Training (ASP.NET Core MVC) — ৳25,000</option>
                        <option value="Spring Boot Training">Spring Boot & Microservices — ৳25,000</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Address */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Present Address *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Enter your current address (Area, City)"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl btn-brand text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#7dc535]/25"
                  >
                    <span>Complete Enrollment Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
