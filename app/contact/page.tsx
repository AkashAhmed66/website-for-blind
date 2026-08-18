'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Sparkles } from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div>
      <BreadcrumbHero
        title="Contact Us"
        subtitle="Get in touch with our enterprise software architects, QA specialists, and product advisors. We're here to assist you."
        breadcrumbs={[{ label: 'Contact' }]}
        badge="Reach Out Today"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Interactive Map */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 aspect-[21/9] w-full bg-slate-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.678649932759!2d90.3954058340374!3d23.794774842091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1694691954701!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Send Us a Message</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">How Can We Help You?</h2>
              <p className="text-sm text-slate-300 mb-8">Fill out the form below and our team will respond within 24 hours.</p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#7dc535]/15 border border-[#7dc535]/50 text-[#7dc535] flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been received. Our team will get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Project inquiry, demo request, training..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Message *</label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Describe your requirements, project scope, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl btn-brand text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#7dc535]/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#7dc535]/30 space-y-6">
                <h3 className="text-2xl font-bold text-white">Contact Details</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We are always here to assist you with any questions or concerns you may have. To reach out, please call us, visit our office, or write an email.
                </p>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#7dc535]/15 text-[#7dc535] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">Head Office</div>
                      <div className="text-sm font-medium text-white">Banani, Dhaka, Bangladesh</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#7dc535]/15 text-[#7dc535] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">Hotlines</div>
                      <div className="text-sm font-medium text-white">+8801326892437, +8801326892435</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#7dc535]/15 text-[#7dc535] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">Email Address</div>
                      <div className="text-sm font-medium text-white">info@TechEureka.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#7dc535]/15 text-[#7dc535] shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">Website</div>
                      <div className="text-sm font-medium text-white">www.techeureka.com</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                  <span className="font-bold text-[#7dc535]">TGCL Group:</span> Tech Eureka is the proud software division of Techno Green Carbon Ltd.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
