import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMail, FiMenu } from 'react-icons/fi';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50); // Adjust this value to change when the navbar becomes transparent
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
            {['Home', 'Donate', 'Volunteer', 'Success Stories', 'About Us'].map((text, index) => (
            <li key={index} className="group relative">
              <Link
                  to={text.toLowerCase().replace(' ', '-')}
                  smooth={true}
                  duration={500}
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
              duration={500}
              className="font-bold cursor-pointer rounded-full px-4 py-2 flex items-center space-x-2 bg-palette-major hover:outline-white hover:bg-opacity-10 hover:text-palette-text transition duration-300 ease-in-out hover:bg-palette-majorLight"
              >
            <span>Contact Us</span>
            <FiMail />
          </Link>
	    
	      <button onClick={toggleDarkMode} className="text-xl rounded text-palette-major dark:text-palette-majorLight hover:outline-white hover:bg-opacity-10 transition duration-300 ease-in-out">
		    {isDarkMode ? <FiSun /> : <FiMoon />}
	      </button>
        </div>
      
	    <div className="flex justify-end items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-2xl text-palette-major dark:text-palette-majorLight">
            <FiMenu />
          </button>
        </div>
      </div>
      
	  {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-palette-background dark:text-palette-text p-4">
          <ul className="flex flex-col space-y-4">
            {['Home', 'Donate', 'Volunteer', 'Success Stories', 'About Us', 'Contact Us'].map((text, index) => (
              <li key={index} className="group relative">
                <Link
                  to={text.toLowerCase().replace(' ', '-')}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer rounded-full px-4 py-2 group-hover:outline-white group-hover:bg-opacity-10 group-hover:text-palette-dark group-hover:text-md transition duration-300 ease-in-out group-hover:bg-palette-major"
                >
                  {text}
                </Link>
              </li>
            ))}
            
		    <li className="flex justify-center">
              <button onClick={toggleDarkMode} className="text-xl rounded text-palette-major dark:text-palette-majorLight hover:outline-white hover:bg-opacity-10 transition duration-300 ease-in-out">
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;










































/* src/components/Navbar.jsx 
import React from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMail } from 'react-icons/fi';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="bg-white fixed dark:bg-palette-background shadow-md w-full z-50">
      <img src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg" alt="Logo" className="h-14 w-14 absolute left-20 top-[15.25px] transform rounded-full z-30" />
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex justify-between items-center w-[66.2vw] mx-auto rounded-full bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl shadow-lg p-2">
          <ul className="flex space-x-4">
            {['Home', 'Donate', 'Volunteer', 'Success Stories', 'About Us'].map((text, index) => (
              <li key={index} className="group relative">
                <Link
                  to={text.toLowerCase().replace(' ', '-')}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer rounded-full px-4 py-2 group-hover:outline group-hover:bg-opacity-10 group-hover:text-palette-text transition duration-300 ease-in-out group-hover:bg-opacity-10 group-hover:bg-palette-major"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            className="font-bold cursor-pointer rounded-full px-4 py-2 flex items-center space-x-2 bg-palette-major hover:outline hover:bg-opacity-10 hover:text-palette-text transition duration-300 ease-in-out hover:bg-opacity-10 hover:bg-palette-majorLight"
          >
            <span>Contact Us</span>
            <FiMail />
          </Link>
        </div>
        <button onClick={toggleDarkMode} className="text-xl rounded text-palette-major dark:text-palette-majorLight hover:outline hover:bg-opacity-10 transition duration-300 ease-in-out">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
*/
