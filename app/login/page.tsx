'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, User, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (role === 'admin') {
        router.push('/portal/admin');
      } else {
        router.push('/portal/students');
      }
    }, 1000);
  };

  return (
    <div>
      <BreadcrumbHero
        title="Member & Student Login"
        subtitle="Access your enrolled training curriculum, live class recordings, ERP client portals, and course certifications."
        breadcrumbs={[{ label: 'Login' }]}
        badge="Secure Member Area"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-md mx-auto px-4 sm:px-6 relative z-10">

          <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#7dc535]/30 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#7dc535]/15 text-[#7dc535] flex items-center justify-center mx-auto mb-4 border border-[#7dc535]/30">
                <Lock className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">Welcome Back</h2>
              <p className="text-xs text-slate-400 mt-1">Sign in to your Tech Eureka account</p>
            </div>

            {/* Role Switcher */}
            <div className="flex p-1 rounded-xl bg-white/5 border border-white/10 mb-6">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  role === 'student'
                    ? 'bg-[#7dc535] text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Student / Trainee
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  role === 'admin'
                    ? 'bg-[#7dc535] text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Admin / Enterprise
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">User Name / Email *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your username or email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded bg-white/5 border-white/10 text-[#7dc535] focus:ring-0" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="text-[#7dc535] hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl btn-brand text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#7dc535]/25 disabled:opacity-50"
              >
                <span>{isLoading ? 'Authenticating...' : `Sign in as ${role === 'admin' ? 'Administrator' : 'Student'}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-400">
              Don&apos;t have an account?{' '}
              <Link href="/registration" className="text-[#7dc535] font-bold hover:underline">
                Register for a Training Course
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
