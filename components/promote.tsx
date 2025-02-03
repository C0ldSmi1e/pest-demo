import Google from "@/components/hipages";
import Inspection from "@/components/inspection";
import Call from "@/components/call";

const Promote = () => {
  return (
    <div className="text-base flex flex-col items-center justify-center gap-8">
      <Google />
      <p className="text-xl text-navy-900 font-bold">
        Get a Free Quote Today!
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Call />
        <Inspection />
      </div>
    </div>
  );
};

export default Promote;
