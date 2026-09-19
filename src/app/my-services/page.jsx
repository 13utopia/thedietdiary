import ServiceCard from '../../components/ServiceCard';
import { services } from '../../data/services';

export const metadata = {
  title: 'Nutrition Services | Shivangi Pancholi',
  description: 'Explore personalized nutrition services including 1-on-1 diet plans, food sensitivity testing, and family wellness packages.',
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <span className="badge">Tailored Programs</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Nutrition Services</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Science-backed diet consultation tailored to your unique biology, daily routine, and health goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
