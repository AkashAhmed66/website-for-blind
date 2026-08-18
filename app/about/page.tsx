import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building, Award, Users, Globe, Heart, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import CountersSection from '../../components/home/CountersSection';
import TeamSection from '../../components/home/TeamSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';

export const metadata = {
  title: "About Us - Tech Eureka",
  description: "Tech Eureka — the software division of Techno Green Carbon Ltd. (TGCL). Delivering top-notch software development, ERP products, and IT training since 2010."
};

const coreValues = [
  { icon: Heart, title: 'Client-First Philosophy', desc: 'Every decision begins with asking how we can maximize value delivery for our client.' },
  { icon: Shield, title: 'Uncompromising Quality', desc: 'We embed QA at every stage — from architecture design to production deployment.' },
  { icon: Globe, title: 'Global Reach, Local Expertise', desc: 'Multi-country delivery capacity with deep understanding of Bangladeshi enterprise contexts.' },
  { icon: Award, title: 'Innovation at Scale', desc: 'Continuous R&D investment in AI, cloud-native patterns, and automation frameworks.' },
  { icon: Users, title: 'People-Centric Culture', desc: 'We invest heavily in our engineers — training, mentorship, and career development.' },
  { icon: Building, title: 'TGCL Group Heritage', desc: 'Part of Techno Green Carbon Ltd. — a trusted, multi-industry group with a proven 14+ year track record.' }
];

export default function AboutPage() {
  return (
    <div>
      <BreadcrumbHero
        title="About Tech Eureka"
        subtitle="A Quality Experience Team — the Software Division of Techno Green Carbon Ltd. (TGCL). Engineering Tomorrow's Technology, Today."
        breadcrumbs={[{ label: 'About Us' }]}
        badge="Who We Are"
        bgImage="/images/pages/about-9.jpg"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-9.jpg" alt="Tech Eureka Office" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Building className="w-3.5 h-3.5" />
                <span>Software Division of TGCL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                About Our Company
              </h2>
              <div className="text-sm text-[#7dc535] font-semibold">A Quality Experience Team with 4+ years of dedicated Software Engineering experience</div>
              <p className="text-base text-slate-300 leading-relaxed">
                Tech Eureka is the software division of Techno Green Carbon Ltd. (TGCL). At Tech Eureka, we provide top-notch software development services to businesses of all sizes. Our team of experienced and talented developers is dedicated to delivering solutions that meet and exceed our clients&apos; expectations. We specialize in a wide range of services, including web and mobile app development, custom software solutions, cloud computing, and more. Our expertise in these areas enables us to provide our clients with the best possible solutions for their unique needs and requirements.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                At Tech Eureka, we believe in the power of technology to drive growth and improve business processes. That&apos;s why we work closely with our clients to understand their goals and objectives, and provide customized solutions that help them achieve their vision. Our goal is to provide our clients with the technology they need to succeed in today&apos;s fast-paced and competitive business environment.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Quality, Reliability &amp; Long-Term Partnerships
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                We take pride in our commitment to quality and customer satisfaction. Our developers use the latest technologies and methodologies to ensure that our solutions are reliable, secure, and scalable. Our quality assurance processes ensure that our clients receive the best possible products and services, and that our solutions meet their specific needs and requirements.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                At our company, we believe that outsourcing software development is about building relationships. Our team of experts is dedicated to providing our clients with the highest level of customer service, and we are always available to answer any questions or concerns they may have. We strive to build long-lasting partnerships with our clients, and to help them achieve their goals through the power of technology.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                If you are looking for a reliable and experienced outsourcing software firm, look no further than Tech Eureka. Contact us today to learn more about our services and how we can help you achieve your business goals.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2">
              <Image src="/images/pages/about-10.jpg" alt="Tech Eureka Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider mb-4">Our Core Values</span>
              <h2 className="text-3xl font-extrabold text-white">What Drives Everything We Do</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/40 flex items-start gap-4 transition-all group">
                    <div className="p-2.5 rounded-xl bg-[#7dc535]/15 text-[#7dc535] group-hover:bg-[#7dc535] group-hover:text-slate-950 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1.5">{val.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <WhyChooseUs />
      <CountersSection />
      <TeamSection />
      <TestimonialsSection />
    </div>
  );
}
