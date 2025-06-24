
import { Code, Palette, Rocket, Users, MapPin, Calendar, CheckCircle, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience', icon: Calendar },
    { number: '50+', label: 'Projects Completed', icon: CheckCircle },
    { number: '30+', label: 'Happy Clients', icon: Users },
    { number: '95%', label: 'Success Rate', icon: Award }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, and cloud platforms.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences with a focus on usability and aesthetics.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Building fast, scalable applications with best practices and cutting-edge tools.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in agile methodologies and cross-functional team environments.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="modern-card p-4 rounded-full">
              <Users className="h-12 w-12 text-portfolio-primary" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-['Inter']">
            Passionate developer with a keen eye for design and a love for creating 
            meaningful digital experiences that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image & Info */}
          <div className="relative">
            <div className="modern-card p-8 rounded-3xl">
              <div className="relative mb-6">
                <div className="w-56 h-56 mx-auto rounded-3xl bg-gradient-to-br from-portfolio-primary to-portfolio-secondary p-1">
                  <div className="w-full h-full rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Alex Chen"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-portfolio-accent to-yellow-400 rounded-full flex items-center justify-center animate-pulse-glow shadow-2xl">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-center mb-4 font-['Poppins']">Alex Chen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center mb-8 font-['Inter']">
                Full-Stack Developer & UI/UX Designer based in San Francisco. 
                I love turning complex problems into simple, beautiful solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between modern-card p-3 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-portfolio-primary" />
                    <span className="text-slate-500 dark:text-slate-400">Location</span>
                  </div>
                  <span className="font-medium">San Francisco, CA</span>
                </div>
                <div className="flex items-center justify-between modern-card p-3 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-portfolio-secondary" />
                    <span className="text-slate-500 dark:text-slate-400">Experience</span>
                  </div>
                  <span className="font-medium">5+ Years</span>
                </div>
                <div className="flex items-center justify-between modern-card p-3 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-500 dark:text-slate-400">Availability</span>
                  </div>
                  <span className="font-medium text-green-500">Open to Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-['Poppins'] flex items-center">
                <Code className="h-8 w-8 text-portfolio-primary mr-3" />
                My Story
              </h3>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 font-['Inter'] text-lg leading-relaxed">
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
              <h3 className="text-3xl font-bold mb-6 font-['Poppins'] flex items-center">
                <Palette className="h-8 w-8 text-portfolio-secondary mr-3" />
                What I Do
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div key={index} className="modern-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-3 text-lg font-['Poppins']">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-['Inter'] leading-relaxed">
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
            <div key={index} className="text-center modern-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-portfolio-primary to-portfolio-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-3 font-['Poppins']">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-base lg:text-lg font-['Inter']">
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
