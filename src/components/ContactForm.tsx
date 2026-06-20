import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [adSpend, setAdSpend] = useState('Not spending on ads yet');
  const [whatYouSell, setWhatYouSell] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name,
      phone,
      email,
      adSpend,
      whatYouSell,
      timestamp: new Date().toISOString(),
    };

    const sheetUrl = import.meta.env.VITE_LEADS_SHEET_URL;

    try {
      if (sheetUrl && sheetUrl !== 'REPLACE_WITH_APPS_SCRIPT_URL') {
        await fetch(sheetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(formData),
        });
      } else {
        console.warn('VITE_LEADS_SHEET_URL is not configured. Submission bypassed to console:', formData);
      }
    } catch (error) {
      console.error('Failed to submit form data to Google Sheets:', error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta-section reveal">
          <div className="cta-copy">
            <div className="eyebrow">
              <span
                className="dot"
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }}
              ></span>
              Let's talk
            </div>
            <h2>
              Ready to make your ads <span className="accent-serif">build empires?</span>
            </h2>
            <p>
              Tell us about your business. If we're a fit, you'll hear from us within one business day — no auto-reply, no sales script.
            </p>
            <div className="cta-contact">
              <a href="mailto:hello@digitaldilight.com">hello@digitaldilight.com</a>
              <a href="tel:+910000000000">+91 00000 00000</a>
            </div>
          </div>

          {submitted ? (
            <div
              className="form-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: '300px',
              }}
            >
              <h3
                style={{
                  color: 'var(--gold)',
                  fontSize: '22px',
                  marginBottom: '12px',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Got it — talk soon!
              </h3>
              <p style={{ color: 'var(--paper)', fontSize: '15px', lineHeight: '1.5' }}>
                Thanks — we'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form className="form-card" id="leadForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="nameInput">Full name</label>
                  <input
                    id="nameInput"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="phoneInput">Phone</label>
                  <input
                    id="phoneInput"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="field full">
                  <label htmlFor="emailInput">Email</label>
                  <input
                    id="emailInput"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="field full">
                  <label htmlFor="adSpendSelect">Current monthly ad spend</label>
                  <select
                    id="adSpendSelect"
                    value={adSpend}
                    onChange={(e) => setAdSpend(e.target.value)}
                  >
                    <option>Not spending on ads yet</option>
                    <option>₹0 – 1L</option>
                    <option>₹1L – 5L</option>
                    <option>₹5L – 10L</option>
                    <option>₹10L+</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="field full">
                  <label htmlFor="whatYouSellText">What do you sell?</label>
                  <textarea
                    id="whatYouSellText"
                    placeholder="A line or two about your business"
                    value={whatYouSell}
                    onChange={(e) => setWhatYouSell(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
              <button className="btn btn-solid" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send it over'}
              </button>
              <p className="form-note">We reply to every single submission. No spam, ever.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
