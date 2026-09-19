import Link from 'next/link';
import { services } from '../../data/services';

export const metadata = {
  title: 'Wellness Shop & Programs | Shivangi Pancholi',
  description: 'Browse nutrition counselling packages, meal blueprints, and wellness guides.',
};

export default function ShopPage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <span className="badge">Wellness Catalog</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Shop Consultation Packages</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Direct booking for 1-on-1 nutrition consultations and family wellness packages.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {services.map((item) => (
            <div key={item.id} className="glass-card" style={{ padding: '28px' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}
              />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                {item.description}
              </p>
              <Link href="/pricing" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Select Package
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
