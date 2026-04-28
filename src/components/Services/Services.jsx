import React, { useState } from 'react';
import './Services.css';

const servicesList = [
  {
    icon: '⬡',
    title: 'Web Design & Development',
    description: 'Pixel-perfect, responsive websites crafted with performance and purpose — built to convert visitors into clients.',
    tags: ['React', 'Next.js', 'Tailwind'],
    featured: true,
  },
  {
    icon: '◈',
    title: 'UI/UX Design',
    description: 'Intuitive interfaces grounded in user psychology. Every interaction is intentional, every flow frictionless.',
    tags: ['Figma', 'Prototyping'],
  },
  {
    icon: '◎',
    title: 'Digital Marketing',
    description: 'Data-driven strategies that amplify reach and generate measurable results across channels.',
    tags: ['SEO', 'Analytics'],
  },
  {
    icon: '⬢',
    title: 'Software Development',
    description: 'Scalable, maintainable software engineered for complexity — from MVPs to enterprise-grade systems.',
    tags: ['Node.js', 'Python'],
  },
  {
    icon: '△',
    title: 'Brand Identity',
    description: 'A brand is a story told consistently. We craft your visual language from the ground up.',
    tags: ['Logo', 'Strategy'],
  },
  {
    icon: '◇',
    title: 'Mobile App Development',
    description: 'Cross-platform iOS and Android apps with native-grade performance and a design that users love.',
    tags: ['React Native', 'Flutter'],
    wide: true,
  },
];

function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <header className="services-header">
          <div className="services-label">
            <span className="services-label-line" />
            <span>What I Offer</span>
          </div>
          <div className="services-title-row">
            <h2 className="services-heading">
              Capabilities built<br />for the modern web.
            </h2>
            <p className="services-subtext">
              End-to-end digital solutions — from first sketch to shipped product.
            </p>
          </div>
        </header>

        <div className="services-bento">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`svc-card ${service.featured ? 'svc-card--featured' : ''} ${service.wide ? 'svc-card--wide' : ''} ${hovered === index ? 'svc-card--active' : ''}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Ghost number watermark */}
              <div className="svc-watermark" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Top accent sweep */}
              <div className="svc-sweep" />

              <div className="svc-card-inner">
                {/* Header row */}
                <div className="svc-card-top">
                  <div className="svc-icon-box">
                    <span className="svc-icon">{service.icon}</span>
                  </div>
                  
                </div>

                {/* Content */}
                <div className="svc-card-body">
                  <h3 className="svc-title">{service.title}</h3>
                  <p className="svc-desc">{service.description}</p>
                </div>

                {/* Footer */}
                <div className="svc-card-foot">
                  <div className="svc-tags">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="svc-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="svc-arrow">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 13L13 3M13 3H7M13 3V9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;