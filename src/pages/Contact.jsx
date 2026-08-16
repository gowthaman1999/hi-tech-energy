import React, { useState } from 'react';
import { OFFICE_LOCATIONS } from '../data/nglsData';

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
    <div className="w-full bg-white text-on-surface">
      
      {/* Header Banner - Flush with top navbar */}
      <section className="bg-primary text-white pt-28 pb-16 px-4 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold">
            Contact Technical Team
          </span>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4">
            Get In Touch With Gas Pipeline Experts
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about gas reticulation, LOT systems, or installation estimates? Fill out the form or reach out directly to our engineering offices.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Office Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-headline-lg text-2xl font-bold text-primary mb-6">Our Office Locations</h2>
              
              <div className="space-y-6">
                
                {/* Head Office Card */}
                <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-secondary-container shadow-md">
                  <h3 className="font-headline-md font-bold text-base text-primary mb-2">{OFFICE_LOCATIONS.headOffice.title}</h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-3">{OFFICE_LOCATIONS.headOffice.address}</p>
                  <div className="font-body-sm text-xs font-bold text-secondary space-y-1">
                    <p>📞 Phone: {OFFICE_LOCATIONS.headOffice.phone}</p>
                    <p>✉ Email: {OFFICE_LOCATIONS.headOffice.email}</p>
                  </div>
                </div>

                {/* Warehouse Card */}
                <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary shadow-md">
                  <h3 className="font-headline-md font-bold text-base text-primary mb-2">{OFFICE_LOCATIONS.warehouse.title}</h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-3">{OFFICE_LOCATIONS.warehouse.address}</p>
                  <div className="font-body-sm text-xs font-bold text-primary space-y-1">
                    <p>📞 Phone: {OFFICE_LOCATIONS.warehouse.phone}</p>
                    <p>✉ Email: {OFFICE_LOCATIONS.warehouse.email}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Safety Standards Box */}
            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl space-y-3">
              <h4 className="font-headline-md font-bold text-lg text-white">PESO Safety Standard Assured</h4>
              <p className="font-body-sm text-xs leading-relaxed text-white/80">
                All pipeline installations undergo pneumatic pressure testing, leak detection checks, and standard PESO safety compliance approval before commissioning.
              </p>
            </div>

          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 shadow-2xl">
            <h3 className="font-headline-md text-xl font-bold text-primary mb-6">Request A Free Consultation</h3>
            
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-2xl text-center space-y-2">
                <div className="text-3xl">✓</div>
                <h4 className="font-headline-md font-bold text-base">Inquiry Submitted Successfully!</h4>
                <p className="font-body-sm text-xs">Thank you for reaching out. Our engineering technical team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name" 
                    className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter phone number" 
                      className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter email address" 
                      className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Select Required Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  >
                    <option>Domestic LPG Pipeline</option>
                    <option>Commercial LPG Pipeline</option>
                    <option>Reticulated LPG Pipeline</option>
                    <option>LOT LPG Pipeline</option>
                    <option>Bulk LPG Pipeline</option>
                    <option>Oxygen Pipeline</option>
                    <option>Gas Fuel Conversion</option>
                    <option>Gas Purification Panel System</option>
                    <option>Leakage Detection System</option>
                    <option>Flow Meter Calculation System</option>
                    <option>HSD / Diesel Pipeline</option>
                    <option>Ammonia Pipeline</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Message / Requirements</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your site details or requirements" 
                    className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-secondary-container text-on-secondary py-3.5 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
