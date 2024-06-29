/* src/App.jsx */
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import SuccessStories from './pages/SuccessStories';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <BrowserRouter>
        <div className="bg-palette-muted">
		  <img src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg" alt="Logo" className="h-20 w-20 fixed absolute left-20 top-[5.25px] transform rounded-full z-30" />
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Home />
          <Donate />
          <Volunteer />
          <SuccessStories />
          <AboutUs />
          <ContactUs />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

