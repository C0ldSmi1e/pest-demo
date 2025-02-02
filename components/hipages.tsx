import Link from "next/link";
import { Star } from "lucide-react";

const HiPage = () => {
  return (
    <Link
      href="https://hipages.com.au/connect/longlastpestcontrol"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold flex items-center flex-wrap gap-1 sm:gap-2 text-sm sm:text-base hover:text-blue-600 transition-colors"
    >
      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
      <span>100% happy customers based on HiPages reviews</span>
    </Link>
  );
};

export default HiPage;
