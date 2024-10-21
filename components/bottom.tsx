import Promote from "@/components/promote";
import Review from "@/components/review";

const Bottom = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-y-10 text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold leading-tight">
          Why wait to protect your property, your health, and your family?
        </h1>
        <p className="text-3xl">
          Clean, dry, and pest-free homes are just a phone call away
        </p>
      </div>
      <Promote />
      <div className="w-[50%]">
        <Review />
      </div>
    </div>
  );
};

export default Bottom;
