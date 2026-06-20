import React from 'react';

export const Commitments: React.FC = () => {
  return (
    <section className="section-tight hairline">
      <div className="container">
        <div className="commit-grid reveal">
          <div className="commit-item">
            <div className="num">7 days</div>
            <p>Average time from kickoff to your first live campaign.</p>
          </div>
          <div className="commit-item">
            <div className="num">Weekly</div>
            <p>Creative testing and performance reporting — every single week.</p>
          </div>
          <div className="commit-item">
            <div className="num">1</div>
            <p>Dedicated account manager on your business. No hand-offs, no call centre.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
