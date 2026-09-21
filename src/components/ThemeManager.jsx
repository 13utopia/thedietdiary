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

export default function ThemeManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Apply accurate body classes for the active route
    const baseClasses = ROUTE_CLASSES[pathname] || ROUTE_CLASSES['/'] || '';
    document.body.className = baseClasses;
    document.body.setAttribute('itemtype', 'https://schema.org/WebPage');
    document.body.setAttribute('itemscope', 'itemscope');

    // 2. Responsive Breakpoint Listener (Astra header breakpoint: 921.99px)
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

    // 3. Background Lazyloader IntersectionObserver
    const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded), [data-e-bg-lazyload]:not(.e-lazyloaded)');
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('e-lazyloaded');
          lazyObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px 200px 0px' });

    lazyloadBackgrounds.forEach((el) => lazyObserver.observe(el));

    // 4. Elementor Motion & Scroll Animation Observer
    const animatedElements = document.querySelectorAll('.elementor-invisible, [data-settings*="animation"]');
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.remove('elementor-invisible');
          el.classList.add('animated');
          
          try {
            const ds = el.getAttribute('data-settings');
            if (ds) {
              const parsed = JSON.parse(ds);
              if (parsed.animation) {
                el.classList.add(parsed.animation);
              }
              if (parsed._animation) {
                el.classList.add(parsed._animation);
              }
            }
          } catch (err) {}
          
          animObserver.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach((el) => animObserver.observe(el));

    // 5. Scroll-To-Top Button & Reading Progress Bar
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (scrollToTopBtn) {
      const onScrollClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      scrollToTopBtn.addEventListener('click', onScrollClick);
    }

    // 6. Mobile Hamburger Menu Toggle
    const menuToggles = document.querySelectorAll('.main-header-menu-toggle, .ast-mobile-menu-trigger-minimal, .ast-button-wrap, .menu-toggle');
    const mobileMenuDrawers = document.querySelectorAll('.ast-mobile-popup-drawer, .main-navigation, .mobile-menu, #site-navigation');

    const toggleHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.toggle('ast-mobile-menu-open');
      mobileMenuDrawers.forEach(drawer => drawer.classList.toggle('active'));
      menuToggles.forEach(toggle => toggle.classList.toggle('active'));
    };

    menuToggles.forEach(toggle => toggle.addEventListener('click', toggleHandler));

    // Cleanup
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', mqHandler) : mq.removeListener(mqHandler);
      lazyObserver.disconnect();
      animObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      menuToggles.forEach(toggle => toggle.removeEventListener('click', toggleHandler));
    };
  }, [pathname]);

  return null;
}
