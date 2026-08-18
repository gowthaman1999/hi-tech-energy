import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_SERVICES, OTHER_SERVICES } from '../data/hitechData';

export default function Services() {
  const [activeTab, setActiveTab] = useState('primary');

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      
      {/* Header Banner */}
      <section className="bg-primary text-white pt-28 pb-16 px-4 md:px-16 text-center relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="reveal-slide-up inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold" data-delay="100ms">
            Hi Tech Energy - Safe. Smart. Economical
          </span>
          <h1 className="reveal-slide-up font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4" data-delay="200ms">
            LPG Gas Pipeline Installation Services
          </h1>
          <p className="reveal-slide-up font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed" data-delay="300ms">
            Professional pipeline infrastructure for domestic homes, commercial kitchens, multi-story apartments, chemistry laboratories, and industrial plants.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-12 pb-20">
        
        {/* Navigation Tabs */}
        <div className="reveal-slide-up flex justify-center gap-4 mb-12 border-b border-outline-variant/20 pb-4">
          <button
            onClick={() => setActiveTab('primary')}
            className={`px-6 py-3 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'primary' 
                ? 'bg-secondary-container text-white shadow-lg' 
                : 'bg-surface-container-low text-primary hover:bg-surface-container'
            }`}
          >
            Gas Pipeline Services ({PRIMARY_SERVICES.length})
          </button>
          <button
            onClick={() => setActiveTab('other')}
            className={`px-6 py-3 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRIMARY_SERVICES.map((srv, idx) => (
              <div 
                key={srv.id}
                data-delay={`${idx * 100}ms`}
                className="reveal-stagger-item bg-white rounded-3xl p-6 border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-3 left-3 bg-secondary-container text-white font-label-md text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {srv.category}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {srv.title}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-6">
                    {srv.excerpt}
                  </p>
                </div>
                <Link
                  to={`/services/${srv.id}`}
                  className="w-full text-center bg-primary text-white py-3 rounded-xl font-headline-md text-xs font-bold uppercase hover:bg-secondary-container transition-colors shadow-md flex items-center justify-center gap-1"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OTHER_SERVICES.map((srv, idx) => (
              <div 
                key={srv.id} 
                data-delay={`${idx * 100}ms`}
                className="reveal-stagger-item bg-white rounded-3xl p-6 border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-white font-label-md text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {srv.category}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {srv.title}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-6">
                    {srv.excerpt}
                  </p>
                </div>
                <Link
                  to={`/services/${srv.id}`}
                  className="w-full text-center bg-primary text-white py-3 rounded-xl font-headline-md text-xs font-bold uppercase hover:bg-secondary-container transition-colors shadow-md flex items-center justify-center gap-1"
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
