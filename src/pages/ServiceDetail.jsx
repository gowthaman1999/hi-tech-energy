import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_SERVICES_MAP, OFFICE_LOCATIONS } from '../data/hitechData';
import { useParallax } from '../hooks/useParallax';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceImgRef = useParallax(0.12, { initialScale: 1.08, maxOffset: 50, disabledOnMobile: true });

  const service = ALL_SERVICES_MAP[serviceId];

  if (!service) {
    return (
      <div className="w-full min-h-screen pt-32 pb-20 text-center bg-white text-on-surface">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <h1 className="font-headline-lg text-3xl font-bold text-primary">Service Not Found</h1>
          <p className="font-body-md text-sm text-on-surface-variant">The requested service page does not exist or has been moved.</p>
          <Link to="/services" className="inline-block bg-secondary-container text-white px-6 py-3 rounded-xl font-bold text-xs uppercase">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const otherServicesList = Object.values(ALL_SERVICES_MAP).filter(s => s.id !== service.id);

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative w-full bg-primary text-white pt-28 pb-16 px-4 md:px-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="reveal-slide-up flex items-center gap-2 text-xs font-bold text-white/60 mb-4 uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-secondary-fixed-dim">{service.title}</span>
          </div>

          <span className="reveal-slide-up inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold" data-delay="100ms">
            {service.category}
          </span>
          
          <h1 className="reveal-slide-up font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4" data-delay="200ms">
            {service.title}
          </h1>
          <p className="reveal-slide-up font-body-lg text-sm md:text-base text-white/80 max-w-3xl leading-relaxed" data-delay="300ms">
            {service.fullDesc}
          </p>
        </div>
      </section>

      {/* Page Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Main Featured Image with Parallax Depth */}
            <div className="reveal-slide-up relative rounded-3xl overflow-hidden shadow-2xl h-[380px]">
              <img 
                ref={serviceImgRef}
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overview */}
            <div className="reveal-slide-up space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-primary">Overview & Key Features</h2>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {service.excerpt}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="reveal-stagger-item flex items-start gap-3 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20 shadow-sm" data-delay={`${idx * 80}ms`}>
                    <span className="material-symbols-outlined text-secondary-container mt-0.5 text-lg shrink-0">check_circle</span>
                    <span className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="reveal-slide-up space-y-6">
              <h2 className="font-headline-lg text-2xl font-bold text-primary">Engineering Specifications</h2>
              <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/30 space-y-4 shadow-sm">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between py-3 border-b border-outline-variant/20 last:border-0 gap-2 text-xs">
                    <span className="font-label-md font-bold text-primary uppercase">{spec.label}</span>
                    <span className="font-body-sm text-on-surface-variant sm:text-right font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors Served */}
            <div className="reveal-slide-up space-y-4">
              <h3 className="font-headline-md text-xl font-bold text-primary">Target Applications & Sectors</h3>
              <div className="flex flex-wrap gap-2">
                {service.sectorsServed.map((sector, idx) => (
                  <span key={idx} className="bg-primary/5 text-primary px-4 py-2 rounded-xl text-xs font-bold border border-primary/10">
                    🏢 {sector}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Contact Box */}
            <div className="reveal-slide-right bg-primary text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h3 className="font-headline-md text-xl font-bold text-white">Need a Quote For This Pipeline?</h3>
              <p className="font-body-sm text-xs text-white/80 leading-relaxed">
                Connect with our senior gas pipeline engineer to schedule a site inspection or get technical advice.
              </p>

              {submitted ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-xl text-center text-xs font-bold">
                  ✓ Request received! We will call you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  />
                  <input 
                    type="tel" 
                    required 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  />
                  <textarea 
                    rows="3" 
                    placeholder="Project location / requirement..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full bg-secondary-container text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-md"
                  >
                    Request Callback
                  </button>
                </form>
              )}

              <div className="pt-4 border-t border-white/10 text-xs text-white/80 space-y-1">
                <p>📞 Phone: <a href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`} className="hover:underline text-secondary-container font-bold">{OFFICE_LOCATIONS.headOffice.phone}</a></p>
                <p>✉ Email: <a href={`mailto:${OFFICE_LOCATIONS.headOffice.email}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.email}</a></p>
              </div>
            </div>

            {/* Other Services List */}
            <div className="reveal-slide-right bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30 space-y-4 shadow-sm" data-delay="150ms">
              <h4 className="font-headline-md text-base font-bold text-primary border-b border-outline-variant/20 pb-3">Other Pipeline Systems</h4>
              <div className="space-y-2">
                {otherServicesList.slice(0, 6).map((srv) => (
                  <Link 
                    key={srv.id}
                    to={`/services/${srv.id}`}
                    className="block p-3 rounded-xl hover:bg-white text-xs font-semibold text-on-surface-variant hover:text-primary transition-all border border-transparent hover:border-outline-variant/20"
                  >
                    → {srv.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
