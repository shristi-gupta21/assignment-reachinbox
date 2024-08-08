import React from "react";
import parse from "html-react-parser";

export const MessageCard = ({ subject, date, from, cc, to, body }) => {
  return (
    <div className="bg-[#141517] my-5 border border-[#343A40] rounded px-4 pt-3 pb-5 flex flex-col gap-3">
      <div className=" flex justify-between">
        <span className="text-white text-sm font-semibold">{subject}</span>
        <span className="text-[#7F7F7F] text-sm"> {date}</span>
      </div>

      <span className="text-[#7F7F7F] text-sm ">
        from : {from} cc : {cc}
      </span>
      <div className="w-2/3">
        <p className="text-[#7F7F7F] text-sm ">to : {to}</p>

        <p className=" text-white text-sm pt-4">{parse(body)}</p>
      </div>
    </div>
  );
};
