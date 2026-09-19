import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{service.icon}</div>
      <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>{service.title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', flexGrow: 1 }}>
        {service.description}
      </p>
      {service.features && (
        <ul style={{ listStyle: 'none', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {service.features.map((feat, idx) => (
            <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>✓</span> {feat}
            </li>
          ))}
        </ul>
      )}
      <Link href="/pricing" className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
        Learn More & Book
      </Link>
    </div>
  );
}
