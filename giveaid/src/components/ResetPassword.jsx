/* src/components/ResetPassword.jsx */
import React from 'react';
import BackButton from './BackButton';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { resetPassword } from '../utils/api';

const ResetPassword = ({ toggleDarkMode, isDarkMode }) => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleResetPassword = async (values, { setSubmitting }) => {
    try {
      const response = await resetPassword(values);
      if (response.status === 'success') {
        alert('Password reset successfully.');
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert('Failed to reset password. Please try again.');
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
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleResetPassword}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-full max-w-md">
            <div className="mb-4">
              <Field
                type="password"
                name="password"
                placeholder="New Password"
                className="w-full p-2 mb-4 rounded"
              />
              <ErrorMessage name="password" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-2 mb-4 rounded"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-600" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;

