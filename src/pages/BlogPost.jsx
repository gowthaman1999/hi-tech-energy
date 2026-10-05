import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogData';
import { useSEO } from '../hooks/useSEO';
import { OFFICE_LOCATIONS } from '../data/hitechData';

export default function BlogPost() {
  const { slug } = useParams();
  const currentSlug = slug || 'domestic-lpg-pipeline-vs-cylinder';
  const post = getBlogPostBySlug(currentSlug);

  const [activeSection, setActiveSection] = useState('glance');
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section observer for Table of Contents
  useEffect(() => {
    const sectionIds = post?.tableOfContents?.map(item => item.id) || [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post]);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Structured Data Schema (Article + FAQ + Breadcrumb)
  const structuredData = post
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': `${post.canonicalUrl}#article`,
            'headline': post.title,
            'name': post.metaTitle,
            'description': post.metaDescription,
            'image': `https://www.hitechenergy.org${post.heroImage}`,
            'datePublished': post.datePublished,
            'dateModified': post.dateModified,
            'inLanguage': 'en-IN',
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': post.canonicalUrl
            },
            'author': {
              '@type': 'Organization',
              'name': 'Hi Tech Energy',
              'url': 'https://www.hitechenergy.org/'
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Hi Tech Energy',
              'url': 'https://www.hitechenergy.org/',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.hitechenergy.org/images/logo.png',
                'width': 240,
                'height': 60
              }
            }
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${post.canonicalUrl}#breadcrumb`,
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.hitechenergy.org/'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Insights & Blog',
                'item': 'https://www.hitechenergy.org/blog'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': post.metaTitle,
                'item': post.canonicalUrl
              }
            ]
          },
          ...(post.faqs && post.faqs.length > 0
            ? [
                {
                  '@type': 'FAQPage',
                  '@id': `${post.canonicalUrl}#faq`,
                  'mainEntity': post.faqs.map((faq) => ({
                    '@type': 'Question',
                    'name': faq.question,
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': faq.answer
                    }
                  }))
                }
              ]
            : [])
        ]
      }
    : null;

  useSEO({
    title: post?.metaTitle || 'Hi Tech Energy Blog',
    description: post?.metaDescription || '',
    canonicalUrl: post?.canonicalUrl || '',
    ogType: 'article',
    ogImage: post?.heroImage,
    schema: structuredData
  });

  if (!post) {
    return (
      <div className="w-full min-h-screen pt-32 pb-20 text-center bg-white text-on-surface">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <h1 className="font-headline-lg text-3xl font-bold text-primary">Blog Post Not Found</h1>
          <p className="font-body-md text-sm text-on-surface-variant">The requested blog post does not exist or has been moved.</p>
          <Link to="/blog" className="inline-block bg-secondary-container text-white px-6 py-3 rounded-xl font-bold text-xs uppercase shadow-md hover:brightness-110">
            View All Articles
          </Link>
        </div>
      </div>
    );
  }

  const { sections, comparisonTable, tableOfContents } = post;

  return (
    <div className="w-full bg-[#fcfcfd] text-on-surface text-left">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-secondary-container z-[60] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Hero Section */}
      <header className="relative bg-primary pt-28 pb-16 sm:pt-36 sm:pb-20 text-white overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-fixed-dim/20 rounded-full blur-2xl" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mb-6 flex items-center flex-wrap gap-2 text-xs text-white/70">
            <Link to="/" className="hover:text-secondary-fixed-dim transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link to="/blog" className="hover:text-secondary-fixed-dim transition-colors">
              Knowledge Hub &amp; Blog
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium truncate max-w-xs sm:max-w-md">
              LPG Pipeline vs Cylinder Safety
            </span>
          </nav>

          {/* Badges & Topic */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-secondary-container text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              {post.tag}
            </span>
            <span className="text-white/70 text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">schedule</span>
              {post.readTime}
            </span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/70 text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">calendar_today</span>
              {post.date}
            </span>
          </div>

          {/* Single H1 on Page as strictly required */}
          <h1 className="font-headline-xl text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {post.h1}
          </h1>

          <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author info & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-secondary-container/20 border border-secondary-container/50 flex items-center justify-center font-bold text-secondary-container text-sm">
                HT
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white text-sm">{post.author}</p>
                <p className="text-white/60">{post.authorRole}</p>
              </div>
            </div>

            {/* Quick Share buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60 mr-1 hidden sm:inline">Share:</span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://www.hitechenergy.org/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-emerald-600 border border-white/15 flex items-center justify-center text-white transition-all text-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.hitechenergy.org/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0A66C2] border border-white/15 flex items-center justify-center text-white transition-all text-sm"
              >
                <span className="material-symbols-outlined text-base">share</span>
              </a>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-1.5 text-white text-xs font-medium transition-all cursor-pointer"
                title="Copy link to clipboard"
              >
                <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'link'}</span>
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 -mt-8 sm:-mt-12 relative z-20">
        <figure className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
          <img
            src={post.heroImage}
            alt={post.heroImageAlt}
            width={1200}
            height={630}
            fetchPriority="high"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="py-2.5 px-4 bg-gray-50 text-[11px] sm:text-xs text-on-surface-variant text-center border-t border-gray-100 flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-secondary-container">verified</span>
            Modern domestic kitchen equipped with safe wall-mounted LPG pipeline and isolation ball valve.
          </figcaption>
        </figure>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">

          {/* Left / Sidebar Table of Contents (Sticky on Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-primary font-bold text-sm uppercase tracking-wider pb-2 border-b border-gray-100">
                  <span className="material-symbols-outlined text-secondary-container text-base">format_list_bulleted</span>
                  Table of Contents
                </div>
                <nav className="space-y-1.5 text-xs max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-1.5 transition-colors rounded-md px-2 ${
                        item.level === 3 ? 'pl-5 text-gray-500 hover:text-primary' : 'font-semibold text-gray-800'
                      } ${
                        activeSection === item.id
                          ? 'bg-orange-50 text-secondary-container font-bold border-l-2 border-secondary-container'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar Quick Action Card */}
              <div className="bg-gradient-to-br from-primary to-primary-container text-white p-6 rounded-2xl shadow-md space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary-container">
                  <span className="material-symbols-outlined">home_repair_service</span>
                </div>
                <h3 className="font-headline-md text-base font-bold text-white">
                  Upgrade to Piped Gas
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Hi Tech Energy installs certified domestic LPG pipelines with leak alarms and auto shut-off for apartments and villas.
                </p>
                <Link
                  to="/contact"
                  className="block text-center w-full bg-secondary-container hover:brightness-110 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow cursor-pointer"
                >
                  Book Free Site Visit
                </Link>
                <a
                  href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`}
                  className="block text-center text-white/90 hover:text-white text-xs font-semibold pt-1"
                >
                  📞 {OFFICE_LOCATIONS.headOffice.phone}
                </a>
              </div>
            </div>
          </aside>

          {/* Main Article Body (Article Content) */}
          <article className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-12">

            {/* Mobile Collapsible Table of Contents */}
            <div className="lg:hidden bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-sm text-primary">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-container text-base">format_list_bulleted</span>
                    Quick Table of Contents
                  </span>
                  <span className="material-symbols-outlined text-base group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <nav className="mt-3 pt-3 border-t border-gray-100 space-y-1 text-xs">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-1 px-2 rounded ${
                        item.level === 3 ? 'pl-4 text-gray-500' : 'font-medium text-gray-800'
                      } hover:bg-orange-50 hover:text-secondary-container`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </details>
            </div>

            {/* Introduction Paragraphs - Exact wording preserved */}
            <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                In most Indian homes, the LPG cylinder sits under the kitchen counter. We book it, wait for it, and change it when the gas runs out. Sometimes it runs out in the middle of cooking. Sometimes nobody is at home when the delivery comes.
              </p>
              <p>
                Many new apartments and houses now use a <Link to="/services/domestic-lpg-pipeline" className="text-secondary font-semibold hover:underline">domestic LPG pipeline</Link> instead. The cylinders are kept outside the house, and gas comes to the stove through a pipe.
              </p>
              <p>
                In this blog, we compare both options and look at one main question: which one is safer for your kitchen?
              </p>
            </div>

            {/* Summary - H3 & Table */}
            <section id="glance" className="scroll-mt-28 space-y-4">
              <div className="border-b border-gray-200 pb-3">
                <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Quick Comparison</span>
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  Pipeline vs Cylinder at a Glance
                </h3>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 font-semibold w-1/3">Feature</th>
                      <th className="py-3 px-4 font-semibold w-1/3 bg-primary-container text-secondary-fixed-dim">
                        Domestic LPG Pipeline
                      </th>
                      <th className="py-3 px-4 font-semibold w-1/3">LPG Cylinder</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonTable.map((row, idx) => (
                      <tr 
                        key={row.feature} 
                        className={idx % 2 === 0 ? 'bg-white hover:bg-orange-50/40 transition-colors' : 'bg-gray-50/70 hover:bg-orange-50/40 transition-colors'}
                      >
                        <td className="py-3 px-4 font-medium text-gray-800">{row.feature}</td>
                        <td className="py-3 px-4 font-semibold text-primary bg-orange-50/30">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                            {row.pipeline}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-gray-400 text-sm">info</span>
                            {row.cylinder}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* What Is the Difference? - H2 */}
            <section id="difference" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
                What Is the Difference?
              </h2>

              <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
                <p>
                  Both use the same gas, LPG. The only difference is where the gas is kept and how it reaches your stove.
                </p>
                <p>
                  With a cylinder, the gas is kept inside your kitchen. A regulator and a rubber hose connect it to the stove.
                </p>
                <p>
                  With a <Link to="/services/domestic-lpg-pipeline" className="text-secondary font-semibold hover:underline">domestic LPG pipeline</Link>, the cylinders are kept outside in an open or ventilated area. The gas goes through metal pipes and reaches a valve near your stove. In apartments, each house usually gets its own gas meter.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm text-amber-900 leading-relaxed">
                  <strong>Important Distinction:</strong> Please note that this is not PNG (piped natural gas). PNG is a different gas supplied by city gas companies. An LPG pipeline uses the same LPG you use today.
                </div>
              </div>

              {/* Section Image 1 */}
              <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
                <img
                  src={sections.difference.image}
                  alt={sections.difference.imageAlt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
                <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
                  {sections.difference.imageCaption}
                </figcaption>
              </figure>
            </section>

            {/* Safety: Which One Is Safer? - H2 */}
            <section id="safety" className="scroll-mt-28 space-y-8 pt-4 border-t border-gray-100">
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
                Safety: Which One Is Safer?
              </h2>

              {/* Sub-H3: What Happens When Gas Leaks */}
              <div id="gas-leaks" className="scroll-mt-28 space-y-3 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-600">warning</span>
                  What Happens When Gas Leaks
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  LPG is heavier than air. When it leaks, it does not go up. It goes down and collects near the floor and inside closed cabinets.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  This is why a cylinder inside the kitchen is risky. All the gas is stored in your kitchen. If the hose is damaged or the regulator is not fitted properly, gas can collect under the counter. You may not notice it until you light the stove.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  In a pipeline system, the cylinders are outside the house. If there is a leak there, the gas spreads into the open air. Inside your kitchen, there is only a small amount of gas in the pipe. You can also close the supply using valves.
                </p>
              </div>

              {/* Sub-H3: Pressure and Safety Devices */}
              <div id="pressure-safety" className="scroll-mt-28 space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  Pressure and Safety Devices
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Gas inside a cylinder is stored at high pressure. That is why a damaged cylinder or valve can be dangerous.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  In a pipeline system, this high pressure stays outside your house. Regulators near the cylinders reduce the pressure step by step. When the gas reaches your kitchen, the pressure is low, the same as what your stove normally uses.
                </p>
                <p className="text-gray-800 font-semibold text-base">
                  A proper <Link to="/services/domestic-lpg-pipeline" className="text-secondary hover:underline">domestic LPG gas pipeline service</Link> should also give you these safety items:
                </p>

                <ul className="space-y-3 bg-blue-50/60 border border-blue-100 p-5 sm:p-6 rounded-2xl text-gray-800 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">detector_alarm</span>
                    <span>
                      <strong>A gas leak detector</strong> in the kitchen that gives an alarm when it finds gas (explore our <Link to="/services/leakage-detection-system" className="text-secondary font-semibold hover:underline">smart leak detection systems</Link>)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">valve</span>
                    <span>
                      <strong>An automatic shut-off valve</strong> that stops the gas when a leak is found
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">tune</span>
                    <span>
                      <strong>Valves outside the house and near the stove</strong>, so you can close the gas by hand
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">air</span>
                    <span>
                      <strong>LPG odorization:</strong> LPG also has a smell added to it (ethyl mercaptan), so you can smell a leak. The detector helps you find it faster.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section Image 2 - Leak detector & Valve */}
              <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
                <img
                  src={sections.safety.image}
                  alt={sections.safety.imageAlt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
                <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
                  {sections.safety.imageCaption}
                </figcaption>
              </figure>

              {/* Sub-H3: Lifting and Changing Cylinders */}
              <div id="lifting-changing" className="scroll-mt-28 space-y-3">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  Lifting and Changing Cylinders
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A full cylinder weighs almost 30 kg. Lifting it, moving it and fixing the regulator is hard work, and many leaks at home happen because the regulator was not fixed properly.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  With a pipeline, nobody at home needs to lift or change cylinders. There is no rubber hose from a cylinder in your kitchen, and you don't need to keep a spare cylinder inside the house.
                </p>
              </div>
            </section>

            {/* Daily Use and Convenience - H2 */}
            <section id="convenience" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
                Daily Use and Convenience
              </h2>

              {/* Sub-H3: No More Gas Running Out */}
              <div id="running-out" className="scroll-mt-28 space-y-3">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  No More Gas Running Out
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A pipeline system can have an automatic changeover valve. When one cylinder becomes empty, the system switches to the next cylinder. The empty one is replaced later. You don't need to book gas or wait for delivery.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  In apartments, this also means delivery people don't have to carry cylinders in the lift or on the stairs every day.
                </p>
              </div>

              {/* Sub-H3: More Space in Your Kitchen */}
              <div id="kitchen-space" className="scroll-mt-28 space-y-3">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  More Space in Your Kitchen
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  The cylinder usually takes the cabinet under the counter. Once it is gone, you can use that space for vessels and other items.
                </p>
              </div>

              {/* Section Image 3 - Cabinet Space */}
              <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
                <img
                  src={sections.convenience.image}
                  alt={sections.convenience.imageAlt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
                <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
                  {sections.convenience.imageCaption}
                </figcaption>
              </figure>
            </section>

            {/* Billing and Maintenance - H2 */}
            <section id="billing-maintenance" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
                Billing and Maintenance
              </h2>

              {/* Sub-H3: How You Pay */}
              <div id="how-you-pay" className="scroll-mt-28 space-y-3">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  How You Pay
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  With a cylinder, you pay every time you book a refill. With a pipeline, a meter records how much gas your house uses. You pay only for that, usually every month.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  In apartments, this is fair for everyone because each house pays for its own use.
                </p>
              </div>

              {/* Section Image 4 - Gas Meter */}
              <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
                <img
                  src={sections.billing.image}
                  alt={sections.billing.imageAlt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
                <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
                  {sections.billing.imageCaption}
                </figcaption>
              </figure>

              {/* Sub-H3: Regular Checks */}
              <div id="regular-checks" className="scroll-mt-28 space-y-3">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  Regular Checks
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A pipeline also needs regular checking. The joints and valves should be tested for leaks. The regulators, leak detector and shut-off valve should be checked to see if they work. The place where the cylinders are kept should have good air flow.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A good installer will follow <Link to="/safety" className="text-secondary font-semibold hover:underline">PESO rules and the Indian standard IS 6044</Link>, and will offer regular maintenance.
                </p>
              </div>
            </section>

            {/* Do You Need to Change Your Gas Stove? - H2 */}
            <section id="gas-stove-change" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
                Do You Need to Change Your Gas Stove?
              </h2>

              {/* Sub-H3: Your Stove Will Work As It Is */}
              <div id="stove-work-as-is" className="scroll-mt-28 space-y-3">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  Your Stove Will Work As It Is
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  No. Both cylinder and pipeline use LPG, so your stove does not need any change. The burner nozzle needs to be changed only if you move from LPG to PNG. If anyone says your stove needs to be changed for an LPG pipeline, ask them why.
                </p>
              </div>

              {/* Section Image 5 - Stove Blue Flame */}
              <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
                <img
                  src={sections.stove.image}
                  alt={sections.stove.imageAlt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
                <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
                  {sections.stove.imageCaption}
                </figcaption>
              </figure>

              {/* Sub-H3: What Changes Near the Stove */}
              <div id="near-the-stove" className="scroll-mt-28 space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  What Changes Near the Stove
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  The cylinder, regulator and long rubber hose are removed. The pipe comes to a valve on the wall near your stove. A short ISI-marked hose connects the valve to the stove.
                </p>

                <p className="text-gray-800 font-semibold text-sm sm:text-base">
                  Before and during the change:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>
                    <strong>Check that your stove has the ISI mark</strong> and is in good condition. Clean the burners if they are blocked.
                  </li>
                  <li>
                    <strong>Tell the installer where you want the valve.</strong> It should be easy to reach and not behind the stove or near the sink.
                  </li>
                  <li>
                    <strong>After fitting,</strong> the installer should test for leaks and light all the burners.
                  </li>
                </ol>
              </div>

              {/* Sub-H3: 3 Things to Check After Your Stove Is Connected */}
              <div id="three-checks" className="scroll-mt-28 bg-orange-50/50 border border-orange-200/80 p-6 rounded-2xl space-y-4">
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container">checklist</span>
                  3 Things to Check After Your Stove Is Connected
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-800 text-sm sm:text-base">
                  <li>
                    <strong>Flame colour:</strong> The flame should be blue. If it is yellow or orange, call the technician.
                  </li>
                  <li>
                    <strong>Soap water test:</strong> Put soap water on the joints. If you see bubbles, there is a leak. Never use a matchstick or lighter to check.
                  </li>
                  <li>
                    <strong>Valve test:</strong> Close the valve near the stove while a burner is on. The flame should go off in a few seconds.
                  </li>
                </ol>
              </div>
            </section>

            {/* Which One Should You Choose? - H2 */}
            <section id="which-to-choose" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
                Which One Should You Choose?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Choose Pipeline Card */}
                <div className="bg-emerald-50/60 border border-emerald-200/80 p-6 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                    <span className="material-symbols-outlined text-emerald-600">domain_add</span>
                    Go for a Domestic LPG Pipeline if:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                      <span>You own your house or your apartment society is planning one</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                      <span>You have a safe, ventilated exterior space for cylinders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                      <span>You want leak alarms, smart meters, and automatic shut-off safety</span>
                    </li>
                  </ul>
                </div>

                {/* Stay with Cylinder Card */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-gray-800 font-bold text-base">
                    <span className="material-symbols-outlined text-gray-600">home</span>
                    Stay with a Cylinder if:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-gray-500 text-sm mt-0.5">fiber_manual_record</span>
                      <span>You live in a rented house for a short duration and cannot make alterations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-gray-500 text-sm mt-0.5">fiber_manual_record</span>
                      <span>You need portable gas that you frequently move from place to place</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl text-gray-800 text-base leading-relaxed">
                <strong>In short:</strong> The main safety benefit is that the cylinder is no longer inside your kitchen. Add a leak detector with automatic shut-off, and your kitchen becomes much safer.
              </div>
            </section>

            {/* High Converting Call-to-Action Block */}
            <section className="bg-gradient-to-br from-primary via-primary-container to-primary text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden text-center sm:text-left">
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3 max-w-xl">
                  <span className="bg-secondary-container text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                    Free Expert Consultation
                  </span>
                  <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Get a Free Site Visit &amp; Safety Audit
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    Ready to upgrade your home, villa community, or apartment complex to a certified domestic LPG pipeline system? Our PESO-certified engineers inspect your site and provide tailored safety schematics.
                  </p>
                  <p className="text-xs text-secondary-fixed-dim font-semibold">
                    PESO Standard Compliant • ISO 9001 Certified • Rapid On-site Installation
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto shrink-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-secondary-container hover:brightness-110 active:scale-95 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg cursor-pointer"
                  >
                    <span>Request Free Site Visit</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <a
                    href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl text-xs transition-all border border-white/20"
                  >
                    <span className="material-symbols-outlined text-sm">phone</span>
                    <span>Call: {OFFICE_LOCATIONS.headOffice.phone}</span>
                  </a>
                </div>
              </div>
            </section>

            {/* FAQs Accordion Block (for rich search intent & FAQ Schema) */}
            {post.faqs && (
              <section className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container">help</span>
                  <h3 className="font-headline-md text-xl font-bold text-primary">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="space-y-3">
                  {post.faqs.map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm transition-all"
                    >
                      <summary className="font-semibold text-sm sm:text-base text-primary cursor-pointer flex justify-between items-center gap-2">
                        <span>{faq.question}</span>
                        <span className="material-symbols-outlined text-base text-gray-500 group-open:rotate-180 transition-transform">
                          expand_more
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed pt-2 border-t border-gray-100">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Internal Links & Related Services */}
            <section className="pt-8 border-t border-gray-100 space-y-4">
              <h3 className="font-headline-md text-lg font-bold text-primary">
                Related Pipeline Services &amp; Resources
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <Link
                  to="/services/domestic-lpg-pipeline"
                  className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                >
                  <p className="font-bold text-primary group-hover:text-secondary mb-1">Domestic LPG Pipeline Service</p>
                  <p className="text-gray-500">Comprehensive residential piping with pressure reduction stations.</p>
                </Link>
                <Link
                  to="/services/leakage-detection-system"
                  className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                >
                  <p className="font-bold text-primary group-hover:text-secondary mb-1">Leak Detection &amp; Auto Shut-off</p>
                  <p className="text-gray-500">Sensors, alarms, and motorized solenoid safety valves.</p>
                </Link>
                <Link
                  to="/safety"
                  className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                >
                  <p className="font-bold text-primary group-hover:text-secondary mb-1">Safety Standards &amp; PESO Norms</p>
                  <p className="text-gray-500">Discover IS 6044 regulations and emergency response protocols.</p>
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
    </div>
  );
}
