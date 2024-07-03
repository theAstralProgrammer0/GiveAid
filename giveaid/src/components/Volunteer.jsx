/* src/components/Volunteer.jsx */
import React from 'react';
import FactualData from './FactualData';
import VolunteerBox from './VolunteerBox';

const Volunteer = () => {
  return (
    <section id="volunteer" className="volunteer-container px-16">
      <h2 className="text-[90px] font-semibold mb-4 text-center text-palette-major dark:text-palette-text">Be a Volunteer</h2>
      <p className="text-lg mb-4 text-center">Join us in making a difference by volunteering for a cause.</p>
      <div className="flex flex-col items-center space-y-8">
        <div className="w-full p-4">
          <FactualData />
        </div>
        <div id="volunteer-box-container" className="w-full">
          <VolunteerBox />
        </div>
      </div>
    </section>
  );
};

export default Volunteer;

