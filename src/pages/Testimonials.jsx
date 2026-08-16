import React from 'react';
import { TESTIMONIALS } from '../data/nglsData';

export default function Testimonials() {
  return (
    <div className="w-full bg-white text-on-surface">
      
      {/* Banner - Flush with top navbar */}
      <section className="bg-primary text-white pt-28 pb-16 px-4 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold">
            Client Feedback & Trust
          </span>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4">
            Testimonials & Client Feedback
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Read authentic reviews from industrial managers, apartment association leaders, and commercial client partners.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="bg-white border border-outline-variant/30 p-8 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-secondary font-bold text-sm mb-3">
                  ★★★★★ <span className="text-xs text-on-surface-variant font-semibold ml-2">5.0 Rating</span>
                </div>
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary-container"
                />
                <div>
                  <h4 className="font-headline-md font-bold text-sm text-primary">{t.name}</h4>
                  <p className="font-label-md text-xs font-bold text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
