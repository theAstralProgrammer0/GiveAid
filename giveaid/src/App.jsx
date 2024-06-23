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
        <div className="pt-16">
		  <img src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg" alt="Logo" className="h-auto w-[10vw] absolute left-4 top-[31.25px] transform rounded-full" />
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

