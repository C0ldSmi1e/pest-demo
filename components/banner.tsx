import Image from "next/image";
import Inspection from "@/components/inspection";
import Call from "@/components/call";
import Google from "@/components/google";
import Review from "@/components/review";

const List = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 text-lg md:text-xl lg:text-2xl">
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Complete Residential & Commercial Solutions
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Expert Termite, Bed Bug & Pest Control
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Licensed & Experienced Technicians
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Pre-Settlement & End of Lease Inspections
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yes.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Customized Treatment Plans & Guarantees
      </p>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative w-full max-w-screen-xl flex flex-col items-start justify-start gap-4 md:gap-6 px-4 md:px-6 lg:px-8">
      <Google />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        <span className="text-color4">LONG LAST PEST CONTROL</span>
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
        Professional Pest Control Service in <span className="text-color4">Perth</span>
        <br />
        <span className="text-color4">10 Years</span> Experience
      </p>
      <List />
      <p className="text-base md:text-lg lg:text-xl text-color6 font-bold">
        Schedule your FREE inspection and estimate today!
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
        <Call />
        <Inspection />
      </div>
      <div className="w-full lg:w-1/2">
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
