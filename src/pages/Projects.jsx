import React, { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const stats = [
    {
      icon: 'safety_check',
      value: '1M+ Man-hours',
      label: 'Safe Operation'
    },
    {
      icon: 'maps_ar',
      value: '2000+ Kilometers',
      label: 'Pipeline Laid'
    }
  ];

  const projectsData = [
    {
      category: 'Industrial',
      location: 'North Sea Terminal',
      title: 'Strategic Gas Reserve Delta',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANebq1WGqJq_6s_g8_4T2LuLULbxJx6P1h-JP4w6aPX-BAH2Mlje-gyasv6Rvk1dmkhHOjStPEUqnRKZrzryd8bq8DkJ1Nn9q9RE4n9W7ETLxrtHsch7KXSuUsPlZYae9_cGf9kICfNGP9LxIJZaZLh15_Be51_trA3-4yurJzToJ6X8oYolUmQbp14Zess6RAyK4bJtnk2tQbr8llaGfBagDPTeIYcUGadXT2soQvCNCnXFkzhIPupZufMQolRon5AywS-r1dKyE'
    },
    {
      category: 'Commercial',
      location: 'Central Business District',
      title: 'Metropolis Energy Hub',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGOPFp5YZ3Ks5t8bDKEDfizrlMbsVDC1MiuFYBuT7WFhHSBLnt8xAfYSIhD29ZmT8X6tD3NbRdmp7nHIDL5pVsOTcTEYeHPAw-9IjfaC-LkarfYRwRav3j68pJkBglSFHNME4utfMqC4samC_LeDGy-fy-KhS8V22DcdAUErcdZb7EzflBbszCeFT7hIKpai-3JcrRajqM5rwVGdaG166WexfLa9OqiLbqOUg2VC8J6nvfhB2YqwZ61n1Z15GcezHHWjQD_MxnSMI'
    },
    {
      category: 'Residential',
      location: 'Western Valley Precinct',
      title: 'Eco-Community Gas Grid',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Z1ziN1_iguguMly9PuxRGdg_tkemEOVp_VGd444f3E4T96WGydPfxm3VMyeccnUwFFyPq5a6B5clhYxKU1pvM796pYx-nWvS4ATDsw9uM9937v-SoeXK4MDOIWBcYjy8ZTcu4TEn98-oa9HLbJxo45FHzk7aVNjiWHhsnMDkTNWSw2Fi_YDaaE8OFU83g_dFBkbPfiDnD6Euwp1BZVmblVtI5mbTfT-qiRhkkvfSmWpFyR8EuMJWlo4OdI0b5hK24EB4o9wNTts'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <header className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDq-I3lA_Jmibg_Rv1dvABziXQae88NR4zl7HSnI7i2CNVYlXvbNMhaMhUfoA_7S6NEQuNc5uxLF4apoqyf8Y5N7Gp_745JDbJPOYRDZ00b6-ShFpImX9E3y8Lf7C_c0rKJUJDzY5NJUnPtqsJflwG6YCv0fdEf141nO0TMv7Us2fdCYE6QbSj6mpgIyspyitaYCPk8w2E67qoK5_iJqn8EBc019KwFtqemYU0EJcABDNkWcQQsSqANIx-qI0kLQV4xrrDAqXR_vFc')" 
            }}
            alt="Massive gas refinery at sunset"
          ></div>
          <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary-fixed font-semibold text-xs tracking-widest uppercase">
            Global Operations
          </span>
          <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-bold">
            Our Portfolio of Excellence
          </h1>
          <p className="font-body-lg text-white/90 max-w-2xl mx-auto text-base leading-relaxed">
            Setting the global standard for high-pressure gas infrastructure through precision engineering and an uncompromising commitment to safety.
          </p>
        </div>
      </header>

      {/* Impact Stats */}
      <section className="relative z-20 -mt-16 px-4 md:px-16 mb-24 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 rounded-2xl overflow-hidden shadow-xl">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-12 flex flex-col items-center text-center group transition-colors hover:bg-surface-container">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                {stat.icon}
              </span>
              <h3 className="font-headline-lg text-2xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="font-label-md text-outline uppercase tracking-wider text-xs font-semibold">{stat.label}</p>
              <div className="w-12 h-1 bg-secondary-container mt-6 transition-all group-hover:w-24"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Filter Controls */}
      <section className="px-4 md:px-16 mb-12 text-left max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Industrial Landmarks</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Our multi-disciplinary approach allows us to deliver complex projects across diverse sectors while maintaining the highest regulatory standards.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Industrial', 'Commercial', 'Residential'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  filter === cat 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-outline-variant/65 text-primary hover:bg-surface-container'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Display Grid */}
      <section className="px-4 md:px-16 mb-32 max-w-[1280px] mx-auto text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, i) => (
            <div key={i} className="group relative bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div className="h-80 relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={proj.title} 
                  src={proj.image} 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-secondary-container text-white text-[10px] font-bold uppercase tracking-widest">
                    {proj.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-outline">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="font-label-sm uppercase text-xs font-semibold">{proj.location}</span>
                  </div>
                  <h3 className="font-headline-md text-lg font-bold text-primary mb-6">{proj.title}</h3>
                </div>
                <button className="w-full flex items-center justify-between group/btn text-primary border border-primary/20 rounded-lg px-6 py-3 font-semibold text-sm hover:bg-primary hover:text-white transition-all cursor-pointer">
                  View Case Study
                  <span className="material-symbols-outlined text-base transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Footprint Map Integration Section */}
      <section className="bg-surface-container py-32 px-4 md:px-16 overflow-hidden text-left border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <h2 className="font-headline-lg text-3xl font-bold text-primary mb-6">Global Footprint</h2>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-8">
                Our infrastructure reaches across borders, providing stable energy solutions to over 40 regions globally. Explore our project distribution and operational hubs.
              </p>
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary-container mt-1 text-2xl">public</span>
                  <div>
                    <h4 className="font-semibold text-primary text-base">Interstate Transmission</h4>
                    <p className="text-outline text-xs mt-0.5">Reliable high-pressure networks spanning continents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary-container mt-1 text-2xl">hub</span>
                  <div>
                    <h4 className="font-semibold text-primary text-base">Operational Hubs</h4>
                    <p className="text-outline text-xs mt-0.5">15+ active monitoring centers worldwide.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-8 relative">
              <div className="aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 flex items-center justify-center relative">
                <div 
                  className="w-full h-full grayscale opacity-80 bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-Q2A7uRVeYMj51JBy9lqOps_rJZcXMDAEqEe_2UsaFxqyntGlzjopyN7JCAs2JhR6wsGT37Dgvd8YgOHiek_M8r3O5O_geBLN-MYv-MxG0H_CsJPKeBhLRpOOq_cX24kQ3_bSiVHck3OiYPMlv6ChRyghrxSmjXs0EmbKawenkqqm92ifLmjLXrCRPuCiropFCt9y13JNr51XxHjbdvr0wSvFLWe5LU3sTmFjiY1PgY9h1Z7uQEjrVh2V1OF-_f92x26ZBAOFyzs')" 
                  }}
                  alt="Global network visualization map background"
                ></div>
                <div className="absolute inset-0 bg-primary/20 backdrop-brightness-90 z-10"></div>
                {/* Pulse Elements */}
                <div className="absolute top-1/4 left-1/3 w-3.5 h-3.5 bg-secondary-container rounded-full ring-4 ring-secondary-container/30 animate-pulse z-20"></div>
                <div className="absolute bottom-1/3 left-1/4 w-3.5 h-3.5 bg-secondary-container rounded-full ring-4 ring-secondary-container/30 animate-pulse delay-700 z-20"></div>
                <div className="absolute top-1/2 right-1/4 w-3.5 h-3.5 bg-secondary-container rounded-full ring-4 ring-secondary-container/30 animate-pulse delay-1000 z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
