import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { AiOutlineHeart, AiOutlineDollarCircle, AiOutlineFundProjectionScreen, AiOutlineTeam } from 'react-icons/ai';

const FactualData = () => {
  const [startCount, setStartCount] = useState(false);
  const factualDataRef = useRef(null);

  const data = [
    {
      icon: <AiOutlineHeart size={70} className="text-green-500" />,
      count: 1008,
      description: 'Human Lives Impacted',
    },
    {
      icon: <AiOutlineTeam size={70} className="text-red-500" />,
      count: 429840000,
      description: 'People in Africa live on less than $3 a day',
    },
    {
      icon: <AiOutlineFundProjectionScreen size={70} className="text-blue-500" />,
      count: 8,
      description: 'Charitable Causes',
    },
    {
      icon: <AiOutlineDollarCircle size={70} className="text-yellow-500" />,
      count: 1288895,
      description: 'Dollars Raised Since Inception',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      });
    });

    if (factualDataRef.current) {
      observer.observe(factualDataRef.current);
    }
    
    const current = factualDataRef.current;
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
    
  return (
    <div ref={factualDataRef} id="factual-data" className="factual-data-container flex flex-wrap justify-around space-y-6">
      {data.map((item, index) => (
        <div key={index} className="text-center w-full md:w-1/2 lg:w-1/4 mb-8">
          <div className="flex flex-col items-center">
            <div className="mb-4">{item.icon}</div>
            {startCount && (
              <CountUp
                end={item.count}
                prefix={item.description.includes('Dollars') ? '$' : ''}
                suffix={item.description.includes('Million') ? 'M' : ''}
                duration={8}
                className="text-6xl text-palette-major dark:text-palette-text"
              />
            )}
            <p className="text-lg mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FactualData;

