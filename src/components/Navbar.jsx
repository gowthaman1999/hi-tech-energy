import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/safety', label: 'Safety' },
    { path: '/industries', label: 'Industries' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About Us' },
    { path: '/faq', label: 'FAQ' },
    { path: '/insights', label: 'Insights' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 glass-nav border-b border-outline-variant/30 flex items-center ${
        isScrolled ? 'shadow-md bg-white/90 backdrop-blur-md' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-16 flex justify-between items-center">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="font-headline-md text-headline-md font-bold text-primary tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          HI TECH ENERGY
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-label-md transition-all duration-300 pb-1 ${
                  isActive 
                    ? 'text-secondary font-bold border-b-2 border-secondary' 
                    : 'text-primary hover:text-secondary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/contact')}
            className="hidden sm:inline-block bg-secondary-container text-on-secondary px-6 py-3 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            Request a Quote
          </button>

          {/* Burger icon */}
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
        <div className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-outline-variant/30 shadow-lg lg:hidden transition-all duration-300 z-40">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-label-md py-2 border-b border-outline-variant/10 ${
                    isActive 
                      ? 'text-secondary font-bold' 
                      : 'text-primary hover:text-secondary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                navigate('/contact');
              }}
              className="bg-secondary-container text-on-secondary px-6 py-3 rounded-lg font-label-md text-center hover:opacity-90 active:scale-95 transition-all shadow-md mt-2 w-full"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
