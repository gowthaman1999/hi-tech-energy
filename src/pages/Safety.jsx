import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Safety() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const protocols = [
    {
      icon: 'verified_user',
      title: 'Zero-Harm Approach',
      desc: 'A foundational commitment to ensuring every operation results in zero incidents, injuries, or environmental impact.'
    },
    {
      icon: 'precision_manufacturing',
      title: '24/7 Monitoring',
      desc: 'Real-time pressure and flow analysis using AI-driven sensors to detect and mitigate anomalies before they escalate.'
    },
    {
      icon: 'assignment_turned_in',
      title: 'Regular Audits',
      desc: 'Systematic internal and third-party inspections of all hardware and operational workflows to ensure peak performance.'
    },
    {
      icon: 'emergency_home',
      title: 'Emergency Response',
      desc: 'Rapid-deploy units trained for immediate intervention, supported by a state-of-the-art logistics network.'
    }
  ];

  const standards = [
    {
      icon: 'check_circle',
      title: 'ISO 9001',
      desc: 'Quality management system certification ensuring consistent product and service excellence.'
    },
    {
      icon: 'shield',
      title: 'OHSAS 18001',
      desc: 'International occupational health and safety management system standard for total operational risk control.'
    },
    {
      icon: 'gavel',
      title: 'Local Gas Authority Approvals',
      desc: 'Full licensing and regular compliance verification by national gas safety and energy regulatory boards.'
    }
  ];

  const metrics = [
    { value: '100%', label: 'Audit Success' },
    { value: '0', label: 'LTI Record' },
    { value: '15k+', label: 'Safety Hours' },
    { value: '24h', label: 'Monitoring' }
  ];

  const slides = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDimTBgDldtjobuRAoPDVbkpSYxO_i9ris6nZq018PXNE8pgwhyRYmt4uSEWuNQOnt8F3UISigdV6blUVAxaULoDil4lXTGFxOpYGXsdVjfp8mb4Eary4OFjTMkLVyH7Rtlbx_yBLff9aG_F0-bx6WGGRSUXrbqj_IatHDK_6Soh47ny5ZSFp96xtkVnucNQNvGT1rmdYChgiO1g0j61okBGmH3WJZ_Dhcx_OuSTu9afLqIrUejkrYGSJHcI8DgsZlC8n_hKj4Bdq0',
      tag: 'Quarterly Drills',
      title: 'Theoretical Standards'
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_tAYZHX2XzsOI8g8s7a6Jodpw9bunInNVWlk-lpSo-OFojklKwKDgRoOxvIoo6rrUPf3aiuzfihqItYFfbSP_vl73sY8-Z-jJZA_Z6LEp8ChI1Cf4RpRk0jBCqrAjyQDwpEzWVTQOwXOAROVBMR-5wYDsxgtWbMNFlIj8vXu9LQt1-ycjdekc-HCB3udcU-5riizMzAkRA3BOdpFc0oh4M75wZN_qKK3L1kXK5WyyFUFJi2z7xzbgwVwWbkT2aa1vC-HZUVlmf_Y',
      tag: 'Field Training',
      title: 'Emergency Response Simulation'
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSiozE7J7Ee-V5qtnf001m69W3DHQkJ4CHMuIsaDGO_2MVhqIbUz6hJQVaaShX0T4NItXDHM1CwXzo-x1V1npxpRNRZE4lGhroNGWi4llbxJPIA16lYWeIwAIj-aGGlqxv1U-3gUrpworrqYqCt9K551ge7l8d7wMz72pB6UcCHU9ofH9lNcrrA3uqI59P1HEU2GVeWir-pjTrlLDgSjzaGNbaehzCQxj4pp6OQSoBLT_F2M7cLW_sHCsyz3eOWwhPtAnukHmEO-U',
      tag: 'Certification',
      title: 'Internal Excellence Awards'
    }
  ];

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-primary text-white text-left">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Safety inspection on industrial gas valve" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXSv1GgOG1-RfM0_l9JqyMLyl6IuDCAuduVlQBl8yL8uiPdPgUN8he5TtHzzjtNd4FsKhttz-52MmZKUwQP_FuBHT0V8u3cREbtLFVCild5h2eW0Wch2JbbUKCqTm7O5DOfVZ5-GatkKevBNLJt-X676MY3ymyF0Mw95Hu0oUpURWIuBUA_c9tsaBfRaXUTj0LQGhDlu2c9nJ_u6bOT9A_O4Ec0ikI9QSqPR3Ibk7dG0TcgSSUox0BzPnmP2PJpOk8yjWX4qwUymg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/50"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-16 text-white">
          <div className="max-w-2xl">
            <span className="bg-secondary-container text-on-secondary px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 inline-block font-semibold">
              Safety Standards
            </span>
            <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight font-bold">
              Safety First, Excellence Always
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Implementing the world's most rigorous safety protocols to ensure the integrity of your energy infrastructure and the protection of our communities.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-secondary-container text-on-secondary px-8 py-4 rounded-lg font-label-md hover:shadow-lg transition-all cursor-pointer font-semibold"
              >
                View Our Protocols
              </button>
              <a 
                href="#"
                className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-label-md hover:bg-white/10 transition-all flex items-center justify-center font-semibold"
              >
                Download Safety PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocols Grid */}
      <section className="py-24 px-4 md:px-16 max-w-[1280px] mx-auto text-left">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Core Safety Protocols</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-base">Our multi-layered approach to risk management defines our operational excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {protocols.map((proto, i) => (
            <div key={i} className="p-8 bg-white border border-outline-variant/30 rounded-xl bento-card hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">{proto.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-primary mb-3">{proto.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{proto.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="bg-primary py-24 text-left text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline-lg text-3xl font-bold text-white mb-6">Global Compliance Standards</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We adhere to international benchmarks and local regulations to guarantee that our gas infrastructure projects meet the highest possible safety and quality requirements.
              </p>
              <div className="space-y-6">
                {standards.map((std, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-secondary">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{std.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-headline-md text-lg font-bold mb-1">{std.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{std.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-12 border border-white/10 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-2 gap-8 text-center">
                {metrics.map((met, i) => (
                  <div key={i} className="p-6 bg-white rounded-xl">
                    <div className="text-secondary font-headline-xl text-3xl md:text-4xl font-bold mb-2">{met.value}</div>
                    <div className="text-primary font-label-md text-xs font-semibold uppercase">{met.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Culture Sliders */}
      <section className="py-24 px-4 md:px-16 max-w-[1280px] mx-auto text-left">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Our Safety Culture</h2>
            <p className="text-on-surface-variant max-w-xl text-base">Training is the backbone of our reliability. We invest thousands of hours annually in specialized safety drills and updates.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-outline-variant/80 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-outline-variant/80 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {slides.map((slide, i) => {
            // Highlight active slide conceptually or just display all beautifully
            return (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/5] group shadow-md">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={slide.title} 
                  src={slide.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-label-sm font-semibold text-secondary uppercase mb-2 block text-xs">{slide.tag}</span>
                    <h4 className="font-headline-md text-xl font-bold">{slide.title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-24 bg-surface-container border-y border-outline-variant/30 text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-lg">
              <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Safety Resources</h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">Access our detailed technical guides and policy documents for comprehensive understanding of our safety protocols.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-8">
              <a href="#" className="flex items-center gap-4 bg-white p-6 rounded-xl border border-outline-variant/50 hover:border-secondary hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                </div>
                <div>
                  <span className="block font-semibold text-primary mb-1 text-sm">LPG Safety Guidelines</span>
                  <span className="text-xs text-on-surface-variant uppercase font-medium">Download PDF (2.4 MB)</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 bg-white p-6 rounded-xl border border-outline-variant/50 hover:border-secondary hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                </div>
                <div>
                  <span className="block font-semibold text-primary mb-1 text-sm">Health &amp; Safety Policy</span>
                  <span className="text-xs text-on-surface-variant uppercase font-medium">Download PDF (1.1 MB)</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
