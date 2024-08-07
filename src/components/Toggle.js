import React from "react";
import { motion } from "framer-motion";
import { Img } from "./Img";

export const Toggle = ({ value, onChange, ...delegated }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      className="h-6 w-12 rounded-full block border-[#343A40] border p-1 relative bg-transparent cursor-pointer box-content outline-offset-1.5"
      onClick={() => onChange(!value)}
      {...delegated}
    >
      <div className="absolute z-0 right-1.5 flex h-6 items-center">
        <Img src="/images/light.svg" className="h-4 w-4" />
      </div>
      <motion.span
        className="relative z-20 h-full aspect-square rounded-full block bg-[#888686]"
        animate={{
          x: value ? "100%" : "0%",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
      />
    </button>
  );
};
