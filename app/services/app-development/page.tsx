import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Smartphone, CheckCircle2, ArrowRight, Sparkles, 
  Layers, Apple, Play, Cpu, Shield 
} from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import ServicesShowcase from '../../../components/home/ServicesShowcase';

export const metadata = {
  title: "App Development Services - Tech Eureka",
  description: "Native and cross-platform mobile application development for iOS and Android by Tech Eureka."
};

export default function AppDevelopmentPage() {
  return (
    <div>
      <BreadcrumbHero 
        title="App Development"
        subtitle="Transforming ideas into high-performance mobile applications with intuitive UX and scalable architecture."
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'App Development' }
        ]}
        badge="Mobile Innovation"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Mobile Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Intuitive, Fast &amp; Scalable Mobile Apps
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Tech Eureka is a leading technology company that provides comprehensive and innovative app development services. Our team of expert developers is known for their technical proficiency and ability to turn ideas into reality. Our development process starts with cutting-edge research, followed by user-centered design, architecture, and build to support scalable digital systems.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                We specialize in developing mobile applications for iOS and Android platforms. Our developers are skilled in building simple messaging apps to complex eCommerce functionalities. With a focus on providing seamless user experiences, we integrate backend connectivity and RESTful API calls into all of our apps.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/images/pages/about-3.jpg" 
                alt="Mobile App Development" 
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
                src="/images/pages/about-4.jpg" 
                alt="Cross-Platform Mobile Testing" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Multi-Platform Excellence &amp; Engagement
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                We understand the importance of operational efficiency and customer engagement in the app development process. That&apos;s why our team of certified developers is dedicated to delivering top-quality development services for all platforms, including Android, iOS, Windows Phone, and cross-platform applications.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                We work closely with our clients to understand their unique requirements and develop custom solutions that meet their specific needs. At Tech Eureka, we are committed to delivering outstanding results for our clients. With a focus on innovation and exceptional customer service, we are dedicated to providing the highest quality app development services available.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl btn-brand text-sm font-bold flex items-center gap-2 shadow-lg"
                >
                  <span>Start Your Mobile Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/products/app-products"
                  className="px-8 py-3.5 rounded-xl btn-secondary-glow text-sm font-medium"
                >
                  View Mobile Products
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
