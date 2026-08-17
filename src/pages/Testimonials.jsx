import React from 'react';
import { TESTIMONIALS } from '../data/hitechData';
import TestimonialsSlider from '../components/TestimonialsSlider';

export default function Testimonials() {
  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      
      {/* Banner */}
      <section className="bg-primary text-white pt-28 pb-16 px-4 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <span className="reveal-slide-up inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold" data-delay="100ms">
            Client Feedback & Trust
          </span>
          <h1 className="reveal-slide-up font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4" data-delay="200ms">
            Testimonials & Client Feedback
          </h1>
          <p className="reveal-slide-up font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed" data-delay="300ms">
            Read authentic reviews from industrial managers, apartment association leaders, and commercial client partners across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <div className="bg-primary pb-20 pt-4 px-4 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <TestimonialsSlider />
        </div>
      </div>

      {/* Testimonials Detail Grid */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-20">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">Verified Customer Reviews</span>
          <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-primary mt-1">All Client Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id} 
              data-delay={`${idx * 100}ms`}
              className="reveal-stagger-item bg-white border border-outline-variant/30 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-secondary-container text-3xl font-serif">“</span>
                  <div className="text-amber-400 text-sm">★★★★★</div>
                </div>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed italic mb-6">
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary-container shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="font-headline-md font-bold text-sm text-primary truncate">{t.name}</h4>
                  <p className="font-label-md text-xs font-semibold text-secondary truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
