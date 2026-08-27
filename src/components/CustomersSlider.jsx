import React, { useState, useEffect, useRef } from 'react';
import { VALUABLE_CUSTOMERS } from '../data/hitechData';

export default function CustomersSlider() {
  const originalLength = VALUABLE_CUSTOMERS.length;
  // Clone 3 times for seamless infinite loop: [5 items, 5 items, 5 items] = 15 items
  const extendedList = [...VALUABLE_CUSTOMERS, ...VALUABLE_CUSTOMERS, ...VALUABLE_CUSTOMERS];

  const [currentIndex, setCurrentIndex] = useState(originalLength);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [withTransition, setWithTransition] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite loop boundary handling
  const handleTransitionEnd = () => {
    if (currentIndex >= originalLength * 2) {
      setWithTransition(false);
      setCurrentIndex(currentIndex - originalLength);
    } else if (currentIndex < originalLength) {
      setWithTransition(false);
      setCurrentIndex(currentIndex + originalLength);
    }
  };

  // Re-enable transition after silent position reset
  useEffect(() => {
    if (!withTransition) {
      const timer = setTimeout(() => {
        setWithTransition(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [withTransition]);

  // Auto-play timer: slides 1 by 1 every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (idx) => {
    setWithTransition(true);
    setCurrentIndex(originalLength + idx);
  };

  // Active indicator index (0 to originalLength - 1)
  const activeDotIndex = ((currentIndex % originalLength) + originalLength) % originalLength;

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-surface-container-low/60 to-white overflow-hidden border-y border-outline-variant/20 relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        
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

          {/* Navigation Buttons for Manual Sliding (1 by 1) */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-end">
            <button
              onClick={handlePrev}
              aria-label="Previous client"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-outline-variant/40 hover:border-secondary-container hover:bg-secondary-container/10 text-primary hover:text-secondary flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer focus:outline-none"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">arrow_back</span>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next client"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary hover:bg-secondary-container text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer focus:outline-none"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Carousel Slider Track (Slides 1 by 1) */}
        <div className="relative w-full overflow-hidden py-2 sm:py-4">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${withTransition ? 'transition-transform duration-500 ease-out' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {extendedList.map((customer, idx) => (
              <div
                key={`${customer.id}-${idx}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / itemsPerView}%` }}
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
        </div>

        {/* Indicators for the 5 unique customers */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {VALUABLE_CUSTOMERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to client ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === idx ? 'w-6 bg-secondary-container' : 'w-2 bg-outline-variant/40 hover:bg-outline-variant'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
