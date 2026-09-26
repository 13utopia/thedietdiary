'use client';

import { transformations } from '../data/transformations';
import useElementorFadeIn from './useElementorFadeIn';

/**
 * Before → after — Elementor image + heading + text columns (no app-style metric cards).
 */
export default function TransformationsBanner() {
  const { ref } = useElementorFadeIn('fadeInUp');

  return (
    <section
      ref={ref}
      id="transformations"
      className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default dd-e-white dd-e-xform"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100">
          <div className="elementor-widget-wrap elementor-element-populated" style={{ textAlign: 'center' }}>
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default dd-e-title">
                  Before &amp; After
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p>
                  Measurable change from home-cooked Indian food and 1-on-1 guidance — not boiled diets
                  or one-week challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="elementor-container elementor-column-gap-extended dd-e-xform-grid">
        {transformations.map((item) => (
          <div key={item.id} className="elementor-column elementor-col-33 dd-e-xform-col">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={640}
                    height={720}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="elementor-element elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default dd-e-subhead">
                    {item.result}
                  </h3>
                </div>
              </div>

              <div className="elementor-element elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>
                    <strong>
                      {item.before.label} {item.before.value}
                      {item.before.note ? ` (${item.before.note})` : ''}
                    </strong>
                    {' → '}
                    <strong style={{ color: '#30624E' }}>
                      {item.after.label} {item.after.value}
                      {item.after.note ? ` (${item.after.note})` : ''}
                    </strong>
                  </p>
                  <p>
                    <em>
                      {item.name} · {item.focus}
                    </em>
                  </p>
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100">
          <div className="elementor-widget-wrap elementor-element-populated" style={{ textAlign: 'center' }}>
            <div className="elementor-element elementor-align-center elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                    href="https://wa.me/918469077410?text=Hi%20Shivangi,%20I%20want%20a%20plan%20like%20your%20client%20transformations!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">Start Your Transformation</span>
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
