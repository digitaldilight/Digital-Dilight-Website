import React from 'react';

export const Process: React.FC = () => {
  return (
    <section className="section hairline" id="process">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span
              className="dot"
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }}
            ></span>
            How we work
          </div>
          <h2>
            From first call to <span className="accent-serif">scaling spend.</span>
          </h2>
          <p>A straight line from audit to growth — no months-long "discovery phase."</p>
        </div>
        <div className="process-grid reveal">
          <div className="process-step">
            <div className="step-num">01</div>
            <h4>Audit</h4>
            <p>We dig into your offer, funnel, and past data to find where profit is leaking.</p>
          </div>
          <div className="process-step">
            <div className="step-num">02</div>
            <h4>Strategy</h4>
            <p>A media plan and creative roadmap built around your numbers, not a template.</p>
          </div>
          <div className="process-step">
            <div className="step-num">03</div>
            <h4>Launch</h4>
            <p>Campaigns, ad creative, and video go live within your first week.</p>
          </div>
          <div className="process-step">
            <div className="step-num">04</div>
            <h4>Scale</h4>
            <p>We double down on what's profitable and kill what isn't — every single week.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
