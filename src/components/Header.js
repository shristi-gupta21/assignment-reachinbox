import React, { useState } from "react";
import { Toggle } from "./Toggle";
import { DropDown } from "./DropDown";
export const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <header className="h-16 w-full border-b-[#343A40] border-b bg-[#1F1F1F] pl-8 flex justify-between items-center pr-5">
      <p className="text-white font-bold">Onebox</p>
      <div className="flex gap-5">
        <Toggle value={isEnabled} onChange={setIsEnabled} />
        <DropDown
          heading={"Tim’s Workspace"}
          textClasses={"text-white text-sm font-semibold"}
          iconClasses={"h-5 w-5 flex-none text-white"}
          array={[
            {
              name: "Profile",
              href: "#",
            },

            {
              name: "Support",
              href: "#",
            },
            {
              name: "Logout",
              type: "route",
              to: "/login",
            },
          ]}
          dropdownPosition={"w-36"}
        />
      </div>
    </header>
  );
};
