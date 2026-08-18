import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Users } from 'lucide-react';
import BreadcrumbHero from '../../../components/ui/BreadcrumbHero';
import SectionHeader from '../../../components/ui/SectionHeader';

export const metadata = {
  title: "HRMS - Human Resource Management System - Tech Eureka",
  description: "Comprehensive HRMS covering HR Management, Payroll, Attendance, Training Management System with rich reporting."
};

const features = {
  'HR Management': [
    'Records sickness, holiday, maternity leave, absence and training',
    'Pro-data holiday entitlement calculated within employees diary',
    'Retains personnel records and transactions, including job and salary changes',
    'Dynamic Employee Leave Policy Setup and Allocation',
    'Dynamic Employee Bonus Policy Setup and Allocation',
    'Dynamic Employee Termination Policy Setup and Allocation',
    'Training Management System (TMS)',
    'Web based e-Recruitment System'
  ],
  'Payroll Management': [
    'Dynamic Loan Policy setup, Allocation and Adjustment of employees',
    'Dynamic Bonus Policy setup, Allocation and Adjustment of employees',
    'Dynamically different Allowance Allocation and Adjustment of employees',
    'Monthly Salary Allocation of all employees or using departments with a single click',
    'Dynamically Generates Pay Slip and Cash Slip of employees',
    'Dynamically Location wise Salary and different Allowance payment of employees',
    'Manages all aspects of payroll operations including PF, income tax etc'
  ],
  'Attendance System': [
    'Clocking In System and Time Recording Options',
    'Allows you to be in full control of employee time',
    'Effectively Monitor Employee Overtime',
    'Will Save Money & Improve Productivity',
    'Sets up Any Number and Any Types of Shift',
    'Manages and Reports on Employee Absence',
    'Email Notifications',
    'Integrated with SMS Push-Pull System'
  ]
};

const reports = {
  'HR Management System': [
    'Employee Skill Inventory Report', 'Employee Experience Summary Report',
    'Employee Promotional History Report', 'Employee Transfer History',
    'Employee Migration', 'Employee Search',
    'Employee Turnover Ratio Information', 'Employees Allotted Equipment List Report'
  ],
  'Payroll Management System': [
    'Automated Employee Salary', 'Allowance Sheet',
    'Bank/Cheque/DD statement', 'Automated Pay Slip generation',
    'Location and Department wise payment summary', 'Employees Salary Ledger',
    'Loan Installment and Breakdown report'
  ],
  'Attendance System': [
    'Shift Allocation Report', 'Leave Detail Report',
    'Lateness, Early Out Report', 'Tour Report'
  ],
  'Training Management System': [
    'Individual Training Schedule Report', 'Schedule Employee wise SOP Report',
    'Training Record Report', 'Training Summary Report',
    'Training Need Assessment Report', 'Training Initiative Report', 'SOP Review Report'
  ]
};

export default function HRMSPage() {
  return (
    <div>
      <BreadcrumbHero
        title="Human Resource Management System"
        subtitle="Comprehensive HRMS covering HR, Payroll, Attendance, and Training Management — fully integrated with biometric and SMS systems."
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'HRMS' }
        ]}
        badge="Enterprise HRMS"
        bgImage="/images/portfolio/hrm-dashboard.png"
      />

      <section className="py-24 bg-[#070d1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/pages/about-7.jpg" alt="HRMS Dashboard" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-brand text-xs font-semibold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Full HRMS Suite</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Human Resource Management System
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Human Resource Management System is a comprehensive application that streamlines HR tasks such as recordkeeping and reporting. With extensive employee information readily available, HRMS helps protect a company&apos;s most valuable asset. The system can be used as a standalone module or integrated with payroll and attendance systems.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                Integration eliminates redundant data entry and provides additional HR management features such as Employee Self-Service and Applicant Tracking. The Training Management System (TMS) is part of the HRMS framework and allows for accurate recording and analysis of employee training, skills, and qualifications. By automating HR tasks and providing valuable insights into employee performance, HRMS helps companies make informed HR decisions and improve overall HR efficiency.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-brand text-sm font-bold shadow-lg">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Features */}
          <SectionHeader badge="Key Features" title="Core HRMS Capabilities" />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Object.entries(features).map(([area, items]) => (
              <div key={area} className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#7dc535]/40 transition-all">
                <h3 className="text-base font-bold text-[#7dc535] mb-4">{area}</h3>
                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7dc535] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Reports */}
          <div className="mt-16">
            <SectionHeader badge="Reporting Suite" title="Comprehensive Reports" subtitle="Rich, role-based reports across all HR, Payroll, Attendance, and Training dimensions." />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(reports).map(([area, items]) => (
                <div key={area} className="p-6 rounded-2xl glass-panel border border-white/10">
                  <h3 className="text-sm font-bold text-white mb-4">{area} Reports</h3>
                  <ul className="space-y-2">
                    {items.map((rep, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7dc535] shrink-0" />
                        <span>{rep}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-brand text-base font-bold shadow-xl">
              Get HRMS for Your Organization <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
