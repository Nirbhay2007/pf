
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Alex Chen</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Building digital experiences that make a difference. Let's create something 
              amazing together.
            </p>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>by Alex Chen</span>
              </div>
              
              <p className="text-slate-400">
                © {currentYear} Alex Chen. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
