import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const successStories = [
    {
      id: 1,
      title: "LOT LPG Pipeline Installation - AJJ Bakes, Tuticorin",
      location: "Tuticorin, Tamil Nadu",
      category: "Commercial LOT LPG",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      description: "Successfully designed and commissioned a multi-cylinder Liquid Off-Take (LOT) pipeline system for high-volume bakery ovens with zero pressure drops.",
      highlights: ["Automatic vaporizer unit", "Underground gas leak alarm system", "PESO safety certified"]
    },
    {
      id: 2,
      title: "Reticulated LPG Gas Pipeline - NOAHS ARK Apartment",
      location: "Saravanampatti, Coimbatore, Tamil Nadu",
      category: "Residential Reticulation",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      description: "Complete piped LPG supply for 4 apartment buildings. Provided continuous gas flow with digital sub-metering per household unit.",
      highlights: ["Individual meter units", "Central cylinder manifold storage", "24/7 Safety pressure monitoring"]
    },
    {
      id: 3,
      title: "Bulk LPG Storage & Industrial Pipeline - Heat Treatment Hub",
      location: "Industrial Corridor, Coimbatore",
      category: "Industrial Bulk LPG",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
      description: "Executed mounded LPG bullet vessel pipeline network powering industrial annealing furnaces with high thermal efficiency.",
      highlights: ["Mounded vessel storage", "SCADA pressure monitoring skid", "Flameproof solenoid cutoff valves"]
    },
    {
      id: 4,
      title: "Medical Oxygen Pipeline - Specialty Hospital Complex",
      location: "Coimbatore, Tamil Nadu",
      category: "Oxygen Pipeline",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description: "High-purity degreased copper oxygen supply network connecting ICU beds and surgical operating theaters.",
      highlights: ["ISO 7396-1 Standard", "Primary/Secondary auto changeover", "Degreased copper piping"]
    }
  ];

  return (
    <div className="w-full bg-white text-on-surface">
      
      {/* Header Banner - Flush with top navbar */}
      <section className="bg-primary text-white pt-28 pb-16 px-4 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold">
            Engineering Project Portfolio
          </span>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4">
            Our Success Stories
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Explore key completed gas pipeline installations delivered for commercial bakeries, apartment complexes, industrial furnaces, and medical centers.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {successStories.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-outline-variant/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-secondary-container text-white font-label-md text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                    {item.category}
                  </span>
                </div>
                <div className="p-8 space-y-4">
                  <span className="font-label-md text-xs font-bold text-on-surface-variant uppercase">📍 {item.location}</span>
                  <h3 className="font-headline-md text-xl font-bold text-primary leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <h4 className="font-headline-md font-bold text-xs text-primary uppercase">Key Features:</h4>
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 font-body-sm text-xs text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  to="/contact"
                  className="inline-block w-full text-center bg-primary text-white py-3 rounded-xl font-headline-md text-xs font-bold uppercase hover:bg-secondary-container transition-colors shadow-md"
                >
                  Consult Similar Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
