import React from 'react';

const Boxes = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 dark:bg-transparent rounded-lg shadow-lg">
      <div className="lg:grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gradient-to-r from-palette-majorLight to-palette-major dark:bg-gradient-to-l dark:from-palette-primary dark:to-palette-secondary dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl rounded-lg text-dark shadow-sm p-4">
          <h2 className="text-xl text-center text-palette-dark dark:text-palette-text font-bold mb-2">Our Mission</h2>
          <p className="bg-palette-hash bg-opacity-10 dark:bg-palette-background p-3 rounded-lg shadow-lg">
            At GiveAid, we believe in transforming global suffering into opportunities for positive change through the power of technology and human compassion. Our mission is to provide a seamless and efficient platform that connects individuals and corporations with meaningful causes, enabling them to contribute effectively and make a tangible impact on communities, particularly in Africa.
          </p>
        </div>
        <div className="bg-gradient-to-r from-palette-majorLight to-palette-major dark:bg-gradient-to-l dark:from-palette-primary dark:to-palette-secondary dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl rounded-lg text-dark shadow-sm p-4">
          <h2 className="text-xl text-center text-palette-dark dark:text-palette-text font-bold mb-2">Our Vision</h2>
          <p className="bg-palette-hash bg-opacity-10 dark:bg-palette-background p-3 rounded-lg shadow-lg">
            We envision a world where every individual and corporation actively participates in reducing global suffering. Through our accessible donation platform, we aim to foster a compassionate, equitable, and prosperous future for all. We strive to create a global community where giving is a shared value, and every contribution makes a difference.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-palette-majorLight to-palette-major dark:bg-gradient-to-l dark:from-palette-primary dark:to-palette-secondary dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl rounded-lg text-dark shadow-sm p-4">
        <p className="bg-palette-hash bg-opacity-10 dark:bg-palette-background p-3 rounded-lg shadow-lg">
          GiveAid is a dedicated team of professionals, volunteers, and philanthropists driven by a shared passion for making the world a better place. Founded on the principles of transparency, accountability, and innovation, we are committed to ensuring that every donation reaches those who need it most. Our diverse team brings together expertise from various fields, including technology, nonprofit management, and community development, to create a platform that is both effective and trustworthy.
        </p>
      </div>
    </div>
  );
};

export default Boxes;
