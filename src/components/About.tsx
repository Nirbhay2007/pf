
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '95%', label: 'Success Rate' }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, and cloud platforms.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences with a focus on usability and aesthetics.'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Building fast, scalable applications with best practices and cutting-edge tools.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in agile methodologies and cross-functional team environments.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating 
            meaningful digital experiences that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image & Info */}
          <div className="relative">
            <div className="glass-card dark:glass-card-dark p-8 rounded-2xl">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-portfolio-primary to-portfolio-secondary p-1">
                  <div className="w-full h-full rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Alex Chen"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-portfolio-accent rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold">✨</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-4">Alex Chen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center mb-6">
                Full-Stack Developer & UI/UX Designer based in San Francisco. 
                I love turning complex problems into simple, beautiful solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Location</span>
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Experience</span>
                  <span className="font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Availability</span>
                  <span className="font-medium text-green-500">Open to Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  I started my journey in tech 5 years ago with a simple goal: to create 
                  digital experiences that people love to use. What began as curiosity 
                  about how websites work has evolved into a passion for building 
                  comprehensive solutions that bridge design and development.
                </p>
                <p>
                  I specialize in React, Node.js, and modern web technologies, but I'm 
                  always learning new tools and techniques. I believe in writing clean, 
                  maintainable code and creating intuitive user interfaces that solve 
                  real problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, 
                  contributing to open-source projects, or hiking in the beautiful 
                  Bay Area mountains.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="glass-card dark:glass-card-dark p-4 rounded-xl hover:scale-105 transition-all duration-300">
                    <item.icon className="h-8 w-8 text-portfolio-primary mb-3" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-card dark:glass-card-dark p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
