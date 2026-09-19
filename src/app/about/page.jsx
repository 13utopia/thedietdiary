import Link from 'next/link';

export const metadata = {
  title: 'About Shivangi Pancholi | Certified Nutritionist',
  description: 'Learn about Shivangi Pancholi, her qualifications, nutrition philosophy, and passion for gut health and sustainable weight loss.',
};

export default function AboutPage() {
  return (
    <section className="section" style={{ padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge">Meet Your Nutritionist</span>
          <h1 style={{ fontSize: '2.6rem', marginBottom: '16px' }}>Shivangi Pancholi</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
            Certified Dietitian, Gut Health Specialist & Weight Management Consultant
          </p>
        </div>

        <div className="glass-card" style={{ padding: '40px', marginBottom: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <img
              src="/website-images/IMG_5453-600x800.webp"
              alt="Shivangi Pancholi"
              style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}
            />
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>My Health Philosophy</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                Health is not about perfection or deprivation—it is about nourishing your body with nutrient-dense foods while honoring your cultural palate.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                With years of clinical nutrition experience, I have helped clients overcome chronic digestive distress, PCOS, diabetes markers, and stuborn weight plateaus.
              </p>
              <Link href="/pricing" className="btn-primary">
                Book 1-on-1 Consultation
              </Link>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎓</div>
            <h4>Certified Expertise</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
              Qualified in Clinical Nutrition & Dietetics with specialized training in metabolic health.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🥗</div>
            <h4>Sustainable Habit Building</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
              No exotic ingredients required—we work with your existing kitchen spices and staple foods.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💬</div>
            <h4>Ongoing 1-on-1 Support</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>
              Direct access via WhatsApp and weekly video reviews to keep you accountable and motivated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
