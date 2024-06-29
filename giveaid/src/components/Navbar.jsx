/* src/components/Navbar.jsx */
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

