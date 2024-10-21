import Image from "next/image";

const Google = () => {
  return (
    <p className="font-semibold flex items-center gap-2">
      <Image
        src="/images/google_icon.svg"
        alt="star"
        width={20}
        height={20}
      />
      <span>4.9</span>
      <span className="text-color2">★★★★★</span> Based on{" "}
      <span className="font-bold">1000+</span> Google reviews
    </p>
  );
};

export default Google;
