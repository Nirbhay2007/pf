
import { Heart, Github, Linkedin, Mail, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Mail, href: '#', label: 'Email', color: 'hover:text-green-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="modern-card p-4 rounded-full">
                <Heart className="h-12 w-12 text-red-500 animate-pulse" />
              </div>
            </div>
            <h3 className="text-4xl font-bold gradient-text mb-6 font-['Poppins']">Alex Chen</h3>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg font-['Inter'] leading-relaxed">
              Building digital experiences that make a difference. Let's create something 
              amazing together and shape the future of web development.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`group p-4 modern-card hover:scale-110 transition-all duration-300 ${color}`}
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            ))}
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3 text-slate-400 font-['Inter']">
                <span>Made with</span>
                <Heart className="h-5 w-5 text-red-500 animate-pulse" />
                <span>by Alex Chen</span>
              </div>
              
              <p className="text-slate-400 font-['Inter']">
                © {currentYear} Alex Chen. All rights reserved.
              </p>

              <button
                onClick={scrollToTop}
                className="group p-3 modern-card hover:scale-110 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
