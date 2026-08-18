import React from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

const clientLogos = [
  { id: 1, name: 'Client Partner 1', src: '/images/clients/client1.png' },
  { id: 2, name: 'Client Partner 2', src: '/images/clients/client2.png' },
  { id: 3, name: 'Client Partner 3', src: '/images/clients/client3.png' },
  { id: 4, name: 'Client Partner 4', src: '/images/clients/client4.png' },
  { id: 5, name: 'Client Partner 5', src: '/images/clients/client5.png' },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-[#070d1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#7dc535] uppercase tracking-widest">
            Trusted By Growing Enterprises
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Our Valued Clients &amp; Partners
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-[#7dc535]/30 flex items-center justify-center h-24 group transition-all duration-300 shadow-sm"
            >
              <div className="relative w-36 h-12 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
