import React, { useState } from 'react';
import './header.css'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header >
      <div className="d-flex align-items-center justify-content-between">
        <a href='/' className="head">Portfolio</a>
        {/* <button onClick={handleToggle} className="md:hidden">☰</button> */}
        <nav className={`md:d-flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <button onClick={() => scrollToSection('home')} className="hover:text-blue-500">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-500">About</button>
          <button onClick={() => scrollToSection('education')} className="hover:text-blue-500">Education</button>
          <button onClick={() => scrollToSection('project')} className="hover:text-blue-500">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-500">Skills</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500">Contact</button>
        </nav>
      </div>
    </header>
  );
};

const Section = ({ id, title, children }) => (
  <section id={id} className=" px-6   bg-gray-50 border-b">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p className="text-gray-700 text-lg">{children}</p>
  </section>
);
export {Header,Section}