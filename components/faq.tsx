"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    question: "What types of pests do you treat?",
    answer: "We treat a wide range of pests including ants, roaches, spiders, rodents, termites, bed bugs, and more. If you're dealing with a specific pest not listed here, please contact us for personalized assistance.",
  },
  {
    question: "Are your pest control methods safe for children and pets?",
    answer: "Yes, we prioritize the safety of your family and pets. We use eco-friendly and low-toxicity products wherever possible. We'll provide specific safety instructions for each treatment.",
  },
  {
    question: "How often should I schedule pest control services?",
    answer: "The frequency depends on your specific situation. For general prevention, we recommend quarterly treatments. However, active infestations may require more frequent visits initially.",
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
    question: "How long does a typical pest control treatment take?",
    answer: "The duration varies depending on the size of your property and the type of treatment. Most residential treatments take between 30 minutes to 2 hours.",
  },
  {
    question: "Do you offer any guarantees on your services?",
    answer: "Yes, we stand behind our work. If you experience continued pest problems after our treatment within the specified timeframe, we'll return to retreat at no additional cost.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-16">
      <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-y-10 gap-x-8">
        <Image
          src="https://placehold.co/800x800.png"
          alt="faq"
          width={800}
          height={800}
          className="rounded-lg w-full lg:w-1/2"
        />
        <div className="w-full lg:w-1/2 flex flex-col gap-y-10">
          {items.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-y-2">
              <button
                className="w-full text-left flex items-center gap-x-2"
                onClick={() => toggleActive(index)}
              >
                {activeIndex === index ? (
                  <Image
                    src="/images/minus.svg"
                    alt="minus"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/images/plus.svg"
                    alt="plus"
                    width={20}
                    height={20}
                  />
                )}
                <h2 className="text-xl font-bold">{item.question}</h2>
              </button>
              {activeIndex === index && (
                <p className="text-lg">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
