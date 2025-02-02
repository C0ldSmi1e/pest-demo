import Image from "next/image";
import Inspection from "@/components/inspection";
import Call from "@/components/call";
import HiPages from "@/components/hipages";
import Review from "@/components/review";

const List = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
      <p className="flex items-center gap-2">
        <Image src="/images/yellow-checked.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Complete Residential & Commercial Solutions
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yellow-checked.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Expert Termite, Bed Bug & Pest Control
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yellow-checked.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Licensed & Experienced Technicians
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yellow-checked.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Pre-Settlement & End of Lease Inspections
      </p>
      <p className="flex items-center gap-2">
        <Image src="/images/yellow-checked.svg" alt="check" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        Customized Treatment Plans & Guarantees
      </p>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative w-full max-w-screen-xl flex flex-col items-start justify-start gap-4 md:gap-6 px-4 md:px-6 lg:px-8">
      <HiPages />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
        <span className="text-yellow-400">Longlast Pest Control</span>
      </h1>
      <p className="text-xl md:text-3xl lg:text-4xl font-bold">
        Professional Pest Control Service in <span className="text-yellow-400">Perth</span>
        <br />
        <span className="text-yellow-400">7 Years</span> Experience
      </p>
      <List />
      <p className="text-base md:text-lg lg:text-xl text-yellow-400 font-bold">
        Schedule your FREE inspection and estimate today!
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
        <Call bgColor="" hoverBgColor="hover:bg-navy-800" textColor="text-white" hoverTextColor="hover:text-white" />
        <Inspection />
      </div>
      <div className="w-full lg:w-2/3">
        <Review />
      </div>
      <div className="hidden lg:block absolute top-0 right-0">
        <div className="relative w-[700px] h-[700px]">
          <Image
            className="object-cover"
            src="/images/control-pest-1-no-bg.png"
            alt="banner"
            fill
            priority
            sizes="(min-width: 1024px) 700px, 0px"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
