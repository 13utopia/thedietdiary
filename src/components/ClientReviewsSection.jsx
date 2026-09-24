'use client';

import { useEffect, useState } from 'react';
import { testimonials as seedTestimonials } from '../data/testimonials';
import useElementorFadeIn from './useElementorFadeIn';

const emptyForm = {
  name: '',
  city: '',
  rating: 5,
  quote: '',
};

/** Client stories + review form — Elementor section markup */
export default function ClientReviewsSection() {
  const { ref } = useElementorFadeIn('fadeInUp');
  const [userReviews, setUserReviews] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/reviews/', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && Array.isArray(data.reviews)) setUserReviews(data.reviews);
      } catch {
        /* keep seeds */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const allReviews = [...userReviews, ...seedTestimonials];

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await fetch('/api/reviews/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          role: form.city,
          rating: form.rating,
          quote: form.quote,
          result: '',
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Could not submit review.' });
        return;
      }
      setUserReviews((prev) => [data.review, ...prev]);
      setForm(emptyForm);
      setStatus({ type: 'success', message: 'Thank you — your review is live.' });
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section
        ref={ref}
        id="client-stories"
        className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default dd-e-white"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-heading" style={{ textAlign: 'center' }}>
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default dd-e-title-green">
                    Real Clients, Genuine Results
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-container elementor-column-gap-extended dd-e-review-grid">
          {allReviews.map((item) => (
            <div key={item.id} className="elementor-column elementor-col-50 dd-e-review-col">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <img
                      src={item.image || '/website-images/gesunde-ernaehrung.webp'}
                      alt={item.hasFace ? `${item.name} – Diet Diary client` : `${item.name} – client story`}
                      loading="lazy"
                      decoding="async"
                      width={item.hasFace ? 480 : 640}
                      height={item.hasFace ? 600 : 420}
                      className={item.hasFace ? 'dd-e-img-portrait' : 'dd-e-img-wide'}
                    />
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default dd-e-review-name">{item.name}</h3>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    {item.role ? (
                      <p>
                        <em>{item.role}</em>
                      </p>
                    ) : null}
                    {item.result ? (
                      <p>
                        <strong style={{ color: '#30624E' }}>{item.result}</strong>
                      </p>
                    ) : null}
                    <p>“{item.quote}”</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="post-review" className="dd-review-form-section">
        <div className="dd-review-form">
          <h2 className="dd-review-form__title">Leave a Review</h2>

          <form className="dd-review-form__fields" onSubmit={handleSubmit}>
            <div className="dd-review-form__row">
              <label className="dd-review-form__field">
                <span>Name *</span>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </label>
              <label className="dd-review-form__field">
                <span>City</span>
                <input
                  type="text"
                  maxLength={120}
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Your city"
                />
              </label>
            </div>

            <div className="dd-review-form__field">
              <span>Your rating</span>
              <div className="dd-review-form__stars" role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={form.rating === n}
                    aria-label={`${n} star${n > 1 ? 's' : ''}`}
                    className={n <= form.rating ? 'is-on' : ''}
                    onClick={() => setForm({ ...form, rating: n })}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <label className="dd-review-form__field">
              <span>Your review *</span>
              <textarea
                required
                minLength={20}
                maxLength={900}
                rows={5}
                value={form.quote}
                onChange={(e) => setForm({ ...form, quote: e.target.value })}
                placeholder="Share your experience…"
              />
            </label>

            {status.message ? (
              <p className={`dd-review-form__status is-${status.type}`}>{status.message}</p>
            ) : null}

            <button type="submit" className="dd-review-form__submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit Review'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
