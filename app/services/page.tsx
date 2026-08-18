import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Code2, Smartphone, ShieldCheck, Users, 
  ArrowRight, CheckCircle2, Sparkles, Layers,
  Server, Cpu, Database, Cloud
} from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import SectionHeader from '../../components/ui/SectionHeader';

export const metadata = {
  title: "Our Services - Tech Eureka",
  description: "Explore Tech Eureka's software engineering services: Web Development, Mobile Apps, SQA Testing, and Dedicated Resource Augmentation."
};

const serviceCards = [
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Enterprise Web',
    icon: Code2,
    image: '/images/pages/about-9.jpg',
    href: '/services/web-development',
    summary: 'Our web development services offer tailored solutions for designing, creating, and optimizing modern web portals and SaaS platforms, ensuring seamless UX and rock-solid cloud backend architectures.',
    deliverables: [
      'Custom SaaS & Web Portals',
      'Modern Next.js & React Frameworks',
      'Secure REST & GraphQL APIs',
      'E-Commerce & High-Load Architecture'
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    category: 'Mobile Innovation',
    icon: Smartphone,
    image: '/images/pages/about-10.jpg',
    href: '/services/app-development',
    summary: 'Custom mobile application engineering designed for speed, intuitive touch experiences, and deep device hardware integration across iOS and Android ecosystems.',
    deliverables: [
      'Native iOS (Swift) & Android (Kotlin)',
      'Cross-Platform React Native & Flutter',
      'Real-Time Offline Data Synchronization',
      'Enterprise App Store & Security Governance'
    ]
  },
  {
    id: 'test-service',
    title: 'Test Service & QA Automation',
    category: 'Quality Engineering',
    icon: ShieldCheck,
    image: '/images/pages/about-5.jpg',
    href: '/services/test-service',
    summary: 'Comprehensive software quality assurance testing guaranteeing robust functionality, stress tolerance, airtight security, and compliance across browsers and mobile devices.',
    deliverables: [
      'Automated Testing with Selenium & Appium',
      'End-to-End Load Testing with JMeter',
      'CI/CD Automated Regression Suites',
      'Security & Penetration Assessment'
    ]
  },
  {
    id: 'tech-resource-sharing',
    title: 'Tech Resource Sharing',
    category: 'Talent Augmentation',
    icon: Users,
    image: '/images/pages/about-7.jpg',
    href: '/services/tech-resource-sharing',
    summary: 'Dedicated human resource solutions connecting businesses with pre-vetted senior software engineers, SQA automation specialists, and system architects for immediate deployment.',
    deliverables: [
      'Pre-vetted Full-Stack Engineers',
      'Dedicated SQA Specialists & Leads',
      'Flexible Project-Based or Full-Time Staffing',
      'Complete Timezone & Workflow Alignment'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div>
      <BreadcrumbHero 
        title="Our Engineering Services"
        subtitle="Empowering digital transformation through tailor-made web platforms, native mobile applications, automated QA testing, and elite staff augmentation."
        breadcrumbs={[{ label: 'Services' }]}
        badge="Enterprise Capabilities"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {serviceCards.map((srv, index) => {
              const Icon = srv.icon;
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={srv.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 hover:border-[#7dc535]/40 transition-all duration-300 shadow-xl ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Visual Image */}
                  <div className={`lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <Image 
                      src={srv.image} 
                      alt={srv.title} 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
                  </div>

                  {/* Text Details */}
                  <div className={`lg:col-span-7 space-y-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#7dc535]/15 text-[#7dc535] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-[#7dc535] uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {srv.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {srv.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {srv.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {srv.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#7dc535] shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link 
                        href={srv.href}
                        className="px-6 py-3 rounded-xl btn-brand text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg"
                      >
                        <span>Learn More Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link 
                        href="/contact"
                        className="px-6 py-3 rounded-xl btn-secondary-glow text-xs sm:text-sm font-medium"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
