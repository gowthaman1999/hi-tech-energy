import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_SERVICES, OTHER_SERVICES } from '../data/hitechData';

export default function Services() {
  const [activeTab, setActiveTab] = useState('primary');

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      
      {/* Header Banner */}
      <section className="bg-primary text-white pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 md:px-16 text-center relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="reveal-slide-up inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-3 sm:mb-4 uppercase tracking-widest text-[10px] sm:text-xs font-semibold" data-delay="100ms">
            Hi Tech Energy - Safe. Smart. Economical
          </span>
          <h1 className="reveal-slide-up font-headline-xl text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4" data-delay="200ms">
            LPG Gas Pipeline Installation Services
          </h1>
          <p className="reveal-slide-up font-body-lg text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed" data-delay="300ms">
            Professional pipeline infrastructure for domestic homes, commercial kitchens, multi-story apartments, chemistry laboratories, and industrial plants.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 pt-8 sm:pt-12 pb-16 sm:pb-20">
        
        {/* Navigation Tabs */}
        <div className="reveal-slide-up flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-12 border-b border-outline-variant/20 pb-4">
          <button
            onClick={() => setActiveTab('primary')}
            className={`w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center active:scale-95 ${
              activeTab === 'primary' 
                ? 'bg-secondary-container text-white shadow-lg' 
                : 'bg-surface-container-low text-primary hover:bg-surface-container'
            }`}
          >
            Gas Pipeline Services ({PRIMARY_SERVICES.length})
          </button>
          <button
            onClick={() => setActiveTab('other')}
            className={`w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center active:scale-95 ${
              activeTab === 'other' 
                ? 'bg-secondary-container text-white shadow-lg' 
                : 'bg-surface-container-low text-primary hover:bg-surface-container'
            }`}
          >
            Other Specialized Services ({OTHER_SERVICES.length})
          </button>
        </div>

        {/* PRIMARY PIPELINE SERVICES SECTION */}
        {activeTab === 'primary' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRIMARY_SERVICES.map((srv, idx) => (
              <div 
                key={srv.id}
                data-delay={`${idx * 100}ms`}
                className="reveal-stagger-item bg-white rounded-3xl p-5 sm:p-6 border border-outline-variant/30 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 sm:mb-6">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover service-card-img-zoom"
                    />
                    <span className="absolute top-3 left-3 bg-secondary-container text-white font-label-md text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider z-10">
                      {srv.category}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {srv.title}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-5 sm:mb-6">
                    {srv.excerpt}
                  </p>
                </div>
                <Link
                  to={`/services/${srv.id}`}
                  className="w-full text-center bg-primary text-white py-3 rounded-xl font-headline-md text-xs font-bold uppercase hover:bg-secondary-container transition-colors shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>View Dedicated Page</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* OTHER SPECIALIZED SERVICES SECTION */}
        {activeTab === 'other' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {OTHER_SERVICES.map((srv, idx) => (
              <div 
                key={srv.id} 
                data-delay={`${idx * 100}ms`}
                className="reveal-stagger-item bg-white rounded-3xl p-5 sm:p-6 border border-outline-variant/30 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 sm:mb-6">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover service-card-img-zoom"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-white font-label-md text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider z-10">
                      {srv.category}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {srv.title}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-5 sm:mb-6">
                    {srv.excerpt}
                  </p>
                </div>
                <Link
                  to={`/services/${srv.id}`}
                  className="w-full text-center bg-primary text-white py-3 rounded-xl font-headline-md text-xs font-bold uppercase hover:bg-secondary-container transition-colors shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>View Dedicated Page</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
