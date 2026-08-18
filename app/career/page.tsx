'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Briefcase, Send, CheckCircle2, Heart, 
  Sparkles, Coffee, Code2, Users, ArrowRight 
} from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import SectionHeader from '../../components/ui/SectionHeader';

const perks = [
  { icon: Code2, title: 'Cutting-Edge Stacks', desc: 'Work with Next.js, .NET Core, Spring Boot, Microservices, and Cloud CI/CD.' },
  { icon: Users, title: 'Mentorship & Growth', desc: 'Direct collaboration with senior architects and ongoing skill certifications.' },
  { icon: Heart, title: 'Inclusive Culture', desc: 'Collaborative environment built on mutual respect, innovation, and meritocracy.' },
  { icon: Coffee, title: 'Work-Life Harmony', desc: 'Supportive team dynamics, flexible arrangements, and employee wellbeing support.' },
];

export default function CareerPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: 'Full-Stack Developer', portfolio: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', position: 'Full-Stack Developer', portfolio: '', notes: '' });
    }, 4000);
  };

  return (
    <div>
      <BreadcrumbHero
        title="Careers at Tech Eureka"
        subtitle="Join our passionate team of software developers, quality assurance engineers, and technology leaders."
        breadcrumbs={[{ label: 'Career' }]}
        badge="Join Our Mission"
        bgImage="/images/pages/about-7.jpg"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-7.jpg" alt="Careers at Tech Eureka" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Workplace Excellence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Welcome to Our Career Page
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                At Tech Eureka, we believe in fostering a dynamic and inclusive workplace where our employees can thrive and grow. We are always on the lookout for talented individuals who share our passion for excellence and can bring fresh ideas to the table.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                Although we continuously manage our pipeline, we encourage proactive applications. We value diversity and are committed to equal employment opportunities. If you believe you have the skills and qualifications we are looking for, submit your resume below.
              </p>
            </div>
          </div>

          {/* Perks Grid */}
          <SectionHeader badge="Why Tech Eureka" title="Life & Culture at Tech Eureka" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col gap-3">
                  <div className="p-3 rounded-xl bg-[#7dc535]/15 text-[#7dc535] self-start">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">{perk.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CV Submission Form */}
          <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#7dc535]/30 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white">Submit Your Profile &amp; CV</h3>
              <p className="text-xs text-slate-300 mt-1">We keep all applications on file and review them as positions open.</p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#7dc535]/15 border border-[#7dc535]/50 text-[#7dc535] flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! Your application has been logged with our HR team. We will review your profile.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1XXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Role of Interest</label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070d1e] border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                  >
                    <option value="Full-Stack Developer">Full-Stack Developer (Next.js / .NET)</option>
                    <option value="SQA Automation Engineer">SQA Automation Engineer</option>
                    <option value="Spring Boot Backend Engineer">Spring Boot Backend Engineer</option>
                    <option value="Mobile App Developer">Mobile App Developer (Flutter / React Native)</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Business Development">Business Development & Sales</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">LinkedIn / GitHub / Portfolio URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/... or https://github.com/..."
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Cover Letter / Professional Summary</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your experience, tech stack, and what you're looking for..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl btn-brand text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#7dc535]/25"
              >
                <Send className="w-4 h-4" />
                <span>Submit Application</span>
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
