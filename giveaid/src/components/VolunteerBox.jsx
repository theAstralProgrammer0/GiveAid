import React from 'react';
import VolunteerBtn from './VolunteerBtn';

const VolunteerBox = () => {
  return (
    <div className="bg-gradient-to-r from-palette-majorLight to-palette-major dark:bg-gradient-to-l dark:from-palette-primary dark:to-palette-secondary dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl rounded-lg text-dark shadow-lg w-[71%] h-full mx-auto p-8">
      <div className="flex justify-center items-center">
        <p className="text-lg font-semibold">
          Support a child in need, make a meaningful connection, and help break the cycle of poverty.
        </p>
      </div>
      <div className="flex justify-center items-center p-4">
        <div className="bg-white p-4 rounded-full flex justify-around items-center min-w-[62%]">
          <span className="hidden md:block text-sm text-palette-dark">
            Click to volunteer now and help level up those in need
          </span>
          <VolunteerBtn />
        </div>
      </div>
    </div>
  );
};

export default VolunteerBox;

