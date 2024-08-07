import React from "react";
import { Img } from "./Img";

export const Sidebar = () => {
  return (
    <div className="w-14 h-full py-4 bg-black flex flex-col items-center border-r-[#343A40] border-r">
      <Img src="/images/m-logo.svg" className=" pb-20" />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-8">
          <button className="hover:bg-[#1e293b] hover:rounded-md flex items-center justify-center">
            <Img src="/images/home.svg" />
          </button>
          <button className="hover:bg-[#1e293b] hover:rounded-md flex items-center justify-center">
            <Img src="/images/user-search.svg" />
          </button>
          <button className="hover:bg-[#1e293b] hover:rounded-md flex items-center justify-center">
            <Img src="/images/email.svg" />
          </button>
          <button className="hover:bg-[#1e293b] hover:rounded-md flex items-center justify-center">
            <Img src="/images/send.svg" />
          </button>
          <button className="hover:bg-[#1e293b] hover:rounded-md flex items-center justify-center">
            <Img src="/images/mail-list.svg" />
          </button>
          <button className="hover:bg-[#1e293b] hover:rounded-md flex items-center justify-center">
            <Img src="/images/bar-chart.svg" />
          </button>
        </div>
        <button>
          <Img src="/images/user_icon.svg" />
        </button>
      </div>
    </div>
  );
};
