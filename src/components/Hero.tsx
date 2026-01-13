import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${particle.opacity})`;
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60"
      />

      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 dark:from-cyan-400/20 dark:to-blue-500/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 dark:from-purple-400/20 dark:to-pink-500/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-cyan-500/20 animate-fade-in">
          <span className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent">
            Ahmed alaydi
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-light mb-8 text-slate-700 dark:text-slate-300 animate-slide-up-delay-1">
          Full-Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 animate-slide-up-delay-2">
A Full-Stack developer obsessed with crafting smooth, scalable, and beautifully engineered digital experiences. From React and Next.js on the front-end to Laravel and MySQL on the back-end, I build systems that are fast under the hood and polished on the surface. Real-time features, secure payment flows, optimized APIs, and pixel-clean design—this is where I operate. I turn complex ideas into working products that feel simple, intuitive, and reliable.
        </p>

        <div className="flex gap-4 justify-center animate-slide-up-delay-3">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white rounded-full font-medium shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          {/* <a
            href="#contact"
            className="group px-8 py-4 bg-white/50 dark:bg-white/10 backdrop-blur-sm text-slate-900 dark:text-white rounded-full font-medium border border-slate-200 dark:border-white/20 hover:bg-white/80 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a> */}
<a
  href="/Ahmed_Samir.pdf"
  download
  className="group px-8 py-4 bg-white/50 dark:bg-white/10 backdrop-blur-sm text-slate-900 dark:text-white rounded-full font-medium border border-slate-200 dark:border-white/20 hover:bg-white/80 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300"
>
  Download CV
</a>


        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-slate-600 dark:text-slate-400" />
      </a>
    </section>
  );
}
