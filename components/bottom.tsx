import Promote from "@/components/promote";
import Review from "@/components/review";

const Bottom = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-6 md:gap-y-10 px-4 md:px-6 text-center">
      <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Why wait to protect your <span className="text-yellow-400">property, health, and family</span>?
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-500">
          Clean, dry, and pest-free homes are just a phone call away
        </p>
      </div>
      <Promote />
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Review />
      </div>
    </div>
  );
};

export default Bottom;
