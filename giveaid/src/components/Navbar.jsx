import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMail, FiMenu } from 'react-icons/fi';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 80); // Adjust this value to change when the navbar becomes transparent
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-opacity-50 bg-white dark:bg-opacity-50 dark:bg-palette-background' : 'bg-white dark:bg-palette-background'
      }`}
    >
      <div className="container mx-auto p-4 flex flex-grow justify-between items-center">
        <img
          src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg"
          alt="Logo"
          className="h-14 w-14 rounded-full"
        />
      
	    <div id="nav-strip" className="hidden lg:flex justify-between items-center w-[66.2vw] mx-auto rounded-full bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl shadow-lg p-2">
          <ul className="flex space-x-4">
            {['Home', 'Who We Are', 'Donate', 'Volunteer', 'Success Stories'].map((text, index) => (
            <li key={index} className="group relative">
              <Link
                  to={text.toLowerCase().replace(/\s+/g, '-')}
                  smooth={true}
                  duration={800}
                  className="cursor-pointer rounded-full px-4 py-2 group-hover:outline-white group-hover:bg-opacity-10 group-hover:text-palette-text transition duration-300 ease-in-out group-hover:bg-palette-major"
                  >
                  {text}
              </Link>
            </li>
            ))}
          </ul>
        
	      <Link
              to="contact-us"
              smooth={true}
              duration={800}
              className="font-bold cursor-pointer rounded-full px-4 py-2 flex items-center space-x-2 bg-palette-major hover:outline-white hover:bg-opacity-10 hover:text-palette-text transition duration-300 ease-in-out hover:bg-palette-majorLight"
              >
            <span>Contact Us</span>
            <FiMail />
          </Link> 
        </div>
      
	    <div className="flex justify-end items-center">
	      <button onClick={toggleDarkMode} className="text-xl rounded text-palette-major dark:text-palette-majorLight hover:outline-white hover:bg-opacity-10 transition duration-300 ease-in-out">
		    {isDarkMode ? <FiSun /> : <FiMoon />}
	      </button>
          
	      <button onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-icon" className="ml-4 text-2xl text-palette-major dark:text-palette-majorLight">
            <FiMenu />
          </button>
        </div>
      </div>
      
	  {isMenuOpen && (
        <div id="menu" className="bg-palette-hash bg-transparent dark:bg-palette-background dark:text-palette-text p-4">
          <ul className="flex flex-col space-y-4">
            {['Home', 'Who We Are', 'Donate', 'Volunteer', 'Success Stories', 'Contact Us'].map((text, index) => (
              <li key={index} className="group relative">
                <Link
                  to={text.toLowerCase().replace(/\s+/g, '-')}
                  smooth={true}
                  duration={800}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer rounded-full px-4 py-2 group-hover:outline-white group-hover:bg-opacity-10 group-hover:text-palette-dark group-hover:text-md transition duration-300 ease-in-out group-hover:bg-palette-major"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

