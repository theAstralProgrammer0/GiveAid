import React from 'react';
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <section id="home" className="home-container bg-light container">
      <header className="header">
        <h1 className="text-4xl font-bold">GiveAid</h1>
        <ReactTyped
          strings={['small acts, big change', 'Transforming Lives Through Hope and Service']}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-lg mt-2"
        />
      </header>
      <main>
        <section className="text-center">
          <h2 className="section-title">Welcome to GiveAid</h2>
          <p className="text-large">Our mission is to harness the power of technology and human compassion for positive change.</p>
        </section>
      </main>
    </section>
  );
};

export default Home;

