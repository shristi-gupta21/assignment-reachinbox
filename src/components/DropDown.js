import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Img } from "./Img";
import { Link } from "react-router-dom";

export const DropDown = ({
  heading,
  array,
  textClasses,
  iconClasses,
  imgPath,
  imgClasses,
  dropdownPosition,
  onClickfunc,
}) => {
  return (
    <Popover className="relative flex items-center">
      <PopoverButton className="flex items-center gap-x-1  leading-6  focus:outline-none">
        {heading && <p className={clsx(textClasses)}>{heading}</p>}
        {imgPath && <Img src={imgPath} className={imgClasses} />}
        {iconClasses && (
          <ChevronDownIcon aria-hidden="true" className={clsx(iconClasses)} />
        )}
      </PopoverButton>

      <PopoverPanel
        transition
        className={clsx(
          dropdownPosition,
          " absolute top-full z-20 mt-3 px-1 rounded-md bg-[#343A40] py-2 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        )}
      >
        {array.map((item) => (
          <div key={item.name} className="relative w-full ">
            {item.href && (
              <a
                href={item.href}
                className="block text-sm w-full font-semibold leading-6 py-2 px-2 text-white  "
              >
                {item.name}
                <span className="absolute inset-0" />
              </a>
            )}
            {item.type == "button" && (
              <button
                onClick={onClickfunc}
                key={item.name}
                className="block text-sm w-full font-semibold leading-6 py-2 px-2 text-white"
              >
                {item.name}
                <span className="absolute inset-0" />
              </button>
            )}
            {item.type == "route" && (
              <Link
                to={item.to}
                key={item.name}
                className="block text-sm w-full font-semibold leading-6 py-2 px-2 text-white"
              >
                {item.name}
                <span className="absolute inset-0" />
              </Link>
            )}
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
};
