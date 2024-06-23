/* src/components/Navbar.jsx */
import React from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMail } from 'react-icons/fi';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-palette-background shadow-md w-full z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex justify-between items-center w-[66.2vw] mx-auto rounded-full bg-palette-hash bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text shadow-lg p-2">
          <ul className="flex space-x-4">
            {['Home', 'Donate', 'Volunteer', 'Success Stories', 'About Us'].map((text, index) => (
              <li key={index} className="group relative">
                <Link
                  to={text.toLowerCase().replace(' ', '-')}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer rounded-full px-4 py-2 group-hover:bg-opacity-10 group-hover:bg-palette-major"
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
            className="cursor-pointer rounded-full px-4 py-2 flex items-center space-x-2 bg-palette-major hover:bg-opacity-10 hover:bg-palette-major"
          >
            <span>Contact Us</span>
            <FiMail />
          </Link>
        </div>
        <button onClick={toggleDarkMode} className="text-xl text-palette-major dark:text-palette-majorLight">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

