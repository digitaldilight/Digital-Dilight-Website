import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="logo" href="#top">
              <svg className="mark" viewBox="0 0 24 24">
                <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
              </svg>
              <span className="word">
                digital<span>dilight</span>
              </span>
            </a>
            <p>Performance marketing for ambitious businesses that grow on conviction, not guesswork.</p>
            <div className="social-row">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 11v5M8 8v.01M12 16v-3.5a1.8 1.8 0 0 1 3.6 0V16M12 12.5V16" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Studio</h5>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#audience">Who it's for</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="mailto:hello@digitaldilight.com">hello@digitaldilight.com</a>
            <p>Bengaluru, India</p>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 digitaldilight. All rights reserved.</span>
          <span>Built for businesses that grow on conviction.</span>
        </div>
      </div>
    </footer>
  );
};
