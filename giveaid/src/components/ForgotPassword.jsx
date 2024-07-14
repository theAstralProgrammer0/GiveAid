/* src/components/ForgotPassword.jsx */
import React from 'react';
import BackButton from './BackButton';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { forgotPassword } from '../utils/api';

const ForgotPassword = ({ toggleDarkMode, isDarkMode }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  const handleForgotPassword = async (values, { setSubmitting }) => {
    try {
      const response = await forgotPassword(values);
      if (response.status === 'success') {
        alert('Password reset email sent successfully.');
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert('Failed to send password reset email. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <BackButton />
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 text-xl">
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
      <img
        src="https://t4.ftcdn.net/jpg/05/04/12/87/240_F_504128713_Te36PxIZxZn6mSKKJoWXMrH1IFTWBGYY.jpg"
        alt="Logo"
        className="h-20 w-20 rounded-full my-4"
      />
      <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleForgotPassword}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-full max-w-md">
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-4 rounded"
              />
              <ErrorMessage name="email" component="div" className="text-red-600" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Email'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;

