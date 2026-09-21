import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage page-specific SEO meta tags, Open Graph tags,
 * Twitter cards, and canonical link tags in React/Vite.
 */
export function useSEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/gdrive/LOT_system_pipeline_WhatsApp_Image_2026-08-17_at_8_45_09_PM__1_.jpeg'
}) {
  useEffect(() => {
    // 1. Page Title
    if (title) {
      document.title = title;
    }

    // Helper to create or update meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta Description
    setMetaTag('name', 'description', description);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    if (canonicalUrl) {
      setMetaTag('property', 'og:url', canonicalUrl);
    }
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Hi Tech Energy');
    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
    }

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    if (ogImage) {
      setMetaTag('name', 'twitter:image', ogImage);
    }

    // 5. Canonical Link
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }
  }, [title, description, canonicalUrl, ogType, ogImage]);
}
