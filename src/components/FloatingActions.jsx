import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/hitechData';

export default function FloatingActions() {
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);

  // Sanitized phone number for links
  const rawPhone = COMPANY_INFO.phone.replace(/[^0-9]/g, ''); // "919363374157"
  const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    "Hello HI TECH ENERGY, I would like to inquire about your LPG gas pipeline installation services."
  )}`;
  const telUrl = `tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`;

  return (
    <aside aria-label="Quick contact options" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto select-none print:hidden">
      
      {/* Phone Call Floating Button */}
      <div className="relative flex items-center group">
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 whitespace-nowrap bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-white/10 transition-all duration-300 pointer-events-none ${
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
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary-container via-primary to-[#001726] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 border-2 border-white/20 active:scale-95 group/btn"
        >
          <span className="material-symbols-outlined text-2xl sm:text-3xl text-white">
            phone_in_talk
          </span>
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="relative flex items-center group">
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 whitespace-nowrap bg-[#0b291b] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-emerald-500/20 transition-all duration-300 pointer-events-none ${
            showWaTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
            <span>Chat on WhatsApp</span>
          </span>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-[#0b291b]" />
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with HI TECH ENERGY on WhatsApp"
          onMouseEnter={() => setShowWaTooltip(true)}
          onMouseLeave={() => setShowWaTooltip(false)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#25D366] via-[#20BA5C] to-[#128C7E] text-white shadow-xl hover:shadow-[#25D366]/40 hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/30 group/wa"
        >
          {/* Official WhatsApp SVG Icon */}
          <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow transition-transform duration-300 group-hover/wa:scale-110" 
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.969.587 1.761.88 2.793.88 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm6.39 5.766c-.001 3.524-2.868 6.391-6.39 6.391-1.122 0-2.18-.293-3.111-.84l-3.447.904.92-3.361c-.604-.972-.942-2.11-.941-3.094.001-3.524 2.868-6.39 6.39-6.39 3.524 0 6.39 2.868 6.39 6.391z" />
            <path d="M12.012 2c-5.518 0-9.998 4.48-9.998 9.997 0 1.763.459 3.484 1.332 5.003l-1.417 5.176 5.309-1.392c1.472.804 3.13 1.228 4.774 1.229 5.517 0 9.998-4.48 9.998-9.998 0-5.517-4.48-9.998-9.998-9.998zm0 18.361c-1.476 0-2.923-.396-4.186-1.144l-.3-.178-3.113.816.83-3.033-.195-.311c-.822-1.309-1.258-2.836-1.257-4.408 0-4.615 3.755-8.37 8.37-8.37 4.616 0 8.37 3.755 8.37 8.37 0 4.616-3.754 8.37-8.369 8.37z" />
            <path d="M15.42 13.916c-.19-.095-1.123-.554-1.297-.618-.174-.063-.301-.095-.428.095-.127.19-.491.618-.602.745-.111.127-.222.143-.412.048-.19-.095-.804-.296-1.531-.944-.566-.505-.948-1.128-1.059-1.319-.111-.19-.012-.293.083-.388.086-.085.19-.222.285-.333.095-.111.127-.19.19-.317.063-.127.032-.238-.016-.333-.048-.095-.428-1.03-.586-1.412-.155-.371-.312-.321-.428-.327l-.365-.005c-.127 0-.333.048-.507.238-.174.19-.666.65-.666 1.586s.682 1.839.777 1.966c.095.127 1.343 2.05 3.254 2.875.455.196.81.314 1.088.402.457.145.873.125 1.202.076.367-.055 1.123-.46 1.282-.904.159-.444.159-.824.111-.904-.048-.079-.175-.127-.365-.222z" />
          </svg>
        </a>
      </div>

    </aside>
  );
}
