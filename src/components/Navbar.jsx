import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Close mobile drawer when location changes
  useEffect(() => {
    setIsOpen(false);
    setMobileExpandedSection(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMobileSection = (section) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  const companyLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/testimonials', label: 'Testimonials' }
  ];

  const pipelineServicesLinks = [
    { path: '/services/domestic-lpg-pipeline', label: 'Domestic LPG Pipeline' },
    { path: '/services/commercial-lpg-pipeline', label: 'Commercial VOT Pipeline' },
    { path: '/services/reticulated-lpg-pipeline', label: 'LPG Reticulated System' },
    { path: '/services/lot-pipeline', label: 'LOT Pipeline System' },
    { path: '/services/industrial-solutions', label: 'Industrial Gas Solutions' },
    { path: '/services/laboratory-gas-line-system', label: 'Chemistry Laboratory Gas Line' }
  ];

  const otherServicesLinks = [
    { path: '/services/our-materials', label: 'Our Materials & Equipment' },
    { path: '/services/lot-primary-lines', label: 'LOT Primary Lines' },
    { path: '/services/lpg-control-panel-gas-leakage-detection-system', label: 'LPG Control Panel & Leak Detection' },
    { path: '/services/gas-control-panel-system', label: 'Gas Control Panel System' },
    { path: '/services/gas-header-system', label: 'Gas Header System' },
    { path: '/services/leakage-detection-system', label: 'Gas Leak Detection & Auto Shut-off' },
    { path: '/services/opportunities-expansion', label: 'Opportunities - Expansion' },
    { path: '/services/future-outlook', label: 'Future Outlook & Upgrades' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 glass-nav border-b border-gray-200/50 flex items-center ${
        isScrolled ? 'shadow-md bg-white/95 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center">

        {/* Official Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 py-1 group focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="HI TECH ENERGY Logo"
            className="h-9 sm:h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
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
            <div
              className={`absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 ${
                activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
              }`}
            >
              {companyLinks.map((link) => (
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
            <div
              className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 ${
                activeDropdown === 'pipeline' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
              }`}
            >
              {pipelineServicesLinks.map((link) => (
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
            <div
              className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 transition-all duration-200 ${
                activeDropdown === 'other' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
              }`}
            >
              {otherServicesLinks.map((link) => (
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
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="hidden sm:inline-flex bg-secondary-container text-on-secondary px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-label-md text-xs font-bold hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer items-center justify-center"
          >
            Request a Quote
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary p-2 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-20 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-white border-b border-gray-200 shadow-2xl lg:hidden transition-all duration-300 ease-in-out z-40 max-h-[calc(100vh-5rem)] overflow-y-auto ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-5 sm:p-6 gap-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-base text-primary py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center justify-between"
          >
            <span>Home</span>
            <span className="material-symbols-outlined text-sm text-gray-400">arrow_forward_ios</span>
          </Link>

          {/* Company Accordion */}
          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={() => toggleMobileSection('company')}
              className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm font-bold text-primary hover:bg-gray-50 text-left"
            >
              <span className="uppercase tracking-wider text-xs font-bold text-gray-600">Company</span>
              <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileExpandedSection === 'company' ? 'rotate-180 text-secondary' : 'text-gray-400'}`}>
                expand_more
              </span>
            </button>
            {mobileExpandedSection === 'company' && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/60 rounded-xl mt-1">
                {companyLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-xs font-medium text-gray-700 py-2 px-2 hover:text-secondary rounded hover:bg-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Pipeline Services Accordion */}
          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={() => toggleMobileSection('pipeline')}
              className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm font-bold text-primary hover:bg-gray-50 text-left"
            >
              <span className="uppercase tracking-wider text-xs font-bold text-gray-600">Gas Pipeline Services</span>
              <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileExpandedSection === 'pipeline' ? 'rotate-180 text-secondary' : 'text-gray-400'}`}>
                expand_more
              </span>
            </button>
            {mobileExpandedSection === 'pipeline' && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/60 rounded-xl mt-1">
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="block text-xs font-bold text-secondary py-2 px-2 rounded hover:bg-white"
                >
                  → View All Services Overview
                </Link>
                {pipelineServicesLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-xs font-medium text-gray-700 py-2 px-2 hover:text-secondary rounded hover:bg-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Services Accordion */}
          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={() => toggleMobileSection('other')}
              className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm font-bold text-primary hover:bg-gray-50 text-left"
            >
              <span className="uppercase tracking-wider text-xs font-bold text-gray-600">Specialized Systems</span>
              <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileExpandedSection === 'other' ? 'rotate-180 text-secondary' : 'text-gray-400'}`}>
                expand_more
              </span>
            </button>
            {mobileExpandedSection === 'other' && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/60 rounded-xl mt-1">
                {otherServicesLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-xs font-medium text-gray-700 py-2 px-2 hover:text-secondary rounded hover:bg-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 pt-2 space-y-1">
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-sm text-primary py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center justify-between"
            >
              <span>Success Stories</span>
              <span className="material-symbols-outlined text-sm text-gray-400">arrow_forward_ios</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-sm text-primary py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center justify-between"
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-sm text-gray-400">arrow_forward_ios</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/contact');
              }}
              className="w-full bg-secondary-container text-on-secondary py-3 rounded-xl font-label-md text-xs font-bold text-center hover:opacity-90 active:scale-95 transition-all shadow-md"
            >
              Request a Technical Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
