import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  PRIMARY_SERVICES, 
  OTHER_SERVICES, 
  TESTIMONIALS, 
  OFFICE_LOCATIONS,
  FEATURED_PROJECT_SPOTLIGHT 
} from '../data/nglsData';

export default function Home() {
  const navigate = useNavigate();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const stats = [
    { value: '450+', label: 'Active Pipeline Installations', delay: '0ms' },
    { value: '3,000+', label: 'Happy Customers', delay: '100ms' },
    { value: '97%', label: 'Customer Satisfaction Rating', delay: '200ms' },
    { value: '24/7', label: 'Technical Safety Support', delay: '300ms' }
  ];

  const steps = [
    { num: '1', title: 'Consultation', desc: 'Requirement analysis and site feasibility survey.' },
    { num: '2', title: 'Design', desc: 'CAD modeling and hydraulic safety calculations.' },
    { num: '3', title: 'Installation', desc: 'Expert engineering team executes site development.', active: true },
    { num: '4', title: 'Testing', desc: 'Pneumatic testing and safety certification.' },
    { num: '5', title: 'Maintenance', desc: 'Ongoing support and periodic safety inspections.' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="relative w-full min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover"
            alt="LPG pipeline network"
            src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1920&q=80"
          />
        </div>
        <div className="relative z-20 px-4 md:px-16 max-w-4xl text-left">
          <span className="inline-block px-4 py-1.5 bg-secondary-container/20 backdrop-blur-md border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-6 uppercase tracking-widest text-xs font-semibold">
            One Stop Solution For All Kinds of Gas Pipeline Systems
          </span>
          <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-bold">
            Engineering the <span className="text-secondary-container">Future</span> of Energy
          </h1>
          <p className="font-body-lg text-lg md:text-xl mb-10 text-white/80 max-w-2xl leading-relaxed">
            Providing top-class LPG pipeline installation and maintenance services for domestic residencies, commercial sectors, industries, and medical platforms with maximum safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-secondary-container text-on-secondary px-8 py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg group cursor-pointer"
            >
              Get Consultation
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button
              onClick={() => navigate('/services')}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 hover:bg-white/20 transition-all cursor-pointer"
            >
              Explore Solutions
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-white/50 text-4xl">expand_more</span>
        </div>
      </header>

      {/* Animated Statistics */}
      <section className="py-20 bg-primary text-white overflow-hidden border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center reveal-up active"
                style={{ transitionDelay: stat.delay }}
              >
                <div className="font-headline-xl text-3xl md:text-5xl text-secondary-container mb-2 font-bold">{stat.value}</div>
                <div className="font-label-md uppercase tracking-widest text-white/60 text-xs font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Gas Pipeline Services */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Get First Class Experience</span>
              <h2 className="font-headline-lg text-3xl font-bold text-primary mb-2 mt-1">Our Top Pipeline Services</h2>
              <p className="font-body-md text-on-surface-variant text-base">Comprehensive gas infrastructure solutions tailored to domestic homes, commercial kitchens, apartments, and large industrial facilities.</p>
            </div>
            <Link
              to="/services"
              className="text-primary font-label-md border-b-2 border-secondary-container hover:text-secondary transition-all font-semibold pb-1"
            >
              Explore All Solutions
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRIMARY_SERVICES.map((srv, i) => (
              <div
                key={i}
                className="group p-8 bg-surface-container-low rounded-3xl border border-outline-variant/30 hover:border-secondary-container transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline-md text-2xl font-semibold mb-3 text-primary">{srv.title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-6 text-sm leading-relaxed">{srv.excerpt}</p>
                </div>
                <div>
                  <Link
                    to={`/services/${srv.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary transition-colors"
                  >
                    <span>View Dedicated Page</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Case Study Spotlight */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="px-3 py-1 bg-secondary-container text-white text-xs font-bold uppercase rounded-md tracking-wider">
                Featured Success Story
              </span>
              <h2 className="font-headline-lg text-3xl font-bold leading-tight text-white">
                {FEATURED_PROJECT_SPOTLIGHT.title}
              </h2>
              <p className="font-body-md text-white/80 text-base leading-relaxed">
                {FEATURED_PROJECT_SPOTLIGHT.desc}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-secondary-container text-on-secondary px-8 py-3.5 rounded-xl font-headline-md font-bold text-sm hover:opacity-90 transition-all cursor-pointer"
                >
                  Talk To An Expert
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="border border-white/30 text-white px-8 py-3.5 rounded-xl font-headline-md font-bold text-sm hover:bg-white/10 transition-all cursor-pointer"
                >
                  View All Success Stories
                </button>
              </div>
            </div>

            {/* Video Spotlight Box */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer"
              onClick={() => setVideoModalOpen(true)}
            >
              <img 
                src={FEATURED_PROJECT_SPOTLIGHT.image} 
                alt="AJJ Bakes Tuticorin LOT Installation" 
                className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-secondary-container text-white rounded-full flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-white">
                Watch Project Case Study Video
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setVideoModalOpen(false)}>
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/60 w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-secondary-container"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe 
                src={FEATURED_PROJECT_SPOTLIGHT.videoUrl} 
                title="AJJ Bakes Tuticorin Project Case Study" 
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Other Specialized Services */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Other Services We Serve People With!</h2>
            <p className="font-body-md text-on-surface-variant text-base">We provide gas pipeline services with other top-quality accessorial services like fuel conversion, repair & maintenance, yearly servicing, and many others.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OTHER_SERVICES.map((srv, idx) => (
              <div 
                key={idx}
                className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/30 hover:border-secondary-container transition-all hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-headline-md text-xl font-semibold mb-3 text-primary">{srv.title}</h3>
                  <p className="font-body-md text-on-surface-variant text-xs leading-relaxed mb-6">{srv.excerpt}</p>
                </div>
                <Link
                  to={`/services/${srv.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary transition-colors"
                >
                  <span>View Dedicated Page</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Our Engineering Process</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-base">From initial feasibility studies to long-term maintenance, we follow a rigorous 5-step framework to ensure project excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md font-bold ${
                  step.active ? 'bg-secondary-container text-white shadow-lg' : 'bg-white border-2 border-secondary-container text-secondary'
                }`}>
                  {step.num}
                </div>
                <h4 className="font-label-md text-primary mb-2 font-bold">{step.title}</h4>
                <p className="font-body-sm text-on-surface-variant text-xs px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Reach Out To Us</span>
              <h2 className="font-headline-lg text-3xl font-bold text-primary">Locations We Serve</h2>

              <div className="space-y-6 pt-2">
                <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-secondary-container">
                  <h4 className="font-headline-md font-bold text-base text-primary mb-2">{OFFICE_LOCATIONS.headOffice.title}</h4>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-2">{OFFICE_LOCATIONS.headOffice.address}</p>
                  <p className="font-body-sm text-xs font-bold text-secondary">{OFFICE_LOCATIONS.headOffice.phone}</p>
                </div>

                <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary">
                  <h4 className="font-headline-md font-bold text-base text-primary mb-2">{OFFICE_LOCATIONS.warehouse.title}</h4>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-2">{OFFICE_LOCATIONS.warehouse.address}</p>
                  <p className="font-body-sm text-xs font-bold text-primary">{OFFICE_LOCATIONS.warehouse.phone}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 text-center">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80" 
                alt="Service Map" 
                className="w-full h-[320px] object-cover rounded-2xl opacity-90"
              />
              <div className="mt-4 font-body-sm text-xs font-bold text-on-surface-variant">
                Serving Coimbatore, Tamil Nadu, All Major Industrial Hubs in India & Select International Sites.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary-fixed-dim font-bold text-xs uppercase tracking-widest">Client Testimonials</span>
            <h2 className="font-headline-lg text-3xl font-bold text-white mt-2">Listen To Our Client's Feedback</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white text-on-surface p-8 rounded-3xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="text-secondary-container text-3xl font-serif mb-4">“</div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-secondary-container" />
                  <div>
                    <h4 className="font-headline-md font-bold text-sm text-primary">{t.name}</h4>
                    <p className="font-label-md text-xs font-bold text-secondary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
