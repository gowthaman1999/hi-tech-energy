import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/hitechData';

export default function Projects() {
  const successStories = [
    {
      id: 1,
      title: "Domestic LPG Pipeline Installation - Daksha Properties, Coimbatore",
      location: "Coimbatore, Tamil Nadu",
      category: "Domestic LPG Pipeline",
      image: "/images/gdrive/domestic_lpg_pipeline_cover.jpg",
      description: "Engineered and installed safe, high-grade domestic gas pipeline systems with external cylinder placement, dual shut-off safety valves, and consistent pressure flow for residential villas.",
      highlights: ["External cylinder safety setup", "Dual emergency shut-off valves", "Continuous & reliable supply"]
    },
    {
      id: 2,
      title: "Reticulated LPG Gas Pipeline - NOAHS ARK Apartment",
      location: "Saravanampatti, Coimbatore, Tamil Nadu",
      category: "Residential Reticulation",
      image: "/images/gdrive/Gas_line_for_Appartment_flats_WhatsApp_Image_2026-08-17_at_8_49_28_PM.jpeg",
      description: "Complete piped LPG supply for apartment residences. Provided continuous gas flow with individual sub-metering per household unit.",
      highlights: ["Individual meter units", "Central cylinder manifold storage", "24/7 Safety pressure monitoring"]
    },
    {
      id: 3,
      title: "Industrial LPG Pipeline & Cylinder Room - Heat Treatment Plant",
      location: "Industrial Hub, Coimbatore",
      category: "Industrial Gas Infrastructure",
      image: "/images/gdrive/Industrial_purpose_hydrant_gas_pipeline_WhatsApp_Image_2026-08-17_at_8_45_08_PM__1_.jpeg",
      description: "Executed safety-compliant industrial pipeline network powering machinery and furnaces with high thermal efficiency and auto shut-off.",
      highlights: ["Safety cylinder room", "Integrated auto shut-off valves", "Continuous uninterrupted gas supply"]
    },
    {
      id: 4,
      title: "Chemistry Laboratory Gas Line System - Research Facility",
      location: "Coimbatore, Tamil Nadu",
      category: "Laboratory Gas Line",
      image: "/images/gdrive/Chemistry_laboratory_gas_line_system.jpg",
      description: "High-purity degreased piping network delivering precise, controlled, and safe gas distribution across all student and researcher workstations.",
      highlights: ["Isolation valves & precision regulators", "Workstation emergency shut-off", "Highest safety & operational control"]
    }
  ];

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">

      {/* Header Banner */}
      <section className="bg-primary text-white pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <span className="reveal-slide-up inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-3 sm:mb-4 uppercase tracking-widest text-[10px] sm:text-xs font-semibold" data-delay="100ms">
            Engineering Project Portfolio
          </span>
          <h1 className="reveal-slide-up font-headline-xl text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4" data-delay="200ms">
            Our Success Stories
          </h1>
          <p className="reveal-slide-up font-body-lg text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed" data-delay="300ms">
            Explore key completed gas pipeline installations delivered for commercial bakeries, apartment complexes, chemistry laboratories, and industrial plants.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 pt-10 pb-16 sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {successStories.map((item, idx) => (
            <div
              key={item.id}
              data-delay={`${idx * 150}ms`}
              className="reveal-stagger-item bg-white border border-outline-variant/30 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-white font-label-md text-[10px] sm:text-xs font-semibold">
                    {item.category}
                  </div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/65 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg text-white/90 text-[10px] sm:text-xs">
                    📍 {item.location}
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <h3 className="font-headline-md text-lg sm:text-2xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4 sm:mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-4 sm:mb-6">
                    <h4 className="font-label-md text-[10px] sm:text-xs font-bold text-primary uppercase">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="bg-surface-container-low px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium text-on-surface-variant border border-outline-variant/20">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 sm:px-8 pb-5 sm:pb-8 pt-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-secondary-container hover:text-secondary transition-colors"
                >
                  <span>Request Similar Installation</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
        
        {/* Watch Project Demos on YouTube Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary via-[#002d4a] to-primary text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF0000] fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
                Official YouTube Channel
              </span>
              <h3 className="font-headline-md text-lg sm:text-xl md:text-2xl font-bold text-white">
                Watch Live Installations & Field Demos
              </h3>
              <p className="font-body-sm text-xs sm:text-sm text-white/75 mt-1 max-w-xl">
                Subscribe to our YouTube channel <span className="text-secondary-fixed font-semibold">@Lpg_gas_line-108</span> for live site videos, pipe fitting demonstrations, pneumatic testing & project highlights.
              </p>
            </div>
          </div>
          <a
            href={COMPANY_INFO.socialLinks?.youtube || "https://www.youtube.com/@Lpg_gas_line-108"}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Visit @Lpg_gas_line-108</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>

    </div>
  );
}
