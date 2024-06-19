import React from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/100" alt="Logo" className="h-10" />
          <ul className="flex space-x-4">
            <li>
              <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="donate" smooth={true} duration={500} className="cursor-pointer">Donate</Link>
            </li>
            <li>
              <Link to="volunteer" smooth={true} duration={500} className="cursor-pointer">Volunteer</Link>
            </li>
            <li>
              <Link to="success-stories" smooth={true} duration={500} className="cursor-pointer">Success Stories</Link>
            </li>
            <li>
              <Link to="about-us" smooth={true} duration={500} className="cursor-pointer">About Us</Link>
            </li>
            <li>
              <Link to="contact-us" smooth={true} duration={500} className="cursor-pointer">Contact Us</Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleDarkMode} className="text-xl">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

