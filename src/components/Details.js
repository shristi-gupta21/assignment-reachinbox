import React from "react";
import { Steps } from "./Steps";

export const Details = ({ array }) => {
  return (
    <div className=" hidden border-l border-[#33383F] h-full overflow-y-scroll xl:flex flex-col gap-4 py-4 px-1">
      <div className="text-white text-sm font-semibold py-2 pl-3 bg-[#23272C] rounded-lg">
        Lead Details
      </div>
      <div className="py-2 px-3 flex flex-col  gap-5">
        {array.map(([heading, value], index) => (
          <div key={index} className="flex justify-between ">
            <span className="w-1/2 text-white text-sm">{heading}</span>
            <p className=" w-5/12 text-[#B9B9B9] text-sm text-right  break-all">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="text-white text-sm font-semibold py-2 pl-3 bg-[#23272C] rounded-lg">
        Activity
      </div>
      <Steps />
    </div>
  );
};
