import React, { useState } from 'react';
import { CatIcon, HandMetal, Menu, MoonIcon, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkblue shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-center items-center py-4">
      {/*<div className="text-cyan text-2xl font-semibold">Tres</div> */}  


        <button
          className="md:hidden text-cyan cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <CatIcon size={28} />}
        </button>
        
         

        <ul className={`md:flex space-x-2 text-cyan text-l 
          ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full md:w-auto bg-darkblue md:bg-transparent py-4 md:py-0`}>
          <li className="text-center md:text-left py-2 md:py-0">
            <a href="#home" className="block px-4 hover:text-offwhite cursor-pointer">Home</a>
          </li>
          <li className="text-center md:text-left py-2 md:py-0">
            <a href="#about" className="block px-4 hover:text-offwhite cursor-pointer">About Me</a>
          </li>
          <li className="text-center md:text-left py-2 md:py-0">
            <a href="#projects" className="block px-4 hover:text-offwhite cursor-pointer">Projects</a>
          </li>
          <li className="text-center md:text-left py-2 md:py-0">
            <a href="#contacts" className="block px-4 hover:text-offwhite cursor-pointer">Contacts</a>
          </li>
        </ul>
      </div>
        <div className="absolute top-0 m-3 hidden md:block ">
        <button className="text-cyan cursor-pointer hover:text-offwhite">
          <MoonIcon size={32} />
        </button>
      </div>
    </nav>
    
  );
};

export default Navbar;
