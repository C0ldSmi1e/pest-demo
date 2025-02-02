import Image from "next/image";

const items = [
  {
    image: "/images/book.svg",
    title: "Licensed & Insured",
    description: "Our team consists of fully licensed, insured, and extensively trained pest control operators ensuring safe and professional service across Perth.",
  },
  {
    image: "/images/medal.svg",
    title: "Rapid Response Service",
    description: "We offer same-day service availability throughout the Perth metropolitan area, with flexible scheduling options to accommodate urgent pest control needs.",
  },
  {
    image: "/images/smile.svg",
    title: "Satisfaction Guarantee",
    description: "Every service comes with our comprehensive satisfaction guarantee, backed by detailed follow-up inspections and ongoing support when needed.",
  },
];

const Item = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col items-center justify-start gap-6 rounded-xl transition-all duration-300 hover:bg-yellow-500 hover:scale-105">
      <div className="w-20 h-20 md:w-24 md:h-24 relative">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center text-center gap-4 font-semibold">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-base md:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Proof = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
        {items.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Proof;
