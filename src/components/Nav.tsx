import React, { useState, useEffect } from 'react';

export const Nav: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('nav-open');
      document.body.style.overflow = 'hidden'; // Lock page scroll
    } else {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = ''; // Restore page scroll
    }
    // Clean up classes and styles on unmount
    return () => {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const toggleMenu = () => setIsNavOpen(prev => !prev);
  const closeMenu = () => setIsNavOpen(false);

  return (
    <>
      <header>
        <nav>
          <a className="logo" href="#top" onClick={closeMenu}>
            <svg className="mark" viewBox="0 0 24 24">
              <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
            </svg>
            <span className="word">
              digital<span>dilight</span>
            </span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#audience">Who it's for</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-cta">
            <a className="btn btn-ghost" href="mailto:hello@digitaldilight.com">
              hello@digitaldilight.com
            </a>
            <a className="btn btn-solid" href="#contact">
              Book a strategy call
            </a>
            <button
              className="burger"
              id="burgerBtn"
              aria-label="Open menu"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Render outside <header> to avoid backdrop-filter stacking/blending issues */}
      <div
        className="mobile-panel"
        id="mobilePanel"
        style={{
          display: isNavOpen ? 'flex' : 'none',
          background: 'var(--ink-2)',
          position: 'fixed',
          top: '65px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
        }}
      >
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#audience" onClick={closeMenu}>Who it's for</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a
          className="btn btn-solid"
          href="#contact"
          style={{ width: 'max-content' }}
          onClick={closeMenu}
        >
          Book a strategy call
        </a>
      </div>
    </>
  );
};
