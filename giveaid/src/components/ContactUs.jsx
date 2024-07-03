/* src/components/ContactUs.jsx */
import React from 'react';

const ContactUs = () => {
  return (
    <section id='contact-us' className='contact-us-container bg-light container mx-auto py-16 px-4 sm:px-8'>
      <h2 className='text-[71px] text-palette-major dark:text-palette-text font-semibold mb-4 text-center'>Contact</h2>
      <p className='text-lg dark:text-palette-text mb-4 text-center'>Get in touch with us for any queries or support.</p>
      <div className='flex justify-center items-center'>

        <form className='bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl shadow-lg p-2 rounded px-8 pt-6 pb-8 mb-4 w-[62%]'>
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-palette-text text-sm font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out'
              id='name'
              type='text'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-palette-text text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out'
              id='email'
              type='email'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              className='bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out'
              id='message'
              placeholder='Your Message'
              rows='5'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
