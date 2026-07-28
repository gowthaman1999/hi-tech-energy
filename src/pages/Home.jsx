import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    { value: '15+', label: 'Years Experience', delay: '0ms' },
    { value: '500+', label: 'Projects Completed', delay: '100ms' },
    { value: '100%', label: 'Safety Record', delay: '200ms' },
    { value: '24/7', label: 'Technical Support', delay: '300ms' }
  ];

  const services = [
    {
      icon: 'factory',
      title: 'Industrial LPG',
      description: 'Heavy-duty gas storage and distribution networks for manufacturing plants and large-scale industrial complexes.',
      features: ['Bulk Storage Solutions', 'Pipeline Network Design']
    },
    {
      icon: 'business',
      title: 'Commercial Solutions',
      description: 'Safe and efficient energy systems for hospitality, shopping centers, and commercial kitchen operations.',
      features: ['Multi-point Reticulation', 'Gas Detection Systems']
    },
    {
      icon: 'home_work',
      title: 'Residential Reticulation',
      description: 'Modern, centralized LPG distribution for high-rise apartments and gated residential communities.',
      features: ['Pre-paid Metering', '24/7 Leak Monitoring']
    }
  ];

  const steps = [
    { num: '1', title: 'Consultation', desc: 'Requirement analysis and site feasibility survey.' },
    { num: '2', title: 'Design', desc: 'CAD modeling and hydraulic safety calculations.' },
    { num: '3', title: 'Installation', desc: 'Expert engineering team executes site development.', active: true },
    { num: '4', title: 'Testing', desc: 'Pneumatic testing and safety certification.' },
    { num: '5', title: 'Maintenance', desc: 'Ongoing support and periodic safety inspections.' }
  ];

  const industries = [
    { icon: 'restaurant', name: 'Hospitality' },
    { icon: 'precision_manufacturing', name: 'Manufacturing' },
    { icon: 'apartment', name: 'Residential Complexes' },
    { icon: 'medical_services', name: 'Healthcare' }
  ];

  const projects = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB--LPvRD9LMefGvUGbcLZDfhYJDuGETxYPWz-P_bhDBEwqhtVrkI1oz4bTAMHKqdMMux1yZt7T7CiSwWywJIX_b2oUfIIEPl47_1Y7kxiDJNayHCUNNmgsCfEKp4xMT9LrfFB1WkftcHEmWfjf2dNLIszrDBemB-daB9-d9r20Oow9LAccnJPAIsAjcFGJl8bydMhQ5jWy7z0icG7B1-xPCnxnCVA0R_o0Et-AJcMHs6rOWT2xrbAyGp4pkkDB78ZyQkL9eiEESBE',
      category: 'Industrial Storage',
      title: 'Titan Manufacturing Hub',
      location: 'Industrial District, Phase 2'
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu0NgjrQdL0OE2gD3jMB2YXxUK38drEGMj_fd38K4WcmWkRZ84g5iyq_8FbHUz9sIO7Jsh6Kv0a9VdfAqHTh8JjAIb1pn-63NFsT65Wqepc28hMJ_uxIbuSlMVOZreVXnHI-MS-NBEPLlLA6aIkcth6G2kWzd593DF1wchwP0sUMV1FzT7nqGt2KGOScOtHXJZt7YXJ7Bwt4pU1LOct41Ebzbn23sxSgzJveJDf9_ySjbYpV8kJShYrwpnZtQ21n-Bx3qzNPvxFJw',
      category: 'Residential Reticulation',
      title: 'Azure Sky Residences',
      location: 'Metropolitan Waterfront'
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG4Hiq0HCVHiVekTqr4168EzNzO-XU8lZTYqPNJUQSV8Vvx5_cHGNWPAVRKPpLsdT5NzQFpWKzayXTtq65XWZ6xR5l9Vx-IXHToANZpF5WUof10HyZ00h60Jx60bN49tPVi0a7xKh8LPdTF5vPV6gP8wImEoHxG3vKefDIW4NIMyQtDvV5gfvk42trt_8O3n_-hfE-Um--lo3mw84zFgwmLwvwhyznoPmobvLRBDA7hlWkvWx_Vj70BKaWncBL3cT0-RU0XNV4e1w',
      category: 'Commercial Supply',
      title: 'Grand Continental Hotel',
      location: 'Central Business District'
    }
  ];

  const logos = [
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKADJ6fgNU362jH9cqELghwlSvugLjdQYsbBKEPcTgbZ_k_j5x7YllpUiM4QdGA9kvm4tzm4qhVG96z3bqEQRMTr_0aUaUj4ANCWQecdN7SHA_HUZYipV7UhdZ251ABHx2iUam_uikVXu3Cf-WRSCr6tvgXKuTYbTlCtGVIt6dQuRmXgEng_-H772ILn_CiZDjkIZbJYZ3V_Tg2mOFo-A2_Ej8jDFUJWp8EUhLpGtAldHCTX4NfKRHzwjKx7adKKjbMeomi7eDqts', alt: 'PowerFlow Global' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDifqfDId7Z9awvzWLLzhFGvqRtNp5t0xstzi_ej-wrCo92svbNRL4po1ic1UIICcOFHIAsqWleqDAakqmtPHQ9pBIS2lRn476ACpev38PeXrblQ_HZZOxe0D10LdNyxYXcsOdVmU5oDUY_F6hCokk7xot3Td8TLtHHfaxUY_BB0GkIKLCr0oA_h2WNtH8Xy52oupUKGTjgHm9EKnY_uLW5hKBT5GuzHtnNj64XaKZVD3VHrYEbNNVuQHGzbLbKNwnOCuQq9NV-UI', alt: 'Steelworks International' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuWUk1EuNkvjiS-Efut3-YDBZpNaY9zYi0t5iDSNY0nmq12dpUarVBggNUypzs-tpaC6Rjn2hH7JBXk3u5Uuichx8F0xLSABD_t-dnzW2hwM5PubKEMMYs1yeLTBu7Omz47pc7b5P0rwFE3IDfCtj7wRQIybPmsRvDwme2uyY4LuimJyHNZqqdxDKOx-2RuHDxtwcW_4vKz_OGgkpg69F5MkG8Ths6wj-z-O60rxf9Tws96m82pjH_lzK1Yp9TV6reifZBh5dpOiM', alt: 'Aegis Health' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4b0Hzuh9cWfYvnuAiajHuxFlUNTJN3agP5jS-eQ_jqEZYk861nCMF_02Etl24uFnFsNpKKjiTagD93eadvigqsxYui5zqW1WrMp5YoTIzlLrL9gdIIne96Lk0swtSRewij0TN1W7eRi_e4YcaC_QFwwuHF1MLT5JX5NoyQ3xoSgbLdn_jRRFAciScjujnWAHd1BXPvIFs1ITq4V8wUMXHZETZZHTcBAUX-EzvzeHdSSiL8uXl8B3nfx61WgetAIEBqBoIyTdHwqQ', alt: 'Horizon Heights' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8NRJvBFdxOZHkNR9zzB2ArgfeJ-YVwgozRU3ot3zZEIqpPpDkCY8hDIgBORld9FdirZymnlhXs2whRNe5rm__kU1HfYNWxJ4eOyEaFyivKC7zI2gAh7N8VnAEznmPicckmEjc-Cjfcib-5_049feFteYlIyfbEHGxGvGGnDwdyhQQQmdYmzauOB3SdQxPoSG7X3v-dnQuSNc6jvbhJKeL4vxs50AprpU9Co2qEU8ze80aQ_Y3uGGEc8Sh0KKQyyvkYIDyX7HgXcY', alt: 'Apex Logistics' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb0k9KE0yBzAxJ_LlhgXa28C087FhTtWxhIkxmP7ansWT3CJyXOuFPRR5L7cBOMBUvNb7Vrl_PKOeYowXix2GWew3wn3GlBDxtNE0mEFwM_jMI-_Usql6-kiJt6VDPHBPmJQW9j02FBjfbZS6-RhJzPoVapTT_gXNcdc64Vv5-Il5Zv67wVha9wJc-arhfaGuvbS2a8ygrXff2tv9MLHaambYFHIYpFXoTzm1pIyiyT39XZRYJjeiIMi8ZB-exm93UKKsZxZgAEmo', alt: 'LuxeStay Resorts' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="relative w-full h-[calc(100vh-80px)] flex items-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            alt="LPG pipeline network at dawn" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Q2A7uRVeYMj51JBy9lqOps_rJZcXMDAEqEe_2UsaFxqyntGlzjopyN7JCAs2JhR6wsGT37Dgvd8YgOHiek_M8r3O5O_geBLN-MYv-MxG0H_CsJPKeBhLRpOOq_cX24kQ3_bSiVHck3OiYPMlv6ChRyghrxSmjXs0EmbKawenkqqm92ifLmjLXrCRPuCiropFCt9y13JNr51XxHjbdvr0wSvFLWe5LU3sTmFjiY1PgY9h1Z7uQEjrVh2V1OF-_f92x26ZBAOFyzs"
          />
        </div>
        <div className="relative z-20 px-4 md:px-16 max-w-4xl text-left">
          <span className="inline-block px-4 py-1.5 bg-secondary-container/20 backdrop-blur-md border border-secondary-container/30 rounded-full font-label-md text-secondary-fixed mb-6 uppercase tracking-widest text-xs">
            Global Standards. Local Precision.
          </span>
          <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-bold">
            Engineering the <span className="text-secondary-fixed-dim">Future</span> of Energy
          </h1>
          <p className="font-body-lg text-lg md:text-xl mb-10 text-white/80 max-w-2xl leading-relaxed">
            Providing specialized LPG infrastructure and gas engineering solutions for industrial, commercial, and residential sectors with a zero-compromise approach to safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-secondary-container text-on-secondary px-8 py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-lg group cursor-pointer"
            >
              Request Quote
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-headline-md flex items-center justify-center gap-2 hover:bg-white/20 transition-all cursor-pointer"
            >
              View Our Services
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-white/50 text-4xl">expand_more</span>
        </div>
      </header>

      {/* Animated Statistics */}
      <section className="py-20 bg-primary text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="text-center reveal-up active" 
                style={{ transitionDelay: stat.delay }}
              >
                <div className="font-headline-xl text-3xl md:text-5xl text-secondary-fixed-dim mb-2 font-bold">{stat.value}</div>
                <div className="font-label-md uppercase tracking-widest text-white/60 text-xs font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Precision Gas Engineering Services</h2>
              <p className="font-body-md text-on-surface-variant text-base">We deliver comprehensive gas infrastructure solutions tailored to the specific energy demands of diverse operational environments.</p>
            </div>
            <Link 
              to="/services" 
              className="text-primary font-label-md border-b-2 border-primary-fixed-dim hover:text-secondary hover:border-secondary transition-all font-semibold pb-1"
            >
              Explore All Solutions
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <div 
                key={i} 
                className="group p-10 bg-surface-container-low rounded-3xl border border-outline-variant/30 hover:border-secondary-container transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-3xl">{srv.icon}</span>
                </div>
                <h3 className="font-headline-md text-2xl font-semibold mb-4 text-primary">{srv.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-8 text-sm leading-relaxed">{srv.description}</p>
                <ul className="space-y-3 mb-8">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-body-sm text-on-surface text-sm">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Our Engineering Process</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-base">From initial feasibility studies to long-term maintenance, we follow a rigorous 5-step framework to ensure project excellence.</p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md font-bold ${
                    step.active ? 'bg-secondary-container text-white shadow-lg' : 'bg-white border-2 border-secondary-container text-secondary'
                  }`}>
                    {step.num}
                  </div>
                  <h4 className="font-label-md text-primary mb-2 font-bold">{step.title}</h4>
                  <p className="font-body-sm text-on-surface-variant text-sm px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <h2 className="font-headline-lg text-3xl font-bold text-primary text-center mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/20 rounded-3xl overflow-hidden border border-outline-variant/20">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className="bg-white p-12 flex flex-col items-center text-center hover:bg-surface-container-low transition-colors group cursor-pointer"
                onClick={() => navigate('/industries')}
              >
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary mb-4">{ind.icon}</span>
                <h5 className="font-label-md font-semibold text-sm">{ind.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-24 bg-surface-dim/30 text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <h2 className="font-headline-lg text-3xl font-bold text-primary">Featured Engineering Projects</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => navigate('/projects')}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div 
                key={i} 
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => navigate('/projects')}
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={proj.title} 
                  src={proj.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-85"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                  <div className="font-label-sm text-secondary-fixed mb-2 uppercase text-xs font-semibold">{proj.category}</div>
                  <h4 className="font-headline-md text-2xl font-bold">{proj.title}</h4>
                  <p className="font-body-sm opacity-80 text-sm mt-1">{proj.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="bg-primary-container rounded-[40px] p-8 md:p-20 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] text-white">format_quote</span>
            </div>
            <div className="relative z-10 flex flex-col items-start">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-headline-md text-xl md:text-2xl lg:text-3xl text-white mb-12 max-w-3xl leading-relaxed italic">
                "HI TECH ENERGY transformed our plant's gas infrastructure. Their focus on redundant safety systems and 24/7 monitoring gives us complete peace of mind in our daily operations."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden border-2 border-white/40">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="James Arkwright" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1ClmATxhdOv2O2omsldyUBiFd9g-7N8AanS_mFPpg_tF6fyvjVsQsjeEu-Kil4hT2eyBBpAdrgx6nV-h8H5H9o1nfRmwfaejO-fZgpDtZ0q0qYzXdmYCgvhO8QQ5pK7NOLCBbLotwGkgPcIpuy1tFkmLx8Zn6tyMQqCqhKpvGzEMguN1QnyWEleDEYpGttSjxRKNvjI9HkKcpcQb0yD_D8z2zQrdgxTiw_Qq377dSqTwlMkEDTM8kIZFMHh7qtGc1Xk9Sx34cVsk"
                  />
                </div>
                <div className="text-left">
                  <div className="font-label-md text-white font-semibold">James Arkwright</div>
                  <div className="font-body-sm text-white/60 text-xs mt-0.5">Operations Director, Global ChemCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <section className="py-12 bg-white border-y border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale mask-gradient">
            {logos.map((logo, i) => (
              <img key={i} className="h-8 md:h-10 object-contain" alt={logo.alt} src={logo.src} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
