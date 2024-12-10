import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-4">
      <nav className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg backdrop-blur-sm bg-opacity-90' : 'bg-white/50 backdrop-blur-sm'
      }`}>
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex-shrink-0 font-bold text-xl text-yellow-500">
            Portfolio
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-800 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-yellow-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 mt-2 mx-4">
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-800 hover:text-yellow-500 block px-4 py-3 text-base font-medium w-full text-left hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;