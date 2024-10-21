import Image from "next/image";

const items = [
  {
    image: "https://placehold.co/1200x600.png",
    title: "We go all-out to protect your home from pests, ensuring a safe and comfortable living environment.",
    paragraphs: [
      "[Company Name] is the trusted choice for hundreds of homeowners in [Local Area] for all their pest control needs – and with good reason. Our dedication to customer satisfaction is unmatched in the industry.",
      "We put your peace of mind first, making the entire process hassle-free. Our experts conduct a thorough inspection of your property (at no cost), provide a detailed estimate, and then commit our full expertise to effectively resolving your pest issues.",
    ],
  },
  {
    image: "https://placehold.co/1200x600.png",
    title: "Comprehensive Home Pest Protection",
    paragraphs: [
      "Is your home facing a pest problem? An uncontrolled pest infestation can lead to damage throughout your property, potentially affecting your family's health and comfort.",
      "Our skilled technicians deliver a thorough service, ensuring your entire home is pest-free, protected against future infestations, and safe for you and your loved ones.",
    ],
  },
];

const Item = ({
  image,
  title,
  paragraphs,
  index,
}: {
  image: string;
  title: string;
  paragraphs: string[];
  index: number;
}) => {
  const isOdd = index % 2 === 0;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-12 ${
        isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={600}
          className="rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 text-left">
        <h2 className="w-full text-xl font-bold">{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p className="text-lg" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

const Exhibit = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-24 text-2xl text-left py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">
          We&apos;re the best pest control company in the area
        </h1>
        <p className="text-3xl">
          Enjoy a pest-free home with our expert pest control services
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-y-16 gap-x-8">
        {items.map((item, index) => (
          <Item key={item.title} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Exhibit;
