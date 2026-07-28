import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  const servicesList = [
    {
      icon: 'factory',
      title: 'Industrial Installation',
      description: 'End-to-end setup of bulk LPG storage and distribution networks for manufacturing units and large processing plants.'
    },
    {
      icon: 'restaurant',
      title: 'Commercial Solutions',
      description: 'High-efficiency gas reticulation systems for hotels, restaurants, and shopping malls with smart metering integration.'
    },
    {
      icon: 'apartment',
      title: 'Residential Gas Lines',
      description: 'Safe and aesthetic gas piping for residential complexes, ensuring leak-proof delivery to every apartment.'
    },
    {
      icon: 'biotech',
      title: 'Pipeline Testing',
      description: 'Non-destructive testing (NDT), hydro-testing, and ultrasonic thickness gauging for integrity assurance.'
    },
    {
      icon: 'settings_suggest',
      title: 'AMC & Maintenance',
      description: 'Annual Maintenance Contracts providing 24/7 technical support and periodic safety audits for zero downtime.'
    },
    {
      icon: 'description',
      title: 'Consultancy',
      description: 'Feasibility studies, technical design consultancy, and regulatory compliance advisory for new projects.'
    }
  ];

  const benefits = [
    {
      num: '01.',
      title: 'Expertise',
      desc: 'Over two decades of experience in navigating the complexities of large-scale gas distribution and industrial automation.'
    },
    {
      num: '02.',
      title: 'Precision',
      desc: 'Utilizing laser-guided measurements and IoT-enabled monitoring to ensure every joint and valve operates at peak efficiency.'
    },
    {
      num: '03.',
      title: 'Safety',
      desc: 'Our "Zero-Harm" protocol integrates multi-stage fail-safes and automated shut-off systems into every project architecture.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-primary text-white text-left">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSa2J3ODB8zl4B5nQCNdDGjUgQ5YHURfn97apO9Gdr5brdoGJHpWS27bF-Y25kt6KnAE-AUIOLkRFsgqBZrSJwYO-hbkPWpJUL77YBDRsLj5gMzFfvPPn1O7-HjrOYB6xxYJNuChWT6nF0wKeiNZyhBChnUiy1ubZoHJ6u5eJodjdANI6UawApEClJnaPduE_Hj6AdO92519Q6OXmP0xShmUZkZqq5Dt0Ow1awMts8SbSfBjKHKouRKz53kj7G3j8ndMLGp0wHR6g')" 
            }}
            alt="Stainless steel gas pipeline valves"
          ></div>
        </div>
        <div className="relative z-20 px-4 md:px-16 max-w-[1280px] mx-auto w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-secondary-container text-on-secondary px-3 py-1 rounded-full text-xs font-semibold mb-6">
              ISO 9001:2015 CERTIFIED
            </span>
            <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight">
              Comprehensive LPG Solutions
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Providing state-of-the-art gas infrastructure for industrial, commercial, and residential sectors with an uncompromising focus on safety and precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/about')}
                className="bg-white text-primary px-8 py-4 rounded-lg font-label-md hover:bg-surface-container-highest transition-colors cursor-pointer"
              >
                Explore Our Tech
              </button>
              <button 
                onClick={() => navigate('/safety')}
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-label-md hover:bg-white/10 transition-colors cursor-pointer"
              >
                Safety Protocols
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-12 hidden md:block opacity-20 pointer-events-none">
          <span className="material-symbols-outlined text-[12rem] text-white">engineering</span>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="py-24 bg-surface text-left">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Specialized Engineering Services</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((srv, i) => (
              <div 
                key={i} 
                className="bg-white border border-outline-variant/30 rounded-xl p-8 flex flex-col justify-between hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{srv.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-xl font-bold mb-4 text-primary">{srv.title}</h3>
                  <p className="text-body-md text-on-surface-variant text-sm leading-relaxed mb-6">{srv.description}</p>
                </div>
                <button 
                  onClick={() => navigate('/contact')}
                  className="flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-4 transition-all self-start cursor-pointer"
                >
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-primary text-white text-left">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {benefits.map((ben, i) => (
              <div key={i} className="flex flex-col items-start gap-4">
                <span className="text-secondary font-bold text-4xl">{ben.num}</span>
                <h4 className="font-headline-md text-lg font-bold uppercase tracking-wider text-secondary-fixed-dim">{ben.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form Section */}
      <section className="py-24 px-4 md:px-16 max-w-[1280px] mx-auto text-left">
        <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-16">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-6">Start Your Project</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-10">Our technical specialists are ready to discuss your specific infrastructure needs. Brief us on your requirements and we will get back within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-2">Full Name</label>
                  <input required className="w-full bg-white border border-outline-variant/50 rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-2">Email Address</label>
                  <input required className="w-full bg-white border border-outline-variant/50 rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-2">Service Interest</label>
                <select className="w-full bg-white border border-outline-variant/50 rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm">
                  <option>Industrial Installation</option>
                  <option>Commercial Solutions</option>
                  <option>Pipeline Testing</option>
                  <option>Maintenance (AMC)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-2">Message</label>
                <textarea required className="w-full bg-white border border-outline-variant/50 rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="Tell us about your project..." rows="4"></textarea>
              </div>
              <button 
                className={`w-full font-semibold py-4 rounded-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 ${
                  formStatus === 'success' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-secondary-container text-on-secondary'
                }`} 
                type="submit"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'idle' && 'Send Inquiry'}
                {formStatus === 'sending' && (
                  <>
                    <span className="material-symbols-outlined animate-spin text-lg">sync</span> Sending...
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <span className="material-symbols-outlined text-lg">check_circle</span> Request Sent
                  </>
                )}
              </button>
            </form>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLotFaLMAB6v_dG4-hm4_oXqbG4ErOjOaz9LbV0VTt6iSzT-4EqCF_0wlF2AF__TF7L4HgRVyOioaQ0FXRvX05vW-GCAafJZIGOlM7ZR_RKkcxGfMEXqt_vxx0iKjNgis35VkIcxOkPuJvnkj9-Cd_V8Rdiz6KqAssPhiinVqM_yDekynx3O7iSNIuAFIB3FMbmN0dlKySRrbTu0EVhFPUcujVDLB_nZKRQkpMuIJCXtQBEZ2twygsOXgBSQRI5IIxNjuarPZMegk')" 
              }}
              alt="Blueprint and caliper"
            ></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 text-white">
              <div className="bg-primary/80 backdrop-blur-md p-8 rounded-xl border border-white/10">
                <h4 className="font-headline-md text-xl font-bold mb-4">Direct Contact</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">phone_in_talk</span>
                    <span>+1 (555) 012-3456</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                    <span>technical@hitech-energy.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
                    <span>Industrial Hub, Phase II, Global City</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
