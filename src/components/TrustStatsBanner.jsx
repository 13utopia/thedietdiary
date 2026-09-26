'use client';

import useElementorFadeIn from './useElementorFadeIn';

/** Sage strip — same token as Elementor section 64c66d6a (#C9D8BF) */
export default function TrustStatsBanner() {
  const { ref } = useElementorFadeIn('fadeInUp');

  const items = [
    { num: '500+', label: 'Clients guided' },
    { num: '100%', label: 'Home-cooked Indian food' },
    { num: 'Online', label: 'Consultations across India' },
    { num: '1-on-1', label: 'PCOS, gut & metabolic care' },
  ];

  return (
    <section
      ref={ref}
      className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default dd-e-sage"
    >
      <div className="elementor-container elementor-column-gap-default">
        {items.map((item) => (
          <div key={item.label} className="elementor-column elementor-col-25">
            <div
              className="elementor-widget-wrap elementor-element-populated"
              style={{ textAlign: 'center' }}
            >
              <div className="elementor-element elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default dd-e-title">
                    {item.num}
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p className="dd-e-stat-label">{item.label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
