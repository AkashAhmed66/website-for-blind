import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const teamMembers = [
  {
    name: 'Ashraful Azim Nishat',
    role: 'Sr. Software Engineer',
    department: 'Full-Stack & Cloud Architecture',
    image: '/images/team/team1.jpg',
    skills: ['ASP.NET Core', 'Next.js', 'Spring Boot', 'SQL Server']
  },
  {
    name: 'Monjurul Alam',
    role: 'SQA Engineer',
    department: 'Quality Assurance & Automation',
    image: '/images/team/team2.jpg',
    skills: ['Selenium', 'Appium', 'JMeter', 'CI/CD Pipelines']
  },
  {
    name: 'Nusrat Jahan Trisha',
    role: 'Sr. Human Resource Executive',
    department: 'People Operations & Resource Sharing',
    image: '/images/team/team3.jpg',
    skills: ['Talent Sourcing', 'HR Management', 'Team Operations']
  },
  {
    name: 'Syed Mahamudul Ahsan',
    role: 'Sr. Business Development Executive',
    department: 'Growth & Strategic Partnerships',
    image: '/images/team/team4.jpg',
    skills: ['ERP Consulting', 'Client Relations', 'Strategy']
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#050914] relative overflow-hidden border-b border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#7dc535]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Leadership & Engineering"
          title="The Minds Behind the Magic"
          subtitle="Introducing our core engineers, QA specialists, and business strategists dedicated to delivering digital excellence."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-2xl glass-panel glass-panel-hover p-5 flex flex-col items-center text-center border border-white/10 hover:border-[#7dc535]/50 transition-all duration-300 shadow-xl"
            >
              {/* Member Photo */}
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-white/15 group-hover:border-[#7dc535] transition-all duration-300 shadow-2xl mb-5 bg-slate-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#7dc535] transition-colors">
                {member.name}
              </h3>
              <div className="text-xs font-semibold text-[#7dc535] mt-1">
                {member.role}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 mb-4">
                {member.department}
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-auto pt-3 border-t border-white/5 w-full">
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
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-secondary-glow text-sm font-semibold hover:border-[#7dc535]/60 hover:text-white transition-all shadow-lg"
          >
            <span>Learn More About Our Full Organization</span>
            <ArrowRight className="w-4 h-4 text-[#7dc535]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
