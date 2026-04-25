import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -150px 0px',
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" ref={menuRef}>

        <div className="logo">
          NEXONIX<span className="dot">.</span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home"     className={activeSection === 'home'     ? 'active' : ''} onClick={close}>Home</a></li>
          <li><a href="#about"    className={activeSection === 'about'    ? 'active' : ''} onClick={close}>About</a></li>
          <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={close}>Services</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={close}>Projects</a></li>
          <li>
            <a
              href="#contact"
              className={`nav-cta ${activeSection === 'contact' ? 'active-cta' : ''}`}
              onClick={close}
            >
              Contact Us
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;