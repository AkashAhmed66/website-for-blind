'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const testimonials = [
  {
    id: 1,
    name: 'Chairperson',
    title: 'Executive Board',
    organization: 'TGCL & Tech Eureka',
    image: '/images/team/testimonial1.jpg',
    text: 'IT integration in all forms and manners is becoming pertinent in developed and developing countries alike. This brings with it issues ranging from providing custom solutions, addressing data and information security, building skills of technical teams, combining IT solutions with AI and robotics, and working across various regions and legal frameworks. Tech Eureka endeavours to bridge these gaps and provide solutions and resources keeping the needs of the customers in mind. Our objective is to build a strong and resilient presence in this sector through our multi-country outreach, our highly skilled technical workforce, and our vast range of experience.'
  },
  {
    id: 2,
    name: 'Chief Executive Officer',
    title: 'Chief Executive Officer (CEO)',
    organization: 'Tech Eureka',
    image: '/images/team/testimonial2.jpg',
    text: 'Working with TechEureka has been a game-changer for our business. Their innovative solutions and dedicated team have propelled our operations to new heights, improving efficiency, and driving growth. I highly recommend Tech Eureka to any organization seeking cutting-edge software solutions, robust ERP deployments, and exceptional long-term service support.'
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#050914] relative overflow-hidden border-b border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7dc535]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Executive Vision"
          title="Leadership Insights &amp; Testimonials"
          subtitle="Messages from our Chairperson and Chief Executive Officer on our corporate ethos, quality commitment, and global outreach."
        />

        <div className="mt-14 relative">
          
          <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#7dc535]/30 shadow-2xl relative">
            <Quote className="w-16 h-16 text-[#7dc535]/15 absolute top-6 right-8 pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              {/* Leader Avatar */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#7dc535] shadow-xl shrink-0 bg-slate-900">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Leader Quote & Details */}
              <div className="space-y-4 text-center sm:text-left">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                    <span>Message from</span>
                    <span className="text-[#7dc535]">{testimonials[current].name}</span>
                  </h3>
                  <div className="text-xs text-slate-400">
                    {testimonials[current].title} • {testimonials[current].organization}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons inside card */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === current ? 'w-8 bg-[#7dc535]' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
