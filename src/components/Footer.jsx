import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../data/hitechData';

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
              <li><Link to="/services/commercial-lab-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Commercial Lab Pipeline</Link></li>
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
