'use client';

import { usePathname } from 'next/navigation';
import HomeEnhancements from './HomeEnhancements';

/**
 * Mounts Elementor-styled enhancement bands (trust, transformations, reviews, Google)
 * on every page, with small route-specific tweaks.
 */
export default function SiteEnhancements() {
  const pathname = usePathname() || '/';

  const isTestimonial = pathname === '/testimonial' || pathname.startsWith('/testimonial/');

  return (
    <HomeEnhancements
      key={pathname}
      hideLegacyTestimonials={isTestimonial}
    />
  );
}
