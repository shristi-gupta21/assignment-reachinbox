import React from "react";
import { DropDown } from "./DropDown";
import { Img } from "./Img";

export const AllInbox = () => {
  return (
    <section className="bg-black py-4 px-6">
      <div className=" flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <DropDown
            heading={"All Inbox(s)"}
            textClasses={"text-[#4285F4] text-xl font-bold"}
            iconClasses={"h-4 w-4 flex-none text-[#4285F4] font-bold"}
            array={[
              {
                name: "All Inbox",
                href: "#",
              },
            ]}
          />
          <button className="h-8 w-8 rounded bg-[#25262B] items-center flex justify-center">
            <Img src="/images/refresh.svg" />
          </button>
        </div>
        <span className="text-sm text-[#7F7F7F] ">
          <span className="text-white font-bold">25/25</span> Inboxes selected
        </span>
        <input
          type="text"
          placeholder="Search"
          className="h-7 w-full placeholder:text-sm placeholder:text-white/20 bg-[#23272C] rounded border-white/20 border px-1.5 py-1 custom-placeholder"
        />
      </div>
    </section>
  );
};
