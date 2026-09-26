'use client';

import useElementorFadeIn from './useElementorFadeIn';

/** Centered CTA band — same feel as “Start Your Journey today” */
export default function GooglePresenceCard() {
  const { ref } = useElementorFadeIn('fadeInUp');

  return (
    <section
      ref={ref}
      id="google-presence"
      className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default dd-e-sage dd-e-cta"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100">
          <div className="elementor-widget-wrap elementor-element-populated" style={{ textAlign: 'center' }}>
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default dd-e-title">
                  Find The Diet Diary Online
                </h2>
              </div>
            </div>

            <div className="elementor-element elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p>
                  Phone, Instagram, and the website — listed as a service-area practice so your home
                  address stays private.
                </p>
                <p className="dd-e-contact-line">
                  <a href="tel:+918469077410">+91 84690 77410</a>
                  <a href="https://www.instagram.com/_the.diet.diary_/" target="_blank" rel="noopener noreferrer">
                    @_the.diet.diary_
                  </a>
                  <a href="https://thedietdiary.in/">thedietdiary.in</a>
                </p>
              </div>
            </div>

            <div className="elementor-element elementor-align-center elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                    href="https://business.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">Open Google Business Profile</span>
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
