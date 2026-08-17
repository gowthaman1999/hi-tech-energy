import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS, COMPANY_INFO } from '../data/hitechData';
import { useParallax } from '../hooks/useParallax';

export default function About() {
  const facilityImgRef = useParallax(0.12, { initialScale: 1.08, maxOffset: 50, disabledOnMobile: true });

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      
      {/* Header Banner */}
      <section className="bg-primary text-white pt-28 pb-16 px-4 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <span className="reveal-slide-up inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold" data-delay="100ms">
            {COMPANY_INFO.slogan}
          </span>
          <h1 className="reveal-slide-up font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4" data-delay="200ms">
            About HI TECH ENERGY
          </h1>
          <p className="reveal-slide-up font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed" data-delay="300ms">
            {COMPANY_INFO.tagline} providing safe, reliable, and energy-efficient gas pipeline infrastructure across domestic, commercial, laboratory, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-20 space-y-16">
        
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-slide-left space-y-6">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">
              Safe • Smart • Economical
            </span>
            <h2 className="font-headline-lg text-3xl font-bold text-primary">
              Professional LPG Gas Pipeline Solutions
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              Hi Tech Energy provides professional LPG Gas Pipeline Solutions for domestic homes, hotels, restaurants, commercial kitchens, catering units, chemistry laboratories, and industrial food service facilities.
            </p>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              Every installation is carried out using premium-grade SS seamless pipelines, high-quality pressure regulators, safety shut-off valves, and industry-standard components, ensuring reliable performance and long-term durability.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-secondary-container shadow-sm">
                <div className="font-headline-xl text-2xl font-bold text-primary">100%</div>
                <div className="font-label-md text-xs font-bold text-on-surface-variant uppercase">Safety Standard</div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-primary shadow-sm">
                <div className="font-headline-xl text-2xl font-bold text-primary">24/7</div>
                <div className="font-label-md text-xs font-bold text-on-surface-variant uppercase">Reliable Supply</div>
              </div>
            </div>
          </div>

          <div className="reveal-slide-right relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-[400px] overflow-hidden relative">
              <img 
                ref={facilityImgRef}
                src="/images/gdrive/Comercial_line_for_industries_WhatsApp_Image_2026-08-17_at_8_49_19_PM__1_.jpeg" 
                alt="HI TECH ENERGY Engineering" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="reveal-slide-up bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30">
          <h3 className="font-headline-lg text-2xl font-bold text-primary mb-6 text-center">Head Office & Operations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-secondary-container">
              <h4 className="font-headline-md font-bold text-base text-primary mb-2">{OFFICE_LOCATIONS.headOffice.title}</h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{OFFICE_LOCATIONS.headOffice.address}</p>
              <p className="font-body-sm text-xs font-semibold text-secondary-container mt-2">📌 Location: {OFFICE_LOCATIONS.headOffice.plusCode}</p>
              <p className="font-body-sm text-xs font-bold text-secondary mt-1">📞 Phone: {OFFICE_LOCATIONS.headOffice.phone}</p>
              <p className="font-body-sm text-xs font-bold text-secondary">✉ Email: {OFFICE_LOCATIONS.headOffice.email}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
              <h4 className="font-headline-md font-bold text-base text-primary mb-2">Technical Capabilities</h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Specialized in Domestic LPG pipelines, Commercial VOT line systems, LOT liquid off-take vaporizers, centralized apartment reticulation, chemistry lab lines, and industrial distribution skids.
              </p>
              <p className="font-body-sm text-xs font-bold text-primary mt-3">⚡ Seamless SS Piping & Heavy Regulators</p>
              <p className="font-body-sm text-xs font-bold text-primary">🛡 Auto Shut-off & Gas Leak Alarm Systems</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-slide-up bg-primary text-white p-10 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="font-headline-lg text-2xl font-bold text-white">Ready to Upgrade Your Gas Pipeline Infrastructure?</h3>
          <p className="font-body-md text-xs text-white/80 max-w-xl mx-auto">Contact our engineering team today for site inspection, CAD designs, and quotes.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-secondary-container text-on-secondary px-8 py-3.5 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md"
          >
            Get In Touch
          </Link>
        </div>

      </div>

    </div>
  );
}
