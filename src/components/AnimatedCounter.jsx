import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter counts smoothly from 0 to target value when visible in viewport
 */
export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  staticText = null 
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (staticText !== null && staticText !== undefined) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          let startTimestamp = null;
          const target = typeof end === 'number' ? end : parseInt(end, 10) || 0;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Cubic ease-out curve: 1 - (1 - t)^3
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(easeOutProgress * target);

            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration, hasStarted, staticText]);

  if (staticText) {
    return (
      <span ref={elementRef} className="inline-block transition-transform duration-500">
        {staticText}
      </span>
    );
  }

  return (
    <span ref={elementRef} className="tabular-nums inline-block font-bold">
      {prefix}{count}{suffix}
    </span>
  );
}
