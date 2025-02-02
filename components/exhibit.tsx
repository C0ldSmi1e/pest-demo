import Image from "next/image";

const items = [
  {
    image: "/images/home.jpg",
    title: "Complete Pest Control Solutions for Homes and Businesses in Perth",
    paragraphs: [
      "LONG LAST PEST CONTROL delivers expert pest management services for both residential and commercial properties across Perth. Our comprehensive service range includes residential pest control, commercial pest control, end of lease treatments, and pre-settlement inspections.",
      "We specialise in treating various pest issues including termites, bed bugs, possums, rodents, cockroaches, and other common pests, ensuring your property remains protected and pest-free.",
    ],
  },
  {
    image: "/images/office.jpg",
    title: "Professional Pest Management Services",
    paragraphs: [
      "Whether you need a one-off treatment or ongoing pest protection, our licensed technicians provide tailored solutions for your specific needs. From thorough termite inspections to comprehensive pest control treatments, we've got you covered.",
      "Our services include detailed property inspections, customised treatment plans, and preventive measures to keep your space pest-free. We use safe, effective methods suitable for both residential and commercial environments.",
    ],
  },
  {
    image: "/images/mouse.jpg",
    title: "Specialised Treatment for Every Pest",
    paragraphs: [
      "We offer targeted solutions for specific pest problems including bed bug elimination, possum removal, rodent control, and cockroach treatments. Our expertise extends to handling both common and challenging pest situations.",
      "For property transactions, our end of lease and pre-settlement inspection services ensure your property meets all pest control requirements, giving you peace of mind during your move or purchase.",
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
          className="rounded-lg hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 text-left font-semibold hover:bg-navy-800 hover:scale-105 rounded-lg p-4 transition-all duration-300">
        <h2 className="w-full text-xl lg:text-2xl font-bold text-yellow-400">{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p className="text-base leading-6 lg:leading-8" key={index}>
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
        <h1 className="text-3xl md:text-5xl font-bold">
          Expert Pest Control Services in
          <span className="text-yellow-400"> Perth</span>
        </h1>
        <p className="text-xl md:text-3xl font-semibold text-gray-300">
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
