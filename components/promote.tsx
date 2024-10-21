import Google from "@/components/google";
import Inspection from "@/components/inspection";
import Call from "@/components/call";

const Promote = () => {
  return (
    <div className="text-base flex flex-col items-center justify-center gap-8">
      <Google />
      <p className="text-xl text-color6 font-bold">
        Schedule your FREE inspection and estimate right away!
      </p>
      <div className="flex items-center justify-center gap-4">
        <Inspection />
        <Call />
      </div>
    </div>
  );
};

export default Promote;
