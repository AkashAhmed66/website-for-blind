import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import ServicesShowcase from '../components/home/ServicesShowcase';
import CountersSection from '../components/home/CountersSection';
import PortfolioFilter from '../components/home/PortfolioFilter';
import FeaturesGrid from '../components/home/FeaturesGrid';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TeamSection from '../components/home/TeamSection';
import PricingPlans from '../components/home/PricingPlans';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ClientLogos from '../components/home/ClientLogos';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero with Video / Image Carousel */}
      <HeroSlider />

      {/* 2. Core Services Box */}
      <ServicesShowcase />

      {/* 3. Achievements & Impact Statistics */}
      <CountersSection />

      {/* 4. Filterable Portfolio Projects */}
      <PortfolioFilter />

      {/* 5. Platform Architecture Features */}
      <FeaturesGrid />

      {/* 6. Why Choose Us & Company Intro */}
      <WhyChooseUs />

      {/* 7. Core Engineering & Leadership Team */}
      <TeamSection />

      {/* 8. Professional Training Packages */}
      <PricingPlans />

      {/* 9. Leadership Messages & Testimonials */}
      <TestimonialsSection />

      {/* 10. Trusted Clients Grid */}
      <ClientLogos />
    </div>
  );
}
