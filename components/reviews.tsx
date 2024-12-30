"use client";

import React from "react";
import Image from "next/image";
import Google from "@/components/google";
import { HorizontalTicker } from "react-infinite-ticker";

const items = [
  {
    name: "Sarah Johnson",
    image: "/images/person2.jpeg",
    rating: "★★★★★",
    review:
      "Excellent service! They eliminated our ant problem quickly and efficiently. Highly recommend their professional team.",
    date: "2024-03-15",
  },
  {
    name: "Emily Rodriguez",
    image: "/images/person3.jpeg",
    rating: "★★★★★",
    review:
      "Fast response time and thorough treatment. Haven't seen a single roach since they came. Great job!",
    date: "2024-02-28",
  },
  {
    name: "Michael Chen",
    image: "/images/person4.jpeg",
    rating: "★★★★★",
    review:
      "Very knowledgeable staff. They not only treated our termite issue but also provided valuable prevention tips.",
    date: "2024-04-02",
  },
  {
    name: "Lisa Patel",
    image: "/images/person5.jpeg",
    rating: "★★★★★",
    review:
      "Prompt, professional, and effective. They dealt with our mosquito problem, making our backyard enjoyable again.",
    date: "2024-03-10",
  },
  {
    name: "David Thompson",
    image: "/images/person6.jpeg",
    rating: "★★★★★",
    review:
      "Outstanding customer service. They were patient with all my questions and provided a comprehensive solution.",
    date: "2024-04-18",
  },
];

const ReviewCard = ({
  name,
  image,
  rating,
  review,
  date,
}: {
  name: string;
  image: string;
  rating: string;
  review: string;
  date: string;
}) => {
  return (
    <div className="ml-4 sm:ml-10 w-72 sm:w-96 flex flex-col items-center justify-center gap-4 border-2 border-color3 rounded-lg p-4">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <Image
              className="rounded-full w-10 h-10 sm:w-[50px] sm:h-[50px]"
              src={image}
              alt={name}
              width={50}
              height={50}
            />
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold text-sm sm:text-base">{name}</p>
              <p className="text-xs sm:text-sm text-color2">{rating}</p>
            </div>
          </div>
          <Image
            src="/images/google_icon.svg"
            alt="google"
            width={20}
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </div>
      </div>
      <p className="w-full text-left text-base sm:text-lg">{review}</p>
      <p className="w-full text-left text-xs sm:text-sm">{date}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-12 sm:gap-y-24 text-lg text-center py-6 sm:py-10">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Take a look at what our customers are saying…
        </h1>
        <Google />
      </div>
      <div className="w-full max-w-6xl px-2 sm:px-4">
        <HorizontalTicker duration={50000}>
          {items.map((item, index) => (
            <ReviewCard key={index} {...item} />
          ))}
        </HorizontalTicker>
      </div>
    </div>
  );
};

export default Reviews;
