import { Img } from "../components/Img";
import React from "react";

export default function LoginRow() {
  return (
    <div className="mb-[37.50rem]">
      <div className="flex justify-center border-b border-solid border-[#25262b] py-[1.25rem]">
        <div className="container-xs flex justify-center px-[3.50rem] md:px-[1.25rem]">
          <Img
            // src="images/img_logo_12.png"
            alt="Logotwelve"
            className="h-[1.50rem] w-[12%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
