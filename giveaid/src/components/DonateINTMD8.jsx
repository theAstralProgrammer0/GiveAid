/* src/components/Donate.jsx */

import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { initializeDonation } from '../utils/api';
import i1 from '../assets/GAtileDonate.jpg';
import i2 from '../assets/GAVolunteer.jpg';
import i3 from '../assets/GAtileDonateSupport.jpg';
import i4 from '../assets/GAportrait-young-african-boy.jpg';

const Donate = () => {
  const causes = [
    'Education',
    'Health',
    'Food',
    'Shelter',
    'Clean Water',
    'Clothing',
    'Child Protection',
    'Community Development',
  ];

  const tiles = [i1, i2, i3, i4];

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
    amount: Yup.number()
      .positive('Amount must be a positive number')
      .required('Amount is required'),
    cause: Yup.string()
      .required('Please select a cause'),
  });

  const donateWithPaystack = (authorization_url) => {
    window.location.href = authorization_url;
  };

  const handleDonationInitialization = async (values) => {
    const data = await initializeDonation(values);
    if (data && data.status) {
      donateWithPaystack(data.data.authorization_url);
    } else {
      alert('Payment Initialization Failed. Please try again.');
    }
  };

  return (
    <section id="donate" className="donate-container bg-palette-light dark:bg-palette-background dark:text-palette-text container mx-auto py-16 px-4 sm:px-8 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col justify-center items-center">
          <h2 className="w-[62%] text-[80px] font-semibold mb-4 text-center text-palette-major dark:text-palette-text">Donate</h2>
          <Formik
            initialValues={{ name: '', email: '', amount: '', cause: '' }}
            validationSchema={validationSchema}
            onSubmit={handleDonationInitialization}
          >
            {() => (
              <Form className="bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl shadow-lg p-2 rounded px-8 pt-6 pb-8 mb-4 w-[62%]">
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-palette-text text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-palette-text text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    className="bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-palette-text text-sm font-bold mb-2" htmlFor="amount">
                    Amount
                  </label>
                  <Field
                    name="amount"
                    type="number"
                    placeholder="Amount in USD"
                    className="bg-palette-hash bg-opacity-10 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent dark:hover:bg-palette-hash dark:hover:bg-opacity-10 transition duration-300 ease-in-out"
                  />
                  <ErrorMessage name="amount" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:bg-palette-lightDark dark:text-palette-text text-sm font-bold mb-2" htmlFor="cause">
                    Cause
                  </label>
                  <Field
                    as="select"
                    name="cause"
                    className="bg-palette-hash bg-opacity-8 dark:bg-palette-dark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-palette-dark focus:outline-custom focus:shadow-outline-custom hover:bg-transparent transition duration-300 ease-in-out"
                  >
                    <option value="">Select a cause</option>
                    {causes.map((cause, index) => (
                      <option key={index} value={cause}>{cause}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="cause" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="cursor-pointer min-w-[14%] rounded-full px-4 py-2 flex items-center justify-center space-x-2 bg-palette-major text-dark font-bold hover:outline hover:bg-opacity-10 hover:text-palette-text transition duration-300 ease-in-out"
                    type="submit"
                  >
                    <span>Donate</span>
                    <FiArrowUpRight />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className="h-auto w-auto bg-cover bg-center rounded-lg hover:bg-transparent transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${tile})`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donate;

