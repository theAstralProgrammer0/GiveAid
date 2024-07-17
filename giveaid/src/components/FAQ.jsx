/* src/components/FAQ.jsx */
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is GiveAid?',
      answer: 'GiveAid is a platform to connect volunteers and donors to causes they care about.',
      isOpen: false,
    },
    {
      question: 'How can I volunteer?',
      answer: 'You can sign up on our Volunteer page and start participating in various events.',
      isOpen: false,
    },
    {
      question: 'How do I donate?',
      answer: 'You can donate through our Donate page with various payment options.',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => (
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    )));
  };

  return (
    <div id="faq" className="p-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 w-full max-w-4xl">
          <div
            onClick={() => toggleFAQ(index)}
            className="cursor-pointer flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-700 rounded-t"
          >
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            {faq.isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          <CSSTransition
            in={faq.isOpen}
            timeout={300}
            classNames="faq"
            unmountOnExit
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-b">
              <p>{faq.answer}</p>
            </div>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

