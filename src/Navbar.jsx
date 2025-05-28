import React, { useState, useEffect } from 'react';
import { CatIcon, MoonIcon, X } from 'lucide-react';

const sections = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contacts', href: '#contacts' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleClick = (section) => {
    setActive(section);
    setIsOpen(false);
  };

  const [darkMode, setDarkMode] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = "#home"; 

      for (const sec of sections) {
        const el = document.querySelector(sec.href);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            currentSection = sec.href;
            break;
          }
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-darkblue shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-center items-center py-4">
        <button
          className="md:hidden text-cyan cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <CatIcon size={28} />}
        </button>

        <ul
          className={`md:flex space-x-2 text-cyan-300 text-l ${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-full left-0 w-full md:w-auto bg-darkblue md:bg-transparent py-4 md:py-0`}
        >
          {sections.map((item) => (
            <li key={item.href} className="text-center md:text-left py-2 md:py-0">
              <a
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`block px-4 cursor-pointer rounded-md transition ${
                  active === item.href
                    ? "bg-cyan-300 text-darkblue font-semibold"
                    : "hover:text-offwhite"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
