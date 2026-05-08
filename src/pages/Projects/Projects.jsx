import React, { useState, useMemo } from 'react';
import './Projects.css';

const CATEGORIES = ['All', 'Web', 'Mobile', 'Brand', 'Software'];

const projects = [
  {
    id: 'ecommerce',
    title: 'ShopLux E-Commerce Platform',
    description:
      'A high-performance storefront with AI-powered recommendations, real-time inventory, and a headless CMS architecture. Handles 50k+ daily transactions.',
    category: 'Web',
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind'],
    icon: '⬡',
    year: '2024',
    featured: true,
  },
  {
    id: 'ai-dashboard',
    title: 'Vela AI Analytics Dashboard',
    description: 'Live data viz platform with drag-and-drop widgets, natural-language querying, and multi-tenant workspaces.',
    category: 'Software',
    tags: ['Vue', 'D3.js', 'Python'],
    icon: '◎',
    year: '2024',
  },
  {
    id: 'banking-app',
    title: 'Noor Mobile Banking',
    description: 'Cross-platform fintech app with biometric auth, instant P2P transfers, and a spend-insight engine.',
    category: 'Mobile',
    tags: ['React Native', 'Node.js'],
    icon: '◇',
    year: '2023',
  },
  {
    id: 'brand-identity',
    title: 'Forma Brand System',
    description: 'Full visual identity — logotype, motion guidelines, design tokens, and a living component library for a SaaS startup.',
    category: 'Brand',
    tags: ['Figma', 'After Effects'],
    icon: '△',
    year: '2023',
  },
  {
    id: 'saas-landing',
    title: 'Orbit SaaS Landing Page',
    description: 'Conversion-optimised landing page with scroll-driven animations and a >4% trial sign-up rate on launch week.',
    category: 'Web',
    tags: ['Astro', 'GSAP', 'Framer'],
    icon: '◈',
    year: '2024',
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 13L13 3M13 3H7M13 3V9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 3H3v10h10v-3M10 2h4v4M14 2L7 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function FeaturedVisual() {
  return (
    <div className="feat-visual">
      <div className="feat-glow" />
      <div className="feat-canvas">
        <div className="mockup-browser">
          <div className="mb-bar">
            <div className="mb-dot" />
            <div className="mb-dot" />
            <div className="mb-dot" />
            <div className="mb-url" />
          </div>
          <div className="mb-body">
            <div className="mb-row mb-row--hero">
              <div className="mb-hero-dot" />
              <div className="mb-hero-lines">
                <div className="mb-hero-line" style={{ width: 80 }} />
                <div className="mb-hero-line" style={{ width: 56 }} />
              </div>
            </div>
            <div className="mb-row mb-row--full" />
            <div className="mb-row mb-row--med" />
            <div className="mb-cards">
              <div className="mb-card" />
              <div className="mb-card" />
              <div className="mb-card" />
            </div>
            <div className="mb-row mb-row--short" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="proj-card">
      {/* Top sweep */}
      <div className="proj-sweep" />

      {/* Visual zone */}
      <div className="proj-visual">
        <div className="proj-vis-art">
          <div className="proj-shape proj-shape--a" />
          <div className="proj-shape proj-shape--b" />
          <div className="proj-shape proj-shape--c" />
          <div className="proj-shape proj-shape--d" />
          <div className="proj-icon-center">{project.icon}</div>
        </div>

        {/* Year chip */}
        <div className="proj-year">{project.year}</div>

        {/* Hover overlay */}
        <div className="proj-overlay">
          <button type="button" className="proj-overlay-btn proj-overlay-btn--solid">
            Live <ExternalIcon />
          </button>
          <button type="button" className="proj-overlay-btn proj-overlay-btn--outline">
            Code <GithubIcon />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="proj-content">
        <div className="proj-category">{project.category}</div>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-foot">
          <div className="proj-stack">
            {project.tags.map((tag) => (
              <span key={tag} className="proj-stack-item">{tag}</span>
            ))}
          </div>
          <span className="proj-link-icon">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const featured = projects.find((p) => p.featured);
  const gridProjects = projects.filter((p) => !p.featured);

  const filteredGrid = useMemo(() => {
    if (activeFilter === 'All') return gridProjects;
    return gridProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter, gridProjects]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* ── Header ── */}
        <header className="projects-header">
          <div>
            <div className="projects-label">
              <span className="projects-label-line" />
              <span>Selected Work</span>
            </div>
            <h2 className="projects-heading">
              Projects that<br /><em>ship and scale.</em>
            </h2>
          </div>
          <p className="projects-subtext">
            A curated set of builds — from product launches to internal tools, each solving a real problem.
          </p>
        </header>

        {/* ── Filters ── */}
        <div className="projects-filters" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeFilter === cat ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              role="tab"
              aria-selected={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured project ── */}
        {(activeFilter === 'All' || activeFilter === featured.category) && (
          <div className="projects-featured" role="article">
            <div className="feat-inner">
              {/* Left — content */}
              <div className="feat-content">
                <div>
                  <div className="feat-badge">
                    <span className="feat-badge-dot" />
                    Featured Project
                  </div>
                  <h3 className="feat-title">{featured.title}</h3>
                  <p className="feat-desc">{featured.description}</p>
                </div>
                <div className="feat-meta">
                  <div className="feat-tags">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="feat-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="feat-actions">
                    <button type="button" className="btn-primary">
                      View Live <ExternalIcon />
                    </button>
                    <button type="button" className="btn-ghost">
                      Source <GithubIcon />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right — visual */}
              <FeaturedVisual />
            </div>
          </div>
        )}

        {/* ── Project grid ── */}
        {filteredGrid.length > 0 && (
          <div className="projects-grid">
            {filteredGrid.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div className="projects-cta">
          <div className="cta-line" />
          <div className="cta-content">
            <span className="cta-text">Want to see more?</span>
            <a href="#contact" className="cta-btn">
              Let's work together
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="cta-line" />
        </div>

      </div>
    </section>
  );
}

export default Projects;