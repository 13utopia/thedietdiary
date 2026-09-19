import { pricingPlans } from '../../data/pricing';

export const metadata = {
  title: 'Pricing & Consultation Packages | Shivangi Pancholi',
  description: 'Transparent pricing for 1-month, 3-month, and family nutrition plans.',
};

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <span className="badge">Transparent Pricing</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Consultation & Diet Packages</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Choose the program duration that fits your health and wellness goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="glass-card"
              style={{
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                border: plan.popular ? '2px solid var(--accent-green)' : '1px solid rgba(70, 137, 108, 0.15)',
              }}
            >
              {plan.popular && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    right: '24px',
                    background: 'var(--primary-dark)',
                    color: '#ffffff',
                    padding: '4px 14px',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Most Popular
                </span>
              )}
              <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>{plan.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>{plan.duration}</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '16px' }}>
                {plan.price}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', flexGrow: 1 }}>
                {plan.description}
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '0.9rem', display: 'flex', gap: '8px', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>✓</span> {feat}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/918469077410?text=Hi%20Shivangi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
