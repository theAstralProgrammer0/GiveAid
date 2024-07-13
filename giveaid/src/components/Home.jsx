/* src/components/Home.jsx */
import React from 'react';
import { ReactTyped } from 'react-typed';
import DonateBtn from '../components/DonateBtn';

const Home = () => {
  return (
    <section id="home" className="relative flex items-center justify-center home-container bg-home-background bg-no-repeat bg-cover container h-screen mx-auto py-16 px-4 sm:px-8">
	  { /* Overlay */ }
	  <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
	  <div className="relative z-20 flex flex-col items-center justify-center text-center">
		  <header className="relative text-center py-8 z-20">
			<h1 className="text-[90px] font-bold text-palette-major dark:text-palette-text">GiveAid</h1>
			<ReactTyped
			  strings={['...small acts, Big Change', 'Transforming Lives Through Hope and Service']}
			  typeSpeed={40}
			  backSpeed={50}
			  loop
			  className="text-lg mt-2 text-palette-major"
			/>
		  </header>
		<main className="relative z-20">
		  <section className="text-center flex flex-col items-center">
		    <h2 className="text-2xl font-semibold mb-4 text-white">Welcome</h2>
		    <p className="text-lg break mb-4 text-clip mx-20 px-20 pb-20 text-white">
		      Our mission is to harness the power of technology and human compassion for positive change.
		    </p>
		    <DonateBtn />
		  </section>
        </main>
      </div>
    </section>
  );
};

export default Home;

