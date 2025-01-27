import Image from "next/image";

const Review = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 items-center sm:items-start">
      <Image
        className="rounded-full w-20 h-20 sm:w-[120px] sm:h-[120px]"
        src="/images/avatar.png"
        alt="person1"
        width={120}
        height={120}
      />
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <p className="text-base sm:text-xl">
          &quot;On time, good price and appeared to be very thorough. I would use Longlast Pest Contol again.&quot;
        </p>
        <div className="text-base sm:text-lg flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-bold">Britta L</span>
          <div className="flex items-center gap-1">
            <Image
              src="/images/verified.svg"
              alt="verified"
              width={25}
              height={25}
            />
            <span className="font-semibold">Verified client</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;