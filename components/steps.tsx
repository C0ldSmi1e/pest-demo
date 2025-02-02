import Image from "next/image";
import Promote from "@/components/promote";

const items = [
  {
    image: "/images/inspection.svg",
    title: "Free Inspection",
    description: "Come to your place, inspect your property, then give you a detailed evaluation.",
  },
  {
    image: "/images/lock.svg",
    title: "Protect Your Home",
    description: "Our technicians will treat your property using the latest and safest products.",
  },
  {
    image: "/images/good.svg",
    title: "Ongoing Support",
    description: "Ongoing support and maintenance to ensure your home remains pest-free.",
  },
];

const Item = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-4 px-4">
      <Image src={image} alt={title} width={100} height={100} />
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      <p className="text-base md:text-lg text-gray-500 font-semibold">{description}</p>
    </div>
  );
};

const Steps = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-12 md:gap-y-24 text-xl md:text-2xl text-center py-6 md:py-10 px-4">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Get started in
          <span className="text-yellow-400"> 3 simple steps</span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-500 font-semibold">
          It&apos;s this easy to protect your home from unwanted pests
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-y-12 md:gap-y-16 gap-x-8">
        {items.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div>
      <Promote />
    </div>
  );
};

export default Steps;
