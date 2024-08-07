import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export const DropDown = ({ heading, array, textClasses, iconClasses }) => {
  return (
    <Popover className="relative flex items-center">
      <PopoverButton className="flex items-center gap-x-1  leading-6  focus:outline-none">
        <p className={clsx(textClasses)}>{heading}</p>
        <ChevronDownIcon aria-hidden="true" className={clsx(iconClasses)} />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute top-full z-10 mt-3 w-36 rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {array.map((item) => (
          <div key={item.name} className="relative  hover:bg-gray-200">
            <a
              href={item.href}
              className="block text-sm font-semibold leading-6 py-2 px-2 text-gray-900"
            >
              {item.name}
              <span className="absolute inset-0" />
            </a>
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
};
