/* src/App.jsx */
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';
import SuccessStories from './components/SuccessStories';
import WhoWeAre from './components/WhoWeAre';
import ContactUs from './components/ContactUs';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <BrowserRouter>
        <div className="dark:bg-palette-dark">
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Home />
          <WhoWeAre />
          <Donate />
          <Volunteer />
          <SuccessStories />
          <ContactUs />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

