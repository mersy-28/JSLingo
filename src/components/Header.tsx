import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Code, User, Menu, X, Flame } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { streak } = useUserProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gray-900">JSLingo</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/"
            className={`flex items-center gap-1 text-sm font-medium ${
              location.pathname === '/' ? 'text-primary' : 'text-gray-600 hover:text-primary'
            } transition-colors`}
          >
            <Book className="h-4 w-4" />
            <span>Lessons</span>
          </Link>

          <Link 
            to="/profile"
            className={`flex items-center gap-1 text-sm font-medium ${
              location.pathname === '/profile' ? 'text-primary' : 'text-gray-600 hover:text-primary'
            } transition-colors`}
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Link>

          <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            <Flame className="h-4 w-4" />
            <span className="text-sm font-medium">{streak} days</span>
          </div>
        </div>

        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
              onClick={closeMenu}
            >
              <Book className="h-5 w-5 text-primary" />
              <span className="font-medium">Lessons</span>
            </Link>
            
            <Link 
              to="/profile"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
              onClick={closeMenu}
            >
              <User className="h-5 w-5 text-primary" />
              <span className="font-medium">Profile</span>
            </Link>

            <div className="flex items-center gap-2 p-2">
              <Flame className="h-5 w-5 text-orange-500" />
              <span className="font-medium">{streak} day streak</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;