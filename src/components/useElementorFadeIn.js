'use client';

import { useEffect, useRef } from 'react';

/**
 * Match Elementor frontend entrance: elementor-invisible → animated fadeInUp.
 * Also tags .elementor-button children with grow hover like the dump.
 */
export default function useElementorFadeIn(animation = 'fadeInUp') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    el.classList.add('elementor-invisible', 'dd-anim-pending');

    el.querySelectorAll('.elementor-button').forEach((btn) => {
      btn.classList.add('elementor-animation-grow');
    });

    const reveal = () => {
      el.classList.remove('elementor-invisible', 'dd-anim-pending');
      el.classList.add('animated', animation);

      el.querySelectorAll('.elementor-column, .dd-e-xform-col, .dd-e-review-col').forEach(
        (col, i) => {
          if (col === el) return;
          col.classList.add('animated', animation);
          col.style.animationDelay = `${Math.min(i * 0.12, 0.48)}s`;
        }
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal();
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      reveal();
      observer.unobserve(el);
    }

    return () => observer.disconnect();
  }, [animation]);

  return { ref };
}
