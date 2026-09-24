'use client';

import { useEffect, useRef } from 'react';

/**
 * Elementor-style entrance: fadeInUp when the section enters the viewport.
 * Avoids visibility:hidden (breaks IntersectionObserver in Chromium).
 */
export default function useElementorFadeIn(animation = 'fadeInUp') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    el.classList.add('dd-anim-pending');

    const reveal = () => {
      el.classList.remove('dd-anim-pending');
      el.classList.add('animated', animation);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal();
          observer.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);

    // Reveal immediately if already on screen (e.g. short pages / deep links)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      reveal();
      observer.unobserve(el);
    }

    return () => observer.disconnect();
  }, [animation]);

  return { ref };
}
