// src/components/Profile.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Profile = () => {
  const initialValues = {
    country: '',
    state: '',
    username: '',
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    password: '',
    dob: '',
    address: '',
    mobile: '',
  };

  const validationSchema = Yup.object({
    country: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    middlename: Yup.string(),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    dob: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    mobile: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="space-y-4">
          <div>
            <label htmlFor="country">Country</label>
            <Field type="text" id="country" name="country" className="w-full border p-2" />
            <ErrorMessage name="country" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <Field type="text" id="state" name="state" className="w-full border p-2" />
            <ErrorMessage name="state" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" className="w-full border p-2" />
            <ErrorMessage name="username" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="firstname">First Name</label>
            <Field type="text" id="firstname" name="firstname" className="w-full border p-2" />
            <ErrorMessage name="firstname" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <Field type="text" id="lastname" name="lastname" className="w-full border p-2" />
            <ErrorMessage name="lastname" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="middlename">Middle Name</label>
            <Field type="text" id="middlename" name="middlename" className="w-full border p-2" />
            <ErrorMessage name="middlename" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="w-full border p-2" />
            <ErrorMessage name="email" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" className="w-full border p-2" />
            <ErrorMessage name="password" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <Field type="text" id="dob" name="dob" className="w-full border p-2" />
            <ErrorMessage name="dob" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="address">Full Address</label>
            <Field type="text" id="address" name="address" className="w-full border p-2" />
            <ErrorMessage name="address" component="div" className="text-red-600" />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <Field type="text" id="mobile" name="mobile" className="w-full border p-2" />
            <ErrorMessage name="mobile" component="div" className="text-red-600" />
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Update Profile</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;

