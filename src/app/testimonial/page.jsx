import { testimonials } from '../../data/testimonials';

export const metadata = {
  title: 'Client Testimonials | Shivangi Pancholi',
  description: 'Read real stories and transformation reviews from clients of dietitian Shivangi Pancholi.',
};

export default function TestimonialsPage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <span className="badge">Verified Reviews</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Client Success Stories</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Real transformations achieved through customized Indian food diets.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '12px' }}>
                {'★'.repeat(t.rating)}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.6 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={t.image}
                  alt={t.name}
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
