import React, { useState } from "react";
import { Toggle } from "./Toggle";
export const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <header className="h-16 w-full bg-[#1F1F1F] pl-8 flex justify-between items-center pr-5">
      <p className="text-white font-bold">Onebox</p>
      <div>
        <Toggle value={isEnabled} onChange={setIsEnabled} />
      </div>
    </header>
  );
};
