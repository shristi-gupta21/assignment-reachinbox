import React from "react";
import { Img } from "../components/Img";

export const Sidebar = () => {
  return (
    <div className="w-14 h-full py-4 bg-black flex flex-col items-center">
      <Img src="/images/m-logo.svg" className=" pb-20" />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-8">
          <Img src="/images/home.svg" />
          <Img src="/images/user-search.svg" />
          <Img src="/images/email.svg" />
          <Img src="/images/send.svg" />
          <Img src="/images/mail-list.svg" />
          <Img src="/images/bar-chart.svg" />
        </div>
        <Img src="/images/user_icon.svg" />
      </div>
    </div>
  );
};
