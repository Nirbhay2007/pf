
import { useEffect, useRef } from 'react';

const Skills = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: '#61DAFB' },
        { name: 'TypeScript', level: 90, color: '#3178C6' },
        { name: 'Next.js', level: 88, color: '#000000' },
        { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
        { name: 'Three.js', level: 75, color: '#000000' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: '#339933' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'PostgreSQL', level: 82, color: '#336791' },
        { name: 'MongoDB', level: 80, color: '#47A248' },
        { name: 'GraphQL', level: 78, color: '#E10098' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Docker', level: 75, color: '#2496ED' },
        { name: 'AWS', level: 70, color: '#FF9900' },
        { name: 'Figma', level: 85, color: '#F24E1E' },
        { name: 'Blender', level: 65, color: '#F5792A' }
      ]
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D floating icons animation
    const icons: Array<{
      x: number;
      y: number;
      z: number;
      rotationX: number;
      rotationY: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      speedRotation: number;
    }> = [];

    const colors = ['#6366f1', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981'];

    for (let i = 0; i < 20; i++) {
      icons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100,
        rotationX: 0,
        rotationY: 0,
        size: Math.random() * 20 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        speedRotation: (Math.random() - 0.5) * 0.05
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      icons.forEach((icon) => {
        icon.x += icon.speedX;
        icon.y += icon.speedY;
        icon.rotationX += icon.speedRotation;
        icon.rotationY += icon.speedRotation * 0.7;

        if (icon.x < 0 || icon.x > canvas.width) icon.speedX *= -1;
        if (icon.y < 0 || icon.y > canvas.height) icon.speedY *= -1;

        const scale = 1 + icon.z / 200;
        const alpha = 0.3 + (icon.z / 200);

        ctx.save();
        ctx.translate(icon.x, icon.y);
        ctx.scale(scale, scale);
        ctx.globalAlpha = alpha;

        // Draw a simple 3D-looking cube
        ctx.fillStyle = icon.color;
        ctx.fillRect(-icon.size / 2, -icon.size / 2, icon.size, icon.size);
        
        ctx.fillStyle = icon.color + '80'; // Semi-transparent
        ctx.fillRect(-icon.size / 2 + 3, -icon.size / 2 + 3, icon.size, icon.size);

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I work with modern technologies to build scalable, performant applications 
            that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card dark:glass-card-dark p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out relative"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'Python', 'React', 'Vue.js', 'Angular', 'Node.js', 
              'Express', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL',
              'REST APIs', 'Docker', 'Kubernetes', 'AWS', 'Vercel', 'Figma',
              'Adobe XD', 'Photoshop', 'Blender', 'Three.js', 'GSAP'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 glass-card dark:glass-card-dark rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 hover:bg-portfolio-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
