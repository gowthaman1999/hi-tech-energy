import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../data/nglsData';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-secondary-container text-white flex items-center justify-center font-bold text-sm">H</span>
              <span className="font-headline-md font-bold text-lg text-white">HI TECH ENERGY</span>
            </div>
            <p className="font-body-sm text-xs text-white/70 leading-relaxed pt-2">
              Providing specialized LPG gas infrastructure, commercial reticulation systems, LOT pipelines, and medical oxygen pipeline solutions with a zero-compromise approach to safety.
            </p>
            <div className="pt-2 flex gap-2">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-md text-white/90 text-xs font-semibold">PESO Certified</span>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-md text-white/90 text-xs font-semibold">ISO 9001:2015</span>
            </div>
          </div>

          {/* Pipeline Services */}
          <div>
            <h4 className="font-headline-md text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-secondary-container inline-block pb-1">
              Gas Pipeline Services
            </h4>
            <ul className="space-y-2 text-xs font-body-sm">
              <li><Link to="/services/domestic-lpg-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Domestic LPG Pipeline</Link></li>
              <li><Link to="/services/commercial-lpg-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Commercial LPG Pipeline</Link></li>
              <li><Link to="/services/reticulated-lpg-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Reticulated LPG Pipeline</Link></li>
              <li><Link to="/services/lot-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">LOT Gas Pipeline</Link></li>
              <li><Link to="/services/bulk-lpg-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Bulk LPG Pipeline</Link></li>
              <li><Link to="/services/oxygen-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Medical Oxygen Pipeline</Link></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-headline-md text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-secondary-container inline-block pb-1">
              Other Services
            </h4>
            <ul className="space-y-2 text-xs font-body-sm">
              <li><Link to="/services/gas-fuel-conversion" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Gas Fuel Conversion</Link></li>
              <li><Link to="/services/gas-purification-panel-system" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Gas Purification Panels</Link></li>
              <li><Link to="/services/leakage-detection-system" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Leakage Detection System</Link></li>
              <li><Link to="/services/flow-meter-calculation-system" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Flow Meter Calculation</Link></li>
              <li><Link to="/services/hsd-diesel-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">HSD / Diesel Pipeline</Link></li>
              <li><Link to="/services/ammonia-pipeline" className="text-white/70 hover:text-secondary-fixed-dim transition-colors">Ammonia Pipeline System</Link></li>
            </ul>
          </div>

          {/* Office Locations */}
          <div className="space-y-4">
            <h4 className="font-headline-md text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-secondary-container inline-block pb-1">
              Our Offices
            </h4>
            <div className="text-xs font-body-sm space-y-1 text-white/70">
              <p className="font-bold text-white">{OFFICE_LOCATIONS.headOffice.title}</p>
              <p className="leading-relaxed">{OFFICE_LOCATIONS.headOffice.address}</p>
            </div>
            <div className="text-xs font-body-sm space-y-1 text-white/70 pt-2">
              <p className="font-bold text-white">{OFFICE_LOCATIONS.warehouse.title}</p>
              <p className="leading-relaxed">{OFFICE_LOCATIONS.warehouse.address}</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} HI TECH ENERGY. All Rights Reserved.</p>
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
