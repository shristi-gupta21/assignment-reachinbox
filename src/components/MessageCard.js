import React from "react";

export const MessageCard = ({ subject, date, from, cc, to, FIRST_NAME }) => {
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

        <p className="pt-7 text-white text-sm">Hi {FIRST_NAME},</p>
        <p className=" text-white text-sm pt-4">
          I would like to introduce you to SaaSgrow, a productized design
          service specifically tailored for saas startups. Our aim is to help
          you enhance the user experience and boost the visual appeal of your
          software products.
        </p>
      </div>
    </div>
  );
};
