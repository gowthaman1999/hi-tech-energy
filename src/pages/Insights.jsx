import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Insights() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchText, setSearchText] = useState('');

  const topics = ['All', 'Safety Protocols', 'Infrastructure', 'Decarbonization', 'Case Studies'];

  const articles = [
    {
      id: 1,
      topic: 'Infrastructure',
      image: '/images/gdrive/LOT_system_pipeline_WhatsApp_Image_2026-08-17_at_8_45_11_PM__1_.jpeg',
      tag: 'Featured',
      date: 'March 12, 2026',
      title: 'Advancing Pipeline Integrity with AI-Driven Predictive Maintenance',
      description: 'How next-generation machine learning models are identifying structural vulnerabilities before they manifest as critical failures in high-pressure networks.',
      author: 'James Drumm',
      role: 'Chief Technical Officer',
      featured: true
    },
    {
      id: 2,
      topic: 'Safety Protocols',
      image: '/images/gdrive/Leek_detection_systems_WhatsApp_Image_2026-08-17_at_8_48_28_PM__3_.jpeg',
      tag: 'Safety First',
      date: 'Feb 10, 2026',
      title: '2026 Safety Protocol Update: Hydrogen Blending Safety Standards',
      description: 'An in-depth look at the revised protocols for hydrogen injection in existing natural gas networks.'
    },
    {
      id: 3,
      topic: 'Case Studies',
      image: '/images/gdrive/Comercial_line_cylinder_room_pipeline_WhatsApp_Image_2026-08-17_at_4_33_39_PM__3_.jpeg',
      tag: 'Project Spotlight',
      date: 'Jan 28, 2026',
      title: 'Expanding the Northern Corridor: A Case Study in Grid Resilience',
      description: 'Details on the successful completion of the 200km infrastructure expansion with zero safety incidents.'
    },
    {
      id: 4,
      topic: 'Infrastructure',
      image: '/images/gdrive/Industrial_purpose_hydrant_gas_pipeline_WhatsApp_Image_2026-08-17_at_8_45_07_PM.jpeg',
      tag: 'Industry News',
      date: 'Jan 15, 2026',
      title: 'The Digital Twin Revolution in Large-Scale Gas Storage',
      description: 'Why digital mapping is becoming the industry standard for real-time risk assessment and asset tracking.'
    },
    {
      id: 5,
      topic: 'Decarbonization',
      image: '/images/gdrive/Fabricated_cylinder_room_for_domestic_purpose_WhatsApp_Image_2026-08-17_at_4_34_39_PM__3_.jpeg',
      tag: 'Sustainability',
      date: 'Dec 02, 2025',
      title: 'Bridging the Gap: The Role of Natural Gas in Hybrid Energy Parks',
      description: 'Exploring the symbiotic relationship between solar arrays and rapid-start gas turbines for grid stability.'
    }
  ];

  const popularPosts = [
    { date: 'Feb 28, 2026', title: 'The Economic Impact of European Gas Storage Mandates' },
    { date: 'Jan 15, 2026', title: 'Mitigating Corrosion in Aged Subterranean Assets' },
    { date: 'Nov 02, 2025', title: 'Emergency Response Training: A Data-Driven Approach' }
  ];

  const topicCounts = {
    'Technical Safety': 12,
    'Legislative Updates': 8,
    'Pipeline Innovation': 15,
    'Sustainability': 21,
    'Resource Management': 5
  };

  const keywords = ['LPG', 'NET ZERO', 'INFRASTRUCTURE', 'PRESSURE', 'REGULATION', 'HYBRID ENERGY'];

  // Filter logic
  const filteredArticles = articles.filter(art => {
    const matchesTopic = selectedTopic === 'All' || art.topic === selectedTopic;
    const matchesSearch = art.title.toLowerCase().includes(searchText.toLowerCase()) || 
                          art.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 overflow-hidden text-left text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-fixed-dim/30 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary-fixed-dim font-semibold text-xs tracking-widest uppercase mb-4 block">Knowledge Hub</span>
            <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-bold leading-tight">
              Industrial Insights &amp; Energy Trends
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Expert perspectives on the future of gas infrastructure, safety innovations, and the global energy transition.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Topic Filters Bar (Sticky) */}
      <div className="sticky top-20 z-40 bg-white border-b border-outline-variant/30 py-4 shadow-sm text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {topics.map((top) => (
              <button
                key={top}
                onClick={() => setSelectedTopic(top)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTopic === top 
                    ? 'bg-primary-container text-on-primary-container' 
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {top}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
            <input 
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm" 
              placeholder="Search insights..." 
              type="text" 
            />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24 text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-12 gap-8">
          {/* Article grid col */}
          <div className="col-span-12 lg:col-span-8 space-y-16">
            
            {/* If no articles match filters */}
            {filteredArticles.length === 0 && (
              <div className="bg-surface-container p-12 rounded-2xl text-center">
                <span className="material-symbols-outlined text-4xl text-outline mb-4">search_off</span>
                <h3 className="font-semibold text-primary text-lg">No articles found</h3>
                <p className="text-on-surface-variant text-sm mt-2">Try clearing search filters or modifying query.</p>
              </div>
            )}

            {filteredArticles.map((art) => {
              if (art.featured) {
                return (
                  <article key={art.id} className="group relative overflow-hidden rounded-2xl bg-white border border-outline-variant/30 transition-all hover:shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="h-64 md:h-auto overflow-hidden">
                        <img 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          alt={art.title} 
                          src={art.image} 
                        />
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                            {art.tag}
                          </span>
                          <span className="text-outline text-xs">{art.date}</span>
                        </div>
                        <h2 className="font-headline-lg text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                          {art.title}
                        </h2>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{art.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center font-bold text-primary text-sm">
                              JD
                            </div>
                            <div className="text-xs">
                              <p className="font-semibold text-primary">{art.author}</p>
                              <p className="text-outline mt-0.5">{art.role}</p>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 text-secondary font-semibold text-sm group/btn cursor-pointer">
                            Read More 
                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article key={art.id} className="bg-white rounded-xl border border-outline-variant/30 overflow-hidden hover:border-secondary/50 hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      alt={art.title} 
                      src={art.image} 
                    />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-secondary font-semibold text-xs">{art.tag}</span>
                        <span className="text-outline text-xs">• {art.date}</span>
                      </div>
                      <h3 className="font-headline-md text-lg font-bold text-primary mb-3">{art.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{art.description}</p>
                    </div>
                    <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:text-secondary transition-colors cursor-pointer self-start">
                      Read Article <span className="material-symbols-outlined text-base">open_in_new</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Sidebar Column */}
          <aside className="col-span-12 lg:col-span-4 space-y-10">
            {/* Newsletter */}
            <div className="bg-primary p-8 rounded-2xl relative overflow-hidden text-white">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              <h3 className="font-headline-md text-lg font-bold mb-4 relative z-10">Stay Updated on Energy Standards</h3>
              <p className="text-white/70 text-xs leading-relaxed mb-6 relative z-10">Get the latest technical briefs and safety mandates delivered directly to your inbox monthly.</p>
              <div className="space-y-3 relative z-10">
                <input required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm" placeholder="Work Email" type="email" />
                <button className="w-full bg-secondary-container text-on-secondary py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-lg cursor-pointer">Subscribe Now</button>
                <p className="text-[10px] text-white/40 text-center uppercase tracking-tighter">Zero Spam. High-Value Intelligence.</p>
              </div>
            </div>

            {/* Topics Categories list */}
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30">
              <h4 className="font-semibold text-primary uppercase tracking-widest text-xs mb-6">Topics &amp; Expertise</h4>
              <nav className="flex flex-col gap-2">
                {Object.entries(topicCounts).map(([name, count]) => (
                  <button 
                    key={name}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container transition-colors group cursor-pointer w-full text-left"
                  >
                    <span className="text-on-surface-variant group-hover:text-primary transition-colors text-sm">{name}</span>
                    <span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold text-outline">{count}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Popular Posts */}
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30">
              <h4 className="font-semibold text-primary uppercase tracking-widest text-xs mb-6">Most Read</h4>
              <div className="space-y-6 text-sm">
                {popularPosts.map((post, idx) => (
                  <a key={idx} className="group block" href="#">
                    <p className="text-xs text-outline mb-1">{post.date}</p>
                    <h5 className="text-on-surface font-semibold group-hover:text-secondary transition-colors leading-snug">{post.title}</h5>
                  </a>
                ))}
              </div>
            </div>

            {/* Keywords Tags */}
            <div>
              <h4 className="font-semibold text-primary uppercase tracking-widest text-xs mb-4">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {keywords.map((kw) => (
                  <span 
                    key={kw} 
                    className="px-3 py-1 rounded-md bg-surface-container-highest text-on-surface-variant text-[11px] font-semibold cursor-pointer hover:bg-outline-variant hover:text-primary transition-colors"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Specific Technical Inquiry CTA Banner */}
      <section className="py-20 bg-surface-container border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-left">
          <div className="bg-white rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 border border-outline-variant/30">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-2xl font-bold text-primary mb-4">Have a specific technical inquiry?</h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">Our engineering consultants are ready to discuss your project requirements and safety compliance needs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-primary-container transition-all cursor-pointer shadow-md text-center"
              >
                Contact Engineering
              </button>
              <a 
                href="#"
                className="border border-primary text-primary px-8 py-4 rounded-xl font-semibold text-sm hover:bg-primary/5 transition-all text-center"
              >
                Download Capability Statement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
