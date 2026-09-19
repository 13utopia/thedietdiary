import Link from 'next/link';

export const metadata = {
  title: 'Customized Diet Plans | Shivangi Pancholi',
  description: 'Get a personalized diet chart designed for your daily routine, food preferences, and metabolic rate.',
};

export default function DietPlanPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '880px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge">Customized Blueprint</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Your Personalized Diet Plan</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            No two bodies are identical. Discover how our custom diet charts fit effortlessly into your day.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>How We Build Your Diet Plan</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '24px' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-green)', marginBottom: '8px' }}>01. Intake</div>
              <h4>Detailed Health History</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>We analyze medical reports, food allergies, and daily schedule.</p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-green)', marginBottom: '8px' }}>02. Design</div>
              <h4>Custom Meal Chart</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Breakfast, lunch, snacks, and dinner planned with exact macros.</p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-green)', marginBottom: '8px' }}>03. Refine</div>
              <h4>Weekly Adjustments</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>We adapt your diet chart based on progress and feedback.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/pricing" className="btn-primary">
              Get Your Custom Diet Plan Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
