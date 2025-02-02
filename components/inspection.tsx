"use client";

import { useState } from "react";
import Form from "@/components/form";

const Inspection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-yellow-400 text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-500 transition-all duration-300"
      >
        Get a Free Quote
      </button>
      <Form isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Inspection;
