/* src/components/WhoWeAre.jsx */
import React from 'react';
import Boxes from './Boxes';
import EightCharitableCauses from './EightCharitableCauses';

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="max-w-4xl mx-auto my-6 bg-palette-hash dark:bg-opacity-8 dark:text-palette-text rounded-lg">
      <div className="flex justify-center m-6">
        <h2 className="w-[62%] text-[71px] font-semibold rounded-lg text-center text-palette-major dark:text-palette-text">Who We Are</h2>
      </div>
      <Boxes />
      <EightCharitableCauses /> {/* Add Eight Charitable Causes component */}
    </section>
  );
};

export default WhoWeAre;

