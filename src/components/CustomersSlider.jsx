import React, { useRef } from 'react';
import { VALUABLE_CUSTOMERS } from '../data/hitechData';

export default function CustomersSlider() {
  const scrollRef = useRef(null);

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...VALUABLE_CUSTOMERS, ...VALUABLE_CUSTOMERS, ...VALUABLE_CUSTOMERS];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-surface-container-low/60 to-white overflow-hidden border-y border-outline-variant/20 relative">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        
        {/* Section Header */}
        <div className="reveal-slide-up flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border border-secondary-container/20 rounded-full text-secondary-container font-label-md text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
              Trusted Industrial & Commercial Partnerships
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-primary mb-3">
              Our Valuable Customers
            </h2>
            <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
              Proudly engineering safe, compliant, and uninterrupted gas pipeline infrastructure for industry-leading hospitality chains, luxury jewelers, institutions, and precision laboratories.
            </p>
          </div>

          {/* Navigation Buttons for Manual Sliding */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous client logos"
              className="w-11 h-11 rounded-xl bg-white border border-outline-variant/40 hover:border-secondary-container hover:bg-secondary-container/10 text-primary hover:text-secondary flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next client logos"
              className="w-11 h-11 rounded-xl bg-primary hover:bg-secondary-container text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>

      </div>

      {/* Infinite Seamless Scrolling Logo Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient edge masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="animate-marquee-infinite flex gap-6 md:gap-8 px-4 items-stretch cursor-grab active:cursor-grabbing select-none"
        >
          {marqueeList.map((customer, idx) => (
            <div
              key={`${customer.id}-${idx}`}
              className="flex-shrink-0 w-64 md:w-72 bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-md hover:shadow-xl hover:border-secondary-container transition-all duration-300 flex flex-col justify-between items-center text-center group hover:-translate-y-1.5"
            >
              {/* Logo Presentation Area */}
              <div className="w-full h-24 flex items-center justify-center mb-4 p-2 bg-surface-container-low/40 rounded-xl group-hover:bg-white transition-colors">
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  loading="lazy"
                  className="max-h-16 max-w-[85%] object-contain filter drop-shadow-sm group-hover:scale-108 transition-transform duration-300 ease-out"
                />
              </div>

              {/* Client Info */}
              <div className="w-full">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded-full mb-1.5">
                  {customer.category}
                </span>
                <h3 className="font-headline-md text-base font-bold text-primary group-hover:text-secondary transition-colors truncate">
                  {customer.name}
                </h3>
                <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-2 mt-1 leading-snug">
                  {customer.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
