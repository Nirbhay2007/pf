
import { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating particles animation
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
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/20 to-slate-900/20 z-10"></div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-lg opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-portfolio-accent to-portfolio-primary rounded-lg opacity-25 animate-float-fast"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-float-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="block text-slate-900 dark:text-white">Hi, I'm</span>
            <span className="block gradient-text">Alex Chen</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-light">
            Full-Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional digital experiences that bridge the gap between design and technology. 
            Passionate about creating solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-portfolio-primary/25 animate-pulse-glow">
              View My Work
            </button>
            <button className="px-8 py-4 glass-card dark:glass-card-dark hover:scale-105 transition-all duration-300 font-semibold">
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 glass-card dark:glass-card-dark hover:scale-110 transition-all duration-300 hover:bg-portfolio-primary/10"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 p-2 glass-card dark:glass-card-dark hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
