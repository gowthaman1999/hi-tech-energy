import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPANY_INFO } from '../data/hitechData';

export default function FAQ() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    {
      name: 'Technical Queries',
      icon: 'engineering',
      bgColor: 'bg-primary-fixed',
      textColor: 'text-primary',
      items: [
        {
          q: 'What is the standard pressure rating for industrial pipeline connections?',
          a: 'Our standard industrial connections are rated for 600 PSI for high-flow applications. However, we offer custom configurations reaching up to 1,500 PSI for deep-bore technical environments. All connections meet ISO 9001 and PESO engineering standards.'
        },
        {
          q: 'How do you handle real-time monitoring of gas flow rates?',
          a: 'We utilize telemetry pressure sensors and gas meters. Data is displayed via integrated control panels and leak detectors, providing 24/7 transparency and safety auto-shut-off.'
        }
      ]
    },
    {
      name: 'Safety & Compliance',
      icon: 'verified_user',
      bgColor: 'bg-error-container',
      textColor: 'text-error',
      items: [
        {
          q: 'What emergency shutdown protocols are in place?',
          a: 'All systems feature double and triple-redundant fail-safe valves. In the event of a pressure anomaly or gas sensor alarm, the system initiates a localized hard-stop and closes the solenoid valve instantly.'
        },
        {
          q: 'How often are on-site safety audits performed?',
          a: 'Internal audits occur systematically during installations, followed by periodic maintenance surveys and hydrostatic pressure safety certifications.'
        }
      ]
    },
    {
      name: 'Maintenance & Support',
      icon: 'build',
      bgColor: 'bg-secondary-fixed',
      textColor: 'text-secondary',
      items: [
        {
          q: 'What is the typical response time for technical repairs?',
          a: 'Critical safety issues are addressed immediately with priority support. General maintenance and periodic inspections are scheduled with guaranteed fast turnaround across Tamil Nadu.'
        }
      ]
    },
    {
      name: 'Domestic & Commercial Solutions',
      icon: 'payments',
      bgColor: 'bg-surface-container-highest',
      textColor: 'text-primary',
      items: [
        {
          q: 'Do you offer pipeline solutions for apartments and individual villas?',
          a: 'Yes, we specialize in domestic residential gas pipelines with external cylinder placement, apartment reticulated systems with individual sub-meters, and commercial VOT/LOT kitchen setups.'
        }
      ]
    }
  ];

  const handleToggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-primary text-white text-center">
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 text-center">
          <span className="reveal-slide-up inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-3 sm:mb-4 uppercase tracking-widest text-[10px] sm:text-xs font-semibold">
            {COMPANY_INFO.slogan}
          </span>
          <h1 className="font-headline-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 font-bold">
            Frequently Asked Questions
          </h1>
          <div className="max-w-2xl mx-auto relative group">
            <span className="material-symbols-outlined absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-secondary-container transition-colors text-lg sm:text-xl">
              search
            </span>
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-xs sm:text-sm md:text-base" 
              placeholder="Search technical queries, safety protocols..." 
              type="text" 
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-12 sm:py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 text-left">
        {categories.map((cat, catIdx) => {
          // Filter items based on search term
          const filteredItems = cat.items.filter(
            (item) => 
              item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.a.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={catIdx} className="mb-10 sm:mb-16">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                <div className={`p-2.5 sm:p-3 rounded-xl ${cat.bgColor}`}>
                  <span className={`material-symbols-outlined ${cat.textColor} text-xl sm:text-2xl`}>{cat.icon}</span>
                </div>
                <h2 className="font-headline-lg text-xl sm:text-2xl font-bold text-primary">{cat.name}</h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {filteredItems.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openIndex === key;

                  return (
                    <div 
                      key={itemIdx} 
                      className="bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-secondary-container/50 transition-all shadow-sm"
                    >
                      <button
                        onClick={() => handleToggle(catIdx, itemIdx)}
                        className="w-full flex justify-between items-center p-4 sm:p-6 cursor-pointer text-left focus:outline-none"
                      >
                        <span className="font-semibold text-primary text-xs sm:text-sm md:text-base leading-relaxed pr-3 sm:pr-4">
                          {item.q}
                        </span>
                        <span className={`material-symbols-outlined transition-transform duration-300 text-outline text-xl sm:text-2xl shrink-0 ${
                          isOpen ? 'rotate-180 text-secondary-container' : ''
                        }`}>
                          expand_more
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-on-surface-variant text-xs sm:text-sm leading-relaxed border-t border-outline-variant/10 pt-3 sm:pt-4">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Direct Contact Support CTA */}
      <section className="bg-surface-container py-12 sm:py-16 md:py-24 text-center border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="inline-block p-3 sm:p-4 bg-primary rounded-full mb-5 sm:mb-8">
            <span className="material-symbols-outlined text-white text-3xl sm:text-[40px]">support_agent</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4">Can't find what you're looking for?</h2>
          <p className="text-on-surface-variant text-xs sm:text-sm md:text-base mb-6 sm:mb-10 max-w-xl mx-auto">
            Our specialized engineering support team is available for urgent inquiries, site visits, and technical consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-primary text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm hover:bg-primary/95 transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-base sm:text-lg">mail</span>
              Contact Engineering
            </button>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 sm:gap-4 py-3 sm:py-4 px-6 sm:px-8 border border-outline-variant/40 rounded-xl bg-white shadow-sm text-left hover:border-secondary-container transition-all"
            >
              <span className="material-symbols-outlined text-secondary-container text-2xl">phone_in_talk</span>
              <div>
                <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium">Customer Support Line</p>
                <p className="font-headline-md text-primary text-sm sm:text-base md:text-lg font-bold">{COMPANY_INFO.phone}</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
