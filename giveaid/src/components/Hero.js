#!/usr/bin/node
import React from 'react';

const Hero = () => {
  return (
    <section className='bg-cover bg-center h-screen' style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
      <div className='container mx-auto px-4 py-16 text-center text-white'>
        <h1 className='text-4xl font-bold mb-4'>Transforming Lives Through Hope and Service</h1>
        <p className='text-lg mb-8'>Welcome to GiveAid, where we strive to build a more compassionate, equitable, and prosperous future for all.</p>
        <button className='bg-yellow-500 text-white px-6 py-2 rounded-full'>Donate Now</button>
      </div>
    </section>
  );
};

export default Hero;
