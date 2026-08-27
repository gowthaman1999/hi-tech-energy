import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  COMPANY_INFO,
  PRIMARY_SERVICES,
  OTHER_SERVICES,
  OPPORTUNITIES_DATA,
  FUTURE_OUTLOOK_DATA,
  OFFICE_LOCATIONS,
  FEATURED_PROJECT_SPOTLIGHT
} from '../data/hitechData';
import { useParallax } from '../hooks/useParallax';
import TestimonialsSlider from '../components/TestimonialsSlider';
import AnimatedCounter from '../components/AnimatedCounter';
import CustomersSlider from '../components/CustomersSlider';
import LocationsWeServe from '../components/LocationsWeServe';

export default function Home() {
  const navigate = useNavigate();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Parallax hook references for key background & showcase elements
  const heroBgRef = useParallax(0.22, { initialScale: 1.15, maxOffset: 120, disabledOnMobile: true });
  const spotlightMediaRef = useParallax(0.12, { initialScale: 1.08, maxOffset: 60, disabledOnMobile: true });
  const futureMediaRef = useParallax(0.15, { initialScale: 1.08, maxOffset: 70, disabledOnMobile: true });
  const mapMediaRef = useParallax(0.1, { initialScale: 1.06, maxOffset: 50, disabledOnMobile: true });

  const stats = [
    { end: 100, suffix: '%', label: 'Safety Compliant', delay: '0ms' },
    { end: 20, suffix: 'k+', label: 'Pipeline Installations', delay: '100ms' },
    { staticText: 'VOT & LOT', label: 'Commercial Systems', delay: '200ms' },
    { end: 24, suffix: '/7', label: 'Technical Safety Support', delay: '300ms' }
  ];

  const steps = [
    { num: '1', title: 'Consultation', desc: 'Requirement analysis and site safety feasibility survey.' },
    { num: '2', title: 'Design', desc: 'CAD modeling, header sizing & hydraulic safety calculations.' },
    { num: '3', title: 'Installation', desc: 'SS seamless piping, manifold skid & pressure regulator setup.', active: true },
    { num: '4', title: 'Pneumatic Testing', desc: 'Hydrostatic pressure testing and gas leak certification.' },
    { num: '5', title: 'Commissioning', desc: 'Safe start-up, customer handover & periodic safety servicing.' }
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* Hero Section with Parallax Depth */}
      <header className="relative w-full min-h-[calc(20vh-5rem)] md:min-h-screen py-4 sm:py-10 md:pt-24 md:pb-16 flex items-center overflow-hidden bg-primary text-white parallax-container">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 md:via-primary/75 to-transparent z-10"></div>
          <img
            ref={heroBgRef}
            className="w-full h-full object-cover origin-center"
            alt="HI TECH ENERGY LPG pipeline network"
            src="/images/gdrive/LOT_system_pipeline_WhatsApp_Image_2026-08-17_at_8_45_09_PM__1_.jpeg"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="relative z-20 px-4 sm:px-6 md:px-16 max-w-4xl text-left">
          <span className="reveal-slide-left inline-block px-3 py-1 md:px-4 md:py-1.5 bg-secondary-container/20 backdrop-blur-md border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-2.5 sm:mb-4 md:mb-6 uppercase tracking-widest text-[10px] sm:text-xs font-semibold" data-delay="100ms">
            {COMPANY_INFO.slogan}
          </span>
          <h1 className="reveal-slide-left font-headline-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 md:mb-4 leading-tight font-bold" data-delay="200ms">
            {COMPANY_INFO.name}
          </h1>
          <p className="reveal-slide-left text-secondary-container font-headline-md text-base sm:text-xl md:text-2xl font-semibold mb-2.5 sm:mb-4 md:mb-6" data-delay="300ms">
            {COMPANY_INFO.tagline}
          </p>
          <p className="reveal-slide-left font-body-lg text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 text-white/85 max-w-2xl leading-relaxed" data-delay="400ms">
            Professional LPG Gas Pipeline Solutions for domestic homes, hotels, restaurants, commercial kitchens, catering units, chemistry laboratories, and industrial food service facilities.
          </p>

          {/* Quick Contact Badges */}
          <div className="reveal-slide-left flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6 md:mb-8 text-[11px] sm:text-xs text-white/90" data-delay="500ms">
            <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20">
              📞 {COMPANY_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20">
              ✉ {COMPANY_INFO.email}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20">
              📍 Coimbatore - 641108
            </span>
          </div>

          <div className="reveal-slide-left flex flex-col sm:flex-row gap-2.5 sm:gap-4" data-delay="600ms">
            <button
              onClick={() => navigate('/contact')}
              className="bg-secondary-container text-on-secondary px-6 py-3 sm:px-8 sm:py-3.5 md:py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg group cursor-pointer font-bold text-xs sm:text-sm md:text-base active:scale-95"
            >
              Get Consultation
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-base sm:text-lg md:text-xl">arrow_forward</span>
            </button>
            <button
              onClick={() => navigate('/services')}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 hover:bg-white/20 transition-all cursor-pointer font-bold text-xs sm:text-sm md:text-base active:scale-95"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-white/50 text-3xl md:text-4xl">expand_more</span>
        </div>
      </header>

      {/* Animated Statistics */}
      <section className="py-8 sm:py-12 md:py-16 bg-primary text-white overflow-hidden border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="reveal-slide-up text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5"
                data-delay={stat.delay}
              >
                <div className="font-headline-xl text-2xl sm:text-3xl md:text-5xl text-secondary-container mb-1 sm:mb-2 font-bold min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    staticText={stat.staticText}
                    duration={2000}
                  />
                </div>
                <div className="font-label-md uppercase tracking-widest text-white/70 text-[10px] sm:text-xs font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Gas Pipeline Services */}
      <section className="py-12 sm:py-16 md:py-24 bg-white" id="services">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 text-left">
          <div className="reveal-slide-up flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">{COMPANY_INFO.slogan}</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 mt-1">Our Gas Pipeline Services</h2>
              <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">Comprehensive gas infrastructure solutions tailored to domestic residences, commercial kitchens, apartment flats, chemistry labs, and industrial facilities.</p>
            </div>
            <Link
              to="/services"
              className="text-primary font-label-md border-b-2 border-secondary-container hover:text-secondary transition-all font-semibold pb-1 self-start md:self-auto text-xs sm:text-sm"
            >
              Explore All Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRIMARY_SERVICES.map((srv, i) => (
              <div
                key={i}
                data-delay={`${i * 100}ms`}
                className="reveal-stagger-item group p-5 sm:p-7 md:p-8 bg-surface-container-low rounded-3xl border border-outline-variant/30 hover:border-secondary-container transition-all hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 sm:mb-6 relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover service-card-img-zoom"
                    />
                  </div>
                  <span className="inline-block px-2.5 py-1 bg-secondary-container/10 text-secondary-container font-label-md text-[10px] sm:text-[11px] font-bold rounded-md uppercase tracking-wider mb-2">
                    {srv.category}
                  </span>
                  <h3 className="font-headline-md text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary group-hover:text-secondary transition-colors">{srv.title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-5 sm:mb-6 text-xs leading-relaxed">{srv.excerpt}</p>
                </div>
                <div>
                  <Link
                    to={`/services/${srv.id}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-primary group-hover:text-secondary transition-colors"
                  >
                    <span>View Dedicated Details</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Case Study Spotlight with Parallax Media */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

            <div className="reveal-slide-left space-y-4 sm:space-y-6">
              <span className="px-3 py-1 bg-secondary-container text-white text-[10px] sm:text-xs font-bold uppercase rounded-md tracking-wider">
                Featured Success Story
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                {FEATURED_PROJECT_SPOTLIGHT.title}
              </h2>
              <p className="font-body-md text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
                {FEATURED_PROJECT_SPOTLIGHT.desc}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-secondary-container text-on-secondary px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:opacity-90 transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  Talk To An Expert
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:bg-white/10 transition-all cursor-pointer active:scale-95"
                >
                  View All Success Stories
                </button>
              </div>
            </div>

            {/* Video Spotlight Box with Parallax */}
            <div
              className="reveal-slide-right relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer"
              onClick={() => setVideoModalOpen(true)}
            >
              <div className="w-full h-56 sm:h-72 md:h-[360px] overflow-hidden relative">
                <img
                  ref={spotlightMediaRef}
                  src={FEATURED_PROJECT_SPOTLIGHT.image}
                  alt="Daksha Properties Coimbatore Domestic Pipeline Installation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary-container text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-primary/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold text-white border border-white/10">
                Watch Project Case Study Video
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm" onClick={() => setVideoModalOpen(false)}>
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-xl sm:text-2xl font-bold bg-black/60 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-10 hover:bg-secondary-container"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={FEATURED_PROJECT_SPOTLIGHT.videoUrl}
                title="Daksha Properties Coimbatore Project Case Study"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Our Valuable Customers Slider Section */}
      <CustomersSlider />

      {/* Specialized Pipeline Systems & Control Systems */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="reveal-slide-up mb-8 sm:mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Engineering Systems</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4 mt-1">Specialized Pipeline Systems & Equipment</h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">From high-efficiency gas filtration to precision gas control panels, auto leak shut-off systems, and modular expansions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {OTHER_SERVICES.filter(srv => srv.id !== 'gas-control-panel-system' && srv.id !== 'leakage-detection-system').map((srv, idx) => (
              <div
                key={idx}
                data-delay={`${idx * 100}ms`}
                className="reveal-stagger-item bg-surface-container-low rounded-3xl p-5 sm:p-6 border border-outline-variant/30 hover:border-secondary-container transition-all hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-5 sm:mb-6 relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover service-card-img-zoom"
                    />
                  </div>
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary font-label-md text-[9px] sm:text-[10px] font-bold rounded uppercase tracking-wider mb-2">
                    {srv.category}
                  </span>
                  <h3 className="font-headline-md text-base sm:text-lg font-bold mb-2 sm:mb-3 text-primary">{srv.title}</h3>
                  <p className="font-body-md text-on-surface-variant text-xs leading-relaxed mb-5 sm:mb-6">{srv.excerpt}</p>
                </div>
                <Link
                  to={`/services/${srv.id}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-primary group-hover:text-secondary transition-colors"
                >
                  <span>View Technical Specs</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section: Pathways to Expansion */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/30 text-left relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="reveal-slide-up text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Pathways to Expansion</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-1 mb-2 sm:mb-4">Opportunities With Centralized Gas Pipeline</h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">Designed for scalability, seamless maintenance, and long-term operating profitability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {OPPORTUNITIES_DATA.map((opp, idx) => (
              <div
                key={idx}
                data-delay={`${idx * 150}ms`}
                className="reveal-slide-up bg-white p-5 sm:p-7 md:p-8 rounded-3xl border border-outline-variant/30 shadow-md hover:shadow-xl transition-all flex gap-4 sm:gap-6 items-start hover:-translate-y-1"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-secondary-container/10 text-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">{opp.icon}</span>
                </div>
                <div className="space-y-1.5 sm:space-y-3">
                  <h3 className="font-headline-md text-base sm:text-xl font-bold text-primary">{opp.title}</h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{opp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook Section: Parallax Media Integration */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-white text-left relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

            <div className="reveal-slide-left space-y-4 sm:space-y-6">
              <span className="text-secondary-fixed-dim font-bold text-xs uppercase tracking-widest">System Upgrades</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {FUTURE_OUTLOOK_DATA.title}
              </h2>
              <p className="font-body-md text-xs sm:text-sm text-white/80 leading-relaxed">
                {FUTURE_OUTLOOK_DATA.desc}
              </p>

              <div className="pt-2">
                <h4 className="font-headline-md text-xs font-bold text-secondary-container uppercase tracking-wider mb-3 sm:mb-4">
                  Supported Upgrades & Integrations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {FUTURE_OUTLOOK_DATA.upgradeItems.map((item, idx) => (
                    <div
                      key={idx}
                      data-delay={`${idx * 60}ms`}
                      className="reveal-stagger-item flex items-center gap-2 bg-white/10 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs font-semibold text-white/90 border border-white/5"
                    >
                      <span className="material-symbols-outlined text-secondary-container text-sm sm:text-base">check_circle</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal-slide-right relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <div className="w-full h-64 sm:h-80 md:h-[440px] overflow-hidden relative">
                <img
                  ref={futureMediaRef}
                  src="/images/gdrive/LOT_system_pipeline_WhatsApp_Image_2026-08-17_at_8_45_11_PM__1_.jpeg"
                  alt="Future Outlook Gas Pipeline Upgrades"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-primary/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/10 text-xs">
                <p className="font-bold text-white text-xs sm:text-sm">Seamless Scaling & Retrofit Assurance</p>
                <p className="text-white/70 text-[10px] sm:text-[11px] mt-0.5 sm:mt-1">Pre-engineered takeoff points eliminate downtime during future capacity increases.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Process - Fully Optimized Desktop & Mobile Layout */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface-container overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">

          <div className="reveal-slide-up text-center mb-8 sm:mb-14 md:mb-20">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Systematic Framework</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3 mt-1">Our Engineering Process</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              From initial feasibility studies to pneumatic testing and long-term maintenance, we follow a rigorous 5-step framework to ensure project excellence.
            </p>
          </div>

          {/* Desktop/Tablet Horizontal Layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 lg:gap-6 text-center relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-delay={`${idx * 120}ms`}
                className="reveal-stagger-item relative z-10 flex flex-col items-center bg-white p-5 lg:p-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md font-bold text-sm transition-transform hover:scale-110 duration-300 ${step.active ? 'bg-secondary-container text-white shadow-lg' : 'bg-primary text-white'
                  }`}>
                  {step.num}
                </div>
                <h4 className="font-headline-md text-sm lg:text-base text-primary mb-2 font-bold">{step.title}</h4>
                <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Stepper Layout */}
          <div className="md:hidden space-y-3 sm:space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-delay={`${idx * 100}ms`}
                className="reveal-slide-up bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/20 shadow-sm flex items-start gap-3.5 sm:gap-4"
              >
                {/* Stepper Node */}
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow-md ${step.active ? 'bg-secondary-container text-white' : 'bg-primary text-white'
                  }`}>
                  {step.num}
                </div>

                {/* Stepper Card */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-headline-md text-sm font-bold text-primary">{step.title}</h4>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-secondary-container/10 text-secondary">
                      Step 0{step.num}
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center">

            <div className="reveal-slide-left space-y-4 sm:space-y-6 text-left">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Reach Out To Us</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary">Head Office & Contact</h2>

              <div className="space-y-4 sm:space-y-6 pt-1 sm:pt-2">
                <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border-l-4 border-secondary-container shadow-sm">
                  <h4 className="font-headline-md font-bold text-sm sm:text-base text-primary mb-1">{OFFICE_LOCATIONS.headOffice.title}</h4>
                  <p className="font-headline-sm text-xs font-semibold text-secondary mb-2">{COMPANY_INFO.tagline}</p>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-2">{OFFICE_LOCATIONS.headOffice.address}</p>
                  <p className="font-body-sm text-xs font-semibold text-secondary-container mb-2">📌 {OFFICE_LOCATIONS.headOffice.plusCode}</p>
                  <div className="font-body-sm text-xs font-bold text-secondary space-y-1">
                    <p>📞 Phone: <a href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.phone}</a></p>
                    <p>✉ Email: <a href={`mailto:${OFFICE_LOCATIONS.headOffice.email}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.email}</a></p>
                  </div>
                </div>

                <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                  <h4 className="font-headline-md font-bold text-sm sm:text-base text-primary mb-2">Safe. Smart. Economical.</h4>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-2">
                    Delivering gas pipelines with auto shut-off, gas leak alarm systems, and external cylinder security.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-slide-right lg:col-span-2">
              <LocationsWeServe />
            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonials Carousel / Slider */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="reveal-slide-up text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-secondary-fixed-dim font-bold text-xs uppercase tracking-widest">Client Testimonials</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 sm:mt-2">Listen To Our Client's Feedback</h2>
            <p className="font-body-md text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">Hear directly from homeowners, commercial hospitality partners, and industrial clients.</p>
          </div>

          <div className="reveal-slide-up">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

    </div>
  );
}
