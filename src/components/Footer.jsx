import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--primary-dark)',
        color: '#ffffff',
        padding: '60px 0 30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Brand Info */}
          <div>
            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '16px' }}>
              Shivangi Pancholi
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Certified Nutritionist & Dietitian empowering you to achieve sustainable health, gut balance, and lasting wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '16px' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }}>About Shivangi</Link></li>
              <li><Link href="/my-services" style={{ color: 'rgba(255,255,255,0.8)' }}>Services</Link></li>
              <li><Link href="/programs" style={{ color: 'rgba(255,255,255,0.8)' }}>Health Programs</Link></li>
              <li><Link href="/diet-plan" style={{ color: 'rgba(255,255,255,0.8)' }}>Diet Plan</Link></li>
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '16px' }}>Client Resources</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/pricing" style={{ color: 'rgba(255,255,255,0.8)' }}>Pricing & Plans</Link></li>
              <li><Link href="/shop" style={{ color: 'rgba(255,255,255,0.8)' }}>Product Showcase</Link></li>
              <li><Link href="/testimonial" style={{ color: 'rgba(255,255,255,0.8)' }}>Client Success Stories</Link></li>
              <li><Link href="/blog" style={{ color: 'rgba(255,255,255,0.8)' }}>Recipes & Blog</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '16px' }}>Contact & Booking</h4>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '8px' }}>
              📞 Phone / WhatsApp: <a href="tel:+918469077410" style={{ color: '#ffffff', fontWeight: 600 }}>+91 84690 77410</a>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
              🌐 Website: <a href="https://thedietdiary.in/" style={{ color: '#ffffff', fontWeight: 600 }}>thedietdiary.in</a>
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
          }}
        >
          © {new Date().getFullYear()} Shivangi Pancholi | The Diet Diary. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
