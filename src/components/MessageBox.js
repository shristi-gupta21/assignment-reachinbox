import React from "react";
import { DropDown } from "./DropDown";
import { Img } from "./Img";

function Messages({ subject, date, from, cc, to, FIRST_NAME }) {
  return (
    <div className="p-5">
      <div className="w-full h-px relative bg-[#F8FAFC]/20">
        <div className="text-white absolute -top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[0.625rem] font-semibold bg-[#171819] px-2.5 py-1">
          Today
        </div>
      </div>
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
      <div className="w-full h-px relative bg-[#F8FAFC]/20">
        <div className="flex gap-2 items-center text-white absolute -top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[0.625rem] font-semibold bg-[#171819] px-2.5 py-1">
          <Img src="/images/expand.svg" />
          View all <span className="text-[#4285F4]">4</span> replies
        </div>
      </div>
    </div>
  );
}
export const MessageBox = ({ name, email }) => {
  return (
    <div>
      <div className="flex justify-between px-5 py-4 border-b border-[#F8FAFC]/20">
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <span className="text-white/40 text-xs">{email}</span>
        </div>
        <div className="flex gap-4">
          <div className="border border-[#343A40] rounded px-2 py-1.5 bg-[#1F1F1F] flex items-center gap-2">
            <Img src="/images/meeting-completed.svg" />

            <DropDown
              heading={"Meeting Completed"}
              textClasses={"text-[#D3D7DB] text-xs font-semibold"}
              iconClasses={"h-4 w-4 flex-none text-[#D3D7DB] font-semibold"}
              array={[
                {
                  name: "All Inbox",
                  href: "#",
                },
              ]}
            />
          </div>
          <div className="border border-[#343A40] rounded px-4 py-1.5 bg-[#1F1F1F] flex items-center gap-2">
            <DropDown
              heading={"Move"}
              textClasses={"text-[#D3D7DB] text-xs font-semibold"}
              iconClasses={"h-4 w-4 flex-none text-[#D3D7DB] font-semibold"}
              array={[
                {
                  name: "All Inbox",
                  href: "#",
                },
              ]}
            />
          </div>
          <div className="border border-[#343A40] rounded p-2 bg-[#1F1F1F] flex items-center gap-2">
            <DropDown
              imgPath={"/images/more.svg"}
              imgClasses={"h-4 w-4"}
              iconClasses={"hidden"}
              array={[
                {
                  name: "All Inbox",
                  href: "#",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Messages
        subject={"New Product Launch"}
        date={"20 june 2022 : 9:16AM"}
        from="jeanne@icloud.com"
        cc=" lennon.j@mail.com"
        to="lennon.j@mail.com"
        FIRST_NAME="Shristi"
      />
    </div>
  );
};
