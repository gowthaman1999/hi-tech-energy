import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_SERVICES, OTHER_SERVICES } from '../data/nglsData';

export default function Services() {
  const [activeTab, setActiveTab] = useState('primary');

  return (
    <div className="w-full bg-white text-on-surface">
      
      {/* Header Banner */}
      <section className="bg-primary text-white pt-28 pb-16 px-4 md:px-16 text-center relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold">
            Precision Gas Infrastructure Solutions
          </span>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4">
            Gas Pipeline & Engineering Services
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            From domestic gas reticulation to industrial LOT systems, medical oxygen pipelines, and automatic gas leakage detection systems. Click on any service for full technical details.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-12 pb-20">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-12 border-b border-outline-variant/20 pb-4">
          <button
            onClick={() => setActiveTab('primary')}
            className={`px-6 py-3 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'primary' 
                ? 'bg-secondary-container text-white shadow-lg' 
                : 'bg-surface-container-low text-primary hover:bg-surface-container'
            }`}
          >
            Gas Pipeline Services (6)
          </button>
          <button
            onClick={() => setActiveTab('other')}
            className={`px-6 py-3 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'other' 
                ? 'bg-secondary-container text-white shadow-lg' 
                : 'bg-surface-container-low text-primary hover:bg-surface-container'
            }`}
          >
            Other Specialized Services (6)
          </button>
        </div>

        {/* PRIMARY PIPELINE SERVICES SECTION */}
        {activeTab === 'primary' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRIMARY_SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="bg-white rounded-3xl p-6 border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
            {OTHER_SERVICES.map((srv) => (
              <div 
                key={srv.id} 
                className="bg-white rounded-3xl p-6 border border-outline-variant/30 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
