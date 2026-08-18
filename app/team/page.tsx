import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';
import BreadcrumbHero from '../../components/ui/BreadcrumbHero';
import SectionHeader from '../../components/ui/SectionHeader';

export const metadata = {
  title: "Our Team - Tech Eureka",
  description: "Meet the engineers, architects, SQA leads, and business strategists driving innovation at Tech Eureka."
};

const teamMembers = [
  {
    name: 'Ashraful Azim Nishat',
    role: 'Sr. Software Engineer',
    department: 'Full-Stack & Cloud Architecture',
    image: '/images/team/team1.jpg',
    skills: ['ASP.NET Core', 'Next.js', 'Spring Boot', 'SQL Server', 'Azure', 'Docker'],
    bio: 'Leads full-stack architecture design with over 6 years of experience building mission-critical ERPs and microservices for pharmaceuticals and enterprises.'
  },
  {
    name: 'Monjurul Alam',
    role: 'SQA Engineer',
    department: 'Quality Assurance & Automation',
    image: '/images/team/team2.jpg',
    skills: ['Selenium', 'Appium', 'JMeter', 'CI/CD Pipelines', 'REST Assured', 'TestNG'],
    bio: 'Specializes in multi-platform automated test suites, load testing, security audits, and continuous testing pipeline integrations.'
  },
  {
    name: 'Nusrat Jahan Trisha',
    role: 'Sr. Human Resource Executive',
    department: 'People Operations & Resource Sharing',
    image: '/images/team/team3.jpg',
    skills: ['Talent Sourcing', 'HR Management', 'Staff Augmentation', 'Culture Building'],
    bio: 'Oversees talent acquisition, technical staff augmentation, and ensures culture excellence across internal and client-embedded engineering teams.'
  },
  {
    name: 'Syed Mahamudul Ahsan',
    role: 'Sr. Business Development Executive',
    department: 'Growth & Strategic Partnerships',
    image: '/images/team/team4.jpg',
    skills: ['ERP Consulting', 'Client Relations', 'Strategy', 'Procurement Solutions'],
    bio: 'Drives strategic partnerships, client alignment for enterprise ERP deployments, and digital transformation consulting across South Asia.'
  }
];

export default function TeamPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Our Leadership & Engineering Team"
        subtitle="The minds behind our enterprise software, automated test suites, and career-defining training programs."
        breadcrumbs={[{ label: 'Team' }]}
        badge="Engineering Excellence"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <SectionHeader
            badge="Core Team"
            title="Experienced Practitioners & Mentors"
            subtitle="Our engineers and leads bring hands-on experience building compliant ERPs, automated testing suites, and high-performance cloud apps."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#7dc535]/40 transition-all flex flex-col sm:flex-row gap-6 shadow-xl group"
              >
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#7dc535] shrink-0 bg-slate-900 mx-auto sm:mx-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow text-center sm:text-left">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7dc535] bg-[#7dc535]/10 px-2.5 py-0.5 rounded-full">
                      {member.department}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-[#7dc535] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-slate-300 mt-0.5">{member.role}</div>
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1 justify-center sm:justify-start">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 rounded-3xl glass-panel-glow border border-[#7dc535]/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Want to Join Our Engineering Team?</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              We&apos;re always interested in meeting talented full-stack developers, SQA test automation engineers, and cloud architects.
            </p>
            <Link href="/career" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
              Explore Career Opportunities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
