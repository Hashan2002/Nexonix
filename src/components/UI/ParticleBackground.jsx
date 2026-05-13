import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ACCENT = '0,201,167';
const COUNT = 80;
const MAX_DIST = 120;
const MOUSE_DIST = 150;

export default function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];
        let mouse = { x: -999, y: -999 };

        const rand = (a, b) => Math.random() * (b - a) + a;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticle = () => ({
            x: rand(0, canvas.width),
            y: rand(0, canvas.height),
            vx: rand(-0.3, 0.3),
            vy: rand(-0.3, 0.3),
            r: rand(1.2, 2.6),
            opacity: rand(0.3, 0.8),
        });

        const init = () => {
            resize();
            particles = Array.from({ length: COUNT }, createParticle);
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const md = Math.sqrt(dx * dx + dy * dy);
                const opacity = md < MOUSE_DIST ? Math.min(1, p.opacity + 0.3) : p.opacity;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${ACCENT},${opacity})`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dist = Math.hypot(p.x - q.x, p.y - q.y);
                    if (dist < MAX_DIST) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(${ACCENT},${(1 - dist / MAX_DIST) * 0.18})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }

                if (md < MOUSE_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(${ACCENT},${(1 - md / MOUSE_DIST) * 0.35})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }

            animId = requestAnimationFrame(draw);
        };

        const onMouseMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
        const onMouseLeave = () => { mouse.x = -999; mouse.y = -999; };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('resize', init);

        init();
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('resize', init);
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-canvas" />;
}