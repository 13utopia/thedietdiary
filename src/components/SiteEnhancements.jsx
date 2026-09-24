'use client';

import { usePathname } from 'next/navigation';
import HomeEnhancements from './HomeEnhancements';

/**
 * Mounts Elementor-styled enhancement bands (trust, festive, reviews, Google)
 * on every page, with small route-specific tweaks.
 */
export default function SiteEnhancements() {
  const pathname = usePathname() || '/';

  const isTestimonial = pathname === '/testimonial' || pathname.startsWith('/testimonial/');
  const isShop = pathname === '/shop' || pathname.startsWith('/shop/');
  const includeFestive = !isTestimonial && !isShop;

  return (
    <HomeEnhancements
      key={pathname}
      includeFestive={includeFestive}
      hideLegacyTestimonials={isTestimonial}
    />
  );
}
