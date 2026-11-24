import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  COMPANY_INFO,
  OFFICE_LOCATIONS,
  FEATURED_PROJECT_SPOTLIGHT
} from '../data/hitechData';
import { useParallax } from '../hooks/useParallax';
import { useSEO } from '../hooks/useSEO';
import TestimonialsSlider from '../components/TestimonialsSlider';
import CustomersSlider from '../components/CustomersSlider';

const LocationsWeServe = React.lazy(() => import('../components/LocationsWeServe'));

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.hitechenergy.org/#localbusiness',
      name: 'Hi Tech Energy',
      url: 'https://www.hitechenergy.org/',
      description:
        'Looking for LPG gas pipeline installation in Coimbatore? Hi Tech Energy offers reliable and professional LPG pipeline installation service in Coimbatore for commercial and industrial requirements.',
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      image:
        'https://www.hitechenergy.org/images/gdrive/LOT_system_pipeline_WhatsApp_Image_2026-08-17_at_8_45_09_PM__1_.jpeg',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'No-1/64, Papanayakan Palayam, near Rangammal Kovil, Nanjundapuram Post',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
        postalCode: '641108',
        addressCountry: 'IN'
      },
      areaServed: {
        '@type': 'City',
        name: 'Coimbatore'
      },
      sameAs: Object.values(COMPANY_INFO.socialLinks)
    },
    {
      '@type': 'Service',
      '@id': 'https://www.hitechenergy.org/#service',
      name: 'LPG Gas Pipeline Installation Service in Coimbatore',
      serviceType: 'LPG Gas Pipeline Installation',
      provider: {
        '@id': 'https://www.hitechenergy.org/#localbusiness'
      },
      areaServed: {
        '@type': 'City',
        name: 'Coimbatore'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Gas Pipeline Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domestic LPG Pipeline' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial LPG Gas Pipeline' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial LPG Pipeline' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LPG Pipeline for Hotels & Restaurants' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LPG Pipeline for Institutions' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Centralized LPG Gas Pipeline' } }
        ]
      }
    }
  ]
};

function ViewportLazyLocations() {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '400px' });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-[320px]">
      {isVisible ? (
        <React.Suspense fallback={<div className="h-80 w-full animate-pulse bg-surface-container-low rounded-3xl" />}>
          <LocationsWeServe />
        </React.Suspense>
      ) : (
        <div className="h-80 w-full animate-pulse bg-surface-container-low rounded-3xl" />
      )}
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  useSEO({
    title: 'LPG Gas Pipeline Installation Service in Coimbatore',
    description: 'Looking for LPG gas pipeline installation in Coimbatore? Hi Tech Energy offers reliable and professional LPG pipeline installation service in Coimbatore for commercial and industrial requirements.',
    canonicalUrl: 'https://www.hitechenergy.org/',
    schema: HOME_SCHEMA
  });

  // Parallax hook references for key background & showcase elements
  const heroBgRef = useParallax(0.22, { initialScale: 1.15, maxOffset: 120, disabledOnMobile: true });
  const whyChooseMediaRef = useParallax(0.15, { initialScale: 1.08, maxOffset: 70, disabledOnMobile: true });

  // Core Gas Pipeline Services
  const coreServices = [
    {
      title: 'Domestic LPG Pipeline',
      category: 'Residential Solutions',
      desc: 'We install domestic LPG pipeline systems for homes, apartments, and residential buildings where a fixed gas connection is required. The pipeline route is planned around the kitchen layout and gas usage points to keep the installation practical and easy to use.',
      alt: 'Domestic LPG pipeline installation in Coimbatore for homes and apartments',
      image: '/images/optimized/domestic_lpg_pipeline_cover.webp',
      link: '/services/domestic-lpg-pipeline'
    },
    {
      title: 'Commercial LPG Gas Pipeline',
      category: 'Commercial Hospitality',
      desc: 'Hotels, restaurants, bakeries, canteens, and commercial kitchens often have multiple cooking appliances and regular LPG requirements. Our commercial LPG gas pipeline installation service is planned around the kitchen layout, equipment locations, and required gas connection points.',
      alt: 'Commercial LPG gas pipeline installation in Coimbatore for kitchens and bakeries',
      image: '/images/optimized/vot_line_commercial_pipeline_cover.webp',
      link: '/services/commercial-lpg-pipeline'
    },
    {
      title: 'Industrial LPG Pipeline',
      category: 'Industrial Infrastructure',
      desc: 'Industrial units may use LPG for heating, production, processing, and other applications. We provide industrial LPG pipeline installation based on the gas requirement, equipment location, pipeline route, and overall plant layout.',
      alt: 'Industrial LPG pipeline installation in Coimbatore for manufacturing facilities',
      image: '/images/optimized/Industrial_purpose_hydrant_gas_pipeline_WhatsApp_Image_2026-08-17_at_8_45_08_PM__1_.webp',
      link: '/services/industrial-solutions'
    },
    {
      title: 'LPG Pipeline for Hotels & Restaurants',
      category: 'Commercial Kitchens',
      desc: 'Hotels and restaurants may have several cooking points and gas-operated appliances within the same kitchen or across different areas. Our LPG pipeline installation for hotels and restaurants connects the required usage points through a planned gas supply network.',
      alt: 'LPG pipeline installation for hotels and restaurants in Coimbatore',
      image: '/images/optimized/Commercial_line_kitchen_WhatsApp_Image_2026-08-17_at_4_32_37_PM__6_.webp',
      link: '/services/commercial-lpg-pipeline'
    },
    {
      title: 'LPG Pipeline for Institutions',
      category: 'Institutions & Labs',
      desc: 'Schools, colleges, hospitals, hostels, and other institutions may require LPG for kitchens and common facilities. We provide LPG pipeline installation for institutions with pipeline routing planned around the building layout, equipment locations, and required gas usage points.',
      alt: 'LPG pipeline installation for institutions, schools, and hospitals in Coimbatore',
      image: '/images/optimized/Chemistry_lab_hero_classroom.webp',
      link: '/services/laboratory-gas-line-system'
    },
    {
      title: 'Centralized LPG Gas Pipeline',
      category: 'Reticulated & Centralized',
      desc: 'For buildings with several gas usage points, a centralized LPG gas pipeline installation can provide LPG from a common supply system to multiple connection points. We plan the pipeline layout based on the property size, LPG requirement, equipment locations, and number of connections.',
      alt: 'Centralized LPG gas pipeline installation in Coimbatore for multi-unit buildings',
      image: '/images/optimized/reticulated_lpg_pipeline_cover.webp',
      link: '/services/reticulated-lpg-pipeline'
    }
  ];

  // Specialized Pipeline Systems & Equipment
  const specializedSystems = [
    {
      title: 'Gas Manifold Systems',
      category: 'Manifold Skid Systems',
      desc: 'A gas manifold helps connect multiple LPG cylinders or supply points to the pipeline system and distribute gas to the required lines. We install manifold arrangements based on the required gas capacity, number of usage points, and project configuration.',
      alt: 'LPG gas manifold systems installation in Coimbatore',
      image: '/images/optimized/gas_header_mesh_enclosure_front.webp',
      link: '/services/gas-header-system'
    },
    {
      title: 'LPG Storage & Supply Systems',
      category: 'Storage & Supply',
      desc: 'We provide pipeline solutions that can be connected with suitable LPG storage and supply arrangements for commercial and industrial applications. The pipeline configuration is planned around the LPG supply arrangement and requirements of the facility.',
      alt: 'LPG storage and supply pipeline systems for commercial and industrial facilities',
      image: '/images/optimized/lot_primary_lines_safecon_easyvap.webp',
      link: '/services/lot-pipeline'
    },
    {
      title: 'Gas Pressure Regulation Systems',
      category: 'Pressure Control',
      desc: 'Proper pressure control is important for maintaining the required gas supply to connected equipment. We install suitable regulators and related components as part of the LPG pipeline system based on the project requirements.',
      alt: 'LPG gas pressure regulation systems and control panels',
      image: '/images/optimized/materials_lpg_pressure_regulators.webp',
      link: '/services/gas-control-panel-system'
    },
    {
      title: 'Gas Detection & Safety Systems',
      category: 'Safety Automation',
      desc: 'Gas detection equipment can help identify LPG leaks at an early stage. We provide suitable gas detection and alarm solutions for areas where LPG is stored, supplied, or used, based on the safety requirements of the project.',
      alt: 'LPG gas leak detection and safety alarm systems',
      image: '/images/optimized/Leek_detection_systems_WhatsApp_Image_2026-08-17_at_8_48_28_PM__1_.webp',
      link: '/services/lpg-control-panel-gas-leakage-detection-system'
    },
    {
      title: 'Kitchen Gas Pipeline Systems',
      category: 'Commercial Kitchen Distribution',
      desc: 'Commercial kitchens may have several cooking appliances operating at the same time. We plan and install kitchen gas pipeline systems to supply LPG to different equipment points while keeping the pipeline routing organised around the kitchen layout.',
      alt: 'Commercial kitchen LPG gas pipeline systems in Coimbatore',
      image: '/images/optimized/Commercial_line_kitchen_WhatsApp_Image_2026-08-17_at_4_32_37_PM__2_.webp',
      link: '/services/commercial-lpg-pipeline'
    },
    {
      title: 'Industrial Gas Pipeline Systems',
      category: 'Industrial Systems',
      desc: 'We provide industrial gas pipeline installation for facilities where LPG is used for heating, processing, production, or other industrial applications. The pipeline arrangement is designed according to the facility layout and LPG requirements.',
      alt: 'Industrial LPG gas pipeline systems for manufacturing plants',
      image: '/images/optimized/Industrial_purpose_hydrant_gas_pipeline_WhatsApp_Image_2026-08-17_at_8_45_08_PM.webp',
      link: '/services/industrial-solutions'
    }
  ];

  // Benefits of a Centralised LPG Gas Pipeline
  const centralizedBenefits = [
    {
      title: 'Suitable for Multiple Gas Usage Points',
      desc: 'Centralised pipelines can supply LPG to several kitchens, appliances, equipment points, or work areas from a common gas supply system. This makes them suitable for properties where multiple gas connections need to be managed through one planned network.',
      icon: 'hub'
    },
    {
      title: 'Easier Gas Supply Management',
      desc: 'With a properly planned pipeline, businesses can reduce the need to handle individual cylinder connections at each usage point. Routine inspection, maintenance, and access to the pipeline network can also be managed in a more organised way.',
      icon: 'build'
    }
  ];

  // Why Choose Hi Tech Energy checklist items
  const whyChooseItems = [
    'Safety-focused installation',
    'Quality pipeline materials',
    'Experienced installation team',
    'Pipeline routing based on site conditions',
    'Pressure testing before commissioning',
    'Support after installation'
  ];

  // Engineering Process Steps
  const steps = [
    {
      num: '1',
      title: '01. Site Assessment',
      desc: 'We inspect the site, identify the LPG source and gas usage points, check the equipment locations, and assess the available space for pipeline routing. The information collected at this stage helps determine the requirements for the pipeline design.'
    },
    {
      num: '2',
      title: '02. Design',
      desc: 'Our team prepares the pipeline layout based on the site conditions, equipment locations, LPG requirement, number of connection points, and planned usage. The route is selected according to the requirements of the individual project.'
    },
    {
      num: '3',
      title: '03. Installation',
      desc: 'The LPG pipeline and related components are installed according to the planned layout. Our team completes the pipeline routing and connections based on the equipment locations and required gas usage points.',
      active: true
    },
    {
      num: '4',
      title: '04. Pressure Testing',
      desc: 'Once the installation is completed, the pipeline is tested to check for leaks, pressure issues, connection problems, and other installation-related concerns. Any identified issues are addressed before commissioning.'
    },
    {
      num: '5',
      title: '05. Commissioning',
      desc: 'After pressure testing and the necessary checks are completed, the LPG pipeline system is commissioned and made ready for use. The commissioning process is carried out according to the requirements of the project.'
    }
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* Hero Section with Parallax Depth */}
      <header className="relative w-full min-h-[calc(20vh-5rem)] md:min-h-screen py-8 sm:py-12 md:pt-28 md:pb-20 flex items-center overflow-hidden bg-primary text-white parallax-container">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 md:via-primary/75 to-transparent z-10"></div>
          <picture className="w-full h-full">
            <source
              type="image/webp"
              srcSet="/images/hero/hero-mobile.webp 768w, /images/hero/hero-tablet.webp 1200w, /images/hero/hero-desktop.webp 1600w"
              sizes="100vw"
            />
            <img
              ref={heroBgRef}
              className="w-full h-full object-cover origin-center"
              alt="LPG gas pipeline installation service in Coimbatore by Hi Tech Energy"
              src="/images/hero/hero-desktop.webp"
              width="1600"
              height="1200"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <div className="relative z-20 px-4 sm:px-6 md:px-16 max-w-4xl text-left">
          <span className="reveal-slide-left inline-block px-3 py-1 md:px-4 md:py-1.5 bg-secondary-container/20 backdrop-blur-md border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-2.5 sm:mb-4 md:mb-6 uppercase tracking-widest text-[10px] sm:text-xs font-semibold" data-delay="100ms">
            {COMPANY_INFO.slogan}
          </span>
          <h1 className="reveal-slide-left font-headline-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 md:mb-5 leading-tight font-bold" data-delay="200ms">
            LPG Gas Pipeline Installation Service in Coimbatore
          </h1>
          <p className="reveal-slide-left text-secondary-container font-headline-md text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4 leading-relaxed max-w-3xl" data-delay="300ms">
            We provide LPG gas pipeline installation services in Coimbatore for homes, commercial spaces, hotels, restaurants, industries, institutions, and other facilities. Our team handles the complete work from pipeline planning and installation to pressure testing and final commissioning.
          </p>
          <p className="reveal-slide-left font-body-lg text-xs sm:text-sm md:text-base mb-5 sm:mb-6 md:mb-8 text-white/85 max-w-2xl leading-relaxed" data-delay="400ms">
            Whether you need a new LPG gas pipeline installation or want to improve an existing gas supply system, we assess the site, understand the gas usage and equipment locations, and plan the pipeline around the actual requirements of the property.
          </p>

          {/* Quick Contact Badges */}
          <div className="reveal-slide-left flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 text-[11px] sm:text-xs text-white/90" data-delay="500ms">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              📞 {COMPANY_INFO.phone}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              ✉ {COMPANY_INFO.email}
            </a>
            <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20">
              📍 Coimbatore - 641108
            </span>
          </div>

          <div className="reveal-slide-left flex flex-col sm:flex-row gap-3 sm:gap-4" data-delay="600ms">
            <button
              onClick={() => navigate('/contact')}
              className="bg-secondary-container text-on-secondary px-6 py-3 sm:px-8 sm:py-3.5 md:py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg group cursor-pointer font-bold text-xs sm:text-sm md:text-base active:scale-95"
            >
              Get Free Consultation
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-base sm:text-lg md:text-xl">arrow_forward</span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 hover:bg-white/20 transition-all cursor-pointer font-bold text-xs sm:text-sm md:text-base active:scale-95"
            >
              Contact Our Team
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-white/50 text-3xl md:text-4xl">expand_more</span>
        </div>
      </header>

      {/* Core Gas Pipeline Services */}
      <section className="py-12 sm:py-16 md:py-24 bg-white" id="services">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 text-left">
          <div className="reveal-slide-up flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Professional Installations</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 mt-1">Our Gas Pipeline Services</h2>
              <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">
                We handle different types of LPG pipeline work based on the size, layout, and use of the property. From residential buildings and commercial kitchens to larger industrial facilities, we plan and install the required pipeline system based on the gas usage and connection points.
              </p>
            </div>
            <Link
              to="/services"
              className="text-primary font-label-md border-b-2 border-secondary-container hover:text-secondary transition-all font-semibold pb-1 self-start md:self-auto text-xs sm:text-sm"
            >
              Explore All Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((srv, i) => (
              <div
                key={i}
                data-delay={`${i * 100}ms`}
                className="reveal-stagger-item group p-5 sm:p-7 md:p-8 bg-surface-container-low rounded-3xl border border-outline-variant/30 hover:border-secondary-container transition-all hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 sm:mb-6 relative">
                    <img
                      src={srv.image}
                      alt={srv.alt}
                      width="400"
                      height="192"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover service-card-img-zoom"
                    />
                  </div>
                  <span className="inline-block px-2.5 py-1 bg-secondary-container/10 text-secondary-container font-label-md text-[10px] sm:text-[11px] font-bold rounded-md uppercase tracking-wider mb-2">
                    {srv.category}
                  </span>
                  <h3 className="font-headline-md text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary group-hover:text-secondary transition-colors">{srv.title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-5 sm:mb-6 text-xs leading-relaxed">{srv.desc}</p>
                </div>
                <div>
                  <Link
                    to={srv.link}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-primary group-hover:text-secondary transition-colors"
                  >
                    <span>Know More →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Successfully Executed LOT and VOT Pipeline Systems */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

            <div className="reveal-slide-left space-y-4 sm:space-y-6">
              <span className="px-3 py-1 bg-secondary-container text-white text-[10px] sm:text-xs font-bold uppercase rounded-md tracking-wider">
                Proven Track Record
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                Successfully Executed LOT and VOT Pipeline Systems
              </h2>
              <p className="font-body-md text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                We have worked on LOT and VOT pipeline systems for different commercial and industrial projects. Our work includes pipeline installation, equipment connections, testing, and commissioning based on the requirements of each project.
              </p>
              <p className="font-body-md text-white/80 text-xs sm:text-sm leading-relaxed">
                LOT and VOT systems are used for LPG distribution requirements where the pipeline arrangement needs to support the specific gas supply and usage setup. The system configuration depends on the project, site conditions, LPG requirement, and number of connected usage points.
              </p>
              <p className="font-body-md text-white/80 text-xs sm:text-sm leading-relaxed">
                Our project experience includes work for reputed companies and property developments across different locations. Where applicable, project details such as the client, location, system type, and scope of work can be reviewed through our project portfolio.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button
                  onClick={() => navigate('/projects')}
                  className="bg-secondary-container text-on-secondary px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:opacity-90 transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  View Our Projects
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:bg-white/10 transition-all cursor-pointer active:scale-95"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>

            {/* Video Spotlight Box */}
            <div className="reveal-slide-right relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/60 backdrop-blur-sm group">
              <div className="w-full h-64 sm:h-80 md:h-[380px] overflow-hidden relative flex items-center justify-center bg-black">
                <video
                  src={FEATURED_PROJECT_SPOTLIGHT.videoUrl}
                  poster="/images/optimized/domestic_lpg_pipeline_cover.webp"
                  controls
                  playsInline
                  preload="none"
                  className="w-full h-full object-contain rounded-3xl"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Valuable Customers Section */}
      <section className="py-12 sm:py-16 bg-surface-container-low border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 text-center mb-8 sm:mb-12">
          <div className="reveal-slide-up max-w-3xl mx-auto">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Industry Trust</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-1 mb-3">Our Valuable Customers</h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed mb-2">
              Our LPG pipeline work has supported customers from different industries and business segments. We work with property developers, commercial establishments, industrial units, hotels, restaurants, institutions, and other organisations that need dependable gas pipeline systems.
            </p>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm leading-relaxed text-secondary font-medium">
              Our projects vary in size and application, so the pipeline design and installation approach is based on the actual site conditions and agreed project scope.
            </p>
          </div>
        </div>
        <CustomersSlider showHeader={false} />
      </section>

      {/* Specialised Pipeline Systems & Equipment */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="reveal-slide-up mb-8 sm:mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Engineering Systems</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4 mt-1">Specialised Pipeline Systems & Equipment</h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">
              Along with pipeline installation, we provide the equipment and supporting systems needed for a complete LPG gas supply setup. The components used for each project depend on the LPG source, gas requirement, number of usage points, equipment, and overall pipeline configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specializedSystems.map((srv, idx) => (
              <div
                key={idx}
                data-delay={`${idx * 100}ms`}
                className="reveal-stagger-item bg-surface-container-low rounded-3xl p-5 sm:p-6 border border-outline-variant/30 hover:border-secondary-container transition-all hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-5 sm:mb-6 relative">
                    <img
                      src={srv.image}
                      alt={srv.alt}
                      width="400"
                      height="176"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover service-card-img-zoom"
                    />
                  </div>
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary font-label-md text-[9px] sm:text-[10px] font-bold rounded uppercase tracking-wider mb-2">
                    {srv.category}
                  </span>
                  <h3 className="font-headline-md text-base sm:text-lg font-bold mb-2 sm:mb-3 text-primary">{srv.title}</h3>
                  <p className="font-body-md text-on-surface-variant text-xs leading-relaxed mb-5 sm:mb-6">{srv.desc}</p>
                </div>
                <Link
                  to={srv.link}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-primary group-hover:text-secondary transition-colors"
                >
                  <span>Know More →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of a Centralised LPG Gas Pipeline */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/30 text-left relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="reveal-slide-up text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Key Advantages</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-1 mb-2 sm:mb-4">
              Benefits of a Centralised LPG Gas Pipeline
            </h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">
              A centralised LPG system can be a practical option for buildings and businesses with multiple gas usage points. Instead of managing separate cylinder connections at every point, LPG can be supplied through a planned pipeline network from a common supply system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {centralizedBenefits.map((benefit, idx) => (
              <div
                key={idx}
                data-delay={`${idx * 150}ms`}
                className="reveal-slide-up bg-white p-5 sm:p-7 md:p-8 rounded-3xl border border-outline-variant/30 shadow-md hover:shadow-xl transition-all flex gap-4 sm:gap-6 items-start hover:-translate-y-1"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-secondary-container/10 text-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">{benefit.icon}</span>
                </div>
                <div className="space-y-1.5 sm:space-y-3">
                  <h3 className="font-headline-md text-base sm:text-xl font-bold text-primary">{benefit.title}</h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Hi Tech Energy? */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-white text-left relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

            <div className="reveal-slide-left space-y-4 sm:space-y-6">
              <span className="text-secondary-fixed-dim font-bold text-xs uppercase tracking-widest">Quality & Compliance</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Why Choose Hi Tech Energy?
              </h2>
              <p className="font-body-md text-xs sm:text-sm text-white/90 leading-relaxed">
                Choosing the right team for LPG pipeline installation is important because the system needs to provide a safe and dependable gas supply for regular use. At Hi Tech Energy, we focus on the actual site requirements instead of applying the same pipeline layout to every project.
              </p>

              <div className="pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {whyChooseItems.map((item, idx) => (
                    <div
                      key={idx}
                      data-delay={`${idx * 60}ms`}
                      className="reveal-stagger-item flex items-center gap-2 bg-white/10 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs font-semibold text-white/90 border border-white/5"
                    >
                      <span className="material-symbols-outlined text-secondary-container text-sm sm:text-base">check_circle</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-body-md text-xs sm:text-sm text-white/80 leading-relaxed pt-1">
                We assess the site, understand the LPG requirement and equipment locations, plan the pipeline route, and complete the installation with testing before commissioning. This approach helps us deliver a pipeline system suited to the requirements of each project.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-secondary-container text-on-secondary px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:opacity-90 transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  Speak With Our Team
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:bg-white/10 transition-all cursor-pointer active:scale-95"
                >
                  View Our Services
                </button>
              </div>
            </div>

            <div className="reveal-slide-right relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <div className="w-full h-64 sm:h-80 md:h-[440px] overflow-hidden relative">
                <img
                  ref={whyChooseMediaRef}
                  src="/images/optimized/why_choose_hi_tech_pipeline.webp"
                  alt="Hi Tech Energy LPG gas pipeline installation specialists in Coimbatore"
                  width="800"
                  height="440"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-primary/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/10 text-xs">
                <p className="font-bold text-white text-xs sm:text-sm">Safe. Smart. Economical.</p>
                <p className="text-white/70 text-[10px] sm:text-[11px] mt-0.5 sm:mt-1">
                  Engineered pipeline routing, leak prevention and dedicated safety support across all projects.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Process - Fully Optimized Desktop & Mobile Layout */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface-container overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">

          <div className="reveal-slide-up text-center mb-8 sm:mb-14 md:mb-20">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Systematic Framework</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3 mt-1">Our Engineering Process</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Every project starts with understanding the site and the customer&apos;s requirements. We then plan the pipeline and complete the installation step by step, from the initial site assessment through testing and commissioning.
            </p>
          </div>

          {/* Desktop/Tablet Horizontal Layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 lg:gap-6 text-center relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-delay={`${idx * 120}ms`}
                className="reveal-stagger-item relative z-10 flex flex-col items-center bg-white p-5 lg:p-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md font-bold text-sm transition-transform hover:scale-110 duration-300 ${step.active ? 'bg-secondary-container text-white shadow-lg' : 'bg-primary text-white'
                  }`}>
                  {step.num}
                </div>
                <h3 className="font-headline-md text-sm lg:text-base text-primary mb-2 font-bold">{step.title}</h3>
                <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Stepper Layout */}
          <div className="md:hidden space-y-3 sm:space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-delay={`${idx * 100}ms`}
                className="reveal-slide-up bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/20 shadow-sm flex items-start gap-3.5 sm:gap-4"
              >
                {/* Stepper Node */}
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow-md ${step.active ? 'bg-secondary-container text-white' : 'bg-primary text-white'
                  }`}>
                  {step.num}
                </div>

                {/* Stepper Card */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-headline-md text-sm font-bold text-primary">{step.title}</h3>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-secondary-container/10 text-secondary">
                      Step 0{step.num}
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center">

            <div className="reveal-slide-left space-y-4 sm:space-y-6 text-left">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Reach Out To Us</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary">Head Office & Contact</h2>

              <div className="space-y-4 sm:space-y-6 pt-1 sm:pt-2">
                <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border-l-4 border-secondary-container shadow-sm">
                  <h3 className="font-headline-md font-bold text-sm sm:text-base text-primary mb-1">{OFFICE_LOCATIONS.headOffice.title}</h3>
                  <p className="font-headline-sm text-xs font-semibold text-secondary mb-2">{COMPANY_INFO.tagline}</p>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-2">{OFFICE_LOCATIONS.headOffice.address}</p>
                  <p className="font-body-sm text-xs font-semibold text-secondary-container mb-2">📌 {OFFICE_LOCATIONS.headOffice.plusCode}</p>
                  <div className="font-body-sm text-xs font-bold text-secondary space-y-1">
                    <p>📞 Phone: <a href={`tel:${OFFICE_LOCATIONS.headOffice.phone.replace(/\s+/g, '')}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.phone}</a></p>
                    <p>✉ Email: <a href={`mailto:${OFFICE_LOCATIONS.headOffice.email}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.email}</a></p>
                  </div>
                </div>

                <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                  <h3 className="font-headline-md font-bold text-sm sm:text-base text-primary mb-2">Safe. Smart. Economical.</h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-2">
                    Delivering gas pipelines with auto shut-off, gas leak alarm systems, and external cylinder security.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-slide-right lg:col-span-2">
              <ViewportLazyLocations />
            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonials Marquee */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 mb-8 sm:mb-12">
          <div className="reveal-slide-up text-center max-w-2xl mx-auto">
            <span className="text-secondary-fixed-dim font-bold text-xs uppercase tracking-widest">Client Testimonials</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 sm:mt-2">Listen To Our Client's Feedback</h2>
            <p className="font-body-md text-xs sm:text-sm text-white/70 mt-1 sm:mt-2">Hear directly from homeowners, commercial hospitality partners, and industrial clients.</p>
          </div>
        </div>

        <div className="reveal-slide-up">
          <TestimonialsSlider />
        </div>
      </section>

    </div>
  );
}
