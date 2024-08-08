import React from "react";
import { DropDown } from "./DropDown";
import { Img } from "./Img";

export default function RecipientDetails({ name, email }) {
  return (
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
  );
}
