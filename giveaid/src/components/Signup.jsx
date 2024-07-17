import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../utils/api';
import BackButton from './BackButton';
import { FiSun, FiMoon } from 'react-icons/fi';
import Loader from './Loader';

const Signup = ({ toggleDarkMode, isDarkMode }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profileImage', profileImage);

    const response = await signupUser(formData);

    setIsLoading(false);
    if (response.status) {
      navigate('/login');
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-palette-background p-4">
      <BackButton />
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 text-xl">
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
      <img src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg" alt="Logo" className="h-20 w-20 rounded-full my-4" />
      <h1 className="text-3xl dark:text-palette-text font-bold mb-4">Sign Up for GiveAid</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <form className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-full max-w-md" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input type="text" placeholder="First Name" className="w-full p-2 mb-4 rounded" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last Name" className="w-full p-2 mb-4 rounded" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="file" className="w-full p-2 mb-4 rounded" onChange={(e) => setProfileImage(e.target.files[0])} />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
        </form>
      )}
      <p className="mt-4 dark:text-palette-text">
        Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;

