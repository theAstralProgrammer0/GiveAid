/* src/components/SuccessStories.jsx */
import React from 'react';

const SuccessStories = () => {
  return (
    <section id="success-stories" className="success-stories-container bg-light container mx-auto py-16 px-4 sm:px-8">
      <h2 className="text-[90px] font-semibold mb-4 text-center text-palette-major dark:text-palette-text">Success Stories</h2>
      <p className="text-lg mb-4 text-center">These stories are just a glimpse of the incredible difference your donations make.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-xl font-semibold mb-2 text-palette-major dark:text-palette-dark">Supporting Women Entrepreneurs</h3>
          <p className="text-gray-700">In Nigeria, your donations have funded microloans for women entrepreneurs. Meet Bukola, who used her loan to start a small tailoring business. Today, she not only supports her family but also employs three other women from her village.</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-xl font-semibold mb-2 text-palette-major dark:text-palette-dark">Building Homes, Rebuilding Lives</h3>
          <p className="text-gray-700">After devastating floods in Ghana, your donations helped rebuild homes for affected families. Now, people like Atsu and his siblings have a safe place to call home. These new houses are symbols of resilience and a fresh start.</p>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-xl font-semibold mb-2 text-palette-major dark:text-palette-dark">Building Homes, Rebuilding Lives</h3>
          <p className="text-gray-700">After devastating floods in Ghana, your donations helped rebuild homes for affected families. Now, people like Atsu and his siblings have a safe place to call home. These new houses are symbols of resilience and a fresh start.</p>
        </div>
        {/* Add more success stories as needed */}
      </div>
    </section>
  );
};

export default SuccessStories;

