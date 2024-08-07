import React from "react";
import { DropDown } from "./DropDown";

export const AllInbox = () => {
  return (
    <section className="">
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
    </section>
  );
};
