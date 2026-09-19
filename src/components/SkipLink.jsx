'use client';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40px',
        left: 0,
        background: '#1b4031',
        color: '#ffffff',
        padding: '8px 16px',
        zIndex: 100000,
        transition: 'top 0.3s ease',
        fontWeight: 600,
      }}
      onFocus={(e) => (e.target.style.top = '0px')}
      onBlur={(e) => (e.target.style.top = '-40px')}
    >
      Skip to content
    </a>
  );
}
