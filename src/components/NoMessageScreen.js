import React from "react";
import { Img } from "./Img";
export const NoMessageScreen = () => {
  return (
    <div className="w-full bg-black h-[calc(100%-4rem)] flex flex-col justify-center items-center">
      <Img src="/images/no-message.svg" />
      <p className="font-bold text-center text-white text-2xl pt-12 pb-6">
        It’s the beginning of a legendary sales pipeline{" "}
      </p>
      <p className="font-medium text-center text-lg text-[#9E9E9E] ">
        When you have inbound E-mails
        <br />
        you’ll see them here
      </p>
    </div>
  );
};
