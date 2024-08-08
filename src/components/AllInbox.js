import React from "react";
import { DropDown } from "./DropDown";
import { Img } from "./Img";
import { ConversationCard } from "./ConversationCard";

export const AllInbox = () => {
  return (
    <section className="bg-black p-4  border-r-[#33383F] border-r h-full">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="bg-[#222426] w-8 h-6 text-[#5C7CFA] font-semibold flex justify-center items-center rounded-full">
              26
            </div>
            <span className="text-white font-semibold text-sm">
              New Replies
            </span>
          </div>
          <DropDown
            heading={"Newest"}
            textClasses={"text-white font-semibold text-sm"}
            iconClasses={"h-4 w-4 flex-none text-white font-bold"}
            array={[
              {
                name: "All Inbox",
                href: "#",
              },
            ]}
          />
        </div>
        <div>
          <ConversationCard
            email={"Beata@gmail.com"}
            date={"Mar 7"}
            message={"I've tried a lot and ."}
            tagName={"interested"}
          />
          <ConversationCard
            email={"Beata@gmail.com"}
            date={"Mar 7"}
            message={"I've tried a lot and ."}
            tagName={"interested"}
          />
        </div>
      </div>
    </section>
  );
};
