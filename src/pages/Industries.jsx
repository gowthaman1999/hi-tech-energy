import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Industries() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 px-4 md:px-16 max-w-[1280px] mx-auto overflow-hidden text-left">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
              Expertise &amp; Reach
            </span>
            <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6 font-bold">
              Powering Industry, <br />
              <span className="text-secondary">Supporting Life</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              Delivering precise, high-performance gas infrastructure solutions across diverse sectors. We balance industrial power with uncompromising safety standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/services')}
                className="bg-secondary text-white px-8 py-4 rounded-lg font-label-md hover:shadow-lg transition-all cursor-pointer"
              >
                Explore Solutions
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="border border-primary text-primary px-8 py-4 rounded-lg font-label-md hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                View Our Team
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 aspect-square">
              <img 
                className="w-full h-full object-cover" 
                alt="Hospital facade at dusk" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn8kjNqVsmlL0LwymViyosp-sbbBPCKinvzKslWJJ9lB6afsNROWhpld3xuJ6e5xJ-NaeivntrwMnMZjnDdDPaMSMFFdr3UxLJcbhhwWbSxtr_ar9WLoirfsO5sw9MDzLozy8wu3AYxSwxDdKNU3H365Lieh2sJfa7JNGmZ5CRCG6rIsHOaFtDcsg4tErB8c3Onm3F3mGPRVNnE86InGeRjzSDaIUCK-1H0Fi5YqxFIWcHPlrbwBVkRWmxInR9QcVANTedaIXUAgY"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 aspect-square">
              <img 
                className="w-full h-full object-cover" 
                alt="Industrial manufacturing floor" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBEBgzEsHeCp-NxprzJJ2bqF0KeVPZNR-EUIiJ8I1MNMRYN3vfKDKjCV3dD9tVKZDA0mMGt6lG4O_G2h3W7VjMKfBamtv-oLZukhVuY40RUdE0TLVvwFuibpdEvsTfuFLVi_4ar9O0UlnuovXhjIwu0uRRbn5Y9T-w5ubl_JesttN-6LK57GXgS1NMzWpdfghjcP5Ki3k8VBF4ZP8zZ-7tulAn67PphFe87v0jLpMU1U65JqkhyWimJUr63Fswfxf_wSWTM4QRnmQ"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 aspect-square">
              <img 
                className="w-full h-full object-cover" 
                alt="Luxury high-rise apartment sunrise" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWOojmLPgUqe8QkNqWEaeA7HqErAz__ryttjdqZ7L4SRLCh5wNZejMTkrW6K77tEL3Wy9cysCOCL8Z65p-AyAhAdFzYBl5rDYM69jyx-AD1Dll6XswGD8LScV4ggFYeZC8kytJGwFexuIs2D7xBEPMH0s-u_x-UyGr-MijbEM_xUBDVtfyVFPy71x9rUzhUoVchx8zE5H7sbu1-362okxaRGq8vPd96spEohp0JdRtZV1zneUsdQ8_7YCrmohRpBhzb6sS2umCQv0"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 aspect-square">
              <img 
                className="w-full h-full object-cover" 
                alt="Upscale shopping mall interior" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2m3rDZsOLGF9f9cbJsHHenySF-5OUSOA87ZlXpToy1Eo-1v-LJPpjo2AvSyENfDk7JZY46KslNwW-o0n7-8HcqHyTxt8Q26V5FJi68nd0h9A3TIkNp_9rfPWfVlczvk1rwDt7tYTN7tvc3hJjtN_ABrXK6brN9ju71Lro1n73MUbci8ul0vFdh8R3IXB91zZ3o6vAI33ywgMPrt_tI2A-c8ItQsRrEriRhj-3qpAD7hUsATvbWgXqRc9i6hrdXQOpU_oVm8l7bXw"
              />
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Industry: Hospitality */}
      <section className="py-24 bg-white border-y border-outline-variant/20 text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute inset-0 bg-secondary/10 rounded-[32px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img 
              className="rounded-[32px] w-full shadow-md border border-outline-variant/50" 
              alt="Professional hotel kitchen" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsPMh7HT3jzyw8goM8E6wkqnJtVZhHqo7l3fxyfG4tL9Lk28Fd-zFXYma_zWWLbcxX37jdgH0OhOTQIG1kO5tXKbNhLcxLBNAsyesxKpoogtAINC4L5JguKqCWDorpvM3Ytyk26eEk5fXHfQ-GSJ7oy2twfD8efyzeSpJDLGqvtID4ER7WBALha9Ed366JD5CS6jTsjn2DVDAI74dx2HhE7Otu6FOhOlG_mVf8pO9qeO6g5IcqtzT-9R6NuzzlCJg9ImzRfV03kvU"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6 text-secondary font-semibold text-sm">
              <span className="material-symbols-outlined text-lg">hotel</span>
              <span>01. HOSPITALITY</span>
            </div>
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-6">Seamless Energy for Guest Excellence</h2>
            <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed text-sm">
              In hotels, malls, and restaurants, energy downtime isn't just an inconvenience—it's a reputational risk. We provide the invisible infrastructure that powers world-class guest experiences.
            </p>
            <div className="space-y-6 mb-10">
              <div className="p-6 bg-surface-container rounded-xl border-l-4 border-secondary text-sm">
                <h4 className="font-semibold text-primary mb-2">Industry Challenge</h4>
                <p className="text-on-surface-variant leading-relaxed">Fluctuating demand during peak seasons requiring rapid scaling and high-volume consistency without safety compromises.</p>
              </div>
              <div className="p-6 bg-primary text-white rounded-xl text-sm">
                <h4 className="font-semibold text-secondary-fixed-dim mb-2">HI TECH Solution</h4>
                <p className="opacity-90 leading-relaxed">Smart telemetry systems for real-time monitoring and automated replenishment cycles, ensuring zero-downtime for commercial kitchens and HVAC.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry: Manufacturing */}
      <section className="py-24 bg-surface text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 text-secondary font-semibold text-sm">
              <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
              <span>02. MANUFACTURING</span>
            </div>
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-6">High-Precision Industrial Fueling</h2>
            <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed text-sm">
              From steel smelting to food processing, industrial gas needs vary wildly. We deliver tailored mixtures and high-pressure setups designed for mathematical accuracy and peak efficiency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="border border-outline-variant/30 p-6 rounded-2xl bg-white hover:border-secondary transition-colors text-sm">
                <span className="material-symbols-outlined text-secondary mb-4 text-2xl">settings_input_component</span>
                <h4 className="font-semibold text-primary mb-2">Steel &amp; Glass</h4>
                <p className="text-on-surface-variant leading-relaxed">Intense heat management and continuous gas flow for furnaces.</p>
              </div>
              <div className="border border-outline-variant/30 p-6 rounded-2xl bg-white hover:border-secondary transition-colors text-sm">
                <span className="material-symbols-outlined text-secondary mb-4 text-2xl">restaurant</span>
                <h4 className="font-semibold text-primary mb-2">Food Processing</h4>
                <p className="text-on-surface-variant leading-relaxed">Food-grade gas solutions for preservation and industrial cooking.</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-[32px] -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img 
              className="rounded-[32px] w-full shadow-md border border-outline-variant/50" 
              alt="Industrial gas manifold system" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANNNYNR9xxJSMUourC3GlwvL5eOR5kgCMcSUR-CcdznjlsOt5qA10WK5U31N1QLss6mouQnwOS9efxj2YKz8wMg_zl4AbkfqYxhkOESXPw3KNNCauuHMC5FR-70dTw2oOu5fVLWEX0dQmdRNAHOqxNdMmRqNF0rHx41aygqwKI-ZoqrSHej6PDs9LRktwpAMHX1z5ZM7RjDvOqIijspVHmJPt_sEe3t9bAGA4wwtkvzSMFU2fd-vGx9OUkp0R8pb3Nj7H63n3HcfQ"
            />
          </div>
        </div>
      </section>

      {/* Industry: Residential */}
      <section className="py-24 bg-white border-y border-outline-variant/20 text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute inset-0 bg-secondary/10 rounded-[32px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img 
              className="rounded-[32px] w-full shadow-md border border-outline-variant/50" 
              alt="Smart gas meter in villa" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACyBeUycN5eZ45G5ImG67Hjz8dOiq3xZREc5-bPO-1NyuJowcQv2S1A9h2Jr3pVGsFVH_Jg-WfR2_vZLtyspQbuV23lxfhdVegew1t1oW-ZWxH29mELCbCvR5e-nAn2KF9wvoTEZRxf1rzMifBt2IybJ71pqDAv1qLNIfCKynqqzgcKcWBdGKxu--JlCf9WBc_56szwlM8RhE7RIuwJBfiUoUSJWcnhriZ1U0RSOxdLfaB3PT2Vcjjx0PZZa4k7PQTRxZXI4GzQmw"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6 text-secondary font-semibold text-sm">
              <span className="material-symbols-outlined text-lg">domain</span>
              <span>03. RESIDENTIAL</span>
            </div>
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-6">Safe Energy for Modern Living</h2>
            <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed text-sm">
              We bring utility-grade gas solutions to high-rise apartments and villa communities, focusing on invisible safety and individual consumption transparency.
            </p>
            <ul className="space-y-4 mb-10 text-sm">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary shrink-0 text-lg">check_circle</span>
                <div>
                  <h5 className="font-semibold text-primary text-base">Advanced Leak Detection</h5>
                  <p className="text-on-surface-variant mt-0.5">IoT-integrated sensors that automatically shut off valves if anomalies are detected.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary shrink-0 text-lg">check_circle</span>
                <div>
                  <h5 className="font-semibold text-primary text-base">Individual Metering</h5>
                  <p className="text-on-surface-variant mt-0.5">Precision billing for each unit, reducing administrative friction for property managers.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industry: Healthcare */}
      <section className="py-24 bg-surface text-left">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 text-secondary font-semibold text-sm">
              <span className="material-symbols-outlined text-lg">medical_services</span>
              <span>04. HEALTHCARE</span>
            </div>
            <h2 className="font-headline-lg text-3xl font-bold text-primary mb-6">Mission-Critical Gas Systems</h2>
            <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed text-sm">
              In hospitals and research labs, gas supply is a matter of life and death. We provide medical-grade installation and maintenance that exceeds global safety protocols.
            </p>
            <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm text-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-error text-2xl">priority_high</span>
                </div>
                <h4 className="font-headline-md text-lg font-bold text-primary">The 100% Uptime Mandate</h4>
              </div>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Our healthcare service level agreements (SLAs) include 24/7 dedicated rapid-response teams and dual-redundancy storage systems.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-surface-container text-center rounded-lg">
                  <p className="text-xl text-primary font-bold">99.99%</p>
                  <p className="text-xs opacity-75 mt-0.5">Uptime Record</p>
                </div>
                <div className="p-3 bg-surface-container text-center rounded-lg">
                  <p className="text-xl text-primary font-bold">15m</p>
                  <p className="text-xs opacity-75 mt-0.5">Response Time</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-[32px] -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img 
              className="rounded-[32px] w-full shadow-md border border-outline-variant/50" 
              alt="Medical gas manifold room in hospital" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3cF2X--VtBrRjHci5IQb01UYf8s0xJXPEICOcwqY0VTIAWa3TnZDyqZrr_aHqOCuK51frd7OcvGQJtsfTzp8EZGU4Nm5YXi57Vz3zU169wFguTI0f8RyIFuIrKtN-6lYOUw-GKQ2QBq4--zDQPVAhJma3s-rfWnsZmRoxv8GQR9kI3gebsP9pjU54fNzT8Omm_1fJ871f9H_Qo8SqRO2TiDd9oJhO_uiKc2dD0julcwndqWZId-KJubLd2SRZPpxeLo91G1ErQR0"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-16 max-w-[1280px] mx-auto text-center">
        <div className="bg-primary rounded-[40px] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-l from-secondary to-transparent"></div>
          </div>
          <h2 className="font-headline-xl text-3xl md:text-4xl lg:text-5xl text-white mb-8 relative z-10 font-bold leading-tight">
            Ready to Secure Your Energy Future?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Join hundreds of industrial leaders who trust HI TECH ENERGY for safe, efficient, and cost-effective gas solutions tailored to their specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-secondary text-white px-10 py-5 rounded-xl font-headline-md hover:bg-secondary-container transition-all shadow-xl cursor-pointer"
            >
              Request Industry-Specific Quote
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-headline-md hover:bg-white hover:text-primary transition-all cursor-pointer"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
