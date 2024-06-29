import React from 'react';
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

  const tiles = [ i1, i2, i3, i4 ];

  return (
    <section id="donate" className="donate-container bg-palette-light dark:bg-palette-background dark:text-palette-text container mx-auto py-16 px-4 sm:px-8 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col justify-center items-center">
          <h2 className="w-[62%] text-2xl font-semibold mb-4 text-center">Donate</h2>
          <form className="bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text drop-shadow-xl shadow-lg p-2 rounded px-8 pt-6 pb-8 mb-4 w-[62%]">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-palette-text text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
				className="bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom focus:shadow-outline-custom hover:bg-transparent transition duration-300 ease-in-out"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-palette-text text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
				className="bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom focus:shadow-outline-custom hover:bg-transparent transition duration-300 ease-in-out"
                id="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-palette-text text-sm font-bold mb-2" htmlFor="amount">
                Amount
              </label>
              <input
				className="bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom focus:shadow-outline-custom hover:bg-transparent transition duration-300 ease-in-out"
                id="amount"
                type="number"
                placeholder="Amount in USD"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-palette-text text-sm font-bold mb-2" htmlFor="cause">
                Cause
              </label>
              <select
				className="bg-palette-hash bg-opacity-8 dark:bg-opacity-10 dark:bg-palette-lightDark dark:text-palette-text appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom focus:shadow-outline-custom hover:bg-transparent transition duration-300 ease-in-out"
                id="cause"
              >
                {causes.map((cause, index) => (
                  <option key={index} value={cause}>{cause}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
				className="bg-palette-major flex justify-center space-x-2 text-gray-700 dark:text-palette-text hover:outline hover:bg-opacity-10 hover:text-palette-text transition duration-300 ease-in-out font-bold py-2 px-4 rounded focus:outline-custom focus:shadow-outline-custom"
                type="submit"
              >
                Donate
              </button>
            </div>
          </form>
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
