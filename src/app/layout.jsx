import './globals.css';
import Script from 'next/script';
import SkipLink from '../components/SkipLink';

export const metadataBase = new URL('https://thedietdiary.in');

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Shivangi Pancholi | Expert Nutritionist & Dietitian for a Healthier You',
  description: 'Shivangi Pancholi, a certified Nutritionist & Dietitian, helps you achieve your health goals with personalized diet plans and expert nutrition advice.',
  openGraph: {
    title: 'Shivangi Pancholi | Expert Nutritionist & Dietitian',
    description: 'Personalized nutrition, gut health, and sustainable diet plans.',
    url: 'https://thedietdiary.in/',
    siteName: 'The Diet Diary',
    images: [
      {
        url: '/website-images/Untitled-design-2024-08-05T125025_290.webp',
        width: 1150,
        height: 1500,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/wp-content/plugins/creame-whatsapp-me/public/css/joinchat.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/conditionals/popup.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/conditionals/ribbon.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/modules/motion-fx.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/widget-blockquote.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/widget-mega-menu.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor-pro/assets/css/widget-price-table.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/frontend.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-divider.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-heading.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-image.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-spacer.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-testimonial.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-grow.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInLeft.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInRight.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/zoomIn.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/css/view/general.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/fluentform/assets/css/fluent-forms-elementor-widget.css" />
        <link rel="stylesheet" href="/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css" />
        <link rel="stylesheet" href="/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css" />
        <link rel="stylesheet" href="/wp-content/plugins/header-footer-elementor/inc/widgets-css/woo-products.css" />
        <link rel="stylesheet" href="/wp-content/plugins/testimonial-free/dist/style-rtp-blocks.css" />
        <link rel="stylesheet" href="/wp-content/plugins/testimonial-free/src/Admin/assets/css/fontello.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/testimonial-free/src/Frontend/assets/css/deprecated-style.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/testimonial-free/src/Frontend/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/testimonial-free/src/Frontend/assets/css/style.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/testimonial-free/src/Frontend/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/woocommerce/assets/css/photoswipe/default-skin/default-skin.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/woocommerce/assets/css/photoswipe/photoswipe.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/astra/assets/css/minified/compatibility/woocommerce/woocommerce-grid.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/astra/assets/css/minified/compatibility/woocommerce/woocommerce-layout-grid.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/astra/assets/css/minified/compatibility/woocommerce/woocommerce-smallscreen-grid.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/astra/assets/css/minified/main.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-1015.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-1218.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-1374.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-14.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-1411.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-1451.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-1545.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-1995.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-499.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-686.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-721.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-855.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-862.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-866.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/google-fonts/css/archivo.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/google-fonts/css/hind.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/google-fonts/css/italiana.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/google-fonts/css/montserrat.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/google-fonts/css/poppins.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/google-fonts/css/roboto.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/google-fonts/css/robotoslab.css" />
        <link rel="stylesheet" href="/wp-content/uploads/essential-addons-elementor/eael-1015.css" />
        <link rel="stylesheet" href="/wp-content/uploads/essential-addons-elementor/eael-721.css" />
        <link rel="stylesheet" href="/wp-includes/css/dist/block-library/style.min.css" />
      </head>
      <body>
        <SkipLink />
        <main id="main-content">{children}</main>
        <Script src="/wp-includes/js/jquery/jquery.min.js" strategy="lazyOnload" />
        <Script src="/wp-includes/js/jquery/jquery-migrate.min.js" strategy="lazyOnload" />
        <Script src="/wp-includes/js/underscore.min.js" strategy="lazyOnload" />
        <Script src="/wp-includes/js/dist/hooks.min.js" strategy="lazyOnload" />
        <Script src="/wp-includes/js/dist/i18n.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/elementor/assets/js/frontend-modules.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/elementor/assets/js/frontend.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/elementor-pro/assets/js/frontend.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/themes/astra/assets/js/minified/frontend.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/creame-whatsapp-me/public/js/joinchat.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/fluentform/assets/js/fluent-forms-elementor-widget.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/header-footer-elementor/inc/js/frontend.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/testimonial-free/src/Blocks/assets/js/script.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/testimonial-free/src/Frontend/assets/js/swiper.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/flexslider/jquery.flexslider.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart-variation.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/frontend/single-product.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe-ui-default.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/woocommerce/assets/js/zoom/jquery.zoom.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/uploads/essential-addons-elementor/eael-1015.js" strategy="lazyOnload" />
        <Script src="/wp-content/uploads/essential-addons-elementor/eael-721.js" strategy="lazyOnload" />
        <Script src="/wp-includes/js/comment-reply.min.js" strategy="lazyOnload" />
        <Script src="/wp-includes/js/jquery/ui/core.min.js" strategy="lazyOnload" />
        <Script src="/wp-includes/js/wp-util.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
