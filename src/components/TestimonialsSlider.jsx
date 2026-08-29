import React from 'react';
import { TESTIMONIALS } from '../data/hitechData';

export default function TestimonialsSlider({ duration = 50 }) {
  return (
    <div 
      className="marquee-container marquee-mask py-3 sm:py-5 select-none"
      style={{ '--marquee-duration': `${duration}s` }}
    >
      {/* Infinite Horizontal Marquee Track (Right to Left, Pause on Hover) */}
      <div className="marquee-track-left">
        {/* Primary Set */}
        <div className="flex items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
          {TESTIMONIALS.map((t) => (
            <div 
              key={`testimonial-${t.id}`} 
              className="w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0"
            >
              <div className="bg-white text-on-surface p-5 sm:p-7 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full border border-outline-variant/10 hover:shadow-2xl transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-secondary-container text-3xl sm:text-4xl font-serif leading-none">“</span>
                    <div className="flex text-amber-400 text-xs sm:text-sm">
                      ★★★★★
                    </div>
                  </div>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-5 sm:mb-6 italic">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-3.5 border-t border-outline-variant/20 pt-3.5 sm:pt-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    loading="lazy"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-secondary-container shadow-sm shrink-0" 
                  />
                  <div className="overflow-hidden">
                    <h4 className="font-headline-md font-bold text-xs sm:text-sm text-primary truncate">{t.name}</h4>
                    <p className="font-label-md text-[10px] sm:text-[11px] font-semibold text-secondary truncate">{t.role}</p>
                  </div>
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
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={`testimonial-clone-${t.id}-${idx}`} 
              className="w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0"
            >
              <div className="bg-white text-on-surface p-5 sm:p-7 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full border border-outline-variant/10 hover:shadow-2xl transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-secondary-container text-3xl sm:text-4xl font-serif leading-none">“</span>
                    <div className="flex text-amber-400 text-xs sm:text-sm">
                      ★★★★★
                    </div>
                  </div>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-5 sm:mb-6 italic">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-3.5 border-t border-outline-variant/20 pt-3.5 sm:pt-4">
                  <img 
                    src={t.avatar} 
                    alt="" 
                    loading="lazy"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-secondary-container shadow-sm shrink-0" 
                  />
                  <div className="overflow-hidden">
                    <h4 className="font-headline-md font-bold text-xs sm:text-sm text-primary truncate">{t.name}</h4>
                    <p className="font-label-md text-[10px] sm:text-[11px] font-semibold text-secondary truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
