'use client';

import useElementorFadeIn from './useElementorFadeIn';

/** Image + copy split — same pattern as homepage “Nourish Your Body” section */
export default function FestiveWellnessBanner() {
  const { ref } = useElementorFadeIn('fadeInUp');

  return (
    <section
      ref={ref}
      id="festive-offer"
      className="elementor-section elementor-top-section elementor-section-full_width elementor-section-height-default dd-e-white"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-widget elementor-widget-image">
              <div className="elementor-widget-container">
                <img
                  src="/website-images/festive-wellness-banner.jpg"
                  alt="Navratri and Diwali festive wellness"
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-column elementor-col-50">
          <div className="elementor-widget-wrap elementor-element-populated dd-e-copy-pad">
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default dd-e-title-green">
                  Navratri Fasting Detox &amp; Diwali Wellness
                </h2>
              </div>
            </div>

            <div className="elementor-element elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p>
                  Keep energy high for Garba nights, enjoy Diwali sweets mindfully, and reset your gut
                  afterward with festive blueprints built around Indian kitchen staples.
                </p>
                <p>
                  9-day Navratri satvik detox · Diwali sweet-balance guide · 7-day post-festive gut reset
                </p>
              </div>
            </div>

            <div className="elementor-element elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href="https://wa.me/918469077410?text=Hi%20Shivangi,%20I%20am%20interested%20in%20the%20Navratri%20%26%20Diwali%20Festive%20Wellness%20Plan!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">Book An Appointment</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
