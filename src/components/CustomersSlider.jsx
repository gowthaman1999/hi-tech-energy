import React from 'react';
import { VALUABLE_CUSTOMERS } from '../data/hitechData';

export default function CustomersSlider({ duration = 32 }) {
  // Duplicate the 5-item customer list to create a rich base row
  const customerList = [...VALUABLE_CUSTOMERS, ...VALUABLE_CUSTOMERS];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-surface-container-low/60 to-white overflow-hidden border-y border-outline-variant/20 relative select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
        
        {/* Section Header */}
        <div className="reveal-slide-up flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border border-secondary-container/20 rounded-full text-secondary-container font-label-md text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
              Trusted Industrial & Commercial Partnerships
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3">
              Our Valuable Customers
            </h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed">
              Proudly engineering safe, compliant, and uninterrupted gas pipeline infrastructure for industry-leading hospitality chains, luxury jewelers, institutions, and precision laboratories.
            </p>
          </div>
        </div>

      </div>

      {/* Infinite Horizontal Marquee Track (Left to Right, Pause on Hover) */}
      <div 
        className="marquee-container marquee-mask py-2 sm:py-4"
        style={{ '--marquee-duration': `${duration}s` }}
      >
        <div className="marquee-track-right">
          {/* Primary Set */}
          <div className="flex items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
            {customerList.map((customer, idx) => (
              <div
                key={`customer-${customer.id}-${idx}`}
                className="w-[260px] sm:w-[300px] md:w-[320px] flex-shrink-0"
              >
                <div className="h-full bg-white rounded-2xl p-5 sm:p-6 border border-outline-variant/30 shadow-md hover:shadow-xl hover:border-secondary-container transition-all duration-300 flex flex-col justify-between items-center text-center group hover:-translate-y-1">
                  
                  {/* Logo Presentation Area */}
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center mb-3 sm:mb-4 p-2 bg-surface-container-low/40 rounded-xl group-hover:bg-white transition-colors">
                    <img
                      src={customer.logo}
                      alt={`${customer.name} logo`}
                      loading="lazy"
                      className="max-h-14 sm:max-h-16 max-w-[85%] object-contain filter drop-shadow-sm group-hover:scale-108 transition-transform duration-300 ease-out"
                    />
                  </div>

                  {/* Client Info */}
                  <div className="w-full">
                    <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded-full mb-1">
                      {customer.category}
                    </span>
                    <h3 className="font-headline-md text-sm sm:text-base font-bold text-primary group-hover:text-secondary transition-colors truncate">
                      {customer.name}
                    </h3>
                    <p className="font-body-sm text-[10px] sm:text-[11px] text-on-surface-variant line-clamp-2 mt-1 leading-snug">
                      {customer.highlight}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Duplicated Cloned Set for Seamless Infinite Loop */}
          <div 
            className="flex items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0"
            aria-hidden="true"
          >
            {customerList.map((customer, idx) => (
              <div
                key={`customer-clone-${customer.id}-${idx}`}
                className="w-[260px] sm:w-[300px] md:w-[320px] flex-shrink-0"
              >
                <div className="h-full bg-white rounded-2xl p-5 sm:p-6 border border-outline-variant/30 shadow-md hover:shadow-xl hover:border-secondary-container transition-all duration-300 flex flex-col justify-between items-center text-center group hover:-translate-y-1">
                  
                  {/* Logo Presentation Area */}
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center mb-3 sm:mb-4 p-2 bg-surface-container-low/40 rounded-xl group-hover:bg-white transition-colors">
                    <img
                      src={customer.logo}
                      alt=""
                      loading="lazy"
                      className="max-h-14 sm:max-h-16 max-w-[85%] object-contain filter drop-shadow-sm group-hover:scale-108 transition-transform duration-300 ease-out"
                    />
                  </div>

                  {/* Client Info */}
                  <div className="w-full">
                    <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded-full mb-1">
                      {customer.category}
                    </span>
                    <h3 className="font-headline-md text-sm sm:text-base font-bold text-primary group-hover:text-secondary transition-colors truncate">
                      {customer.name}
                    </h3>
                    <p className="font-body-sm text-[10px] sm:text-[11px] text-on-surface-variant line-clamp-2 mt-1 leading-snug">
                      {customer.highlight}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
