import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full bg-color3 flex flex-col items-center justify-center py-5 px-4">
      <div className="max-w-screen-xl w-full flex flex-col items-center justify-between gap-6 md:gap-10">
        <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between text-white">
          <Image src="/images/logo3.png" alt="logo" width={150} height={150} />
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <Link href="/#">Contact Us</Link>
            <Link href="/#">Terms & Conditions</Link>
            <Link href="/#">Privacy Policy</Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-0 md:justify-between text-white text-center md:text-left">
          <p>Licensed & Insured (#1234567)</p>
          <p>
            &copy; {new Date().getFullYear()} Longlast Pest Control. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;