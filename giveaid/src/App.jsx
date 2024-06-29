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

