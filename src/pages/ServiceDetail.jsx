import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_SERVICES_MAP, OFFICE_LOCATIONS } from '../data/hitechData';
import { useParallax } from '../hooks/useParallax';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const service = ALL_SERVICES_MAP[serviceId];
  const galleryImages = service?.gallery || (service?.image ? [service.image] : []);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Reset active image when service changes
  useEffect(() => {
    setActiveImgIndex(0);
    setLightboxIndex(null);
  }, [serviceId]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  const serviceImgRef = useParallax(0.12, { initialScale: 1.08, maxOffset: 50, disabledOnMobile: true });

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

  const otherServicesList = Object.values(ALL_SERVICES_MAP).filter(
    (s, idx, arr) => s.id !== service.id && arr.findIndex(item => item.id === s.id) === idx
  );

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">

      {/* Hero Header */}
      <section className="relative w-full bg-primary text-white pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 md:px-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="reveal-slide-up flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-white/60 mb-3 sm:mb-4 uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-secondary-fixed-dim truncate max-w-[200px] sm:max-w-none">{service.title}</span>
          </div>

          <span className="reveal-slide-up inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-3 sm:mb-4 uppercase tracking-widest text-[10px] sm:text-xs font-semibold" data-delay="100ms">
            {service.category}
          </span>

          <h1 className="reveal-slide-up font-headline-xl text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4" data-delay="200ms">
            {service.title}
          </h1>
          <p className="reveal-slide-up font-body-lg text-xs sm:text-sm md:text-base text-white/80 max-w-3xl leading-relaxed" data-delay="300ms">
            {service.fullDesc}
          </p>
        </div>
      </section>

      {/* Page Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">

          {/* Main Left Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">

            {/* Interactive Image Showcase */}
            <div className="reveal-slide-up space-y-3 sm:space-y-4">
              {/* Main Active Image with Parallax Depth & Click-to-Zoom */}
              <div
                onClick={() => setLightboxIndex(activeImgIndex)}
                className="relative rounded-3xl overflow-hidden shadow-2xl h-[250px] sm:h-[360px] md:h-[440px] cursor-pointer group bg-slate-900"
              >
                <img
                  ref={serviceImgRef}
                  src={galleryImages[activeImgIndex] || service.image}
                  alt={`${service.title} - Main View`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Overlay Badge & Fullscreen Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex items-end justify-between p-4 sm:p-6">
                  <div className="text-white">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 sm:px-3 sm:py-1 bg-secondary-container rounded-md">
                      Photo {activeImgIndex + 1} of {galleryImages.length}
                    </span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full hover:bg-secondary-container transition-colors">
                    <span className="material-symbols-outlined text-base sm:text-lg">fullscreen</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails Row (Multiple Photos Switcher) */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {galleryImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      aria-label={`View photo ${idx + 1}`}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${activeImgIndex === idx
                          ? 'border-secondary-container ring-2 ring-secondary-container/40 scale-105 shadow-md'
                          : 'border-outline-variant/30 opacity-70 hover:opacity-100 hover:border-primary'
                        }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${service.title} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="reveal-slide-up space-y-3 sm:space-y-4">
              <h2 className="font-headline-lg text-xl sm:text-2xl font-bold text-primary">Overview & Key Features</h2>
              <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {service.excerpt}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="reveal-stagger-item flex items-start gap-2.5 sm:gap-3 bg-surface-container-low p-3.5 sm:p-4 rounded-2xl border border-outline-variant/20 shadow-sm" data-delay={`${idx * 80}ms`}>
                    <span className="material-symbols-outlined text-secondary-container mt-0.5 text-base sm:text-lg shrink-0">check_circle</span>
                    <span className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Project Photo Gallery Section */}
            {galleryImages.length > 1 && (
              <div className="reveal-slide-up space-y-4 sm:space-y-6 pt-2 sm:pt-4">
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                  <div>
                    <h2 className="font-headline-lg text-xl sm:text-2xl font-bold text-primary">On-Site Installation Gallery</h2>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                      High-resolution site execution photos for {service.title}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                    {galleryImages.length} Photos
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {galleryImages.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      className="group relative h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer border border-outline-variant/20"
                    >
                      <img
                        src={imgUrl}
                        alt={`${service.title} Installation ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl sm:text-3xl">zoom_in</span>
                      </div>
                      <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded">
                        Photo #{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications */}
            <div className="reveal-slide-up space-y-4 sm:space-y-6">
              <h2 className="font-headline-lg text-xl sm:text-2xl font-bold text-primary">Engineering Specifications</h2>
              <div className="bg-surface-container-low rounded-3xl p-4 sm:p-6 border border-outline-variant/30 space-y-3 sm:space-y-4 shadow-sm">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between py-2 sm:py-3 border-b border-outline-variant/20 last:border-0 gap-1 sm:gap-2 text-xs">
                    <span className="font-label-md font-bold text-primary uppercase">{spec.label}</span>
                    <span className="font-body-sm text-on-surface-variant sm:text-right font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors Served */}
            <div className="reveal-slide-up space-y-3 sm:space-y-4">
              <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary">Target Applications & Sectors</h3>
              <div className="flex flex-wrap gap-2">
                {service.sectorsServed.map((sector, idx) => (
                  <span key={idx} className="bg-primary/5 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold border border-primary/10">
                    🏢 {sector}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">

            {/* Quick Contact Box */}
            <div className="reveal-slide-right bg-primary text-white p-5 sm:p-8 rounded-3xl shadow-xl space-y-4 sm:space-y-6">
              <h3 className="font-headline-md text-lg sm:text-xl font-bold text-white">Need a Quote For This Pipeline?</h3>
              <p className="font-body-sm text-xs text-white/80 leading-relaxed">
                Connect with our senior gas pipeline engineer to schedule a site inspection or get technical advice.
              </p>

              {submitted ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-xl text-center text-xs font-bold">
                  ✓ Request received! We will call you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  />
                  <textarea
                    rows="3"
                    placeholder="Project location / requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-secondary-container text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-md active:scale-95"
                  >
                    Request Callback
                  </button>
                </form>
              )}

              <div className="pt-3 sm:pt-4 border-t border-white/10 text-xs text-white/80 space-y-1">
                <p>📞 Phone: <a href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`} className="hover:underline text-secondary-container font-bold">{OFFICE_LOCATIONS.headOffice.phone}</a></p>
                <p>✉ Email: <a href={`mailto:${OFFICE_LOCATIONS.headOffice.email}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.email}</a></p>
              </div>
            </div>

            {/* Other Services List */}
            <div className="reveal-slide-right bg-surface-container-low p-5 sm:p-6 rounded-3xl border border-outline-variant/30 space-y-3 sm:space-y-4 shadow-sm" data-delay="150ms">
              <h4 className="font-headline-md text-sm sm:text-base font-bold text-primary border-b border-outline-variant/20 pb-3">Other Pipeline Systems</h4>
              <div className="space-y-1.5 sm:space-y-2">
                {otherServicesList.slice(0, 6).map((srv) => (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.id}`}
                    className="block p-2.5 sm:p-3 rounded-xl hover:bg-white text-xs font-semibold text-on-surface-variant hover:text-primary transition-all border border-transparent hover:border-outline-variant/20"
                  >
                    → {srv.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-6 md:p-8 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-all z-10"
            aria-label="Close photo preview"
          >
            <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
          </button>

          {/* Navigation - Prev */}
          {galleryImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-secondary-container p-2 sm:p-3 rounded-full transition-all z-10"
              aria-label="Previous photo"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_left</span>
            </button>
          )}

          {/* Image Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex]}
              alt={`${service.title} - Full Size ${lightboxIndex + 1}`}
              className="max-w-full max-h-[65vh] sm:max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-3 sm:mt-4 text-center text-white space-y-0.5 sm:space-y-1">
              <p className="font-headline-md text-xs sm:text-sm md:text-base font-bold">{service.title}</p>
              <p className="font-body-sm text-[11px] sm:text-xs text-white/70">
                Installation Photo {lightboxIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Navigation - Next */}
          {galleryImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-secondary-container p-2 sm:p-3 rounded-full transition-all z-10"
              aria-label="Next photo"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_right</span>
            </button>
          )}
        </div>
      )}

    </div>
  );
}
