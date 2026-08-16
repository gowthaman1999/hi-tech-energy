import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_SERVICES_MAP, OFFICE_LOCATIONS } from '../data/nglsData';

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
    <div className="w-full bg-white text-on-surface">
      
      {/* Hero Header - Flush with navbar */}
      <section className="relative w-full bg-primary text-white pt-28 pb-16 px-4 md:px-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-white/60 mb-4 uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-secondary-fixed-dim">{service.title}</span>
          </div>

          <span className="inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold">
            {service.category}
          </span>
          
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-3xl leading-relaxed">
            {service.fullDesc}
          </p>
        </div>
      </section>

      {/* Page Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Main Featured Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[380px]">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-headline-lg text-2xl font-bold text-primary">Overview & Key Features</h2>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {service.excerpt}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20 flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-body-sm text-xs font-semibold text-primary">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-4 pt-4">
              <h2 className="font-headline-lg text-2xl font-bold text-primary">Technical Specifications</h2>
              <div className="bg-surface-container-low rounded-2xl border border-outline-variant/30 overflow-hidden">
                <table className="w-full text-left text-xs font-body-sm">
                  <tbody>
                    {service.specs.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-6 py-4 font-bold text-primary w-1/3 border-b border-outline-variant/10">{spec.label}</td>
                        <td className="px-6 py-4 text-on-surface-variant font-medium border-b border-outline-variant/10">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sectors Served */}
            <div className="space-y-4 pt-4">
              <h2 className="font-headline-lg text-2xl font-bold text-primary">Sectors & Applications Served</h2>
              <div className="flex flex-wrap gap-3">
                {service.sectorsServed.map((sector, idx) => (
                  <span key={idx} className="px-4 py-2 bg-primary text-white rounded-xl font-label-md text-xs font-semibold">
                    🏢 {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Inquiry Form Box */}
            <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-xl space-y-6">
              <h3 className="font-headline-lg text-xl font-bold text-primary">Request Free Site Survey & Estimate for {service.title}</h3>
              
              {submitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-2xl text-center space-y-2">
                  <div className="text-3xl">✓</div>
                  <h4 className="font-headline-md font-bold text-base">Inquiry Submitted Successfully!</h4>
                  <p className="font-body-sm text-xs">Our engineering team will review your requirement for {service.title} and reach out within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter full name" 
                        className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter phone number" 
                        className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter email address" 
                      className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-label-md text-xs font-bold text-primary uppercase mb-1">Project Details / Location</label>
                    <textarea 
                      rows="3" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={`Tell us about your ${service.title} requirements`}
                      className="w-full px-4 py-3 border border-outline-variant/40 rounded-xl text-xs focus:ring-2 focus:ring-secondary-container focus:outline-none bg-white"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-secondary-container text-on-secondary py-3.5 rounded-xl font-headline-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-md"
                  >
                    Submit Estimate Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Sidebar - Other Services Navigation */}
          <div className="space-y-8">
            
            {/* Quick Links Sidebar Box */}
            <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 shadow-lg space-y-4">
              <h3 className="font-headline-md font-bold text-base text-primary uppercase tracking-wider border-b border-secondary-container pb-2 inline-block">
                All Gas Pipeline Services
              </h3>
              <div className="space-y-1.5">
                {otherServicesList.map((srv) => (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.id}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low text-xs font-bold text-primary hover:text-secondary transition-colors border border-transparent hover:border-outline-variant/20"
                  >
                    <span>{srv.title}</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Emergency Hotline Box */}
            <div className="bg-primary text-white p-6 rounded-3xl shadow-xl space-y-3 text-center">
              <div className="w-12 h-12 bg-secondary-container text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl">
                📞
              </div>
              <h4 className="font-headline-md font-bold text-base">Need Technical Consultation?</h4>
              <p className="font-body-sm text-xs text-white/80">Speak directly with our gas engineering specialists in Coimbatore.</p>
              <p className="font-headline-md font-bold text-sm text-secondary-fixed-dim">{OFFICE_LOCATIONS.headOffice.phone}</p>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-white text-primary py-2.5 rounded-xl font-headline-md text-xs font-bold uppercase hover:bg-secondary-container hover:text-white transition-colors mt-2"
              >
                Contact Head Office
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
