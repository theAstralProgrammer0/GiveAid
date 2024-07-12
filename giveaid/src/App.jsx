/* src/App.jsx */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';
import SuccessStories from './components/SuccessStories';
import WhoWeAre from './components/WhoWeAre';
import ContactUs from './components/ContactUs';
import Signup from './components/Signup';
import Login from './components/Login';
import FAQ from './components/FAQ';
import Modal from './components/Modal';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="dark:bg-palette-dark">
                <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                {isModalOpen && <Modal onClose={closeModal} />}
                <Home />
                <WhoWeAre />
                <Donate />
                <Volunteer />
                <SuccessStories />
                <ContactUs />
                <FAQ />
                <Footer />
              </div>
            }
          />
          <Route path="/signup" element={<Signup toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
          <Route path="/login" element={<Login toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/forgot-password" element={<ForgotPassword toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
          <Route path="/reset-password" element={<ResetPassword toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

