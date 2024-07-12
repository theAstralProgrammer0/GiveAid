// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMail, FiMenu, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-50 bg-white dark:bg-opacity-50 dark:bg-palette-background' : 'bg-white dark:bg-palette-background'}`}>
      <div className="container mx-auto p-4 flex flex-grow justify-between items-center">
        <img
          src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg"
          alt="Logo"
          className="h-14 w-14 rounded-full"
        />
        <div id="nav-strip" className="hidden lg:flex justify-between items-center w-[66.2vw] mx-auto rounded-full bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl shadow-lg p-2">
          <ul className="flex space-x-4">
            {['Home', 'Who We Are', 'Donate', 'Volunteer', 'Success Stories', 'FAQ'].map((text, index) => (
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
          <div className="relative ml-4 dropdown">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-2xl text-palette-major dark:text-palette-majorLight rounded-full border-2 border-green-500 p-1">
              <FiUser />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-palette-background border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                <ul>
                  <li className="border-b border-gray-200 dark:border-gray-700">
                    <button onClick={() => handleRedirect('/login')} className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      Log In
                    </button>
                  </li>
                  <li className="border-b border-gray-200 dark:border-gray-700">
                    <button onClick={() => handleRedirect('/signup')} className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      Sign Up
                    </button>
                  </li>
                  <li>
                    <Link to="faq" smooth={true} duration={800} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      F.A.Q
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-icon" className="ml-4 text-2xl text-palette-major dark:text-palette-majorLight">
            <FiMenu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div id="menu" className="bg-palette-hash bg-transparent dark:bg-palette-background dark:text-palette-text p-4">
          <ul className="flex flex-col space-y-4">
            {['Home', 'Who We Are', 'Donate', 'Volunteer', 'Success Stories', 'Contact Us', 'FAQ'].map((text, index) => (
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

