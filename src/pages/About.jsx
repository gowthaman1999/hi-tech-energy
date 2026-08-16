import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../data/nglsData';

export default function About() {
  return (
    <div className="w-full bg-white text-on-surface">
      
      {/* Header Banner - Flush with top navbar */}
      <section className="bg-primary text-white pt-28 pb-16 px-4 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 bg-secondary-container/20 border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-4 uppercase tracking-widest text-xs font-semibold">
            About HI TECH ENERGY
          </span>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-white mb-4">
            Pioneering Safe Energy Infrastructure
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Delivering safe, reliable, and energy-efficient LPG gas pipeline infrastructure across commercial, industrial, and residential sectors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 pt-16 pb-20 space-y-16">
        
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">
              Our Vision & Engineering Excellence
            </span>
            <h2 className="font-headline-lg text-3xl font-bold text-primary">
              One Stop Solution For All Kinds of Gas Pipeline Systems
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              We specialize in designing, installing, testing, and maintaining LPG gas pipeline networks for domestic residences, commercial kitchens, multi-story apartments, industrial plants, and healthcare facilities.
            </p>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              Our engineering team ensures zero-compromise safety by employing certified piping, automatic gas leak detectors, solenoid emergency cut-off valves, and strict safety compliance standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-secondary-container">
                <div className="font-headline-xl text-2xl font-bold text-primary">450+</div>
                <div className="font-label-md text-xs font-bold text-on-surface-variant uppercase">Active Installations</div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border-l-4 border-primary">
                <div className="font-headline-xl text-2xl font-bold text-primary">3,000+</div>
                <div className="font-label-md text-xs font-bold text-on-surface-variant uppercase">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" 
              alt="Engineering Team" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Office Locations */}
        <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30">
          <h3 className="font-headline-lg text-2xl font-bold text-primary mb-6 text-center">Head Office & Operations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-secondary-container">
              <h4 className="font-headline-md font-bold text-base text-primary mb-2">{OFFICE_LOCATIONS.headOffice.title}</h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{OFFICE_LOCATIONS.headOffice.address}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary">
              <h4 className="font-headline-md font-bold text-base text-primary mb-2">{OFFICE_LOCATIONS.warehouse.title}</h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{OFFICE_LOCATIONS.warehouse.address}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white p-10 rounded-3xl text-center space-y-4">
          <h3 className="font-headline-lg text-2xl font-bold text-white">Ready to Upgrade Your Fuel System to Piped LPG?</h3>
          <p className="font-body-md text-xs text-white/80 max-w-xl mx-auto">Contact our technical consultants today for site surveys and safety audits.</p>
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
