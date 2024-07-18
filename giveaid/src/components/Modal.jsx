/* src/components/Modal.jsx */
import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import childImage from '../assets/GAmedium-shot-happy-african-people.jpg'; // Replace with your actual image path

const Modal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsVisible(false);
    } else {
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-background') {
      handleClose();
    }
  };

  return (
    isVisible && (
      <div
        id="modal-background"
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={handleClickOutside}
      >
        <div className="bg-white dark:bg-palette-dark rounded-lg overflow-hidden w-11/12 md:w-1/2 lg:w-1/3 p-4 relative">
          <button onClick={handleClose} className="absolute top-2 right-2 text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
            <FiX />
          </button>
          <img src={childImage} alt="Smiling child" className="w-full h-64 object-cover rounded-lg mb-4" />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Join GiveAid or Support Our Cause!</h2>
            <p className="mb-4">
              Your involvement can make a difference. Choose one of the options below to help us grow and make a positive impact:
            </p>
            <div className="flex justify-around">
              <button
                className="px-4 py-2 bg-palette-major text-white rounded-full hover:bg-palette-majorLight transition duration-300 ease-in-out"
                onClick={() => window.location.href = '/signup'}
              >
                Sign Up
              </button>
              <button
                className="px-4 py-2 bg-palette-major text-white rounded-full hover:bg-palette-majorLight transition duration-300 ease-in-out"
                onClick={() => window.location.href = '#donate'}
              >
                Donate
              </button>
            </div>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">Thank you for your support!</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

