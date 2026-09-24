'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import TrustStatsBanner from './TrustStatsBanner';
import TransformationsBanner from './TransformationsBanner';
import FestiveWellnessBanner from './FestiveWellnessBanner';
import ClientReviewsSection from './ClientReviewsSection';
import GooglePresenceCard from './GooglePresenceCard';

/**
 * Mounts new sections just above the WordPress footer, wrapped as Elementor
 * so kit typography / buttons / spacing apply like the rest of the dump.
 */
export default function HomeEnhancements({
  includeFestive = true,
  hideLegacyTestimonials = false,
}) {
  const [mountNode, setMountNode] = useState(null);

  useEffect(() => {
    if (hideLegacyTestimonials) {
      document.body.classList.add('diet-diary-hide-legacy-testimonials');
    }

    const attach = () => {
      const footer = document.getElementById('colophon');
      const parent = footer?.parentNode || document.getElementById('page') || document.body;
      if (!parent) return false;

      let host = document.getElementById('diet-diary-home-enhancements');
      if (!host) {
        host = document.createElement('div');
        host.id = 'diet-diary-home-enhancements';
        if (footer && footer.parentNode === parent) {
          parent.insertBefore(host, footer);
        } else {
          parent.appendChild(host);
        }
      }

      setMountNode(host);
      return true;
    };

    if (attach()) {
      return () => {
        setMountNode(null);
        const host = document.getElementById('diet-diary-home-enhancements');
        if (host?.parentNode) host.parentNode.removeChild(host);
        document.body.classList.remove('diet-diary-hide-legacy-testimonials');
      };
    }

    const timer = window.setTimeout(attach, 50);
    return () => {
      window.clearTimeout(timer);
      setMountNode(null);
      const host = document.getElementById('diet-diary-home-enhancements');
      if (host?.parentNode) host.parentNode.removeChild(host);
      document.body.classList.remove('diet-diary-hide-legacy-testimonials');
    };
  }, [hideLegacyTestimonials]);

  if (!mountNode) return null;

  return createPortal(
    <div
      className="elementor elementor-721 diet-diary-enhancements"
      data-elementor-type="wp-page"
      data-elementor-id="721"
    >
      {hideLegacyTestimonials ? (
        <style>{`
          body.diet-diary-hide-legacy-testimonials .elementor-widget-testimonial {
            display: none !important;
          }
        `}</style>
      ) : null}
      <TrustStatsBanner />
      <TransformationsBanner />
      {includeFestive ? <FestiveWellnessBanner /> : null}
      <ClientReviewsSection />
      <GooglePresenceCard />
    </div>,
    mountNode
  );
}
