import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, CheckCircle2, ArrowRight, Sparkles, 
  UserCheck, Briefcase, Award, Clock 
} from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import ServicesShowcase from '../../../components/home/ServicesShowcase';

export const metadata = {
  title: "Tech Resource Sharing - Tech Eureka",
  description: "Senior developer staff augmentation, dedicated SQA engineers, and technical talent outsourcing by Tech Eureka."
};

export default function TechResourceSharingPage() {
  return (
    <div>
      <BreadcrumbHero 
        title="Tech Resource Sharing"
        subtitle="Bridging the technical talent gap by deploying pre-vetted senior software developers, SQA leads, and cloud architects."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Tech Resource Sharing' }
        ]}
        badge="Talent Augmentation"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>On-Demand Technical Capacity</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Empowering Your Teams With Elite Tech Talent
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Tech Eureka is a leading human resource vendor company that specializes in providing technical talent for businesses in need of web developers, SQA Engineers, and app developers. Our goal is to help organizations stay ahead of the competition by providing access to a talented and motivated pool of technical professionals.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                Our team of HR experts has a deep understanding of the technology industry and the skills and expertise needed to succeed in today&apos;s fast-paced environment. Whether you&apos;re looking to build a new website, develop a mobile app, or ensure the quality of your software products, we have the talent and expertise to help.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/images/pages/about-7.jpg" 
                alt="Tech Resource Sharing" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Second Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-2 lg:order-1">
              <Image 
                src="/images/pages/about-8.jpg" 
                alt="Dedicated Technical Talent" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Customized Engagement &amp; Seamless Integration
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                At Tech Eureka, we understand that every business is unique and has its own set of technical requirements. That&apos;s why we approach each project with a customized solution, working closely with our clients to understand their specific needs and develop HR solutions that meet their requirements. Our team of experts is dedicated to delivering results that support our clients&apos; success.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                Our web development, mobile app engineering, and SQA talent pools give you the immediate power to scale without the overhead and delays of traditional recruitment cycles.
              </p>
            </div>
          </div>

          {/* Full Width Summary */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#7dc535]/30 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              End-to-End Talent Assurance
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our software quality assurance (SQA) services help businesses ensure the quality of their software products. Our SQA Engineers have the expertise and experience needed to test software products for functionality, performance, security, and usability. Our team of experts will work with you to develop a comprehensive testing plan that meets your needs and helps you deliver high-quality software products to your customers.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At Tech Eureka, we are committed to delivering outstanding results for our clients. Whether you&apos;re looking for web developers, SQA Engineers, or app developers, we have the talent and expertise to help. So if you&apos;re looking for a partner who can help you achieve your technical objectives, look no further than Tech Eureka.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3.5 rounded-xl btn-brand text-sm font-bold flex items-center gap-2 shadow-lg"
              >
                <span>Hire Dedicated Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/career"
                className="px-8 py-3.5 rounded-xl btn-secondary-glow text-sm font-medium"
              >
                Join Our Talent Pool
              </Link>
            </div>
          </div>

        </div>
      </section>

      <ServicesShowcase />
    </div>
  );
}
