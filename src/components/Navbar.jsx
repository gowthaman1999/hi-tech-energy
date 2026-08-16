import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/careers', label: 'Careers' },
    { path: '/testimonials', label: 'Testimonials' }
  ];

  const pipelineServicesLinks = [
    { path: '/services/domestic-lpg-pipeline', label: 'Domestic LPG Pipeline' },
    { path: '/services/commercial-lpg-pipeline', label: 'Commercial LPG Pipeline' },
    { path: '/services/reticulated-lpg-pipeline', label: 'Reticulated LPG Pipeline' },
    { path: '/services/lot-pipeline', label: 'LOT LPG Pipeline' },
    { path: '/services/bulk-lpg-pipeline', label: 'Bulk LPG Pipeline' },
    { path: '/services/oxygen-pipeline', label: 'Oxygen Pipeline' }
  ];

  const otherServicesLinks = [
    { path: '/services/gas-fuel-conversion', label: 'Gas Fuel Conversion' },
    { path: '/services/gas-purification-panel-system', label: 'Gas Purification Panel system' },
    { path: '/services/leakage-detection-system', label: 'Leakage Detection System' },
    { path: '/services/flow-meter-calculation-system', label: 'Flow Meter Calculation System' },
    { path: '/services/hsd-diesel-pipeline', label: 'HSD / Diesel Pipeline' },
    { path: '/services/ammonia-pipeline', label: 'Ammonia Pipeline' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 glass-nav border-b border-gray-200/50 flex items-center ${
        isScrolled ? 'shadow-md bg-white/90 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-16 flex justify-between items-center">
        
        {/* Original Brand Logo */}
        <Link 
          to="/" 
          className="font-headline-md text-xl md:text-2xl font-bold text-primary tracking-tight flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">H</span>
          <span>HI TECH ENERGY</span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-7">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-label-md text-sm font-semibold transition-all ${
                isActive ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-primary hover:text-secondary'
              }`
            }
          >
            Home
          </NavLink>

          {/* Company Dropdown */}
          <div 
            className="relative group py-6"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 font-label-md text-sm font-semibold text-primary hover:text-secondary transition-colors cursor-pointer">
              Company
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className={`absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              {companyLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Gas Pipeline Services Dropdown */}
          <div 
            className="relative group py-6"
            onMouseEnter={() => setActiveDropdown('pipeline')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 font-label-md text-sm font-semibold text-primary hover:text-secondary transition-colors cursor-pointer">
              Gas Pipeline Services
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === 'pipeline' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              {pipelineServicesLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Other Services Dropdown */}
          <div 
            className="relative group py-6"
            onMouseEnter={() => setActiveDropdown('other')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 font-label-md text-sm font-semibold text-primary hover:text-secondary transition-colors cursor-pointer">
              Other Services
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === 'other' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              {otherServicesLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-orange-50 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `font-label-md text-sm font-semibold transition-all ${
                isActive ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-primary hover:text-secondary'
              }`
            }
          >
            Success Stories
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-label-md text-sm font-semibold transition-all ${
                isActive ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-primary hover:text-secondary'
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/contact')}
            className="hidden sm:inline-block bg-secondary-container text-on-secondary px-6 py-3 rounded-lg font-label-md text-xs font-bold hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            Request a Quote
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg lg:hidden transition-all duration-300 z-40 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col p-6 gap-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="font-semibold text-sm text-primary py-1">Home</Link>

            <div className="space-y-1 pl-2">
              <span className="text-xs font-bold text-gray-400 uppercase">Company</span>
              {companyLinks.map(link => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-xs font-medium text-gray-700 py-1 hover:text-secondary">{link.label}</Link>
              ))}
            </div>

            <div className="space-y-1 pl-2">
              <span className="text-xs font-bold text-gray-400 uppercase">Gas Pipeline Services</span>
              {pipelineServicesLinks.map(link => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-xs font-medium text-gray-700 py-1 hover:text-secondary">{link.label}</Link>
              ))}
            </div>

            <div className="space-y-1 pl-2">
              <span className="text-xs font-bold text-gray-400 uppercase">Other Services</span>
              {otherServicesLinks.map(link => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-xs font-medium text-gray-700 py-1 hover:text-secondary">{link.label}</Link>
              ))}
            </div>

            <Link to="/projects" onClick={() => setIsOpen(false)} className="font-semibold text-sm text-primary py-1">Success Stories</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="font-semibold text-sm text-primary py-1">Contact Us</Link>

            <button 
              onClick={() => {
                setIsOpen(false);
                navigate('/contact');
              }}
              className="bg-secondary-container text-on-secondary px-6 py-3 rounded-lg font-label-md text-xs font-bold text-center hover:opacity-90 active:scale-95 transition-all shadow-md mt-2 w-full"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
