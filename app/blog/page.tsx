import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock, Sparkles } from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import SectionHeader from '../../components/ui/SectionHeader';

export const metadata = {
  title: "Engineering Blog - Tech Eureka",
  description: "Insights, architecture patterns, and technical write-ups on Quality Assurance, Automation, Microservices, and Enterprise Software."
};

const blogPosts = [
  {
    slug: 'quality-assurance',
    title: 'Quality Assurance (QA) & Test Automation in Modern Engineering',
    category: 'SQA Engineering',
    date: 'August 14, 2026',
    author: 'Monjurul Alam, SQA Lead',
    readTime: '6 min read',
    image: '/images/pages/about-4.jpg',
    excerpt: 'Quality Assurance (QA) is an essential component of software development that helps ensure that the final product meets the desired quality standards. Why QA automation is replacing manual cycles and how to choose the right framework.',
    href: '/blog/quality-assurance'
  },
  {
    slug: 'microservices',
    title: 'Microservices Architecture for Complex Enterprise Applications',
    category: 'System Architecture',
    date: 'August 10, 2026',
    author: 'Ashraful Azim Nishat, Sr. Engineer',
    readTime: '8 min read',
    image: '/images/pages/about-2.jpg',
    excerpt: 'Microservices architecture is a modern approach to software development that involves building an application as a set of small, independent, and loosely coupled services. Design for failure, API gateways, and scaling.',
    href: '/blog/microservices'
  }
];

export default function BlogPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Engineering & Tech Blog"
        subtitle="Insights, engineering best practices, and architectural deep-dives from our senior developers and QA specialists."
        breadcrumbs={[{ label: 'Blog' }]}
        badge="Knowledge Hub"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <SectionHeader
            badge="Latest Insights"
            title="Featured Technical Articles"
            subtitle="Explore how our engineering teams approach scalable architecture, automated quality control, and cloud-native systems."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-3xl glass-panel border border-white/10 hover:border-[#7dc535]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-xl"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full badge-brand text-[10px] font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#7dc535]" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#7dc535]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-[#7dc535] transition-colors mb-3 leading-snug">
                    <Link href={post.href}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">{post.author}</span>
                    <Link
                      href={post.href}
                      className="text-xs font-bold text-[#7dc535] flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
