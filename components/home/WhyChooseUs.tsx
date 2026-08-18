import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, Layers, ShieldCheck, Clock, 
  ArrowRight, CheckCircle2, Award 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#070d1e] relative overflow-hidden border-b border-white/10">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#7dc535]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60 aspect-[4/3] sm:aspect-[16/10] group">
              <Image 
                src="/images/pages/about-9.jpg" 
                alt="Tech Eureka Team at Work" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent"></div>
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel-glow border border-[#7dc535]/30 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#7dc535] text-slate-950">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Quality-First Execution</div>
                      <div className="text-xs text-slate-300">Certified SQA and Enterprise Architecture</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#7dc535] bg-[#7dc535]/10 px-2.5 py-1 rounded-full font-bold">
                    4+ Yrs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Value Propositions */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7dc535] animate-pulse"></span>
              <span>Why Partner With Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Know More About Our Company &amp; Values
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We are a top-tier software and tech consulting firm, dedicated to innovation and long-term client success. Our expertise lies in crafting tailored, advanced solutions that boost operational efficiency, protect business data, and accelerate scalable growth.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Feature 1 */}
              <div className="p-4 rounded-2xl glass-panel border border-white/5 flex items-start gap-4 hover:border-[#7dc535]/30 transition-all">
                <div className="p-2.5 rounded-xl bg-[#7dc535]/15 text-[#7dc535] shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Tons of Built-in Features</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Rich modules, unparalleled versatility, seamless third-party ERP integration, and zero-compromise scalability.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-4 rounded-2xl glass-panel border border-white/5 flex items-start gap-4 hover:border-[#7dc535]/30 transition-all">
                <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">PowerPack Architecture</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dynamic, striking, highly adaptable technology stacks that elevate your brand presence and productivity.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-4 rounded-2xl glass-panel border border-white/5 flex items-start gap-4 hover:border-[#7dc535]/30 transition-all">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Day &amp; Night Technical Aid</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Round-the-clock support for continuous operational uptime and immediate emergency assistance.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
