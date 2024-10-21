import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-color3 flex flex-col items-center justify-center py-5">
      <div className="max-w-screen-xl w-full flex flex-col items-center justify-between gap-10">
        <div className="w-full flex items-center justify-between text-white">
          <Image
            src="https://placehold.co/100x100.png"
            alt="logo"
            width={100}
            height={100}
          />
          <div className="flex items-center justify-between gap-4">
            <Link href="/#">Contact Us</Link>
            <Link href="/#">Terms & Conditions</Link>
            <Link href="/#">Privacy Policy</Link>
          </div>
        </div>
        <div className="w-full flex items-center justify-between text-white">
          <p>Licensed & Insured (#1234567)</p>
          <p>
            &copy; {new Date().getFullYear()} Your Business Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;