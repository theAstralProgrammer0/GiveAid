/* src/components/Login.jsx */
import React from 'react';
import BackButton from './BackButton';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const Login = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <BackButton />
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 text-xl">
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
      <img
        src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg"
        alt="Logo"
        className="h-20 w-20 rounded-full my-4"
      />
      <h1 className="text-3xl font-bold mb-4">Log In to GiveAid</h1>
      <form className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-full max-w-md">
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Log In</button>
      </form>
      <p className="mt-4">
        Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
      </p>
      <p className="mt-2">
        <Link to="/forgot-password" className="text-blue-500">Forgot password?</Link>
      </p>
    </div>
  );
};

export default Login;

