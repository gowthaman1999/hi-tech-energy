import React, { useState } from 'react';
import { OFFICE_LOCATIONS, COMPANY_INFO } from '../data/hitechData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Domestic LPG Pipeline',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      
      {/* Header Banner */}
      <section className="bg-primary text-white pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <span className="reveal-slide-up inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-3 sm:mb-4 uppercase tracking-widest text-[10px] sm:text-xs font-semibold" data-delay="100ms">
            {COMPANY_INFO.slogan}
          </span>
          <h1 className="reveal-slide-up font-headline-xl text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4" data-delay="200ms">
            Contact HI TECH ENERGY
          </h1>
          <p className="reveal-slide-up font-body-lg text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed" data-delay="300ms">
            Get in touch for LPG Gas Pipeline Installation Service, site surveys, VOT/LOT manifold setups, and safety audits.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 pt-10 pb-16 sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Office Contact Info */}
          <div className="reveal-slide-left space-y-6 sm:space-y-8">
            <div>
              <h2 className="font-headline-lg text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Our Contact Details</h2>
              
              <div className="space-y-4 sm:space-y-6">
                
                {/* Head Office Card */}
                <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border-l-4 border-secondary-container shadow-md">
                  <h3 className="font-headline-md font-bold text-sm sm:text-base text-primary mb-2">{OFFICE_LOCATIONS.headOffice.title}</h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-2">{OFFICE_LOCATIONS.headOffice.address}</p>
                  <p className="font-body-sm text-xs font-semibold text-secondary-container mb-3">📍 Location: {OFFICE_LOCATIONS.headOffice.plusCode}</p>
                  <div className="font-body-sm text-xs font-bold text-secondary space-y-1">
                    <p>📞 Phone: <a href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.phone}</a></p>
                    <p>✉ Email: <a href={`mailto:${OFFICE_LOCATIONS.headOffice.email}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.email}</a></p>
                  </div>
                </div>

                {/* Service Commitment Card */}
                <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border-l-4 border-primary shadow-md">
                  <h3 className="font-headline-md font-bold text-sm sm:text-base text-primary mb-2">Safe. Smart. Economical.</h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-3">
                    Every installation is carried out using premium-grade SS seamless pipelines, high-quality pressure regulators, safety shut-off valves, and industry-standard components.
                  </p>
                  <div className="font-body-sm text-xs font-bold text-primary space-y-1">
                    <p>⚡ Fast Turnaround & Comprehensive Testing</p>
                    <p>🛡 Dual Shut-off Valves & Leak Alarm Integration</p>
                  </div>
                </div>

                {/* Official YouTube Channel Card */}
                <div className="bg-gradient-to-br from-red-50/70 to-surface-container-low p-5 sm:p-6 rounded-2xl border-l-4 border-[#FF0000] shadow-md">
                  <h3 className="font-headline-md font-bold text-sm sm:text-base text-primary mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#FF0000] fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Watch Us on YouTube
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-3">
                    Watch our live pipeline installation projects, pressure testing, and cylinder manifold setups on our official YouTube channel: <span className="font-semibold text-primary">@Lpg_gas_line-108</span>.
                  </p>
                  <a
                    href={COMPANY_INFO.socialLinks?.youtube || "https://www.youtube.com/@Lpg_gas_line-108"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-xl text-xs font-bold shadow transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Visit @Lpg_gas_line-108</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Safety Standards Box */}
            <div className="bg-primary text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-2 sm:space-y-3">
              <h4 className="font-headline-md font-bold text-base sm:text-lg text-white">Full Safety & Compliance Assured</h4>
              <p className="font-body-sm text-xs leading-relaxed text-white/80">
                In the unlikely event of a gas leak, our external cylinder placements and automatic shut-off systems ensure gas disperses into the open atmosphere, keeping occupants safe.
              </p>
            </div>

          </div>

          {/* Inquiry Form */}
          <div className="reveal-slide-right bg-white p-5 sm:p-8 rounded-3xl border border-outline-variant/30 shadow-2xl">
            <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">Request Technical Consultation</h3>
            
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-5 sm:p-6 rounded-2xl text-center space-y-2">
                <div className="text-3xl">✓</div>
                <h4 className="font-headline-md font-bold text-sm sm:text-base">Inquiry Submitted Successfully!</h4>
                <p className="font-body-sm text-xs">Thank you for reaching out to HI TECH ENERGY. Our technical team will call you at {formData.phone} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label className="block font-label-md text-[11px] sm:text-xs font-bold text-primary uppercase mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name" 
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block font-label-md text-[11px] sm:text-xs font-bold text-primary uppercase mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 9363374157" 
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-[11px] sm:text-xs font-bold text-primary uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="info@hitechenergy.org" 
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-[11px] sm:text-xs font-bold text-primary uppercase mb-1">Select Required Pipeline Solution</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  >
                    <option>Domestic LPG Pipeline</option>
                    <option>Commercial Kitchen VOT / LOT System</option>
                    <option>Industrial Hydrant & Skid Line</option>
                    <option>Apartment Reticulated Gas Pipeline</option>
                    <option>Chemistry Lab Multi-Point Piping</option>
                    <option>Gas Leakage Detection & Auto Shut-off</option>
                    <option>Comprehensive Safety Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-md text-[11px] sm:text-xs font-bold text-primary uppercase mb-1">Message / Requirements</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project location, kitchen size, number of burner points, or specific timeline..." 
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-secondary-container text-white py-3 sm:py-3.5 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Send Inquiry Now
                </button>
              </form>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
