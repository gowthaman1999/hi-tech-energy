import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../data/hitechData';

export default function FloatingActions() {
  const [showPdfTooltip, setShowPdfTooltip] = useState(false);
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [showSocialTooltip, setShowSocialTooltip] = useState(false);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);

  const socialRef = useRef(null);

  // Sanitized phone number for links
  const rawPhone = COMPANY_INFO.phone.replace(/[^0-9]/g, ''); // "919363374157"
  const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    "Hello HI TECH ENERGY, I would like to inquire about your LPG gas pipeline installation services."
  )}`;
  const telUrl = `tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`;
  const pdfUrl = COMPANY_INFO.portfolioPdfUrl || "https://drive.google.com/file/d/1LQmJAU3glHK7ywGDKnjIuKA1clhmW1B1/view?usp=sharing";

  // Auto-collapse when clicking outside or pressing Escape
  useEffect(() => {
    if (!isSocialOpen) return;

    const handleClickOutside = (event) => {
      if (socialRef.current && !socialRef.current.contains(event.target)) {
        setIsSocialOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsSocialOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSocialOpen]);

  // 5 Platforms in ergonomic order (closest to launcher first)
  const socialPlatforms = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: waUrl,
      bgClass: 'bg-gradient-to-br from-[#25D366] via-[#20BA5C] to-[#128C7E]',
      hoverShadow: 'hover:shadow-[#25D366]/50',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.969.587 1.761.88 2.793.88 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm6.39 5.766c-.001 3.524-2.868 6.391-6.39 6.391-1.122 0-2.18-.293-3.111-.84l-3.447.904.92-3.361c-.604-.972-.942-2.11-.941-3.094.001-3.524 2.868-6.39 6.39-6.39 3.524 0 6.39 2.868 6.39 6.391z" />
          <path d="M12.012 2c-5.518 0-9.998 4.48-9.998 9.997 0 1.763.459 3.484 1.332 5.003l-1.417 5.176 5.309-1.392c1.472.804 3.13 1.228 4.774 1.229 5.517 0 9.998-4.48 9.998-9.998 0-5.517-4.48-9.998-9.998-9.998zm0 18.361c-1.476 0-2.923-.396-4.186-1.144l-.3-.178-3.113.816.83-3.033-.195-.311c-.822-1.309-1.258-2.836-1.257-4.408 0-4.615 3.755-8.37 8.37-8.37 4.616 0 8.37 3.755 8.37 8.37 0 4.616-3.754 8.37-8.369 8.37z" />
          <path d="M15.42 13.916c-.19-.095-1.123-.554-1.297-.618-.174-.063-.301-.095-.428.095-.127.19-.491.618-.602.745-.111.127-.222.143-.412.048-.19-.095-.804-.296-1.531-.944-.566-.505-.948-1.128-1.059-1.319-.111-.19-.012-.293.083-.388.086-.085.19-.222.285-.333.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.333-.048-.095-.428-1.03-.586-1.412-.155-.371-.312-.321-.428-.327l-.365-.005c-.127 0-.333.048-.507.238-.174.19-.666.65-.666 1.586s.682 1.839.777 1.966c.095.127 1.343 2.05 3.254 2.875.455.196.81.314 1.088.402.457.145.873.125 1.202.076.367-.055 1.123-.46 1.282-.904.159-.444.159-.824.111-.904-.048-.079-.175-.127-.365-.222z" />
        </svg>
      )
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: COMPANY_INFO.socialLinks?.instagram || "https://www.instagram.com/hitechnrgy/",
      bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
      hoverShadow: 'hover:shadow-[#dc2743]/50',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: COMPANY_INFO.socialLinks?.youtube || "https://www.youtube.com/@Lpg_gas_line-108",
      bgClass: 'bg-gradient-to-br from-[#FF0000] via-[#E60000] to-[#B30000]',
      hoverShadow: 'hover:shadow-[#FF0000]/50',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: COMPANY_INFO.socialLinks?.linkedin || "https://www.linkedin.com/",
      bgClass: 'bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182]',
      hoverShadow: 'hover:shadow-[#0A66C2]/50',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: COMPANY_INFO.socialLinks?.facebook || "https://www.facebook.com/",
      bgClass: 'bg-gradient-to-br from-[#1877F2] via-[#0B65C2] to-[#0A4B94]',
      hoverShadow: 'hover:shadow-[#1877F2]/50',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    }
  ];

  return (
    <aside
      aria-label="Quick contact and social options"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto select-none print:hidden"
    >
      {/* 1. View Brochure Floating Button */}
      <div className="relative flex items-center group">
        {/* Tooltip (Desktop Only) */}
        <div
          className={`hidden md:flex absolute right-full mr-3 whitespace-nowrap bg-[#831843] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-pink-500/30 transition-all duration-300 pointer-events-none ${
            showPdfTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-pink-300">menu_book</span>
            <span>View Brochure</span>
            <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">PDF</span>
          </span>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-[#831843]" />
        </div>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open HI TECH ENERGY Company Brochure PDF"
          onMouseEnter={() => setShowPdfTooltip(true)}
          onMouseLeave={() => setShowPdfTooltip(false)}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#e11d48] via-[#be123c] to-[#881337] text-white shadow-lg sm:shadow-xl hover:shadow-[#e11d48]/40 hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/25 group/brochure animate-mild-pulse hover:animate-none"
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl text-white drop-shadow transition-transform duration-300 group-hover/brochure:scale-110">
            menu_book
          </span>
        </a>
      </div>

      {/* 2. Phone Call Floating Button */}
      <div className="relative flex items-center group">
        {/* Tooltip (Desktop Only) */}
        <div
          className={`hidden md:flex absolute right-full mr-3 whitespace-nowrap bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-white/10 transition-all duration-300 pointer-events-none ${
            showCallTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span>Call Us:</span>
            <span className="text-secondary-container font-bold">{COMPANY_INFO.phone}</span>
          </span>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-primary" />
        </div>

        <a
          href={telUrl}
          aria-label={`Call HI TECH ENERGY at ${COMPANY_INFO.phone}`}
          onMouseEnter={() => setShowCallTooltip(true)}
          onMouseLeave={() => setShowCallTooltip(false)}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary-container via-primary to-[#001726] text-white shadow-lg sm:shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20 group/btn"
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl text-white">
            phone_in_talk
          </span>
        </a>
      </div>

      {/* 3. Merged Social Media Launcher Button & Expanded Menu */}
      <div ref={socialRef} className="relative flex items-center justify-end">
        
        {/* 5 Expanded Platform Icons (Slides out to the left with staggered spring/ease transition) */}
        <div
          id="social-platforms-menu"
          role="menu"
          aria-label="Social media channels"
          className={`flex items-center gap-1.5 sm:gap-2.5 mr-2 sm:mr-3 transition-all duration-300 ease-out ${
            isSocialOpen
              ? 'opacity-100 translate-x-0 pointer-events-auto visible'
              : 'opacity-0 translate-x-6 pointer-events-none invisible'
          }`}
        >
          {socialPlatforms.map((platform, idx) => {
            // Stagger animation: left-to-right blossom on open, right-to-left fold on close
            const delayMs = isSocialOpen ? idx * 45 : (socialPlatforms.length - 1 - idx) * 30;

            return (
              <div key={platform.id} className="relative flex items-center group/item">
                {/* Platform Tooltip (Desktop Only, pops above icon) */}
                <div
                  className={`hidden md:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#001726]/95 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xl border border-white/15 transition-all duration-200 pointer-events-none z-50 ${
                    hoveredPlatform === platform.id ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-1'
                  }`}
                >
                  <span>{platform.name}</span>
                  {/* Downward Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#001726]/95" />
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  aria-label={`Open HI TECH ENERGY on ${platform.name} in a new tab`}
                  onMouseEnter={() => setHoveredPlatform(platform.id)}
                  onMouseLeave={() => setHoveredPlatform(null)}
                  style={{
                    transitionDelay: `${delayMs}ms`
                  }}
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full ${platform.bgClass} text-white shadow-md sm:shadow-lg ${platform.hoverShadow} hover:shadow-xl flex items-center justify-center transition-all duration-250 hover:scale-115 active:scale-95 border border-white/35 group-hover/item:border-white/80 focus:outline-none focus:ring-2 focus:ring-secondary-container ${
                    isSocialOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  }`}
                >
                  {platform.icon}
                </a>
              </div>
            );
          })}
        </div>

        {/* Main Floating "Social" Button */}
        <div className="relative flex items-center group">
          {/* Tooltip for Main Button (Desktop Only) */}
          <div
            className={`hidden md:flex absolute right-full mr-3 whitespace-nowrap bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-white/10 transition-all duration-300 pointer-events-none ${
              showSocialTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isSocialOpen ? 'bg-red-400' : 'bg-secondary-container'}`} />
              <span>{isSocialOpen ? 'Close Menu' : 'Social Channels'}</span>
            </span>
            {/* Arrow */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-primary" />
          </div>

          <button
            type="button"
            onClick={() => setIsSocialOpen((prev) => !prev)}
            onMouseEnter={() => setShowSocialTooltip(true)}
            onMouseLeave={() => setShowSocialTooltip(false)}
            aria-expanded={isSocialOpen}
            aria-haspopup="true"
            aria-controls="social-platforms-menu"
            aria-label={isSocialOpen ? "Close social media channels menu" : "Open social media channels (WhatsApp, Instagram, YouTube, LinkedIn, Facebook)"}
            className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white shadow-lg sm:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary-container ${
              isSocialOpen
                ? 'bg-gradient-to-br from-primary via-[#001726] to-[#000f1a] border-secondary-container hover:shadow-2xl shadow-primary/50'
                : 'bg-gradient-to-br from-[#ff8c37] via-[#fd761a] to-[#d45500] border-white/35 hover:shadow-[#fd761a]/50 hover:shadow-2xl animate-social-pulse'
            }`}
          >
            {/* Morphing / Rotating Icon between Share and Close */}
            <div
              className={`transition-transform duration-300 ease-out flex items-center justify-center ${
                isSocialOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'
              }`}
            >
              {isSocialOpen ? (
                /* Close (✕) SVG Icon */
                <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Share / Social Hub SVG Icon */
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current drop-shadow" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                </svg>
              )}
            </div>
          </button>
        </div>

      </div>

    </aside>
  );
}
