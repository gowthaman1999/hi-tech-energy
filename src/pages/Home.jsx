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
import AnimatedCounter from '../components/AnimatedCounter';
import CustomersSlider from '../components/CustomersSlider';
import LocationsWeServe from '../components/LocationsWeServe';

export default function Home() {
  const navigate = useNavigate();

  useSEO({
    title: 'LPG Gas Pipeline Installation Services | Hi Tech Energy',
    description: 'Looking for LPG gas pipeline installation? Hi Tech Energy offers reliable and professional LPG pipeline installation solutions for commercial and industrial requirements.',
    canonicalUrl: 'https://www.hitechenergy.org/'
  });

  // Parallax hook references for key background & showcase elements
  const heroBgRef = useParallax(0.22, { initialScale: 1.15, maxOffset: 120, disabledOnMobile: true });
  const whyChooseMediaRef = useParallax(0.15, { initialScale: 1.08, maxOffset: 70, disabledOnMobile: true });

  // Variation 2 Stats
  const stats = [
    { end: 25, suffix: '%', label: 'COST SAVINGS', delay: '0ms' },
    { end: 5, suffix: 'K+', label: 'PIPELINE INSTALLATIONS', delay: '100ms' },
    { staticText: 'VOT & LOT', label: 'PIPELINE SYSTEMS', delay: '200ms' },
    { end: 6, suffix: '/7', label: 'DAYS SUPPORT', delay: '300ms' }
  ];

  // Core Gas Pipeline Services (Variation 2)
  const coreServices = [
    {
      title: 'Domestic LPG Pipeline',
      category: 'Residential Solutions',
      desc: 'We provide LPG pipeline installation for homes and residential properties that require a fixed LPG gas supply. The pipeline route is planned around the kitchen layout and gas usage points, with attention to accessibility, connections, and safe installation.',
      image: '/images/gdrive/domestic_lpg_pipeline_cover.jpg',
      link: '/services/domestic-lpg-pipeline'
    },
    {
      title: 'Commercial LPG Gas Pipeline',
      category: 'Commercial Hospitality',
      desc: 'Our gas pipeline installation service is suitable for hotels, restaurants, commercial kitchens, and other businesses that depend on LPG for their daily operations. We plan the pipeline to connect multiple cooking and equipment points from the LPG supply system.',
      image: '/images/gdrive/vot_line_commercial_pipeline_cover.jpg',
      link: '/services/commercial-lpg-pipeline'
    },
    {
      title: 'Industrial LPG Pipeline',
      category: 'Industrial Infrastructure',
      desc: 'We provide LPG gas pipeline installation for industrial facilities where LPG is used for heating, production processes, equipment, and other applications. The pipeline layout is planned according to the facility, equipment locations, and required gas connections.',
      image: '/images/gdrive/Industrial_purpose_hydrant_gas_pipeline_WhatsApp_Image_2026-08-17_at_8_45_08_PM__1_.jpeg',
      link: '/services/industrial-solutions'
    },
    {
      title: 'LPG Pipeline for Hotels & Restaurants',
      category: 'Commercial Kitchens',
      desc: 'Hotels and restaurants often have several cooking areas and gas-operated equipment. Our LPG pipeline installation service helps connect these points to a common LPG supply system through a planned pipeline network. We assess the kitchen layout and equipment locations before finalising the pipeline route and connection points.',
      image: '/images/gdrive/Commercial_line_kitchen_WhatsApp_Image_2026-08-17_at_4_32_37_PM__6_.jpeg',
      link: '/services/commercial-lpg-pipeline'
    },
    {
      title: 'LPG Pipeline for Institutions',
      category: 'Institutions & Labs',
      desc: 'We provide gas pipeline installation for institutions such as hospitals, schools, colleges, hostels, and other facilities with LPG requirements. The pipeline system is planned according to the building layout, kitchen or equipment locations, and number of gas usage points.',
      image: '/images/gdrive/Chemistry_lab_hero_classroom.jpeg',
      link: '/services/laboratory-gas-line-system'
    },
    {
      title: 'Centralized LPG Gas Pipeline',
      category: 'Reticulated & Centralized',
      desc: 'Our centralized LPG pipeline installation solutions are suitable for properties that need LPG supply at multiple usage points. Instead of managing individual connections for each point, a centralised system can distribute LPG through a planned pipeline network. The design depends on factors such as the property layout, LPG requirement, number of connection points, and equipment being used.',
      image: '/images/gdrive/reticulated_lpg_pipeline_cover.jpg',
      link: '/services/reticulated-lpg-pipeline'
    }
  ];

  // Specialized Pipeline Systems & Equipment (Variation 2)
  const specializedSystems = [
    {
      title: 'Gas Manifold',
      category: 'Manifold Skid Systems',
      desc: 'A gas manifold connects the LPG source to the pipeline network and helps distribute the gas to the required supply lines. The manifold arrangement is selected based on the project requirements and number of connections.',
      image: '/images/gdrive/gas_header_mesh_enclosure_front.jpg',
      link: '/services/gas-header-system'
    },
    {
      title: 'LPG Pipeline System',
      category: 'Primary Piping Networks',
      desc: 'Our LPG pipeline installation solutions are planned for different building types and applications. The pipeline layout takes into account the LPG source, equipment locations, usage points, routing requirements, and other project-specific factors.',
      image: '/images/gdrive/lot_primary_lines_safecon_easyvap.jpg',
      link: '/services/lot-primary-lines'
    },
    {
      title: 'Gas Pressure Regulation System',
      category: 'Pressure Control',
      desc: 'A pressure regulation system helps control LPG pressure before the gas reaches the required usage points. We provide pressure regulation systems as part of the gas pipeline installation based on the requirements of the LPG system and connected equipment.',
      image: '/images/gdrive/materials_lpg_pressure_regulators.png',
      link: '/services/gas-control-panel-system'
    },
    {
      title: 'Gas Detection & Safety System',
      category: 'Safety Automation',
      desc: 'Gas detection and safety systems can be included with the LPG gas pipeline installation based on the requirements of the project. These systems can help identify gas leakage and provide an additional safety measure for areas where LPG is used.',
      image: '/images/gdrive/Leek_detection_systems_WhatsApp_Image_2026-08-17_at_8_48_28_PM__1_.jpeg',
      link: '/services/lpg-control-panel-gas-leakage-detection-system'
    },
    {
      title: 'Kitchen Gas Pipeline',
      category: 'Commercial Kitchen Distribution',
      desc: 'We provide LPG pipeline installation for commercial kitchens with multiple cooking equipment and gas usage points. The pipeline is routed based on the kitchen layout and equipment locations to provide connections where LPG is required.',
      image: '/images/gdrive/Commercial_line_kitchen_WhatsApp_Image_2026-08-17_at_4_32_37_PM__2_.jpeg',
      link: '/services/commercial-lpg-pipeline'
    },
    {
      title: 'Industrial Gas Pipeline',
      category: 'Industrial Systems',
      desc: 'Our gas pipeline installation service is also suitable for industrial facilities that use LPG for heating, production, process applications, and other equipment. The pipeline arrangement is designed according to the facility layout and LPG requirements.',
      image: '/images/gdrive/Industrial_purpose_hydrant_gas_pipeline_WhatsApp_Image_2026-08-17_at_8_45_08_PM.jpeg',
      link: '/services/industrial-solutions'
    }
  ];

  // Benefits of Centralized LPG Gas Pipeline (Variation 2)
  const centralizedBenefits = [
    {
      title: 'Suitable for Multiple Gas Distribution Points',
      desc: 'A centralised LPG pipeline installation can supply gas to multiple kitchens, appliances, equipment, and usage areas through a planned pipeline network. This can be useful where several gas connection points need to be supplied from a common LPG source.',
      icon: 'hub'
    },
    {
      title: 'Reduced Cylinder Handling & Easy Maintenance',
      desc: 'With a centralised gas pipeline installation, businesses can manage LPG through a common supply system rather than handling separate connections at every usage point. A properly planned system can also make access to the pipeline network and connected equipment easier for inspection and maintenance.',
      icon: 'build'
    }
  ];

  // Why Choose Hi Tech Energy checklist items (Variation 2)
  const whyChooseItems = [
    'Experienced installation team',
    'Quality pipeline materials',
    'Pipeline routing based on the site layout',
    'LPG pipeline installation',
    'Pressure testing',
    'Gas pipeline commissioning',
    'Project support'
  ];

  // Engineering Process Steps (Variation 2)
  const steps = [
    {
      num: '1',
      title: '01. Site Assessment',
      desc: 'We inspect the site to identify the LPG source, kitchens, equipment locations, gas usage points, available pipeline routes, and other project requirements. This helps us understand the installation conditions before the pipeline layout is prepared.'
    },
    {
      num: '2',
      title: '02. Design',
      desc: 'The gas pipeline installation layout is prepared based on the building structure, LPG requirements, equipment locations, number of connection points, and pipeline routing requirements.'
    },
    {
      num: '3',
      title: '03. Installation',
      desc: 'Our team carries out the LPG gas pipeline installation according to the approved pipeline layout and project requirements. The pipeline and related components are installed based on the planned route and connection points.',
      active: true
    },
    {
      num: '4',
      title: '04. Pressure Testing',
      desc: 'After installation, the pipeline is tested to check the pipeline connections and overall system condition. Pressure testing helps identify issues that need to be addressed before the system is commissioned.'
    },
    {
      num: '5',
      title: '05. Commissioning',
      desc: 'Once the LPG pipeline installation is completed and the required checks and testing have been carried out, the system is commissioned for use. The final commissioning process is completed according to the requirements of the project.'
    }
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* Hero Section with Parallax Depth */}
      <header className="relative w-full min-h-[calc(20vh-5rem)] md:min-h-screen py-8 sm:py-12 md:pt-28 md:pb-20 flex items-center overflow-hidden bg-primary text-white parallax-container">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 md:via-primary/75 to-transparent z-10"></div>
          <img
            ref={heroBgRef}
            className="w-full h-full object-cover origin-center"
            alt="LPG Gas Pipeline Installation Service - HI TECH ENERGY"
            src="/images/gdrive/LOT_system_pipeline_WhatsApp_Image_2026-08-17_at_8_45_09_PM__1_.jpeg"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="relative z-20 px-4 sm:px-6 md:px-16 max-w-4xl text-left">
          <span className="reveal-slide-left inline-block px-3 py-1 md:px-4 md:py-1.5 bg-secondary-container/20 backdrop-blur-md border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-2.5 sm:mb-4 md:mb-6 uppercase tracking-widest text-[10px] sm:text-xs font-semibold" data-delay="100ms">
            {COMPANY_INFO.slogan}
          </span>
          <h1 className="reveal-slide-left font-headline-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 md:mb-5 leading-tight font-bold" data-delay="200ms">
            LPG Gas Pipeline Installation Service
          </h1>
          <p className="reveal-slide-left text-secondary-container font-headline-md text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4 leading-relaxed max-w-3xl" data-delay="300ms">
            Hi Tech Energy provides LPG gas pipeline installation services for homes, commercial buildings, hotels, restaurants, industries, institutions, and other facilities. We handle the complete pipeline installation process based on the building layout, LPG usage, equipment locations, and number of gas connection points.
          </p>
          <p className="reveal-slide-left font-body-lg text-xs sm:text-sm md:text-base mb-5 sm:mb-6 md:mb-8 text-white/85 max-w-2xl leading-relaxed" data-delay="400ms">
            Our team takes care of site assessment, pipeline planning, installation, pressure testing, and commissioning. The pipeline layout is prepared according to the requirements of each project to provide a practical and properly planned LPG gas supply system.
          </p>

          {/* Quick Contact Badges */}
          <div className="reveal-slide-left flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 text-[11px] sm:text-xs text-white/90" data-delay="500ms">
            <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20">
              📞 {COMPANY_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/20">
              ✉ {COMPANY_INFO.email}
            </span>
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

      {/* Animated Statistics (Variation 2) */}
      <section className="py-8 sm:py-12 md:py-16 bg-primary text-white overflow-hidden border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="reveal-slide-up text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5"
                data-delay={stat.delay}
              >
                <div className="font-headline-xl text-2xl sm:text-3xl md:text-5xl text-secondary-container mb-1 sm:mb-2 font-bold min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    staticText={stat.staticText}
                    duration={2000}
                  />
                </div>
                <div className="font-label-md uppercase tracking-widest text-white/70 text-[10px] sm:text-xs font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Gas Pipeline Services (Variation 2) */}
      <section className="py-12 sm:py-16 md:py-24 bg-white" id="services">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 text-left">
          <div className="reveal-slide-up flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">Professional Installations</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 mt-1">Our Gas Pipeline Services</h2>
              <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">
                Our Gas Pipeline Installation Services cover residential, commercial, institutional, and industrial LPG requirements. We plan the pipeline according to the building layout, LPG source, equipment locations, gas usage, and number of connection points.
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
                      alt={srv.title}
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

      {/* Successfully Executed LOT and VOT Pipeline Systems (Variation 2) */}
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
                Hi Tech Energy has successfully executed LOT and VOT pipeline systems for reputed companies, including Daksha Properties, Pristson Lab Pvt Ltd, and others.
              </p>
              <p className="font-body-md text-white/80 text-xs sm:text-sm leading-relaxed">
                Our team has handled LPG gas pipeline installation projects for commercial and industrial requirements. Each installation is planned according to the site conditions, LPG usage, equipment locations, and required gas connections.
              </p>
              <p className="font-body-md text-white/80 text-xs sm:text-sm leading-relaxed">
                Where LOT or VOT systems are required, the pipeline arrangement and related equipment are planned according to the requirements of the project.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button
                  onClick={() => navigate('/projects')}
                  className="bg-secondary-container text-on-secondary px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:opacity-90 transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  View Projects
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
                  poster={FEATURED_PROJECT_SPOTLIGHT.image}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain rounded-3xl"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Valuable Customers Section (Variation 2) */}
      <section className="py-12 sm:py-16 bg-surface-container-low border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 text-center mb-8 sm:mb-12">
          <div className="reveal-slide-up max-w-3xl mx-auto">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Industry Trust</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-1 mb-3">Our Valuable Customers</h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed mb-2">
              We have provided gas pipeline installation services for customers across different industries and business sectors. Our customer base includes commercial establishments, industrial companies, property developers, hotels, restaurants, institutions, and other businesses that require LPG pipeline installation.
            </p>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm leading-relaxed text-secondary font-medium">
              Our completed projects include different types of LPG pipeline requirements, from commercial kitchen applications to larger industrial and institutional installations.
            </p>
          </div>
        </div>
        <CustomersSlider />
      </section>

      {/* Specialised Pipeline Systems & Equipment (Variation 2) */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="reveal-slide-up mb-8 sm:mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Engineering Systems</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4 mt-1">Specialised Pipeline Systems & Equipment</h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">
              Along with LPG gas pipeline installation, we provide pipeline systems and related equipment required for LPG gas distribution. The equipment used for a project depends on the LPG source, gas requirement, number of usage points, and overall pipeline configuration.
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
                      alt={srv.title}
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

      {/* Benefits of a Centralised LPG Gas Pipeline (Variation 2) */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/30 text-left relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="reveal-slide-up text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Key Advantages</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-1 mb-2 sm:mb-4">
              Benefits of a Centralised LPG Gas Pipeline
            </h2>
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm md:text-base">
              A centralised LPG gas pipeline provides a practical way to supply LPG to multiple usage points from a common gas supply system. It can be useful for commercial kitchens, institutions, hotels, restaurants, and other properties with several LPG usage points.
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

      {/* Why Choose Hi Tech Energy? (Variation 2) */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-white text-left relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

            <div className="reveal-slide-left space-y-4 sm:space-y-6">
              <span className="text-secondary-fixed-dim font-bold text-xs uppercase tracking-widest">Quality & Compliance</span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Why Choose Hi Tech Energy?
              </h2>
              <p className="font-body-md text-xs sm:text-sm text-white/90 leading-relaxed">
                For any LPG gas pipeline installation service, proper planning, installation, testing, and commissioning are important. At Hi Tech Energy, we first understand the site and LPG requirements before carrying out the pipeline work.
              </p>

              <div className="pt-2">
                <h3 className="font-headline-md text-xs font-bold text-secondary-container uppercase tracking-wider mb-3 sm:mb-4">
                  Our installation work includes:
                </h3>
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
                We handle the gas pipeline installation process from site assessment and planning through installation, pressure testing, and commissioning. The scope of work is planned according to the requirements of each project.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => navigate('/about')}
                  className="bg-secondary-container text-on-secondary px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:opacity-90 transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  Know More About Us
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-headline-md font-bold text-xs sm:text-sm hover:bg-white/10 transition-all cursor-pointer active:scale-95"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="reveal-slide-right relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <div className="w-full h-64 sm:h-80 md:h-[440px] overflow-hidden relative">
                <img
                  ref={whyChooseMediaRef}
                  src="/images/gdrive/LOT_system_pipeline_WhatsApp_Image_2026-08-17_at_8_45_11_PM__1_.jpeg"
                  alt="Why Choose Hi Tech Energy LPG Pipeline"
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

      {/* Engineering Process - Fully Optimized Desktop & Mobile Layout (Variation 2) */}
      <section className="py-12 sm:py-16 md:py-24 bg-surface-container overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">

          <div className="reveal-slide-up text-center mb-8 sm:mb-14 md:mb-20">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Systematic Framework</span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3 mt-1">Our Engineering Process</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Our LPG pipeline installation process starts with understanding the project requirements and site conditions. We assess the LPG source, equipment locations, gas usage points, and available pipeline route before preparing the installation plan.
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
                    <p>📞 Phone: <a href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`} className="hover:underline">{OFFICE_LOCATIONS.headOffice.phone}</a></p>
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
              <LocationsWeServe />
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
