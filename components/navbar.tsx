"use client";

import Image from "next/image";
import Inspection from "./inspection";

const Navbar = () => {
  const scrollTo = (id: string) => {
    if (typeof window === "undefined") {
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-white px-10 py-5 z-50 font-semibold">
      <div className="max-w-screen-xl w-full flex items-center justify-between">
        <Image
          src="https://placehold.co/100x100.png"
          alt="logo"
          width={80}
          height={80}
        />
        <div className="flex items-center justify-between gap-8">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("how-it-works")}>How It Works</button>
          <button onClick={() => scrollTo("about-us")}>About Us</button>
          <button onClick={() => scrollTo("reviews")}>Reviews</button>
          <button onClick={() => scrollTo("faq")}>FAQ</button>
          <Inspection />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
