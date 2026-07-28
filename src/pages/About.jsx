import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: 'lightbulb',
      title: 'Innovation',
      desc: 'Pushing boundaries in LPG technology and system automation.'
    },
    {
      icon: 'security',
      title: 'Safety',
      desc: 'Zero-compromise approach to protocol and field operations.',
      fill: true
    },
    {
      icon: 'verified_user',
      title: 'Integrity',
      desc: 'Transparent communication and ethical engineering practices.'
    },
    {
      icon: 'groups',
      title: 'Customer Focus',
      desc: 'Tailored solutions that drive partner growth and reliability.'
    }
  ];

  const timeline = [
    { year: '98', title: 'Inception', desc: 'HI TECH ENERGY was founded as a boutique consultancy for local gas distribution in urban centers.' },
    { year: '05', title: 'Industrial Expansion', desc: 'Secured first major contract for national chemical plant infrastructure, establishing regional presence.' },
    { year: '15', title: 'Global Certifications', desc: 'Achieved ISO 9001 and high-pressure safety certifications across three continents.' },
    { year: '26', title: 'Industry Leadership', desc: 'Launching Smart-Grid LPG integration, leading the transition to IoT-enabled energy networks.' }
  ];

  const leaders = [
    {
      name: 'Robert Sterling',
      role: 'Chief Executive Officer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbPvfKQrOS16y4U6CZZblksHmBTUrhqJ8qK9g1-P0GGoHjES8iR2k77_t7nQ8-SPMc-OUQMXnUo9W3CaqEj5JulsLNbnwqrmiskcs0l8N76O5TpRbNRq54-HtIAiZwQHOSUPGML4dAJYBeIMmbCbAe24H_8eVMjKkoPvmWmii5I_peSFb9EjGtM_4U5BWEZO9uNvXcCMcFr2wTRf8cmQBBOQdxNVbsTFbR6KdH8v9_1s2uWtUWiSnYxbPVwme-SPTlZoRmmb1ITnw'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Chief Technology Officer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW_235U6xkz4b66Oi9JXFx9UYQMfXk4IgHUFtBy7cYDMOv2DX3mkx8HYK_tAoZAKKvS1e5IOq08xQCCC_fIRdQmwg0q8DpxVPUB-VedW8NFBf0CJYCOjh-thNzXYuEXj_9uAjB9FBQnCYQfFRTf_y5xDsQR3OGusvPfKYOCdNUDSCBHDp3DlxfIVmYhWasuz9YOW2483av6raHFmC4bFup2uX3z3-Mv8qHEhIj7wr3rCtw-An7h9KrLMf3hEdacnnpNny7RXkl2G0'
    },
    {
      name: 'David Chen',
      role: 'Director of Engineering',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt6RjtcrmL9hc_7ZdPfS5fV8p1BJiFpFpoXet9fJoKTnVZJcXQHFC7p8k06bOQA1MSFT-SMu2BgkBhWJWH9Pe2ZnRoiLV6SkbjZH95myNh-4Vs9sFusHj0nMdpIKyuwXXATYapySXaqdUG5OsHYjr-3ep9MZl1i6gqsFYNnzb8ELIK1XHmgqfBronj0NSpRtRU-k2AdXcT6ndkgsmRjQSBQwBKRgv5gbXzlEbeMWJ2lvJ0HXLjo5feG6CO6CCogTgx-Y2lGmg0hHw'
    }
  ];

  const certs = ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'ASME', 'PESO', 'NFPA'];

  return (
    <div>
      {/* Hero Section */}
      <header className="relative w-full h-[500px] flex items-center overflow-hidden bg-primary text-white text-left">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center brightness-50" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCn5E9pj5uL9GDqgttRzlVoqBGRHI8tSv3FxqDPygPv4wDUPCuZ6hsz4OOhntjlWQgk02B_j2X-h5Ir9KNbgdjVCj3tq2A0HZxOPlgq2_1R-FZ-6keldIy2kCROvYsBzC2cEcBSOinPqWHENIO1cvuK4KkOfbUv7cB7Ne1WvKAbAgHh7VSOBlBqBrZREvr10q-sH8GbI6WJHkzG55lgFzL7peQ5Kv70zb58RzCdlBb36JfmvIQ1InpWtZHmTwjmQ-Ax3TaehomuS4g')" 
            }}
            alt="Engineering team at gas processing facility"
          ></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-secondary-container/20 text-secondary font-semibold text-xs tracking-wider uppercase">
              Since 1998
            </span>
            <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-bold leading-tight">
              Excellence in LPG Engineering
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Pioneering safer, more efficient energy distribution networks across the globe through technical innovation and uncompromising safety standards.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/services')}
                className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md hover:bg-secondary-container transition-all shadow-lg cursor-pointer"
              >
                Our Services
              </button>
              <button 
                onClick={() => navigate('/safety')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-label-md hover:bg-white/10 transition-all cursor-pointer"
              >
                Safety First
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">track_changes</span>
            </div>
            <h2 className="font-headline-lg text-3xl font-bold text-primary">Our Mission</h2>
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
              To deliver innovative gas infrastructure solutions that empower industries while setting the gold standard for environmental stewardship and operational safety in the energy sector.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-4xl">visibility</span>
            </div>
            <h2 className="font-headline-lg text-3xl font-bold text-primary">Our Vision</h2>
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
              To be the global catalyst for a modernized gas economy, bridging the gap between legacy infrastructure and futuristic energy efficiency through world-class engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-container text-left border-y border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all group shadow-sm">
                <span 
                  className="material-symbols-outlined text-secondary text-4xl mb-6 group-hover:scale-110 transition-transform block"
                  style={val.fill ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {val.icon}
                </span>
                <h3 className="font-headline-md text-lg font-bold mb-3 text-primary">{val.title}</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Journey Timeline */}
      <section className="py-24 bg-white overflow-hidden text-left">
        <div className="max-w-[768px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="font-body-lg text-on-surface-variant text-base">Decades of growth and technical milestones.</p>
          </div>
          <div className="space-y-12 relative">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10 timeline-dot relative text-sm">
                    {item.year}
                  </div>
                </div>
                <div className="pb-12 border-b border-outline-variant/30 last:border-0 w-full text-sm">
                  <h4 className="font-headline-md text-lg font-bold text-primary">{item.title}</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-24 bg-surface text-left border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Leadership Team</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((ldr, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] mb-6 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url('${ldr.image}')` }}
                    alt={ldr.name}
                  ></div>
                </div>
                <h4 className="font-headline-md text-xl font-bold text-primary">{ldr.name}</h4>
                <p className="font-label-md text-secondary font-semibold text-xs tracking-wider uppercase mt-1">{ldr.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 bg-primary text-white text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-3xl font-bold mb-4">Certifications &amp; Compliance</h2>
              <p className="font-body-lg text-white/70 text-base max-w-xl leading-relaxed">
                We adhere to the most stringent international standards to ensure the safety of our teams, our clients, and the environment.
              </p>
            </div>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold text-sm hover:bg-surface-container-highest transition-all flex items-center gap-2 cursor-pointer shadow-md">
              <span className="material-symbols-outlined text-base">download</span>
              Download Compliance Report
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certs.map((cert, i) => (
              <div key={i} className="aspect-video bg-white/10 rounded-xl flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all border border-white/10">
                <span className="font-bold text-sm tracking-wide">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
