import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FAQ() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    {
      name: 'Technical Queries',
      icon: 'engineering',
      bgColor: 'bg-primary-fixed',
      textColor: 'text-primary',
      items: [
        {
          q: 'What is the standard pressure rating for industrial pipeline connections?',
          a: 'Our standard industrial connections are rated for 600 PSI for high-flow applications. However, we offer custom configurations reaching up to 1,500 PSI for deep-bore technical environments. All connections meet ISO 9001:2015 engineering standards.'
        },
        {
          q: 'How do you handle real-time monitoring of gas flow rates?',
          a: 'We utilize proprietary IoT sensors with sub-second latency. Data is transmitted via encrypted fiber or satellite uplinks to our centralized HI TECH Control Hub, providing 99.9% uptime for flow rate transparency.'
        }
      ]
    },
    {
      name: 'Safety & Compliance',
      icon: 'verified_user',
      bgColor: 'bg-error-container',
      textColor: 'text-error',
      items: [
        {
          q: 'What emergency shutdown protocols are in place?',
          a: 'All systems feature triple-redundant fail-safe valves. In the event of a pressure anomaly exceeding 5%, the system initiates a localized hard-stop within 250 milliseconds. Manual override is available for site supervisors via physical kill-switches.'
        },
        {
          q: 'How often are on-site safety audits performed?',
          a: 'Internal audits occur bi-weekly. External certification audits by third-party regulatory bodies are conducted semi-annually to ensure continuous adherence to Federal Safety Guidelines.'
        }
      ]
    },
    {
      name: 'Maintenance & Support',
      icon: 'build',
      bgColor: 'bg-secondary-fixed',
      textColor: 'text-secondary',
      items: [
        {
          q: 'What is the typical response time for technical repairs?',
          a: 'Critical tier-1 maintenance issues are addressed within 4 hours. General maintenance requests have a guaranteed 24-hour turnaround time across all regional hubs.'
        }
      ]
    },
    {
      name: 'Billing',
      icon: 'payments',
      bgColor: 'bg-surface-container-highest',
      textColor: 'text-primary',
      items: [
        {
          q: 'Do you offer volume-based pricing models?',
          a: 'Yes. We provide tiered industrial pricing for consumption exceeding 50,000 MCF per month. Please contact our industrial accounts team for a customized rate sheet based on your annual projections.'
        }
      ]
    }
  ];

  const handleToggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnrJTtIM8tpY6QrszU1CN1Zj1wGcQSixZBAn7C7PnseACCgSxH6GMzl3LYlMu6Tj0x_6Rul73n64szFrufTmUcg9EXZL_bHtVWVkG8ykkHx_O7rpdRZ0ruqwsOkigXYToRyAUBr970Vr3vD494QE1vZjdPfJWj7d-NeqgjTqwj1OPwUi5K5UbezxTUsWoE2GtcBFSHiGs9j9IDx9yJUL4CkTo6_WJctQ4eiAna9YJKsZ80fPJzBs8n89IADJ7zlPkJMjj9r-5n_tU')" 
            }}
            alt="Steel pipes close-up"
          ></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl text-white mb-8 font-bold">Frequently Asked Questions</h1>
          <div className="max-w-2xl mx-auto relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-secondary transition-colors">
              search
            </span>
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all text-sm md:text-base" 
              placeholder="Search technical queries, safety protocols..." 
              type="text" 
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-left">
        {categories.map((cat, catIdx) => {
          // Filter items based on search term
          const filteredItems = cat.items.filter(
            (item) => 
              item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.a.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={catIdx} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl ${cat.bgColor}`}>
                  <span className={`material-symbols-outlined ${cat.textColor} text-2xl`}>{cat.icon}</span>
                </div>
                <h2 className="font-headline-lg text-2xl font-bold text-primary">{cat.name}</h2>
              </div>
              <div className="space-y-4">
                {filteredItems.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openIndex === key;

                  return (
                    <div 
                      key={itemIdx} 
                      className="bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-secondary-container/50 transition-all shadow-sm"
                    >
                      <button
                        onClick={() => handleToggle(catIdx, itemIdx)}
                        className="w-full flex justify-between items-center p-6 cursor-pointer text-left focus:outline-none"
                      >
                        <span className="font-semibold text-primary text-sm md:text-base leading-relaxed pr-4">
                          {item.q}
                        </span>
                        <span className={`material-symbols-outlined transition-transform duration-300 text-outline text-2xl ${
                          isOpen ? 'rotate-180' : ''
                        }`}>
                          expand_more
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Direct Contact Support CTA */}
      <section className="bg-surface-container py-24 text-center border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="inline-block p-4 bg-primary rounded-full mb-8">
            <span className="material-symbols-outlined text-white text-[40px]">support_agent</span>
          </div>
          <h2 className="font-headline-lg text-3xl font-bold text-primary mb-4">Can't find what you're looking for?</h2>
          <p className="text-on-surface-variant text-base mb-10 max-w-xl mx-auto">
            Our specialized engineering support team is available 24/7 for urgent inquiries and technical documentation access.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-primary/95 transition-all shadow-lg flex items-center gap-3 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              Contact Support
            </button>
            <div className="flex items-center gap-4 py-4 px-8 border border-outline-variant/40 rounded-xl bg-white shadow-sm text-left">
              <span className="material-symbols-outlined text-secondary text-2xl">phone_in_talk</span>
              <div>
                <p className="text-xs text-on-surface-variant font-medium">Industrial Support Line</p>
                <p className="font-headline-md text-primary text-lg font-bold">+1 (800) 555-TECH</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
