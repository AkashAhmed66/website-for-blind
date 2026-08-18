import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, CheckCircle2, ArrowRight, Sparkles, 
  Terminal, Activity, Zap, Server 
} from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import ServicesShowcase from '../../../components/home/ServicesShowcase';

export const metadata = {
  title: "Test Service & SQA QA - Tech Eureka",
  description: "Comprehensive software testing, automated QA, performance testing, and load testing services by Tech Eureka."
};

export default function TestServicePage() {
  return (
    <div>
      <BreadcrumbHero 
        title="Test Service & SQA"
        subtitle="End-to-End Software Quality Assurance, Automated Regression, and Security Validation."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Test Service' }
        ]}
        badge="Quality Engineering"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero-Defect Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Full-Service Software Testing &amp; QA
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Tech Eureka is a full-service software testing company that offers a wide range of testing services. Whether you need manual QA or automated testing, we have the expertise and resources to deliver results that meet your needs. Our goal is to provide end-to-end testing services that enhance the user experience and help you deliver a seamless and bug-free product to your customers.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                In order to deliver a great user experience, it&apos;s important to test your software on multiple devices and browsers. Our team will help you test your software across a range of platforms to ensure that it works flawlessly on all devices. Whether you&apos;re looking to develop an app for iOS or Android, our testers will use their expertise to help you deliver a high-quality product that meets your customers&apos; needs.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/images/pages/about-5.jpg" 
                alt="Software Quality Assurance Testing" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Detailed Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-2 lg:order-1">
              <Image 
                src="/images/pages/about-6.jpg" 
                alt="Automated SQA Testing Pipeline" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Comprehensive Testing Methodologies
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Our approach to software testing is rooted in a commitment to delivering outstanding results. We believe that effective testing is essential to ensuring that your product meets the highest standards of quality and performance. That&apos;s why our team of experts works closely with you to understand your specific requirements and deliver customized testing solutions that meet your needs.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                Our team of software testers and quality assurance experts has extensive experience in all aspects of software testing. We offer a comprehensive range of testing services, including test automation, performance testing, security testing, and functional testing. These services are designed to ensure that your product meets the highest standards for quality and performance.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl btn-brand text-sm font-bold flex items-center gap-2 shadow-lg"
                >
                  <span>Request QA Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/trainings/sqa-training"
                  className="px-8 py-3.5 rounded-xl btn-secondary-glow text-sm font-medium"
                >
                  Explore SQA Training
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <ServicesShowcase />
    </div>
  );
}
