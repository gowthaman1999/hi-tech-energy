import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Top Banner (CTA) */}
      <section className="py-24 bg-primary relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/20"></div>
            ))}
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10 text-center">
          <h2 className="font-headline-xl text-white mb-8 text-headline-xl leading-tight">
            Partner with the LPG Experts
          </h2>
          <p className="font-body-lg text-white/70 mb-12 max-w-2xl mx-auto">
            Ready to upgrade your gas infrastructure? Contact our engineering team for a comprehensive technical consultation today.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex bg-secondary-container text-on-secondary px-12 py-5 rounded-xl font-headline-md hover:bg-secondary transition-all shadow-2xl items-center gap-3 mx-auto cursor-pointer"
          >
            <span className="material-symbols-outlined">call</span>
            Get In Touch Now
          </Link>
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="max-w-[1280px] mx-auto py-20 px-4 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="font-headline-lg text-headline-lg font-bold text-white mb-6">
            HI TECH ENERGY
          </div>
          <p className="font-body-md text-white/60 max-w-sm mb-8">
            Lead specialists in high-performance LPG infrastructure, engineering solutions, and gas safety management across industrial and residential sectors.
          </p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary-container transition-all"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a 
              href="mailto:support@hitechenergy.example.com" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary-container transition-all"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary-container transition-all"
              aria-label="Location"
            >
              <span className="material-symbols-outlined text-sm">location_on</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h6 className="font-label-md text-white mb-6 uppercase tracking-widest text-sm font-semibold">
            Solutions
          </h6>
          <ul className="space-y-4">
            <li>
              <Link to="/services" className="font-body-sm text-white/85 hover:text-secondary-container transition-all text-sm">
                Industrial LPG
              </Link>
            </li>
            <li>
              <Link to="/services" className="font-body-sm text-white/85 hover:text-secondary-container transition-all text-sm">
                Commercial Systems
              </Link>
            </li>
            <li>
              <Link to="/services" className="font-body-sm text-white/85 hover:text-secondary-container transition-all text-sm">
                Residential Networks
              </Link>
            </li>
            <li>
              <Link to="/services" className="font-body-sm text-white/85 hover:text-secondary-container transition-all text-sm">
                Gas Detection
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h6 className="font-label-md text-white mb-6 uppercase tracking-widest text-sm font-semibold">
            Quick Links
          </h6>
          <ul className="space-y-4">
            <li>
              <Link to="/safety" className="font-body-sm text-white/85 hover:text-secondary-container transition-all text-sm">
                Safety Protocols
              </Link>
            </li>
            <li>
              <Link to="/safety" className="font-body-sm text-white/85 hover:text-secondary-container transition-all text-sm">
                Certifications
              </Link>
            </li>
            <li>
              <Link to="/projects" className="font-body-sm text-white/85 hover:text-secondary-container transition-all text-sm">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-body-sm text-white/85 hover:text-secondary-container transition-all text-sm">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h6 className="font-label-md text-white mb-6 uppercase tracking-widest text-sm font-semibold">
            Global HQ
          </h6>
          <p className="font-body-sm text-white/85 mb-4 text-sm leading-relaxed">
            Engineering Plaza, Suite 400<br />
            Industrial Park South<br />
            London, UK
          </p>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="font-label-sm text-secondary mb-1 text-xs">Emergency Support</div>
            <div className="font-headline-md text-white text-xl font-bold">+44 20 7946 0123</div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Credits Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-label-sm text-white/60 text-xs">
            © 2026 HI TECH ENERGY. All Rights Reserved. Safety First.
          </div>
          <div className="flex gap-8">
            <a href="#" className="font-label-sm text-white/60 hover:text-white transition-all text-xs">
              Privacy Policy
            </a>
            <a href="#" className="font-label-sm text-white/60 hover:text-white transition-all text-xs">
              Terms of Service
            </a>
            <a href="#" className="font-label-sm text-white/60 hover:text-white transition-all text-xs">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
