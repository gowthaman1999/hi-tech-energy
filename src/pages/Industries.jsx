import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Industries() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white text-on-surface overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 max-w-[1280px] mx-auto overflow-hidden text-left">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-6 uppercase tracking-wider">
              Expertise & Reach
            </span>
            <h1 className="font-headline-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-3 sm:mb-6 font-bold">
              Powering Industry, <br />
              <span className="text-secondary">Supporting Life</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant text-xs sm:text-sm md:text-base lg:text-lg max-w-lg mb-6 sm:mb-10 leading-relaxed">
              Delivering precise, high-performance gas infrastructure solutions across diverse sectors. We balance industrial power with uncompromising safety standards.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button 
                onClick={() => navigate('/services')}
                className="bg-secondary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-label-md hover:shadow-lg transition-all cursor-pointer text-xs sm:text-sm font-semibold active:scale-95"
              >
                Explore Solutions
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="border border-primary text-primary px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-label-md hover:bg-primary hover:text-white transition-all cursor-pointer text-xs sm:text-sm font-semibold active:scale-95"
              >
                About HI TECH ENERGY
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 aspect-square">
              <img 
                className="w-full h-full object-cover" 
                alt="Hospital facade at dusk" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn8kjNqVsmlL0LwymViyosp-sbbBPCKinvzKslWJJ9lB6afsNROWhpld3xuJ6e5xJ-NaeivntrwMnMZjnDdDPaMSMFFdr3UxLJcbhhwWbSxtr_ar9WLoirfsO5sw9MDzLozy8wu3AYxSwxDdKNU3H365Lieh2sJfa7JNGmZ5CRCG6rIsHOaFtDcsg4tErB8c3Onm3F3mGPRVNnE86InGeRjzSDaIUCK-1H0Fi5YqxFIWcHPlrbwBVkRWmxInR9QcVANTedaIXUAgY"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 aspect-square">
              <img 
                className="w-full h-full object-cover" 
                alt="Industrial manufacturing floor" 
                src="/images/gdrive/Comercial_line_for_industries_WhatsApp_Image_2026-08-17_at_8_49_19_PM.jpeg" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 aspect-square">
              <img 
                className="w-full h-full object-cover" 
                alt="Luxury high-rise apartment sunrise" 
                src="/images/gdrive/Gas_line_for_Appartment_flats_WhatsApp_Image_2026-08-17_at_8_49_28_PM__2_.jpeg" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 aspect-square">
              <img 
                className="w-full h-full object-cover" 
                alt="Commercial kitchen gas lines" 
                src="/images/gdrive/Commercial_line_kitchen_WhatsApp_Image_2026-08-17_at_4_32_37_PM__7_.jpeg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry: Hospitality */}
      <section className="py-12 sm:py-16 md:py-24 bg-white border-y border-outline-variant/20 text-left">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative group">
            <img 
              className="rounded-3xl w-full shadow-md border border-outline-variant/50" 
              alt="Professional hotel kitchen" 
              src="/images/gdrive/Commercial_line_kitchen_WhatsApp_Image_2026-08-17_at_4_32_37_PM__6_.jpeg" 
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-6 text-secondary font-semibold text-xs sm:text-sm">
              <span className="material-symbols-outlined text-base sm:text-lg">hotel</span>
              <span>01. HOSPITALITY</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-6">Seamless Energy for Guest Excellence</h2>
            <p className="text-body-md text-on-surface-variant mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
              In hotels, malls, and restaurants, energy downtime isn't just an inconvenience-it's a reputational risk. We provide the invisible infrastructure that powers world-class guest experiences.
            </p>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
              <div className="p-4 sm:p-6 bg-surface-container rounded-2xl border-l-4 border-secondary text-xs sm:text-sm">
                <h4 className="font-semibold text-primary mb-1 sm:mb-2">Industry Challenge</h4>
                <p className="text-on-surface-variant leading-relaxed">Fluctuating demand during peak seasons requiring rapid scaling and high-volume consistency without safety compromises.</p>
              </div>
              <div className="p-4 sm:p-6 bg-primary text-white rounded-2xl text-xs sm:text-sm">
                <h4 className="font-semibold text-secondary-fixed-dim mb-1 sm:mb-2">HI TECH Solution</h4>
                <p className="opacity-90 leading-relaxed">Smart telemetry systems for real-time monitoring and automated replenishment cycles, ensuring zero-downtime for commercial kitchens and HVAC.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry: Manufacturing */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface text-left">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-6 text-secondary font-semibold text-xs sm:text-sm">
              <span className="material-symbols-outlined text-base sm:text-lg">precision_manufacturing</span>
              <span>02. MANUFACTURING</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-6">High-Precision Industrial Fueling</h2>
            <p className="text-body-md text-on-surface-variant mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
              From steel smelting to food processing, industrial gas needs vary wildly. We deliver tailored mixtures and high-pressure setups designed for mathematical accuracy and peak efficiency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10">
              <div className="border border-outline-variant/30 p-4 sm:p-6 rounded-2xl bg-white hover:border-secondary transition-colors text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary mb-2 sm:mb-4 text-xl sm:text-2xl">settings_input_component</span>
                <h4 className="font-semibold text-primary mb-1 sm:mb-2">Steel & Glass</h4>
                <p className="text-on-surface-variant leading-relaxed">Intense heat management and continuous gas flow for furnaces.</p>
              </div>
              <div className="border border-outline-variant/30 p-4 sm:p-6 rounded-2xl bg-white hover:border-secondary transition-colors text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary mb-2 sm:mb-4 text-xl sm:text-2xl">restaurant</span>
                <h4 className="font-semibold text-primary mb-2">Food Processing</h4>
                <p className="text-on-surface-variant leading-relaxed">Food-grade gas solutions for preservation and industrial cooking.</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img 
              className="rounded-3xl w-full shadow-md border border-outline-variant/50" 
              alt="Industrial gas manifold system" 
              src="/images/gdrive/Industrial_purpose_hydrant_gas_pipeline_WhatsApp_Image_2026-08-17_at_8_45_07_PM.jpeg" 
            />
          </div>
        </div>
      </section>

      {/* Industry: Residential */}
      <section className="py-12 sm:py-16 md:py-24 bg-white border-y border-outline-variant/20 text-left">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 relative group">
            <img 
              className="rounded-3xl w-full shadow-md border border-outline-variant/50" 
              alt="Smart gas meter in villa" 
              src="/images/gdrive/Gas_line_for_Appartment_flats_WhatsApp_Image_2026-08-17_at_8_49_28_PM__1_.jpeg" 
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-6 text-secondary font-semibold text-xs sm:text-sm">
              <span className="material-symbols-outlined text-base sm:text-lg">domain</span>
              <span>03. RESIDENTIAL</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-6">Safe Energy for Modern Living</h2>
            <p className="text-body-md text-on-surface-variant mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
              We bring utility-grade gas solutions to high-rise apartments and villa communities, focusing on invisible safety and individual consumption transparency.
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-10 text-xs sm:text-sm">
              <li className="flex gap-3 sm:gap-4 items-start">
                <span className="material-symbols-outlined text-secondary shrink-0 text-base sm:text-lg">check_circle</span>
                <div>
                  <h5 className="font-semibold text-primary text-sm sm:text-base">Advanced Leak Detection</h5>
                  <p className="text-on-surface-variant mt-0.5">IoT-integrated sensors that automatically shut off valves if anomalies are detected.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4 items-start">
                <span className="material-symbols-outlined text-secondary shrink-0 text-base sm:text-lg">check_circle</span>
                <div>
                  <h5 className="font-semibold text-primary text-sm sm:text-base">Individual Metering</h5>
                  <p className="text-on-surface-variant mt-0.5">Precision billing for each unit, reducing administrative friction for property managers.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16 max-w-[1280px] mx-auto text-center">
        <div className="bg-primary rounded-3xl sm:rounded-[40px] p-6 sm:p-12 md:p-20 relative overflow-hidden">
          <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-8 relative z-10 font-bold leading-tight">
            Ready to Secure Your Energy Infrastructure?
          </h2>
          <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Join hundreds of industrial leaders who trust HI TECH ENERGY for safe, efficient, and cost-effective gas solutions tailored to their specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 relative z-10">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-secondary text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-headline-md text-xs sm:text-sm font-bold hover:bg-secondary-container transition-all shadow-xl cursor-pointer active:scale-95"
            >
              Request Industry-Specific Quote
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white/30 text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-headline-md text-xs sm:text-sm font-bold hover:bg-white hover:text-primary transition-all cursor-pointer active:scale-95"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
