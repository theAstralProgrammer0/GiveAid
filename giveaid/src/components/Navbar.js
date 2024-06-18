#!/usr/bin/node
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-gray-800'>GiveAid</Link>
        <div>
          <Link to='/' className='mx-2 text-gray-600 hover:text-gray-800'>Home</Link>
          <Link to='/donate' className='mx-2 text-gray-600 hover:text-gray-800'>Donate</Link>
          <Link to='/volunteer' className='mx-2 text-gray-600 hover:text-gray-800'>Volunteer</Link>
          <Link to='/success-stories' className='mx-2 text-gray-600 hover:text-gray-800'>Success Stories</Link>
          <Link to='/about-us' className='mx-2 text-gray-600 hover:text-gray-800'>About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
