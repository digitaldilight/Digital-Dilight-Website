import React from 'react';

export const Audience: React.FC = () => {
  return (
    <section className="section" id="audience">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span
              className="dot"
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }}
            ></span>
            Who it's for
          </div>
          <h2>
            Built for businesses that <span className="accent-serif">are ready to scale.</span>
          </h2>
          <p style={{ color: 'var(--ash)', marginTop: '16px', fontSize: '16.5px' }}>
            We work with any business that has a real offer and is serious about growth — regardless of industry.
          </p>
        </div>

        {/* Industry image strip */}
        <div
          className="reveal"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '48px' }}
        >
          <div style={{ borderRadius: '14px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75"
              alt="Coaching"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.7)' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '14px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--gold-soft)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Coaches
            </span>
          </div>
          <div style={{ borderRadius: '14px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=75"
              alt="E-commerce"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.7)' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '14px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--gold-soft)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              E-commerce
            </span>
          </div>
          <div style={{ borderRadius: '14px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=75"
              alt="Healthcare"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.7)' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '14px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--gold-soft)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Healthcare
            </span>
          </div>
          <div style={{ borderRadius: '14px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=75"
              alt="Tech & SaaS"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.7)' }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '14px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--gold-soft)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Tech &amp; SaaS
            </span>
          </div>
        </div>
        <div className="audience-grid reveal">
          <div className="audience-card">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
              </svg>
            </div>
            <h4>Coaches &amp; Course Creators</h4>
            <p>
              You sell expertise and outcomes. We turn that into ads people trust enough to click, and funnels that turn clicks into paying students.
            </p>
          </div>
          <div className="audience-card">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a4 4 0 0 1 8 0v2" />
              </svg>
            </div>
            <h4>D2C &amp; E-commerce Brands</h4>
            <p>
              Product-led ads, tight CPAs, and creative that gets refreshed before fatigue sets in — built for catalogues that need to move.
            </p>
          </div>
          <div className="audience-card">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M3 12 L12 4 L21 12" />
                <path d="M6 11 V20 H18 V11" />
              </svg>
            </div>
            <h4>Service-Based Businesses</h4>
            <p>
              Clinics, consultants, law firms, studios, agencies — we fill pipelines with qualified leads and cut the cost of acquiring every single one.
            </p>
          </div>
          <div className="audience-card">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M6 9l3 3 4-4 4 4" />
              </svg>
            </div>
            <h4>SaaS &amp; Tech Brands</h4>
            <p>
              Subscription growth, free-to-paid conversion, or enterprise pipeline — we engineer paid acquisition that compounds month on month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
