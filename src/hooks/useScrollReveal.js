import { useEffect } from 'react';

/**
 * Initializes viewport Intersection Observer to trigger smooth fade-in and slide-up animations
 * on elements as they enter the screen.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          // Apply custom transition delay if specified in data-delay
          const delay = el.getAttribute('data-delay');
          if (delay) {
            el.style.transitionDelay = delay;
          }

          el.classList.add('is-revealed');
          // Once revealed, unobserve to free memory
          observer.unobserve(el);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .reveal-stagger-item'
      );
      
      elements.forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Run after DOM has painted
    const timer = setTimeout(observeElements, 100);

    // Re-run on route changes or content mutations
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
