import Image from "next/image";
import Inspection from "@/components/inspection";
import Call from "@/components/call";
import Google from "@/components/google";
import Review from "@/components/review";

const List = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 text-2xl">
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={25} height={25} />
        Free Inspection & Estimate
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={25} height={25} />
        Certified & Experienced Technicians
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={25} height={25} />
        Hassle-Free Customer service
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={25} height={25} />
        Fast & Efficient Turnaround
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={25} height={25} />
        Best price guarantee
      </p>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative w-full max-w-screen-xl flex flex-col items-start justify-start gap-6">
      <Google />
      <h1 className="text-4xl font-bold">
        Pest Control Services in <span className="text-color4">Perth</span>
      </h1>
      <p className="text-3xl font-semibold">
        Protect your property, keep your attic dry and clean,
        <br />
        and prevent the spread of disease​
      </p>
      <List />
      <p className="text-xl text-color6 font-bold">
        Schedule your FREE inspection and estimate right away!
      </p>
      <div className="flex gap-4">
        <Inspection />
        <Call />
      </div>
      <div className="w-[50%]">
        <Review />
      </div>
      <Image
        className="hidden lg:block absolute top-36 right-0"
        src="https://placehold.co/500x500.png"
        alt="banner"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Banner;
