import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS, COMPANY_INFO } from '../data/hitechData';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/95 px-3 py-1.5 rounded-xl inline-block shadow-sm">
                <img
                  src="/images/logo.png"
                  alt="HI TECH ENERGY Logo"
                  className="h-9 md:h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="font-headline-sm text-xs font-semibold text-secondary-container">
              Hi Tech Energy - Safe. Smart. Economical
            </p>
            <p className="font-body-sm text-xs text-white/70 leading-relaxed">
              LPG Gas Pipeline Installation Service providing safe, efficient, and centralized gas infrastructure for domestic homes, commercial kitchens, laboratories, and industrial machinery.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-md text-white/90 text-xs font-semibold">PESO Standard</span>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-md text-white/90 text-xs font-semibold">ISO Certified</span>
            </div>
          </div>

          {/* Pipeline Services */}
          <div>
            <h4 className="font-headline-md text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-secondary-container inline-block pb-1">
              Gas Pipeline Services
            </h4>
            <ul className="space-y-2 text-xs font-body-sm">
              <li><Link to="/services/domestic-lpg-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Domestic LPG Pipeline</Link></li>
              <li><Link to="/services/commercial-lpg-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Commercial VOT Line System</Link></li>
              <li><Link to="/services/reticulated-lpg-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">LPG Reticulated System</Link></li>
              <li><Link to="/services/lot-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">LOT Pipeline System</Link></li>
              <li><Link to="/services/industrial-solutions" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Industrial Gas Solutions</Link></li>
              <li><Link to="/services/laboratory-gas-line-system" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Chemistry Lab Gas Line</Link></li>
            </ul>
          </div>

          {/* Other Systems */}
          <div>
            <h4 className="font-headline-md text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-secondary-container inline-block pb-1">
              Specialized Systems
            </h4>
            <ul className="space-y-2 text-xs font-body-sm">
              <li><Link to="/services/our-materials" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Our Materials & Equipment</Link></li>
              <li><Link to="/services/lot-primary-lines" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">LOT Primary Lines</Link></li>
              <li><Link to="/services/lpg-control-panel-gas-leakage-detection-system" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">LPG Control Panel & Leak Detection</Link></li>
              <li><Link to="/services/gas-control-panel-system" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Gas Control Panel System</Link></li>
              <li><Link to="/services/gas-header-system" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Gas Header System</Link></li>
              <li><Link to="/services/leakage-detection-system" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Gas Leak Detection & Auto Shut-off</Link></li>
              <li><Link to="/services/opportunities-expansion" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Opportunities & Scaling</Link></li>
              <li><Link to="/services/future-outlook" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Future Outlook & Upgrades</Link></li>
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="space-y-3">
            <h4 className="font-headline-md text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-secondary-container inline-block pb-1">
              Get In Touch
            </h4>
            <div className="text-xs font-body-sm space-y-2 text-white/80">
              <p className="flex items-center gap-2">
                <span className="font-bold text-secondary-container">📞 Phone:</span>
                <a href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`} className="hover:text-secondary-container">{OFFICE_LOCATIONS.headOffice.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-secondary-container">✉ Email:</span>
                <a href={`mailto:${OFFICE_LOCATIONS.headOffice.email}`} className="hover:text-secondary-container">{OFFICE_LOCATIONS.headOffice.email}</a>
              </p>
              <div className="pt-1">
                <p className="font-bold text-white mb-1">📍 Address:</p>
                <p className="leading-relaxed text-white/70">{OFFICE_LOCATIONS.headOffice.address}</p>
                <p className="text-secondary-fixed-dim font-semibold mt-1">📌 {OFFICE_LOCATIONS.headOffice.plusCode}</p>
              </div>

              {/* Social Media Links */}
              <div className="pt-3">
                <p className="text-[11px] font-bold text-white/90 uppercase tracking-wider mb-2.5">
                  Follow Us
                </p>
                <div className="flex items-center gap-2.5">
                  {/* Instagram */}
                  <a
                    href={COMPANY_INFO.socialLinks?.instagram || "https://www.instagram.com/hitechnrgy/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="HI TECH ENERGY on Instagram"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={COMPANY_INFO.socialLinks?.facebook || "https://www.facebook.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="HI TECH ENERGY on Facebook"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={COMPANY_INFO.socialLinks?.linkedin || "https://www.linkedin.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="HI TECH ENERGY on LinkedIn"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0A66C2] border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href={COMPANY_INFO.socialLinks?.youtube || "https://www.youtube.com/@Lpg_gas_line-108"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="HI TECH ENERGY on YouTube (@Lpg_gas_line-108)"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF0000] border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} HI TECH ENERGY - LPG Gas Pipeline Installation Service. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/testimonials" className="hover:text-white">Testimonials</Link>
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
