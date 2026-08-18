import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Code2, CheckCircle2, ArrowRight, Laptop, 
  Layers, Zap, Shield, Sparkles 
} from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import ServicesShowcase from '../../../components/home/ServicesShowcase';

export const metadata = {
  title: "Web Development Services - Tech Eureka",
  description: "Custom web development, enterprise portals, and high-performance cloud web applications engineered by Tech Eureka."
};

export default function WebDevelopmentPage() {
  return (
    <div>
      <BreadcrumbHero 
        title="Web Development"
        subtitle="A Vital Part of Your Business Strategy — Engineering robust, secure, and beautiful web architectures."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Web Development' }
        ]}
        badge="Enterprise Web Engineering"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Digital Strategy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                A Vital Part of Your Business Strategy
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                As the digital landscape evolves, having a well-designed and functional website has become a critical component of any successful business strategy. A website serves as the online representation of your brand and is often the first point of contact between you and potential customers.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                At our company, we believe in the power of technology to help businesses reach new heights. Our team of developers is highly skilled and experienced in the latest web development technologies, responsive frameworks, and cloud architectures.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/images/pages/about-1.jpg" 
                alt="Web Development Architecture" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Middle Design & UX Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-2 lg:order-1">
              <Image 
                src="/images/pages/about-2.jpg" 
                alt="Design and Usability" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Harmonizing Design, Speed &amp; User Experience
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Design is another crucial aspect of web development. A website that looks great and is easy to use will make a lasting impression on visitors and help you build a strong online presence. Our designers work closely with our clients to understand their needs and goals, and create a website that is both aesthetically pleasing and functional.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                The goal of a website is to provide valuable information to its visitors and help them achieve their goals. That&apos;s why our team focuses on creating websites that are both engaging and informative. We use precise content placement to make sure that visitors can easily find what they&apos;re looking for and spend less time searching and more time exploring. By carefully balancing design and content, we create a web experience that is both enjoyable and effective.
              </p>
            </div>
          </div>

          {/* Full-width Process & Quality Commitment */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#7dc535]/30 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Collaborative Process &amp; Long-Term Reliability
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our web development process is designed to be efficient and collaborative. We work closely with our clients to understand their needs and goals, and develop a comprehensive plan for building their website. Our developers then use their expertise to bring the plan to life, delivering a website that meets all of the client&apos;s requirements. Throughout the development process, we stay in close communication with our clients, ensuring that their needs are met and their goals are achieved.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We take pride in the quality of our work and the results we deliver. Our team of developers is passionate about web development and is always striving to create the best possible websites for our clients. We use the latest tools and techniques to build high-performing, user-friendly websites that deliver value to our clients and their customers. With our focus on technology and design, you can trust that your website will be built to last and will perform well for years to come.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3.5 rounded-xl btn-brand text-sm font-bold flex items-center gap-2 shadow-lg"
              >
                <span>Discuss Your Web Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/products/web-products"
                className="px-8 py-3.5 rounded-xl btn-secondary-glow text-sm font-medium"
              >
                View Web Product Suites
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Reusable Services Showcase */}
      <ServicesShowcase />
    </div>
  );
}
