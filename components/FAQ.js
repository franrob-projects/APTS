"use client";

import { useRef, useState } from "react";

// <FAQ> component is a list of <Item> components
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Can I use this course for university?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! Many of our students have gone on to study subjects like Law, Policing, and Fire Safety at university.
      </div>
    ),
  },
  {
    question: "Do I have to join the armed forces?",
    answer: (
      <p>
        No, joining the military is not a requirement. The course focuses on various areas within the Uniformed Protective Services, and we help guide you towards the career path that suits you best, whether that includes the military or not.
      </p>
    ),
  },
  {
    question: "What qualification will I receive?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You&apos;ll earn a BTEC Extended Diploma in Uniformed Protective Services, which is equivalent to three A Levels.
      </div>
    ),
  },
  {
    question: "What GCSE grades do I need to join the course?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You&apos;ll need a minimum of grade 3 in your GCSEs. If you don&apos;t have English or Maths, you can still join, but you&apos;ll be required to resit these subjects by attending additional classes.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden"
        style={
          isOpen
            ? { maxHeight: accordion.current.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;