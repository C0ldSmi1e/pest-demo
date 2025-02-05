"use client";

import React from "react";
import Image from "next/image";
import Google from "@/components/hipages";
import { HorizontalTicker } from "react-infinite-ticker";

const items = [
  {
    name: "Brad H",
    location: "Gwelup, WA",
    review: "Fast response.",
    rating: "★★★★★",
  },
  {
    name: "Suresh",
    location: "Nollamara, WA",
    review: "David is prifessional, reliable responsive and expert.",
    rating: "★★★★★",
  },
  {
    name: "Britta L",
    location: "Thornlie, WA",
    review: "On time, good price and appeared to be very thorough. I would use Longlast Pest Contol again.",
    rating: "★★★★★",
  },
  {
    name: "Rachael N",
    location: "Thornlie, WA",
    review: "Great service, friendly, ensured there were no other rodents in the house, was thorough and great to work with.",
    rating: "★★★★★",
  },
  {
    name: "Zübeyir S",
    location: "Cottesloe, WA",
    review: "David was a magician. He fixed our ants problem in 5 minutes!",
    rating: "★★★★★",
  },
  {
    name: "Kwame A",
    location: "Balga, WA",
    review: "Very professional and explained what he was going to do. He was punctual and did the job to my satisfaction.",
    rating: "★★★★★",
  },
  {
    name: "Cassie",
    location: "Southern River, WA",
    review: "Quick, friendly and professional. Advised me on the best option with small children and I appreciated the care he showed. Came on the same day.",
    rating: "★★★★★",
  }
];

const ReviewCard = ({
  name,
  rating,
  review,
}: {
  name: string;
  rating: string;
  review: string;
}) => {
  return (
    <div className="ml-4 sm:ml-10 w-72 sm:w-96 flex flex-col items-center justify-start gap-4 rounded-lg p-4 bg-navy-900 text-white">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <Image
              className="rounded-full w-10 h-10 sm:w-[50px] sm:h-[50px]"
              src="/images/avatar.png"
              alt={name}
              width={50}
              height={50}
            />
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold text-sm sm:text-base">{name}</p>
              <p className="text-xs sm:text-sm text-color2">{rating}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full text-left text-base sm:text-lg font-semibold">{review}</p>
    </div>
  );
};

const Reviews = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-12 sm:gap-y-24 text-lg text-center py-6 sm:py-10">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Take a look at what our <span className="text-yellow-400">customers</span> are saying…
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
