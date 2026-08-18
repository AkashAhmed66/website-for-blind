'use client';

import React, { useState } from 'react';
import { Star, Send, CheckCircle2, MessageSquare, ThumbsUp, Sparkles } from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';

export default function FeedbackPage() {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState('Product Experience');
  const [formData, setFormData] = useState({ name: '', email: '', comments: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', comments: '' });
    }, 4000);
  };

  return (
    <div>
      <BreadcrumbHero
        title="Client Feedback"
        subtitle="Your satisfaction drives our relentless improvement. Share your experience with Tech Eureka solutions and training."
        breadcrumbs={[{ label: 'Feedback' }]}
        badge="Quality & Assurance"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#7dc535]/30 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>We Value Your Insights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Share Your Review &amp; Suggestions</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Help us enhance our software products, delivery velocity, and training methodology.
              </p>
            </div>

            {submitted && (
              <div className="mb-8 p-4 rounded-xl bg-[#7dc535]/15 border border-[#7dc535]/50 text-[#7dc535] flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! Your feedback has been registered and forwarded to our Quality Management team.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating */}
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">Overall Satisfaction Rating</label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-2xl transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoverRating || rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  {rating === 5 ? 'Exceptional (5/5)' : rating === 4 ? 'Very Good (4/5)' : rating === 3 ? 'Satisfactory (3/5)' : 'Needs Improvement'}
                </div>
              </div>

              {/* Feedback Category */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">Feedback Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Product Experience', 'Training Program', 'Consulting & Support', 'Other'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`p-3 rounded-xl text-xs font-medium border transition-all ${
                        category === cat
                          ? 'bg-[#7dc535]/20 border-[#7dc535] text-white font-bold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name *</label>
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
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Detailed Feedback *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="What went well? Where can we improve?"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#7dc535] text-white text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl btn-brand text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#7dc535]/25"
              >
                <Send className="w-4 h-4" />
                <span>Submit Feedback</span>
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
