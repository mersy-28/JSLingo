import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">JSLingo</h3>
            <p className="text-gray-600 text-sm">
              Learn JavaScript through interactive lessons and exercises, just like learning a new language!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link to="/profile" className="text-gray-600 hover:text-primary text-sm transition-colors">Profile</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/mersy-28" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors" 
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JSLingo. All rights reserved.
          </p>
          <div className="flex items-center text-gray-500 text-xs">
            <span>Made with</span>
            <Heart className="h-3 w-3 mx-1 text-red-500" />
            <span>for JavaScript learners</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;