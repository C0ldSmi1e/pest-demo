"use client";

import Image from "next/image";
import Inspection from "@/components/inspection";
import Call from "@/components/call";
import HiPages from "@/components/hipages";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const List = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
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
        Customised Treatment Plans & Warranties
      </p>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative w-full max-w-screen-xl flex flex-col items-start justify-start gap-4 md:gap-6 px-4 md:px-6 lg:px-8">
      <HiPages />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
        <TypeAnimation
          sequence={[
            "Longlast Pest Control",
          ]}
          wrapper="span"
          speed={50}
          className="text-yellow-400"
        />
      </h1>
      <p className="text-xl md:text-3xl lg:text-4xl font-bold">
        Professional Pest Control Service in <span className="text-yellow-400">Perth</span>
        <br />
        <span className="text-yellow-400">7 Years</span> Experience
      </p>
      <List />
      <p className="text-lg md:text-xl lg:text-2xl text-yellow-400 font-bold">
        Schedule your FREE inspection and estimate today!
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
        <Call bgColor="" hoverBgColor="hover:bg-navy-800" textColor="text-white" hoverTextColor="hover:text-white" />
        <Inspection />
      </div>
      <motion.div 
        className="absolute bottom-[-60px] right-0 hidden lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="w-[500px] h-[700px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className="object-cover"
            src="/images/control-pest-2-no-bg.png"
            alt="banner"
            fill
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
