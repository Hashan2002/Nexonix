import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const animatedWords = ['Software', 'Web Apps', 'Mobile Apps', 'Solutions'];

const Home = () => {
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % animatedWords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="hero-container">

                {/* Badge */}
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    🚀 Software Development Company
                </motion.div>

                {/* Headline */}
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Turning Ideas Into
                    <br />
                    Powerful{' '}
                    <span className="hero-animated-word">
                        <motion.span
                            key={currentWord}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {animatedWords[currentWord]}
                        </motion.span>
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    className="hero-subtext"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    We design and build high-quality digital products — from first sketch to shipped product.
                    Your vision, our expertise.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <a href="#contact" className="btn-primary">Get In Touch</a>
                    <a href="#projects" className="btn-secondary">View Our Work</a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    <div className="stat">
                        <h3>50+</h3>
                        <p>Projects Delivered</p>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <h3>30+</h3>
                        <p>Happy Clients</p>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <h3>5+</h3>
                        <p>Years Experience</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Home;