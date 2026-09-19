import Link from 'next/link';

export const metadata = {
  title: 'Health & Weight Loss Programs | Shivangi Pancholi',
  description: 'Specialized health programs targeting weight management, gut healing, PCOS, diabetes management, and anti-inflammatory diets.',
};

export default function ProgramsPage() {
  const programs = [
    {
      title: "Sustainable Weight Loss & Fat Loss",
      desc: "Burn fat naturally while keeping your muscle mass and enjoying satisfying home-cooked meals.",
      badge: "Best Seller",
    },
    {
      title: "Gut Healing & Bloating Relief",
      desc: "Comprehensive 4-R gut restoration strategy (Remove, Replace, Reinoculate, Repair).",
      badge: "Popular",
    },
    {
      title: "PCOS & Hormonal Balance",
      desc: "Regulate insulin sensitivity, balance reproductive hormones, and minimize PMS symptoms naturally.",
      badge: "Specialized",
    },
    {
      title: "Diabetes & Pre-Diabetes Management",
      desc: "Control blood glucose levels, reduce HbA1c, and reduce medication dependency through food.",
      badge: "Clinical Care",
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <span className="badge">Structured Pathways</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Health & Wellness Programs</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Targeted health transformations designed around root-cause nutrition principles.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {programs.map((prog, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px' }}>
              <span className="badge" style={{ fontSize: '0.75rem', marginBottom: '12px' }}>{prog.badge}</span>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{prog.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                {prog.desc}
              </p>
              <Link href="/pricing" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Join Program
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
