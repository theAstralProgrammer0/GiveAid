import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { fetchSuccessStories } from '../utils/api';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stories, setStories] = useState([]);
  const [expandedStory, setExpandedStory] = useState(null);

  useEffect(() => {
    const getStories = async () => {
      const data = await fetchSuccessStories();
      setStories(data);
    };

    getStories();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
  };

  const handleExpandClick = (index) => {
    setExpandedStory((prev) => (prev === index ? null : index));
  };

  const firstFourStories = stories.slice(0, 4);
  const firstFourVideos = stories.filter(story => story.video).slice(0, 4);

  return (
    <section id="success-stories" className="success-stories-container grid grid-cols-1 place-items-center bg-light container mx-auto pt-16 px-4 sm:px-8">
      <h2 className="text-[90px] font-semibold mb-4 text-center text-palette-major dark:text-palette-text">Success Stories</h2>
      <p className="text-lg mb-4 text-center text-palette-major">These stories are just a glimpse of the incredible difference your donations make.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-7xl center">
        {firstFourStories.map((story, index) => (
          <div key={index} className="bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-semibold mb-2 text-palette-major dark:text-palette-dark">{story.title}</h3>
            <p className="text-gray-700">
              {expandedStory === index ? story.description : `${story.description.substring(0, 100)}...`}
              <button onClick={() => handleExpandClick(index)} className="text-blue-500">
                {expandedStory === index ? 'Collapse' : 'Expand'}
              </button>
            </p>
          </div>
        ))}
      </div>
      <div className="relative w-[62%]">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={handlePrevClick}>
          <FiArrowLeft />
        </button>
        <div className="flex justify-center overflow-x-hidden">
          {firstFourVideos.map((story, index) => (
            <div key={index} className={`grid grid-cols-1 place-items-center flex-shrink-0 transform transition-transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="grid grid-cols-1 place-items-center bg-white w-full shadow-md rounded p-6">
                <video src={story.video} alt={story.title} className="w-full h-[35rem] object-cover rounded mb-4" controls />
                <h3 className="w-[50%] text-xl text-center font-semibold mb-2 text-palette-major dark:text-palette-dark">{story.title}</h3>
                <p className="w-[50%] text-gray-700">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" onClick={handleNextClick}>
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
};

export default SuccessStories;

