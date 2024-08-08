import React from "react";
import { Img } from "./Img";

export const Details = ({ array }) => {
  return (
    <div className=" border-l border-[#33383F] h-full overflow-y-scroll flex flex-col gap-4 py-4 px-1">
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
      <div className="px-5 py-3">
        <p className=" font-semibold text-white ">Campaign name</p>
        <div className="text-white text-xs font-semibold flex gap-x-2.5 py-5">
          <span>3 Steps</span>
          <div className="w-px h-4 bg-[#403F3F]"></div>
          <span>5 Days in Sequence</span>
        </div>
        <div className="flex gap-12 relative">
          <div className="">
            <div className="absolute ">
              <img src="/images/email-border.svg" className={"h-8 w-8"} />
              <div className="bg-[#23272C] h-10 w-px absolute left-4"></div>
            </div>
            <div className="absolute top-[4.5rem] z-10">
              <img src="/images/email-border.svg" className={"h-8 w-8"} />
              <div className="bg-[#23272C] h-10 w-px absolute left-4"></div>
            </div>
            <div className="absolute top-36 z-10">
              <img src="/images/email-border.svg" className={"h-8 w-8"} />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold text-white">Step-1: Email</p>
              <div className="flex text-[#b9b9b9] text-[0.625rem] items-center ">
                <Img src="/images/send-outline.svg" />
                <p>Sent</p>
                <p className="font-semibold pl-1">3rd,Feb</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Step-1: Email</p>
              <div className="flex text-[#b9b9b9] text-[0.625rem] items-center ">
                <Img src="/images/send-outline.svg" />
                <p>Sent</p>
                <p className="font-semibold pl-1">3rd,Feb</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Step-1: Email</p>
              <div className="flex text-[#b9b9b9] text-[0.625rem] items-center ">
                <Img src="/images/send-outline.svg" />
                <p>Sent</p>
                <p className="font-semibold pl-1">3rd,Feb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
