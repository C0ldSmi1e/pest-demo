import Image from "next/image";

const Google = () => {
  return (
    <p className="font-semibold flex items-center flex-wrap gap-1 sm:gap-2 text-sm sm:text-base">
      <Image
        src="/images/google_icon.svg"
        alt="star"
        width={20}
        height={20}
        className="w-4 h-4 sm:w-5 sm:h-5"
      />
      <span>4.9</span>
      <span className="text-color2">★★★★★</span>
      <span className="whitespace-nowrap">Based on</span>{" "}
      <span className="font-bold whitespace-nowrap">1000+ reviews</span>
    </p>
  );
};

export default Google;
