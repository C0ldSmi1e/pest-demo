import Link from "next/link";
import { Star } from "lucide-react";

const HiPage = () => {
  return (
    <Link
      href="https://hipages.com.au/connect/longlastpestcontrol"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold flex flex-col justify-center items-center md:flex-row md:items-start gap-1 sm:gap-2 text-sm sm:text-base hover:text-yellow-400 transition-colors"
    >
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
      </div>
      <span>100% happy customers based on HiPages reviews</span>
    </Link>
  );
};

export default HiPage;
