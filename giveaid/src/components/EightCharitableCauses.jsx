/* src/components/8CharitableCauses.jsx */
import React, { useEffect, useState } from 'react';
import { fetchCauses } from '../utils/api';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';

const EightCharitableCauses = () => {
  const [causes, setCauses] = useState([]);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    const getCauses = async () => {
      const data = await fetchCauses();
      setCauses(data.slice(0, 8)); // Fetch only 8 causes
    };

    getCauses();
  }, []);

  const handleExpandClick = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section id="eight-charitable-causes" className="container mx-auto py-16 px-4 sm:px-8">
      <h2 className="text-[44px] font-semibold mb-4 text-center text-palette-major dark:text-palette-text">8 Charitable Causes</h2>
      <div className="grid grid-cols-1 gap-8">
        {causes.map((cause, index) => {
          const [topic, ...descriptionParts] = cause.description.split(':');
          const description = descriptionParts.join(':');
          return (
            <div key={cause.id} className="bg-white dark:bg-palette-background rounded-lg shadow-md p-6">
              <div
                onClick={() => handleExpandClick(index)}
                className="cursor-pointer flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-700 rounded-t"
              >
                <h3 className="text-xl font-semibold">{cause.title}</h3>
                {expanded[index] ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              <CSSTransition
                in={expanded[index]}
                timeout={300}
                classNames="faq"
                unmountOnExit
              >
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-b">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">{topic}:</span>
                    {description}
                  </p>
                </div>
              </CSSTransition>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EightCharitableCauses;

