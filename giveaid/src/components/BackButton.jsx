/* src/components/BackButton.jsx */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="text-2xl dark:text-palette-text p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <FiArrowLeft />
    </button>
  );
};

export default BackButton;

