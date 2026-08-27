import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Safety() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const protocols = [
    {
      icon: 'verified_user',
      title: 'Zero-Harm Approach',
      desc: 'A foundational commitment to ensuring every operation results in zero incidents, injuries, or environmental impact.'
    },
    {
      icon: 'precision_manufacturing',
      title: '24/7 Monitoring',
      desc: 'Real-time pressure and flow analysis using AI-driven sensors to detect and mitigate anomalies before they escalate.'
    },
    {
      icon: 'assignment_turned_in',
      title: 'Regular Audits',
      desc: 'Systematic internal and third-party inspections of all hardware and operational workflows to ensure peak performance.'
    },
    {
      icon: 'emergency_home',
      title: 'Emergency Response',
      desc: 'Rapid-deploy units trained for immediate intervention, supported by a state-of-the-art logistics network.'
    }
  ];

  const standards = [
    {
      icon: 'check_circle',
      title: 'ISO 9001',
      desc: 'Quality management system certification ensuring consistent product and service excellence.'
    },
    {
      icon: 'shield',
      title: 'OHSAS 18001',
      desc: 'International occupational health and safety management system standard for total operational risk control.'
    },
    {
      icon: 'gavel',
      title: 'PESO & Regulatory Approvals',
      desc: 'Full licensing and regular compliance verification by national gas safety and energy regulatory boards.'
    }
  ];

  const metrics = [
    { value: '100%', label: 'Audit Success' },
    { value: '0', label: 'LTI Record' },
    { value: '15k+', label: 'Safety Hours' },
    { value: '24/7', label: 'Monitoring' }
  ];

  const slides = [
    {
      image: '/images/gdrive/Comercial_line_cylinder_room_pipeline_WhatsApp_Image_2026-08-17_at_4_33_39_PM.jpeg',
      tag: 'Quarterly Drills',
      title: 'Safety Standards Training'
    },
    {
      image: '/images/gdrive/Leek_detection_systems_WhatsApp_Image_2026-08-17_at_8_48_28_PM__1_.jpeg',
      tag: 'Field Training',
      title: 'Emergency Leak Shut-Off'
    },
    {
      image: '/images/gdrive/Industrial_purpose_hydrant_gas_pipeline_WhatsApp_Image_2026-08-17_at_8_45_08_PM__2_.jpeg',
      tag: 'Certification',
      title: 'Pneumatic Pressure Rigor'
    }
  ];

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center overflow-hidden bg-primary text-white text-left py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Safety inspection on industrial gas valve"
            src="/images/gdrive/Leek_detection_systems_WhatsApp_Image_2026-08-17_at_8_48_28_PM.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 md:via-primary/75 to-primary/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 text-white">
          <div className="max-w-2xl">
            <span className="bg-secondary-container text-on-secondary px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-6 inline-block font-semibold">
              Safety Standards
            </span>
            <h1 className="font-headline-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-6 leading-tight font-bold">
              Safety First, Excellence Always
            </h1>
            <p className="font-body-lg text-xs sm:text-base md:text-xl text-white/85 mb-5 sm:mb-8 leading-relaxed">
              Implementing the industry's most rigorous safety protocols to ensure the integrity of your gas infrastructure and the protection of your premises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-secondary-container text-on-secondary px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-label-md hover:shadow-lg transition-all cursor-pointer font-semibold text-xs sm:text-sm text-center active:scale-95"
              >
                Request Safety Survey
              </button>
              <button
                onClick={() => navigate('/services/leakage-detection-system')}
                className="border border-white/30 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-label-md hover:bg-white/10 transition-all flex items-center justify-center font-semibold text-xs sm:text-sm active:scale-95"
              >
                Auto Leak Detection Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocols Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 max-w-[1280px] mx-auto text-left">
        <div className="text-center mb-8 sm:mb-14 md:mb-16">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">Multi-Layered Protection</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4 mt-1">Core Safety Protocols</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-xs sm:text-sm md:text-base">Our multi-layered approach to risk management defines our operational excellence.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {protocols.map((proto, i) => (
            <div key={i} className="p-6 sm:p-8 bg-white border border-outline-variant/30 rounded-3xl bento-card hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 sm:mb-6">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">{proto.icon}</span>
                </div>
                <h3 className="font-headline-md text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3">{proto.title}</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{proto.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="bg-primary py-12 sm:py-16 md:py-24 text-left text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-secondary-fixed-dim font-bold text-xs uppercase tracking-widest">Certified Pipeline Quality</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 mt-1">Global Compliance Standards</h2>
              <p className="text-white/80 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed">
                We adhere to international benchmarks and local regulations to guarantee that our gas infrastructure projects meet the highest possible safety and quality requirements.
              </p>
              <div className="space-y-4 sm:space-y-6">
                {standards.map((std, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-0.5 text-secondary-container">
                      <span className="material-symbols-outlined text-xl sm:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{std.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-headline-md text-sm sm:text-base md:text-lg font-bold mb-0.5 sm:mb-1">{std.title}</h4>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{std.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center">
                {metrics.map((met, i) => (
                  <div key={i} className="p-4 sm:p-6 bg-white rounded-2xl">
                    <div className="text-secondary-container font-headline-xl text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{met.value}</div>
                    <div className="text-primary font-label-md text-[10px] sm:text-xs font-semibold uppercase">{met.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Culture Sliders */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 max-w-[1280px] mx-auto text-left">
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4">Our Safety Culture</h2>
            <p className="text-on-surface-variant max-w-xl text-xs sm:text-sm md:text-base">Training is the backbone of our reliability. We invest hundreds of hours annually in specialized safety drills, hydrostatic pressure tests, and leak containment.</p>
          </div>
          <div className="flex gap-2.5 sm:gap-4 self-end">
            <button
              onClick={prevSlide}
              aria-label="Previous safety culture photo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-outline-variant/80 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">arrow_back</span>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next safety culture photo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-outline-variant/80 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {slides.map((slide, i) => (
            <div key={i} className="relative rounded-3xl overflow-hidden aspect-[4/5] group shadow-md">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={slide.title}
                src={slide.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent flex items-end p-5 sm:p-8">
                <div className="text-white">
                  <span className="text-label-sm font-semibold text-secondary-container uppercase mb-1 block text-[10px] sm:text-xs">{slide.tag}</span>
                  <h4 className="font-headline-md text-base sm:text-xl font-bold">{slide.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Resources / Contact */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface-container border-y border-outline-variant/30 text-left">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-12">
            <div className="max-w-lg">
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4">Safety Consultation</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">Have questions regarding cylinder room safety clearances, manifold valves, or auto shut-off panels? Speak with our safety engineer.</p>
            </div>
            <div className="w-full md:w-auto">
              <button 
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-container text-white px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md active:scale-95"
              >
                <span>Book Safety Site Audit</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
