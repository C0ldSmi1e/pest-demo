import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full bg-navy-900 flex flex-col items-center justify-center py-3 px-4 text-gray-200 font-medium">
      <div className="max-w-screen-xl w-full flex flex-col items-center justify-between gap-6 md:gap-10">
        <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
          <Image src="/images/logo4.png" alt="logo" width={150} height={150} />
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <Link className="hover:text-white transition-all duration-300" href="/#">Contact Us</Link>
              <Link className="hover:text-white transition-all duration-300" href="/#">Terms & Conditions</Link>
              <Link className="hover:text-white transition-all duration-300" href="/#">Privacy Policy</Link>
            </div>
            <p className="text-base text-gray-200">
              &copy; {new Date().getFullYear()} Longlast Pest Control. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;