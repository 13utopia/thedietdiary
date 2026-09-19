import Link from 'next/link';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { blogPosts } from '../data/blogPosts';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <span className="badge">Certified Nutritionist & Dietitian</span>
            <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', color: 'var(--primary-dark)' }}>
              Transform Your Health With Personalized Nutrition
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
              Hi, I&apos;m <strong>Shivangi Pancholi</strong>. I help you achieve lasting wellness, gut balance, and your ideal weight without restrictive starving diets.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/pricing" className="btn-primary">
                Book Your Consultation →
              </Link>
              <Link href="/my-services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div className="glass-card" style={{ padding: '16px', borderRadius: 'var(--radius-lg)', display: 'inline-block' }}>
              <img
                src="/website-images/IMG_5453-600x800.webp"
                alt="Shivangi Pancholi Dietitian"
                style={{ width: '100%', maxWidth: '420px', borderRadius: 'var(--radius-md)', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <span className="badge">Our Expertise</span>
            <h2>Tailored Nutrition Solutions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '12px' }}>
              Whether you want to lose weight, heal gut issues, or improve family nutrition, we create customized strategies tailored to your lifestyle.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section" style={{ background: 'var(--light-sage)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <img
              src="/website-images/Untitled-design-2024-08-05T125025_290-600x783.webp"
              alt="Healthy Balanced Diet"
              style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}
            />
          </div>
          <div>
            <span className="badge">Why Choose Us</span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>No Crash Diets. Real Food. Real Results.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '20px', lineHeight: 1.7 }}>
              Most diets fail because they force you to cut out your traditional foods. My nutrition philosophy builds sustainable habits around your home-cooked daily meals.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              <li style={{ display: 'flex', gap: '12px', fontWeight: 600, color: 'var(--primary-dark)' }}>
                <span>✓</span> Customized Indian & Global meal planning
              </li>
              <li style={{ display: 'flex', gap: '12px', fontWeight: 600, color: 'var(--primary-dark)' }}>
                <span>✓</span> Gut health & metabolic profiling
              </li>
              <li style={{ display: 'flex', gap: '12px', fontWeight: 600, color: 'var(--primary-dark)' }}>
                <span>✓</span> Continuous 1-on-1 guidance & accountability
              </li>
            </ul>
            <Link href="/about" className="btn-primary">
              Read Shivangi&apos;s Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <span className="badge">Success Stories</span>
            <h2>Loved By Hundreds of Happy Clients</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card" style={{ padding: '32px' }}>
                <div style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '12px' }}>
                  {'★'.repeat(t.rating)}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-dark)' }}>{t.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section className="section" style={{ background: 'var(--cream-bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="badge">Latest Articles</span>
              <h2>Nutrition Advice & Recipes</h2>
            </div>
            <Link href="/blog" className="btn-secondary">
              View All Posts →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {blogPosts.map((post) => (
              <div key={post.slug} className="glass-card" style={{ overflow: 'hidden' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '24px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-green)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {post.category}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', margin: '8px 0 12px' }}>{post.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                    {post.summary}
                  </p>
                  <Link href={`/blog/${post.slug}`} style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
