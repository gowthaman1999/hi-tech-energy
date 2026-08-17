import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/hitechData';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);

  // Auto-play timer every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

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
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Track */}
      <div className="overflow-hidden py-4 px-1">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="flex-shrink-0 px-3 md:px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white text-on-surface p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full border border-outline-variant/10 hover:shadow-2xl transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-secondary-container text-4xl font-serif leading-none">“</span>
                    <div className="flex text-amber-400 text-sm">
                      ★★★★★
                    </div>
                  </div>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3.5 border-t border-outline-variant/20 pt-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-secondary-container shadow-sm shrink-0" 
                  />
                  <div className="overflow-hidden">
                    <h4 className="font-headline-md font-bold text-xs sm:text-sm text-primary truncate">{t.name}</h4>
                    <p className="font-label-md text-[11px] font-semibold text-secondary truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls: Arrows & Indicators */}
      <div className="flex items-center justify-between mt-8 px-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Testimonial"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-container text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:outline-none"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                currentIndex === idx 
                  ? 'w-8 bg-secondary-container' 
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Testimonial"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-container text-white border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:outline-none"
        >
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>

    </div>
  );
}
