import Image from "next/image";

const items = [
  {
    image: "/images/book.svg",
    title: "100% Satisfaction Guaranteed",
    description: "We guarantee your satisfaction with every service.",
  },
  {
    image: "/images/medal.svg",
    title: "100% Satisfaction Guaranteed",
    description: "We guarantee your satisfaction with every service.",
  },
  {
    image: "/images/glass.svg",
    title: "100% Satisfaction Guaranteed",
    description: "We guarantee your satisfaction with every service.",
  },
];

const Item = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center justify-center gap-4">
      <Image src={image} alt={title} width={100} height={100} />
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h1 className="w-full text-2xl font-bold">{title}</h1>
        <p className="w-full text-lg font-semibold">{description}</p>
      </div>
    </div>
  );
};

const Proof = () => {
  return (
    <div className="max-w-screen-xl w-full text-white flex flex-col items-center justify-center gap-y-24 text-2xl text-left">
      <div className="flex flex-col md:flex-row items-start justify-center gap-y-16 gap-x-8">
        {items.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Proof;
