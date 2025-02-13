import React, { useState } from 'react';

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600 cursor-pointer">
          MyHome
        </span>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <button onClick={() => scrollToSection.myHome.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600">MyHome</button>
          <button onClick={() => scrollToSection.about.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600">About</button>
          <button onClick={() => scrollToSection.properties.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600">Properties</button>
          <button onClick={() => scrollToSection.contact.current.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600">Contact</button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-md p-4 space-y-4 mt-2">
          <button onClick={() => { scrollToSection.myHome.current.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}>MyHome</button>
          <button onClick={() => { scrollToSection.about.current.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}>About</button>
          <button onClick={() => { scrollToSection.properties.current.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}>Properties</button>
          <button onClick={() => { scrollToSection.contact.current.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}>Contact</button>
        </div>
      )}
    </header>
  );
};

export default Header;
