import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="top">
      <div className="beam"></div>
      <div className="hero-glow"></div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=70"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.07, filter: 'saturate(0)' }}
        />
      </div>
      <div className="container hero-inner">
        <div className="eyebrow">
          <svg className="spark" width="14" height="14" viewBox="0 0 24 24">
            <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
          </svg>
          Performance marketing for ambitious businesses that want to grow
        </div>
        <h1>
          Your growth,<br />
          <span className="accent-serif">illuminated.</span>
        </h1>
        <p className="lede">
          digitaldilight runs your media buying, builds your creative, and shoots your video — every rupee in, tracked all the way through to profit out. Built for businesses of every kind that are serious about growth.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-solid btn-animate" href="#contact">
            Book a strategy call{' '}
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="btn btn-ghost btn-animate" href="#services">
            See what we do
          </a>
        </div>
        <div className="capability-row">
          <span className="chip">
            <span className="dot"></span>Meta Ads
          </span>
          <span className="chip">
            <span className="dot"></span>Google Ads
          </span>
          <span className="chip">
            <span className="dot"></span>Ad Creative &amp; Copy
          </span>
          <span className="chip">
            <span className="dot"></span>Video Production
          </span>
        </div>
      </div>
    </section>
  );
};
