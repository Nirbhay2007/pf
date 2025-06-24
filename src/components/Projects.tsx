
import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: '3D Portfolio Website',
      description: 'An interactive 3D portfolio built with Three.js and React. Features immersive animations, WebGL effects, and responsive design.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'WebGL'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content generation tool using OpenAI API. Features include text generation, image creation, and content optimization.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Tailwind CSS', 'Vercel'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather analytics dashboard with interactive charts, forecasting, and location-based weather data visualization.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
      technologies: ['React', 'D3.js', 'Weather API', 'Chart.js', 'Material-UI'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Crypto Trading Bot',
      description: 'An automated cryptocurrency trading bot with backtesting capabilities, real-time market analysis, and risk management features.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040',
      technologies: ['Python', 'FastAPI', 'Redis', 'Binance API', 'Machine Learning'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies 
            and innovative problem-solving approaches.
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="relative mb-20">
          <div className="glass-card dark:glass-card-dark rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-96 overflow-hidden">
                <img
                  src={`${projects[currentProject].image}?w=800&h=600&fit=crop`}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm font-medium mb-4">
                    Featured Project
                  </span>
                  <h3 className="text-3xl font-bold mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={projects[currentProject].live}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                  <a
                    href={projects[currentProject].github}
                    className="flex items-center gap-2 px-6 py-3 glass-card dark:glass-card-dark hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    <Github className="h-5 w-5" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-card dark:glass-card-dark rounded-full hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-card dark:glass-card-dark rounded-full hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-portfolio-primary scale-125'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-portfolio-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.slice(3).map((project, index) => (
              <div
                key={index}
                className="glass-card dark:glass-card-dark rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${project.image}?w=400&h=300&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <a
                        href={project.live}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href={project.github}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
