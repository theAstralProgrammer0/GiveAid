import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiSend } from 'react-icons/fi';

const ContactUs = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(8, 'Name must be at least 8 characters long')
      .max(80, 'Name cannot exceed 80 characters')
      .matches(/^[a-zA-Z\s-]+$/, 'Name can only contain letters, hyphens, and spaces')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email domain'
      )
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required'),
  });

  return (
    <section id='contact-us' className='contact-us-container bg-light container mx-auto py-16 px-4 sm:px-8'>
      <h2 className='text-[71px] text-palette-major dark:text-palette-text font-semibold mb-4 text-center'>Contact</h2>
      <p className='text-lg dark:text-palette-text mb-4 text-center'>Get in touch with us for any queries or support.</p>
      <div className='text-center mb-8'>
        <p className='text-palette-major dark:text-palette-major text-xl mb-2'>We'd love to hear from you!</p>
        <p className='text-palette-dark dark:text-palette-light text-md'>Whether you have a question about our services, need assistance or just want to talk, we are here to help.</p>
      </div>
      <div className='flex justify-center items-center'>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form data', values);
          }}
        >
          {() => (
            <Form className='bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl shadow-lg p-2 rounded px-8 pt-6 pb-8 mb-4 w-[62%] lg:w-[44%]'>
              <div className='mb-4'>
                <label className='block text-gray-700 dark:text-palette-text text-sm font-bold mb-2' htmlFor='name'>
                  Name
                </label>
                <Field
                  name='name'
                  type='text'
                  placeholder='Your Name'
                  className='bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out'
                />
                <ErrorMessage name='name' component='div' className='text-red-500 text-xs italic' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 dark:text-palette-text text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <Field
                  name='email'
                  type='email'
                  placeholder='Your Email'
                  className='bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out'
                />
                <ErrorMessage name='email' component='div' className='text-red-500 text-xs italic' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 dark:text-palette-text text-sm font-bold mb-2' htmlFor='message'>
                  Message
                </label>
                <Field
                  name='message'
                  as='textarea'
                  placeholder='Your Message'
                  rows='5'
                  className='bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out'
                />
                <ErrorMessage name='message' component='div' className='text-red-500 text-xs italic' />
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center space-x-2'
                  type='submit'
                >
                  <span>Send</span>
                  <FiSend />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactUs;

