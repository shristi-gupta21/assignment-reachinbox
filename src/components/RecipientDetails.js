import React, { useState } from "react";
import { DropDown } from "./DropDown";
import { Img } from "./Img";
import Modal from "./Modal";
import useToggle from "../hooks/use-toggle";

export default function RecipientDetails({ name, email }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  return (
    <>
      <div className=" flex justify-between px-5 py-4 border-b border-[#F8FAFC]/20">
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
                  name: "Interested",
                  href: "#",
                },
                {
                  name: "Closed",
                  href: "#",
                },
                {
                  name: "Meeting Booked",
                  href: "#",
                },
                {
                  name: "Meeting Completed",
                  href: "#",
                },
              ]}
              dropdownPosition={"w-40 -left-4"}
            />
          </div>
          <div className="border border-[#343A40] rounded px-4 py-1.5 bg-[#1F1F1F] flex items-center gap-2">
            <DropDown
              heading={"Move"}
              textClasses={"text-[#D3D7DB] text-xs font-semibold"}
              iconClasses={"h-4 w-4 flex-none text-[#D3D7DB] font-semibold"}
              array={[
                {
                  name: "Inbox",
                  href: "#",
                },
                {
                  name: "Archive",
                  href: "#",
                },
                {
                  name: "Spam",
                  href: "#",
                },
              ]}
              dropdownPosition={"-left-4 w-28"}
            />
          </div>
          <div className="border border-[#343A40] rounded p-2 bg-[#1F1F1F] flex items-center gap-2">
            <DropDown
              imgPath={"/images/more.svg"}
              imgClasses={"h-4 w-4"}
              iconClasses={"hidden"}
              array={[
                {
                  name: "Delete",
                  type: "button",
                },
              ]}
              dropdownPosition={"-left-6 "}
              onClickfunc={toggleIsModalOpen}
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal handleDismiss={() => toggleIsModalOpen(false)}></Modal>
      )}
    </>
  );
}
