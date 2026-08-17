import { useEffect, useRef } from 'react';

/**
 * High-performance, GPU-accelerated Parallax Hook using requestAnimationFrame
 * @param {number} speed - Parallax speed factor (e.g., 0.2 for subtle slow background, -0.1 for float)
 * @param {object} options - Options: { disabledOnMobile: true, maxOffset: 120, scale: 1.15 }
 */
export function useParallax(speed = 0.2, options = {}) {
  const ref = useRef(null);
  const { disabledOnMobile = true, maxOffset = 100, initialScale = 1.15 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Check for mobile if disabledOnMobile is true
    const isMobile = window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
    const effectiveSpeed = isMobile ? (disabledOnMobile ? 0 : speed * 0.4) : speed;
    if (effectiveSpeed === 0) return;

    let ticking = false;
    let isVisible = false;

    // Set initial GPU hardware acceleration styles
    el.style.willChange = 'transform';
    el.style.transition = 'transform 0.1s cubic-bezier(0,0,0.2,1)';

    const updatePosition = () => {
      if (!isVisible && !isMobile) {
        ticking = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate distance from center of viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Parallax translation
      let translateY = -distanceFromCenter * effectiveSpeed;

      // Clamp translation to prevent extreme overflow
      if (maxOffset) {
        translateY = Math.max(-maxOffset, Math.min(maxOffset, translateY));
      }

      const scaleStr = initialScale ? ` scale(${initialScale})` : '';
      el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)${scaleStr}`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    // Intersection observer to only calculate when element is in or near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            updatePosition();
          }
        });
      },
      { rootMargin: '200px 0px 200px 0px' }
    );

    observer.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial positioning
    updatePosition();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (el) {
        el.style.transform = '';
        el.style.willChange = 'auto';
        el.style.transition = '';
      }
    };
  }, [speed, disabledOnMobile, maxOffset, initialScale]);

  return ref;
}
