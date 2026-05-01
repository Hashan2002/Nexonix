import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    /* ── scroll handler ── */
    const handleScroll = () => setScrolled(window.scrollY > 40);

    /* ── section observer ── */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-150px 0px -150px 0px', threshold: 0.3 }
    );
    document.querySelectorAll('section').forEach((s) => observer.observe(s));

    /* ── click-outside to close mobile menu ── */
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.querySelectorAll('section').forEach((s) => observer.unobserve(s));
    };
  }, []);

  const close = () => setMenuOpen(false);

  const navItems = [
    { id: 'home',     label: 'Home'     },
    { id: 'about',    label: 'About'    },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="navbar-container" ref={menuRef}>

        {/* ── Logo ── */}
        <div className="logo" aria-label="NEXONIX home">
          NEXONIX<span className="dot">.</span>
        </div>

        {/* ── Nav Links ── */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={close}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}

          {/* CTA */}
          <li>
            <a
              href="#contact"
              className={`nav-cta ${activeSection === 'contact' ? 'active-cta' : ''}`}
              onClick={close}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* ── Hamburger ── */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;