import './globals.css';
import Script from 'next/script';
import SkipLink from '../components/SkipLink';
import ThemeManager from '../components/ThemeManager';
import SiteEnhancements from '../components/SiteEnhancements';

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
  icons: {
    icon: [
      { url: '/website-images/cropped-SP-32x32.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/website-images/cropped-SP-192x192.webp', sizes: '192x192', type: 'image/webp' },
    ],
    apple: [
      { url: '/website-images/cropped-SP-180x180.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
};

const GLOBAL_CONFIG_SCRIPT = `
  window.astra = {"break_point":"921","isRtl":"","is_scroll_to_id":"1","is_scroll_to_top":"1","is_header_footer_builder_active":"1","responsive_cart_click":"flyout","is_dark_palette":""};
  window.fluentformElementor = {"adminUrl":"/wp-admin/admin.php"};
  window.sp_real_localize_data = {"ajaxUrl":"/wp-admin/admin-ajax.php","nonce":"d942fc9233"};
  window.localize = {"ajaxurl":"/wp-admin/admin-ajax.php","nonce":"31708be620","i18n":{"added":"Added ","compare":"Compare","loading":"Loading..."},"eael_translate_text":{"required_text":"is a required field","invalid_text":"Invalid","billing_text":"Billing","shipping_text":"Shipping","fg_mfp_counter_text":"of"},"page_permalink":"https://thedietdiary.in/","cart_redirectition":"no","cart_page_url":"https://thedietdiary.in","el_breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}};
  window.EAELImageMaskingConfig = {"svg_dir_url":"/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/img/image-masking/svg-shapes/"};
  window.elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnX":"Share on X","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.2.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_panel_promotions":true,"theme_builder_v2":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_variables":true},"urls":{"assets":"/wp-content/plugins/elementor/assets/","ajaxurl":"/wp-admin/admin-ajax.php","uploadUrl":"/wp-content/uploads"},"nonces":{"floatingButtonsClickTracking":"a08d4df1bb","atomicFormsSendForm":"03482538f9"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"body_background_background":"classic","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","woocommerce_notices_elements":[]},"post":{"id":721,"title":"Shivangi%20Pancholi%20%7C%20Expert%20Nutritionist%20%26%20Dietitian%20for%20a%20Healthier%20You","excerpt":"","featuredImage":false}};
  window.ElementorProFrontendConfig = {"ajaxurl":"/wp-admin/admin-ajax.php","nonce":"b22528e147","urls":{"assets":"/wp-content/plugins/elementor-pro/assets/","rest":"/wp-json/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"woocommerce":{"menu_cart":{"cart_page_url":"https://thedietdiary.in","checkout_page_url":"https://thedietdiary.in","fragments_nonce":"2e2baee350"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"/wp-content/plugins/elementor-pro/modules/lottie/assets/animations/default.json"}};
`;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "The Diet Diary - Shivangi Pancholi | Nutritionist & Dietitian",
              "image": "https://thedietdiary.in/website-images/Asset-10.webp",
              "@id": "https://thedietdiary.in/#nutritionist",
              "url": "https://thedietdiary.in",
              "telephone": "+918469077410",
              "priceRange": "₹₹",
              "description": "Certified Nutritionist & Dietitian providing customized Indian diet plans for weight loss, PCOS management, diabetes, gut health, and festive detox. Online consultations across India — no clinic address required.",
              "areaServed": [
                { "@type": "City", "name": "Ahmedabad" },
                { "@type": "City", "name": "Vadodara" },
                { "@type": "City", "name": "Surat" },
                { "@type": "City", "name": "Mumbai" },
                { "@type": "Country", "name": "India" },
                { "@type": "AdministrativeArea", "name": "Worldwide Online Consultations" }
              ],
              "sameAs": [
                "https://www.instagram.com/_the.diet.diary_/",
                "https://www.facebook.com/people/The-Diet-Diary/61573061219105/"
              ]
            })
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: GLOBAL_CONFIG_SCRIPT }} />
      </head>
      <body
        className="home wp-singular page-template-default page page-id-721 wp-custom-logo wp-embed-responsive wp-theme-astra theme-astra woocommerce-no-js ehf-header ehf-footer ehf-template-astra ehf-stylesheet-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.12 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-kit-14 elementor-page elementor-page-721"
        suppressHydrationWarning
      >
        <ThemeManager />
        <SkipLink />
        <main id="main-content">{children}</main>
        <SiteEnhancements />
        
        {/* Core Scripts */}
        <Script src="/wp-includes/js/jquery/jquery.min.js" strategy="afterInteractive" />
        <Script src="/wp-includes/js/jquery/jquery-migrate.min.js" strategy="afterInteractive" />
        <Script src="/wp-includes/js/underscore.min.js" strategy="afterInteractive" />
        <Script src="/wp-includes/js/dist/hooks.min.js" strategy="afterInteractive" />
        <Script src="/wp-includes/js/dist/i18n.min.js" strategy="afterInteractive" />
        
        {/* Elementor Core & Motion FX */}
        <Script src="/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/elementor/assets/js/frontend-modules.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/elementor/assets/js/frontend.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/elementor-pro/assets/js/frontend.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js" strategy="afterInteractive" />
        
        {/* Astra & Plugins */}
        <Script src="/wp-content/themes/astra/assets/js/minified/frontend.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/header-footer-elementor/inc/js/frontend.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/fluentform/assets/js/fluent-forms-elementor-widget.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/testimonial-free/src/Blocks/assets/js/script.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/testimonial-free/src/Frontend/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/wp-content/uploads/essential-addons-elementor/eael-721.js" strategy="afterInteractive" />
        <Script src="/wp-content/uploads/essential-addons-elementor/eael-1015.js" strategy="afterInteractive" />
        <Script src="/wp-includes/js/jquery/ui/core.min.js" strategy="afterInteractive" />
        <Script src="/wp-includes/js/wp-util.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
