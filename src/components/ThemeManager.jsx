'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ROUTE_CLASSES = {
  '/': 'home wp-singular page-template-default page page-id-721 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-kit-14 elementor-page elementor-page-721',
  '/about': 'wp-singular page-template page-template-elementor_header_footer page page-id-499 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-499',
  '/my-services': 'wp-singular page-template page-template-elementor_header_footer page page-id-1218 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-1218',
  '/programs': 'wp-singular page-template page-template-elementor_header_footer page page-id-1411 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-1411',
  '/diet-plan': 'wp-singular page-template-default page page-id-29 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-plain-container ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header ast-normal-title-enabled elementor-default elementor-kit-14',
  '/pricing': 'wp-singular page-template page-template-elementor_header_footer page page-id-1451 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-1451',
  '/shop': 'archive post-type-archive post-type-archive-product wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-shop woocommerce woocommerce-page woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-plain-container ast-no-sidebar astra-4.13.12 columns-4 tablet-columns-3 mobile-columns-2 ast-woo-shop-archive ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-kit-14',
  '/testimonial': 'wp-singular page-template page-template-elementor_header_footer page page-id-1995 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-1995',
  '/blog': 'wp-singular page-template page-template-elementor_header_footer page page-id-1015 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-template-full-width elementor-kit-14 elementor-page elementor-page-1015',
};

function parseSettings(el) {
  const raw = el.getAttribute('data-settings');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function ensureBackgroundMotionLayer(el) {
  el.classList.add('elementor-motion-effects-element', 'elementor-motion-effects-element-type-background');
  let container = el.querySelector(':scope > .elementor-motion-effects-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'elementor-motion-effects-container';
    const layer = document.createElement('div');
    layer.className = 'elementor-motion-effects-layer';
    container.appendChild(layer);
    el.insertBefore(container, el.firstChild);
  } else if (!container.querySelector(':scope > .elementor-motion-effects-layer')) {
    const layer = document.createElement('div');
    layer.className = 'elementor-motion-effects-layer';
    container.appendChild(layer);
  }
  return container.querySelector('.elementor-motion-effects-layer');
}

/**
 * Recreate Elementor Pro Motion FX + entrance animations + background lazyload
 * so the dumped Elementor markup renders like the live WordPress site.
 */
export default function ThemeManager() {
  const pathname = usePathname();

  useEffect(() => {
    const baseClasses = ROUTE_CLASSES[pathname] || ROUTE_CLASSES['/'] || '';
    document.body.className = baseClasses;
    document.body.setAttribute('itemtype', 'https://schema.org/WebPage');
    document.body.setAttribute('itemscope', 'itemscope');

    const mq = window.matchMedia('(max-width: 921.99px)');
    const applyBreakpoint = (isMobile) => {
      const b = document.body.classList;
      if (isMobile) {
        b.add('ast-header-break-point');
        b.remove('ast-desktop');
      } else {
        b.remove('ast-header-break-point');
        b.add('ast-desktop');
      }
    };
    applyBreakpoint(mq.matches);
    const mqHandler = (e) => applyBreakpoint(e.matches);
    mq.addEventListener ? mq.addEventListener('change', mqHandler) : mq.addListener(mqHandler);

    // --- Backgrounds must never stay stripped ---
    document.querySelectorAll('.e-con.e-parent, .e-con.e-child, [data-e-bg-lazyload]').forEach((el) => {
      el.classList.add('e-lazyloaded');
    });

    // --- Motion FX: background parallax layers ---
    const HERO_BG =
      'url("/wp-content/uploads/2025/02/Untitled-design.webp?v=20260926e")';
    const bgMotionTargets = [];
    document.querySelectorAll('[data-settings*="background_motion_fx"]').forEach((el) => {
      const settings = parseSettings(el);
      if (!settings?.background_motion_fx_motion_fx_scrolling) return;
      const layer = ensureBackgroundMotionLayer(el);
      if (!layer) return;
      layer.style.transition = 'none';
      // Hero: force original banner onto the Motion FX layer (CSS :not() drops after class add)
      if (el.classList.contains('elementor-element-e393ce7')) {
        layer.style.backgroundImage = HERO_BG;
        layer.style.backgroundSize = 'cover';
        layer.style.backgroundPosition = 'center center';
        layer.style.backgroundRepeat = 'no-repeat';
      }
      const speed = Number(settings.background_motion_fx_translateY_speed?.size) || 2.5;
      const direction = settings.background_motion_fx_translateY_direction === 'negative' ? -1 : 1;
      bgMotionTargets.push({ el, layer, speed, direction });
    });

    // Also ensure any element already marked for motion layer has a layer node
    document.querySelectorAll('.elementor-motion-effects-element-type-background').forEach((el) => {
      const layer = ensureBackgroundMotionLayer(el);
      if (layer) layer.style.transition = 'none';
    });

    // --- Motion FX: element translateY (floating images) ---
    const elMotionTargets = [];
    document.querySelectorAll('[data-settings*="motion_fx_motion_fx_scrolling"]').forEach((el) => {
      const settings = parseSettings(el);
      if (!settings?.motion_fx_motion_fx_scrolling) return;
      if (settings.background_motion_fx_motion_fx_scrolling) return; // handled above
      el.classList.add('elementor-motion-effects-element');
      el.style.transition = 'none';
      const speed = Number(settings.motion_fx_translateY_speed?.size) || 4;
      const direction = settings.motion_fx_translateY_direction === 'negative' ? -1 : 1;
      elMotionTargets.push({ el, speed, direction });
    });

    let raf = 0;
    const revealVisibleAnimations = () => {
      const vh = window.innerHeight || 1;
      document.querySelectorAll('.elementor-invisible').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.92 && rect.bottom > 0) {
          el.classList.remove('elementor-invisible');
          el.classList.add('animated');
          const settings = parseSettings(el);
          if (settings?.animation) el.classList.add(settings.animation);
          if (settings?._animation) el.classList.add(settings._animation);
        }
      });
    };

    const applyMotion = () => {
      raf = 0;
      const vh = window.innerHeight || 1;

      const motionScale = window.innerWidth < 768 ? 12 : 40;
      bgMotionTargets.forEach(({ el, layer, speed, direction }) => {
        const rect = el.getBoundingClientRect();
        const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
        const y = progress * speed * motionScale * direction;
        // Elementor Pro drives layers via --translateY
        layer.style.setProperty('--translateY', `${y.toFixed(2)}px`);
        layer.style.transform = `translateY(var(--translateY))`;
      });

      elMotionTargets.forEach(({ el, speed, direction }) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
        const y = progress * speed * 30 * direction;
        el.style.setProperty('--translateY', `${y.toFixed(2)}px`);
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      });

      revealVisibleAnimations();
    };

    const onScrollOrResize = () => {
      if (!raf) raf = window.requestAnimationFrame(applyMotion);
    };
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    applyMotion();
    // Second pass after Elementor scripts settle
    window.setTimeout(() => {
      applyMotion();
      revealVisibleAnimations();
    }, 400);

    // --- Entrance animations (Elementor fadeInUp etc.) ---
    const animatedElements = document.querySelectorAll('.elementor-invisible');
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.remove('elementor-invisible');
          el.classList.add('animated');
          const settings = parseSettings(el);
          if (settings?.animation) el.classList.add(settings.animation);
          if (settings?._animation) el.classList.add(settings._animation);
          animObserver.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );
    animatedElements.forEach((el) => animObserver.observe(el));
    revealVisibleAnimations();

    // --- Scroll-to-top + reading progress ---
    const scrollToTopBtn = document.querySelector('.hfe-scroll-to-top-wrap');
    const progressBar = document.querySelector('.hfe-reading-progress-bar');
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollToTopBtn) {
        if (scrollY > 100) {
          scrollToTopBtn.classList.remove('hfe-scroll-to-top-hide');
          scrollToTopBtn.style.display = 'block';
        } else {
          scrollToTopBtn.style.display = 'none';
        }
      }
      if (progressBar) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
      }
      onScrollOrResize();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const onScrollClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    if (scrollToTopBtn) scrollToTopBtn.addEventListener('click', onScrollClick);

    // --- Mobile menu ---
    const menuToggles = document.querySelectorAll(
      '.main-header-menu-toggle, .ast-mobile-menu-trigger-minimal, .ast-button-wrap, .menu-toggle'
    );
    const mobileMenuDrawers = document.querySelectorAll(
      '.ast-mobile-popup-drawer, .main-navigation, .mobile-menu, #site-navigation'
    );
    const toggleHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.toggle('ast-mobile-menu-open');
      mobileMenuDrawers.forEach((drawer) => drawer.classList.toggle('active'));
      menuToggles.forEach((toggle) => toggle.classList.toggle('active'));
    };
    menuToggles.forEach((toggle) => toggle.addEventListener('click', toggleHandler));

    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', mqHandler) : mq.removeListener(mqHandler);
      animObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (raf) cancelAnimationFrame(raf);
      if (scrollToTopBtn) scrollToTopBtn.removeEventListener('click', onScrollClick);
      menuToggles.forEach((toggle) => toggle.removeEventListener('click', toggleHandler));
    };
  }, [pathname]);

  return null;
}
