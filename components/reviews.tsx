"use client";

import React from "react";
import Image from "next/image";
import Google from "@/components/google";
import { HorizontalTicker } from "react-infinite-ticker";

const items = [
  {
    name: "Brad H",
    location: "Gwelup, WA",
    review: "Fast response",
    date: "10 Oct 2023",
    rating: "★★★★★",
  },
  {
    name: "Suresh",
    location: "Nollamara, WA",
    review: "David is prifessional, reliable responsive and expert.",
    date: "6 Aug 2023",
    rating: "★★★★★",
  },
  {
    name: "Britta L",
    location: "Thornlie, WA",
    review: "On time, good price and appeared to be very thorough. I would use Longlast Pest Contol again.",
    date: "7 Jan 2023",
    rating: "★★★★★",
  },
  {
    name: "Rachael N",
    location: "Thornlie, WA",
    review: "Great service, friendly, ensured there were no other rodents in the house, was thorough and great to work with.",
    date: "23 Jan 2023",
    rating: "★★★★★",
  },
  {
    name: "Zübeyir S",
    location: "Cottesloe, WA",
    review: "David was a magician. He fixed our ants problem in 5 minutes!",
    date: "17 Mar 2023",
    rating: "★★★★★",
  },
  {
    name: "Kwame A",
    location: "Balga, WA",
    review: "Very professional and explained what he was going to do. He was punctual and did the job to my satisfaction.",
    date: "24 Dec 2024",
    rating: "★★★★★",
  },
  {
    name: "Cassie",
    location: "Southern River, WA",
    review: "Quick, friendly and professional. Advised me on the best option with small children and I appreciated the care he showed. Came on the same day.",
    date: "15 Dec 2022",
    rating: "★★★★★",
  }
];

const ReviewCard = ({
  name,
  rating,
  review,
  date,
}: {
  name: string;
  rating: string;
  review: string;
  date: string;
}) => {
  return (
    <div className="ml-4 sm:ml-10 w-72 sm:w-96 flex flex-col items-center justify-between gap-4 border-2 border-color3 rounded-lg p-4">
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
  if (typeof window === "undefined") {
    return null;
  }
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
