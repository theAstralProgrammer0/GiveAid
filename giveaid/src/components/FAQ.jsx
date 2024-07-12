/* src/components/FAQ.jsx */
import React, { useState } from 'react';

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
    <div id="faq" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="text-left w-full text-xl font-semibold"
          >
            {faq.question}
          </button>
          {faq.isOpen && <p className="mt-2 pl-4">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

