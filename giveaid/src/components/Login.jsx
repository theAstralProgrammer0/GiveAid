/* src/components/Login.jsx */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../utils/api';
import BackButton from './BackButton';
import { FiSun, FiMoon } from 'react-icons/fi';
import Loader from './Loader';

const Login = ({ toggleDarkMode, isDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await loginUser({ email, password });

    setIsLoading(false);
    if (response.status) {
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <BackButton />
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 text-xl">
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
      <img src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg" alt="Logo" className="h-20 w-20 rounded-full my-4" />
      <h1 className="text-3xl font-bold mb-4">Log In to GiveAid</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <form className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-full max-w-md" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Log In</button>
        </form>
      )}
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

