"use client";

import React from "react";
import Image from "next/image";
import Google from "@/components/google";
import { HorizontalTicker } from "react-infinite-ticker";

const items = [
  {
    name: "Sarah Johnson",
    image: "https://placehold.co/100x100.png",
    rating: "★★★★★",
    review:
      "Excellent service! They eliminated our ant problem quickly and efficiently. Highly recommend their professional team.",
    date: "2024-03-15",
  },
  {
    name: "Michael Chen",
    image: "https://placehold.co/100x100.png",
    rating: "★★★★★",
    review:
      "Fast response time and thorough treatment. Haven't seen a single roach since they came. Great job!",
    date: "2024-02-28",
  },
  {
    name: "Emily Rodriguez",
    image: "https://placehold.co/100x100.png",
    rating: "★★★★★",
    review:
      "Very knowledgeable staff. They not only treated our termite issue but also provided valuable prevention tips.",
    date: "2024-04-02",
  },
  {
    name: "David Thompson",
    image: "https://placehold.co/100x100.png",
    rating: "★★★★★",
    review:
      "Prompt, professional, and effective. They dealt with our mosquito problem, making our backyard enjoyable again.",
    date: "2024-03-10",
  },
  {
    name: "Lisa Patel",
    image: "https://placehold.co/100x100.png",
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
    <div className="ml-10 w-96 flex flex-col items-center justify-center gap-4 border-2 border-color3 rounded-lg p-4">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <Image
              className="rounded-full"
              src={image}
              alt={name}
              width={50}
              height={50}
            />
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold">{name}</p>
              <p className="text-sm text-color2">{rating}</p>
            </div>
          </div>
          <Image
            src="/images/google_icon.svg"
            alt="google"
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className="w-full text-left text-lg">{review}</p>
      <p className="w-full text-left text-sm">{date}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-24 text-lg text-center py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">
          Take a look at what our customers are saying…
        </h1>
        <Google />
      </div>
      <div className="w-full max-w-6xl px-4">
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
