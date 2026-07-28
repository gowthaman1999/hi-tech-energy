import React, { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project Consultation',
    details: ''
  });

  const [chatOpen, setChatOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', subject: 'New Project Consultation', details: '' });
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-primary text-white text-center">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaD7GYqYgm4BVTFGTFrVXvFOcKQuNiL7PaRNsaMUK6eMv5zl5xY4DhH1jQOFOGAA6qLxJiQXIHlscZ2g9Mo6umNBFcSrvjERdO7umOZeEF4pf6WF4RurUoszwIQYXJL1xoBvWikmRTE9KjfX-bD5l3EiFv_LiPLGzbs2jxHmMpWiI-DiV83OLpvoIazz2APblT8CkfSDZlUbHbsbRUhUzzGf90QvZXrlpO8EV0u9kv5fM30vjBp6l7IxKZsHXzIvkfB1r1f-ypfkY')" 
          }}
          alt="Geometric world map"
        ></div>
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl mb-4 font-bold leading-tight">Get in Touch</h1>
          <p className="font-body-lg text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Our technical experts are ready to assist with your complex energy infrastructure requirements, ensuring safety and precision at every stage.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl border border-outline-variant/30 shadow-sm">
            <h2 className="font-headline-lg text-2xl font-bold mb-8 text-primary">Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" id="contactForm">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-outline uppercase tracking-wider">Full Name</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-outline-variant/50 bg-surface-container-lowest p-4 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-outline uppercase tracking-wider">Corporate Email</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-outline-variant/50 bg-surface-container-lowest p-4 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm" 
                  placeholder="j.doe@company.com" 
                  type="email" 
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold text-outline uppercase tracking-wider">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border border-outline-variant/50 bg-surface-container-lowest p-4 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                >
                  <option>Pipeline Infrastructure Maintenance</option>
                  <option>New Project Consultation</option>
                  <option>Safety Audit Request</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold text-outline uppercase tracking-wider">Project Details</label>
                <textarea 
                  required
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  className="w-full border border-outline-variant/50 bg-surface-container-lowest p-4 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm" 
                  placeholder="Please describe the scope of your project and technical requirements..." 
                  rows="6"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  className={`px-8 py-4 rounded-lg font-semibold text-sm w-full md:w-auto transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer ${
                    formStatus === 'success' 
                      ? 'bg-green-600 text-white shadow-green-200' 
                      : 'bg-secondary-container text-on-secondary'
                  }`} 
                  type="submit"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'sending' && 'Transmitting...'}
                  {formStatus === 'success' && 'Message Sent'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Side panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* HQ office info */}
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/20 shadow-sm text-sm leading-relaxed">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-4xl shrink-0">location_on</span>
                <div>
                  <h3 className="font-headline-md text-lg font-bold mb-2 text-primary">Global Headquarters</h3>
                  <p className="text-on-surface-variant">1200 Energy Plaza, Industrial District<br />Houston, TX 77002, United States</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors" href="tel:+18005550199">
                      <span className="material-symbols-outlined text-base">call</span> +1 (800) 555-0199
                    </a>
                    <a className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors" href="mailto:hq@hitech-energy.com">
                      <span className="material-symbols-outlined text-base">mail</span> hq@hitech-energy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional hubs */}
            <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm text-sm">
              <h3 className="font-semibold text-outline uppercase tracking-wider text-xs mb-6">Regional Hubs</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary">Middle East Office</h4>
                  <p className="text-on-surface-variant mt-1 leading-relaxed">Dubai Energy City, Block A, Level 14<br />Dubai, United Arab Emirates</p>
                </div>
                <div className="border-t border-outline-variant/20 pt-6">
                  <h4 className="font-bold text-primary">European Logistics</h4>
                  <p className="text-on-surface-variant mt-1 leading-relaxed">Rotterdam Port Plaza, Sector 4<br />Rotterdam, Netherlands</p>
                </div>
              </div>
            </div>

            {/* Emergency incident block */}
            <div className="bg-error-container p-6 rounded-xl border border-error/20 flex items-center justify-between text-sm shadow-sm">
              <div>
                <p className="text-xs text-error uppercase font-bold tracking-wide">24/7 Incident Hotline</p>
                <p className="font-headline-md text-on-error-container text-lg font-bold mt-1">+1 (800) 911-TECH</p>
              </div>
              <span className="material-symbols-outlined text-error text-4xl animate-pulse">warning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Integration Campus Area */}
      <section className="w-full h-[500px] relative text-left">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-80" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfWlcbm61ZKgrye1tnxWnvRGoi11l_ZZk2H0Yp1NNcyYX4NasjP48CLq2S2V4obTxJklpnrtvOhlq7IOn3JWezi2fkx-7Y096WTFCq9MFc-xc4SLoreneoMtfSmECI5kpEMS60x0GTsBTc5IXWo-jGgwWUbRb3LTs-OBo4NEl6zJgbW-8HPYNgRyKlLOBeQYO1lph9C_EO34VrsP5OrLM24AQTBFrpgp3uuKGNq_5ClfS76RNad7cVt2cb-2Togb0iakSya9apeMA')" 
          }}
          alt="Satellite map of technical headquarters location"
        ></div>
        <div className="absolute inset-0 bg-primary/10 z-10"></div>
        <div className="absolute bottom-10 left-4 md:left-16 bg-white p-6 rounded-xl shadow-2xl border border-outline-variant/30 max-w-sm z-20">
          <h4 className="font-headline-md text-lg font-bold text-primary mb-2">Technical HQ</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-4">Visit our main engineering campus for on-site certifications and project simulations.</p>
          <a 
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary font-bold text-xs hover:underline"
          >
            Get Directions <span className="material-symbols-outlined text-sm">directions</span>
          </a>
        </div>
      </section>

      {/* Live Chat widget */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
        {chatOpen && (
          <div className="mb-4 w-72 bg-primary text-white p-6 rounded-2xl shadow-2xl border border-white/10 text-left transition-all duration-300">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-sm">Chat with an expert</p>
              <button onClick={() => setChatOpen(false)} className="text-white/60 hover:text-white">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <p className="text-xs text-white/80 mb-4 leading-relaxed">Our technical desk is currently online. Average response time: 2 mins.</p>
            <button className="w-full py-2.5 bg-secondary-container text-on-secondary font-semibold text-xs rounded-lg hover:bg-secondary transition-all cursor-pointer">
              Start Session
            </button>
          </div>
        )}
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="w-16 h-16 bg-secondary-container text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-3xl">
            {chatOpen ? 'close' : 'chat'}
          </span>
        </button>
      </div>
    </div>
  );
}
