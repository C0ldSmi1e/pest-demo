"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    question: "What types of pests do you treat?",
    answer: "We treat a wide range of pests but not limited to: ants, cockroaches, spiders, termites, bees, wasps, mice, rats, millipedes, silverfish, fleas, bed bugs, crickets, moths. If you're dealing with a specific pest not listed here, please contact us for personalised assistance.",
  },
  {
    question: "Are your pest control methods safe for children and pets?",
    answer: "Yes, we prioritise the safety of your family and pets. We use eco-friendly and low-toxicity products wherever possible. We'll provide specific safety instructions for each treatment.",
  },
  {
    question: "Do you offer emergency pest control services?",
    answer: "Yes, we understand that some pest situations require immediate attention. We offer emergency services and aim to respond within 24 hours.",
  },
  {
    question: "What should I do to prepare for a pest control treatment?",
    answer: "We'll provide you with a detailed preparation checklist before your appointment. Generally, this includes removing items from floors, covering food items, and ensuring easy access to treatment areas.",
  },
  {
    question: "How often should I schedule pest control services?",
    answer: "The frequency varies from pest to pest, but we recommend annual treatments for general prevention.",
  },
  {
    question: "How long does a typical pest control treatment take?",
    answer: "Varies from case to case. General pest treatments take one and half to two hours, termite barrier installation takes around 5-6 hours, and termite inspection takes around 1 hour.",
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-8 md:gap-y-16 px-4 md:px-6 text-navy-900">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-y-6 md:gap-y-10 gap-x-8">
        <Image
          src="/images/car.jpg"
          alt="faq"
          width={800}
          height={800}
          className="rounded-lg shadow-lg w-full lg:w-1/2 object-cover hover:scale-105 transition-all duration-300"
        />
        <div className="w-full lg:w-1/2 flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
          {items.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-y-2">
              <button
                className="w-full text-left flex items-start gap-x-3 hover:opacity-80 transition-opacity"
                onClick={() => toggleActive(index)}
              >
                <div className="mt-1 flex-shrink-0 w-5 h-5">
                  <Image
                    src={`/images/${activeIndex === index ? "minus" : "plus"}.svg`}
                    alt={activeIndex === index ? "minus" : "plus"}
                    width={20}
                    height={20}
                  />
                </div>
                <h2 className="text-lg md:text-xl font-bold">{item.question}</h2>
              </button>
              {activeIndex === index && (
                <p className="text-base md:text-lg ml-9 font-semibold">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
