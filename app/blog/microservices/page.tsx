import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import ServicesShowcase from '../../../components/home/ServicesShowcase';

export const metadata = {
  title: "Microservices Architecture for Enterprise Apps - Tech Eureka Blog",
  description: "Understanding microservices architecture, API management, design for failure, independent scaling, and containerized deployment."
};

export default function BlogMicroservicesPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Microservices Architecture for Enterprise Applications"
        subtitle="Building resilient, independently scalable, and loosely coupled digital engines with modern microservices design patterns."
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: 'Microservices' }
        ]}
        badge="System Architecture"
        bgImage="/images/pages/about-2.jpg"
      />

      <article className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Article Header Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#7dc535]" />
                <span>August 10, 2026</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#7dc535]" />
                <span>8 min read</span>
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#7dc535]" />
                <span>Ashraful Azim Nishat, Sr. Engineer</span>
              </span>
            </div>
            <Link href="/blog" className="text-[#7dc535] hover:underline flex items-center gap-1 font-semibold">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Blog</span>
            </Link>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12">
            <Image
              src="/images/pages/about-2.jpg"
              alt="Microservices Architecture Diagram"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="text-xl text-white font-medium leading-relaxed">
              Microservices architecture is a modern approach to software development that involves building an application as a set of small, independent, and loosely coupled services. In contrast to traditional monolithic applications, microservices allow for greater flexibility, scalability, and ease of maintenance. This makes them ideal for complex web applications that require the integration of multiple components and services.
            </p>

            <p>
              In a microservices architecture, each service performs a specific function and communicates with other services through APIs. This results in a highly modular and scalable system where each service can be developed, tested, and deployed independently. This also allows for easy maintenance, as only the affected service needs to be updated, without affecting the rest of the application.
            </p>

            <div className="p-6 rounded-2xl glass-panel-glow border border-[#7dc535]/30 my-8">
              <h3 className="text-lg font-bold text-white mb-2">Why Monoliths Struggle at Scale:</h3>
              <p className="text-sm text-slate-200">
                In a monolith, scaling a single bottleneck requires replicating the entire application footprint. Microservices allow targeted resource allocation — scaling only the high-traffic services (e.g. Order Processing or Search) independently.
              </p>
            </div>

            <p>
              One of the key benefits of using microservices architecture for complex web applications is improved scalability. With traditional monolithic applications, adding new features or increasing capacity requires a complete overhaul of the entire system. In contrast, with microservices, you can simply add new services or scale existing services as needed. This helps to ensure that the application can meet changing business needs and accommodate increased traffic without sacrificing performance or availability.
            </p>

            <p>
              Another benefit of microservices is the ability to use the right technology for the right job. With a microservices architecture, you can choose the best tools and technologies for each service, rather than being limited to a single technology stack for the entire application. This allows you to take advantage of the latest advancements in technology and provide the best possible user experience.
            </p>

            <h3 className="text-2xl font-bold text-white pt-6 pb-2">
              Critical Considerations When Implementing Microservices
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl glass-panel border border-white/5 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#7dc535] shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-white">Design for Failure</h4>
                  <p className="text-sm text-slate-400 mt-1">Microservices architecture is built on the idea of individual services failing independently. Implement Circuit Breaker patterns (e.g., Resilience4j) and fallback caches so the system remains partially operational.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/5 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#7dc535]" />
                <div>
                  <h4 className="text-base font-bold text-white">API Management &amp; Gateway</h4>
                  <p className="text-sm text-slate-400 mt-1">APIs are the key to communication. Use unified API Gateways for SSL termination, rate limiting, token validation (JWT), and semantic versioning.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/5 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#7dc535]" />
                <div>
                  <h4 className="text-base font-bold text-white">Comprehensive Testing Strategy</h4>
                  <p className="text-sm text-slate-400 mt-1">Test each service in isolation with unit tests, test service contracts with pact/contract testing, and validate workflows with end-to-end synthetic transactions.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-white/5 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#7dc535]" />
                <div>
                  <h4 className="text-base font-bold text-white">Observability &amp; Distributed Tracing</h4>
                  <p className="text-sm text-slate-400 mt-1">Centralized log aggregation and distributed tracing (OpenTelemetry / Zipkin) are critical to quickly identifying latency bottlenecks across multiple hops.</p>
                </div>
              </div>
            </div>

            <p className="pt-4">
              In conclusion, microservices architecture is an effective approach for building complex web applications. It provides many benefits, including improved scalability, flexibility, and ease of maintenance. However, it&apos;s important to keep in mind the design considerations, API management, testing, and monitoring requirements to ensure that the application is built and maintained effectively. With the right approach, microservices can help you build the complex web applications that meet the needs of your business and provide a great user experience.
            </p>
          </div>

          {/* Author Bio Box */}
          <div className="mt-16 p-8 rounded-3xl glass-panel border border-white/10 flex items-center gap-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#7dc535] shrink-0 bg-slate-900">
              <Image src="/images/team/team1.jpg" alt="Ashraful Azim Nishat" fill className="object-cover" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Ashraful Azim Nishat</h4>
              <div className="text-xs text-[#7dc535]">Sr. Software Engineer at Tech Eureka</div>
              <p className="text-xs text-slate-400 mt-1">Specializes in Spring Boot Microservices, ASP.NET Core MVC, Docker, and distributed enterprise databases.</p>
            </div>
          </div>

          {/* Related CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/trainings/spring-boot-training"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-brand text-sm font-bold shadow-xl"
            >
              <span>Learn Microservices in Our Spring Boot Course</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </article>

      <ServicesShowcase />
    </div>
  );
}
