'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMenu = () => setMobileNavOpen((prev) => !prev);
  const closeMenu = () => setMobileNavOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        background: 'rgba(251, 249, 244, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(70, 137, 108, 0.15)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        {/* Brand Logo */}
        <Link href="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/website-images/Shivangi-Pancholi-Logo.webp"
            alt="Shivangi Pancholi Nutritionist Logo"
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <Link href="/" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Home</Link>
          <Link href="/about" style={{ fontWeight: 600, fontSize: '0.95rem' }}>About</Link>
          <Link href="/my-services" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Services</Link>
          <Link href="/programs" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Programs</Link>
          <Link href="/diet-plan" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Diet Plan</Link>
          <Link href="/pricing" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Pricing</Link>
          <Link href="/shop" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Shop</Link>
          <Link href="/blog" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Blog</Link>
          <Link href="/pricing" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.8rem',
            color: 'var(--primary-dark)',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          {mobileNavOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileNavOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: 0,
            width: '100%',
            maxWidth: '320px',
            height: 'calc(100vh - 80px)',
            background: '#1b4031',
            color: '#ffffff',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: '-4px 0 20px rgba(0,0,0,0.2)',
            zIndex: 99999,
          }}
        >
          <Link href="/" onClick={closeMenu} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Home</Link>
          <Link href="/about" onClick={closeMenu} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>About Shivangi</Link>
          <Link href="/my-services" onClick={closeMenu} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Services</Link>
          <Link href="/programs" onClick={closeMenu} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Programs</Link>
          <Link href="/diet-plan" onClick={closeMenu} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Diet Plan</Link>
          <Link href="/pricing" onClick={closeMenu} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Pricing & Packages</Link>
          <Link href="/shop" onClick={closeMenu} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Shop</Link>
          <Link href="/blog" onClick={closeMenu} style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Blog & Recipes</Link>
          <div style={{ marginTop: '12px' }}>
            <Link href="/pricing" onClick={closeMenu} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Book Consultation
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 992px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-toggle-btn) {
            display: block !important;
          }
        }
        @media (min-width: 993px) {
          :global(.mobile-toggle-btn) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
