'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CreditCard, ShieldCheck, CheckCircle2, ArrowRight, 
  Download, Building, PhoneCall, Copy, Sparkles 
} from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';

export default function PaymentsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 3000);
  };

  return (
    <div>
      <BreadcrumbHero
        title="Payment & Billing Portal"
        subtitle="Official payment gateways and instructions for course enrollment fees and enterprise software subscriptions."
        breadcrumbs={[
          { label: 'Portal' },
          { label: 'Payments' }
        ]}
        badge="Secure Transaction Center"
      />

      <section className="py-16 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Fee Overview Card */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-[#7dc535]/30 shadow-2xl mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs text-[#7dc535] font-bold uppercase tracking-wider">Professional Training Track</span>
                <h2 className="text-2xl font-black text-white mt-1">Course Tuition: ৳25,000 BDT</h2>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#7dc535]/15 text-[#7dc535] font-bold border border-[#7dc535]/30">
                Installment Options Available
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
              After making the payment via bKash Merchant, Nagad, or Direct Bank Transfer, please send your Transaction ID (TrxID) and Registration Phone Number to <span className="text-[#7dc535] font-bold">+8801326892437</span> or <span className="text-[#7dc535] font-bold">info@TechEureka.com</span> for instant confirmation.
            </p>
          </div>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* bKash */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-pink-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">bKash Merchant / Personal</span>
                  <CreditCard className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">bKash Payment</h3>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 mb-4">
                  <div className="text-[11px] text-slate-400">Account Number:</div>
                  <div className="text-sm font-mono font-bold text-white flex items-center justify-between">
                    <span>01326892437</span>
                    <button
                      onClick={() => copyToClipboard('01326892437', 'bkash')}
                      className="text-xs text-[#7dc535] hover:underline flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied === 'bkash' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                  <li>Go to bKash &gt; Send Money / Payment</li>
                  <li>Enter amount: ৳25,000 (or ৳15,000 1st installment)</li>
                  <li>Reference: Your Name / Phone Number</li>
                </ul>
              </div>
            </div>

            {/* Nagad */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-orange-500/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Nagad Gateway</span>
                  <CreditCard className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Nagad Payment</h3>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 mb-4">
                  <div className="text-[11px] text-slate-400">Account Number:</div>
                  <div className="text-sm font-mono font-bold text-white flex items-center justify-between">
                    <span>01326892435</span>
                    <button
                      onClick={() => copyToClipboard('01326892435', 'nagad')}
                      className="text-xs text-[#7dc535] hover:underline flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied === 'nagad' ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                  <li>Go to Nagad app &gt; Send Money</li>
                  <li>Enter amount: ৳25,000</li>
                  <li>Save TrxID for confirmation</li>
                </ul>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-[#7dc535]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#7dc535] uppercase tracking-wider">Bank Wire / BEFTN</span>
                  <Building className="w-5 h-5 text-[#7dc535]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Corporate Bank Account</h3>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 text-xs text-slate-300 mb-4">
                  <div><span className="text-slate-400">Bank:</span> Dutch-Bangla Bank Ltd. / City Bank</div>
                  <div><span className="text-slate-400">Account Name:</span> Techno Green Carbon Ltd.</div>
                  <div><span className="text-slate-400">Branch:</span> Banani Branch, Dhaka</div>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                  <li>BEFTN / NPSB / Direct Deposit</li>
                  <li>Attach deposit slip photo to email</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Hotline Confirmation Box */}
          <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#7dc535]/15 text-[#7dc535]">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Need Assistance or Invoice Generation?</h4>
                <p className="text-xs text-slate-400">Call our accounts department directly at +8801326892437</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl btn-brand text-xs font-bold shrink-0 shadow-lg"
            >
              Contact Accounts Team
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
