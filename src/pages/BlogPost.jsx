import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogData';
import { useSEO } from '../hooks/useSEO';
import { OFFICE_LOCATIONS } from '../data/hitechData';
import LotVsVotArticle from '../components/blog/LotVsVotArticle';
import DomesticArticle from '../components/blog/DomesticArticle';
import LpgFreezingArticle from '../components/blog/LpgFreezingArticle';

export default function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const pathSlug = pathParts[0] === 'blog' && pathParts[1] ? pathParts[1] : '';

  const currentSlug = slug || pathSlug || 'domestic-lpg-pipeline-vs-cylinder';
  const post = getBlogPostBySlug(currentSlug);

  const getDefaultSection = (s) => {
    if (s === 'lpg-gas-freezing') return 'key-takeaways';
    if (s === 'lot-vs-vot') return 'why-manifold-matters';
    return 'glance';
  };

  const [activeSection, setActiveSection] = useState(getDefaultSection(currentSlug));
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Reset scroll and active section on slug change
  useEffect(() => {
    setActiveSection(getDefaultSection(currentSlug));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentSlug]);

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
    if (!post) return;
    const sectionIds = post.tableOfContents?.map((item) => item.id) || [];
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

  const { tableOfContents } = post;
  const isLotVsVot = post.slug === 'lot-vs-vot';
  const isLpgFreezing = post.slug === 'lpg-gas-freezing';

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
              {post.metaTitle}
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

          {/* Single H1 on Page */}
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
            {isLpgFreezing
              ? 'LPG cylinder freezing with visible white frost line indicating liquid level under heavy thermal draw.'
              : isLotVsVot
                ? 'Industrial LPG manifold system with LOT vaporiser skid and pressure reducing headers.'
                : 'Modern domestic kitchen equipped with safe wall-mounted LPG pipeline and isolation ball valve.'}
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
                      className={`block py-1.5 transition-colors rounded-md px-2 ${item.level === 3 ? 'pl-5 text-gray-500 hover:text-primary' : 'font-semibold text-gray-800'
                        } ${activeSection === item.id
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
                  <span className="material-symbols-outlined">
                    {isLpgFreezing ? 'severe_cold' : isLotVsVot ? 'precision_manufacturing' : 'home_repair_service'}
                  </span>
                </div>
                <h3 className="font-headline-md text-base font-bold text-white">
                  {isLpgFreezing ? 'Freezing Cylinder Help?' : isLotVsVot ? 'Sizing an LOT System?' : 'Upgrade to Piped Gas'}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  {isLpgFreezing
                    ? 'Hi Tech Energy sizes and installs commercial multi-cylinder manifolds and LOT vaporisers to permanently end tank icing.'
                    : isLotVsVot
                      ? 'Hi Tech Energy engineers PESO-certified LOT pipelines, vaporiser skids, and PRS units for factories, hotels, and furnaces.'
                      : 'Hi Tech Energy installs certified domestic LPG pipelines with leak alarms and auto shut-off for apartments and villas.'}
                </p>
                <Link
                  to="/contact"
                  className="block text-center w-full bg-secondary-container hover:brightness-110 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow cursor-pointer"
                >
                  {isLpgFreezing ? 'Request Manifold Audit' : isLotVsVot ? 'Request Vaporiser Sizing' : 'Book Free Site Visit'}
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

          {/* Main Article Body */}
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
                      className={`block py-1 px-2 rounded ${item.level === 3 ? 'pl-4 text-gray-500' : 'font-medium text-gray-800'
                        } hover:bg-orange-50 hover:text-secondary-container`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </details>
            </div>

            {/* Render Specific Post Article Content */}
            {isLpgFreezing ? (
              <LpgFreezingArticle post={post} />
            ) : isLotVsVot ? (
              <LotVsVotArticle post={post} />
            ) : (
              <DomesticArticle post={post} />
            )}

            {/* FAQs Accordion Block */}
            {post.faqs && (
              <section id="faqs" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
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
                Related Engineering Services &amp; Resources
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {isLpgFreezing ? (
                  <>
                    <Link
                      to="/services/commercial-lpg-pipeline"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">Commercial VOT Pipeline</p>
                      <p className="text-gray-500">Engineered multi-cylinder manifold systems that eliminate cylinder icing.</p>
                    </Link>
                    <Link
                      to="/services/lot-pipeline"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">LOT Pipeline Service</p>
                      <p className="text-gray-500">External vaporiser skids delivering 8x vaporization with zero tank frost.</p>
                    </Link>
                    <Link
                      to="/blog/lot-vs-vot"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">LOT vs VOT Manifold System</p>
                      <p className="text-gray-500">Compare industrial manifold architectures, output, footprint, and ROI.</p>
                    </Link>
                  </>
                ) : isLotVsVot ? (
                  <>
                    <Link
                      to="/services/lot-pipeline"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">LOT Pipeline System</p>
                      <p className="text-gray-500">High efficiency industrial liquid off-take with certified vaporiser skids.</p>
                    </Link>
                    <Link
                      to="/services/commercial-lpg-pipeline"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">Commercial VOT Pipeline</p>
                      <p className="text-gray-500">Engineered vapour off-take manifold systems for moderate kitchens and canteens.</p>
                    </Link>
                    <Link
                      to="/blog/lpg-gas-freezing"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">Why LPG Freezing Happens</p>
                      <p className="text-gray-500">Learn the science of frost lines, latent heat, and manifold sizing.</p>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/services/domestic-lpg-pipeline"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">Domestic LPG Pipeline Service</p>
                      <p className="text-gray-500">Comprehensive residential piping with pressure reduction stations.</p>
                    </Link>
                    <Link
                      to="/blog/lot-vs-vot"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">LOT vs VOT Manifold System</p>
                      <p className="text-gray-500">Industrial &amp; commercial manifold comparison, sizing, and ROI analysis.</p>
                    </Link>
                    <Link
                      to="/safety"
                      className="p-4 rounded-xl border border-gray-200 bg-white hover:border-secondary-container hover:shadow-md transition-all group block"
                    >
                      <p className="font-bold text-primary group-hover:text-secondary mb-1">Safety Standards &amp; PESO Norms</p>
                      <p className="text-gray-500">Discover IS 6044 regulations and emergency response protocols.</p>
                    </Link>
                  </>
                )}
              </div>
            </section>

          </article>
        </div>
      </main>
    </div>
  );
}
