import React, { useState } from "react";
import { Toggle } from "./Toggle";
import { DropDown } from "./DropDown";
export const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <header className="h-16 w-full bg-[#1F1F1F] pl-8 flex justify-between items-center pr-5">
      <p className="text-white font-bold">Onebox</p>
      <div className="flex gap-5">
        <Toggle value={isEnabled} onChange={setIsEnabled} />
        <DropDown
          array={[
            {
              name: "About us",
              href: "#",
            },
            {
              name: "Careers",
              href: "#",
            },
            {
              name: "Support",
              href: "#",
            },
            {
              name: "Blog",
              href: "#",
            },
          ]}
        />
      </div>
    </header>
  );
};
