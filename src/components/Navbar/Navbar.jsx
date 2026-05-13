import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef(null);

  /* ── Scroll handler: scrolled flag + progress bar ── */
  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    setScrolled(y > 40);
    setScrollProgress(max > 0 ? (y / max) * 100 : 0);
  }, []);

  /* ── Section observer ── */
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) setActiveSection(entry.target.id);
  //       });
  //     },
  //     { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
  //   );
  //   document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    const handleSectionDetect = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY + 120; // offset for navbar height

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleSectionDetect, { passive: true });
    handleSectionDetect(); // run on mount

    return () => window.removeEventListener('scroll', handleSectionDetect);
  }, []);;

  /* ── Scroll + click-outside listeners ── */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll]);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Smooth scroll on link click ── */
  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  /* ── Keyboard: close menu on Escape ── */
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      aria-label="Main navigation"
    >
      {/* ── Scroll progress bar ── */}
      <div
        className="navbar-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="navbar-container" ref={menuRef}>

        {/* ── Logo ── */}
        <a
          href="#home"
          className="logo"
          aria-label="NEXONIX — back to top"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          NEXONIX<span className="logo-dot">.</span>
        </a>

        {/* ── Desktop + Mobile Nav Links ── */}
        <ul
          id="nav-links"
          className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}
          role="menubar"
        >
          {navItems.map(({ id, label }, i) => (
            <li
              key={id}
              role="none"
              style={{ '--stagger': i }}
            >
              <a
                href={`#${id}`}
                role="menuitem"
                className={`nav-link ${activeSection === id ? 'nav-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, id)}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
                <span className="nav-link-underline" aria-hidden="true" />
              </a>
            </li>
          ))}

          {/* ── CTA button ── */}
          <li role="none" style={{ '--stagger': navItems.length }}>
            <a
              href="#contact"
              role="menuitem"
              className={`nav-cta ${activeSection === 'contact' ? 'nav-cta--active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* ── Mobile overlay backdrop ── */}
        <div
          className={`nav-backdrop ${menuOpen ? 'nav-backdrop--show' : ''}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* ── Hamburger ── */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span className="bar bar--top" />
          <span className="bar bar--mid" />
          <span className="bar bar--bot" />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;