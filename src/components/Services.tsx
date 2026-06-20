import React from 'react';

export const Services: React.FC = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span
              className="dot"
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }}
            ></span>
            What we do
          </div>
          <h2>
            Three engines.<br />
            One outcome — <span className="accent-serif">profit.</span>
          </h2>
          <p>
            We don't sell "services." We run the parts of your marketing that actually move profit, and we own the outcome together.
          </p>
        </div>

        <div className="service reveal">
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              alt="Performance marketing analytics"
            />
            <span className="service-tag">01 — Media buying</span>
            <div className="service-badge">
              <svg viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
          </div>
          <div className="service-copy">
            <h3>Performance Marketing</h3>
            <p>
              Boost your monthly profits and outrank your competition with account managers experienced across industries. We handle media buying for you across Meta &amp; Google — daily optimisation, not "set and forget."
            </p>
            <div className="tag-list">
              <span>Meta Ads</span>
              <span>Google Ads</span>
              <span>Funnel &amp; Offer Strategy</span>
              <span>Weekly Reporting</span>
            </div>
          </div>
        </div>

        <div className="service reveal">
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80"
              alt="Creative advertising design"
            />
            <span className="service-tag">02 — Creative that converts</span>
            <div className="service-badge">
              <svg viewBox="0 0 24 24">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
          </div>
          <div className="service-copy">
            <h3>Content &amp; Creative Services</h3>
            <p>
              Maximise ROI with data-driven copy and clever design. We create and design ads built to win the click — high CTR, low CPA — then keep testing until they win it again.
            </p>
            <div className="tag-list">
              <span>Ad Copywriting</span>
              <span>Static &amp; Carousel Design</span>
              <span>A/B Creative Testing</span>
              <span>Landing Pages</span>
            </div>
          </div>
        </div>

        <div className="service reveal">
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1579566346927-c68383817a25?w=800&q=80"
              alt="Video production shoot"
            />
            <span className="service-tag">03 — Scroll-stopping video</span>
            <div className="service-badge">
              <svg viewBox="0 0 24 24">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
              </svg>
            </div>
          </div>
          <div className="service-copy">
            <h3>Video Production &amp; Post Production</h3>
            <p>
              Generate high impact with high-quality, scroll-stopping video. We manage your ad shoots end to end — scripting, shooting, and editing — so every video is built to perform, not just look good.
            </p>
            <div className="tag-list">
              <span>Scripting</span>
              <span>Shoot Direction</span>
              <span>Editing &amp; VFX</span>
              <span>Hooks for every platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
